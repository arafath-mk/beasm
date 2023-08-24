// Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors
// License: GNU General Public License v3. See license.txt

frappe.require("assets/beasm/js/financial_statements.js", function () {
	frappe.query_reports["Profit and Loss Statement"] = $.extend(
		{},
		beasm.financial_statements
	);

	beasm.utils.add_dimensions("Profit and Loss Statement", 10);

	frappe.query_reports["Profit and Loss Statement"]["filters"].push({
		fieldname: "accumulated_values",
		label: __("Accumulated Values"),
		fieldtype: "Check",
		default: 1,
	});
});
