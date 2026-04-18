// roles.js
const roles = {
  admin: {
    sheets: Object.keys(sheets),
    forms: Object.keys(forms)
  },
  executive_assistant: {
    sheets: ["cn_fms_rs","store_repair","delegation","assigned_task_rs","leave_advance","ne_fnb_expense","recruitment_fms","document_database","employee_data_bs","all_payment_db","panditji_tracker"],
    forms: ["leave_form","delegation_form","ne_fnb_expense_form","recruitment_form"]
  },
  process_coordinator_RS: {
    sheets: ["gpo_rs","gpo_bs","store_repair","cn_fms_rs","collection_data","sales_master","travel_expense","shop_in_shop","daily_sales","store_attendance","billwise","checklist_rs","assigned_task_rs"],
    forms: ["leave_form"]
  },
  process_coordinator_MEGHA: {
    sheets: ["assigned_task_rs","cashbook_megha","ims_megha","msl_counter_megha","p_operation","p_assigned_task"],
    forms: ["leave_form"]
  },
  junior_accountant_RS: {
    sheets: ["gpo_bs","assigned_task_rs","store_expense"],
    forms: ["leave_form"]
  },
  senior_accountant: {
    sheets: ["gpo_bs","cn_fms_rs","travel_expense","assigned_task_rs"],
    forms: ["leave_form"]
  },
  mis: {
    sheets: ["gpo_rs","collection_data","sales_master","travel_expense","assigned_task_rs","leave_advance","recruitment_fms"],
    forms: ["leave_form","advance_form"]
  },
  operation_2: {
    sheets: ["gpo_rs","cn_fms_rs","shop_in_shop","assigned_task_rs"],
    forms: ["leave_form"]
  },
  operation_1: {
    sheets: ["gpo_bs","store_repair","daily_sales","collection_data","assigned_task_rs","leave_advance"],
    forms: ["store_repair_form","daily_sales_form","travel_expense_form","leave_form"]
  },
  operation_3: {
    sheets: ["gpo_rs","shop_in_shop","assigned_task_rs"],
    forms: ["leave_form"]
  },
  junior_accountant_BS: {
    sheets: ["gpo_rs","assigned_task_rs","billwise"],
    forms: ["leave_form"]
  },
  billing: {
    sheets: ["gpo_rs","assigned_task_rs"],
    forms: ["leave_form"]
  },
  manager: {
    sheets: ["gpo_rs","cn_fms_rs","collection_data","store_repair","sales_master","travel_expense","shop_in_shop","daily_sales","billwise","leave_advance"],
    forms: ["recruitment_form"]
  },
  sales_manager: {
    sheets: ["collection_data","store_repair","sales_master","shop_in_shop","daily_sales","billwise","leave_advance"],
    forms: ["leave_form","recruitment_form"]
  },
  store_manager: {
    sheets: ["assigned_task_rs","store_repair"],
    forms: ["store_leave_form","store_repair_form"]
  },
  pent_acc: {
    sheets: ["p_assigned_task"],
    forms: []
  },
  test_role: {
    sheets: [],
    forms: []
  }
};
