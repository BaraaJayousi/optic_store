(function () {
  function extend_when_ready(tries = 0) {
    const ready =
      window.erpnext &&
      erpnext.pos &&
      erpnext.pos.PointOfSale &&
      window.POSCart &&
      window.POSItems &&
      window.Payment;

    if (!ready) {
      if (tries > 200) {  // ~10s max
        console.warn("POS base classes not found; skipping extensions");
        return;
      }
      return setTimeout(() => extend_when_ready(tries + 1), 50);
    }

    // Safe to extend now
    erpnext.pos.PointOfSale = optic_store.addons.extend_pos(erpnext.pos.PointOfSale);
    window.POSCart  = optic_store.addons.extend_cart(window.POSCart);
    window.POSItems = optic_store.addons.extend_items(window.POSItems);
    window.Payment  = optic_store.addons.extend_payment(window.Payment);

    console.log("POS extensions applied");
  }

  // Fire after route change to the POS page as an extra guard
  frappe.router && frappe.router.on("change", () => {
    if (frappe.get_route_str() === "point-of-sale") extend_when_ready();
  });

  // Also try immediately in case we loaded on the POS page
  extend_when_ready();
})();