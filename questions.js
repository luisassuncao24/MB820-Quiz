// MB-820: Microsoft Dynamics 365 Business Central Functional Consultant
// Hard questions — mix of single-choice and multiple-choice

const questions = [
  // ── FINANCIAL MANAGEMENT ─────────────────────────────────────────────────
  {
    id: 1,
    text: "A company needs to post a payment for a vendor invoice that was entered in a foreign currency. The exchange rate has changed since the invoice was posted. What must happen when the payment is applied to the invoice?",
    type: "single",
    choices: [
      "Business Central automatically posts an unrealized gain/loss entry to the currency exchange account",
      "Business Central automatically posts a realized gain/loss entry to the currency exchange account",
      "The user must manually create a general journal entry to record the exchange rate difference",
      "The payment cannot be applied until the invoice is re-posted with the current exchange rate"
    ],
    correct: [1],
    explanation: "When a payment is applied to a foreign-currency invoice, Business Central calculates and posts a realized exchange rate gain or loss to the account defined in the Currency Exchange Rate Gains/Losses setup."
  },
  {
    id: 2,
    text: "Which two actions must be performed before you can post an inventory cost adjustment to the general ledger? (Select TWO)",
    type: "multiple",
    choices: [
      "Run the Adjust Cost – Item Entries batch job",
      "Enable automatic cost posting in Inventory Setup",
      "Set up an inventory posting group with a valid inventory account",
      "Run the Close Income Statement batch job",
      "Activate the Post Inventory Cost to G/L option on each item card"
    ],
    correct: [0, 2],
    explanation: "You must first run 'Adjust Cost – Item Entries' to calculate actual costs, and inventory posting groups must have valid G/L accounts so the system knows where to post. Automatic cost posting is optional."
  },
  {
    id: 3,
    text: "A controller wants to prevent any general journal postings to periods that have already been closed. Which setup achieves this?",
    type: "single",
    choices: [
      "Set the Allow Posting From / Allow Posting To dates on the General Ledger Setup page",
      "Lock the accounting periods in the Accounting Periods list",
      "Set the Allow Posting From / Allow Posting To dates on each user's User Setup page",
      "Both G/L Setup and User Setup posting dates — G/L Setup provides the global default; User Setup overrides it per user"
    ],
    correct: [3],
    explanation: "G/L Setup defines company-wide allowed posting dates. User Setup can narrow that window per user. Both must be correctly configured to fully restrict postings to closed periods."
  },
  {
    id: 4,
    text: "When setting up a chart of accounts, which field on a G/L account determines whether the balance is shown as a debit or credit on financial reports?",
    type: "single",
    choices: [
      "Account Type",
      "Debit/Credit",
      "Income/Balance",
      "Normal Balance"
    ],
    correct: [1],
    explanation: "The 'Debit/Credit' field on a G/L account specifies the normal balance side and controls how the balance is displayed on financial statements."
  },
  {
    id: 5,
    text: "A company uses dimension value combinations to restrict which dimension values can be posted together. Where is this restriction configured?",
    type: "single",
    choices: [
      "Default Dimensions page on the G/L account",
      "Dimension Combinations page",
      "Dimension Value Combinations page",
      "Analysis View page"
    ],
    correct: [2],
    explanation: "The 'Dimension Value Combinations' page (accessible from Dimensions) lets you set Blocked combinations for specific pairs of dimension values."
  },

  // ── SALES & RECEIVABLES ───────────────────────────────────────────────────
  {
    id: 6,
    text: "A sales order has been shipped but not yet invoiced. The customer calls to dispute the quantity shipped. Which document should be created to reverse the shipment?",
    type: "single",
    choices: [
      "Sales Credit Memo",
      "Sales Return Order",
      "Corrective Sales Invoice",
      "Sales Invoice with negative lines"
    ],
    correct: [1],
    explanation: "A Sales Return Order should be used to formally receive the returned goods and reverse the shipment. A Credit Memo is used after the invoice has been posted."
  },
  {
    id: 7,
    text: "Which fields are required to post a sales invoice to a customer who uses a different invoice currency than the company's local currency? (Select TWO)",
    type: "multiple",
    choices: [
      "Currency Code on the sales header",
      "Exchange Rate on the customer card",
      "A currency exchange rate defined for the invoice date",
      "Payment Terms Code on the sales header",
      "Language Code on the customer card"
    ],
    correct: [0, 2],
    explanation: "You must specify the Currency Code on the sales header and a valid exchange rate must exist for that currency on the invoice date. The exchange rate on the customer card is informational only."
  },
  {
    id: 8,
    text: "A company wants cash discounts to reduce the VAT base when early payment discounts are taken. Which setting enables this behavior?",
    type: "single",
    choices: [
      "Set 'Adjust for Payment Discount' to true on the VAT Posting Setup",
      "Enable 'Payment Discount Excludes VAT' on General Ledger Setup",
      "Set 'Calc. Pmt. Disc. on Cr. Memos' on the Payment Terms",
      "Enable 'Unrealized VAT' on the VAT Posting Setup"
    ],
    correct: [0],
    explanation: "'Adjust for Payment Discount' on the VAT Posting Setup causes Business Central to recalculate and adjust VAT when a payment discount is applied."
  },

  // ── PURCHASING & PAYABLES ─────────────────────────────────────────────────
  {
    id: 9,
    text: "A purchase order has been partially received and invoiced. The remaining quantity must be cancelled. What is the correct approach?",
    type: "single",
    choices: [
      "Delete the purchase order; Business Central will reverse the posted entries automatically",
      "Change the quantity on the open purchase order lines to match what has already been received, then close the order",
      "Post a purchase credit memo referencing the original order",
      "Use 'Undo Receipt' on the posted receipt to reverse the remaining quantity"
    ],
    correct: [1],
    explanation: "To close a partially received purchase order, reduce the quantity to receive to zero (or match the received quantity) on the remaining lines so the order can be closed without reversing already posted entries."
  },
  {
    id: 10,
    text: "Which two setup elements must be in place for three-way matching (PO, receipt, invoice) to work correctly in Business Central? (Select TWO)",
    type: "multiple",
    choices: [
      "Enable 'Invoice Receipt Date Check' on Purchases & Payables Setup",
      "Set a 'Quantity Invoiced' tolerance on the vendor card",
      "Enable 'Receipt on Invoice' under Purchases & Payables Setup",
      "Enable 'Exact Cost Reversing Mandatory' on Inventory Setup",
      "Set 'Posted Receipt Nos.' series on Purchases & Payables Setup"
    ],
    correct: [2, 4],
    explanation: "'Receipt on Invoice' enforces that a receipt must exist before an invoice can be posted. A number series for posted receipts is required for the system to link receipts to invoices."
  },

  // ── INVENTORY & ITEMS ─────────────────────────────────────────────────────
  {
    id: 11,
    text: "A company uses Standard costing. At month-end the standard cost of an item is revalued. Which entry type is automatically created by Business Central to record the variance?",
    type: "single",
    choices: [
      "Direct Cost",
      "Indirect Cost",
      "Revaluation",
      "Variance"
    ],
    correct: [2],
    explanation: "When standard costs are updated, Business Central creates Item Ledger Entries and Value Entries of type 'Revaluation' to capture the difference between old and new standard costs."
  },
  {
    id: 12,
    text: "Which costing method prevents negative inventory by design, and what is the consequence when inventory goes negative accidentally?",
    type: "single",
    choices: [
      "First In, First Out (FIFO) — costs are calculated incorrectly until inventory is replenished",
      "Average — the average cost is recalculated to include future receipts",
      "Standard — a variance entry is created automatically",
      "Specific — the item tracking entry is reversed"
    ],
    correct: [1],
    explanation: "With Average costing, if inventory goes negative, Business Central defers the cost calculation and includes future receipts in the average, which can distort costs until the next Adjust Cost run."
  },
  {
    id: 13,
    text: "A warehouse uses Directed Put-away and Pick. Which three documents are involved in an outbound warehouse flow for a sales order? (Select THREE)",
    type: "multiple",
    choices: [
      "Warehouse Shipment",
      "Pick Document (Warehouse Pick)",
      "Posted Warehouse Shipment",
      "Sales Shipment",
      "Internal Pick"
    ],
    correct: [0, 1, 2],
    explanation: "The outbound directed flow involves: (1) Warehouse Shipment created from the sales order, (2) Warehouse Pick created from the shipment for warehouse workers to pick, and (3) Posted Warehouse Shipment after registering the pick and posting the shipment."
  },
  {
    id: 14,
    text: "Item tracking is set to 'Lot-Specific Tracking'. A warehouse pick is created for 10 units. The system requires the picker to enter lot numbers. Where is this enforced?",
    type: "single",
    choices: [
      "Item Tracking Code — 'Lot Warehouse Tracking' field",
      "Item Card — 'Lot Nos.' field",
      "Warehouse Setup — 'Require Lot No.' field",
      "Location Card — 'Bin Mandatory' field"
    ],
    correct: [0],
    explanation: "The 'Lot Warehouse Tracking' field on the Item Tracking Code record controls whether lot numbers must be specified on warehouse documents such as picks and put-aways."
  },

  // ── MANUFACTURING ─────────────────────────────────────────────────────────
  {
    id: 15,
    text: "A production order is in 'Released' status. A planner wants to change the routing. What must the planner do first?",
    type: "single",
    choices: [
      "Change the production order status to 'Planned'",
      "Change the production order status to 'Firm Planned'",
      "Create a new production order; released orders cannot be edited",
      "Use 'Refresh Production Order' to unlock the routing lines"
    ],
    correct: [1],
    explanation: "A released production order has been communicated to the shop floor. To modify its routing, it must first be changed back to 'Firm Planned' status, which allows editing of the routing lines."
  },
  {
    id: 16,
    text: "Which two capacity constraint types can be defined on a work center in Business Central? (Select TWO)",
    type: "multiple",
    choices: [
      "Machine Capacity",
      "Bottleneck Capacity",
      "Critical Load Capacity",
      "Human Resource Capacity",
      "Subcontractor Capacity"
    ],
    correct: [1, 2],
    explanation: "Business Central supports 'Bottleneck' and 'Critical Load' as capacity constraint types on work centers, used by the planning engine to identify and manage capacity limitations."
  },
  {
    id: 17,
    text: "What is the effect of enabling 'Flushing Method: Backward' on a Bill of Materials (BOM) component?",
    type: "single",
    choices: [
      "Component consumption is posted when the production order is released",
      "Component consumption is posted when the output is posted",
      "Component consumption is posted when the production order is created",
      "Component consumption must be manually posted at all times"
    ],
    correct: [1],
    explanation: "Backward flushing automatically posts component consumption when the finished output is posted, eliminating the need to manually post consumption entries."
  },

  // ── SERVICE MANAGEMENT ────────────────────────────────────────────────────
  {
    id: 18,
    text: "A service contract has a 'Prepaid' contract type. How is revenue recognised in Business Central?",
    type: "single",
    choices: [
      "Revenue is posted immediately when the contract is signed",
      "Revenue is deferred and recognised over the contract period using 'Post Prepaid Contract Entries'",
      "Revenue is recognised when individual service orders are invoiced",
      "Revenue is recognised at the end of the contract period"
    ],
    correct: [1],
    explanation: "For prepaid service contracts, Business Central defers revenue to an unearned income account and requires running 'Post Prepaid Contract Entries' periodically to release revenue to the income account."
  },
  {
    id: 19,
    text: "Which field on a Service Item Line determines the maximum hours a technician can spend before exceeding the contract's response time SLA?",
    type: "single",
    choices: [
      "Response Time (Hours)",
      "Max. Labor Hours",
      "Service Hours",
      "Contract Expiration Date"
    ],
    correct: [0],
    explanation: "'Response Time (Hours)' on the Service Item Line defines the SLA commitment for how quickly the service order must be responded to."
  },

  // ── ASSEMBLY MANAGEMENT ───────────────────────────────────────────────────
  {
    id: 20,
    text: "A company uses Assemble-to-Order. A sales order is created for an assembly item. Which of the following is TRUE?",
    type: "single",
    choices: [
      "An assembly order is automatically created and linked to the sales line",
      "The planner must manually create the assembly order and link it",
      "The item is always picked from stock; assembly orders are used only for ATS items",
      "The assembly order is created only when the sales order is released"
    ],
    correct: [0],
    explanation: "For Assemble-to-Order items, Business Central automatically creates a linked assembly order when the sales order line is created, enabling order-specific configuration."
  },

  // ── PLANNING ─────────────────────────────────────────────────────────────
  {
    id: 21,
    text: "The planning worksheet generates a 'Change Qty.' action message for an existing purchase order. What does this mean?",
    type: "single",
    choices: [
      "The purchase order should be cancelled and re-created with the new quantity",
      "The quantity on the existing purchase order should be changed to meet the net demand",
      "A new purchase order should be created in addition to the existing one",
      "The item's reorder point should be changed"
    ],
    correct: [1],
    explanation: "'Change Qty.' action messages indicate that the planning engine has determined the quantity on an existing supply order should be modified to cover the demand."
  },
  {
    id: 22,
    text: "Which reordering policy results in a fixed order quantity being suggested regardless of actual demand size?",
    type: "single",
    choices: [
      "Lot-for-Lot",
      "Fixed Reorder Qty.",
      "Maximum Qty.",
      "Order"
    ],
    correct: [1],
    explanation: "'Fixed Reorder Qty.' always suggests replenishment in the defined fixed quantity (the 'Reorder Quantity' field), regardless of how much demand exists."
  },

  // ── JOBS / PROJECT MANAGEMENT ─────────────────────────────────────────────
  {
    id: 23,
    text: "A project manager wants to recognise revenue using the 'Percentage of Completion' method. Which WIP method should be selected on the job?",
    type: "single",
    choices: [
      "Completed Contract",
      "Cost Value",
      "Sales Value",
      "Percentage of Completion"
    ],
    correct: [3],
    explanation: "The 'Percentage of Completion' WIP method calculates recognised revenue based on the percentage of budgeted cost that has been consumed, matching revenue to the stage of completion."
  },
  {
    id: 24,
    text: "Which two elements are required to post a job journal line that records time spent by an employee? (Select TWO)",
    type: "multiple",
    choices: [
      "A resource linked to the employee",
      "A job task number of type 'Posting'",
      "A job planning line for the resource",
      "An approved timesheet",
      "A work type code"
    ],
    correct: [0, 1],
    explanation: "A resource must exist for the employee and the job task must be of type 'Posting' (not Heading or Total) to accept journal lines. Planning lines and timesheets are optional for direct journal posting."
  },

  // ── SETUP & ADMINISTRATION ────────────────────────────────────────────────
  {
    id: 25,
    text: "A company wants to ensure that every sales order created by users in the SALES permission set must have a 'Reason Code'. How is this enforced in Business Central?",
    type: "single",
    choices: [
      "Add a mandatory field validation in the Sales & Receivables Setup",
      "Use a workflow that requires approval before posting if Reason Code is blank",
      "Configure a field monitoring rule on the Sales Header table",
      "There is no native way to enforce this without extension development"
    ],
    correct: [1],
    explanation: "Business Central's built-in workflow engine can be configured to require approval (or block progression) when certain fields like Reason Code are blank, enforcing the business rule without code."
  },
  {
    id: 26,
    text: "You need to migrate opening balances for customers when going live on Business Central. Which configuration package table should you use for customer ledger opening balances?",
    type: "single",
    choices: [
      "Customer (table 18)",
      "Cust. Ledger Entry (table 21)",
      "Gen. Journal Line (table 81) with a balancing G/L account",
      "Detailed Cust. Ledg. Entry (table 379)"
    ],
    correct: [2],
    explanation: "Opening balances for customer ledgers are imported through Gen. Journal Lines (table 81) using a configuration package or data migration, which then posts to create the customer ledger entries correctly."
  },
  {
    id: 27,
    text: "Which permission object type controls whether a user can execute a Business Central report?",
    type: "single",
    choices: [
      "TableData",
      "Report",
      "CodeUnit",
      "Page"
    ],
    correct: [1],
    explanation: "The 'Report' object type in a permission set controls execute access to individual reports in Business Central."
  },

  // ── INTERCOMPANY ──────────────────────────────────────────────────────────
  {
    id: 28,
    text: "Company A sends an intercompany sales order to Company B. Both companies use Business Central. In Company B, what document is created in the IC Inbox?",
    type: "single",
    choices: [
      "An intercompany purchase order",
      "An intercompany sales order",
      "A general journal line",
      "A vendor invoice"
    ],
    correct: [0],
    explanation: "When Company A sends an IC sales order, Company B's IC Inbox receives it as an IC purchase order, mirroring the transaction from the buying company's perspective."
  },

  // ── REPORTING & ANALYTICS ─────────────────────────────────────────────────
  {
    id: 29,
    text: "A financial controller wants to compare actuals vs. budget by department using Analysis Views. Which two dimension setup steps are required? (Select TWO)",
    type: "multiple",
    choices: [
      "Set the 'Department' dimension as a global or shortcut dimension",
      "Create an Analysis View that includes the 'Department' dimension",
      "Map the 'Department' dimension to the income statement in G/L Account Categories",
      "Enable 'Budget Dimension 1' on the G/L Budget",
      "Run 'Update Analysis View' to process posted entries"
    ],
    correct: [1, 4],
    explanation: "An Analysis View must be created with the relevant dimensions included, and it must be updated (manually or automatically) to include posted G/L entries before it can be used for analysis."
  },
  {
    id: 30,
    text: "What is the primary purpose of Account Schedules (Financial Reports) in Business Central?",
    type: "single",
    choices: [
      "To define chart of accounts structure and G/L account hierarchies",
      "To create custom financial statements by combining G/L account ranges, formulas, and dimensions",
      "To schedule automated posting of recurring journal entries",
      "To define budget periods and budget amounts per G/L account"
    ],
    correct: [1],
    explanation: "Account Schedules (called Financial Reports in newer BC versions) allow users to build custom financial statements using row formulas that reference G/L accounts, totaling formulas, and dimension filters."
  },

  // ── FINANCIAL MANAGEMENT (continued) ─────────────────────────────────────
  {
    id: 31,
    text: "A company needs to set up bank account reconciliation so that outstanding payments are automatically suggested. Which field on the Bank Account card controls automatic matching of bank statement lines to ledger entries?",
    type: "single",
    choices: [
      "Last Statement No.",
      "Bank Statement Import Format",
      "Auto. Bank Statement Import",
      "Balance Last Statement"
    ],
    correct: [1],
    explanation: "The 'Bank Statement Import Format' field specifies the data exchange format used to import electronic bank statements, enabling automatic matching of statement lines to posted bank ledger entries."
  },
  {
    id: 32,
    text: "A company uses straight-line depreciation for a fixed asset. Which two fields on the FA Depreciation Book determine the annual depreciation amount? (Select TWO)",
    type: "multiple",
    choices: [
      "Acquisition Cost",
      "Depreciation Starting Date",
      "No. of Depreciation Years",
      "Salvage Value",
      "FA Posting Group"
    ],
    correct: [2, 3],
    explanation: "The 'No. of Depreciation Years' defines the useful life over which the asset is depreciated. 'Salvage Value' reduces the depreciable base (Acquisition Cost minus Salvage Value), so both directly affect the annual depreciation amount."
  },
  {
    id: 33,
    text: "Which Business Central feature allows a company to forecast future cash positions by combining expected receipts, payments, and bank balances?",
    type: "single",
    choices: [
      "Cash Flow Forecast",
      "G/L Budget",
      "Account Schedule with Cash Flow columns",
      "Payment Reconciliation Journal"
    ],
    correct: [0],
    explanation: "The Cash Flow Forecast feature aggregates expected inflows (sales orders, receivables) and outflows (purchase orders, payables) with bank balances to project the company's future cash position."
  },
  {
    id: 34,
    text: "A company wants to defer revenue recognition for a 12-month software subscription sold in one invoice. Which feature should be used?",
    type: "single",
    choices: [
      "Recurring General Journal",
      "Deferral Templates",
      "Service Contract Prepaid posting",
      "WIP posting on a Job"
    ],
    correct: [1],
    explanation: "Deferral Templates in Business Central allow automatic distribution of revenue or expense across multiple accounting periods, making them ideal for subscriptions or prepaid contracts invoiced upfront."
  },
  {
    id: 35,
    text: "A parent company wants to consolidate financial statements from three subsidiaries into one Business Central company. Which two steps are required in the consolidation process? (Select TWO)",
    type: "multiple",
    choices: [
      "Set up a consolidation company and map subsidiary G/L accounts to it",
      "Post intercompany elimination entries directly in each subsidiary",
      "Run the Import Consolidation from Database or File batch job",
      "Enable the 'Consolidation' option on each subsidiary's General Ledger Setup",
      "Create a shared chart of accounts across all companies"
    ],
    correct: [0, 2],
    explanation: "Consolidation requires mapping each subsidiary's G/L accounts to the parent's chart of accounts, then importing the subsidiary data using the Import Consolidation batch job (from database or exported file)."
  },
  {
    id: 36,
    text: "A controller needs to allocate overhead costs from a cost center to production departments. Which Business Central feature handles cost distribution based on allocation keys?",
    type: "single",
    choices: [
      "G/L Budgets with dimension filters",
      "Cost Accounting — Cost Allocations",
      "Analysis Views with allocation codes",
      "Recurring journals with allocation accounts"
    ],
    correct: [1],
    explanation: "Cost Accounting in Business Central provides Cost Allocations where you define allocation sources (cost centers) and targets with keys (fixed percentage, dynamic formula, etc.) to distribute overhead costs."
  },
  {
    id: 37,
    text: "When must a company submit a VAT Return in Business Central? Which report is used to calculate and post the VAT settlement?",
    type: "single",
    choices: [
      "The VAT Reconciliation report; posted via the VAT Statement page",
      "The Calc. and Post VAT Settlement batch job; clears VAT entries to the settlement account",
      "The G/L Trial Balance; settlement entries are posted manually",
      "The VAT Audit report; automatically posts when the period is closed"
    ],
    correct: [1],
    explanation: "'Calc. and Post VAT Settlement' calculates the net VAT liability or refund from open VAT entries and posts the settlement to the designated G/L account, closing those VAT entries."
  },
  {
    id: 38,
    text: "A vendor requires a 30% prepayment on all purchase orders. Which two places can the prepayment percentage be defaulted? (Select TWO)",
    type: "multiple",
    choices: [
      "Vendor card — Prepayment % field",
      "Purchase & Payables Setup — Default Prepayment %",
      "G/L Account card — Prepayment Account",
      "Item card — Prepayment % field",
      "Payment Terms code — Prepayment %"
    ],
    correct: [0, 3],
    explanation: "The prepayment percentage can be defaulted on the Vendor card (applies to all orders for that vendor) and on individual Item cards (applies to that item regardless of vendor). These can also be combined."
  },
  {
    id: 39,
    text: "An accountant imports a bank statement and finds 15 unmatched lines. Which action in the Payment Reconciliation Journal best helps match these lines automatically?",
    type: "single",
    choices: [
      "Post Payments and Reconcile Bank Account",
      "Apply Automatically",
      "Transfer Difference to Account",
      "Suggest Lines"
    ],
    correct: [1],
    explanation: "'Apply Automatically' runs the matching algorithm against open ledger entries using amount, date, and reference number criteria, reducing manual matching effort for unmatched bank statement lines."
  },
  {
    id: 40,
    text: "What is the purpose of the 'Closing Date' concept in Business Central's accounting periods?",
    type: "single",
    choices: [
      "It is the last date of a fiscal year, used to prevent posting after year-end close",
      "It is a special date type (C + normal date) that allows year-closing entries to be posted without affecting the current-year balance",
      "It is the date on which the accounting period is automatically locked",
      "It is the date set when the 'Close Income Statement' batch job is run"
    ],
    correct: [1],
    explanation: "A Closing Date (entered as C followed by a date, e.g. C12/31/24) is a special date in Business Central that separates year-end closing entries from the opening balances, ensuring closing entries don't distort the new year's beginning balances."
  },

  // ── SALES & RECEIVABLES (continued) ──────────────────────────────────────
  {
    id: 41,
    text: "A company has set up sales price lists with multiple tiers. A customer is assigned to a price group. How does Business Central determine which price to use on a sales order line?",
    type: "single",
    choices: [
      "The lowest price among all applicable price list lines is always used",
      "The most recently created price list line takes priority",
      "The price list with the highest priority number on the header is used",
      "Business Central uses whichever price list was assigned first to the customer"
    ],
    correct: [0],
    explanation: "Business Central's price calculation engine evaluates all applicable price list lines (matching item, customer, date, quantity) and selects the lowest unit price to give the customer the best deal."
  },
  {
    id: 42,
    text: "A customer places a blanket sales order for 1,000 units to be delivered monthly over 12 months. How are individual monthly deliveries handled?",
    type: "single",
    choices: [
      "A separate sales order is created manually each month referencing the blanket order",
      "Business Central automatically creates monthly sales orders from the blanket order on each delivery date",
      "Release orders (sales orders) are created from the blanket order lines; they reduce the blanket order quantity",
      "The blanket order is converted to a sales invoice at year-end for the total quantity"
    ],
    correct: [2],
    explanation: "From a blanket sales order, users create release orders (regular sales orders) that reference and consume the blanket order quantity. Business Central tracks the shipped and remaining quantities on the blanket order."
  },
  {
    id: 43,
    text: "A company wants to ship an item directly from a vendor to a customer without it passing through the company's warehouse. Which feature enables this?",
    type: "single",
    choices: [
      "Transfer Order",
      "Cross-Docking",
      "Drop Shipment on a sales order line",
      "Special Order on a sales order line"
    ],
    correct: [2],
    explanation: "Drop Shipment links a sales order line directly to a purchase order so the vendor ships goods directly to the customer. The company is invoiced by the vendor and invoices the customer without handling the physical goods."
  },
  {
    id: 44,
    text: "Which two actions can be taken on a posted sales invoice that was created in error, assuming payment has NOT yet been applied? (Select TWO)",
    type: "multiple",
    choices: [
      "Delete the posted sales invoice",
      "Create a corrective credit memo using the 'Cancel' action",
      "Post a new sales invoice with negative quantities to reverse",
      "Use 'Create Corrective Credit Memo' to reverse and optionally create a new correct invoice",
      "Change the posting date and amounts directly on the posted invoice"
    ],
    correct: [1, 3],
    explanation: "Business Central offers 'Cancel' (which automatically creates and posts a corrective credit memo) and 'Create Corrective Credit Memo' (which reverses the invoice and can optionally create a corrected replacement). Deleting or editing posted documents is not possible."
  },
  {
    id: 45,
    text: "A customer has a credit limit of £10,000 with a current balance of £9,500. A new sales order totaling £1,000 is entered. What happens by default?",
    type: "single",
    choices: [
      "The sales order is blocked and cannot be saved",
      "A warning is displayed but the order can still be saved and processed",
      "Business Central automatically reduces the order quantity to stay within the credit limit",
      "The order is sent for credit approval via the approval workflow"
    ],
    correct: [1],
    explanation: "By default, when a sales order would exceed a customer's credit limit, Business Central displays a warning message but allows the order to be saved. The behavior can be changed to block posting via the Credit Warnings setup."
  },
  {
    id: 46,
    text: "A sales manager wants to track which marketing campaign generated each sales order. Which field on the sales order header supports this?",
    type: "single",
    choices: [
      "Salesperson Code",
      "Campaign No.",
      "Opportunity No.",
      "Source Code"
    ],
    correct: [1],
    explanation: "The 'Campaign No.' field on the sales header links the order to a specific marketing campaign, enabling campaign performance analysis through Business Central's relationship management features."
  },

  // ── PURCHASING & PAYABLES (continued) ────────────────────────────────────
  {
    id: 47,
    text: "A company has a blanket purchase order with a vendor for 5,000 units annually. How are individual purchase releases tracked against the blanket order total?",
    type: "single",
    choices: [
      "Through a field called 'Quantity Released' on the blanket order",
      "Business Central does not link individual orders to blanket purchase orders",
      "Release orders reduce the 'Qty. to Receive' on the blanket order line and track received/invoiced quantities",
      "The 'Remaining Quantity' on the blanket order is updated only when invoices are posted"
    ],
    correct: [2],
    explanation: "When release orders (standard purchase orders) are created from a blanket purchase order, Business Central tracks quantities received and invoiced against the blanket order, updating the Qty. Received and Qty. Invoiced fields on the blanket line."
  },
  {
    id: 48,
    text: "Item charges (e.g., freight, customs) need to be added to a posted purchase receipt. Which document allows retrospective assignment of item charges to already-posted receipts?",
    type: "single",
    choices: [
      "Purchase Journal with an item charge line",
      "A new purchase invoice with item charge lines assigned to the original receipt lines",
      "Revaluation Journal for the affected items",
      "The item charge can only be assigned before the receipt is posted"
    ],
    correct: [1],
    explanation: "Item charges can be added on a new purchase invoice or credit memo and then assigned to already-posted receipt lines using the 'Item Charge Assignment' function, which adjusts the item cost retrospectively."
  },
  {
    id: 49,
    text: "A purchasing manager wants to automatically send a purchase order to a vendor by email when it is released. Which two components are needed? (Select TWO)",
    type: "multiple",
    choices: [
      "An approval workflow for purchase orders",
      "A document layout defined for the purchase order report on the vendor card",
      "An email account configured in Business Central",
      "A notification template for the purchase order",
      "A Power Automate flow to handle the email sending"
    ],
    correct: [1, 2],
    explanation: "To email a purchase order, a document layout (associating the purchase order report with the vendor's email address) must be configured on the vendor card, and an email account must be set up in Business Central's Email Accounts setup."
  },
  {
    id: 50,
    text: "Vendor A sends invoices with slight quantity discrepancies from received goods. The company wants to allow up to 2% variance. Where is this tolerance configured?",
    type: "single",
    choices: [
      "Purchases & Payables Setup — Invoice Rounding precision",
      "Vendor Card — Invoice Quantity Tolerance %",
      "Purchases & Payables Setup — Receipt Quantity Tolerance or on the Vendor Card",
      "Item Card — Quantity Rounding Precision"
    ],
    correct: [2],
    explanation: "Business Central supports receipt/quantity tolerance settings in Purchases & Payables Setup (globally) or on the Vendor Card (vendor-specific). This allows minor quantity differences between PO, receipt, and invoice without blocking posting."
  },

  // ── INVENTORY & ITEMS (continued) ─────────────────────────────────────────
  {
    id: 51,
    text: "An item has multiple variants (e.g., colors and sizes). Where are item variants defined, and what field on the sales order line selects the variant?",
    type: "single",
    choices: [
      "Item Category page; selected via the Item Category Code field on the sales line",
      "Item Card → Variants FastTab; selected via the Variant Code field on the sales line",
      "Stockkeeping Unit Card; selected via the SKU Code on the sales line",
      "Item Attributes page; selected by filtering on the attribute value"
    ],
    correct: [1],
    explanation: "Item variants are created on the Variants FastTab of the Item Card. On transaction lines (sales, purchase, inventory), the Variant Code field selects the specific variant."
  },
  {
    id: 52,
    text: "A company transfers inventory between two warehouses. Which statement correctly describes what is required?",
    type: "single",
    choices: [
      "A Transfer Order; In-Transit location must be defined",
      "An Item Journal with entry type Transfer",
      "Transfer routes must be defined on the Transfer Route page",
      "Both locations must have Directed Put-away and Pick enabled",
      "A Transfer Order can be used without an In-Transit location if both locations are in the same country"
    ],
    correct: [0],
    explanation: "Transfer Orders require an In-Transit location to manage goods while they are in transit between warehouses. Transfer Routes are optional convenience setup that pre-define the in-transit location for common routes, but a Transfer Order can be created without them by specifying the in-transit location directly on the order."
  },
  {
    id: 53,
    text: "A company performs an annual physical inventory count. After posting count differences using the Physical Inventory Journal, what happens to items with a positive difference?",
    type: "single",
    choices: [
      "The item quantity is decreased and a negative value entry is posted",
      "The item quantity is increased using a positive adjustment entry type",
      "The difference is posted as a variance and does not affect inventory quantity",
      "A purchase order is automatically created to cover the difference"
    ],
    correct: [1],
    explanation: "When the Physical Inventory Journal records a positive difference (physical count > book quantity), Business Central posts a positive inventory adjustment entry, increasing the item's inventory quantity and value."
  },
  {
    id: 54,
    text: "A company stocks the same item at multiple locations with different reorder points. Which record holds location-specific planning parameters?",
    type: "single",
    choices: [
      "Item Card — Planning FastTab",
      "Stockkeeping Unit (SKU) Card",
      "Location Card — Inventory FastTab",
      "Planning Parameters page filtered by location"
    ],
    correct: [1],
    explanation: "Stockkeeping Unit (SKU) cards allow location-specific and variant-specific planning parameters (reorder point, order quantity, replenishment system, etc.) to override the item card's global settings."
  },
  {
    id: 55,
    text: "A warehouse enables bin mandatory but NOT directed put-away and pick. Which statement is TRUE about bin assignment on warehouse documents?",
    type: "single",
    choices: [
      "Bins are assigned automatically by Business Central using bin ranking",
      "Inventory movements are used to move items between bins; no put-away documents are created",
      "Bins must be manually assigned by the user on transaction lines; no automated bin selection occurs",
      "Warehouse Pick documents are created automatically but bin assignment is manual"
    ],
    correct: [2],
    explanation: "With Bin Mandatory but without Directed Put-away and Pick, the system requires a bin on transaction lines but does not automatically select bins. Users must manually enter the bin code; no automated warehouse documents are generated."
  },
  {
    id: 56,
    text: "Which three documents can be used to move items within a warehouse when Directed Put-away and Pick is enabled? (Select THREE)",
    type: "multiple",
    choices: [
      "Internal Put-away",
      "Internal Pick",
      "Warehouse Movement",
      "Item Reclassification Journal",
      "Transfer Order"
    ],
    correct: [0, 1, 2],
    explanation: "Internal Put-aways (moving items to storage), Internal Picks (extracting items for internal use), and Warehouse Movements (bin-to-bin moves) are the three warehouse-internal movement documents available in directed warehouse environments."
  },

  // ── MANUFACTURING (continued) ──────────────────────────────────────────────
  {
    id: 57,
    text: "A company outsources the painting operation to a subcontractor. Which setup is required to handle subcontracting in Business Central?",
    type: "single",
    choices: [
      "Create a Work Center and set the 'Subcontractor No.' field to the subcontractor vendor number",
      "Create a Machine Center with Subcontract Work Center enabled",
      "Create a purchase order template for the subcontractor vendor",
      "Enable 'Subcontracting' in Manufacturing Setup"
    ],
    correct: [0],
    explanation: "Subcontracting is handled by creating a Work Center and setting the 'Subcontractor No.' field to the vendor that performs the operation. The planning engine or subcontracting worksheet then generates purchase orders for the subcontracted operation."
  },
  {
    id: 58,
    text: "What is the key functional difference between a Work Center and a Machine Center in Business Central Manufacturing?",
    type: "single",
    choices: [
      "Work Centers can be subcontracted; Machine Centers cannot",
      "Work Centers define capacity at a group/department level; Machine Centers define individual machine capacity within a Work Center",
      "Machine Centers track costs directly to G/L accounts; Work Centers do not",
      "Work Centers are used for labor routing; Machine Centers are used for tool routing"
    ],
    correct: [1],
    explanation: "Work Centers represent capacity groups (e.g., a department or cell) used for costing and scheduling. Machine Centers are individual machines within a Work Center and allow more granular capacity planning."
  },
  {
    id: 59,
    text: "Which two factors define a routing's total run time per item on a Work Center? (Select TWO)",
    type: "multiple",
    choices: [
      "Run Time (per unit)",
      "Setup Time (per lot)",
      "Wait Time",
      "Send-Ahead Quantity",
      "Concurrent Capacities"
    ],
    correct: [0, 1],
    explanation: "The routing operation's total time consists of Setup Time (a one-time fixed time per production run) and Run Time (per-unit variable time). Together they define the total capacity consumption for a production order."
  },
  {
    id: 60,
    text: "A production Bill of Materials (BOM) has a scrap percentage of 10% on a component. If the finished good requires 100 units of the component, how many units does Business Central calculate as the needed component quantity?",
    type: "single",
    choices: [
      "100 units",
      "110 units",
      "90 units",
      "111 units"
    ],
    correct: [1],
    explanation: "Business Central uses the formula: Required Quantity × (1 + Scrap% / 100) = 100 × 1.10 = 110 units. The scrap percentage adds extra material to account for expected waste during production."
  },

  // ── SERVICE MANAGEMENT (continued) ────────────────────────────────────────
  {
    id: 61,
    text: "A technician needs to record parts used during a service visit. Which document line type should be used in the Service Order?",
    type: "single",
    choices: [
      "G/L Account line",
      "Resource line",
      "Item line",
      "Cost line"
    ],
    correct: [2],
    explanation: "Parts used during service are recorded as Item lines in the service order. Resource lines track labor (time), G/L Account lines post directly to an account, and Cost lines record miscellaneous costs."
  },
  {
    id: 62,
    text: "A company wants to ensure service orders are only closed after both the customer signature and the invoice are confirmed. Which Service Order status sequence is correct?",
    type: "single",
    choices: [
      "Open → Finished → In Process → Pending",
      "Open → In Process → Finished → Posted",
      "Created → Dispatched → Completed → Invoiced",
      "Pending → In Process → On Hold → Finished (then invoice to close)"
    ],
    correct: [3],
    explanation: "Service order status progresses: Pending (not started) → In Process (technician working) → On Hold (waiting for parts/customer) → Finished (work done, ready to invoice). Posting the invoice finalises the order."
  },
  {
    id: 63,
    text: "Which field on the Service Hours page controls the hours within which the Service SLA response-time clock is counted?",
    type: "single",
    choices: [
      "Response Time (Hours) on the Service Item Line",
      "Service Zone Code on the customer",
      "Starting Time and Ending Time on the Service Hours page",
      "Valid From and Valid To dates on the Service Contract"
    ],
    correct: [2],
    explanation: "The Service Hours page defines the valid working hours (Starting Time / Ending Time) for each day of the week. Business Central counts SLA response time only during these defined working hours."
  },

  // ── ASSEMBLY MANAGEMENT (continued) ──────────────────────────────────────
  {
    id: 64,
    text: "What is the difference between Assemble-to-Order (ATO) and Assemble-to-Stock (ATS) in Business Central?",
    type: "single",
    choices: [
      "ATO produces for a specific sales order and posts output to the customer; ATS produces to inventory and picks from stock",
      "ATO uses production orders; ATS uses assembly orders",
      "ATO posts to WIP accounts; ATS posts directly to inventory",
      "ATO requires a Bill of Materials (BOM); ATS does not"
    ],
    correct: [0],
    explanation: "ATO assemblies are triggered by a sales order and the assembly order is linked directly to the sales line — output is consumed by the sale without touching stock. ATS assembles to inventory in advance, and sales orders pick from the stocked finished goods."
  },
  {
    id: 65,
    text: "Which two actions can a sales person perform on an Assembly-to-Order sales line to customise the assembled item for a specific customer? (Select TWO)",
    type: "multiple",
    choices: [
      "Modify component quantities on the linked assembly order",
      "Add extra components not in the standard Bill of Materials (BOM)",
      "Change the assembly item's unit cost directly",
      "Split the assembly order into multiple output quantities",
      "Link the assembly order to a different item number"
    ],
    correct: [0, 1],
    explanation: "For ATO orders, salespeople can access the linked assembly order and both modify standard component quantities and add extra components, enabling customer-specific configuration of the assembled product."
  },

  // ── PLANNING (continued) ──────────────────────────────────────────────────
  {
    id: 66,
    text: "A planner notices that the planning worksheet is not generating replenishment suggestions for an item at a specific location. The item has a reorder point. Which is the most likely cause?",
    type: "single",
    choices: [
      "The item's Reorder Policy is blank on the SKU card for that location",
      "The planning run was executed without including that location",
      "The item's 'Exclude from Planning' field is enabled",
      "The location is not linked to a manufacturing plant"
    ],
    correct: [0],
    explanation: "Planning suggestions require a Reorder Policy to be set on either the Item Card or the SKU Card for the specific location. A blank Reorder Policy means the planning engine ignores that item/location combination."
  },
  {
    id: 67,
    text: "What is the purpose of the 'Safety Lead Time' field on an item or SKU card?",
    type: "single",
    choices: [
      "It buffers the due date of supply orders to arrive earlier than the demand date, protecting against supply uncertainty",
      "It extends the promised delivery date on sales orders to give the warehouse more time to pick",
      "It defines the time needed to perform quality inspection before items are available",
      "It is the lead time used when no vendor lead time is specified"
    ],
    correct: [0],
    explanation: "Safety Lead Time is subtracted from the demand date to calculate the latest receipt date for supply orders, effectively building in a buffer so goods arrive before they are actually needed."
  },
  {
    id: 68,
    text: "Which reordering policy should be used when items should always be replenished to a defined maximum stock level whenever inventory falls below the reorder point?",
    type: "single",
    choices: [
      "Lot-for-Lot",
      "Fixed Reorder Qty.",
      "Maximum Qty.",
      "Order"
    ],
    correct: [2],
    explanation: "'Maximum Qty.' triggers replenishment when inventory falls below the reorder point and suggests ordering enough to bring inventory up to the defined maximum stock level."
  },
  {
    id: 69,
    text: "A planner wants to run MPS (Master Production Schedule) planning separately from MRP (Material Requirements Planning). How is this separation controlled in Business Central?",
    type: "single",
    choices: [
      "MPS and MRP are always run together; they cannot be separated",
      "The 'Production Forecast' is used for MPS; purchase requisitions are used for MRP",
      "The 'MPS' checkbox on the item card identifies items planned in MPS; MRP plans dependent demand components",
      "MPS runs on Work Centers; MRP runs on Machine Centers"
    ],
    correct: [2],
    explanation: "Items with the 'MPS' checkbox enabled on their item card are treated as master schedule items. The planning engine plans these items in the MPS phase, then plans dependent component demand in the MRP phase."
  },

  // ── JOBS / PROJECT MANAGEMENT (continued) ────────────────────────────────
  {
    id: 70,
    text: "A project manager discovers that actual costs exceed the job's budget. Which report in Business Central best shows a variance analysis between budgeted and actual job costs?",
    type: "single",
    choices: [
      "Job Analysis report with Budget and Usage amounts displayed",
      "G/L Trial Balance filtered by Job dimension",
      "Cost Accounting — Cost Budget vs Actual report",
      "Job Ledger Entry list sorted by cost"
    ],
    correct: [0],
    explanation: "The Job Analysis report displays job planning lines (budget) alongside actual usage amounts by job, task, and resource, making it the primary tool for variance analysis between budgeted and actual job costs."
  },
  {
    id: 71,
    text: "Which WIP (Work in Progress) method recognises revenue only when the job is 100% complete?",
    type: "single",
    choices: [
      "Percentage of Completion",
      "Completed Contract",
      "Cost Value",
      "Sales Value"
    ],
    correct: [1],
    explanation: "'Completed Contract' defers all revenue recognition until the job status is changed to Complete, at which point all accumulated WIP is recognised. This contrasts with progressive methods like Percentage of Completion."
  },
  {
    id: 72,
    text: "Which two line types in a Job Planning Line contribute to billable (invoiceable) amounts on a job? (Select TWO)",
    type: "multiple",
    choices: [
      "Budget",
      "Billable",
      "Both Budget and Billable",
      "Schedule",
      "Contract"
    ],
    correct: [1, 2],
    explanation: "'Billable' lines create invoice proposals when using 'Create Job Sales Invoice'. 'Both Budget and Billable' lines are included in both the budget and billing calculations, so both line types contribute to billable amounts."
  },

  // ── SETUP & ADMINISTRATION (continued) ───────────────────────────────────
  {
    id: 73,
    text: "A new employee needs read-only access to all financial reports but must not be able to post journals. Which approach follows the principle of least privilege?",
    type: "single",
    choices: [
      "Assign the SUPER permission set",
      "Create a custom permission set with Read access on the relevant tables and Execute on report objects",
      "Assign the D365 FULL ACCESS permission set with a journal posting restriction workflow",
      "Copy the existing Accountant permission set and remove all Insert/Modify permissions on journal tables"
    ],
    correct: [3],
    explanation: "Copying an existing relevant permission set and removing the specific Insert/Modify permissions on journal-related tables gives the user exactly the access needed without over-permissioning, following least-privilege principles."
  },
  {
    id: 74,
    text: "A consultant wants to migrate master data (vendors, customers, items) and their opening balances using RapidStart Services. In what order should configuration packages typically be applied?",
    type: "single",
    choices: [
      "Opening balances first, then master data",
      "Master data first, then transactional/opening balance data",
      "Any order; Business Central handles dependencies automatically",
      "Configuration packages cannot include opening balances; use data migration templates instead"
    ],
    correct: [1],
    explanation: "Master data (customers, vendors, items, chart of accounts) must be imported before opening balances because the opening balance records (e.g., journal lines) reference master data records that must already exist."
  },
  {
    id: 75,
    text: "A company needs to retain a complete audit trail of all changes to sensitive fields (e.g., Unit Price on items). Which feature provides this in Business Central?",
    type: "single",
    choices: [
      "Change Log Setup — monitor specific tables and fields",
      "Field Monitoring — tracks changes using the Monitored Fields Setup",
      "Audit Log — automatically tracks all field changes company-wide",
      "Both Change Log and Field Monitoring provide this; Change Log for standard tracking, Field Monitoring for sensitive fields with notification"
    ],
    correct: [3],
    explanation: "Business Central offers both Change Log (monitors specified tables/fields and records all changes) and Field Monitoring (specifically for sensitive fields, with configurable notifications and a dedicated monitored fields log)."
  },
  {
    id: 76,
    text: "Under GDPR requirements, a customer requests deletion of all their personal data. Which Business Central feature helps comply with this request?",
    type: "single",
    choices: [
      "Delete Customer record directly from the Customer List",
      "Data Subject Request — Privacy module that identifies and allows anonymisation/deletion of personal data",
      "Archive the customer and all related documents",
      "Export all customer data to Excel and delete the customer manually"
    ],
    correct: [1],
    explanation: "The Data Subject Request feature (under Privacy) identifies all personal data related to a contact/customer across Business Central tables and provides tools to anonymise or delete the data to comply with GDPR right-to-erasure requests."
  },

  // ── CASH MANAGEMENT ───────────────────────────────────────────────────────
  {
    id: 77,
    text: "A company issues printed checks to vendors. Which two steps are required in Business Central to print and post vendor check payments? (Select TWO)",
    type: "multiple",
    choices: [
      "Create payment journal lines using 'Suggest Vendor Payments'",
      "Post the payment journal; checks are printed automatically from the posting batch",
      "Print checks using the 'Print Check' action before posting the payment journal",
      "Reconcile the bank account before printing checks",
      "Enter the check number manually on each payment journal line"
    ],
    correct: [0, 2],
    explanation: "The standard check payment process involves: (1) creating payment lines via 'Suggest Vendor Payments', (2) printing checks using 'Print Check' which assigns check numbers, and then posting the journal. Checks must be printed before posting."
  },
  {
    id: 78,
    text: "A company collects customer payments via SEPA Direct Debit. What must be set up on the customer record to enable this? (Select TWO)",
    type: "multiple",
    choices: [
      "A SEPA Direct Debit Mandate linked to the customer's bank account",
      "The customer's IBAN and BIC in the Customer Bank Account card",
      "A recurring sales invoice for each collection",
      "Direct Debit Collection enabled in Sales & Receivables Setup",
      "A payment method code with Bank Payment Type = Direct Debit"
    ],
    correct: [0, 1],
    explanation: "SEPA Direct Debit requires a signed mandate (Direct Debit Mandate) linked to the customer's bank account, plus the customer's bank account details (IBAN/BIC). These are the two mandatory data elements for the SEPA payment scheme."
  },

  // ── FIXED ASSETS ──────────────────────────────────────────────────────────
  {
    id: 79,
    text: "A company has two depreciation books — one for accounting (tax) and one for management reporting. Which setup allows independent depreciation calculations per book?",
    type: "single",
    choices: [
      "Two separate fixed asset cards for the same asset",
      "Multiple depreciation books defined in FA Setup, each with its own method and dates",
      "Two G/L integration entries on the same depreciation book",
      "A fixed asset with two acquisition cost entries in different dimensions"
    ],
    correct: [1],
    explanation: "Business Central supports multiple depreciation books per asset (e.g., 'Tax' and 'Management'). Each book can have different depreciation methods, rates, and starting dates, and each can have independent G/L integration settings."
  },
  {
    id: 80,
    text: "A company disposes of a fully depreciated fixed asset for £5,000 cash. Which FA posting type is used to record the disposal proceeds?",
    type: "single",
    choices: [
      "Acquisition Cost",
      "Depreciation",
      "Write-Down",
      "Proceeds on Disposal"
    ],
    correct: [3],
    explanation: "'Proceeds on Disposal' is the FA posting type used in the fixed asset journal or FA G/L journal to record the cash received when selling a fixed asset, which Business Central then uses to calculate the gain or loss on disposal."
  },

  // ── INTERCOMPANY (continued) ──────────────────────────────────────────────
  {
    id: 81,
    text: "Two Business Central companies participate in intercompany transactions. Which setup is required so that G/L accounts in one company are automatically mapped to the partner's accounts?",
    type: "single",
    choices: [
      "A shared chart of accounts must be used across both companies",
      "An IC Chart of Accounts must be defined and each company's G/L accounts must be mapped to IC accounts",
      "Dimension mapping is sufficient for intercompany G/L postings",
      "The Intercompany Setup page must specify 'Auto Map G/L Accounts'"
    ],
    correct: [1],
    explanation: "Business Central uses an Intercompany (IC) Chart of Accounts as a common language between IC partners. Each company maps its own G/L accounts to IC account codes, enabling automatic account translation during IC transactions."
  },
  {
    id: 82,
    text: "Company A auto-accepts IC transactions. After Company B posts an IC sales invoice to Company A, what document automatically appears in Company A?",
    type: "single",
    choices: [
      "A posted purchase invoice",
      "An unposted purchase invoice in Company A's IC Inbox that is auto-accepted and becomes a posted purchase invoice",
      "A general journal entry in Company A for manual review",
      "A notification email to Company A's accountant to create a purchase invoice manually"
    ],
    correct: [1],
    explanation: "With auto-accept enabled, Business Central automatically moves IC transactions from the IC Inbox to the corresponding document. An IC sales invoice sent by Company B appears as a purchase invoice in Company A's IC Inbox and is accepted and posted automatically."
  },

  // ── DIMENSIONS ────────────────────────────────────────────────────────────
  {
    id: 83,
    text: "A company wants to require that every posted G/L entry for accounts in the 'Operating Expense' account category has a value for the 'Department' dimension. Which setup achieves this?",
    type: "single",
    choices: [
      "Set the Department dimension to 'Mandatory' in the Default Dimensions for the relevant G/L accounts",
      "Enable 'Require Dimension' on the G/L Account Category for Operating Expense",
      "Set a mandatory dimension rule in the Dimension Combinations page",
      "Create a workflow that blocks posting if the Department dimension is blank"
    ],
    correct: [0],
    explanation: "Setting a dimension to 'Mandatory' in the Default Dimensions page for specific G/L accounts forces users to enter a dimension value whenever those accounts are used in journal or document lines."
  },
  {
    id: 84,
    text: "A company uses four dimensions. Which dimension positions have special shortcuts on transaction lines in Business Central? (Select TWO)",
    type: "multiple",
    choices: [
      "Global Dimension 1",
      "Global Dimension 2",
      "Shortcut Dimension 3",
      "Shortcut Dimension 4",
      "Budget Dimension 1"
    ],
    correct: [0, 1],
    explanation: "Global Dimension 1 and 2 are the only dimensions that have dedicated columns (shortcut fields) visible directly on transaction lines like journal lines and document lines. Shortcut Dimensions 3–8 require opening the Dimensions window."
  },

  // ── REPORTING & ANALYTICS (continued) ────────────────────────────────────
  {
    id: 85,
    text: "A controller wants to create a Power BI report showing live Business Central data. Which Business Central feature exposes data for Power BI consumption?",
    type: "single",
    choices: [
      "SSRS reports exported to Excel and uploaded to Power BI",
      "API pages or OData web services published from Business Central",
      "The Analysis Views feature with Power BI export option",
      "Financial Reports exported via the 'Export to Power BI' button"
    ],
    correct: [1],
    explanation: "Business Central exposes data to Power BI through API pages (modern standard) or OData web services (legacy). Power BI connects to the Business Central OData/API endpoint to pull live data for reporting."
  },
  {
    id: 86,
    text: "An Independent Software Vendor (ISV) wants to allow external systems to read and write Business Central data without using the UI. Which technology is the recommended approach for Business Central online (SaaS)?",
    type: "single",
    choices: [
      "Direct database access via SQL Server",
      "Business Central API pages accessed via RESTful OData/API endpoints",
      "NAS (Business Central Server Administration) automation sessions",
      "Business Central Web Services (SOAP) with Web Services Description Language (WSDL)-based integration"
    ],
    correct: [1],
    explanation: "For Business Central SaaS, the recommended integration approach is using API pages exposed as RESTful OData endpoints. Direct database access and NAS are not supported in the cloud; SOAP web services are legacy and not recommended for new integrations."
  },

  // ── WORKFLOWS ─────────────────────────────────────────────────────────────
  {
    id: 87,
    text: "An approval workflow for purchase orders over £10,000 needs two sequential approvers. How should this be configured?",
    type: "single",
    choices: [
      "Create two separate workflows, each triggered by the purchase order amount",
      "Configure an approval hierarchy with two approvers in the Approval User Setup, using the 'First Qualified Approver' logic",
      "Add two response steps in the workflow with 'Send Approval Request' entries pointing to each approver's user ID",
      "Create an approver group with both users as members and set the approval type to 'All Approvers Must Approve'"
    ],
    correct: [3],
    explanation: "By creating an Approver Group with both users listed, and setting the approval type to 'All Approvers Must Approve', Business Central will route the document to each group member sequentially, requiring both to approve before the document proceeds."
  },
  {
    id: 88,
    text: "A workflow sends notifications to an approver when a purchase order is pending approval. The approver complains they are not receiving emails. Which two settings should be checked? (Select TWO)",
    type: "multiple",
    choices: [
      "Notification template is configured for the Purchase Order workflow",
      "The approver's user account has a valid email address in Business Central",
      "The approval workflow is in 'Enabled' status",
      "The Simple Mail Transfer Protocol (SMTP) email server is configured in Business Central Email Accounts",
      "The notification schedule allows immediate notifications"
    ],
    correct: [1, 3],
    explanation: "Email notifications require (1) the approver's email address to be configured in their Business Central user record and (2) an email account (SMTP or other) to be set up and active in Business Central's Email Accounts setup."
  },

  // ── WAREHOUSE MANAGEMENT (continued) ─────────────────────────────────────
  {
    id: 89,
    text: "A warehouse uses cross-docking to route received goods directly to outbound shipments without putaway. Which condition must be met for Business Central to suggest cross-docking?",
    type: "single",
    choices: [
      "The item must be flagged as 'Cross-Dock Enabled' on the item card",
      "An open warehouse shipment or pick must exist for the item at the receiving location",
      "The location must have both Directed Put-away and Pick enabled AND Use Cross-Docking enabled",
      "Both conditions must be simultaneously true: directed warehouse setup with Cross-Docking enabled AND an open outbound demand at the receiving location"
    ],
    correct: [3],
    explanation: "Cross-docking requires (1) the location to have Directed Put-away and Pick plus Use Cross-Docking enabled, AND (2) an open outbound demand (shipment or pick) to exist for the received item at that location."
  },
  {
    id: 90,
    text: "A large warehouse defines zones and bins. What is the purpose of the 'Bin Ranking' field on the Bin Card?",
    type: "single",
    choices: [
      "It controls the order in which bins appear in the Bin Contents list",
      "It determines bin picking priority — the system suggests bins with the highest ranking first",
      "It defines the maximum number of items that can be stored in the bin",
      "It identifies the default receiving bin for the zone"
    ],
    correct: [1],
    explanation: "Bin Ranking determines put-away and pick priority. For picks, bins with the highest ranking are suggested first. For put-aways, Business Central prefers bins with lower ranking (to keep high-traffic items in high-ranking bins for picking efficiency)."
  },

  // ── FINANCIAL MANAGEMENT — ADVANCED ──────────────────────────────────────
  {
    id: 91,
    text: "A company wants to prevent users from posting to a specific G/L account directly from journals, but still allow posting via sales/purchase documents. How is this achieved?",
    type: "single",
    choices: [
      "Set the account's 'Direct Posting' field to false (No)",
      "Block the G/L account using the 'Blocked' checkbox",
      "Remove journal posting permissions for that account from the user's permission set",
      "Set the 'Account Type' to 'Heading' so it cannot receive postings"
    ],
    correct: [0],
    explanation: "Setting 'Direct Posting' to false (disabled) on a G/L account prevents it from being selected directly in general journals, while it can still receive indirect postings from source documents like sales invoices or purchase orders via posting groups."
  },
  {
    id: 92,
    text: "A company operates in multiple currencies. The 'Additional Reporting Currency' feature is enabled. What does this feature provide?",
    type: "single",
    choices: [
      "It allows posting transactions in a second currency without exchange rate conversion",
      "It maintains a parallel set of G/L balances in a second currency, automatically converted at posting",
      "It replaces the local currency with the reporting currency for all G/L entries",
      "It enables multi-currency bank accounts to be reconciled in the reporting currency"
    ],
    correct: [1],
    explanation: "The Additional Reporting Currency feature maintains every G/L entry in both the local currency and the additional currency (converted at posting). This provides dual-currency reporting without maintaining a separate set of books."
  },
  {
    id: 93,
    text: "Which of the following is TRUE about recurring general journals in Business Central?",
    type: "single",
    choices: [
      "Recurring journals can only use fixed amounts; variable amounts require manual journals",
      "The 'Recurring Method' field controls how amounts are handled after posting (Fixed, Variable, Balance, etc.)",
      "Recurring journals are posted automatically on the recurring date without user intervention",
      "Recurring journals require approval before they can be posted"
    ],
    correct: [1],
    explanation: "The Recurring Method field on each recurring journal line controls behavior: Fixed keeps the amount, Variable clears the amount after posting (for manual entry), Balance posts the net balance of specified accounts, etc."
  },
  {
    id: 94,
    text: "A company needs to run the year-end close. Which batch job transfers net income/expense balances to the retained earnings account?",
    type: "single",
    choices: [
      "Post Inventory Cost to G/L",
      "Close Income Statement",
      "Calculate Depreciation",
      "Calc. and Post VAT Settlement"
    ],
    correct: [1],
    explanation: "'Close Income Statement' zeroes out all income statement (profit & loss) G/L account balances by posting closing entries dated with a closing date, transferring net income/loss to the retained earnings account specified in G/L Setup."
  },

  // ── SALES & RECEIVABLES — ADVANCED ───────────────────────────────────────
  {
    id: 95,
    text: "A company wants to automatically remind customers of overdue invoices. Which setup is required? (Select TWO)",
    type: "multiple",
    choices: [
      "Reminder Terms must be defined and assigned to customers",
      "Finance Charge Terms must be assigned to the customer",
      "The 'Create Reminders' batch job must be run periodically",
      "An automatic workflow must be enabled to send reminders",
      "Reminder levels must be defined for each reminder term"
    ],
    correct: [0, 4],
    explanation: "The reminder process requires Reminder Terms (defining the overall reminder policy) to be set up with at least one Reminder Level (defining grace period, fees, and text per escalation level), and the terms assigned to customers."
  },
  {
    id: 96,
    text: "A salesperson wants to create a special order where the item is purchased specifically for the customer (not from stock). How does a Special Order differ from a Drop Shipment?",
    type: "single",
    choices: [
      "There is no difference; Special Order and Drop Shipment are synonyms in Business Central",
      "Special Order purchases the item to your warehouse first; Drop Shipment ships directly from vendor to customer",
      "Special Order creates a production order; Drop Shipment creates a purchase order",
      "Drop Shipment is for standard items; Special Order is for non-inventory items only"
    ],
    correct: [1],
    explanation: "A Special Order creates a purchase order for the specific customer, but goods are received into your warehouse and then shipped to the customer. A Drop Shipment bypasses the warehouse entirely — the vendor ships directly to the customer."
  },

  // ── PURCHASING & PAYABLES — ADVANCED ─────────────────────────────────────
  {
    id: 97,
    text: "A company receives a vendor invoice with additional landed costs (freight, insurance) that must be allocated across multiple item receipts. Which document handles this?",
    type: "single",
    choices: [
      "Revaluation Journal with landed cost lines",
      "A purchase invoice with Item Charge lines assigned to the received items",
      "An inventory adjustment journal with the extra cost",
      "A G/L journal debiting the item's inventory account directly"
    ],
    correct: [1],
    explanation: "Item Charges on a purchase invoice (or credit memo) allow allocation of additional costs (freight, insurance, customs) to received items, adjusting their inventory cost. The Item Charge Assignment page distributes the cost across the selected receipt lines."
  },
  {
    id: 98,
    text: "Which two options are available for allocating an item charge to multiple receipt lines? (Select TWO)",
    type: "multiple",
    choices: [
      "By Amount (proportional to line value)",
      "By Weight (proportional to item weight)",
      "Equally (same amount per line)",
      "By Quantity (proportional to received quantity)",
      "By Vendor Price (proportional to vendor unit cost)"
    ],
    correct: [0, 3],
    explanation: "Business Central's Item Charge Assignment offers allocation by Amount (proportional to the line's total value) and by Quantity (proportional to the number of units received on each line) as the two standard allocation methods."
  },

  // ── INVENTORY (additional) ─────────────────────────────────────────────────
  {
    id: 99,
    text: "A company uses First In, First Out (FIFO) costing. Three purchase receipts were posted for the same item: 10 units @ £10, 10 units @ £12, and 10 units @ £15. A sales shipment is then posted for 25 units. What is the cost of goods sold?",
    type: "single",
    choices: [
      "£312.50 (average of all three receipts × 25)",
      "£295 (10×£10 + 10×£12 + 5×£15)",
      "£375 (25 × £15, using latest cost)",
      "£250 (25 × £10, using earliest cost)"
    ],
    correct: [1],
    explanation: "FIFO uses the oldest costs first: 10 units × £10 = £100, then 10 units × £12 = £120, then 5 remaining units × £15 = £75. Total COGS = £100 + £120 + £75 = £295."
  },
  {
    id: 100,
    text: "Which two statements are TRUE about the 'Adjust Cost – Item Entries' batch job? (Select TWO)",
    type: "multiple",
    choices: [
      "It recalculates item costs using the item's costing method and updates value entries",
      "It must be run before inventory costs can be posted to the G/L when automatic cost posting is disabled",
      "It creates new item ledger entries to record the cost adjustment",
      "It can change the costing method of an item to correct historical errors",
      "It should be run periodically (e.g., daily or weekly) to keep inventory valuations accurate"
    ],
    correct: [0, 4],
    explanation: "'Adjust Cost – Item Entries' recalculates item costs per the costing method and updates value entries (not item ledger entries) to reflect actual costs. It should be run periodically to ensure accurate inventory valuations, especially for Average and FIFO costing."
  },

  // ── AL DEVELOPMENT — EXTENSION TYPES ────────────────────────────────────
  {
    id: 101,
    text: "A partner company builds a vertical solution for the healthcare industry that they plan to sell to multiple customers through Microsoft AppSource. The solution adds new tables, pages, and codeunits but does not modify Base Application objects directly. Which extension type best describes this scenario?",
    type: "single",
    choices: [
      "Per-tenant extension — deployed directly to a single customer's environment",
      "Add-on app — a standalone extension published to AppSource targeting multiple customers",
      "Connect app — an external application that communicates with Business Central via API",
      "Embed app — a white-label version of Business Central for an industry vertical"
    ],
    correct: [1],
    explanation: "An Add-on app is an AppSource-published AL extension that adds functionality on top of the Base Application for any customer. Per-tenant extensions are customer-specific and not published to AppSource. Connect apps are external (non-AL) applications that use APIs to integrate with Business Central. Embed apps are reseller-customised editions of Business Central itself."
  },

  // ── AL DEVELOPMENT — TABLEEXTENSION ─────────────────────────────────────
  {
    id: 102,
    text: "A developer needs to add a 'Contract Reference' field (Code 20) to the existing Sales Header table. The field must be classified as personal data for GDPR purposes. Which TWO things are required?",
    type: "multiple",
    choices: [
      "Use a tableextension object targeting the Sales Header table",
      "Create a separate linked table instead of extending the existing one",
      "Set the DataClassification property to CustomerContent on the new field",
      "Set the DataClassification property to SystemMetadata on the new field",
      "Mark the field with ObsoleteState = Removed to enable GDPR compliance"
    ],
    correct: [0, 2],
    explanation: "A tableextension is the correct AL object for adding fields to existing Base Application tables without modifying the base app. The DataClassification property set to CustomerContent identifies fields holding personal customer data, fulfilling GDPR classification requirements. SystemMetadata is for system-generated fields. A separate linked table is unnecessary. ObsoleteState = Removed is used to deprecate fields, not to classify them."
  },

  // ── AL DEVELOPMENT — PAGEEXTENSION ──────────────────────────────────────
  {
    id: 103,
    text: "A developer wants to add a new action called 'Send to Quality Check' to the existing Item Card page without modifying the Base Application. The action should call a custom codeunit. Which AL object type is required?",
    type: "single",
    choices: [
      "A table object — actions are always defined on the source table",
      "A pageextension object targeting the Item Card page, with the action added in the actions area",
      "A codeunit with SubType set to Install",
      "A report object — only reports can invoke codeunit actions from pages"
    ],
    correct: [1],
    explanation: "A pageextension object extends an existing page without touching the Base Application. Actions are added using the addlast, addfirst, addafter, or addbefore keywords inside the actions section of the pageextension. Install codeunits handle first-install logic, not UI extensions. Actions cannot be defined on table objects or report objects."
  },

  // ── AL DEVELOPMENT — EVENTS ──────────────────────────────────────────────
  {
    id: 104,
    text: "A developer building an Add-on app wants to expose a custom event that fires when a non-conformity record is approved, allowing other extensions to react. The publisher should have no knowledge of what subscribers do. Which event type is correct?",
    type: "single",
    choices: [
      "IntegrationEvent — raised for technical integration; its parameter signature can change after publishing",
      "BusinessEvent — represents a named business action; its signature is fixed once published to protect subscribers",
      "Reuse an existing OnAfterInsert trigger from the Base Application",
      "Use the OnAfterPost trigger on the non-conformity table — it fires automatically"
    ],
    correct: [1],
    explanation: "BusinessEvent is used to expose a named business milestone (like 'non-conformity approved'). Its signature is immutable once published, protecting all downstream subscribers from breaking changes. IntegrationEvent allows signature changes and is used for technical integration points. OnAfterInsert is a table trigger, not an event that other extensions can subscribe to in a structured way. There is no generic OnAfterPost trigger on custom tables."
  },

  // ── AL DEVELOPMENT — EVENT SUBSCRIBERS ──────────────────────────────────
  {
    id: 105,
    text: "A developer needs code in Extension B to execute after the Sales-Post codeunit raises an IntegrationEvent named OnAfterPostSalesDoc. Which TWO elements are required in Extension B?",
    type: "multiple",
    choices: [
      "The [EventSubscriber(ObjectType::Codeunit, Codeunit::\"Sales-Post\", 'OnAfterPostSalesDoc', '', false, false)] attribute on the subscriber procedure",
      "The subscriber procedure must declare its parameters with the same signature as the publisher event",
      "The codeunit must set SubType = EventSubscriber",
      "The subscriber extension must list the Sales-Post codeunit as a direct dependency in app.json",
      "The subscriber procedure must be declared as a trigger, not a regular procedure"
    ],
    correct: [0, 1],
    explanation: "An event subscriber requires: (1) the [EventSubscriber] attribute specifying the publisher object type, object name/ID, and event name; and (2) the procedure must match the parameter signature of the publisher event. The SubType for the containing codeunit is Normal (default), not EventSubscriber. Subscribing to Base Application events does not require a special app.json dependency. Subscribers are regular procedures, not triggers."
  },

  // ── AL DEVELOPMENT — TEST CODEUNITS ─────────────────────────────────────
  {
    id: 106,
    text: "A developer writes a codeunit to verify that a custom discount calculation function returns the correct value. The test must automatically roll back all database changes after each test function runs. Which TWO things achieve this?",
    type: "multiple",
    choices: [
      "Set the codeunit SubType to Test",
      "Decorate each test function with the [Test] attribute",
      "Set the codeunit SubType to Upgrade",
      "Add a ROLLBACK; statement at the end of each test function",
      "Decorate the codeunit with [TransactionModel(TransactionModel::AutoRollback)]"
    ],
    correct: [0, 1],
    explanation: "A test codeunit must have SubType = Test. Each individual test function must be decorated with [Test]. The AL test framework automatically wraps each [Test] function in a transaction and rolls it back after completion — no explicit ROLLBACK is needed. SubType = Upgrade is for upgrade codeunits. [TransactionModel] is used in specific advanced scenarios but is not what causes the standard automatic rollback."
  },

  // ── PERMISSIONS IN AL ────────────────────────────────────────────────────
  {
    id: 107,
    text: "A developer is building an AppSource extension that manages custom Project Task records. They need to ship appropriate permissions bundled with the extension. Which AL object defines a permission set that is automatically available after installation?",
    type: "single",
    choices: [
      "An install codeunit that inserts records directly into the Access Control table",
      "A permissionset object defined in the extension's AL code",
      "A manually exported XML file that customers must import after installing the extension",
      "A profile object listing the allowed objects and actions"
    ],
    correct: [1],
    explanation: "The permissionset AL object is the modern way to define and ship permissions with an extension. When the extension is installed, the permission set is automatically available for assignment to users. Manually importing XML files is the legacy approach. Install codeunits are for setup logic, not permission definitions. Profile objects control the UI layout and role center, not security."
  },

  // ── API PAGES ────────────────────────────────────────────────────────────
  {
    id: 108,
    text: "A company wants to expose its custom 'Project Task' table so that external applications can read and write records via RESTful OData calls, without custom web service code. Which page type and properties are required? (Select THREE)",
    type: "multiple",
    choices: [
      "Set PageType to API",
      "Set PageType to List",
      "Set APIVersion, APIPublisher, APIGroup, EntityName, and EntitySetName",
      "Set ODataKeyFields to the primary key field(s) exposed via OData",
      "Add all fields as a CardPart sub-page"
    ],
    correct: [0, 2, 3],
    explanation: "An API page requires: PageType = API (to mark it as a REST endpoint), the API namespace properties (APIVersion, APIPublisher, APIGroup, EntityName, EntitySetName) to form the URL, and ODataKeyFields to identify the primary key for direct record access. PageType List is a standard UI list page. CardPart is a FactBox type, not relevant to API pages."
  },

  // ── XMLPORT ──────────────────────────────────────────────────────────────
  {
    id: 109,
    text: "A developer creates an XMLport to import customer data from a bank that delivers flat files where every field occupies a fixed number of characters with no delimiter between fields. Which Format property value should be used?",
    type: "single",
    choices: [
      "Xml",
      "VariableText",
      "FixedText",
      "Json"
    ],
    correct: [2],
    explanation: "FixedText format is used when each field in the file has a predetermined character width. VariableText (CSV) uses a delimiter such as a comma or semicolon between fields. Xml is for XML-structured files. Json is not a valid XMLport Format value in AL."
  },

  // ── REPORT DATAITEMLINK ──────────────────────────────────────────────────
  {
    id: 110,
    text: "A developer designs a report with a parent data item for Sales Header and a child data item for Sales Line. They set the DataItemLink property on the Sales Line data item to 'Document No. = FIELD(No.)'. What is the primary effect?",
    type: "single",
    choices: [
      "It filters Sales Line records to only those where Document No. matches the current Sales Header's No. field",
      "It sorts the Sales Line data item by Document No. in ascending order",
      "It creates a new Document No. field on the Sales Line table",
      "It removes the Sales Line data item from the report request page filter section"
    ],
    correct: [0],
    explanation: "DataItemLink creates a parent-child join between data items by filtering child records to those matching the current parent record — equivalent to an SQL INNER JOIN. It has no effect on sorting, does not create table fields, and does not affect the request page (DataItemLinkReference controls request page visibility)."
  },

  // ── UPGRADE CODEUNITS ────────────────────────────────────────────────────
  {
    id: 111,
    text: "A developer ships version 2.0 of an extension that renames a field on a custom table. What must be included to prevent data loss or publishing errors during upgrade?",
    type: "single",
    choices: [
      "An install codeunit with OnInstallAppPerCompany to copy data between old and new field names",
      "An upgrade codeunit with SubType = Upgrade, using OnUpgradePerCompany to migrate data from the old field to the new one",
      "A migration table object that automatically maps old field names to new ones",
      "No action needed — Business Central automatically migrates data when a field is renamed"
    ],
    correct: [1],
    explanation: "Field renames require an upgrade codeunit (SubType = Upgrade) with an OnUpgradePerCompany trigger that manually migrates data from the old field name to the new one. Install codeunits run only on first install, not on upgrade. Business Central does NOT automatically migrate data for renamed fields — this is the developer's responsibility. Migration table objects are not a BC AL concept."
  },

  // ── APP.JSON CONFIGURATION ───────────────────────────────────────────────
  {
    id: 112,
    text: "A developer creates a new per-tenant extension. Which FOUR properties are mandatory in every app.json file and cause a compilation error if missing?",
    type: "multiple",
    choices: [
      "id — a unique GUID identifying the extension",
      "name — the display name of the extension",
      "version — the semantic version (e.g., 1.0.0.0) of the extension",
      "publisher — the name of the company or individual publishing the extension",
      "target — either OnPrem or Cloud, specifying the deployment target"
    ],
    correct: [0, 1, 2, 3],
    explanation: "The four mandatory fields in app.json are: id (unique GUID), name, version (four-part semantic version: major.minor.build.revision), and publisher. The target field defaults to Cloud if omitted and is not mandatory. All four required fields cause compilation errors if absent."
  },

  // ── TRANSLATION FILES ────────────────────────────────────────────────────
  {
    id: 113,
    text: "A developer has built a Business Central extension in English and now wants to add a French translation. Which file format and generation method is correct for AL extensions?",
    type: "single",
    choices: [
      "A .resx file generated by running 'AL: Generate XLIFF translations' in VS Code",
      "A .xlf (XLIFF) file generated by adding 'TranslationFile' to the 'features' array in app.json — the AL compiler then generates the base translation file automatically",
      "A .po (Gettext) file created manually and placed in the Translations folder",
      "A .json file with key-value pairs placed in the /Translations subfolder of the extension"
    ],
    correct: [1],
    explanation: "Business Central AL uses XLIFF (.xlf) files for translations. Enabling 'TranslationFile' in the app.json features array causes the AL compiler to generate a base .xlf file containing all translatable strings. Translators then fill in the target language. .resx, .po, and .json are not used by the BC translation system."
  },

  // ── SAAS DEVELOPER CONSTRAINTS ───────────────────────────────────────────
  {
    id: 114,
    text: "A developer is porting an on-premises extension to Business Central online (SaaS). The extension currently writes temporary files to the server file system during report generation. What change is required?",
    type: "single",
    choices: [
      "Map the file path to a shared Azure Blob Storage container using a connection string",
      "Replace file system operations with in-memory stream (InStream/OutStream) or Temp Blob codeunit operations",
      "Enable the 'Allow Server File Access' flag in the extension manifest",
      "Use a NAS (Network Attached Storage) session type to maintain server-side file access"
    ],
    correct: [1],
    explanation: "Business Central online does not permit direct server file system access. Developers must replace file I/O with stream-based operations (InStream/OutStream) and Temp Blob codeunit for temporary storage. Azure Blob Storage requires custom HTTP integration and is not a direct replacement path. 'Allow Server File Access' and NAS session type do not exist in the SaaS environment."
  },

  // ── APPLICATION INSIGHTS / TELEMETRY ─────────────────────────────────────
  {
    id: 115,
    text: "A developer wants to emit custom telemetry signals from their Business Central extension to Azure Application Insights. Which AL method is used, and where is the connection string configured?",
    type: "single",
    choices: [
      "Session.LogMessage() — connection string set in the extension's app.json under 'applicationInsightsConnectionString'",
      "Codeunit Telemetry.Publish() — connection string stored in the Business Central Admin Center under environment settings",
      "SMTP relay is used to forward log data; Application Insights is only for on-premises environments",
      "Custom telemetry requires a Connect app in C#; AL cannot emit telemetry signals directly"
    ],
    correct: [0],
    explanation: "Developers use Session.LogMessage() with a telemetry scope to emit custom trace signals from AL code. The Application Insights connection string for extension-level telemetry is set in app.json using 'applicationInsightsConnectionString'. The Admin Center connection string applies to environment-level system telemetry, not extension custom events."
  },

  // ── LAUNCH.JSON / DEBUG ──────────────────────────────────────────────────
  {
    id: 116,
    text: "A developer publishes a per-tenant extension to a Business Central online sandbox and wants to step through AL code with the VS Code debugger. Which TWO settings in launch.json are required to enable cloud debugging?",
    type: "multiple",
    choices: [
      "Set \"tenant\" to the Azure AD (Microsoft Entra) tenant ID of the sandbox environment",
      "Set \"server\" to 'localhost' and \"port\" to 7049",
      "Set \"environmentType\" to \"Sandbox\" or specify the environment name in \"environmentName\"",
      "Set \"enableLongRunningSqlStatements\" to true to activate the debugger",
      "Set \"startupObjectType\" and \"startupObjectId\" to define the debug entry point"
    ],
    correct: [0, 2],
    explanation: "To debug against a Business Central online sandbox, launch.json must specify the tenant (Azure AD tenant GUID or domain) and either environmentType: Sandbox or the environmentName. server/port settings are for on-premises. enableLongRunningSqlStatements is a performance diagnostic option. startupObjectId is optional — the debugger can attach to any running session."
  },

  // ── AL DATA — FILTERS ────────────────────────────────────────────────────
  {
    id: 117,
    text: "A developer needs to retrieve all Customer records where the Credit Limit is between £5,000 and £10,000 inclusive, and the Blocked field is blank (not blocked). Which TWO AL statements correctly apply both filters?",
    type: "multiple",
    choices: [
      "Customer.SetRange(\"Credit Limit (LCY)\", 5000, 10000);",
      "Customer.SetFilter(\"Credit Limit (LCY)\", '>5000<10000');",
      "Customer.SetRange(Blocked, Customer.Blocked::\" \");",
      "Customer.SetFilter(Blocked, '<>%1', Customer.Blocked::\" \");",
      "Customer.SetRange(\"Credit Limit (LCY)\", '>5000');"
    ],
    correct: [0, 2],
    explanation: "SetRange(FieldName, LowValue, HighValue) applies an inclusive range filter — the idiomatic AL way for between-two-values filtering. SetRange(Blocked, Customer.Blocked::\" \") filters to the blank 'Not Blocked' option value. The second choice uses invalid SetFilter syntax (missing & operator). SetFilter with '<>' excludes a value but SetRange on the blank option is cleaner. The last choice is invalid because SetRange does not accept string expressions."
  },

  // ── AL DATA — RECORD ITERATION ───────────────────────────────────────────
  {
    id: 118,
    text: "A developer needs to iterate through all open Purchase Lines for a specific vendor and update a custom field on each record. Which AL pattern is correct?",
    type: "single",
    choices: [
      "Call PurchLine.FindFirst() then use a while loop with PurchLine.Next()",
      "Call PurchLine.FindSet(true) to position on the first record and lock for modification, then use repeat...until PurchLine.Next() = 0 and call PurchLine.Modify() inside the loop",
      "Use PurchLine.Find('-') which automatically iterates all filtered records without an explicit loop",
      "Use PurchLine.Get() in a for loop from 1 to PurchLine.Count()"
    ],
    correct: [1],
    explanation: "FindSet(true) positions on the first record and locks the records for modification. The repeat...until PurchLine.Next() = 0 pattern iterates through all filtered records. Calling Modify() inside the loop updates each record. FindFirst() only retrieves the first matching record — not suitable as an iteration starter. Find('-') is equivalent to FindFirst for iteration. Get() retrieves a single record by primary key, not a filtered set."
  },

  // ── AL — FLOWFIELDS ──────────────────────────────────────────────────────
  {
    id: 119,
    text: "A developer adds a FlowField to a custom Project Header table to sum all 'Amount' values on linked Project Line records. A colleague reports the FlowField always shows 0, even when lines exist. What is the most likely cause?",
    type: "single",
    choices: [
      "FlowFields must have CalcFields() called explicitly in AL code to compute their value before reading",
      "FlowFields are read-only and cannot reference Amount fields on other tables",
      "The FlowField must have its Editable property set to true before values are populated",
      "FlowFields only work in reports, not when reading records in AL code"
    ],
    correct: [0],
    explanation: "FlowField values are NOT automatically computed when a record is read from the database. The developer must call Rec.CalcFields(FieldName) explicitly before reading the value. Page engines call CalcFields automatically for displayed FlowFields, which is why they appear correct in the UI but show 0 in raw AL code. FlowFields can reference fields on related tables and work in all contexts."
  },

  // ── AL — INTERFACES ──────────────────────────────────────────────────────
  {
    id: 120,
    text: "A developer creates an AL interface named IShippingCalculator with one procedure. Two codeunits — StandardShipping and ExpressShipping — both implement the interface. A third codeunit selects the implementation at runtime based on order type. What is the correct AL syntax to declare the variable?",
    type: "single",
    choices: [
      "var Calc: Codeunit IShippingCalculator;",
      "var Calc: Interface IShippingCalculator;",
      "var Calc: Variant;",
      "var Calc: DotNet IShippingCalculator;"
    ],
    correct: [1],
    explanation: "In AL, an interface-typed variable is declared with the Interface keyword: var Calc: Interface IShippingCalculator. This variable can hold any codeunit that implements the interface, enabling runtime polymorphism. 'Codeunit IShippingCalculator' would reference a codeunit object named IShippingCalculator (not the interface). Variant and DotNet are for untyped or .NET interop variables."
  },

  // ── CODECOP ──────────────────────────────────────────────────────────────
  {
    id: 121,
    text: "A developer enables CodeCop analysis and receives warning AA0206: 'The field with name [Name] already exists in the extended table.' What does this mean and how is it resolved?",
    type: "single",
    choices: [
      "A tableextension defines a field whose name already exists on the base table — rename the new field to avoid ambiguity",
      "A duplicate local variable name exists within a procedure — rename one of them",
      "The AL compiler cannot find the base table — fix the app.json dependency references",
      "A table object ID is already taken — change the object ID"
    ],
    correct: [0],
    explanation: "CodeCop AA0206 fires when a tableextension adds a field with the same name (or caption) as a field that already exists on the base table, which can cause runtime ambiguity. The fix is to rename the new field to a unique name. Duplicate variable names have a different diagnostic code, missing table references produce compilation errors, and object ID conflicts are separate errors."
  },

  // ── DATA CLASSIFICATION ───────────────────────────────────────────────────
  {
    id: 122,
    text: "A developer adds a 'National ID Number' field to a custom Contact Details table. Under GDPR, which DataClassification value must be assigned to this field?",
    type: "single",
    choices: [
      "SystemMetadata — used for system-generated identifiers",
      "OrganizationIdentifiableInformation — for data that identifies legal entities",
      "PersonalData — for data that can identify or is linked to a natural person",
      "ToBeClassified — the default value; classification can be added later"
    ],
    correct: [2],
    explanation: "A National ID Number directly identifies an individual and must be classified as PersonalData. SystemMetadata is for system-generated data (like RecordId). OrganizationIdentifiableInformation is for company-level identifiers. ToBeClassified is the unreviewed default and must not be left in production extensions — it indicates the developer has not yet assessed the field's privacy impact."
  },

  // ── INSTALL CODEUNITS ────────────────────────────────────────────────────
  {
    id: 123,
    text: "A developer wants to create default setup records in a custom configuration table the FIRST time their extension is installed, but NOT on subsequent upgrades. Which construct achieves this?",
    type: "single",
    choices: [
      "An upgrade codeunit with SubType = Upgrade and the OnUpgradePerCompany trigger",
      "An install codeunit with SubType = Install and the OnInstallAppPerCompany trigger — this fires only on the first install, not on upgrades",
      "A table object with an OnInsert trigger that creates the default record whenever any record is inserted",
      "A codeunit called from the Role Center home page's OnOpenPage trigger"
    ],
    correct: [1],
    explanation: "The install codeunit (SubType = Install) with OnInstallAppPerCompany runs once per company on the very first installation. It does NOT run on upgrades (that is the role of OnUpgradePerCompany in an upgrade codeunit). This is the correct place to seed default configuration data. OnInsert fires on every record insert, not just at installation."
  },

  // ── QUERY OBJECTS ────────────────────────────────────────────────────────
  {
    id: 124,
    text: "A developer needs to retrieve the top 5 customers by total sales amount for a dashboard page using a Business Central Query object. Which Query property limits the result set, and how is the sort order defined?",
    type: "single",
    choices: [
      "TopNumberOfRows property on the query object; sort order defined with the OrderBy property on the query column",
      "MaxRecords property on the data item; sort order handled by SetCurrentKey at runtime",
      "LimitRows property on the query object; an ORDER BY clause in a separate SQL view",
      "The Find('-') method with SetRange on the query data item handles both limiting and sorting"
    ],
    correct: [0],
    explanation: "In a Business Central Query object, TopNumberOfRows limits the result set to N rows, and sorting is controlled by the OrderBy property applied to one or more column definitions within the query. SetCurrentKey and Find('-') are Record operations, not applicable to Query objects. LimitRows and MaxRecords are not valid AL Query properties."
  },

  // ── REPORT LAYOUTS ───────────────────────────────────────────────────────
  {
    id: 125,
    text: "A partner developer wants to add a new dataset column and a custom Word layout to the existing 'Standard Sales - Invoice' report from the Base Application, without replacing or modifying the base report. Which approach is correct?",
    type: "single",
    choices: [
      "Create a report object with the same ID to override the Base Application report entirely",
      "Use a report extension object to add data items, columns, and new layout alternatives, leaving the original report intact",
      "Export the RDLC layout, modify it in Visual Studio, and re-import it as a custom layout via Report Layout Selection",
      "Download Base Application source code and modify the report AL object directly"
    ],
    correct: [1],
    explanation: "A report extension object is the correct developer approach to extend an existing report — adding data items, columns, triggers, and layout alternatives without modifying the Base Application. The original layouts remain selectable. Creating a report object with the same ID is a report substitution that replaces (not extends) the base report and causes conflicts. RDLC export/import is a non-developer layout customisation that cannot add new dataset columns. Modifying Base Application source directly violates the extension model."
  },

  // ── PROFILE / ROLE CENTER ────────────────────────────────────────────────
  {
    id: 126,
    text: "A developer creates a custom Profile object in AL for a 'Warehouse Operator' role. An administrator then wants to hide this profile so it does not appear in the profile selection list for regular users. Which property controls this?",
    type: "single",
    choices: [
      "Set the Enabled property on the Profile object to false — this hides it from the available profiles list",
      "Assign the Profile to a specific permission set using the ProfileID property",
      "Set the Promoted property on the Profile to false",
      "Delete the profile from AL code and republish the extension"
    ],
    correct: [0],
    explanation: "The Enabled property on a Profile object controls whether it appears in the available profiles list. Setting it to false hides the profile from users without deleting it. There is no ProfileID property on permission sets — permission sets and profiles are assigned to users independently. Promoted does not exist as a Profile property. Deleting and republishing is destructive and unnecessary."
  },

  // ── SANDBOX VS PRODUCTION ────────────────────────────────────────────────
  {
    id: 127,
    text: "A developer uses a Business Central online sandbox environment for testing. Which TWO statements about Business Central online sandbox environments are correct?",
    type: "multiple",
    choices: [
      "Sandboxes can be refreshed from the linked production environment, which resets sandbox extensions and data",
      "Extensions published via F5 (developer mode) in a sandbox are automatically promoted to the linked production environment",
      "Sandboxes support direct SQL Server database access for troubleshooting",
      "Per-tenant extensions can be unpublished from a sandbox without a Microsoft support request",
      "Sandboxes always run the same Business Central version as the linked production environment and cannot be updated independently"
    ],
    correct: [0, 3],
    explanation: "Sandboxes can be refreshed from production (resetting their data and extensions), and per-tenant extensions can be unpublished from sandboxes directly. F5-published extensions do NOT automatically go to production — that requires a formal deployment. Direct SQL access is never available in Business Central online. Sandboxes can be updated to a future minor version for preview testing independently of production."
  },

  // ── ENTITLEMENTS ─────────────────────────────────────────────────────────
  {
    id: 128,
    text: "A partner builds an AppSource extension for Business Central online. Only users with a 'Premium' subscription plan for their app should access the custom pages. Which AL object enforces this licensing check?",
    type: "single",
    choices: [
      "A permission set object assigned to the user in User Setup",
      "An entitlement object that maps a Microsoft Entra service plan to a permission set defined in the extension",
      "A license check codeunit that runs in the OnOpenPage trigger of every restricted page",
      "The AppSource Marketplace validation process automatically restricts access — no AL code required"
    ],
    correct: [1],
    explanation: "Entitlement objects map a Microsoft 365 / Entra ID plan (representing a purchased subscription) to a set of permissions, ensuring only licensed users can access functionality. Permission sets alone control capabilities but not based on purchased plans. Manual OnOpenPage checks are a fragile workaround. AppSource validation checks technical quality, not runtime licensing — the entitlement model handles that."
  },

  // ── APPSOURCE VALIDATION ──────────────────────────────────────────────────
  {
    id: 129,
    text: "A team is submitting their Business Central extension to AppSource. The automated validation pipeline rejects the app. Which TWO issues most commonly cause AppSource technical validation failures?",
    type: "multiple",
    choices: [
      "AL object IDs are outside the ID range assigned to the partner by Microsoft",
      "The app uses the [Obsolete] attribute on deprecated procedures",
      "The app.json file does not specify the 'idRanges' property matching the assigned ID range",
      "The app does not include a translation file for any non-English language",
      "The app uses AL interfaces for polymorphism"
    ],
    correct: [0, 2],
    explanation: "AppSource validation requires all AL object IDs to fall within the partner's Microsoft-assigned ID range, and app.json must specify the 'idRanges' property consistently. Objects outside the range or a missing/incorrect idRanges property cause immediate validation failure. Using [Obsolete] is valid and encouraged. A single English translation suffices for initial submission. Interfaces are standard AL and fully supported."
  },

  // ── HTTPCLIENT ────────────────────────────────────────────────────────────
  {
    id: 130,
    text: "A developer writes AL code in a Business Central online extension to call an external REST API. The API requires an Authorization header with a bearer token. Which AL pattern correctly sets this header?",
    type: "single",
    choices: [
      "Declare a HttpRequestMessage variable, call GetHeaders() on it to obtain the HttpHeaders object, then call Add('Authorization', 'Bearer ' + Token) on the headers object",
      "Call HttpClient.AddHeader('Authorization', 'Bearer ' + Token) directly on the HttpClient variable before Send()",
      "Assign the token as HttpContent.SetHeader('Authorization', 'Bearer ' + Token) before writing the body",
      "Set the Authorization header by assigning HttpClient.DefaultRequestHeaders := 'Bearer ' + Token"
    ],
    correct: [0],
    explanation: "In BC AL, HTTP headers are set on the HttpRequestMessage object. The pattern is: RequestMessage.GetHeaders(Headers); then Headers.Add('Authorization', 'Bearer ' + Token). HttpClient has no AddHeader method. HttpContent holds the request body, not headers. DefaultRequestHeaders is a C# .NET property, not available in AL."
  },

  // ── BC ARCHITECTURE — DEPLOYMENT OPTIONS ─────────────────────────────────
  {
    id: 131,
    text: "A company needs full control over the update schedule and must run a third-party .NET add-in that accesses the server file system. Which Business Central deployment model supports both requirements?",
    type: "single",
    choices: [
      "Business Central online (SaaS) — update windows can be fully configured by the tenant administrator",
      "Business Central on-premises — the customer controls update timing and allows server-level configurations including file system access and .NET add-ins",
      "Business Central Embed — provides a private server for each partner with file system access",
      "Business Central online with a dedicated environment — provides a private server with full server access"
    ],
    correct: [1],
    explanation: "Business Central on-premises gives customers full control over update scheduling and allows server-level customisations such as custom .NET add-ins, file system access, and integration with local infrastructure. Business Central online (SaaS) — including Embed apps and dedicated environments — runs on Microsoft-managed infrastructure where direct server access is not permitted, regardless of configuration."
  },

  // ── AL EVENTS — PRE-POSTING VALIDATION ──────────────────────────────────
  {
    id: 132,
    text: "A developer needs their extension to run a custom validation immediately BEFORE a sales order is posted, and to abort the post with an error if validation fails. Which pattern achieves this?",
    type: "single",
    choices: [
      "Subscribe to OnAfterPostSalesDoc and raise an error in the subscriber",
      "Subscribe to an OnBeforePostSalesDoc-style event raised before posting logic runs — raising an error inside the subscriber will abort the entire posting transaction",
      "Override the OnBeforeInsert trigger on the Sales Invoice Header table",
      "Create a job queue entry that deletes the posted invoice if validation fails"
    ],
    correct: [1],
    explanation: "Pre-posting validation should use an OnBefore-style event raised by the posting codeunit before the actual work begins. An error raised inside this subscriber aborts the transaction and rolls back all changes. OnAfterPostSalesDoc fires after the posting is committed — errors there cannot undo the posted document. OnBeforeInsert on the invoice header fires very late in the posting flow. Job queues cannot undo committed postings."
  },

  // ── NO. SERIES ────────────────────────────────────────────────────────────
  {
    id: 133,
    text: "A developer creates a custom 'Service Request' table and wants document numbers assigned automatically using the standard Business Central No. Series framework. Which THREE elements are required? (Select THREE)",
    type: "multiple",
    choices: [
      "A 'No. Series Code' field on the Service Request table linking to a configured No. Series record",
      "A call to NoSeriesMgt.GetNextNo() (or the No. Series codeunit) in the OnInsert trigger to fetch the next number",
      "An AutoIncrement primary key field — this is the standard number assignment mechanism in BC",
      "A NumberSequence.Next() call stored directly in the primary key field",
      "A setup table or page where the administrator configures the No. Series Code to use for Service Requests"
    ],
    correct: [0, 1, 4],
    explanation: "Standard No. Series integration requires: (1) a No. Series Code field on the document table, (2) a setup record (setup table/page) where the administrator selects the No. Series to use, and (3) a call to NoSeriesMgt.GetNextNo() (or the modern No. Series codeunit) in the OnInsert trigger to fetch and assign the next number. AutoIncrement is a simple integer sequence that bypasses the flexible No. Series system. NumberSequence.Next() is a low-level function not connected to the BC No. Series framework."
  },

  // ── AL DEVELOPMENT — OBJECT MODEL ────────────────────────────────────────
  {
    id: 134,
    text: "A developer is reviewing AL object types available in Business Central. Which TWO statements correctly describe the difference between a Codeunit and an Interface in AL?",
    type: "multiple",
    choices: [
      "A codeunit contains executable code and can be instantiated; an interface only declares procedure signatures without implementation",
      "An interface can contain both procedure declarations and default implementations; a codeunit can only contain procedure declarations",
      "Multiple codeunits can implement the same interface, enabling a calling codeunit to work with any implementation via an interface-typed variable",
      "Interfaces are only available in Business Central online (SaaS), not on-premises",
      "A codeunit declared with 'implements InterfaceName' automatically inherits all code from the interface"
    ],
    correct: [0, 2],
    explanation: "In AL: a Codeunit contains actual executable code and logic; an Interface only declares procedure signatures (contracts) without any implementation. Multiple codeunits can implement the same interface, and a variable of the interface type can hold any implementing codeunit — enabling polymorphism and dependency injection. AL interfaces have no default implementations (unlike some other languages). Interfaces are available both in SaaS and on-premises. 'implements' in AL declares that a codeunit fulfills the interface contract — it does not inherit any code."
  }
];
