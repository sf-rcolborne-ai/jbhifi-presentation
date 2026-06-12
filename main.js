// ── PASS 1: verbatim extraction from jbhifi-exec-v3.html lines 1476–1720
// ── PASS 2: renderer functions added below (Step 6)

/* ── DECK NAV ── */
const deck=document.getElementById("deck");
let slides, ndots, scnt, cur=0;

function initNav(){
  slides=document.querySelectorAll(".slide");
  ndots=document.getElementById("ndots");
  scnt=document.getElementById("scnt");
  ndots.innerHTML='';
  slides.forEach((_,i)=>{
    const d=document.createElement("div");
    d.className="nd"+(i===0?" on":"");
    d.onclick=()=>goTo(i);
    ndots.appendChild(d);
  });
  scnt.textContent="1 / "+slides.length;
  document.addEventListener("keydown",e=>{
    if(document.querySelector('.drawer.open'))return;
    if(e.key==="ArrowRight"||e.key==="ArrowDown")nav(1);
    if(e.key==="ArrowLeft"||e.key==="ArrowUp")nav(-1);
  });
  deck.addEventListener("scroll",()=>{
    const i=Math.round(deck.scrollLeft/window.innerWidth);
    if(i!==cur){cur=i;document.querySelectorAll(".nd").forEach((d,j)=>d.classList.toggle("on",j===cur));scnt.textContent=(cur+1)+" / "+slides.length;}
  });
}

function goTo(n){
  slides=document.querySelectorAll(".slide");
  cur=Math.max(0,Math.min(n,slides.length-1));
  deck.scrollTo({left:cur*window.innerWidth,behavior:"smooth"});
  document.querySelectorAll(".nd").forEach((d,i)=>d.classList.toggle("on",i===cur));
  scnt.textContent=(cur+1)+" / "+slides.length;
}
function nav(d){goTo(cur+d);}

/* ── DRAG-DROP (S7 grid) ── */
let dragged=null;
function drag(e){dragged=e.target;e.dataTransfer.effectAllowed="move";e.dataTransfer.setData("text",dragged.id||"c");}
function ev(e){e.preventDefault();e.dataTransfer.dropEffect="move";}
const qClass={s:"ch-s",v:"ch-v",m:"ch-m",d:"ch-d"};

function drop(e,qid){
  e.preventDefault();if(!dragged)return;
  const rawId=dragged.id||("d"+Date.now());
  const id=rawId.startsWith("p-")?rawId.slice(2):rawId;
  const label=dragged.dataset.label||dragged.textContent.trim();
  const qtype=dragged.dataset.q||"s";
  const q=document.getElementById(qid);
  document.querySelectorAll(".placed-"+id).forEach(el=>el.remove());
  const chip=document.createElement("span");
  chip.className="opp-chip "+(qClass[qtype]||"ch-s")+" placed-"+id;
  chip.draggable=true;chip.id="p-"+id;
  chip.dataset.label=label;chip.dataset.q=qtype;
  chip.ondragstart=drag;
  const labelSpan=document.createElement("span");labelSpan.textContent=label;
  const removeBtn=document.createElement("button");
  removeBtn.className="chip-remove";removeBtn.textContent="×";removeBtn.title="Remove";
  removeBtn.onclick=(e)=>{
    e.stopPropagation();
    chip.remove();
    const orig=document.getElementById(id);if(orig)orig.classList.remove("done");
  };
  chip.append(labelSpan,removeBtn);
  q.appendChild(chip);
  const orig=document.getElementById(id);if(orig)orig.classList.add("done");
  dragged=null;
  saveMatrixState();
}

/* ── PRIORITY LIST (S7b) ── */
function makePriorityItem(label){
  const item=document.createElement("div");
  item.className="priority-item";
  item.dataset.label=label;
  item.draggable=true;
  item.style.cssText="display:flex;align-items:center;gap:10px;padding:10px 12px;background:#fff;border:1px solid #E5E5E2;border-radius:6px;cursor:grab;transition:border-color 0.15s, box-shadow 0.15s;user-select:none;margin-bottom:6px;position:relative;";
  item.innerHTML=`<span class="p-num" style="font-family:'Comfortaa',sans-serif;font-size:18px;font-weight:700;color:#FFEC0E;width:24px;flex-shrink:0;line-height:1;">0</span><span style="font-size:13px;font-weight:500;color:#0A0A0A;flex:1;">${label}</span><span style="font-size:11px;color:#C0C0BC;margin-right:2px;cursor:grab;" title="Drag to reorder">&#8597;</span><button onclick="removePriorityItem(this)" style="background:none;border:none;cursor:pointer;color:#9A9A94;font-size:16px;padding:0 3px;line-height:1;" onmouseover="this.style.color='#C8001A'" onmouseout="this.style.color='#9A9A94'" title="Remove">&times;</button>`;
  item.addEventListener("mouseover",()=>item.style.borderColor="#FFEC0E");
  item.addEventListener("mouseout",()=>{if(item!==draggedPriority)item.style.borderColor="#E5E5E2";});
  item.addEventListener("dragstart",e=>{
    draggedPriority=item;
    dragged=item;
    e.dataTransfer.effectAllowed="move";
    e.dataTransfer.setData("text","priority-reorder");
    setTimeout(()=>item.style.opacity="0.4",0);
  });
  item.addEventListener("dragend",()=>{
    item.style.opacity="1";
    item.style.borderColor="#E5E5E2";
    draggedPriority=null;
    clearDropIndicator();
    renumberPriorities();
  });
  item.addEventListener("dragover",e=>{
    e.preventDefault();e.stopPropagation();
    if(!draggedPriority||draggedPriority===item)return;
    const list=document.getElementById("priority-list");
    const rect=item.getBoundingClientRect();
    const mid=rect.top+rect.height/2;
    clearDropIndicator();
    if(e.clientY<mid){list.insertBefore(getDropIndicator(),item);}
    else{item.after(getDropIndicator());}
  });
  item.addEventListener("drop",e=>{
    e.preventDefault();e.stopPropagation();
    if(!draggedPriority||draggedPriority===item)return;
    const list=document.getElementById("priority-list");
    const indicator=document.getElementById("drop-indicator");
    if(indicator){list.insertBefore(draggedPriority,indicator);clearDropIndicator();}
    else{
      const rect=item.getBoundingClientRect();
      if(e.clientY<rect.top+rect.height/2)list.insertBefore(draggedPriority,item);
      else item.after(draggedPriority);
    }
    renumberPriorities();dragged=null;
  });
  return item;
}

let draggedPriority=null;

function getDropIndicator(){
  let ind=document.getElementById("drop-indicator");
  if(!ind){ind=document.createElement("div");ind.id="drop-indicator";ind.style.cssText="height:3px;background:#FFEC0E;border-radius:2px;margin:2px 0;pointer-events:none;";}
  return ind;
}
function clearDropIndicator(){const ind=document.getElementById("drop-indicator");if(ind)ind.remove();}

function dropPriority(e){
  e.preventDefault();
  if(draggedPriority){clearDropIndicator();renumberPriorities();dragged=null;return;}
  if(!dragged)return;
  const label=dragged.dataset.label||dragged.textContent.trim();
  const list=document.getElementById("priority-list");
  const existing=[...list.querySelectorAll(".priority-item")].map(el=>el.dataset.label);
  if(existing.includes(label)){dragged=null;return;}
  const empty=document.getElementById("priority-empty");if(empty)empty.remove();
  clearDropIndicator();
  const item=makePriorityItem(label);
  list.appendChild(item);
  renumberPriorities();
  dragged=null;
  savePriorityState();
}

function removePriorityItem(btn){
  btn.closest(".priority-item").remove();renumberPriorities();
  const list=document.getElementById("priority-list");
  if(!list.querySelector(".priority-item")){
    const h=document.createElement("div");h.id="priority-empty";
    h.style.cssText="font-size:13px;color:#9A9A94;font-style:italic;text-align:center;padding:20px 0;";
    h.textContent="Drop your game changers here and arrange in priority order";list.appendChild(h);
  }
  savePriorityState();
}
function renumberPriorities(){
  document.querySelectorAll("#priority-list .priority-item").forEach((item,i)=>{
    const n=item.querySelector("span:first-child");if(n)n.textContent=i+1;
  });
}
function clearPriorities(){
  const list=document.getElementById("priority-list");list.innerHTML="";
  const h=document.createElement("div");h.id="priority-empty";
  h.style.cssText="font-size:13px;color:#9A9A94;font-style:italic;text-align:center;padding:20px 0;";
  h.textContent="Drop your game changers here and arrange in priority order";list.appendChild(h);
  savePriorityState();
}

