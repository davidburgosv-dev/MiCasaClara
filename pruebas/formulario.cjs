// Pruebas de lógica con DOM y almacenamiento simulados; sin dependencias.
const {readFileSync}=require('node:fs');
const vm=require('node:vm');
const assert=require('node:assert/strict');
const html=readFileSync('MiCasaClara.html','utf8');
const source=html.match(/<script>([\s\S]*?)<\/script>/)[1];
function setup(){
  const nodes=new Map(), events={}, confirmations=[];
  let focused=null, allowLeave=false, failSave=false;
  function element(id){return {id,value:'',textContent:'',dataset:{},setAttribute(){},focus(){focused=this},classList:{toggle(){}}}}
  const main=element('main');
  Object.defineProperty(main,'innerHTML',{set(markup){
    nodes.clear();
    for(const match of markup.matchAll(/id="([^"]+)"/g))nodes.set(match[1],element(match[1]));
    const heading=markup.match(/<h1\b[^>]*>(.*?)<\/h1>/);
    if(heading){const h=element('heading');h.textContent=heading[1];nodes.set('h1',h)}
  }});
  main.querySelector=selector=>nodes.get(selector)||null;
  const document={querySelector:selector=>selector==='#main'?main:nodes.get(selector.slice(1))||null,
    querySelectorAll:()=>[],getElementById:id=>nodes.get(id)||null};
  const context=vm.createContext({document,window:{scrollTo(){},addEventListener:(name,fn)=>events[name]=fn},
    localStorage:{getItem:()=>null,setItem(){if(failSave)throw Error('storage blocked')}},
    confirm:message=>{confirmations.push(message);return allowLeave},console,Date,Math});
  vm.runInContext(source,context);
  return {run:code=>vm.runInContext(code,context),nodes,events,confirmations,
    focus:()=>focused,allow:value=>allowLeave=value,fail:value=>failSave=value};
}
let checks=0;
function test(name,fn){fn();checks++;console.log('OK '+name)}
test('Avance y retroceso enfocan el encabezado y conservan los datos',()=>{
  const t=setup();t.run("start();form.room='Baño'");
  t.nodes.get('next').onclick();assert.equal(t.run('step'),2);assert.equal(t.focus(),t.nodes.get('h1'));
  t.nodes.get('title').value='Goteo';t.nodes.get('description').value='Agua bajo la llave';
  t.nodes.get('next').onclick();assert.equal(t.run('step'),3);assert.equal(t.focus(),t.nodes.get('h1'));
  t.nodes.get('prev').onclick();assert.equal(t.run('step'),2);assert.equal(t.run('form.title'),'Goteo');assert.equal(t.focus(),t.nodes.get('h1'));
});
test('Los errores de validación conservan el foco en el aviso',()=>{
  const t=setup();t.run('start()');t.nodes.get('next').onclick();assert.equal(t.run('step'),1);assert.equal(t.focus(),t.nodes.get('error'));
});
for(const destination of ['home','records','help'])test('Cancelar salida a '+destination+' conserva texto aún sin capturar',()=>{
  const t=setup();t.run("start();step=2;render()");t.nodes.get('title').value='Sin guardar';
  t.run(`go('${destination}')`);assert.equal(t.run('page'),'wizard');assert.equal(t.run('form.title'),'Sin guardar');assert.equal(t.nodes.get('title').value,'Sin guardar');assert.equal(t.confirmations.length,1);
  t.allow(true);t.run(`go('${destination}')`);assert.equal(t.run('page'),destination);
});
test('Cancelar el primer paso pide confirmación si se seleccionó habitación',()=>{
  const t=setup();t.run("start();form.room='Cocina'");t.nodes.get('prev').onclick();assert.equal(t.run('page'),'wizard');
  t.allow(true);t.nodes.get('prev').onclick();assert.equal(t.run('page'),'home');
});
test('Formulario vacío y navegación al mismo destino no piden confirmación',()=>{
  const t=setup();t.run("start();go('wizard');go('home')");assert.equal(t.confirmations.length,0);assert.equal(t.run('page'),'home');
});
test('Recargar advierte solo cuando hay datos sin guardar',()=>{
  const t=setup();let prevented=false;const event={preventDefault(){prevented=true}};
  t.run('start()');t.events.beforeunload(event);assert.equal(prevented,false);
  t.run("step=2;render()");t.nodes.get('description').value='Dato pendiente';t.events.beforeunload(event);assert.equal(prevented,true);assert.equal(event.returnValue,'');
});
test('Guardar completa el recorrido sin advertencia de descarte',()=>{
  const t=setup();t.run("start();form.room='Baño';form.title='Goteo';form.description='Agua';step=4;render();wire()");
  t.nodes.get('next').onclick();assert.equal(t.run('page'),'success');assert.equal(t.run('records.length'),1);assert.equal(t.confirmations.length,0);assert.equal(t.focus(),t.nodes.get('h1'));
  let prevented=false;t.events.beforeunload({preventDefault(){prevented=true}});assert.equal(prevented,false);
});
test('Fallo al guardar conserva el formulario y la protección de salida',()=>{
  const t=setup();t.fail(true);t.run("start();form.room='Baño';step=4;render();wire()");t.nodes.get('next').onclick();
  assert.equal(t.run('page'),'wizard');assert.equal(t.run('records.length'),0);t.run("go('home')");assert.equal(t.run('page'),'wizard');
});
assert.equal(html.match(/<style>([\s\S]*?)<\/style>/)[1].length>0,true);
console.log(`${checks} comprobaciones aprobadas. DOM simulado; no sustituye pruebas en navegador.`);
