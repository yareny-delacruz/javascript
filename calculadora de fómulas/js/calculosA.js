
/*alert('wenas, wenas');*/
/*-------------------------------Álgebra---------------------------- */
function limpiar1A() {
    document.getElementById('ecuCuadraticas').reset();
    document.getElementById('x1').innerHTML = " ";
    document.getElementById('x2').innerHTML = " ";
    document.getElementById('incorr1_1A').innerHTML = "";
    document.getElementById('incorr2_1A').innerHTML = "";
    document.getElementById('incorr3_1A').innerHTML = "";
    document.getElementById('incorr11_1A').innerHTML = "";
    document.getElementById('incorr21_1A').innerHTML = "";
    document.getElementById('incorr31_1A').innerHTML = ""; 
    document.getElementById('incorr1').innerHTML = "";
}
function calcula1A() {
    let a = document.getElementById('a1');
    let b = document.getElementById('b1');
    let c = document.getElementById('c1');
    /*la validación primero se fija sí todos los campos está llenos y luego sí son números. */
    if(a.value=="" || b.value=="" || c.value=="" ){
        if(a.value==""){
            a.style.borderColor="red"; 
            document.getElementById('incorr11_1A').innerHTML = "";
            document.getElementById('incorr1_1A').innerHTML = "Los campos no pueden estar vacios.";
        }else{
            a.style.borderColor="gray";
            document.getElementById('incorr1_1A').innerHTML = "";
            document.getElementById('incorr11_1A').innerHTML = "";
        }
        if(b.value==""){
            b.style.borderColor="red"; 
            document.getElementById('incorr21_1A').innerHTML = "";
            document.getElementById('incorr2_1A').innerHTML = "Los campos no pueden estar vacios.";
        }else{
            b.style.borderColor="gray";
            document.getElementById('incorr2_1A').innerHTML = "";
            document.getElementById('incorr21_1A').innerHTML = "";
        }
        if(c.value==""){
            c.style.borderColor="red"; 
            document.getElementById('incorr31_1A').innerHTML = "";
            document.getElementById('incorr3_1A').innerHTML = "Los campos no pueden estar vacios.";
        }else{
            c.style.borderColor="gray";
            document.getElementById('incorr3_1A').innerHTML = "";
            document.getElementById('incorr31_1A').innerHTML = "";
        }
    }else{
        a.style.borderColor="gray";
        b.style.borderColor="gray"; 
        c.style.borderColor="gray"; 
               
        if(isNaN(parseInt(a.value)) || isNaN(parseInt(b.value)) || isNaN(parseInt(c.value))){
            if(isNaN(parseInt(a.value))){
                a.style.borderColor="red"; 
                document.getElementById('incorr1_1A').innerHTML = "";
                document.getElementById('incorr11_1A').innerHTML = "Solo se aceptan valores numéricos.";
            }else{
                a.style.borderColor="gray";
                document.getElementById('incorr1_1A').innerHTML = "";
                document.getElementById('incorr11_1A').innerHTML = "";
            }    
            if(isNaN(parseInt(b.value))){
                b.style.borderColor="red"; 
                document.getElementById('incorr2_1A').innerHTML = "";
                document.getElementById('incorr21_1A').innerHTML = "Solo se aceptan valores numéricos.";
            }else{
                b.style.borderColor="gray";
                document.getElementById('incorr2_1A').innerHTML = "";
                document.getElementById('incorr21_1A').innerHTML = "";            
            }
            if(isNaN(parseInt(c.value))){
                c.style.borderColor="red"; 
                document.getElementById('incorr3_1A').innerHTML = "";
                document.getElementById('incorr31_1A').innerHTML = "Solo se aceptan valores numéricos.";
             }else{
                c.style.borderColor="gray";
                document.getElementById('incorr3_1A').innerHTML = "";
                document.getElementById('incorr31_1A').innerHTML = "";
            }
        }else{
            let a = parseFloat(document.getElementById('a1').value);
            let b = parseFloat(document.getElementById('b1').value);
            let c = parseFloat(document.getElementById('c1').value);
            let D = (Math.pow(b, 2) - (4 * a * c));
            //console.log(D);/
            if (D < 0) {
                document.getElementById('incorr1').innerHTML = "El discriminante es negativo";
                document.getElementById('x1').innerHTML = "i";
                document.getElementById('x2').innerHTML = "i";
            } else {
                document.getElementById('incorr1').innerHTML = " ";
                let x1 = (-b + (Math.sqrt(D))) / (2 * a);
                let x2 = (-b - (Math.sqrt(D))) / (2 * a);
                document.getElementById('x1').innerHTML = x1;
                document.getElementById('x2').innerHTML = x2;
            }
            document.getElementById('incorr1_1A').innerHTML = "";
            document.getElementById('incorr2_1A').innerHTML = "";
            document.getElementById('incorr3_1A').innerHTML = "";
            document.getElementById('incorr11_1A').innerHTML = "";
            document.getElementById('incorr21_1A').innerHTML = "";
            document.getElementById('incorr31_1A').innerHTML = ""; 
        }
    } 
}