function refreshGameChangers(){
  const gcSource=document.getElementById("gc-source");
  const qtr=document.getElementById("q-tr");
  if(!qtr||!gcSource)return;
  const chips=[...qtr.querySelectorAll(".opp-chip")];
  gcSource.innerHTML="";
  if(chips.length===0){
    const msg=document.createElement("div");msg.id="gc-empty-msg";
    msg.style.cssText="font-size:13px;color:#9A9A94;font-style:italic;padding:16px 0;text-align:center;";
    msg.textContent="No game changers yet — go back and place items in the game changers quadrant.";
    gcSource.appendChild(msg);return;
  }
  chips.forEach(chip=>{
    const btn=document.createElement("button");
    btn.className="bl-chip";btn.draggable=true;
    btn.dataset.label=chip.dataset.label||chip.textContent.trim();
    btn.dataset.q=chip.dataset.q||"s";
    btn.textContent=chip.dataset.label||chip.textContent.trim();
    btn.ondragstart=drag;
    btn.style.cssText="display:block;width:100%;padding:9px 11px;border-radius:4px;text-align:left;font-size:13px;font-weight:600;color:#028703;background:#EDFAF0;border:1px solid #A8D8B0;cursor:grab;margin-bottom:5px;font-family:'DM Sans',sans-serif;";
    gcSource.appendChild(btn);
  });
}

function resetBoard(){
  ["q-tl","q-tr","q-bl","q-br"].forEach(qid=>{
    const q=document.getElementById(qid);if(q)q.querySelectorAll(".opp-chip").forEach(c=>c.remove());
  });
  document.querySelectorAll(".bl-chip").forEach(c=>c.classList.remove("done"));
  saveMatrixState();
}
function resetAll(){resetBoard();}

/* ── S3 TOGGLE ── */
function initTnToggle(){
  const was=document.querySelector(".tn-was");
  const now=document.querySelector(".tn-now");
  if(!was||!now)return;
  function activate(el,other){
    if(el.classList.contains("tn-active")){
      el.classList.remove("tn-active","tn-inactive");other.classList.remove("tn-active","tn-inactive");
    } else {
      el.classList.add("tn-active");el.classList.remove("tn-inactive");
      other.classList.add("tn-inactive");other.classList.remove("tn-active");
    }
  }
  was.addEventListener("click",()=>activate(was,now));
  now.addEventListener("click",()=>activate(now,was));
}

/* ── S5 HORIZON SPOTLIGHT ── */
let activeHz=null;
function toggleHz(badge,n){
  const cols=document.querySelectorAll(".rec-col");
  const badges=document.querySelectorAll(".hz-badge");
  if(activeHz===n){
    activeHz=null;badges.forEach(b=>b.classList.remove("hz-active"));
    cols.forEach(c=>c.classList.remove("hz-dim","hz-spotlight"));
  } else {
    activeHz=n;badges.forEach(b=>b.classList.remove("hz-active"));badge.classList.add("hz-active");
    cols.forEach(c=>{
      const col=parseInt(c.dataset.col);
      if(col===n){c.classList.add("hz-spotlight");c.classList.remove("hz-dim");}
      else{c.classList.add("hz-dim");c.classList.remove("hz-spotlight");}
    });
  }
}

/* ── CUSTOM CHIP INPUT (S7) ── */
let customCount=0;
function addCustomChip(){
  const input=document.getElementById("bl-custom-input");
  const val=(input.value||"").trim();if(!val)return;
  customCount++;const id="custom-"+customCount;
  const btn=document.createElement("button");
  btn.className="bl-chip";btn.draggable=true;btn.id=id;
  btn.dataset.label=val;btn.dataset.q="s";
  btn.textContent=val+" ✦";btn.ondragstart=drag;
  document.getElementById("bl-chips").appendChild(btn);
  input.value="";
  document.getElementById("bl-chips").scrollTop=99999;
  saveMatrixState();
}

/* ── WORKSHOP STATE — localStorage persistence & CSV export ── */
function saveMatrixState(){
  const state={tl:[],tr:[],bl:[],br:[],custom:[],customCount};
  ['tl','tr','bl','br'].forEach(q=>{
    document.querySelectorAll(`#q-${q} .opp-chip`).forEach(c=>
      state[q].push({id:c.id,label:c.dataset.label,qtype:c.dataset.q}));
  });
  document.querySelectorAll('#bl-chips .bl-chip').forEach(c=>{
    if(c.id&&c.id.startsWith('custom-'))
      state.custom.push({id:c.id,label:c.dataset.label});
  });
  localStorage.setItem('jbhifi_matrix',JSON.stringify(state));
}

function savePriorityState(){
  const items=[];
  document.querySelectorAll('#priority-list .priority-item').forEach((item,i)=>
    items.push({rank:i+1,label:item.dataset.label}));
  localStorage.setItem('jbhifi_priorities',JSON.stringify(items));
}

function restoreMatrixState(){
  const raw=localStorage.getItem('jbhifi_matrix');
  if(!raw)return;
  const state=JSON.parse(raw);
  customCount=state.customCount||0;
  (state.custom||[]).forEach(c=>{
    const btn=document.createElement('button');
    btn.className='bl-chip';btn.draggable=true;btn.id=c.id;
    btn.dataset.label=c.label;btn.dataset.q='s';
    btn.textContent=c.label+' ✶';btn.ondragstart=drag;
    document.getElementById('bl-chips').appendChild(btn);
  });
  ['tl','tr','bl','br'].forEach(q=>{
    (state[q]||[]).forEach(c=>{
      const span=document.createElement('span');
      span.className=`opp-chip ${qClass[c.qtype]||'ch-s'} placed-${c.id}`;
      span.id='p-'+c.id;span.dataset.label=c.label;span.dataset.q=c.qtype||'s';
      span.draggable=true;span.ondragstart=drag;
      const labelSpan=document.createElement('span');labelSpan.textContent=c.label;
      const removeBtn=document.createElement('button');
      removeBtn.className='chip-remove';removeBtn.textContent='×';removeBtn.title='Remove';
      removeBtn.onclick=(e)=>{
        e.stopPropagation();span.remove();
        const orig=document.getElementById(c.id);if(orig)orig.classList.remove('done');
        saveMatrixState();
      };
      span.append(labelSpan,removeBtn);
      document.getElementById(`q-${q}`).appendChild(span);
      const src=document.getElementById(c.id);if(src)src.classList.add('done');
    });
  });
}

function restorePriorityState(){
  const raw=localStorage.getItem('jbhifi_priorities');
  if(!raw)return;
  const items=JSON.parse(raw);
  if(!items.length)return;
  const empty=document.getElementById('priority-empty');if(empty)empty.remove();
  items.forEach(item=>{
    document.getElementById('priority-list').appendChild(makePriorityItem(item.label));
  });
  renumberPriorities();
}

function downloadCSV(filename,rows){
  const csv=rows.map(r=>r.map(v=>`"${String(v).replace(/"/g,'""')}"`).join(',')).join('\n');
  const a=document.createElement('a');
  a.href=URL.createObjectURL(new Blob([csv],{type:'text/csv'}));
  a.download=filename;a.click();URL.revokeObjectURL(a.href);
}

function exportMatrixCSV(){
  const labels={tl:'Quick fixes',tr:'Game changers',bl:'Reassess',br:'Strategic future'};
  const rows=[['Quadrant','Item']];
  ['tr','tl','br','bl'].forEach(q=>{
    document.querySelectorAll(`#q-${q} .opp-chip`).forEach(c=>
      rows.push([labels[q],c.dataset.label]));
  });
  downloadCSV('urgency-matrix.csv',rows);
}

function exportPrioritiesCSV(){
  const rows=[['Rank','Priority']];
  document.querySelectorAll('#priority-list .priority-item').forEach((item,i)=>
    rows.push([i+1,item.dataset.label]));
  downloadCSV('priorities.csv',rows);
}

/* ── DRAWER SYSTEM ── */
function openDrawer(id){
  closeDrawer(true);
  const d=document.getElementById(id);
  const b=document.getElementById('drawer-backdrop');
  if(!d)return;
  d.classList.add('open');
  b.classList.add('open');
  document.addEventListener('keydown',drawerEscHandler);
}
function closeDrawer(silent){
  document.querySelectorAll('.drawer.open').forEach(d=>d.classList.remove('open'));
  const b=document.getElementById('drawer-backdrop');
  if(b)b.classList.remove('open');
  document.removeEventListener('keydown',drawerEscHandler);
}
function drawerEscHandler(e){
  if(e.key==='Escape'){closeDrawer();e.stopPropagation();}
}

/* ═══════════════════════════════════════════════════════
   PASS 2 — RENDERER FUNCTIONS
   Reads from DECK_CONFIG (config.js) and builds all HTML.
   Content edits never touch this file.
═══════════════════════════════════════════════════════ */

