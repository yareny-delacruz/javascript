/*alert("holia");*/
/*----------------------------Goemetría Analítica------------------------- */
function limpiar1G() {
    document.getElementById('pendiente').reset();
    document.getElementById('rPendiente').innerHTML = " ";
    document.getElementById('incorr1G').innerHTML = " ";
    document.getElementById('incorr1_1G').innerHTML = "";
    document.getElementById('incorr2_1G').innerHTML = "";
    document.getElementById('incorr3_1G').innerHTML = "";
    document.getElementById('incorr4_1G').innerHTML = "";
    document.getElementById('incorr11_1G').innerHTML = "";
    document.getElementById('incorr21_1G').innerHTML = "";
    document.getElementById('incorr31_1G').innerHTML = "";
    document.getElementById('incorr41_1G').innerHTML = ""; 
}
function calcula1G() {
    let x1 = document.getElementById('x1_1');
    let y1 = document.getElementById('y1_1');
    let x2 = document.getElementById('x2_1');
    let y2 = document.getElementById('y2_1');
    /*la validación primero se fija sí todos los campos está llenos y luego sí son números. */
    if(x1.value=="" || y1.value=="" || x2.value=="" ||y2.value==""){
        if(x1.value==""){
            x1.style.borderColor="red"; 
            document.getElementById('incorr11_1G').innerHTML = "";
            document.getElementById('incorr1_1G').innerHTML = "Los campos no pueden estar vacios.";
        }else{
            x1.style.borderColor="gray";
            document.getElementById('incorr1_1G').innerHTML = "";
            document.getElementById('incorr11_1G').innerHTML = "";
        }
        if(y1.value==""){
            y1.style.borderColor="red"; 
            document.getElementById('incorr21_1G').innerHTML = "";
            document.getElementById('incorr2_1G').innerHTML = "Los campos no pueden estar vacios.";
        }else{
            y1.style.borderColor="gray";
            document.getElementById('incorr2_1G').innerHTML = "";
            document.getElementById('incorr21_1G').innerHTML = "";
        }
        if(x2.value==""){
            x2.style.borderColor="red"; 
            document.getElementById('incorr31_1G').innerHTML = "";
            document.getElementById('incorr3_1G').innerHTML = "Los campos no pueden estar vacios.";
        }else{
            x2.style.borderColor="gray";
            document.getElementById('incorr3_1G').innerHTML = "";
            document.getElementById('incorr31_1G').innerHTML = "";
        }
        if(y2.value==""){
            y2.style.borderColor="red"; 
            document.getElementById('incorr41_1G').innerHTML = "";
            document.getElementById('incorr4_1G').innerHTML = "Los campos no pueden estar vacios.";
        }else{
            y2.style.borderColor="gray";
            document.getElementById('incorr4_1G').innerHTML = "";
            document.getElementById('incorr41_1G').innerHTML = "";
        }
    }else{
        x1.style.borderColor="gray";
        y1.style.borderColor="gray"; 
        x2.style.borderColor="gray"; 
        y2.style.borderColor="gray"; 
               
        if(isNaN(parseInt(x1.value)) || isNaN(parseInt(y1.value)) || isNaN(parseInt(x2.value)) || isNaN(parseInt(y2.value))){
            if(isNaN(parseInt(x1.value))){
                x1.style.borderColor="red"; 
                document.getElementById('incorr1_1G').innerHTML = "";
                document.getElementById('incorr11_1G').innerHTML = "Solo se aceptan valores numéricos.";
            }else{
                x1.style.borderColor="gray";
                document.getElementById('incorr1_1G').innerHTML = "";
                document.getElementById('incorr11_1G').innerHTML = "";
            }    
            if(isNaN(parseInt(y1.value))){
                y1.style.borderColor="red"; 
                document.getElementById('incorr2_1G').innerHTML = "";
                document.getElementById('incorr21_1G').innerHTML = "Solo se aceptan valores numéricos.";
            }else{
                y1.style.borderColor="gray";
                document.getElementById('incorr2_1G').innerHTML = "";
                document.getElementById('incorr21_1G').innerHTML = "";            
            }
            if(isNaN(parseInt(x2.value))){
                x2.style.borderColor="red"; 
                document.getElementById('incorr3_1G').innerHTML = "";
                document.getElementById('incorr31_1G').innerHTML = "Solo se aceptan valores numéricos.";
             }else{
                x2.style.borderColor="gray";
                document.getElementById('incorr3_1G').innerHTML = "";
                document.getElementById('incorr31_1G').innerHTML = "";
            }
            if(isNaN(parseInt(y2.value))){
                y2.style.borderColor="red"; 
                document.getElementById('incorr4_1G').innerHTML = "";
                document.getElementById('incorr41_1G').innerHTML = "Solo se aceptan valores numéricos.";
             }else{
                y2.style.borderColor="gray";
                document.getElementById('incorr4_1G').innerHTML = "";
                document.getElementById('incorr41_1G').innerHTML = "";
            }
        }else{
            pendiente();
            document.getElementById('incorr1_1G').innerHTML = "";
            document.getElementById('incorr2_1G').innerHTML = "";
            document.getElementById('incorr3_1G').innerHTML = "";
            document.getElementById('incorr4_1G').innerHTML = "";
            document.getElementById('incorr11_1G').innerHTML = "";
            document.getElementById('incorr21_1G').innerHTML = "";
            document.getElementById('incorr31_1G').innerHTML = "";
            document.getElementById('incorr41_1G').innerHTML = "";  
        }
    } 
}
function pendiente() {
    let x1 = parseFloat(document.getElementById('x1_1').value);
    let x2 = parseFloat(document.getElementById('x2_1').value);
    let y1 = parseFloat(document.getElementById('y1_1').value);
    let y2 = parseFloat(document.getElementById('y2_1').value);
    let deno = (x2 - x1);
    if (deno == 0) {
        document.getElementById('incorr1G').innerHTML = "El denominador es cero.";
        document.getElementById('rPendiente').innerHTML = "err by zero ";
    } else {
        document.getElementById('incorr1G').innerHTML = " ";
        let m = (y2 - y1) / deno;
        document.getElementById('rPendiente').innerHTML = m;
    }
}
function limpiar2G() {
    document.getElementById('disDos').reset();
    document.getElementById('distancia').innerHTML = "";
    document.getElementById('incorr1_2G').innerHTML = "";
    document.getElementById('incorr2_2G').innerHTML = "";
    document.getElementById('incorr3_2G').innerHTML = "";
    document.getElementById('incorr4_2G').innerHTML = "";
    document.getElementById('incorr11_2G').innerHTML = "";
    document.getElementById('incorr21_2G').innerHTML = "";
    document.getElementById('incorr31_2G').innerHTML = "";
    document.getElementById('incorr41_2G').innerHTML = "";
    document.getElementById('incorr2G').innerHTML = "";  
}
function calcula2G() {
    let x1 = document.getElementById('x1_2');
    let y1 = document.getElementById('y1_2');
    let x2 = document.getElementById('x2_2');
    let y2 = document.getElementById('y2_2');
    /*la validación primero se fija sí todos los campos está llenos y luego sí son números. */
    if(x1.value=="" || y1.value=="" || x2.value=="" ||y2.value==""){
        if(x1.value==""){
            x1.style.borderColor="red"; 
            document.getElementById('incorr11_2G').innerHTML = "";
            document.getElementById('incorr1_2G').innerHTML = "Los campos no pueden estar vacios.";
        }else{
            x1.style.borderColor="gray";
            document.getElementById('incorr1_2G').innerHTML = "";
            document.getElementById('incorr11_2G').innerHTML = "";
        }
        if(y1.value==""){
            y1.style.borderColor="red"; 
            document.getElementById('incorr21_2G').innerHTML = "";
            document.getElementById('incorr2_2G').innerHTML = "Los campos no pueden estar vacios.";
        }else{
            y1.style.borderColor="gray";
            document.getElementById('incorr2_2G').innerHTML = "";
            document.getElementById('incorr21_2G').innerHTML = "";
        }
        if(x2.value==""){
            x2.style.borderColor="red"; 
            document.getElementById('incorr31_2G').innerHTML = "";
            document.getElementById('incorr3_2G').innerHTML = "Los campos no pueden estar vacios.";
        }else{
            x2.style.borderColor="gray";
            document.getElementById('incorr3_2G').innerHTML = "";
            document.getElementById('incorr31_2G').innerHTML = "";
        }
        if(y2.value==""){
            y2.style.borderColor="red"; 
            document.getElementById('incorr41_2G').innerHTML = "";
            document.getElementById('incorr4_2G').innerHTML = "Los campos no pueden estar vacios.";
        }else{
            y2.style.borderColor="gray";
            document.getElementById('incorr4_2G').innerHTML = "";
            document.getElementById('incorr41_2G').innerHTML = "";
        }
    }else{
        x1.style.borderColor="gray";
        y1.style.borderColor="gray"; 
        x2.style.borderColor="gray"; 
        y2.style.borderColor="gray"; 
               
        if(isNaN(parseInt(x1.value)) || isNaN(parseInt(y1.value)) || isNaN(parseInt(x2.value)) || isNaN(parseInt(y2.value))){
            if(isNaN(parseInt(x1.value))){
                x1.style.borderColor="red"; 
                document.getElementById('incorr1_2G').innerHTML = "";
                document.getElementById('incorr11_2G').innerHTML = "Solo se aceptan valores numéricos.";
            }else{
                x1.style.borderColor="gray";
                document.getElementById('incorr1_2G').innerHTML = "";
                document.getElementById('incorr11_2G').innerHTML = "";
            }    
            if(isNaN(parseInt(y1.value))){
                y1.style.borderColor="red"; 
                document.getElementById('incorr2_2G').innerHTML = "";
                document.getElementById('incorr21_2G').innerHTML = "Solo se aceptan valores numéricos.";
            }else{
                y1.style.borderColor="gray";
                document.getElementById('incorr2_2G').innerHTML = "";
                document.getElementById('incorr21_2G').innerHTML = "";            
            }
            if(isNaN(parseInt(x2.value))){
                x2.style.borderColor="red"; 
                document.getElementById('incorr3_2G').innerHTML = "";
                document.getElementById('incorr31_2G').innerHTML = "Solo se aceptan valores numéricos.";
             }else{
                x2.style.borderColor="gray";
                document.getElementById('incorr3_2G').innerHTML = "";
                document.getElementById('incorr31_2G').innerHTML = "";
            }
            if(isNaN(parseInt(y2.value))){
                y2.style.borderColor="red"; 
                document.getElementById('incorr4_2G').innerHTML = "";
                document.getElementById('incorr41_2G').innerHTML = "Solo se aceptan valores numéricos.";
             }else{
                y2.style.borderColor="gray";
                document.getElementById('incorr4_2G').innerHTML = "";
                document.getElementById('incorr41_2G').innerHTML = "";
            }
        }else{
            let x1 = parseFloat(document.getElementById('x1_2').value);
            let x2 = parseFloat(document.getElementById('x2_2').value);
            let y1 = parseFloat(document.getElementById('y1_2').value);
            let y2 = parseFloat(document.getElementById('y2_2').value);
            let X = Math.abs(x2 - x1);
            let Y = Math.abs(y2 - y1);
            let d = (Math.sqrt(Math.pow(X, 2) + Math.pow(Y, 2)));           
            document.getElementById('incorr1_2G').innerHTML = "";
            document.getElementById('incorr2_2G').innerHTML = "";
            document.getElementById('incorr3_2G').innerHTML = "";
            document.getElementById('incorr4_2G').innerHTML = "";
            document.getElementById('incorr11_2G').innerHTML = "";
            document.getElementById('incorr21_2G').innerHTML = "";
            document.getElementById('incorr31_2G').innerHTML = "";
            document.getElementById('incorr41_2G').innerHTML = "";  
            document.getElementById('distancia').innerHTML = d; 
        }
    } 
}
function limpiar3G() {
    document.getElementById('pMedio').reset();
    document.getElementById('xmedio').innerHTML = " ";
    document.getElementById('ymedio').innerHTML = " ";
    document.getElementById('incorr1_3G').innerHTML = "";
    document.getElementById('incorr2_3G').innerHTML = "";
    document.getElementById('incorr3_3G').innerHTML = "";
    document.getElementById('incorr4_3G').innerHTML = "";
    document.getElementById('incorr11_3G').innerHTML = "";
    document.getElementById('incorr21_3G').innerHTML = "";
    document.getElementById('incorr31_3G').innerHTML = "";
    document.getElementById('incorr41_3G').innerHTML = "";     
}
function calcula3G() {
    let x1 = document.getElementById('x1_3');
    let y1 = document.getElementById('y1_3');
    let x2 = document.getElementById('x2_3');
    let y2 = document.getElementById('y2_3');
    /*la validación primero se fija sí todos los campos está llenos y luego sí son números. */
    if(x1.value=="" || y1.value=="" || x2.value=="" ||y2.value==""){
        if(x1.value==""){
            x1.style.borderColor="red"; 
            document.getElementById('incorr11_3G').innerHTML = "";
            document.getElementById('incorr1_3G').innerHTML = "Los campos no pueden estar vacios.";
        }else{
            x1.style.borderColor="gray";
            document.getElementById('incorr1_3G').innerHTML = "";
            document.getElementById('incorr11_3G').innerHTML = "";
        }
        if(y1.value==""){
            y1.style.borderColor="red"; 
            document.getElementById('incorr21_3G').innerHTML = "";
            document.getElementById('incorr2_3G').innerHTML = "Los campos no pueden estar vacios.";
        }else{
            y1.style.borderColor="gray";
            document.getElementById('incorr2_3G').innerHTML = "";
            document.getElementById('incorr21_3G').innerHTML = "";
        }
        if(x2.value==""){
            x2.style.borderColor="red"; 
            document.getElementById('incorr31_3G').innerHTML = "";
            document.getElementById('incorr3_3G').innerHTML = "Los campos no pueden estar vacios.";
        }else{
            x2.style.borderColor="gray";
            document.getElementById('incorr3_3G').innerHTML = "";
            document.getElementById('incorr31_3G').innerHTML = "";
        }
        if(y2.value==""){
            y2.style.borderColor="red"; 
            document.getElementById('incorr41_3G').innerHTML = "";
            document.getElementById('incorr4_3G').innerHTML = "Los campos no pueden estar vacios.";
        }else{
            y2.style.borderColor="gray";
            document.getElementById('incorr4_3G').innerHTML = "";
            document.getElementById('incorr41_3G').innerHTML = "";
        }
    }else{
        x1.style.borderColor="gray";
        y1.style.borderColor="gray"; 
        x2.style.borderColor="gray"; 
        y2.style.borderColor="gray"; 
               
        if(isNaN(parseInt(x1.value)) || isNaN(parseInt(y1.value)) || isNaN(parseInt(x2.value)) || isNaN(parseInt(y2.value))){
            if(isNaN(parseInt(x1.value))){
                x1.style.borderColor="red"; 
                document.getElementById('incorr1_3G').innerHTML = "";
                document.getElementById('incorr11_3G').innerHTML = "Solo se aceptan valores numéricos.";
            }else{
                x1.style.borderColor="gray";
                document.getElementById('incorr1_3G').innerHTML = "";
                document.getElementById('incorr11_3G').innerHTML = "";
            }    
            if(isNaN(parseInt(y1.value))){
                y1.style.borderColor="red"; 
                document.getElementById('incorr2_3G').innerHTML = "";
                document.getElementById('incorr21_3G').innerHTML = "Solo se aceptan valores numéricos.";
            }else{
                y1.style.borderColor="gray";
                document.getElementById('incorr2_3G').innerHTML = "";
                document.getElementById('incorr21_3G').innerHTML = "";            
            }
            if(isNaN(parseInt(x2.value))){
                x2.style.borderColor="red"; 
                document.getElementById('incorr3_3G').innerHTML = "";
                document.getElementById('incorr31_3G').innerHTML = "Solo se aceptan valores numéricos.";
             }else{
                x2.style.borderColor="gray";
                document.getElementById('incorr3_3G').innerHTML = "";
                document.getElementById('incorr31_3G').innerHTML = "";
            }
            if(isNaN(parseInt(y2.value))){
                y2.style.borderColor="red"; 
                document.getElementById('incorr4_3G').innerHTML = "";
                document.getElementById('incorr41_3G').innerHTML = "Solo se aceptan valores numéricos.";
             }else{
                y2.style.borderColor="gray";
                document.getElementById('incorr4_3G').innerHTML = "";
                document.getElementById('incorr41_3G').innerHTML = "";
            }
        }else{
            let x1 = parseFloat(document.getElementById('x1_3').value);
            let x2 = parseFloat(document.getElementById('x2_3').value);
            let y1 = parseFloat(document.getElementById('y1_3').value);
            let y2 = parseFloat(document.getElementById('y2_3').value);
            let X = (x1 + x2)/2;
            let Y = (y1 + y2)/2;         
            document.getElementById('incorr1_3G').innerHTML = "";
            document.getElementById('incorr2_3G').innerHTML = "";
            document.getElementById('incorr3_3G').innerHTML = "";
            document.getElementById('incorr4_3G').innerHTML = "";
            document.getElementById('incorr11_3G').innerHTML = "";
            document.getElementById('incorr21_3G').innerHTML = "";
            document.getElementById('incorr31_3G').innerHTML = "";
            document.getElementById('incorr41_3G').innerHTML = ""; 
            document.getElementById('xmedio').innerHTML = X;
            document.getElementById('ymedio').innerHTML = Y;   
        }
    }
}

