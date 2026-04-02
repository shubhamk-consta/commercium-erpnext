import frappe
import requests

def generate_and_send_api_credentials(user_email):
    user = frappe.get_doc("User", user_email)

    # Generate API Key & Secret
    api_key = frappe.generate_hash(length=15)
    api_secret = frappe.generate_hash(length=30)

    user.api_key = api_key
    user.api_secret = api_secret
    user.save(ignore_permissions=True)

    frappe.db.commit()

    # Send to your external endpoint
    payload = {
        "email": user_email,
        "api_key": api_key,
        "api_secret": api_secret,
        "site_url": frappe.utils.get_url()
    }

    try:
        requests.post(
            "https://commercium.constacloud.com/external-login",
            json=payload,
            timeout=10
        )
    except Exception as e:
        frappe.log_error(str(e), "API Credential Sync Failed")