/* ── VALIDATION ── */
function validateConfig(){
  const ids=DECK_CONFIG.slides.map(s=>s.id);
  const dupes=ids.filter((id,i)=>ids.indexOf(id)!==i);
  if(dupes.length)console.error('Duplicate slide IDs:',dupes);
  const drawerCount=Object.keys(DECK_CONFIG.drawers).length;
  if(drawerCount!==22)console.warn('Expected 22 drawers, found',drawerCount);
}

/* ── ENTRY POINT ── */
function renderDeck(){
  validateConfig();
  const deckEl=document.getElementById('deck');

  DECK_CONFIG.slides.forEach((slide,i)=>{
    if(slide.hidden)return;
    deckEl.appendChild(renderSlide(slide,i));
  });

  const backdrop=document.createElement('div');
  backdrop.id='drawer-backdrop';
  backdrop.className='drawer-backdrop';
  backdrop.onclick=closeDrawer;
  document.body.appendChild(backdrop);

  Object.entries(DECK_CONFIG.drawers).forEach(([id,drawer])=>{
    document.body.appendChild(renderDrawer(id,drawer));
  });

  initNav();
  initTnToggle();

  // Wire S7 custom input Enter key
  const inp=document.getElementById("bl-custom-input");
  if(inp){inp.addEventListener("keydown",function(e){e.stopPropagation();if(e.key==="Enter"){e.preventDefault();addCustomChip();}});}

  // Restore workshop state from localStorage
  restoreMatrixState();
  restorePriorityState();
}

/* ── SLIDE DISPATCH ── */
function renderSlide(config,index){
  const templates={
    title:         renderTitleSlide,
    assessment:    renderAssessmentSlide,
    results:       renderResultsSlide,
    agenda:        renderAgendaSlide,
    cover:         renderCoverSlide,
    findings:      renderFindingsSlide,
    inflection:    renderInflectionSlide,
    flywheel:      renderFlywheelSlide,
    horizons:      renderHorizonsSlide,
    horizons_deep: renderHorizonsDeepSlide,
    workshop:      renderWorkshopSlide,
    matrix:        renderMatrixSlide,
    priorities:    renderPrioritiesSlide,
    north_star:    renderNorthStarSlide,
    placeholder:   renderPlaceholderSlide,
    thankyou:      renderThankyouSlide,
  };
  const fn=templates[config.type];
  if(!fn){console.error('Unknown slide type:',config.type);return document.createElement('div');}
  return fn(config,index);
}

/* ── SHARED HELPERS ── */
function el(tag,attrs={},html=''){
  const e=document.createElement(tag);
  Object.entries(attrs).forEach(([k,v])=>{if(k==='class')e.className=v;else e.setAttribute(k,v);});
  if(html)e.innerHTML=html;
  return e;
}

function slideShell(config){
  const slide=el('div',{class:'slide',id:config.id});
  const topbar=el('div',{class:'topbar'});
  const logoPair=el('div',{class:'logo-pair'});
  const clientImg=el('img',{src:DECK_CONFIG.meta.logos.client,alt:DECK_CONFIG.meta.client});
  const sep=el('div',{class:'logo-sep'});
  const partnerImg=el('img',{src:DECK_CONFIG.meta.logos.partner,alt:DECK_CONFIG.meta.partner});
  logoPair.append(clientImg,sep,partnerImg);
  const label=el('div',{class:'slide-label'},config.topbarLabel||'Confidential · Executive Briefing · 2026');
  topbar.append(logoPair,label);
  slide.appendChild(topbar);
  return slide;
}

function slideInnerHead(config){
  const head=el('div',{class:'slide-head'});
  const left=el('div');
  if(config.kicker)left.appendChild(el('div',{class:'slide-kicker'},config.kicker));
  const titleEl=el('div',{class:'slide-title'});
  titleEl.innerHTML=config.title||'';
  left.appendChild(titleEl);
  head.appendChild(left);
  if(config.slideN!==false){
    const n=el('div',{class:'slide-n'},config.slideN||'');
    head.appendChild(n);
  }
  return head;
}

/* ── DRAWER CONTENT BLOCK RENDERER ── */
function renderContentBlock(block){
  switch(block.type){
    case 'paragraph':
      return el('p',{},block.text);
    case 'stat-row':{
      const row=el('div',{class:'drawer-stat-row'});
      block.stats.forEach(s=>{
        const stat=el('div',{class:'drawer-stat'});
        stat.appendChild(el('div',{class:'drawer-stat-val'},s.value));
        stat.appendChild(el('div',{class:'drawer-stat-label'},s.label));
        row.appendChild(stat);
      });
      return row;
    }
    case 'bullet-list':{
      const wrap=el('div',{class:'drawer-bullets'});
      block.items.forEach(item=>wrap.appendChild(el('div',{class:'drawer-bullet'},item)));
      return wrap;
    }
    case 'image':{
      const wrap=el('div');
      const img=el('img',{class:'drawer-img',src:block.src,alt:block.alt||''});
      wrap.appendChild(img);
      if(block.caption)wrap.appendChild(el('p',{},block.caption));
      return wrap;
    }
    case 'video':{
      const wrap=el('div',{class:'drawer-video-wrap'});
      if((block.videoType||block.type)==='local'){
        const v=el('video',{src:block.url,controls:'true',style:'width:100%;border-radius:6px;'});
        wrap.appendChild(v);
      } else {
        const iframe=el('iframe',{src:block.url,frameborder:'0',allowfullscreen:'true',
          style:'width:100%;aspect-ratio:16/9;border-radius:6px;border:none;'});
        wrap.appendChild(iframe);
      }
      return wrap;
    }
    case 'before-after':{
      const row=el('div',{style:'display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:14px 0;'});
      [block.before,block.after].forEach((side,i)=>{
        const card=el('div',{style:`padding:12px;border-radius:6px;border:1px solid ${i===0?'var(--pain-red)':'var(--jb-green)'};background:${i===0?'#FFF5F5':'#F4FBF4'};`});
        card.appendChild(el('div',{style:`font-size:10px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:${i===0?'var(--pain-red)':'var(--jb-green)'};margin-bottom:6px;`},side.label));
        if(side.value)card.appendChild(el('div',{style:'font-family:\'Comfortaa\',sans-serif;font-size:20px;font-weight:700;color:var(--black);margin-bottom:4px;'},side.value));
        card.appendChild(el('div',{style:'font-size:12px;color:var(--text-2);'},side.desc));
        row.appendChild(card);
      });
      return row;
    }
    case 'link':
      return el('a',{class:'drawer-link',href:block.href,target:'_blank'},block.text);
    default:
      console.warn('Unknown content block type:',block.type);
      return document.createElement('span');
  }
}

/* ── DRAWER RENDERER ── */
function renderDrawer(id,config){
  const drawer=el('div',{class:'drawer',id:id});

  // Head
  const head=el('div',{class:'drawer-head'});
  const headLeft=el('div',{class:'drawer-head-left'});
  if(config.kicker)headLeft.appendChild(el('div',{class:'drawer-kicker'},config.kicker));
  headLeft.appendChild(el('div',{class:'drawer-title'},config.title));
  if(config.subtitle)headLeft.appendChild(el('div',{class:'drawer-subtitle'},config.subtitle));
  const closeBtn=el('div',{class:'drawer-close'},'×');
  closeBtn.onclick=closeDrawer;
  head.append(headLeft,closeBtn);
  drawer.appendChild(head);

  // Body
  const body=el('div',{class:'drawer-body'});

  // Left — image or video or HTML panel
  const imgCol=el('div',{class:'drawer-img-col'});
  if(config.imageStyle)imgCol.style.cssText=config.imageStyle;
  if(config.video){
    if((config.video.type||config.video.videoType)==='local'){
      imgCol.appendChild(el('video',{src:config.video.url,controls:'true',style:'width:100%;max-height:100%;border-radius:6px;'}));
    } else {
      imgCol.appendChild(el('iframe',{src:config.video.url,frameborder:'0',allowfullscreen:'true',
        style:'width:100%;aspect-ratio:16/9;border-radius:6px;border:none;'}));
    }
  } else if(config.image){
    imgCol.appendChild(el('img',{src:config.image.src,alt:config.image.alt||config.title}));
  } else if(config.imageHtml){
    imgCol.innerHTML=config.imageHtml;
  }
  body.appendChild(imgCol);

  // Right — scrollable text
  const textCol=el('div',{class:'drawer-text-col'});
  (config.sections||[]).forEach(section=>{
    const sec=el('div',{class:'drawer-section'});
    if(section.label)sec.appendChild(el('div',{class:'drawer-section-label'},section.label));
    (section.content||[]).forEach(block=>sec.appendChild(renderContentBlock(block)));
    textCol.appendChild(sec);
  });
  body.appendChild(textCol);

  drawer.appendChild(body);
  return drawer;
}

/* ════════════════════════════
   SLIDE RENDERERS
════════════════════════════ */

