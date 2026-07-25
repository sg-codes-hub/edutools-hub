'use strict';

const EduTools={
 version:'0.1.0',
 init(){console.log('EduTools Hub v'+this.version+' initialized');this.bindEvents();},
 bindEvents(){document.documentElement.classList.add('js');}
};

document.addEventListener('DOMContentLoaded',()=>EduTools.init());