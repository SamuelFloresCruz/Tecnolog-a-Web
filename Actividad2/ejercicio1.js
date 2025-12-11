function climaSegunTemperatura(temp) {
    if (temp >= -10 && temp <= 15) {
        return "Frío";
    } else if (temp >= 16 && temp <= 25) {
        return "Templado";
    } else if (temp >= 26 && temp <= 40) {
        return "Calor";
    } else {
        return "Temperatura fuera de rango";
    }
}
console.log(climaSegunTemperatura(20)); 
