const inputHtml = document.getElementById("input");
const outputHtml = document.getElementById("output");
const btnHtml = document.getElementById("btn");
const btnHtml1 = document.getElementById("btn1");

btnHtml.addEventListener("click" , textChanger);
btnHtml1.addEventListener("click" , textChanger1);

function textChanger() {
    let text = inputHtml.value, output = "", i;
    if(text !== ""){
      text = text.split(/	game	|\r?\n/);
      i = text.length - 8;
      while(i > 0) {
          output = output.concat(text[i]);
          output = output.concat(",");
          output = output.concat(Math.round(100 * text[i+2]));
          output = output.concat("\n");
          i = i - 12;
      }
      outputHtml.value = output;
    }
}

function textChanger1() {
    let text = inputHtml.value, output = "", i, arr = [];
    if(text !== ""){
      text = text.split(/	game	|\r?\n/);
      i = text.length - 8;
      while(i > 0) {
          
          output = output.concat(text[i]);
          output = output.concat("\n");
          output = output.concat(Math.round(100 * text[i+2]));
          output = output.concat("\n");
          arr.push(output);
        output = "";
          //output = output.concat("\n");
          i = i - 12;
      }
      arr.sort();
      for(i = 0; i < arr.length; i++) {
        output = output.concat(arr[i])
        output = output.concat("\n");
      }
      outputHtml.value = output;
    }
}
