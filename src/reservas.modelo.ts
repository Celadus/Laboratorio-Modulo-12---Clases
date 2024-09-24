export interface Reserva {
  tipoHabitacion: "Standard" | "Suite";
  desayuno: boolean;
  pax: number;
  noches: number;
}

export const reservas: Reserva[] = [
  {
    tipoHabitacion: "Standard",
    desayuno: false,
    pax: 1,
    noches: 3,
  },
  {
    tipoHabitacion: "Standard",
    desayuno: false,
    pax: 1,
    noches: 4,
  },
  {
    tipoHabitacion: "Suite",
    desayuno: true,
    pax: 2,
    noches: 1,
  },
];