function limpiar2A() {
    document.getElementById('factorial').reset();
    document.getElementById('factn').innerHTML = " ";
    document.getElementById('nfact').innerHTML = " ";
    document.getElementById('incorr1_2A').innerHTML = "";
    document.getElementById('incorr11_2A').innerHTML = ""; 
}
function calcula2A() {
    let n = document.getElementById('fact2');
    /*la validación primero se fija sí todos los campos está llenos y luego sí son números. */
    if(n.value=="" ){
        if(n.value==""){
            n.style.borderColor="red"; 
            document.getElementById('incorr11_2A').innerHTML = "";
            document.getElementById('incorr1_2A').innerHTML = "Los campos no pueden estar vacios.";
        }else{
            n.style.borderColor="gray";
            document.getElementById('incorr1_2A').innerHTML = "";
            document.getElementById('incorr11_2A').innerHTML = "";
        }        
    }else{
        n.style.borderColor="gray";               
        if(isNaN(parseInt(n.value))){
            if(isNaN(parseInt(n.value))){
                n.style.borderColor="red"; 
                document.getElementById('incorr1_2A').innerHTML = "";
                document.getElementById('incorr11_2A').innerHTML = "Solo se aceptan valores numéricos.";
            }else{
                n.style.borderColor="gray";
                document.getElementById('incorr1_2A').innerHTML = "";
                document.getElementById('incorr11_2A').innerHTML = "";
            }                
        }else{
            facto();
            document.getElementById('incorr1_2A').innerHTML = "";
            document.getElementById('incorr11_2A').innerHTML = ""; 
        }
    } 
}
function facto() {
    let n = parseInt(document.getElementById('fact2').value);
    let i=0;
    let factn=1;
    if (n == 0) {
        document.getElementById('nfact').innerHTML = n;
        document.getElementById('factn').innerHTML = factn;
    }else{
        if(n>0){
            for(i=n; i>0; i--){
                factn*=i;
            }
            document.getElementById('nfact').innerHTML = n;
            document.getElementById('factn').innerHTML = factn;
        }else{
            n=Math.abs(n);
            for(i=n; i>0; i--){
                factn*=i;
            }
            document.getElementById('nfact').innerHTML = n;
            document.getElementById('factn').innerHTML = "-" + factn;
        }
    }    
}