/* S0 — TITLE */
function renderTitleSlide(config){
  const slide=el('div',{class:'slide',id:config.id});
  const meta=DECK_CONFIG.meta;

  const topbar=el('div',{class:'topbar'});
  const logoPair=el('div',{class:'logo-pair'});
  logoPair.innerHTML=`<img src="${meta.logos.client}" alt="${meta.client}"><div class="logo-sep"></div><img src="${meta.logos.partner}" alt="${meta.partner}">`;
  topbar.append(logoPair,el('div',{class:'slide-label'},'Confidential · Executive Briefing · 2026'));
  slide.appendChild(topbar);

  // Full-width image band (optional — set imagePath on the s0 slide config)
  if(config.imagePath){
    const imgBand=el('div',{style:'width:100%;height:220px;overflow:hidden;flex-shrink:0;'});
    const img=document.createElement('img');
    img.src=config.imagePath;img.alt='';
    img.style.cssText='width:100%;height:100%;object-fit:cover;object-position:center;display:block;';
    imgBand.appendChild(img);
    slide.appendChild(imgBand);
  }

  const body=el('div',{class:'body',style:'display:flex;align-items:center;justify-content:center;'});
  body.innerHTML=`
    <div style="text-align:center;display:flex;flex-direction:column;align-items:center;">
      <div style="display:flex;align-items:center;justify-content:center;gap:36px;margin-bottom:44px;">
        <img src="${meta.logos.client}" alt="${meta.client}" style="height:60px;width:auto;object-fit:contain;">
        <div style="width:1px;height:52px;background:var(--rule);"></div>
        <img src="${meta.logos.partner}" alt="${meta.partner}" style="height:44px;width:auto;object-fit:contain;">
      </div>
      <div style="width:72px;height:4px;background:var(--jb-yellow);border-radius:2px;margin-bottom:28px;"></div>
      <div style="font-family:'Comfortaa',sans-serif;font-size:clamp(24px,3vw,42px);font-weight:700;color:var(--black);line-height:1.15;letter-spacing:-0.02em;margin-bottom:16px;max-width:720px;">
        ${config.title||`${meta.client}<br><span style="color:var(--text-2);font-size:0.75em;">× ${meta.partner}</span>`}
      </div>
      <div style="font-size:18px;font-weight:400;color:var(--text-2);margin-bottom:8px;">${config.subtitle}</div>
      <div style="width:72px;height:4px;background:var(--jb-yellow);border-radius:2px;margin-bottom:36px;margin-top:20px;"></div>
      <div style="display:flex;gap:28px;align-items:center;padding:18px 36px;border:1px solid var(--rule);border-radius:var(--radius);background:var(--off-white);">
        ${config.metaItems.map(item=>`
          <div style="text-align:left;">
            <div style="font-size:10px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:var(--text-3);margin-bottom:4px;">${item.label}</div>
            <div style="font-size:14px;font-weight:600;color:var(--black);">${item.value}</div>
          </div>
        `).join('<div style="width:1px;height:32px;background:var(--rule);"></div>')}
      </div>
      <div style="margin-top:36px;padding:22px 36px;border:1px solid var(--rule);border-radius:var(--radius);max-width:620px;border-left:4px solid var(--jb-yellow);">
        <div style="font-size:11px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:var(--text-3);margin-bottom:10px;">The brief</div>
        <div style="font-family:'Comfortaa',sans-serif;font-size:20px;font-weight:600;color:var(--black);line-height:1.5;">${meta.challenge}</div>
      </div>
      <div style="margin-top:28px;display:flex;align-items:center;gap:28px;padding-top:20px;border-top:1px solid var(--rule);">
        <div style="text-align:left;">
          <div style="font-size:10px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:var(--text-3);margin-bottom:4px;">Confidential</div>
          <div style="font-size:14px;font-weight:600;color:var(--black);">${meta.partner} &amp; ${meta.client}</div>
        </div>
      </div>
    </div>
  `;
  // Assessment toggle button
  const assessVisible = DECK_CONFIG.slides.some(s=>s.id==='s-assess' && !s.hidden);
  const toggleBtn = el('button',{
    id:'assess-toggle',
    class:'assess-toggle-btn'+(assessVisible?' active':''),
    onclick:'toggleAssessmentSlides()'
  });
  toggleBtn.textContent = assessVisible ? '📋 Hide assessment slides' : '📋 Pre-workshop assessment';
  body.style.position='relative';
  body.appendChild(toggleBtn);

  slide.appendChild(body);
  return slide;
}

/* S0b — AGENDA */
function renderAgendaSlide(config){
  const slide=slideShell(config);
  const body=el('div',{class:'body'});
  const inner=el('div',{class:'slide-inner'});
  inner.appendChild(slideInnerHead(config));
  const content=el('div',{class:'slide-content'});
  content.style.cssText='padding:28px 56px;';

  function agendaCard(item, n){
    return `
      <div style="padding:18px 20px;border:1px solid var(--rule);border-radius:var(--radius);border-left:3px solid ${item.accent};${item.bg?'background:'+item.bg+';':''}">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:6px;">
          <div style="font-family:'Comfortaa',sans-serif;font-size:24px;font-weight:700;color:var(--rule);width:28px;flex-shrink:0;">${n}</div>
          <div style="font-size:15px;font-weight:600;color:var(--black);">${item.title}</div>
        </div>
        <div style="font-size:13px;color:var(--text-2);line-height:1.55;padding-left:40px;">${item.sub}</div>
      </div>
    `;
  }

  const colLabelStyle='font-size:11px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;color:var(--text-3);margin-bottom:10px;';
  content.innerHTML=`
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;height:100%;">
      <div style="display:flex;flex-direction:column;gap:10px;">
        ${config.leftLabel?`<div style="${colLabelStyle}">${config.leftLabel}</div>`:''}
        ${(config.leftItems||[]).map((item,i)=>agendaCard(item,i+1)).join('')}
      </div>
      <div style="display:flex;flex-direction:column;gap:10px;">
        ${config.rightLabel?`<div style="${colLabelStyle}">${config.rightLabel}</div>`:''}
        ${(config.rightItems||[]).map((item,i)=>agendaCard(item,(config.leftItems||[]).length+i+1)).join('')}
      </div>
    </div>
  `;
  inner.appendChild(content);
  body.appendChild(inner);
  slide.appendChild(body);
  return slide;
}

/* S1 — COVER */
function renderCoverSlide(config){
  const slide=slideShell(config);
  const meta=DECK_CONFIG.meta;
  const body=el('div',{class:'body'});
  body.innerHTML=`
    <div class="cover-left">
      <div class="cover-eyebrow">${config.eyebrow}</div>
      <div class="cover-headline">${config.headline}</div>
      <div class="cover-challenge">
        <div class="cover-challenge-label">The brief</div>
        <div class="cover-challenge-text">${meta.challenge}</div>
      </div>
    </div>
    <div class="cover-right">
      <div class="cover-goals">
        ${config.goals.map((g,i)=>`
          <div class="goal-row">
            <div class="goal-num">${i+1}</div>
            <div>
              <div class="goal-title">${g.title}</div>
              <div class="goal-sub">${g.sub}</div>
            </div>
          </div>
        `).join('')}
      </div>
      <div class="cover-meta">
        <span>${meta.audience}</span>
        <span>${meta.date}</span>
        <span>Confidential</span>
      </div>
    </div>
  `;
  slide.appendChild(body);
  return slide;
}

/* S2 — FINDINGS */
function renderFindingsSlide(config){
  const slide=slideShell(config);
  const body=el('div',{class:'body'});
  const inner=el('div',{class:'slide-inner'});
  inner.appendChild(slideInnerHead(config));
  const content=el('div',{class:'slide-content'});
  content.innerHTML=`
    <div class="metric-strip">
      ${config.metrics.map(m=>`
        <div class="metric-tile">
          <div class="mv">${m.value}</div>
          <div class="ml">${m.label}</div>
          <div class="ms">${m.source}</div>
        </div>
      `).join('')}
    </div>
    <div class="pain-cols">
      ${config.painColumns.map(col=>`
        <div class="pain-col">
          <div class="pain-col-head">
            <div class="col-mark" style="background:${col.colour};"></div>
            ${col.label}
          </div>
          <div class="pain-col-body">
            ${col.items.map(item=>`<div class="pi">${item}</div>`).join('')}
          </div>
        </div>
      `).join('')}
    </div>
    ${config.icebreakerDrawerId ? `
    <div style="position:absolute;bottom:32px;right:40px;">
      <button class="callout-btn" onclick="openDrawer('${config.icebreakerDrawerId}')" style="background:var(--jb-yellow);border:none;border-radius:var(--radius);padding:10px 22px;font-family:'DM Sans',sans-serif;font-size:13px;font-weight:600;color:var(--black);cursor:pointer;letter-spacing:0.02em;">Icebreaker</button>
    </div>` : ''}
  `;
  inner.appendChild(content);
  body.appendChild(inner);
  slide.appendChild(body);
  return slide;
}

