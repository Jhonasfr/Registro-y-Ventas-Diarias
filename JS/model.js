export const Modelo = {
  obtenerVentas() {
    return JSON.parse(localStorage.getItem("ventas")) || [];
  },

  guardarVenta(venta) {
    const ventas = this.obtenerVentas();
    ventas.push(venta);
    localStorage.setItem("ventas", JSON.stringify(ventas));
  },

  eliminarVenta(index) {
    const ventas = this.obtenerVentas();
    ventas.splice(index, 1);
    localStorage.setItem("ventas", JSON.stringify(ventas));
  },

  calcularTotal() {
    return this.obtenerVentas().reduce((suma, v) => suma + v.cantidad * v.precio, 0);
  },
};
