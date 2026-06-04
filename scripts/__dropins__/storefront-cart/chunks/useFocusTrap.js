/*! Copyright 2026 Adobe
All Rights Reserved. */
import{useRef as i,useEffect as f}from"@dropins/tools/preact-hooks.js";function a(u){const n=i(null);return f(()=>{if(!u||!n.current)return;const r=n.current,t=r.querySelectorAll('a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])');if(t.length===0)return;const o=t[0],c=t[t.length-1];function s(e){e.key==="Tab"&&(e.shiftKey&&document.activeElement===o?(e.preventDefault(),c.focus()):!e.shiftKey&&document.activeElement===c&&(e.preventDefault(),o.focus()))}return r.addEventListener("keydown",s),()=>{r.removeEventListener("keydown",s)}},[u]),n}export{a as u};
//# sourceMappingURL=useFocusTrap.js.map
