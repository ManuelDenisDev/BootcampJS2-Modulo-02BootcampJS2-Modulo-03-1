import "./style.css";

/*
🥬 Lechuga
🍄 Setas
🫘 Alubias
🧅 Cebolla
🌽 Maíz
🫐 Arándanos
🫒 Aceitunas
🍍 Piña
🥭 Mango
🥕 Zanahoria
🍅 Tomate
🥒 Pepino
🥑 Aguacate
🥓 Bacon
🥚 huevos
🧀 Queso
*/

const estiloTitulo = "color: blue; font-size: 18px;";
const estiloSubtitulo = "color: red; font-size: 16px;";
const estiloPreparacion = "font-style: italic;";

const lechuga = "🥬 Lechuga";
const setas = "🍄 Setas";
const alubias = "🫘 Alubias";
const cebolla = "🧅 Cebolla";
const maiz = "🌽 Maíz";
const arandanos = "🫐 Arándanos";
const aceitunas = "🫒 Aceitunas";
const pina = "🍍 Piña";
const mango = "🥭 Mango";
const zanahoria = "🥕 Zanahoria";
const tomate = "🍅 Tomate";
const pepino = "🥒 Pepino";
const aguacate = "🥑 Aguacate";
const bacon = "🥓 Bacon";
const huevos = "🥚 Huevos";
const queso = "🧀 Queso";

// Titulo
console.log("%cEnsalada de alubias con aguacate y huevo", estiloTitulo);

// Ingredientes

console.log("%cIngredientes:", estiloSubtitulo);
console.log("Alubias, aguacate, huevo, cebolla, tomate, lechuga.");
console.log(
  `${alubias}, ${aguacate}, ${huevos}, ${cebolla}, ${tomate}, ${lechuga}.`
);

// Preparación
console.log("%cPreparación:", estiloSubtitulo);
console.log(
  "%cCocer las alubias y dejar enfriar. Mezclar con aguacate en cubos, huevo cocido en rodajas, cebolla en juliana, tomate en cubos y lechuga troceada. Aliñar con aceite de oliva y vinagre.",
  estiloPreparacion
);

console.log("****************************");

// Titulo
console.log("%cEnsalada de setas y bacon", estiloTitulo);

// Ingredientes
console.log("%cIngredientes:", estiloSubtitulo);
console.log(`${setas}, ${bacon}, ${lechuga}, ${tomate}, ${cebolla}, ${queso}.`);

// Preparación
console.log("%cPreparación:", estiloSubtitulo);
console.log(
  "%cSaltear las setas y el bacon hasta que estén dorados. Mezclar con lechuga troceada, tomate en cubos, cebolla en juliana y queso rallado. Aliñar con aceite de oliva y vinagre.",
  estiloPreparacion
);

console.log("****************************");

// Titulo
console.log("%cEnsalada de arándanos y pollo", estiloTitulo);

// Ingredientes
console.log("%cIngredientes:", estiloSubtitulo);
console.log(
  `${arandanos}, pollo cocido, ${lechuga}, ${zanahoria}, ${queso}, nueces.`
);

// Preparación
console.log("%cPreparación:", estiloSubtitulo);
console.log(
  "%cMezclar los arándanos con el pollo cocido en cubos, lechuga troceada, zanahoria rallada, queso rallado y nueces picadas. Aliñar con una vinagreta de miel y mostaza.",
  estiloPreparacion
);

console.log("****************************");

// Titulo
console.log("%cEnsalada de maíz y piña", estiloTitulo);

// Ingredientes
console.log("%cIngredientes:", estiloSubtitulo);
console.log(
  `${maiz}, ${pina}, ${lechuga}, ${pepino}, ${cebolla}, ${aguacate}.`
);

// Preparación
console.log("%cPreparación:", estiloSubtitulo);
console.log(
  "%cMezclar el maíz con la piña en cubos, lechuga troceada, pepino en rodajas, cebolla en juliana y aguacate en cubos. Aliñar con una vinagreta de aceite de oliva y vinagre.",
  estiloPreparacion
);

console.log("****************************");

// Titulo
console.log("%cEnsalada de mango y queso feta", estiloTitulo);

// Ingredientes
console.log("%cIngredientes:", estiloSubtitulo);
console.log(
  `Mango, ${queso}, ${lechuga}, ${cebolla}, ${pepino}, ${aceitunas}.`
);

// Preparación
console.log("%cPreparación:", estiloSubtitulo);
console.log(
  "%cMezclar el mango en cubos con el queso feta desmenuzado, lechuga troceada, cebolla en juliana, pepino en rodajas y aceitunas. Aliñar con una vinagreta de limón y aceite de oliva.",
  estiloPreparacion
);

console.log("****************************");
