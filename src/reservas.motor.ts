import { Reserva } from "./reservas.modelo";

class ReservaHotel {
  reservas: Reserva[];
  precioStandard: number;
  precioSuite: number;
  precioDesayuno: number;

  constructor(reservas: Reserva[]) {
    this.reservas = reservas;
    this.precioStandard = 0;
    this.precioSuite = 0;
    this.precioDesayuno = 15;
  }

  totalSinIVA() {
    return this.reservas.reduce((acc, reserva) => {
      const precioHabitacion =
        reserva.tipoHabitacion === "Standard"
          ? this.precioStandard
          : this.precioSuite;
      const totalPrecioDesayuno = reserva.desayuno
        ? reserva.pax * reserva.noches * this.precioDesayuno
        : 0;
      const subtotal = reserva.noches * precioHabitacion + totalPrecioDesayuno;
      return acc + subtotal;
    }, 0);
  }

  totalConIVA(): number {
    return Number((this.totalSinIVA() * 1.21).toFixed(2));
  }
}

export class ReservaParticular extends ReservaHotel {
  cargosPorPersonaAdicional: number;
  constructor(reservas: Reserva[]) {
    super(reservas);
    this.precioStandard = 100;
    this.precioSuite = 150;
    this.cargosPorPersonaAdicional = 40;
  }

  totalSinIVAMasCargoPorPersonaAdicional() {
    return (
      this.totalSinIVA() +
      this.reservas.reduce((acc: number, reserva: Reserva): number => {
        if (reserva.pax > 1) {
          acc =
            acc +
            (reserva.pax - 1) * reserva.noches * this.cargosPorPersonaAdicional;
        }
        return acc;
      }, 0)
    );
  }

  totalConIVA(): number {
    return Number(
      (this.totalSinIVAMasCargoPorPersonaAdicional() * 1.21).toFixed(2)
    );
  }
}

export class ReservaOperador extends ReservaHotel {
  descuento: number;

  constructor(reservas: Reserva[]) {
    super(reservas);
    this.descuento = 15;
    this.precioSuite = 100;
    this.precioStandard = 100;
  }

  totalSinIVAConDescuento(): number {
    return this.totalSinIVA() - (this.totalSinIVA() * this.descuento) / 100;
  }

  totalConIVA() {
    return Number((this.totalSinIVAConDescuento() * 1.21).toFixed(2));
  }
}
