class Hotel {
    constructor(nombre, ciudad, habitacionesDisponibles) {
        this.nombre = nombre;
        this.ciudad = ciudad;
        this.habitacionesDisponibles = habitacionesDisponibles;
    }

    reservar(cantidad) {
        if (cantidad > this.habitacionesDisponibles) {
            console.log("No hay suficientes habitaciones.");
        } else {
            this.habitacionesDisponibles -= cantidad;
        }
    }

    liberar(cantidad) {
        this.habitacionesDisponibles += cantidad;
    }

    info() {
        return `Hotel: ${this.nombre}, Ciudad: ${this.ciudad}, Habitaciones disponibles: ${this.habitacionesDisponibles}`;
    }
}
const hotel1 = new Hotel("Hotel Central", "La Paz", 10);
hotel1.reservar(3);
console.log(hotel1.info());
hotel1.liberar(2);
console.log(hotel1.info());
