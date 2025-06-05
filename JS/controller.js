import { Modelo } from "./model.js";
import { Vista } from "./view.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("venta-form");

  function actualizarVista() {
    const ventas = Modelo.obtenerVentas();
    const total = Modelo.calcularTotal();
    Vista.renderizarVentas(ventas, total, eliminarVenta);
  }

  function agregarVenta(e) {
    e.preventDefault();
    const venta = Vista.obtenerDatosFormulario();
    if (!venta.producto || venta.cantidad <= 0 || venta.precio <= 0) return;
    Modelo.guardarVenta(venta);
    Vista.limpiarFormulario();
    actualizarVista();
  }

  function eliminarVenta(index) {
    Modelo.eliminarVenta(index);
    actualizarVista();
  }

  form.addEventListener("submit", agregarVenta);
  actualizarVista();

  });


