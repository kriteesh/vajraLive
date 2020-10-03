let create = parent => tag => element => parameters => { 
    x = document.createElement(tag);
    x.className = element;
    for( i in parameters){
        x.setAttribute(i, parameters[i]);
    }
    parent.appendChild(x);
    return x;
}

let inputer = title => (parameters)=>(parent)=>{
    let unit = create('div')('input-unit')(parent)({});
    let label = create('div')('input-label')(unit)({})
        label.innerText = title;
    let field = create('input')('field')(unit)(parameters);
  return [unit,label,field];
}

let selector = title => parameters => data =>parent=> {
    let unit = create('div')('select-unit')(parent)({});
    let label = create('div')('select-label')(unit)({})
        label.innerText = title;
    let s = create('select')('field')(unit)(parameters);
        data.map(y=>{
            let option = create('option')('optional')(s)({}); 
            option.innerText = y; 
        });
  return [unit,label,s];
}



vanish = el => el.display = "none"

reappear = el => el.display = "initial"