function limpiar4G() {
    document.getElementById('ecRecta').reset();
    document.getElementById('pendiente4').innerHTML = "";
    document.getElementById('ordOrig').innerHTML = "";
    document.getElementById('abscOrig').innerHTML = "";
    document.getElementById('incorr4G').innerHTML = "";
    document.getElementById('incorr1_4G').innerHTML = "";
    document.getElementById('incorr2_4G').innerHTML = "";
    document.getElementById('incorr3_4G').innerHTML = "";
    document.getElementById('incorr11_4G').innerHTML = "";
    document.getElementById('incorr21_4G').innerHTML = "";
    document.getElementById('incorr31_4G').innerHTML = "";    
}
function calcula4G(){
    let a = document.getElementById('a4');
    let b = document.getElementById('b4');
    let c = document.getElementById('c4');
    /*la validación primero se fija sí todos los campos está llenos y luego sí son números. */
    if(a.value=="" || b.value=="" || c.value==""){
        if(a.value==""){
            a.style.borderColor="red"; 
            document.getElementById('incorr11_4G').innerHTML = "";
            document.getElementById('incorr1_4G').innerHTML = "Los campos no pueden estar vacios.";
        }else{
            a.style.borderColor="gray";
            document.getElementById('incorr1_4G').innerHTML = "";
            document.getElementById('incorr11_4G').innerHTML = "";
        }
        if(b.value==""){
            b.style.borderColor="red"; 
            document.getElementById('incorr21_4G').innerHTML = "";
            document.getElementById('incorr2_4G').innerHTML = "Los campos no pueden estar vacios.";
        }else{
            b.style.borderColor="gray";
            document.getElementById('incorr2_4G').innerHTML = "";
            document.getElementById('incorr21_4G').innerHTML = "";
        }
        if(c.value==""){
            c.style.borderColor="red"; 
            document.getElementById('incorr31_4G').innerHTML = "";
            document.getElementById('incorr3_4G').innerHTML = "Los campos no pueden estar vacios.";
        }else{
            c.style.borderColor="gray";
            document.getElementById('incorr3_4G').innerHTML = "";
            document.getElementById('incorr31_4G').innerHTML = "";
        }
    }else{
        a.style.borderColor="gray";
        b.style.borderColor="gray"; 
        c.style.borderColor="gray"; 
               
        if(isNaN(parseInt(a.value)) || isNaN(parseInt(b.value)) || isNaN(parseInt(c.value))){
            if(isNaN(parseInt(a.value))){
                a.style.borderColor="red"; 
                document.getElementById('incorr1_4G').innerHTML = "";
                document.getElementById('incorr11_4G').innerHTML = "Solo se aceptan valores numéricos.";
            }else{
                a.style.borderColor="gray";
                document.getElementById('incorr1_4G').innerHTML = "";
                document.getElementById('incorr11_4G').innerHTML = "";
            }    
            if(isNaN(parseInt(b.value))){
                b.style.borderColor="red"; 
                document.getElementById('incorr2_4G').innerHTML = "";
                document.getElementById('incorr21_4G').innerHTML = "Solo se aceptan valores numéricos.";
            }else{
                b.style.borderColor="gray";
                document.getElementById('incorr2_4G').innerHTML = "";
                document.getElementById('incorr21_4G').innerHTML = "";            
            }
            if(isNaN(parseInt(c.value))){
                c.style.borderColor="red"; 
                document.getElementById('incorr3_4G').innerHTML = "";
                document.getElementById('incorr31_4G').innerHTML = "Solo se aceptan valores numéricos.";
             }else{
                c.style.borderColor="gray";
                document.getElementById('incorr3_4G').innerHTML = "";
                document.getElementById('incorr31_4G').innerHTML = "";
            }
        }else{
            ecGeRec();        
            document.getElementById('incorr1_4G').innerHTML = "";
            document.getElementById('incorr2_4G').innerHTML = "";
            document.getElementById('incorr3_4G').innerHTML = "";
            document.getElementById('incorr11_4G').innerHTML = "";
            document.getElementById('incorr21_4G').innerHTML = "";
            document.getElementById('incorr31_4G').innerHTML = "";
        }
    }
}

