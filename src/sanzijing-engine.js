class SanzijingEngine{
  constructor(data){this.data=data;this.sections=[...(data.sections||[])];this.map=new Map(this.sections.map(x=>[x.id,x]));}
  getMeta(){return this.data.meta;}
  list(){return this.sections.slice();}
  get(id){return this.map.get(id)||null;}
  indexOf(id){return this.sections.findIndex(x=>x.id===id);}
  getNext(id){const i=this.indexOf(id);return i>=0&&i<this.sections.length-1?this.sections[i+1]:null;}
  getPrevious(id){const i=this.indexOf(id);return i>0?this.sections[i-1]:null;}
  search(q){
    const s=String(q||"").trim().toLowerCase();if(!s)return this.list();
    return this.sections.filter(x=>[x.title,...x.original,x.explanation,x.note,...(x.terms||[]).flat()].join(" ").toLowerCase().includes(s));
  }
}
async function loadSanzijingEngine(url="./data/sanzijing.json"){
  const r=await fetch(url,{cache:"no-cache"});if(!r.ok)throw new Error("Unable to load 三字经 data");
  return new SanzijingEngine(await r.json());
}
if(typeof window!=="undefined"){window.SanzijingEngine=SanzijingEngine;window.loadSanzijingEngine=loadSanzijingEngine;}
if(typeof module!=="undefined"&&module.exports)module.exports={SanzijingEngine,loadSanzijingEngine};