function limpiar3A() {
    document.getElementById('cubos').reset();
    document.getElementById('rCubos').innerHTML = " ";
    document.getElementById('formula3').innerHTML = "(<em>a</em><sup>3</sup>+/-<em>b</em><sup>3</sup>)";
    document.getElementById('incorr1_3A').innerHTML = "";
    document.getElementById('incorr2_3A').innerHTML = "";
    document.getElementById('incorr11_3A').innerHTML = "";
    document.getElementById('incorr21_3A').innerHTML = "";
}
function calcula3A() {
    let a = document.getElementById('a3');
    let b = document.getElementById('b3');
    /*la validación primero se fija sí todos los campos está llenos y luego sí son números. */
    if(a.value=="" || b.value==""){
        if(a.value==""){
            a.style.borderColor="red"; 
            document.getElementById('incorr11_3A').innerHTML = "";
            document.getElementById('incorr1_3A').innerHTML = "Los campos no pueden estar vacios.";
        }else{
            a.style.borderColor="gray";
            document.getElementById('incorr1_3A').innerHTML = "";
            document.getElementById('incorr11_3A').innerHTML = "";
        }
        if(b.value==""){
            b.style.borderColor="red"; 
            document.getElementById('incorr21_3A').innerHTML = "";
            document.getElementById('incorr2_3A').innerHTML = "Los campos no pueden estar vacios.";
        }else{
            b.style.borderColor="gray";
            document.getElementById('incorr2_3A').innerHTML = "";
            document.getElementById('incorr21_3A').innerHTML = "";
        }
    }else{
        a.style.borderColor="gray";
        b.style.borderColor="gray"; 
               
        if(isNaN(parseInt(a.value)) || isNaN(parseInt(b.value))){
            if(isNaN(parseInt(a.value))){
                a.style.borderColor="red"; 
                document.getElementById('incorr1_3A').innerHTML = "";
                document.getElementById('incorr11_3A').innerHTML = "Solo se aceptan valores numéricos.";
            }else{
                a.style.borderColor="gray";
                document.getElementById('incorr1_3A').innerHTML = "";
                document.getElementById('incorr11_3A').innerHTML = "";
            }    
            if(isNaN(parseInt(b.value))){
                b.style.borderColor="red"; 
                document.getElementById('incorr2_3A').innerHTML = "";
                document.getElementById('incorr21_3A').innerHTML = "Solo se aceptan valores numéricos.";
            }else{
                b.style.borderColor="gray";
                document.getElementById('incorr2_3A').innerHTML = "";
                document.getElementById('incorr21_3A').innerHTML = "";            
            }
        }else{
            cubosDif();
            document.getElementById('incorr1_3A').innerHTML = "";
            document.getElementById('incorr2_3A').innerHTML = "";
            document.getElementById('incorr11_3A').innerHTML = "";
            document.getElementById('incorr21_3A').innerHTML = "";
        }
    } 
}  
function cubosDif() {
    let a = parseFloat(document.getElementById('a3').value);
    let b = parseFloat(document.getElementById('b3').value);
    let resul = 0.0;
    if (a > 0 && b > 0) {
        resul=(a+b)*(Math.pow(a, 2)-(a*b)+Math.pow(b, 2));     
        document.getElementById('rCubos').innerHTML = resul;
        document.getElementById('formula3').innerHTML = "Solución de tipo:  <em>(a+b)(a</em><sup>2</sup><em>-ab+b</em><sup>2</sup>)";
    }
    if (a < 0 && b < 0){
        resul=(a+b)*(Math.pow(a, 2)-(a*b)+Math.pow(b, 2)); 
        document.getElementById('rCubos').innerHTML = resul;
        document.getElementById('formula3').innerHTML = "Solución de tipo:  <em>(a+b)(a</em><sup>2</sup><em>-ab+b</em><sup>2</sup>)";
    } 
    if(a > 0 && b < 0){
        b=Math.abs(b);
        resul=(a-b)*(Math.pow(a, 2)+(a*b)+Math.pow(b, 2));     
        document.getElementById('rCubos').innerHTML = resul;
        document.getElementById('formula3').innerHTML = "Solución de tipo:  <em>(a-b)(a</em><sup>2</sup><em>+ab+b</em><sup>2</sup>)";
    }
    if(a < 0 && b > 0){
        let B=a;
        let A=b;
        B=Math.abs(B);
        resul=(A-B)*(Math.pow(A, 2)+(A*B)+Math.pow(B, 2));  
        document.getElementById('rCubos').innerHTML = resul;
        document.getElementById('formula3').innerHTML = "Solución de tipo: <em>(a-b)(a</em><sup>2</sup><em>+ab+b</em><sup>2</sup>)";
    }
}  

