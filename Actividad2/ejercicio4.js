const lugarTuristico = {
    nombre: "Parque Central",
    ciudad: "Cochabamba",
    precioEntrada: 30,
    horario: "08:00 - 18:00",
    calificaciones: [5, 4, 4, 5, 3],

    promedioCalificaciones() {
        const suma = this.calificaciones.reduce((acc, val) => acc + val, 0);
        return suma / this.calificaciones.length;
    },

    aplicarDescuento(porcentaje) {
        this.precioEntrada -= this.precioEntrada * (porcentaje / 100);
    }
};
console.log(lugarTuristico.promedioCalificaciones());  
lugarTuristico.aplicarDescuento(20);
console.log(lugarTuristico.precioEntrada);
