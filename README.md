<div align="center">
    <a href="https://beasm.com">
        <img src="https://raw.githubusercontent.com/frappe/beasm/develop/beasm/public/images/beasm-logo.png" height="128">
    </a>
    <h2>BEASM</h2>
    <p align="center">
        <p>ERP made simple</p>
    </p>

[![CI](https://github.com/frappe/beasm/actions/workflows/server-tests.yml/badge.svg?branch=develop)](https://github.com/frappe/beasm/actions/workflows/server-tests.yml)
[![UI](https://github.com/beasm/beasm_ui_tests/actions/workflows/ui-tests.yml/badge.svg?branch=develop&event=schedule)](https://github.com/beasm/beasm_ui_tests/actions/workflows/ui-tests.yml)
[![Open Source Helpers](https://www.codetriage.com/frappe/beasm/badges/users.svg)](https://www.codetriage.com/frappe/beasm)
[![codecov](https://codecov.io/gh/frappe/beasm/branch/develop/graph/badge.svg?token=0TwvyUg3I5)](https://codecov.io/gh/frappe/beasm)
[![docker pulls](https://img.shields.io/docker/pulls/frappe/beasm-worker.svg)](https://hub.docker.com/r/frappe/beasm-worker)

[https://beasm.com](https://beasm.com)

</div>

BEASM as a monolith includes the following areas for managing businesses:

1. [Accounting](https://beasm.com/open-source-accounting)
1. [Warehouse Management](https://beasm.com/distribution/warehouse-management-system)
1. [CRM](https://beasm.com/open-source-crm)
1. [Sales](https://beasm.com/open-source-sales-purchase)
1. [Purchase](https://beasm.com/open-source-sales-purchase)
1. [HRMS](https://beasm.com/open-source-hrms)
1. [Project Management](https://beasm.com/open-source-projects)
1. [Support](https://beasm.com/open-source-help-desk-software)
1. [Asset Management](https://beasm.com/open-source-asset-management-software)
1. [Quality Management](https://beasm.com/docs/user/manual/en/quality-management)
1. [Manufacturing](https://beasm.com/open-source-manufacturing-erp-software)
1. [Website Management](https://beasm.com/open-source-website-builder-software)
1. [Customize BEASM](https://beasm.com/docs/user/manual/en/customize-beasm)
1. [And More](https://beasm.com/docs/user/manual/en/)

BEASM is built on the [Frappe Framework](https://github.com/frappe/frappe), a full-stack web app framework built with Python & JavaScript.

## Installation

<div align="center" style="max-height: 40px;">
    <a href="https://frappecloud.com/beasm/signup">
        <img src=".github/try-on-f-cloud-button.svg" height="40">
    </a>
    <a href="https://labs.play-with-docker.com/?stack=https://raw.githubusercontent.com/frappe/frappe_docker/main/pwd.yml">
      <img src="https://raw.githubusercontent.com/play-with-docker/stacks/master/assets/images/button.png" alt="Try in PWD" height="37"/>
    </a>
</div>

> Login for the PWD site: (username: Administrator, password: admin)

### Containerized Installation

Use docker to deploy BEASM in production or for development of [Frappe](https://github.com/frappe/frappe) apps. See https://github.com/frappe/frappe_docker for more details.

### Manual Install

The Easy Way: our install script for bench will install all dependencies (e.g. MariaDB). See https://github.com/frappe/bench for more details.

New passwords will be created for the BEASM "Administrator" user, the MariaDB root user, and the frappe user (the script displays the passwords and saves them to ~/frappe_passwords.txt).


## Learning and community

1. [Frappe School](https://frappe.school) - Learn Frappe Framework and BEASM from the various courses by the maintainers or from the community.
2. [Official documentation](https://docs.beasm.com/) - Extensive documentation for BEASM.
3. [Discussion Forum](https://discuss.beasm.com/) - Engage with community of BEASM users and service providers.
4. [Telegram Group](https://t.me/beasmhelp) - Get instant help from huge community of users.


## Contributing

1. [Issue Guidelines](https://github.com/frappe/beasm/wiki/Issue-Guidelines)
1. [Report Security Vulnerabilities](https://beasm.com/security)
1. [Pull Request Requirements](https://github.com/frappe/beasm/wiki/Contribution-Guidelines)
1. [Translations](https://translate.beasm.com)


## License

GNU/General Public License (see [license.txt](license.txt))

The BEASM code is licensed as GNU General Public License (v3) and the Documentation is licensed as Creative Commons (CC-BY-SA-3.0) and the copyright is owned by Frappe Technologies Pvt Ltd (Frappe) and Contributors.

By contributing to BEASM, you agree that your contributions will be licensed under its GNU General Public License (v3).

## Logo and Trademark Policy

Please read our [Logo and Trademark Policy](TRADEMARK_POLICY.md).
