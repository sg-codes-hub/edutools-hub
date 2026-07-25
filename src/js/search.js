'use strict';

const Search={
 filter(items,query){
  const q=String(query).toLowerCase().trim();
  return items.filter(item=>item.title.toLowerCase().includes(q));
 }
};

window.Search=Search;