function limpiar4A() {
    document.getElementById('cuadrados').reset();
    document.getElementById('rCuadrados').innerHTML = " ";
    document.getElementById('formula4').innerHTML = "(<em>a</em><sup>2</sup>+/-<em>b</em><sup>2</sup>)";
    document.getElementById('incorr1_4A').innerHTML = "";
    document.getElementById('incorr2_4A').innerHTML = "";
    document.getElementById('incorr11_4A').innerHTML = "";
    document.getElementById('incorr21_4A').innerHTML = "";
}
function calcula4A(){
    let a = document.getElementById('a4');
    let b = document.getElementById('b4');
    /*la validación primero se fija sí todos los campos está llenos y luego sí son números. */
    if(a.value=="" || b.value==""){
        if(a.value==""){
            a.style.borderColor="red"; 
            document.getElementById('incorr11_4A').innerHTML = "";
            document.getElementById('incorr1_4A').innerHTML = "Los campos no pueden estar vacios.";
        }else{
            a.style.borderColor="gray";
            document.getElementById('incorr1_4A').innerHTML = "";
            document.getElementById('incorr11_4A').innerHTML = "";
        }
        if(b.value==""){
            b.style.borderColor="red"; 
            document.getElementById('incorr21_4A').innerHTML = "";
            document.getElementById('incorr2_4A').innerHTML = "Los campos no pueden estar vacios.";
        }else{
            b.style.borderColor="gray";
            document.getElementById('incorr2_4A').innerHTML = "";
            document.getElementById('incorr21_4A').innerHTML = "";
        }
    }else{
        a.style.borderColor="gray";
        b.style.borderColor="gray"; 
               
        if(isNaN(parseInt(a.value)) || isNaN(parseInt(b.value))){
            if(isNaN(parseInt(a.value))){
                a.style.borderColor="red"; 
                document.getElementById('incorr1_4A').innerHTML = "";
                document.getElementById('incorr11_4A').innerHTML = "Solo se aceptan valores numéricos.";
            }else{
                a.style.borderColor="gray";
                document.getElementById('incorr1_4A').innerHTML = "";
                document.getElementById('incorr11_4A').innerHTML = "";
            }    
            if(isNaN(parseInt(b.value))){
                b.style.borderColor="red"; 
                document.getElementById('incorr2_4A').innerHTML = "";
                document.getElementById('incorr21_4A').innerHTML = "Solo se aceptan valores numéricos.";
            }else{
                b.style.borderColor="gray";
                document.getElementById('incorr2_4A').innerHTML = "";
                document.getElementById('incorr21_4A').innerHTML = "";            
            }
        }else{
            cuadradosDif();
            document.getElementById('incorr1_4A').innerHTML = "";
            document.getElementById('incorr2_4A').innerHTML = "";
            document.getElementById('incorr11_4A').innerHTML = "";
            document.getElementById('incorr21_4A').innerHTML = "";
        }
    } 
}
function cuadradosDif() {
    let a = parseFloat(document.getElementById('a4').value);
    let b = parseFloat(document.getElementById('b4').value);
    let resul = 0.0;
    if (a > 0 && b > 0) {
        resul=(Math.pow((a+b),2))-(2 * a * b);     
        document.getElementById('rCuadrados').innerHTML = resul;
        document.getElementById('formula4').innerHTML = "Solución de tipo:  <em>(a+b)</em><sup>2</sup><em>-2ab</em>";
    }
    if (a < 0 && b < 0){
        resul=(Math.pow((a+b),2))-(2 * a * b); 
        document.getElementById('rCuadrados').innerHTML = "-"+resul;
        document.getElementById('formula4').innerHTML = "Solución de tipo:  <em>(a+b)</em><sup>2</sup><em>-2ab</em>";
    } 
    if(a > 0 && b < 0){
        b=Math.abs(b);
        resul=(a-b)*(a+b);     
        document.getElementById('rCuadrados').innerHTML = resul;
        document.getElementById('formula4').innerHTML = "Solución de tipo:  <em>(a-b)(a+b)</em>";
    }
    if(a < 0 && b > 0){
        let B=a;
        let A=b;
        B=Math.abs(B);
        resul=(A-B)*(A+B);  
        document.getElementById('rCuadrados').innerHTML = resul;
        document.getElementById('formula4').innerHTML = "Solución de tipo: <em>(a-b)(a+b)</em>";
    }
}  