/* S4b — WORKSHOP EXERCISE */
function renderWorkshopSlide(config){
  const slide=slideShell(config);
  const body=el('div',{class:'body'});
  const inner=el('div',{class:'slide-inner'});
  inner.appendChild(slideInnerHead(config));
  const content=el('div',{class:'slide-content'});
  content.style.cssText='padding:20px 40px;';
  content.innerHTML=`
    <div style="display:grid;grid-template-columns:2fr 3fr;gap:28px;height:100%;">
      <div style="display:flex;flex-direction:column;gap:14px;overflow-y:auto;min-height:0;">
        <div>
          ${config.brief.map(p=>`<p style="font-size:13px;color:var(--text-2);line-height:1.65;margin-bottom:8px;">${p}</p>`).join('')}
        </div>
        <div style="background:var(--off-white);border-radius:var(--radius);padding:14px 16px;flex-shrink:0;">
          <div style="font-size:10px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;color:var(--text-3);margin-bottom:10px;">How to approach it</div>
          ${config.steps.map((s,i)=>`
            <div style="display:flex;gap:10px;align-items:flex-start;margin-bottom:8px;">
              <div style="font-family:'Comfortaa',sans-serif;font-weight:700;color:var(--black);background:var(--jb-yellow);border-radius:50%;width:22px;height:22px;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:11px;">${i+1}</div>
              <div style="font-size:12px;color:var(--text-2);line-height:1.55;padding-top:3px;">${s}</div>
            </div>
          `).join('')}
        </div>
        ${config.shareback?`
        <div style="background:var(--off-white);border-radius:var(--radius);padding:14px 16px;flex-shrink:0;">
          <div style="font-size:10px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;color:var(--text-3);margin-bottom:8px;">${config.shareback.label}</div>
          <div style="font-size:12px;color:var(--text-2);margin-bottom:10px;">${config.shareback.prompt}</div>
          <div style="display:flex;flex-wrap:wrap;gap:6px;">
            ${config.shareback.pills.map(p=>`<span style="background:var(--white);border:1px solid var(--rule);border-radius:999px;font-size:12px;color:var(--text-2);padding:5px 14px;white-space:nowrap;">${p}</span>`).join('')}
          </div>
        </div>`:''}
        ${config.exampleDrawerId?`
        <div style="margin-top:auto;padding-top:8px;">
          <button onclick="openDrawer('${config.exampleDrawerId}')" style="padding:9px 18px;border:1px solid var(--jb-green);background:var(--white);border-radius:var(--radius);font-family:'DM Sans',sans-serif;font-size:12px;font-weight:600;color:var(--jb-green);cursor:pointer;letter-spacing:0.02em;transition:all 0.15s;" onmouseover="this.style.background='var(--jb-green)';this.style.color='#fff';" onmouseout="this.style.background='var(--white)';this.style.color='var(--jb-green)';">See example JD &rarr;</button>
        </div>`:''}
      </div>
      <div style="display:flex;flex-direction:column;gap:8px;overflow-y:auto;min-height:0;">
        ${config.fields.map(f=>`
          <div style="background:var(--white);border:1px solid var(--rule);border-radius:var(--radius);padding:11px 14px;border-left:3px solid var(--jb-yellow);">
            <div style="font-size:12px;font-weight:600;color:var(--black);margin-bottom:3px;">${f.label}</div>
            <div style="font-size:11px;color:var(--text-3);font-style:italic;margin-bottom:7px;line-height:1.4;">${f.hint}</div>
            ${Array.from({length:f.lines},()=>`<div style="border-bottom:1px solid var(--rule);height:20px;margin-bottom:4px;"></div>`).join('')}
          </div>
        `).join('')}
      </div>
    </div>
  `;
  inner.appendChild(content);
  body.appendChild(inner);
  slide.appendChild(body);
  return slide;
}

/* S3 — INFLECTION */
function renderInflectionSlide(config){
  const slide=slideShell(config);
  const body=el('div',{class:'body'});
  const inner=el('div',{class:'slide-inner'});
  inner.appendChild(slideInnerHead(config));
  const content=el('div',{class:'slide-content'});
  content.innerHTML=`
    <div class="infl-grid">
      <div class="infl-left">
        <div class="infl-quote">${config.quote}</div>
        <div class="tn-pair">
          <div class="tn tn-was">
            <div class="tn-lbl">${config.was.label}</div>
            ${config.was.items.map(i=>`<div class="tn-item">${i}</div>`).join('')}
          </div>
          <div class="tn tn-now">
            <div class="tn-lbl">${config.now.label}</div>
            ${config.now.items.map(i=>`<div class="tn-item">${i}</div>`).join('')}
          </div>
        </div>
        ${config.footnote?`<div class="infl-footnote">${config.footnote}</div>`:''}
      </div>
      <div class="infl-right">
        <div class="infl-visual">
          <div class="iv-from">${config.visual.from}</div>
          <div class="iv-arrow">↓</div>
          <div class="iv-mid">${config.visual.mid}</div>
          <div class="iv-to">${config.visual.to}</div>
          <div class="iv-label">${config.visual.label}</div>
        </div>
      </div>
    </div>
  `;
  inner.appendChild(content);
  body.appendChild(inner);
  slide.appendChild(body);
  return slide;
}

/* S4 — FLYWHEEL */
function renderFlywheelSlide(config){
  const slide=slideShell(config);
  const body=el('div',{class:'body'});
  const inner=el('div',{class:'slide-inner'});
  inner.appendChild(slideInnerHead(config));
  const content=el('div',{class:'slide-content'});
  content.innerHTML=`
    <div class="fw-layout">
      <div class="fw-right">
        <div class="fw-diagram">
          <div class="fw-circle fw-c-outer"></div>
          <div class="fw-circle fw-c-mid"></div>
          <div class="fw-circle fw-c-inner">
            <div class="fw-c-inner-val">${config.diagram.centerValue}</div>
            <div class="fw-c-inner-sub">${config.diagram.centerLabel}</div>
          </div>
          <div class="fw-tag fw-tag-top">${config.diagram.tagTop}</div>
          <div class="fw-tag fw-tag-right">${config.diagram.tagRight}</div>
          <div class="fw-tag fw-tag-bottom">${config.diagram.tagBottom}</div>
        </div>
      </div>
      <div>
        <div class="fw-steps">
          ${config.steps.map((step,i)=>`
            <div class="fw-step callout-item" onclick="openDrawer('${step.drawerId}')">
              <div class="fw-num">${i+1}</div>
              <div>
                <div class="fw-title">${step.title}<span class="callout-hint">More ›</span></div>
                <div class="fw-desc">${step.desc}</div>
              </div>
            </div>
          `).join('')}
        </div>
        <div class="fw-cta"><p>${config.cta}</p></div>
      </div>
    </div>
  `;
  inner.appendChild(content);
  body.appendChild(inner);
  slide.appendChild(body);
  return slide;
}

/* S5 — HORIZONS OVERVIEW */
function renderHorizonsSlide(config){
  const slide=slideShell(config);
  const body=el('div',{class:'body'});
  const inner=el('div',{class:'slide-inner'});
  inner.appendChild(slideInnerHead(config));
  const content=el('div',{class:'slide-content'});
  content.innerHTML=`
    <div class="hz-badges">
      ${config.columns.map((col,i)=>`
        <button class="hz-badge ${col.badgeClass}" onclick="toggleHz(this,${i+1})">${col.badge}</button>
      `).join('')}
    </div>
    <div class="rec-cols">
      ${config.columns.map((col,i)=>`
        <div class="rec-col ${col.colClass}" data-col="${i+1}">
          <div class="rec-col-head">
            <div class="rec-col-title">${col.title}</div>
            <div class="rec-col-sub">${col.sub}</div>
          </div>
          <div class="rec-col-body">
            ${col.items.map(item=>`<div class="ri">${item}</div>`).join('')}
          </div>
        </div>
      `).join('')}
    </div>
  `;
  inner.appendChild(content);
  body.appendChild(inner);
  slide.appendChild(body);
  return slide;
}