function ecGeRec() {
    let a = parseInt(document.getElementById('a4').value);
    let b = parseInt(document.getElementById('b4').value);
    let c = parseInt(document.getElementById('c4').value);
    if(a==0 && b==0){
        document.getElementById('incorr4G').innerHTML = "A y B no pueden ser 0 al mismo tiempo.";
        document.getElementById('pendiente4').innerHTML = "";
        document.getElementById('ordOrig').innerHTML = "";
        document.getElementById('abscOrig').innerHTML = "";
    }else{
        if(a<0){
        document.getElementById('incorr4G').innerHTML = "A debe ser positiva.";
        document.getElementById('pendiente4').innerHTML = "";
        document.getElementById('ordOrig').innerHTML = "";
        document.getElementById('abscOrig').innerHTML = "";
        }else{
            let m;
            let x;
            let y;
            if(a==0){
                m = -(b);
                x = -(c);
                y = -(c/b);
            }else{
                if(b==0){
                    m = -(a);
                    x = -(c/a);
                    y = -(c);
                }else{
                    if(c==0){
                        m = -(a/b);
                        x = -(a);
                        y = -(b); 
                    }else{
                        m = -(a/b);
                        x = -(c/a);
                        y = -(c/b);  
                    }                    
                }
            }
            document.getElementById('incorr4G').innerHTML = "";
            document.getElementById('pendiente4').innerHTML = m;
            document.getElementById('ordOrig').innerHTML = y;
            document.getElementById('abscOrig').innerHTML = x; 
        }
    }

    
}