$('#calc').on('click', () => {
    let a = new Array();
    for(var i=1; i<=$('#number').val();i++){
        a[i-1]=i;
    };
    for(let i1=1; i1<=$('#number').val(); i1++){
        for(let i2 = 1; i2<=i; i2++){
            if(i1%i2 == 0 && (i2 != i1) && (i2 != 1)){
                let prime = a.indexOf(i1);
                if(prime > -1){
                   a.splice(prime, 1);
                };
            };
        };
    };
    $('#answer').val(a); 
});