/* S6 — HORIZONS DEEP — the dangerous one: nesting lives here, never in content */
function renderHorizonsDeepSlide(config){
  const slide=slideShell(config);
  const body=el('div',{class:'body'});
  const inner=el('div',{class:'slide-inner'});
  inner.appendChild(slideInnerHead(config));
  const content=el('div',{class:'slide-content',style:'display:grid;grid-template-columns:repeat(3,1fr);gap:16px;'});

  config.columns.forEach(col=>{
    const colEl=el('div',{class:'hz-col-scroll'});
    const colHead=el('div',{class:'hz-col-head'});
    colHead.innerHTML=`<span class="hz-badge ${col.badgeClass}" style="pointer-events:none;">${col.badge}</span>`;
    colEl.appendChild(colHead);

    const inner2=el('div',{class:'hz-col-scroll-inner'});
    col.items.forEach(item=>{
      const rec=el('div',{class:'hz-rec callout-item',onclick:`openDrawer('${item.drawerId}')`});
      rec.innerHTML=`
        <div class="hz-rec-title">${item.title}<span class="callout-hint">Details →</span></div>
        <div class="hz-rec-desc">${item.desc}</div>
        <div class="tag-row">${item.tags.map(t=>`<span class="rtag ${t.cls||''}">${t.label}</span>`).join('')}</div>
      `;
      inner2.appendChild(rec);
    });
    colEl.appendChild(inner2);
    content.appendChild(colEl);
  });

  inner.appendChild(content);
  body.appendChild(inner);
  slide.appendChild(body);
  return slide;
}

/* S7 — MATRIX (drag-drop) */
function renderMatrixSlide(config){
  const slide=el('div',{class:'slide',id:config.id});
  const meta=DECK_CONFIG.meta;

  const topbar=el('div',{class:'topbar',style:'background:var(--off-white);'});
  topbar.innerHTML=`<div class="logo-pair"><img src="${meta.logos.client}" alt="${meta.client}"><div class="logo-sep"></div><img src="${meta.logos.partner}" alt="${meta.partner}"></div><div class="slide-label">${config.topbarLabel||'Prioritise together · 1 of 2'}</div>`;
  slide.appendChild(topbar);

  const body=el('div',{class:'body'});
  const inner=el('div',{class:'slide-inner'});
  const head=el('div',{class:'slide-head',style:'background:var(--off-white);'});
  head.innerHTML=`<div><div class="slide-kicker">${config.kicker||''}</div><div class="slide-title">${config.title||''}</div></div><div class="slide-n" style="color:var(--rule);">${config.slideN||'7'}</div>`;
  inner.appendChild(head);

  const content=el('div',{class:'slide-content'});
  content.style.cssText='overflow:hidden;padding-top:16px;';

  const quadrants=config.quadrants;
  content.innerHTML=`
    <div style="display:grid;grid-template-columns:220px 1fr;gap:16px;height:100%;">
      <div style="display:flex;flex-direction:column;gap:8px;height:100%;min-height:0;">
        <div class="backlog-zone" id="backlog" style="flex:1;display:flex;flex-direction:column;min-height:0;padding:12px;">
          <div class="bl-title">Opportunities — drag to grid</div>
          <div class="bl-scroll" id="bl-chips" style="flex:1;overflow-y:auto;min-height:0;">
            ${config.backlog.map(chip=>`
              <button class="bl-chip" draggable="true" id="${chip.id}"
                data-label="${chip.label}" data-q="${chip.q||'s'}"
                ondragstart="drag(event)">${chip.label}</button>
            `).join('')}
          </div>
          <div class="bl-add-row">
            <input class="bl-add-input" id="bl-custom-input" type="text" placeholder="Add opportunity…" maxlength="50">
            <button class="bl-add-btn" onclick="addCustomChip()">+</button>
          </div>
        </div>
        <div style="display:flex;gap:6px;flex-shrink:0;">
          <button onclick="resetBoard()" style="flex:1;padding:8px;border:1px solid var(--rule);background:var(--white);border-radius:var(--radius);font-size:12px;cursor:pointer;color:var(--text-2);">&#8635; Reset board</button>
          <button onclick="exportMatrixCSV()" style="flex:1;padding:8px;border:1px solid var(--jb-green);background:var(--white);border-radius:var(--radius);font-size:12px;cursor:pointer;color:var(--jb-green);font-weight:600;">&#8595; Export CSV</button>
        </div>
      </div>
      <div style="position:relative;padding-left:48px;padding-bottom:28px;height:100%;">
        <div class="axis-y">${config.axisY}</div>
        <div class="matrix-grid" id="matrix" style="height:calc(100% - 28px);">
          ${['tl','tr','bl','br'].map(q=>`
            <div class="quadrant q-${q}" id="q-${q}"
              ondragover="ev(event)" ondrop="drop(event,'q-${q}')">
              <div class="qlabel">${quadrants[q].label}</div>
              <div class="qsub">${quadrants[q].sub}</div>
              ${(quadrants[q].chips||[]).map(chip=>`
                <span class="opp-chip ${chip.cls}" draggable="true" id="${chip.id}"
                  data-label="${chip.label}" data-q="${chip.q||'s'}"
                  ondragstart="drag(event)">${chip.label}</span>
              `).join('')}
            </div>
          `).join('')}
        </div>
        <div class="axis-x">${config.axisX}</div>
      </div>
    </div>
  `;
  inner.appendChild(content);
  body.appendChild(inner);
  slide.appendChild(body);
  return slide;
}

/* S7b — PRIORITIES */
function renderPrioritiesSlide(config){
  const slide=slideShell(config);
  const body=el('div',{class:'body'});
  const inner=el('div',{class:'slide-inner'});
  inner.appendChild(slideInnerHead(config));
  const content=el('div',{class:'slide-content',style:'padding:20px 40px;'});
  content.innerHTML=`
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;height:100%;">
      <div style="display:flex;flex-direction:column;height:100%;min-height:0;">
        <div style="font-size:11px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;color:var(--jb-green);margin-bottom:6px;padding-bottom:8px;border-bottom:1px solid var(--rule);flex-shrink:0;">&#127942; Your game changers</div>
        <div style="font-size:12px;color:var(--text-3);margin-bottom:10px;font-style:italic;flex-shrink:0;" id="gc-hint">Items placed in the Game Changers quadrant. Drag them into the priority order on the right.</div>
        <div id="gc-source" style="flex:1;overflow-y:auto;min-height:0;display:flex;flex-direction:column;gap:6px;">
          <div style="font-size:13px;color:var(--text-3);font-style:italic;padding:16px 0;text-align:center;" id="gc-empty-msg">No game changers yet — go back and place items in the &#127942; quadrant.</div>
        </div>
        <button onclick="refreshGameChangers()" style="margin-top:10px;padding:9px;border:1px solid var(--jb-green);border-radius:var(--radius);background:var(--white);color:var(--jb-green);font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;cursor:pointer;font-family:'DM Sans',sans-serif;transition:all 0.15s;flex-shrink:0;" onmouseover="this.style.background='var(--jb-green)';this.style.color='#fff';" onmouseout="this.style.background='var(--white)';this.style.color='var(--jb-green)';">&#8635; Refresh from grid</button>
      </div>
      <div style="display:flex;flex-direction:column;height:100%;min-height:0;">
        <div style="font-size:11px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;color:var(--text-2);margin-bottom:6px;padding-bottom:8px;border-bottom:1px solid var(--rule);flex-shrink:0;">Priority order — drag to rank</div>
        <div style="font-size:12px;color:var(--text-3);margin-bottom:10px;font-style:italic;flex-shrink:0;">Drag items from the left and arrange top-to-bottom by priority. No limit — include everything that matters.</div>
        <div id="priority-list"
          ondragover="ev(event);if(!draggedPriority){this.style.borderColor='#FFEC0E';this.style.background='#FFFEF4';}"
          ondragleave="if(!draggedPriority){this.style.borderColor='#E5E5E2';this.style.background='#F7F7F5';}clearDropIndicator();"
          ondrop="dropPriority(event);this.style.borderColor='#E5E5E2';this.style.background='#F7F7F5';"
          style="flex:1;min-height:0;border:2px dashed var(--rule);border-radius:var(--radius);padding:14px;overflow-y:auto;background:var(--off-white);transition:all 0.2s;display:flex;flex-direction:column;gap:6px;">
          <div style="font-size:13px;color:var(--text-3);font-style:italic;text-align:center;padding:20px 0;margin:auto 0;" id="priority-empty">Drop your game changers here and arrange in priority order</div>
        </div>
        <div style="display:flex;gap:6px;margin-top:10px;flex-shrink:0;">
          <button onclick="clearPriorities()" style="flex:1;padding:9px;border:1px solid var(--rule);border-radius:var(--radius);background:var(--white);color:var(--text-3);font-size:10px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;cursor:pointer;font-family:'DM Sans',sans-serif;transition:all 0.15s;" onmouseover="this.style.borderColor='var(--pain-red)';this.style.color='var(--pain-red)';" onmouseout="this.style.borderColor='var(--rule)';this.style.color='var(--text-3)';">Clear all</button>
          <button onclick="exportPrioritiesCSV()" style="flex:1;padding:9px;border:1px solid var(--jb-green);border-radius:var(--radius);background:var(--white);color:var(--jb-green);font-size:10px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;cursor:pointer;font-family:'DM Sans',sans-serif;transition:all 0.15s;" onmouseover="this.style.background='var(--jb-green)';this.style.color='#fff';" onmouseout="this.style.background='var(--white)';this.style.color='var(--jb-green)';">&#8595; Export CSV</button>
        </div>
      </div>
    </div>
  `;
  inner.appendChild(content);
  body.appendChild(inner);
  slide.appendChild(body);
  return slide;
}

