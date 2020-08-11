function previdenciaSocial(){
    var vrRenda = document.getElementById("renda").value;
    var faixaReal1 = 1045; // primeira faixa do INSS 2020
    var faixaReal2i = 1045.01; // primeiro nível da segudnda faixa do INSS 2020
    var faixaReal2 = 2089.60; // segundo nível da segunda faixa do INSS 2020
    var faixaReal3i = 2089.61; // primeiro nível da terceira faixa do INSS 2020
    var faixaReal3 = 3134.40; // segundo nível da terceira faiza do INSS 2020
    var faixaReal4i = 3134.41; // primeiro nível da quarta faixa do INSS 2020
    var faixaReal4 = 6101.06; // segundo nível da quarta faixa do INSS 2020
    var aliquota1 = 0.075; // alíquota primeira faixa INSS 2020
    var aliquota2 = 0.090; // alíquota segunda faixa INSS 2020
    var aliquota3 = 0.120; // alíquota terceita faixa INSS 2020
    var aliquota4 = 0.140; // alíquota quarta faixa INSS 2020
    var faixa1 = 0; // suporte para calculo do INSS
    var faixa2 = 0; // suporte para calculo do INSS
    var faixa3 = 0; // suporte para calculo do INSS
    var faixa4 = 0; // suporte para calculo do INSS
    var faixaCoringa = 0; // suporte para calculo do INSS
    var inssSim = document.getElementById("customSwitch1").checked
    var inssDevido = 0;
        
    if(vrRenda>0 && inssSim==true){
        faixa1 = faixaReal1*aliquota1;
    }else{
        faixa1 = 0;
    }if(vrRenda>=faixaReal2 && inssSim==true){
        faixa2 = (faixaReal2-faixaReal1)*aliquota2;
    }else{
        faixa2 = 0;
    }if(vrRenda>=faixaReal3 && inssSim==true){
        faixa3 = (faixaReal3-faixaReal2)*aliquota3;
    }else {
        faixa3 = 0;
    }if (vrRenda>=faixaReal4 && inssSim==true){
        faixa4 = (faixaReal4-faixaReal3)*aliquota4;
    }else{
        faixa4 = 0;
    }
    if (vrRenda<=faixaReal1 && inssSim==true){
        faixaCoringa = (vrRenda - faixaReal1) * aliquota1;
    }else if(vrRenda>=faixaReal2i && vrRenda<=faixaReal2 && inssSim==true){
        faixaCoringa = (vrRenda - faixaReal2i) *aliquota2;
    }else if(vrRenda>=faixaReal3i && vrRenda<=faixaReal3 && inssSim==true){
        faixaCoringa = (vrRenda - faixaReal3i) *aliquota3;
    }else if(vrRenda>=faixaReal4i && vrRenda<=faixaReal4 && inssSim==true){
        faixaCoringa = (vrRenda - faixaReal4i) *aliquota4;
    }else {
        faixaCoringa=0;
    }
    inssDevido = faixa1+faixa2+faixa3+faixa4+faixaCoringa;

    return inssDevido;
}    

function impostoRenda(){
    var vrRenda = document.getElementById("renda").value;
    var vrDependentes = 189.59; // valor da dedução vigente
    var dependentes = document.getElementById("dependente").value * vrDependentes;
    var pensoes = document.getElementById("pensao").value;
    var outras = document.getElementById("outra").value;
    var faixaIr1=1903.98; // primeira faixa do IRRF 2020
    var faixaIr2i=1903.99; // primeiro nível da segudnda faixa do IRRF 2020
    var faixaIr2=2836.65; // segundo nível da segunda faixa do IRRF 2020
    var faixaIr3i=2836.66; // primeiro nível da terceira faixa do IRRF 2020
    var faixaIr3=3751.05; // segundo nível da terceira faiza do IRRF 2020
    var faixaIr4i=3751.06; // primeiro nível da quarta faixa do IRRF 2020
    var faixaIr4=4664.68; // segundo nível da quarta faixa do IRRF 2020
    var aliquotaIr1 = 0.075; // alíquota primeira faixa IRRF 2020
    var aliquotaIr2 = 0.15; // alíquota segunda faixa IRRF 2020
    var aliquotaIr3 = 0.225; // alíquota terceita faixa IRRF 2020
    var aliquotaIr4 = 0.275; // alíquota quarta faixa IRRF 2020
    var dedutivel1 = 142.80; // parcela dedutível primeira faixa IRRF 2020
    var dedutivel2=354.80; // parcela dedutível segunda faixa IRRF 2020
    var dedutivel3=636.13; // parcela dedutível terceira faixa IRRF 2020
    var dedutivel4=869.36; // parcela dedutível quarta faixa IRRF 2020
    var vrInss = 0;
    var baseAntesDoIr =0;
    var vrIrpf = 0;
    var inssSim = document.getElementById("customSwitch1").checked
    
    if(inssSim==true){
        vrInss = previdenciaSocial();
    }else{
        vrInss = 0;
    }
    
        baseAntesDoIr = vrRenda - vrInss - dependentes - pensoes - outras;
         

    if(baseAntesDoIr<=faixaIr1){
        vrIrpf = 0;
    }else if(baseAntesDoIr>=faixaIr2i && baseAntesDoIr<=faixaIr2){
        vrIrpf = baseAntesDoIr * aliquotaIr1 - dedutivel1;
    }else if(baseAntesDoIr>= faixaIr3i && baseAntesDoIr<=faixaIr3){
        vrIrpf = baseAntesDoIr * aliquotaIr2 - dedutivel2;
    }else if(baseAntesDoIr>=faixaIr4i && baseAntesDoIr<=faixaIr4){
        vrIrpf = baseAntesDoIr * aliquotaIr3 - dedutivel3;
    }else{
        vrIrpf = baseAntesDoIr * aliquotaIr4 - dedutivel4;
    }     
        return vrIrpf;
    }


   
function estimativaImpostoRenda(){
  document.getElementById("tributo").innerHTML="Valor do IRRF : "+ impostoRenda().toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) +" Valor do INSS : "+ previdenciaSocial().toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  document.getElementById('tributo').className = 'new-tributo';  
}



