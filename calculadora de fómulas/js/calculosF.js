/*alert('wenas, wenas');*/
/*-------------------------------Física---------------------------- */
/*  LIMPIAR CAMPOS */
function limpiar1F(){
    document.getElementById('posicionFinal').reset(); 
    document.getElementById('resultado1').innerHTML = "";
    document.getElementById('incorr1_1F').innerHTML = "";
    document.getElementById('incorr2_1F').innerHTML = "";
    document.getElementById('incorr3_1F').innerHTML = "";
    document.getElementById('incorr4_1F').innerHTML = "";
    document.getElementById('incorr11_1F').innerHTML = "";
    document.getElementById('incorr21_1F').innerHTML = "";
    document.getElementById('incorr31_1F').innerHTML = "";
    document.getElementById('incorr41_1F').innerHTML = "";    
}
function limpiar2F(){
    document.getElementById('velocidad').reset();  
    document.getElementById('resultado2').innerHTML = " "; 
    document.getElementById('incorr1_2F').innerHTML = "";
    document.getElementById('incorr2_2F').innerHTML = "";
    document.getElementById('incorr3_2F').innerHTML = "";
    document.getElementById('incorr4_2F').innerHTML = "";
    document.getElementById('incorr11_2F').innerHTML = "";
    document.getElementById('incorr21_2F').innerHTML = "";
    document.getElementById('incorr31_2F').innerHTML = "";
    document.getElementById('incorr41_2F').innerHTML = "";  
}
function limpiar3F(){
    document.getElementById('tiempo').reset();  
    document.getElementById('resultado3').innerHTML = " "; 
    document.getElementById('incorr1_3F').innerHTML = "";
    document.getElementById('incorr2_3F').innerHTML = "";
    document.getElementById('incorr3_3F').innerHTML = "";
    document.getElementById('incorr11_3F').innerHTML = "";
    document.getElementById('incorr21_3F').innerHTML = "";
    document.getElementById('incorr31_3F').innerHTML = ""; 
}
function limpiar4F(){
    document.getElementById('posicionInicial').reset();  
    document.getElementById('resultado4').innerHTML = " ";
    document.getElementById('incorr1_4F').innerHTML = "";
    document.getElementById('incorr2_4F').innerHTML = "";
    document.getElementById('incorr3_4F').innerHTML = "";
    document.getElementById('incorr11_4F').innerHTML = "";
    document.getElementById('incorr21_4F').innerHTML = "";
    document.getElementById('incorr31_4F').innerHTML = ""; 
}
/*  CALCULOS  */
function calcula1F(){
    let xo = document.getElementById('posIni1');
    let vo = document.getElementById('veloIni1');
    let tf = document.getElementById('tiempoF1');
    let to = document.getElementById('tiempoI1');
    //alert(typeof(xo.value));
    /*la validación primero se fija sí todos los campos está llenos y luego sí son números. */
    if(xo.value=="" || vo.value=="" || tf.value=="" ||to.value==""){
        //alert(parseInt(xo.value));
        if(xo.value==""){
            xo.style.borderColor="red"; 
            document.getElementById('incorr11_1F').innerHTML = "";
            document.getElementById('incorr1_1F').innerHTML = "Los campos no pueden estar vacios.";
        }else{
            xo.style.borderColor="gray";
            document.getElementById('incorr1_1F').innerHTML = "";
            document.getElementById('incorr11_1F').innerHTML = "";
        }
        if(vo.value==""){
            vo.style.borderColor="red"; 
            document.getElementById('incorr21_1F').innerHTML = "";
            document.getElementById('incorr2_1F').innerHTML = "Los campos no pueden estar vacios.";
        }else{
            vo.style.borderColor="gray";
            document.getElementById('incorr2_1F').innerHTML = "";
            document.getElementById('incorr21_1F').innerHTML = "";
        }
        if(tf.value==""){
            tf.style.borderColor="red"; 
            document.getElementById('incorr31_1F').innerHTML = "";
            document.getElementById('incorr3_1F').innerHTML = "Los campos no pueden estar vacios.";
        }else{
            tf.style.borderColor="gray";
            document.getElementById('incorr3_1F').innerHTML = "";
            document.getElementById('incorr31_1F').innerHTML = "";
        }
        if(to.value==""){
            to.style.borderColor="red"; 
            document.getElementById('incorr41_1F').innerHTML = "";
            document.getElementById('incorr4_1F').innerHTML = "Los campos no pueden estar vacios.";
        }else{
            to.style.borderColor="gray";
            document.getElementById('incorr4_1F').innerHTML = "";
            document.getElementById('incorr41_1F').innerHTML = "";
        }
    }else{
        xo.style.borderColor="gray";
        vo.style.borderColor="gray"; 
        tf.style.borderColor="gray"; 
        to.style.borderColor="gray"; 
               
        if(isNaN(parseInt(xo.value)) || isNaN(parseInt(vo.value)) || isNaN(parseInt(tf.value)) || isNaN(parseInt(to.value))){
            if(isNaN(parseInt(xo.value))){
                xo.style.borderColor="red"; 
                document.getElementById('incorr1_1F').innerHTML = "";
                document.getElementById('incorr11_1F').innerHTML = "Solo se aceptan valores numéricos.";
            }else{
                xo.style.borderColor="gray";
                document.getElementById('incorr1_1F').innerHTML = "";
                document.getElementById('incorr11_1F').innerHTML = "";
            }    
            if(isNaN(parseInt(vo.value))){
                vo.style.borderColor="red"; 
                document.getElementById('incorr2_1F').innerHTML = "";
                document.getElementById('incorr21_1F').innerHTML = "Solo se aceptan valores numéricos.";
            }else{
                vo.style.borderColor="gray";
                document.getElementById('incorr2_1F').innerHTML = "";
                document.getElementById('incorr21_1F').innerHTML = "";            
            }
            if(isNaN(parseInt(tf.value))){
                tf.style.borderColor="red"; 
                document.getElementById('incorr3_1F').innerHTML = "";
                document.getElementById('incorr31_1F').innerHTML = "Solo se aceptan valores numéricos.";
             }else{
                tf.style.borderColor="gray";
                document.getElementById('incorr3_1F').innerHTML = "";
                document.getElementById('incorr31_1F').innerHTML = "";
            }
            if(isNaN(parseInt(to.value))){
                to.style.borderColor="red"; 
                document.getElementById('incorr4_1F').innerHTML = "";
                document.getElementById('incorr41_1F').innerHTML = "Solo se aceptan valores numéricos.";
             }else{
                to.style.borderColor="gray";
                document.getElementById('incorr4_1F').innerHTML = "";
                document.getElementById('incorr41_1F').innerHTML = "";
            }
        }else{
            xo = parseInt(document.getElementById('posIni1').value);
            vo = parseInt(document.getElementById('veloIni1').value);
            tf = parseInt(document.getElementById('tiempoF1').value);
            to = parseInt(document.getElementById('tiempoI1').value);
            let xf = (xo+vo*(tf-to));
            document.getElementById('incorr1_1F').innerHTML = "";
            document.getElementById('incorr2_1F').innerHTML = "";
            document.getElementById('incorr3_1F').innerHTML = "";
            document.getElementById('incorr4_1F').innerHTML = "";
            document.getElementById('incorr11_1F').innerHTML = "";
            document.getElementById('incorr21_1F').innerHTML = "";
            document.getElementById('incorr31_1F').innerHTML = "";
            document.getElementById('incorr41_1F').innerHTML = "";  
            document.getElementById('resultado1').innerHTML = xf;
        }
    }    
}
function calcula2F(){
    let xo = document.getElementById('posIni2');
    let xf = document.getElementById('posFin2');
    let to = document.getElementById('tiempoI2');
    let tf = document.getElementById('tiempoF2');
    //alert(typeof(xo.value));
    /*la validación primero se fija sí todos los campos está llenos y luego sí son números. */
    if(xo.value=="" || xf.value=="" || tf.value=="" ||to.value==""){
        //alert(parseInt(xo.value));
        if(xo.value==""){
            xo.style.borderColor="red"; 
            document.getElementById('incorr11_2F').innerHTML = "";
            document.getElementById('incorr1_2F').innerHTML = "Los campos no pueden estar vacios.";
        }else{
            xo.style.borderColor="gray";
            document.getElementById('incorr1_2F').innerHTML = "";
            document.getElementById('incorr11_2F').innerHTML = "";
        }
        if(xf.value==""){
            xf.style.borderColor="red"; 
            document.getElementById('incorr21_2F').innerHTML = "";
            document.getElementById('incorr2_2F').innerHTML = "Los campos no pueden estar vacios.";
        }else{
            xf.style.borderColor="gray";
            document.getElementById('incorr2_2F').innerHTML = "";
            document.getElementById('incorr21_2F').innerHTML = "";
        }
        if(to.value==""){
            to.style.borderColor="red"; 
            document.getElementById('incorr31_2F').innerHTML = "";
            document.getElementById('incorr3_2F').innerHTML = "Los campos no pueden estar vacios.";
        }else{
            to.style.borderColor="gray";
            document.getElementById('incorr3_2F').innerHTML = "";
            document.getElementById('incorr31_2F').innerHTML = "";
        }
        if(tf.value==""){
            tf.style.borderColor="red"; 
            document.getElementById('incorr41_2F').innerHTML = "";
            document.getElementById('incorr4_2F').innerHTML = "Los campos no pueden estar vacios.";
        }else{
            tf.style.borderColor="gray";
            document.getElementById('incorr4_2F').innerHTML = "";
            document.getElementById('incorr41_2F').innerHTML = "";
        }
    }else{
        xo.style.borderColor="gray";
        xf.style.borderColor="gray"; 
        tf.style.borderColor="gray"; 
        to.style.borderColor="gray"; 
               
        if(isNaN(parseInt(xo.value)) || isNaN(parseInt(xf.value)) || isNaN(parseInt(tf.value)) || isNaN(parseInt(to.value))){
            if(isNaN(parseInt(xo.value))){
                xo.style.borderColor="red"; 
                document.getElementById('incorr1_2F').innerHTML = "";
                document.getElementById('incorr11_2F').innerHTML = "Solo se aceptan valores numéricos.";
            }else{
                xo.style.borderColor="gray";
                document.getElementById('incorr1_2F').innerHTML = "";
                document.getElementById('incorr11_2F').innerHTML = "";
            }    
            if(isNaN(parseInt(xf.value))){
                xf.style.borderColor="red"; 
                document.getElementById('incorr2_2F').innerHTML = "";
                document.getElementById('incorr21_2F').innerHTML = "Solo se aceptan valores numéricos.";
            }else{
                xf.style.borderColor="gray";
                document.getElementById('incorr2_2F').innerHTML = "";
                document.getElementById('incorr21_2F').innerHTML = "";            
            }
            if(isNaN(parseInt(to.value))){
                to.style.borderColor="red"; 
                document.getElementById('incorr3_2F').innerHTML = "";
                document.getElementById('incorr31_2F').innerHTML = "Solo se aceptan valores numéricos.";
             }else{
                to.style.borderColor="gray";
                document.getElementById('incorr3_2F').innerHTML = "";
                document.getElementById('incorr31_2F').innerHTML = "";
            }
            if(isNaN(parseInt(tf.value))){
                tf.style.borderColor="red"; 
                document.getElementById('incorr4_2F').innerHTML = "";
                document.getElementById('incorr41_2F').innerHTML = "Solo se aceptan valores numéricos.";
             }else{
                tf.style.borderColor="gray";
                document.getElementById('incorr4_2F').innerHTML = "";
                document.getElementById('incorr41_2F').innerHTML = "";
            }
        }else{
            xo = parseInt(document.getElementById('posIni2').value);
            xf = parseInt(document.getElementById('posFin2').value);
            tf = parseInt(document.getElementById('tiempoF2').value);
            to = parseInt(document.getElementById('tiempoI2').value);
            let v = (xf-xo)/(tf-to);
            document.getElementById('incorr1_2F').innerHTML = "";
            document.getElementById('incorr2_2F').innerHTML = "";
            document.getElementById('incorr3_2F').innerHTML = "";
            document.getElementById('incorr4_2F').innerHTML = "";
            document.getElementById('incorr11_2F').innerHTML = "";
            document.getElementById('incorr21_2F').innerHTML = "";
            document.getElementById('incorr31_2F').innerHTML = "";
            document.getElementById('incorr41_2F').innerHTML = "";  
            document.getElementById('resultado2').innerHTML = v;
        }
    } 
}
function calcula3F(){
    let xo = document.getElementById('posIni3');
    let xf = document.getElementById('posFin3');
    let v = document.getElementById('velo3');
    //alert(typeof(xo.value));
    /*la validación primero se fija sí todos los campos está llenos y luego sí son números. */
    if(xo.value=="" || xf.value=="" || v.value=="" ){
        //alert(parseInt(xo.value));
        if(xo.value==""){
            xo.style.borderColor="red"; 
            document.getElementById('incorr11_3F').innerHTML = "";
            document.getElementById('incorr1_3F').innerHTML = "Los campos no pueden estar vacios.";
        }else{
            xo.style.borderColor="gray";
            document.getElementById('incorr1_3F').innerHTML = "";
            document.getElementById('incorr11_3F').innerHTML = "";
        }
        if(xf.value==""){
            xf.style.borderColor="red"; 
            document.getElementById('incorr21_3F').innerHTML = "";
            document.getElementById('incorr2_3F').innerHTML = "Los campos no pueden estar vacios.";
        }else{
            xf.style.borderColor="gray";
            document.getElementById('incorr2_3F').innerHTML = "";
            document.getElementById('incorr21_3F').innerHTML = "";
        }
        if(v.value==""){
            v.style.borderColor="red"; 
            document.getElementById('incorr31_3F').innerHTML = "";
            document.getElementById('incorr3_3F').innerHTML = "Los campos no pueden estar vacios.";
        }else{
            v.style.borderColor="gray";
            document.getElementById('incorr3_3F').innerHTML = "";
            document.getElementById('incorr31_3F').innerHTML = "";
        }
    }else{
        xo.style.borderColor="gray";
        xf.style.borderColor="gray"; 
        v.style.borderColor="gray"; 
               
        if(isNaN(parseInt(xo.value)) || isNaN(parseInt(xf.value)) || isNaN(parseInt(v.value))){
            if(isNaN(parseInt(xo.value))){
                xo.style.borderColor="red"; 
                document.getElementById('incorr1_3F').innerHTML = "";
                document.getElementById('incorr11_3F').innerHTML = "Solo se aceptan valores numéricos.";
            }else{
                xo.style.borderColor="gray";
                document.getElementById('incorr1_3F').innerHTML = "";
                document.getElementById('incorr11_3F').innerHTML = "";
            }    
            if(isNaN(parseInt(xf.value))){
                xf.style.borderColor="red"; 
                document.getElementById('incorr2_3F').innerHTML = "";
                document.getElementById('incorr21_3F').innerHTML = "Solo se aceptan valores numéricos.";
            }else{
                xf.style.borderColor="gray";
                document.getElementById('incorr2_3F').innerHTML = "";
                document.getElementById('incorr21_3F').innerHTML = "";            
            }
            if(isNaN(parseInt(v.value))){
                v.style.borderColor="red"; 
                document.getElementById('incorr3_3F').innerHTML = "";
                document.getElementById('incorr31_3F').innerHTML = "Solo se aceptan valores numéricos.";
             }else{
                v.style.borderColor="gray";
                document.getElementById('incorr3_3F').innerHTML = "";
                document.getElementById('incorr31_3F').innerHTML = "";
            }
        }else{
            let xo = parseInt(document.getElementById('posIni3').value);
            let xf = parseInt(document.getElementById('posFin3').value);
            let v = parseInt(document.getElementById('velo3').value);
            let t = (xf-xo)/v;
            document.getElementById('incorr1_3F').innerHTML = "";
            document.getElementById('incorr2_3F').innerHTML = "";
            document.getElementById('incorr3_3F').innerHTML = "";
            document.getElementById('incorr11_3F').innerHTML = "";
            document.getElementById('incorr21_3F').innerHTML = "";
            document.getElementById('incorr31_3F').innerHTML = ""; 
            document.getElementById('resultado3').innerHTML = t;
        }
    } 
}
function calcula4F(){
    let vo = document.getElementById('veloIni4');
    let tf = document.getElementById('tiempoF4');
    let to = document.getElementById('tiempoI4');
    //alert(typeof(xo.value));
    /*la validación primero se fija sí todos los campos está llenos y luego sí son números. */
    if(vo.value=="" || tf.value=="" || to.value=="" ){
        //alert(parseInt(xo.value));
        if(vo.value==""){
            vo.style.borderColor="red"; 
            document.getElementById('incorr11_4F').innerHTML = "";
            document.getElementById('incorr1_4F').innerHTML = "Los campos no pueden estar vacios.";
        }else{
            vo.style.borderColor="gray";
            document.getElementById('incorr1_4F').innerHTML = "";
            document.getElementById('incorr11_4F').innerHTML = "";
        }
        if(tf.value==""){
            tf.style.borderColor="red"; 
            document.getElementById('incorr21_4F').innerHTML = "";
            document.getElementById('incorr2_4F').innerHTML = "Los campos no pueden estar vacios.";
        }else{
            tf.style.borderColor="gray";
            document.getElementById('incorr2_4F').innerHTML = "";
            document.getElementById('incorr21_4F').innerHTML = "";
        }
        if(to.value==""){
            to.style.borderColor="red"; 
            document.getElementById('incorr31_4F').innerHTML = "";
            document.getElementById('incorr3_4F').innerHTML = "Los campos no pueden estar vacios.";
        }else{
            to.style.borderColor="gray";
            document.getElementById('incorr3_4F').innerHTML = "";
            document.getElementById('incorr31_4F').innerHTML = "";
        }
    }else{
        vo.style.borderColor="gray";
        tf.style.borderColor="gray"; 
        to.style.borderColor="gray"; 
               
        if(isNaN(parseInt(vo.value)) || isNaN(parseInt(tf.value)) || isNaN(parseInt(to.value))){
            if(isNaN(parseInt(vo.value))){
                vo.style.borderColor="red"; 
                document.getElementById('incorr1_4F').innerHTML = "";
                document.getElementById('incorr11_4F').innerHTML = "Solo se aceptan valores numéricos.";
            }else{
                vo.style.borderColor="gray";
                document.getElementById('incorr1_4F').innerHTML = "";
                document.getElementById('incorr11_4F').innerHTML = "";
            }    
            if(isNaN(parseInt(tf.value))){
                tf.style.borderColor="red"; 
                document.getElementById('incorr2_4F').innerHTML = "";
                document.getElementById('incorr21_4F').innerHTML = "Solo se aceptan valores numéricos.";
            }else{
                tf.style.borderColor="gray";
                document.getElementById('incorr2_4F').innerHTML = "";
                document.getElementById('incorr21_4F').innerHTML = "";            
            }
            if(isNaN(parseInt(to.value))){
                to.style.borderColor="red"; 
                document.getElementById('incorr3_4F').innerHTML = "";
                document.getElementById('incorr31_4F').innerHTML = "Solo se aceptan valores numéricos.";
             }else{
                to.style.borderColor="gray";
                document.getElementById('incorr3_4F').innerHTML = "";
                document.getElementById('incorr31_4F').innerHTML = "";
            }
        }else{
            let vo = parseInt(document.getElementById('veloIni4').value);
            let tf = parseInt(document.getElementById('tiempoF4').value);
            let to = parseInt(document.getElementById('tiempoI4').value);
            let d = (vo)*(tf-to);
            document.getElementById('incorr1_4F').innerHTML = "";
            document.getElementById('incorr2_4F').innerHTML = "";
            document.getElementById('incorr3_4F').innerHTML = "";
            document.getElementById('incorr11_4F').innerHTML = "";
            document.getElementById('incorr21_4F').innerHTML = "";
            document.getElementById('incorr31_4F').innerHTML = ""; 
            document.getElementById('resultado4').innerHTML = d;
        }
    } 
}