/* S8 — NORTH STAR */
function renderNorthStarSlide(config){
  const slide=slideShell(config);
  const body=el('div',{class:'body'});
  const inner=el('div',{class:'slide-inner'});
  inner.appendChild(slideInnerHead(config));
  const content=el('div',{class:'slide-content'});
  content.innerHTML=`
    <div class="ns-layout">
      <div>
        <div class="ns-vision">
          <div class="ns-vision-lbl">North star</div>
          <div class="ns-vision-text">${config.vision}</div>
        </div>
        <div class="ns-actions">
          ${config.actions.map((a,i)=>`
            <div class="ns-action">
              <div class="ns-an">${i+1}</div>
              <div>
                <div class="ns-at">${a.title}</div>
                <div class="ns-as">${a.sub}</div>
              </div>
              <div class="ns-owner ${a.ownerClass}">${a.owner}</div>
            </div>
          `).join('')}
        </div>
      </div>
      <div class="ns-right">
        <div class="ns-close">
          <div class="ns-close-lbl">${config.closing.label}</div>
          <div class="ns-close-q">${config.closing.question}</div>
          <div class="ns-close-sub">${config.closing.sub}</div>
        </div>
        <div class="ns-commit">${config.commit}</div>
      </div>
    </div>
  `;
  inner.appendChild(content);
  body.appendChild(inner);
  slide.appendChild(body);
  return slide;
}

/* S9impl — PLACEHOLDER */
function renderPlaceholderSlide(config){
  const slide=slideShell(config);
  const body=el('div',{class:'body'});
  const inner=el('div',{class:'slide-inner'});
  inner.appendChild(slideInnerHead(config));
  const content=el('div',{class:'slide-content'});
  content.style.cssText='display:flex;flex-direction:column;justify-content:center;align-items:center;gap:24px;';

  const banner=config.banner?`
    <div style="width:100%;max-width:700px;padding:32px 36px;border:2px dashed var(--rule);border-radius:var(--radius);text-align:center;background:var(--off-white);">
      <div style="font-size:11px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:var(--text-3);margin-bottom:12px;">${config.banner.eyebrow}</div>
      <div style="font-family:'Comfortaa',sans-serif;font-size:28px;font-weight:700;color:var(--text-2);margin-bottom:8px;">${config.banner.heading}</div>
      <div style="font-size:14px;color:var(--text-3);line-height:1.6;">${config.banner.text}</div>
    </div>
  `:'';

  content.innerHTML=`
    ${banner}
    <div style="width:100%;display:grid;grid-template-columns:repeat(3,1fr);gap:16px;">
      ${(config.columns||[]).map(col=>`
        <div style="padding:20px;border:1px solid var(--rule);border-radius:var(--radius);border-top:3px solid ${col.accent||'var(--rule)'};background:var(--white);">
          <div style="font-size:10px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;color:${col.accentColor||'var(--text-3)'};margin-bottom:8px;">${col.label}</div>
          <div style="font-family:'Comfortaa',sans-serif;font-size:18px;font-weight:700;color:var(--black);margin-bottom:8px;">${col.title}</div>
          <div style="font-size:13px;color:var(--text-3);font-style:italic;">${col.sub}</div>
          <div style="margin-top:16px;height:60px;border:1px dashed var(--rule);border-radius:4px;display:flex;align-items:center;justify-content:center;">
            <div style="font-size:11px;color:var(--text-3);">${col.tbc||''}</div>
          </div>
        </div>
      `).join('')}
    </div>
    ${config.note?`<div style="font-size:12px;color:var(--text-3);font-style:italic;text-align:center;">${config.note}</div>`:''}
  `;
  inner.appendChild(content);
  body.appendChild(inner);
  slide.appendChild(body);
  return slide;
}

/* S10 — THANK YOU */
function renderThankyouSlide(config){
  const slide=el('div',{class:'slide',id:config.id});
  const meta=DECK_CONFIG.meta;

  const topbar=el('div',{class:'topbar'});
  topbar.innerHTML=`<div class="logo-pair"><img src="${meta.logos.client}" alt="${meta.client}"><div class="logo-sep"></div><img src="${meta.logos.partner}" alt="${meta.partner}"></div><div class="slide-label">${config.topbarLabel||'Confidential · Executive Briefing · 2026'}</div>`;
  slide.appendChild(topbar);

  const body=el('div',{class:'body',style:'display:flex;align-items:center;justify-content:center;'});
  body.innerHTML=`
    <div style="text-align:center;display:flex;flex-direction:column;align-items:center;max-width:680px;">
      <div style="width:72px;height:4px;background:var(--jb-yellow);border-radius:2px;margin-bottom:36px;"></div>
      <div style="font-family:'Comfortaa',sans-serif;font-size:clamp(44px,5vw,72px);font-weight:700;color:var(--black);line-height:1.1;letter-spacing:-0.02em;margin-bottom:24px;">${config.heading}</div>
      <div style="font-size:18px;color:var(--text-2);line-height:1.65;margin-bottom:36px;">${config.subtext}</div>
      <div style="width:72px;height:4px;background:var(--jb-yellow);border-radius:2px;margin-bottom:48px;"></div>
      <div style="display:flex;align-items:center;gap:36px;margin-bottom:40px;">
        <img src="${meta.logos.client}" alt="${meta.client}" style="height:48px;width:auto;object-fit:contain;">
        <div style="width:1px;height:36px;background:var(--rule);"></div>
        <img src="${meta.logos.partner}" alt="${meta.partner}" style="height:36px;width:auto;object-fit:contain;">
      </div>
      <div style="font-size:13px;color:var(--text-3);padding:16px 28px;border:1px solid var(--rule);border-radius:var(--radius);">${config.footer}</div>
    </div>
  `;
  slide.appendChild(body);
  return slide;
}

/* ── PASSWORD GATE ── */
function showPasswordGate(password) {
  const gate = document.createElement('div');
  gate.className = 'pw-gate';
  gate.innerHTML = `
    <div class="pw-card">
      <div class="pw-logos">
        <img src="${DECK_CONFIG.meta.logos.client}" alt="JB Hi-Fi Business" class="pw-logo">
        <span class="pw-logo-sep">×</span>
        <img src="${DECK_CONFIG.meta.logos.partner}" alt="Salesforce" class="pw-logo">
      </div>
      <h2 class="pw-title">Executive Briefing</h2>
      <p class="pw-sub">Enter the access password to continue</p>
      <div class="pw-field">
        <input type="password" id="pw-input" class="pw-input" placeholder="Password" autocomplete="off">
        <button class="pw-btn" id="pw-btn">Enter</button>
      </div>
      <p class="pw-error" id="pw-error"></p>
    </div>
  `;
  document.body.appendChild(gate);

  const input = gate.querySelector('#pw-input');
  const btn   = gate.querySelector('#pw-btn');
  const err   = gate.querySelector('#pw-error');

  function attempt() {
    if (input.value === password) {
      sessionStorage.setItem('deck_auth', '1');
      gate.remove();
      renderDeck();
    } else {
      err.textContent = 'Incorrect password — please try again.';
      input.value = '';
      input.classList.add('pw-shake');
      input.addEventListener('animationend', () => input.classList.remove('pw-shake'), { once: true });
      input.focus();
    }
  }

  btn.addEventListener('click', attempt);
  input.addEventListener('keydown', e => { if (e.key === 'Enter') attempt(); });
  input.focus();
}

/* ── SURVEY SCORES (persisted to localStorage) ── */
// Key is scoped to the client name so multiple decks never share scores.
const SURVEY_KEY = 'survey-' + (DECK_CONFIG.meta.client||'deck').toLowerCase().replace(/[^a-z0-9]/g,'-');
let surveyScores = JSON.parse(localStorage.getItem(SURVEY_KEY) || '{}');

function setSurveyScore(questionId, score){
  surveyScores[questionId] = score;
  localStorage.setItem(SURVEY_KEY, JSON.stringify(surveyScores));
  document.querySelectorAll('.survey-score-btn[data-qid="'+questionId+'"]').forEach(btn=>{
    const s = parseInt(btn.dataset.score);
    if(s === score){ btn.classList.add('selected'); }
    else { btn.classList.remove('selected'); }
  });
  const resultsSlide = document.getElementById('s-results');
  if(resultsSlide && resultsSlide.style.display !== 'none'){ drawAllCharts(); }
}

