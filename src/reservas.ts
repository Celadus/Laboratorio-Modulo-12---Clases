import { ReservaParticular, ReservaOperador } from "./reservas.motor";
import { reservas } from "./reservas.modelo";

const reservaParticularCaso1 = new ReservaParticular(reservas);
console.log(reservaParticularCaso1);
console.log(
  "TOTAL sin IVA + Desayunos + Cargo adicional por cada persona: ",
  reservaParticularCaso1.totalSinIVAMasCargoPorPersonaAdicional()
);
console.log("TOTAL con IVA: ", reservaParticularCaso1.totalConIVA());

const reservaOperadorCaso2 = new ReservaOperador(reservas);
console.log(reservaOperadorCaso2);
console.log("TOTAL sin IVA + Desayunos: ", reservaOperadorCaso2.totalSinIVA());
console.log(
  "Subtotal sin IVA + Desayunos + Descuento: ",
  reservaOperadorCaso2.totalSinIVAConDescuento()
);
console.log("TOTAL con IVA: ", reservaOperadorCaso2.totalConIVA());
