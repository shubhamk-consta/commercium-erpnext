frappe.ui.form.on('Commercium', {
    refresh: function(frm) {
        frm.disable_save();
        if (frm.page && frm.page.btn_primary) {
            frm.page.btn_primary.hide();
        }
        if (frm.page && frm.page.btn_secondary) {
            frm.page.btn_secondary.hide();
        }

        frm.dashboard.clear_headline();
        frm.layout.wrapper.find('.commercium-config-intro').remove();
        $(`
            <div class="commercium-config-intro" style="margin-bottom: 16px;">
                <div style="font-size: 15px; font-weight: 700; color: var(--text-color); margin-bottom: 6px;">
                    ${__('Active Multi-Channel Integration')}
                </div>
                <p class="text-muted small" style="margin: 0 0 8px 0;">
                    ${__('This instance is powered by Commercium, enabling seamless data synchronization across your global sales channels. Use this portal to manage your connection, monitor sync status, and scale your operations.')}
                </p>
                <ul class="text-muted small" style="margin: 0 0 10px 18px; padding: 0;">
                    <li>
                        <strong>${__('Centralized Inventory')}:</strong>
                        ${__('Real-time updates across Amazon, Temu, Mirakl, TikTok Shop, Walmart, eBay, Shopify, WooCommerce and more.')}
                    </li>
                    <li>
                        <strong>${__('Order Automation')}:</strong>
                        ${__('Automated fetching and mapping of marketplace/eCommerce orders directly into ERPNext.')}
                    </li>
                    <li>
                        <strong>${__('Scalable Workflows')}:</strong>
                        ${__('Easily add new marketplaces or adjust mapping logic through the Commercium dashboard.')}
                    </li>
                </ul>
                <div style="font-size: 14px; font-weight: 700; color: var(--text-color); margin: 2px 0 6px 0;">
                    ${__('Next Steps & Maintenance')}
                </div>
                <ul class="text-muted small" style="margin: 0 0 0 18px; padding: 0;">
                    <li>
                        <strong>${__('New Users')}:</strong>
                        ${__('Click the button above to authorize the initial handshake between ERPNext and Commercium.')}
                    </li>
                    <li>
                        <strong>${__('Existing Users')}:</strong>
                        ${__('Use the button to access advanced mapping settings, view sync logs, or resolve any channel-specific alerts.')}
                    </li>
                </ul>
            </div>
        `).prependTo(frm.layout.wrapper);
        

        frm.add_custom_button(__('Access Commercium'), function() {
            const payload = {
                method: 'commercium.api.connect_to_commercium',
                args: {}
            };

            console.log('Calling Commercium connect_to_commercium with payload:', payload);

            frappe.call({
                method: payload.method,
                args: payload.args,
                freeze: true,
                freeze_message: __('Connecting...'),
                callback: function(r) {
                    console.log('connect_to_commercium response:', r);
                    if (r.message && r.message.status === "success") {
                        frappe.msgprint(__('Successfully Connected!'));
                        if (r.message.redirect_url) {
                            window.location.href = r.message.redirect_url;
                        }
                    } else if (!r.exc) {
                        frappe.msgprint(__('Successfully Connected!'));
                    }
                }
            });
        }).addClass('btn-primary');
    }
});