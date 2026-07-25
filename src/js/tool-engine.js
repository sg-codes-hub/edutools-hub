'use strict';

const ToolEngine={
 validate(values){return Object.values(values).every(v=>v!==''&&v!==null&&v!==undefined);},
 reset(form){if(form)form.reset();},
 copy(text){return navigator.clipboard?.writeText(String(text));},
 formatNumber(n){return new Intl.NumberFormat('en-IN').format(n);}
};

window.ToolEngine=ToolEngine;