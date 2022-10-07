function recursive(a){
    Object.keys(a).forEach(el=>{
      if(el.charAt(el.length-1)!=="." && typeof a[el]!== "string"){
        let val = a[el];
        if(!val){
            val= a[el+"."]
        }
        const nuovakey = el+"."
        a[nuovakey]= a[el]
        delete a[el]
        recursive(a)
      }
      if(a[el] && typeof a[el]!= "string"){
        Object.keys(a[el]).forEach((u, i)=>{
          const str = el+u+"."
          a[str] = a[el][u];        
        })
        
        delete a[el];
        recursive(a)
      }
    })
}

function clearSpot(a){
    Object.keys(a).forEach(el=>{
      if(!a[el]){
        delete a[el]
      }else if(el.charAt(el.length-1)==="."){
        const nuovaKey = el.slice(0, -1);

        a[nuovaKey] = a[el];
        delete a[el]
      }
    })
}