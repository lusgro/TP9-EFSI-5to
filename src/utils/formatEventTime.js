export default function formatEventTime(fechaInicio, duracionMinutos) {
    const inicio = new Date(fechaInicio);
    
    const fin = new Date(inicio.getTime() + duracionMinutos * 60000);
    
    function formatTime(fecha) {
        let horas = fecha.getHours();
        let minutos = fecha.getMinutes();
        let periodo = 'am';
        
        if (horas >= 12) {
            periodo = 'pm';
            if (horas > 12) {
                horas -= 12;
            }
        }
        if (horas === 0) {
            horas = 12;
        }
        
        if (minutos === 0) {
            return `${horas}${periodo}`;
        } else {
            return `${horas}:${minutos.toString().padStart(2, '0')}${periodo}`;
        }
    }
    
    const horaInicio = formatTime(inicio);
    const horaFin = formatTime(fin);
    
    return `${horaInicio} - ${horaFin}`;
}