/* ── TOGGLE ASSESSMENT SLIDES ── */
function toggleAssessmentSlides(){
  const ids = ['s-assess','s-results'];
  const currentlyVisible = DECK_CONFIG.slides.some(s=>s.id==='s-assess' && !s.hidden);
  DECK_CONFIG.slides.filter(s=>ids.includes(s.id)).forEach(s=>{ s.hidden = currentlyVisible; });
  const deck = document.getElementById('deck');
  deck.innerHTML = '';
  renderDeck();
  cur = 0;
  const allSlides = document.querySelectorAll('.slide');
  if(allSlides.length) allSlides[0].scrollIntoView({behavior:'instant'});
}

/* ── ASSESSMENT SLIDE ── */
function renderAssessmentSlide(config){
  const slide = slideShell(config);
  const body = el('div',{class:'body'});
  const inner = el('div',{class:'slide-inner'});
  inner.appendChild(slideInnerHead(config));

  const navBar = el('div',{class:'survey-nav-bar'});
  const viewBtn = el('button',{class:'survey-nav-btn',onclick:'navToResults()'});
  viewBtn.textContent = 'View results →';
  navBar.appendChild(viewBtn);
  inner.appendChild(navBar);

  const scroll = el('div',{class:'survey-scroll'});

  (DECK_CONFIG.survey.pillars||[]).forEach(pillar=>{
    const section = el('div',{class:'survey-pillar'});

    const head = el('div',{class:'survey-pillar-head'});
    head.style.background = pillar.colour;
    const titleSpan = el('span',{}); titleSpan.textContent = pillar.label;
    const progressSpan = el('span',{class:'survey-pillar-progress',id:'progress-'+pillar.id});
    progressSpan.textContent = getSurveyProgress(pillar);
    head.append(titleSpan, progressSpan);
    section.appendChild(head);

    pillar.questions.forEach(q=>{
      const row = el('div',{class:'survey-q-row'});
      const left = el('div');
      const meta = el('div',{class:'survey-q-meta'}); meta.textContent = q.subDimension;
      const qtext = el('div',{class:'survey-q-text'}); qtext.textContent = q.question;
      left.append(meta, qtext);

      const btns = el('div',{class:'survey-score-btns'});
      q.answers.forEach((answerText, scoreIdx)=>{
        const btn = el('button',{
          class:'survey-score-btn',
          'data-qid': q.id,
          'data-score': scoreIdx,
          title: answerText
        });
        const label = el('span'); label.textContent = scoreIdx === 0 ? '?' : scoreIdx;
        const tooltip = el('span',{class:'score-tooltip'}); tooltip.textContent = answerText;
        btn.append(label, tooltip);

        const savedScore = surveyScores[q.id];
        if(savedScore !== undefined && savedScore === scoreIdx){
          btn.classList.add('selected');
          btn.style.background = pillar.colour;
        }
        btn.onclick = ()=>{
          setSurveyScore(q.id, scoreIdx);
          const prog = document.getElementById('progress-'+pillar.id);
          if(prog) prog.textContent = getSurveyProgress(pillar);
        };
        btn.onmouseover = ()=>{ if(!btn.classList.contains('selected')) btn.style.borderColor=pillar.colour; };
        btn.onmouseout  = ()=>{ if(!btn.classList.contains('selected')) btn.style.borderColor=''; };
        btns.appendChild(btn);
      });

      row.append(left, btns);
      section.appendChild(row);
    });

    scroll.appendChild(section);
  });

  inner.appendChild(scroll);
  body.appendChild(inner);
  slide.appendChild(body);
  return slide;
}

function getSurveyProgress(pillar){
  const answered = pillar.questions.filter(q=>surveyScores[q.id]!==undefined).length;
  return answered + ' / ' + pillar.questions.length + ' answered';
}

function navToResults(){
  const resultsEl = document.getElementById('s-results');
  if(resultsEl){ resultsEl.scrollIntoView({behavior:'smooth'}); }
}

/* ── RESULTS SLIDE ── */
let chartInstances = {};

function renderResultsSlide(config){
  const slide = slideShell(config);
  const body = el('div',{class:'body'});
  const inner = el('div',{class:'slide-inner'});
  inner.appendChild(slideInnerHead(config));

  const backBar = el('div',{style:'padding:0 40px 8px;flex-shrink:0;'});
  const backBtn = el('button',{class:'results-back-btn',onclick:'navToAssessment()'});
  backBtn.textContent = '← Back to assessment';
  backBar.appendChild(backBtn);
  inner.appendChild(backBar);

  const scroll = el('div',{class:'results-scroll'});
  const pillars = DECK_CONFIG.survey.pillars||[];

  const row1 = el('div',{class:'results-grid'});
  pillars.slice(0,3).forEach(p=>{ row1.appendChild(buildResultsPanel(p)); });
  scroll.appendChild(row1);

  if(pillars.length > 3){
    const row2 = el('div',{class:'results-row2'});
    pillars.slice(3).forEach(p=>{ row2.appendChild(buildResultsPanel(p)); });
    scroll.appendChild(row2);
  }

  inner.appendChild(scroll);
  body.appendChild(inner);
  slide.appendChild(body);

  requestAnimationFrame(()=>drawAllCharts());
  return slide;
}

function buildResultsPanel(pillar){
  const stats = getPillarStats(pillar);
  const panel = el('div',{class:'results-panel'});

  const head = el('div',{class:'results-panel-head'});
  head.style.background = pillar.colour;
  const titleCell = el('div',{class:'results-panel-head-title'}); titleCell.textContent = pillar.label;
  const avgLabel = el('div',{class:'results-panel-stat-label'}); avgLabel.textContent = 'Average';
  const avgVal = el('div',{class:'results-panel-stat-val',id:'avg-'+pillar.id}); avgVal.textContent = stats.avg;
  head.append(titleCell, avgLabel, avgVal);
  panel.appendChild(head);

  const sub = el('div',{class:'results-panel-subrow'});
  [['Min',stats.min],['Max',stats.max],['Range',stats.range]].forEach(([label,val])=>{
    const lSpan = el('span'); lSpan.textContent = label;
    const vSpan = el('span'); vSpan.textContent = val;
    sub.append(lSpan, vSpan);
  });
  panel.appendChild(sub);

  const wrap = el('div',{class:'chart-wrap'});
  const canvas = el('canvas',{id:'chart-'+pillar.id, height:'180'});
  wrap.appendChild(canvas);
  panel.appendChild(wrap);

  return panel;
}

function getPillarStats(pillar){
  const scores = pillar.questions
    .map(q=>surveyScores[q.id])
    .filter(s=>s!==undefined && s!==0);
  if(!scores.length) return {avg:'—', min:'—', max:'—', range:'—'};
  const min = Math.min(...scores);
  const max = Math.max(...scores);
  const avg = (scores.reduce((a,b)=>a+b,0)/scores.length).toFixed(1);
  return {avg, min, max, range: max-min};
}

function drawAllCharts(){
  (DECK_CONFIG.survey.pillars||[]).forEach(pillar=>{
    const canvas = document.getElementById('chart-'+pillar.id);
    if(!canvas) return;
    if(chartInstances[pillar.id]){ chartInstances[pillar.id].destroy(); delete chartInstances[pillar.id]; }

    const scores = pillar.questions.map(q=>{
      const s = surveyScores[q.id];
      return (s===undefined||s===0) ? 0 : s;
    });
    const labels = pillar.questions.map(q=>q.subDimension);

    chartInstances[pillar.id] = new Chart(canvas, {
      type: 'radar',
      data: {
        labels,
        datasets: [{
          data: scores,
          backgroundColor: pillar.colour+'33',
          borderColor: pillar.colour,
          borderWidth: 2,
          pointBackgroundColor: pillar.colour,
          pointRadius: 4,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          r: {
            min: 0, max: 5,
            ticks: { stepSize:1, font:{size:9}, color:'#9A9A94', backdropColor:'transparent' },
            grid: { color:'#E5E5E2' },
            angleLines: { color:'#E5E5E2' },
            pointLabels: { font:{size:10, family:"'DM Sans',sans-serif"}, color:'#4A4A46' }
          }
        },
        plugins: { legend:{ display:false } }
      }
    });

    const stats = getPillarStats(pillar);
    const avgEl = document.getElementById('avg-'+pillar.id);
    if(avgEl) avgEl.textContent = stats.avg;
  });
}

function navToAssessment(){
  const el = document.getElementById('s-assess');
  if(el) el.scrollIntoView({behavior:'smooth'});
}

/* ── BOOT ── */
document.addEventListener('DOMContentLoaded', () => {
  if (sessionStorage.getItem('deck_auth') === '1') { renderDeck(); return; }
  showPasswordGate(DECK_CONFIG.meta.password);
});
