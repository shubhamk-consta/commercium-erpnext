frappe.ready(function() {
    if (frappe.session.user !== "Guest") {
        frappe.msgprint({
            title: "Connect to Commercium",
            message: `<button class="btn btn-primary" onclick="connectCommercium()">Connect</button>`
        });
    }
});

function connectCommercium() {
    frappe.call({
        method: "commercium.api.connect_to_commercium",
        callback: function(r) {
            window.location.href = r.message;
        }
    });
}