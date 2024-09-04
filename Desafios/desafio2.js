const temA = (string) => {
  if(!string){
    string="DesAfio  Target"
  }
  const arrayLetras = string.split("");
  const arrayComA = arrayLetras.filter(
    (letra) => letra === "a" || letra === "A" || letra === "ã" || letra === "Ã"
  ).length;

  console.log(` Essa palavra possui ${arrayComA} letras As`);
};
temA("Amanhã");
