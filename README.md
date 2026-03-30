### Commercium

Connect ERPNext with 200+ markets and eCommerce platforms to sync inventory orders and shipments Commercium integrates ERPNext with 200+ marketplaces like Noon, Mirakl, Amazon, Temu, Shein, Kogan, Whatnot, Discogs, Flipkart, Iconic, The Range, Backmarket, Bandcamp, B&Q, Galaxus / Digitec, Wayfair, OnBuy, Farfetch, eBay, TikTok Shop, Reverb, Not On The High Street (NOTHs), CDiscount, Fruugo, Abebooks, Emag, Faire, Vivino, Walmart, Refurbed, Gunbroker, Groupon, Target Plus, Poshmark, Zalora, Jumia Vendor, Trademe, CDON, Shopee, Neto by Maropost, Allegro, Kaufland, Trendyol, Depop, Bol, Namshi, and more.It also supports leading eCommerce platforms like Prestashop, ECWID, Shopify, WIX, BigCommerce, WooCommerce, Magento 2, Salla, Lightspeed, Commerce7, Retailer Networks such as CommerceHub / Rithum / Dsco, Rithum / OrderStream, Lowes, Logic Broker, Home Depot, and Accounting & Shipping tools including QuickBooks Online, ShipStation, Royal Mail, Flexport, Amazon MCF, Veeqo, Shiphero, Shipbob, and more, all using one single connector.

### Installation

You can install this app using the [bench](https://github.com/frappe/bench) CLI:

```bash
cd $PATH_TO_YOUR_BENCH
bench get-app $URL_OF_THIS_REPO --branch develop
bench install-app commercium
```

### Contributing

This app uses `pre-commit` for code formatting and linting. Please [install pre-commit](https://pre-commit.com/#installation) and enable it for this repository:

```bash
cd apps/commercium
pre-commit install
```

Pre-commit is configured to use the following tools for checking and formatting your code:

- ruff
- eslint
- prettier
- pyupgrade

### CI

This app can use GitHub Actions for CI. The following workflows are configured:

- CI: Installs this app and runs unit tests on every push to `develop` branch.
- Linters: Runs [Frappe Semgrep Rules](https://github.com/frappe/semgrep-rules) and [pip-audit](https://pypi.org/project/pip-audit/) on every pull request.


### License

mit
