function rot13(str) {
  const loCaseSign = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
 const upCaseSign = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z', 'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
 
 const cypher = [];
 let message = str.concat('');
 for (let i=0;i<message.length;i++) {
     if (message.charAt(i) === ' '
         || /^[A-Za-z0-9]*$/.test(message.charAt(i)) === false
         || isNaN(message.charAt(i)) === false) {
     cypher.push(message.charAt(i))
     } else if (message.charAt(i) === message.charAt(i).toUpperCase()) {
       let upperCaseCy = (13 + upCaseSign.findIndex(e => e === message.charAt(i)));
       cypher.push(upCaseSign[upperCaseCy]);
     } else if (message.charAt(i) === message.charAt(i).toLowerCase()) {
       let loCaseCy = (13 + loCaseSign.findIndex(e => e === message.charAt(i)));
       cypher.push(loCaseSign[loCaseCy])
     }  
 }
 return cypher.join('');
}
  

const btn = document.getElementById("button");
btn.onclick = function submit() {
  const str = document.getElementById("lift").value
  document.getElementById('info').innerHTML = `<h3><strong>${rot13(str)}</strong></h3>`
}


