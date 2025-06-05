export const Vista = {
  renderizarVentas(ventas, total, onEliminar) {
    const lista = document.getElementById("lista-ventas");
    lista.innerHTML = "";
    ventas.forEach((v, i) => {
      const item = document.createElement("li");
      item.innerHTML = `<strong>${v.producto}</strong> - ${v.cantidad} x $${v.precio.toFixed(2)}
  <br><small>${v.descripcion || ''}</small>`;

      const btn = document.createElement("button");
      btn.textContent = "Eliminar";
      btn.onclick = () => onEliminar(i);
      item.appendChild(btn);
      lista.appendChild(item);
    });
    document.getElementById("total").textContent = total.toFixed(2);
  },

  obtenerDatosFormulario() {
    return {
      producto: document.getElementById("producto").value,
      cantidad: parseInt(document.getElementById("cantidad").value),
      precio: parseFloat(document.getElementById("precio").value),
      descripcion: document.getElementById("descripcion").value
    };
  },

  limpiarFormulario() {
    document.getElementById("venta-form").reset();
  },
};
