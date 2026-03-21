import frappe
import hashlib
import hmac
import json
import time

SECRET_KEY = "766618ed9ac8c6067e8195853068abd4e3573883ee27299fed747d36fc8a2314"

@frappe.whitelist()
def connect_to_commercium():
    user = frappe.session.user
    user_doc = frappe.get_doc("User", user)

    payload = {
        "email": user_doc.email,
        "full_name": user_doc.full_name,
        "site": frappe.local.site,
        "timestamp": int(time.time())
    }

    payload_str = json.dumps(payload, separators=(',', ':'))

    signature = hmac.new(
        SECRET_KEY.encode(),
        payload_str.encode(),
        hashlib.sha256
    ).hexdigest()

    redirect_url = f"https://commercium.constacloud.com/erp/callback?data={payload_str}&sig={signature}"

    return redirect_url