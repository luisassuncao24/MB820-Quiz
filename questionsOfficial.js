// MB-820: Official Questions
// Practice questions based on MB-820 exam topics for study purposes

const questionsOfficial = [
  {
    id: 501,
    text: "A company is deploying Business Central on-premises. The company plans to use a single-tenant deployment architecture. You need to describe how the data is stored and how the Business Central Server is configured. In which two ways should you describe the single-tenant architecture? Each correct answer presents a complete solution. (Select TWO)",
    type: "multiple",
    choices: [
      "A. Each customer has their own Business Central Server.",
      "B. The application and the business data are stored in the same database.",
      "C. Multiple customers share a single Business Central Server.",
      "D. The application and business data are stored in separate databases.",
      "E. Multiple customers share multiple Business Central Server instances."
    ],
    correct: [0, 1],
    explanation: "In a single-tenant deployment, each customer has their own Business Central Server (A), and the application and business data are stored in the same database (B). Multi-tenant deployments use a shared server with separate databases per tenant."
  },
  {
    id: 502,
    text: "A company plans to deploy Business Central with the following requirements:\n1. Use the company hardware architecture to run the deployment.\n2. Use sandbox environments to develop extensions.\n3. Allow tenants to connect to Shopify by using the standard connector.\n4. Use Microsoft Power Automate to create a workflow that calls a business event.\n\nWhich requirements should use an Online deployment? (Select all that apply)",
    type: "multiple",
    choices: [
      "Requirement 1: Use the company hardware architecture to run the deployment.",
      "Requirement 2: Use sandbox environments to develop extensions.",
      "Requirement 3: Allow tenants to connect to Shopify by using the standard connector.",
      "Requirement 4: Use Microsoft Power Automate to create a workflow that calls a business event."
    ],
    correct: [1, 2, 3],
    explanation: "Requirement 1 (company hardware architecture) requires an On-premises deployment. Requirements 2, 3, and 4 require Online deployment: sandbox environments for extension development are an Online-only feature, the Shopify standard connector is only available Online, and Power Automate business event workflows require the Online environment."
  },
  {
    id: 503,
    text: "A company is examining Connect apps and Add-on apps for use with Business Central. Which of the following statements correctly match descriptions to app types? (Select all that apply)",
    type: "multiple",
    choices: [
      "Connect app — Developed by using any coding language.",
      "Connect app — Developed by using AL language in Visual Studio Code.",
      "Add-on app — Developed by using any coding language.",
      "Add-on app — Developed by using AL language in Visual Studio Code."
    ],
    correct: [0, 3],
    explanation: "Connect apps integrate with Business Central through APIs and can be developed using any coding language. Add-on apps are extensions built directly on the Business Central platform using AL language in Visual Studio Code."
  },
  {
    id: 504,
    text: "You develop a test application. You must meet the following requirements:\n- Roll back changes to a test method after run time.\n- Run an approve action on a test page named TestPageA.\n\nYou need to implement the given requirements on the test codeunit. Which two actions should you perform? (Select TWO)",
    type: "multiple",
    choices: [
      "Set the CommitBehavior attribute to Ignore.",
      "Set the ErrorBehavior attribute to Collect.",
      "Set the TestIsolation property to Function.",
      "Set the TransactionModel attribute to AutoRollBack.",
      "Configure TestPageA.Approve.Enabled().",
      "Configure TestPageA.Approve.Invoke().",
      "Configure TestPageA.Approve.Visible().",
      "Configure TestPageA.Trap()."
    ],
    correct: [3, 5],
    explanation: "To roll back changes to a test method after run time, set the TransactionModel attribute to AutoRollBack — this automatically rolls back all database changes after each test method runs. To programmatically run the Approve action on TestPageA, use TestPageA.Approve.Invoke(), which triggers the action just as a user would click it."
  },
  {
    id: 505,
    text: "You are cleaning up sandbox environments for a company. The company requires data to be cleared from the environments each time an extension is published. You need to configure the launch.json file. Which schemaUpdateMode property should you set?",
    type: "single",
    choices: [
      "ForceUpgrade",
      "ForceSync",
      "Synchronize",
      "Recreate"
    ],
    correct: [3],
    explanation: "The Recreate schemaUpdateMode drops and recreates the database schema and clears all data each time an extension is published. This meets the requirement of clearing data on every publish. ForceSync and Synchronize keep existing data, and ForceUpgrade runs upgrade codeunits."
  },
  {
    id: 506,
    text: "You need to allow debugging in an extension to view the source code. In which file should you specify the value of the allowDebugging property?",
    type: "single",
    choices: [
      "settings.json",
      "rad.json",
      "app.json",
      "launch.json"
    ],
    correct: [2],
    explanation: "The allowDebugging property is specified in the app.json file of an AL extension. Setting it to true allows other developers to debug the extension and step through its source code."
  },
  {
    id: 507,
    text: "A company uses Business Central. The company plans to use a translation file in an extension. The extension has a caption that should not be translated. You need to prevent the caption from being translated. What should you do?",
    type: "single",
    choices: [
      "Use the CaptionML property and copy the same caption for each language used.",
      "Set the GenerateLockedTranslations feature in the app.json file.",
      "Add the Locked = true parameter to the Caption.",
      "Delete the Caption property.",
      "Copy the same caption for each language in the translation file."
    ],
    correct: [2],
    explanation: "Adding Locked = true to the Caption property (e.g., Caption = 'My Caption', Locked = true) marks the caption as intentionally not translatable and excludes it from generated translation files (XLIFF). This is the correct approach to prevent a caption from being translated."
  },
  {
    id: 508,
    text: "A company plans to set up a local Business Central Development Docker container. The environment will be used for testing new project ideas. You need to ensure that the most recent Business Central artifact URL has been selected. Which command should you use?",
    type: "single",
    choices: [
      "Get-BcArtifactUrl -type sandbox -select Current",
      "Get-BcArtifactUrl -type sandbox -select Closest",
      "Get-BcArtifactUrl -type sandbox -select NextMinor",
      "Get-BcArtifactUrl -type sandbox -select NextMajor"
    ],
    correct: [0],
    explanation: "Get-BcArtifactUrl -type sandbox -select Current retrieves the most recent (current) available Business Central artifact URL. The 'Current' parameter selects the latest available version, which is suitable for testing new project ideas with the latest features."
  },
  {
    id: 509,
    text: "You are developing an app. You plan to publish the app to Microsoft AppSource. You need to assign an object range for the app. Which object range should you use?",
    type: "single",
    choices: [
      "Custom object within the range 50000 to 59999",
      "Custom object within the range 50000 to 99999",
      "Divided by countries and use a specific country within the range 100000 to 999999",
      "An object range within the range of 7000000 to 74999999 that is requested from Microsoft",
      "Free object within the standard range 1 to 49999"
    ],
    correct: [3],
    explanation: "Apps published to Microsoft AppSource must use an object ID range within 7000000 to 74999999, which is allocated by Microsoft upon request. This ensures global uniqueness across all AppSource apps. The 50000-99999 range is for per-tenant customizations, not AppSource apps."
  },
  {
    id: 510,
    text: "A company has a page named 'New Job Status' connected to a source table named Job. The company requires the following changes: (1) Filter the page to display only jobs with Open or Quote status. (2) Add the following comment for internal use: 'This page does not include completed jobs.' (3) The Item Ledger Entries action must open the selected job on the page. Which property selections correctly meet all three requirements? (Select THREE)",
    type: "multiple",
    choices: [
      "Filter open or quote: SourceTableView = sorting(Status) order(ascending)",
      "Filter open or quote: SourceTableView = where(Status = filter(Open | Quote | Planning))",
      "Filter open or quote: SourceTableView = where(Status = filter(Open | Quote))",
      "Internal comment: ToolTip = 'This page does not include completed jobs'",
      "Internal comment: Description = 'This page does not include completed jobs'",
      "Action opens selected job: RunPageView = \"Job No.\" = FIELD(\"No.\")",
      "Action opens selected job: RunPageLink = \"Job No.\" = FIELD(\"No.\")"
    ],
    correct: [2, 4, 6],
    explanation: "SourceTableView = where(Status = filter(Open | Quote)) filters for only Open and Quote status (not Planning). The Description property stores internal-use comments not visible to end users (ToolTip is shown to users). RunPageLink passes the current record's key to the linked page, opening the selected job."
  },
  {
    id: 511,
    text: "A company plans to meet new regulatory requirements. The regulator has issued new tax tiers. You need to update the base application table by using a table extension. Which table field property can you change?",
    type: "single",
    choices: [
      "CalcFormula",
      "DecimalPlaces",
      "BlankZero",
      "AutoFormatType"
    ],
    correct: [2],
    explanation: "In a table extension, BlankZero is one of the properties that can be changed on an existing field. CalcFormula, DecimalPlaces, and AutoFormatType cannot be modified through a table extension — only a limited set of properties are permitted to be overridden in extensions."
  },
  {
    id: 512,
    text: "You have an XMLport for an items list. You need to complete the code segment to expose item data using the correct node types. The outer container links to the Item table, the 'No.' field is exposed as an XML attribute, and the 'Description' field is exposed as an XML child element. Which three node types should you use in order?",
    type: "multiple",
    choices: [
      "textelement for the outer Items container (links to the Item table)",
      "tableelement for the outer Items container (links to the Item table)",
      "fieldattribute for declaring the 'No.' field as an XML attribute",
      "fieldelement for declaring the 'Description' field as an XML child element",
      "textelement for declaring field values",
      "tableelement for declaring individual fields"
    ],
    correct: [1, 2, 3],
    explanation: "In an XMLport, tableelement links a node to a table (outer container for Item records). fieldattribute exposes a field value as an XML attribute on the element (e.g., Item.\"No.\"). fieldelement exposes a field value as a nested XML child element (e.g., Item.Description). These are the correct node types for the described XMLport structure."
  },
  {
    id: 513,
    text: "A company has the following custom permission set:\n\npermissionset 50000 \"Sales Person Permission Set\"\n{\n    Assignable = false;\n    Caption = 'Sales Person Permission Set';\n    Permissions = tabledata Customer = RIM, ...\n}\n\nThe company wants this permission set to be visible and assignable on the Permission Sets page. What change is required?",
    type: "single",
    choices: [
      "Change Assignable = false to Assignable = true in the permissionset object",
      "Add the permission set to a user group directly via the UI",
      "Create a new permission set with a different object ID",
      "Import an XML permission set file via the Permission Sets page"
    ],
    correct: [0],
    explanation: "The Assignable property controls whether a permission set appears on the Permission Sets page and can be assigned to users. Changing Assignable = false to Assignable = true makes the permission set visible and assignable. With Assignable = false, the permission set is typically used as a base set to include in other permission sets, not assigned directly."
  },
  {
    id: 514,
    text: "You create a codeunit that works with a table named Boxes. You plan to filter the records and then modify them. You get an error that you do not have permission to work with the Boxes table. You need to assign Indirect permissions for the Boxes table to the codeunit. Which code correctly assigns the permission?",
    type: "single",
    choices: [
      "Permissions = TableData \"Boxes\" = rm",
      "Permissions = Table \"Boxes\" = RIMD",
      "Permissions = TableData \"Boxes\" = RIMD",
      "Permissions = Table \"Boxes\" = rm"
    ],
    correct: [0],
    explanation: "Indirect permissions are denoted by lowercase letters. TableData refers to the data in the table (as opposed to Table which refers to the object itself). To grant indirect read (r) and modify (m) permissions on the Boxes table data, use: Permissions = TableData \"Boxes\" = rm. This allows the codeunit to filter and modify records without requiring users to have direct permissions."
  },
  {
    id: 515,
    text: "You plan to write unit test functions to test newly developed functionality in an app. You must create a test codeunit to write the functions. You need to select the property to use for the test codeunit. Which property should you use to ensure that the requirements are fulfilled?",
    type: "single",
    choices: [
      "SubType",
      "Access",
      "Description"
    ],
    correct: [0],
    explanation: "The SubType property on a codeunit is used to define it as a test codeunit. By setting SubType = Test, the codeunit becomes a test codeunit where you can write test functions using the [Test] attribute. This enables the AL test runner to discover and execute the functions."
  },
  {
    id: 516,
    text: "A company owns and operates hotels, restaurants, and stores. The company needs a new field named Approver in the Item table. The field must let users select one of these approvers: Hotel manager, Restaurant manager, Store manager, Purchasing manager. You need to create this Approver field using an AL extension. Which is the correct first action?",
    type: "single",
    choices: [
      "Create an enum type with the four approver values (Hotel manager, Restaurant manager, Store manager, Purchasing manager)",
      "Create a table extension on the Item table that adds the Approver field",
      "Create a page extension to display the Approver field on the Item card",
      "Create a permission set that grants access to the new field"
    ],
    correct: [0],
    explanation: "The correct order of actions is: (1) Create an enum type with the four approver option values, (2) Create a table extension on the Item table that adds the Approver field using that enum type, (3) Create a page extension to display the Approver field in the UI. The enum must be defined first because the table extension field will reference it."
  },
  {
    id: 517,
    text: "A company uses Business Central. A worker reports that each time they generate a daily summary report, they get a permission error. The report uses a local procedure GetLogisticsCharge() that reads from the 'Logistics Setup' table (line 15+). You need to resolve the issue. Which InherentPermissions attributes correctly resolve the permission error? (Select all that apply)",
    type: "multiple",
    choices: [
      "[InherentPermissions(PermissionObjectType::Table, Database::\"Logistics Setup\", 'X', InherentPermissionsScope::Both)] above line 15",
      "[InherentPermissions(PermissionObjectType::TableData, Database::\"Logistics Setup\", 'R', InherentPermissionsScope::Permissions)] above line 15",
      "[InherentPermissions(PermissionObjectType::TableData, Database::\"Logistics Setup\", 'r', InherentPermissionsScope::Both)] above line 15",
      "[InherentPermissions(PermissionObjectType::Table, Database::\"Logistics Setup\", 'X', InherentPermissionsScope::Permissions)] above line 15"
    ],
    correct: [1, 2],
    explanation: "The procedure reads data from the Logistics Setup table, so it needs TableData permissions (not Table). Option B (TableData, 'R', Permissions scope) grants direct read via permissions. Option C (TableData, 'r', Both scope) grants indirect read via both permissions and entitlements. Both correctly grant the required read access to the table data. Options A and D use Table (the object, not data) with 'X' (execute), which is incorrect for reading records."
  },
  {
    id: 518,
    text: "You are exporting data from Business Central. You must export the data in a non-fixed length and width in CSV format. You need to generate an XMLport to export the data in the required format. Which Format property value should you use?",
    type: "single",
    choices: [
      "XML",
      "VariableText",
      "FixedText"
    ],
    correct: [1],
    explanation: "VariableText format is used for CSV and other delimiter-separated text formats where field lengths are not fixed. Fields are separated by a delimiter (comma by default). XML produces XML output, and FixedText produces fixed-width (column-aligned) text files."
  },
  {
    id: 519,
    text: "You plan to create a table to hold client data with these requirements: (1) Lookups into other records must be established. (2) Validate if a record exists in a destination record. Which table field properties should you use for each requirement? (Select TWO — one for each requirement)",
    type: "multiple",
    choices: [
      "DataClassification — for establishing lookups into other records",
      "ExternalAccess — for establishing lookups into other records",
      "TableRelation — for establishing lookups into other records",
      "ValidateTableRelation — for validating if a record exists in the related table",
      "CalcFormula — for validating if a record exists",
      "AccessByPermission — for validating if a record exists"
    ],
    correct: [2, 3],
    explanation: "TableRelation establishes a relationship to another table, enabling the lookup button and defining which table/field to look up. ValidateTableRelation (when set to true, which is the default) validates that the value entered in the field exists as a record in the related table, satisfying the requirement to validate record existence."
  },
  {
    id: 520,
    text: "A company has a task that is performed infrequently. Users often need to look up the procedure to complete the task. The company requires a wizard that leads users through a sequence of steps to complete the task. You need to create the page to enable the wizard creation. Which page type should you use?",
    type: "single",
    choices: [
      "NavigatePage",
      "Card",
      "RoleCenter",
      "List"
    ],
    correct: [0],
    explanation: "NavigatePage is the page type used to create step-by-step wizards in Business Central. It provides a sequential experience with Back and Next navigation buttons, guiding users through a defined series of steps. This is ideal for infrequently performed tasks where users need structured guidance."
  },
  {
    id: 521,
    text: "A company creates a Business Central app and a table named MyTable to store records when sales orders are posted. Users report: permission errors related to MyTable, inability to post sales orders, and inability to access the list page for MyTable. You need to resolve the user issues without creating new permission sets, using the principle of least privilege. Solution: In the MyTable object, add the property InherentPermissions = RI. Does the solution meet the goal?",
    type: "single",
    choices: [
      "Yes",
      "No"
    ],
    correct: [0],
    explanation: "Yes, this meets the goal. InherentPermissions = RI on the MyTable object grants inherent Read (R) and Insert (I) permissions through the code execution context of the app. Read allows users to access the list page, and Insert allows the posting process to insert records into MyTable. No new permission sets are created, and only the minimum required permissions (R and I) are granted, satisfying the principle of least privilege."
  },
  {
    id: 522,
    text: "A company creates a Business Central app and a table named MyTable to store records when sales orders are posted. Users report: permission errors related to MyTable, inability to post sales orders, and inability to access the list page for MyTable. You need to resolve the user issues without creating new permission sets, using the principle of least privilege. Solution: Assign a SUPER permission set. Does the solution meet the goal?",
    type: "single",
    choices: [
      "Yes",
      "No"
    ],
    correct: [1],
    explanation: "No, this does not meet the goal. Assigning the SUPER permission set grants all permissions to all objects, which violates the principle of least privilege. The requirement explicitly states that the minimum necessary permissions should be used. Additionally, assigning SUPER is not a targeted solution specific to the MyTable access issue."
  },
  {
    id: 523,
    text: "A company creates a Business Central app and a table named MyTable to store records when sales orders are posted. Users report: permission errors related to MyTable, inability to post sales orders, and inability to access the list page for MyTable. You need to resolve the user issues without creating new permission sets, using the principle of least privilege. Solution: Decorate the event subscriber used for inserting data in MyTable with [InherentPermissions(PermissionObjectType::TableData, Database::MyTable, 'R')]. Does the solution meet the goal?",
    type: "single",
    choices: [
      "Yes",
      "No"
    ],
    correct: [1],
    explanation: "No, this does not meet the goal. The attribute only grants Read ('R') permission on MyTable to the event subscriber, but Insert permission is also required to post records (insert into MyTable). Without Insert permission, users will still get permission errors when posting sales orders. The correct permission should include at least 'RI' (Read and Insert)."
  },
  {
    id: 524,
    text: "A company is implementing Business Central. TableA Header and TableA Line are document tables; TableB Header and TableB Line are document history tables. The required dataset must: (1) Include ALL records from TableA Header even if no matching record exists in TableA Line. (2) Include records from TableB Header ONLY where a match is found in TableB Line. Which SqlJoinType should you use for each requirement? (Select TWO — one per requirement)",
    type: "multiple",
    choices: [
      "CrossJoin for TableA Header (all records, even with no match in TableA Line)",
      "InnerJoin for TableA Header (all records, even with no match in TableA Line)",
      "LeftOuterJoin for TableA Header (all records, even with no match in TableA Line)",
      "RightOuterJoin for TableA Header (all records, even with no match in TableA Line)",
      "CrossJoin for TableB Header (only matched records from TableB Line)",
      "InnerJoin for TableB Header (only matched records from TableB Line)",
      "LeftOuterJoin for TableB Header (only matched records from TableB Line)",
      "RightOuterJoin for TableB Header (only matched records from TableB Line)"
    ],
    correct: [2, 5],
    explanation: "LeftOuterJoin for TableA Header ensures all records from the left (parent) table are returned even when no matching child record exists — producing NULLs for the unmatched TableA Line columns. InnerJoin for TableB Header returns only rows where a match exists in both TableB Header and TableB Line, which meets the requirement to include only matched records."
  },
  {
    id: 525,
    text: "You create a Business Central report. You need to insert values on the Request page to be saved for the next time the report is run. What should you do?",
    type: "single",
    choices: [
      "Set the TransactionType property to Update.",
      "Declare a 'SaveValues' variable and assign it to true on the OnOpenPage() trigger.",
      "Set the UseRequestPage property to true.",
      "Set the SaveValues property to true."
    ],
    correct: [3],
    explanation: "Setting the SaveValues property to true on the Request page causes all filter and option values entered by the user to be automatically saved and restored the next time the report is run. This is done as a property on the requestpage object or the report itself, not as a variable."
  },
  {
    id: 526,
    text: "You have Vendor and Item tables with these records:\n- Vendors: V0001=Contoso, V0002=Fabrikam, V0003=Relecloud\n- Items: 1000 Table→V0001, 1001 Chair→V0002, 1002 Shelf→V0001, 1003 Sofa→V0002, 1004 Bed→V0004\n\nRequired result: V0001 Contoso 1000 Table, V0001 Contoso 1002 Shelf, V0002 Fabrikam 1001 Chair, V0002 Fabrikam 1003 Sofa\n\n(V0003 Relecloud with no items is excluded; 1004 Bed referencing non-existent V0004 is excluded). Which JOIN type should you use to produce this result?",
    type: "single",
    choices: [
      "InnerJoin — only matched records appear in both Vendor and Item tables",
      "LeftOuterJoin — all vendors appear, even those without items",
      "RightOuterJoin — all items appear, even those referencing non-existent vendors",
      "CrossJoin — all possible combinations of vendors and items"
    ],
    correct: [0],
    explanation: "InnerJoin returns only rows where a matching record exists in both tables. V0003 Relecloud is excluded (no matching items), and 1004 Bed is excluded (references non-existent vendor V0004). This produces exactly the required result set with only vendors that have items and items that have valid vendors."
  },
  {
    id: 527,
    text: "You are developing an XMLport to export data from the parent Item table and a related child 'Item Unit of Measure' table. You need to: (1) Link the child table to its parent, and (2) Display a confirmation message after the XMLport finishes. Which XMLport triggers should you use for each requirement? (Select TWO)",
    type: "multiple",
    choices: [
      "OnPreXmlItem — to link the child 'Item Unit of Measure' table to its parent Item table",
      "OnAfterXmlItem — to link the child 'Item Unit of Measure' table to its parent Item table",
      "OnPostXmlPort — to display a confirmation message after the XMLport finishes",
      "OnPreXmlPort — to display a confirmation message after the XMLport finishes",
      "OnInitXmlPort — to display a confirmation message after the XMLport finishes"
    ],
    correct: [0, 2],
    explanation: "OnPreXmlItem fires before processing a data item, making it the correct trigger to set up the DataItemLink between the child 'Item Unit of Measure' data item and its parent Item data item. OnPostXmlPort fires after the entire XMLport has finished processing, making it the correct place to display a post-completion confirmation message."
  },
  {
    id: 528,
    text: "You have a per-tenant extension with interface 'IDiscount Calculation' that defines GetLine(var Line: Variant) and GetDiscount(): Decimal. Codeunit 50108 'Discount Mgmt.' implements this interface. The codeunit uses VariantLine as the parameter name in GetLine, and has an additional DiscountIsValid(DocumentDate: Date): Boolean procedure not in the interface. Which statements are true? (Select all that apply)",
    type: "multiple",
    choices: [
      "Codeunit 'Discount Mgmt.' compiles successfully.",
      "VariantLine in GetLine must be changed to Line and DiscountAmount removed for the codeunit to compile.",
      "The DiscountIsValid method must be defined in the interface for the code to compile."
    ],
    correct: [0],
    explanation: "Statement A is true (Yes): The codeunit compiles successfully because it implements all required interface procedures with correct signatures — parameter names do not need to match the interface (only types matter). Statement B is false (No): VariantLine does not need to be renamed to Line; parameter names are not part of the interface contract. Statement C is false (No): Implementing codeunits can have additional procedures not defined in the interface; DiscountIsValid does not need to be in the interface."
  },
  {
    id: 529,
    text: "You create a query that contains a procedure to display top customers. The procedure calls TopCustomerOverview.SetFilter(Sales_LCY, '>10000') and then enters a while loop using TopCustomerOverview.Read(). The procedure breaks at runtime. Which fix correctly resolves the runtime error?",
    type: "single",
    choices: [
      "Enclose the Read() loop body in BEGIN...END",
      "Add TopCustomerOverview.Open() before the SetFilter call",
      "Add TopCustomerOverview.Open() after the SetFilter call and before the while loop",
      "Replace SetFilter with SetRange"
    ],
    correct: [2],
    explanation: "A Query object must be opened with Open() before Read() can be called in the loop. The correct order is: (1) SetFilter — applies filters to the query, (2) Open() — executes the query with the applied filters, (3) while Read() — iterates through results. Adding Open() after SetFilter and before the while loop fixes the runtime error. Opening before SetFilter would ignore the filter."
  },
  {
    id: 530,
    text: "A company has two requirements for customizing per-tenant extension reports: (1) Child data items must not be displayed on the request page for some master-detail reports. (2) Selecting key filter fields takes users too much time — the customization must decrease the amount of time to select the fields. Which two properties should you configure to meet these requirements? (Select TWO — one per requirement)",
    type: "multiple",
    choices: [
      "DataItemLinkReference — to prevent child data items from displaying on the request page",
      "SuppressOutput — to prevent child data items from displaying on the request page",
      "RequestFilterFields — to decrease the time to select key filter fields",
      "DataItemLink — to decrease the time to select key filter fields",
      "SaveValues — to decrease the time to select key filter fields"
    ],
    correct: [0, 2],
    explanation: "DataItemLinkReference specifies the parent data item for a linked child data item. When set, the child data item's filters are managed through the link and the child no longer appears as a separate filterable entity on the request page. RequestFilterFields pre-defines which specific fields appear as filter options on the request page, allowing users to quickly apply the most relevant filters without searching through all fields."
  },
  {
    id: 531,
    text: "You are writing a procedure to block all inventory items with numbers that do not start with the letter S. The procedure uses three expressions to: clear existing filters, filter for inventory items by type, and filter item numbers not starting with 'S'. Which three expressions correctly complete the procedure? (Select THREE)",
    type: "multiple",
    choices: [
      "Item.Reset() — clears all existing filters before applying new ones",
      "Item.Init() — clears all existing filters before applying new ones",
      "Item.SetRange(Type, Item.Type::Inventory) — filters for inventory-type items",
      "Item.SetFilter(Type, Item.Type::Inventory) — filters for inventory-type items",
      "Item.SetFilter(\"No.\", '<>S*') — filters items whose number does not start with S",
      "Item.SetRange(\"No.\", '<>S*') — filters items whose number does not start with S"
    ],
    correct: [0, 2, 4],
    explanation: "Item.Reset() clears all existing filters and sort keys before applying new ones, ensuring a clean filter state. Item.SetRange(Type, Item.Type::Inventory) filters for items with Type = Inventory (SetRange is used for exact/range matches on enum values). Item.SetFilter(\"No.\", '<>S*') uses a wildcard pattern filter to exclude items whose number starts with 'S' — SetFilter supports pattern expressions while SetRange does not."
  },
  {
    id: 532,
    text: "A company has a Business Central online environment. You need to create an HTTP GET request that connects to an external REST service. Which solution should you use?",
    type: "single",
    choices: [
      "A. HttpContent data type variable",
      "B. Codeunit 1299 \"Web Request Helper\"",
      "C. Codeunit 5459 \"JSON Management\"",
      "D. Codeunit 1297 \"Http Web Request Mgt.\"",
      "E. HttpClient data type variable"
    ],
    correct: [4],
    explanation: "HttpClient is the modern AL data type for making HTTP requests, including GET requests to external REST services in Business Central online. The older Codeunit 1297 and 1299 approaches are legacy/deprecated for online environments. HttpContent is used for request/response body content, not for initiating HTTP requests."
  },
  {
    id: 533,
    text: "You need to create the configuration table and page for the non-conformity functionality. Which table configurations should you use? (Select THREE — one per requirement)\n\n1. Design pattern for the setup table\n2. Data type of the primary key field\n3. Property required to prevent users from adding records",
    type: "multiple",
    choices: [
      "Singleton — design pattern for the setup table",
      "No. Series — design pattern for the setup table",
      "Adapter — design pattern for the setup table",
      "BigInteger — data type of the primary key field",
      "Code — data type of the primary key field",
      "Integer — data type of the primary key field",
      "InsertAllowed = false — property to prevent users from adding records",
      "InitValue — property to prevent users from adding records",
      "UnBound — property to prevent users from adding records"
    ],
    correct: [0, 4, 6],
    explanation: "A setup/configuration table uses the Singleton design pattern so only one record can exist. The primary key of a singleton setup table uses Code data type (typically a single Code field with a constant value). The InsertAllowed property set to false prevents users from manually adding new records to the table, enforcing the singleton constraint."
  },
  {
    id: 534,
    text: "You are creating a view for a Business Central app. The view requires a custom layout that displays only customer records with a balance greater than 500 in local currency. You need to configure the view to specify that it has a custom layout. Which property combination should you use?",
    type: "single",
    choices: [
      "A. SharedLayout = false; Filters = where (Balance = filter (> 500), \"Currency Code\" = filter ('LCY'));",
      "B. SharedLayout = true; Filters = where (Balance = filter (> 500), \"Currency Code\" = filter (LCY'));",
      "C. SharedLayout = false; Filters = where (\"Balance (LCY)\" = filter (> 500));",
      "D. SharedLayout = true; Filters = where (\"Balance (LCY)\" = filter (> 500));"
    ],
    correct: [2],
    explanation: "Setting SharedLayout = false specifies that the view has its own custom layout, independent of other views. The correct field for filtering customers by local currency balance is 'Balance (LCY)', not 'Balance' with a currency code filter. Option C correctly uses SharedLayout = false for a custom layout and filters on the 'Balance (LCY)' field."
  },
  {
    id: 535,
    text: "A company uses Business Central. You plan to help users through the installation process by using Assisted Setup. You need to create a wizard page. Which two actions should you perform? Each correct answer presents a complete solution. (Select TWO)",
    type: "multiple",
    choices: [
      "A. Set the PageType property to NavigatePage.",
      "B. For each step needed in the guide, add a group() control to the root-level of the layout > area(Content) control.",
      "C. Set the PageType property to Worksheet.",
      "D. For each step needed in the guide, add a repeater() control to the root-level of the layout > area(Content) control."
    ],
    correct: [0, 1],
    explanation: "To create a wizard page in Business Central, set the PageType property to NavigatePage — this is the page type specifically designed for step-by-step wizard/guide interfaces. For each step in the guide, add a group() control directly under area(Content); each group represents one step that can be shown or hidden based on the current step variable. A repeater() control is used for list views, not wizard steps."
  },
  {
    id: 536,
    text: "A company uses four objects in development in Business Central. The company plans to make changes to the objects. You need to identify the application layer for each object in Visual Studio Code.\n\nWhich application layer does each object belong to? (Match each object to its layer)\n\nObjects:\n1. Activities Cue table\n2. Extension Management codeunit\n3. Business Unit Card page\n4. Report Selection page",
    type: "multiple",
    choices: [
      "Activities Cue table — System layer",
      "Activities Cue table — Base Application layer",
      "Extension Management codeunit — System layer",
      "Extension Management codeunit — Base Application layer",
      "Business Unit Card page — System layer",
      "Business Unit Card page — Base Application layer",
      "Report Selection page — System layer",
      "Report Selection page — Base Application layer"
    ],
    correct: [0, 2, 4, 7],
    explanation: "In Business Central, application objects are organized into layers: System (platform-level objects shipped by Microsoft as part of the runtime) and Base Application (standard business functionality built on top of the System layer). According to the exam answer key: Activities Cue table belongs to the System layer; Extension Management codeunit belongs to the System layer; Business Unit Card page belongs to the System layer; Report Selection page belongs to the Base Application layer."
  },
  {
    id: 537,
    text: "You are creating an app for Business Central. You plan to specify the following parameters and properties of the server and app:\n\n1. Startup object type and object ID\n2. Runtime\n3. Dependencies\n\nYou need to configure the JSON file for the specified parameters and properties. Which JSON files should you configure for each purpose?",
    type: "multiple",
    choices: [
      "Startup object type and object ID — configure in launch.json",
      "Startup object type and object ID — configure in app.json",
      "Runtime — configure in launch.json",
      "Runtime — configure in app.json",
      "Dependencies — configure in launch.json",
      "Dependencies — configure in app.json"
    ],
    correct: [0, 3, 5],
    explanation: "launch.json contains server connection and startup configuration, including startupObjectType and startupObjectId which determine which object opens after publishing. app.json contains the extension manifest including the 'runtime' property (specifying the minimum AL runtime version) and 'dependencies' (listing other extensions this app depends on)."
  },
  {
    id: 538,
    text: "You have an XMLport that exports items from a database to an XML file. You need to change the export format from XML to CSV. What should you do?",
    type: "single",
    choices: [
      "A. Change the Direction property to Both.",
      "B. Change the FormatEvaluate property to Legacy.",
      "C. Change the XmlVersionNo property to 1.1.",
      "D. Fill the FileName property with the Items.csv value.",
      "E. Change the Format property to VariableText."
    ],
    correct: [4],
    explanation: "The Format property of an XMLport controls the file format. Setting it to VariableText changes the output from XML to a text-based delimited format (CSV). Simply changing the file name extension (option D) does not change the actual format of the output. The Direction property controls import/export direction, not the file format."
  },
  {
    id: 539,
    text: "A company uses a Vendor - List report from the Base Application. The company has new requirements that cannot be met by extending the Vendor - List report. You create a new report named My Customized Vendor - List. You need to replace the Vendor - List report with My Customized Vendor - List.\n\nHow should you complete the code segment? Select the correct options for each blank:\n\ncodeunit 50100 \"Substitute Report\"\n{\n  [EventSubscriber(ObjectType::Codeunit, Codeunit::[BLANK1], '[BLANK2]', '', false, false)]\n  local procedure OnSubstituteReport(ReportId: Integer; var NewReportId: Integer)\n  begin\n    if ReportId = Report::[BLANK3] then\n      NewReportId := Report::[BLANK4];\n  end;\n}\n\n(Select FOUR — one per blank)",
    type: "multiple",
    choices: [
      "BLANK1: Report Distribution Management",
      "BLANK1: ReportManagement",
      "BLANK1: Report Selection Mgt.",
      "BLANK2: OnAfterSubstituteReport",
      "BLANK2: OnSelectReportLayout",
      "BLANK2: OnAfterDocumentReady",
      "BLANK3: \"My Customized Vendor - List\"",
      "BLANK3: \"Vendor - List\"",
      "BLANK4: \"My Customized Vendor - List\"",
      "BLANK4: \"Vendor - List\""
    ],
    correct: [1, 3, 7, 8],
    explanation: "To substitute one report for another, subscribe to the OnAfterSubstituteReport event on the ReportManagement codeunit. In the handler, check if ReportId equals the original report (Vendor - List) and if so, set NewReportId to the replacement report (My Customized Vendor - List). This event fires whenever Business Central is about to run a report, allowing extensions to redirect to a different report."
  },
  {
    id: 540,
    text: "You create a 'Contoso Post' procedure to send an HTTP POST request in JSON format. The procedure does not work as expected. You need to find and fix all errors in HTTP class usage.\n\nFor each statement, select Yes if the statement is true, otherwise select No:\n\n1. Replace line 16 (Content.ReadAs(ResponseText)) with ResponseText := ResponseMessage\n2. In line 13, change the 'text/plain' value to 'application/json'\n3. Replace line 14 (Headers.Add('Authorization', 'Bearer ' + Token)) with Client.DefaultRequestHeaders.Add('Authorization', 'Bearer ' + Token)\n4. In line 10, replace WriteFrom with ReadAs\n\n(Select the statements that are TRUE / should be answered YES)",
    type: "multiple",
    choices: [
      "Statement 1 is YES: Replace line 16 with ResponseText := ResponseMessage",
      "Statement 2 is YES: In line 13, change 'text/plain' to 'application/json'",
      "Statement 3 is YES: Replace line 14 with Client.DefaultRequestHeaders.Add('Authorization', 'Bearer ' + Token)",
      "Statement 4 is YES: In line 10, replace WriteFrom with ReadAs"
    ],
    correct: [1],
    explanation: "Only Statement 2 is correct (YES): The Content-Type header must be 'application/json' when sending JSON data, not 'text/plain'. Statement 1 is NO — ResponseMessage is an HttpResponseMessage object, not text; the fix should be ResponseMessage.Content.ReadAs(ResponseText). Statement 3 is NO — the Authorization header is correctly placed via Content.GetHeaders in this context. Statement 4 is NO — WriteFrom is correct for writing the request body text into the HttpContent object; ReadAs is used for reading response content."
  },
  {
    id: 541,
    text: "You must simulate the user interaction of selecting a posting option. The options must include:\n- Ship\n- Invoice\n- Ship & Invoice\n\nYou need to create a test codeunit to run the test. What should you use?",
    type: "single",
    choices: [
      "A. Normal attribute",
      "B. Handler method",
      "C. Test attribute"
    ],
    correct: [1],
    explanation: "A Handler method (using attributes like [ConfirmHandler], [MessageHandler], [StrMenuHandler], etc.) is used in test codeunits to simulate user interactions such as selecting options from a dialog or menu. For posting options like Ship, Invoice, and Ship & Invoice presented via a StrMenu dialog, a StrMenuHandler is required. The Test attribute marks a function as a test function, and Normal attribute marks a regular helper function."
  },
  {
    id: 542,
    text: "A company plans to customize its per-tenant extension reports. The company has the following requirements:\n\n1. Child data items must not have the ability to be filtered on the request page for some master-detail reports.\n2. Selecting key filter fields takes users too much time — the customization must decrease the amount of time to select the fields for all users.\n\nYou need to optimize the report request page. Which action should you configure for each requirement? (Select TWO — one per requirement)",
    type: "multiple",
    choices: [
      "Requirement 1: Set the PrintOnlyIfDetail property to true",
      "Requirement 1: Set the UseRequestPage property to true",
      "Requirement 1: Set the DataItemTableView sorting property",
      "Requirement 1: Set the DataItemLinkReference property to the parent data item",
      "Requirement 2: Set the SaveValues property to true",
      "Requirement 2: Specify the RequestFilterFields property",
      "Requirement 2: Specify the request page options",
      "Requirement 2: Set the UseRequestPageFieldsHeading property"
    ],
    correct: [3, 5],
    explanation: "Setting the DataItemLinkReference property on a child data item to its parent data item establishes the link between parent and child — this causes the child data item's filter row to be hidden from the request page, preventing users from filtering child records independently. Specifying the RequestFilterFields property on a data item pre-defines exactly which fields appear as filter options on the request page, reducing the time users spend searching for relevant filter fields."
  },
  {
    id: 543,
    text: "A company uses Azure Application Insights for Business Central online in its production environment. A user observes that some job queues go into the failed state and require manual intervention. You need to analyze job queue lifecycle telemetry.\n\nHow should you complete the KQL code segment? Select the correct options for each blank:\n\ntraces\n| [BLANK1] 100\n| where customDimensions.eventId == 'YOUREVENTID'\n| [BLANK2]\n  timestamp,\n  jobQueueObjectId = customDimensions.alJobQueueObjectId,\n  jobQueueObjectType = customDimensions.alJobQueueObjectType,\n  jobQueueExecutionNumberOfAttemptsToRun = customDimensions.alJobQueueNumberOfAttemptsToRun\n\n(Select TWO — one per blank)",
    type: "multiple",
    choices: [
      "BLANK1: take",
      "BLANK1: top",
      "BLANK1: project",
      "BLANK1: extend",
      "BLANK2: take",
      "BLANK2: top",
      "BLANK2: project",
      "BLANK2: extend"
    ],
    correct: [0, 6],
    explanation: "In Kusto Query Language (KQL), 'take N' returns N arbitrary rows from the result set — used here to limit results to 100 rows. 'project' selects and renames specific columns from the result, which is used here to extract the relevant job queue fields from customDimensions. 'top' requires an order-by expression, and 'extend' adds calculated columns without removing existing ones."
  },
  {
    id: 544,
    text: "You are customizing Business Central by using Visual Studio Code. You create a project that will extend Business Central. For testing purposes, you plan to add the following changes to the files:\n- Specify that page 27 must be opened after publishing.\n- Enable debugging.\n- Disable the capability to download the source code.\n\nYou need to add the configurations to the JSON files. Which two configurations should you add? Each correct answer presents a complete solution. (Select TWO)",
    type: "multiple",
    choices: [
      "A. Set \"startupObjectId\": 27 on launch.json.",
      "B. In the \"resourceExposurePolicy\" tag, set \"allowDebugging\": true and \"allowDownloadingSource\": false on launch.json.",
      "C. Set \"startupObjectId\": 27 on app.json.",
      "D. In the \"resourceExposurePolicy\" tag, set \"allowDebugging\": true and \"allowDownloadingSource\": true on app.json.",
      "E. In the \"resourceExposurePolicy\" tag, set \"allowDebugging\": true and \"allowDownloadingSource\": false on app.json."
    ],
    correct: [0, 4],
    explanation: "startupObjectId is a property in launch.json that specifies which object (by ID) to open after publishing the extension — setting it to 27 opens page 27. The resourceExposurePolicy in app.json controls debugging and source access permissions for the extension: allowDebugging: true enables debugging, and allowDownloadingSource: false disables source code downloads. Both settings belong in their respective files (launch.json for startup, app.json for resource exposure policy)."
  },
  {
    id: 545,
    text: "A company plans to change a field on the Resource Card page in a Base Application. You need to hide the field 'Unit Price' from the Resource Card page. Which code snippet should you use?",
    type: "single",
    choices: [
      "A. addlast(\"Unit Price\") { Visible = false; }",
      "B. modify(\"Unit Price\") { Enabled = false; }",
      "C. addlast(\"Unit Price\") { Enabled = false; }",
      "D. modify(\"Unit Price\") { Visible = false; }"
    ],
    correct: [3],
    explanation: "To hide an existing field from a page in the Base Application, use modify() to reference the existing field and set its Visible property to false. addlast() is used to add new fields to a page, not modify existing ones. Enabled = false makes a field non-interactive but still visible, whereas Visible = false completely hides the field from the page."
  },
  {
    id: 546,
    text: "A company uses Business Central. The company is generating a detailed custom report. A user observes that the generated report dataset contains more Delivery Line records than expected for one specific Delivery Header. You need to generate a report that contains the accurate number of records.\n\nFor each of the following statements, select Yes if the statement is true, otherwise select No:\n\n1. Configure the DataItemTableView property of the Delivery Header data item.\n2. Configure the RequestFilterFields property of both data items.\n3. Configure the DataItemLink property of the Delivery Line data item.\n\n(Select the statements that are TRUE / should be answered YES)",
    type: "multiple",
    choices: [
      "Statement 1 is YES: Configure the DataItemTableView property of the Delivery Header data item",
      "Statement 2 is YES: Configure the RequestFilterFields property of both data items",
      "Statement 3 is YES: Configure the DataItemLink property of the Delivery Line data item"
    ],
    correct: [2],
    explanation: "Only Statement 3 is correct (YES): The DataItemLink property on the child Delivery Line data item must be configured to link it to the parent Delivery Header data item (e.g., DataItemLink = \"Document No.\" = field(\"No.\")). Without this link, the child data item returns all records regardless of the parent, causing more records than expected. Statement 1 is NO — DataItemTableView applies a static filter/sort to the data item but does not establish the parent-child relationship. Statement 2 is NO — RequestFilterFields only controls which filter fields appear on the request page."
  },
  {
    id: 547,
    text: "You create a page with the PageType property set to RoleCenter. You navigate through the different sections of the page. You need to add functionalities to the page. What should you do?",
    type: "single",
    choices: [
      "A. Define actions in the area(reporting) before actions in the area(creation).",
      "B. Add an Activity page to display data in a graphical way.",
      "C. Define the navigation bar in the area(embedding).",
      "D. Add a source table on the Role Center page."
    ],
    correct: [2],
    explanation: "On a RoleCenter page, the navigation bar (which contains navigation links and actions for the role) is defined in the area(embedding) section. Role Center pages do not have a source table. An Activity page (type = CardPart with cues) displays counts and KPIs, not graphical data (charts use Chart Parts). The area(embedding) is the correct place for the navigation bar on a RoleCenter."
  },
  {
    id: 548,
    text: "Note: This question is part of a series.\n\nA company plans to optimize its permission sets.\n\nPermission Set A: tabledata Job = RIMD\nPermission Set B: tabledata Job = IMD\n\nYou need to provide the following implementation for a third permission set:\n- Create a new Permission Set C that is a composite of Permission Set A and Permission Set B.\n- Assign Permission Set C to a user.\n- Ensure that the user has only read access to the Job table.\n\nSolution: Set the IncludedPermissionSets property to Permission Set A and the ExcludedPermissionSets property to Permission Set B.\n\nDoes the solution meet the goal?",
    type: "single",
    choices: [
      "A. Yes",
      "B. No"
    ],
    correct: [0],
    explanation: "Yes, this solution meets the goal. Permission Set A has RIMD (Read, Insert, Modify, Delete) on the Job table. Permission Set B has IMD (Insert, Modify, Delete). By including A and excluding B: the composite set starts with RIMD (from A) and then removes the permissions that are in B (IMD). The result is RIMD minus IMD = R (Read only). The user will have only read access to the Job table."
  },
  {
    id: 549,
    text: "Note: This question is part of a series.\n\nA company plans to optimize its permission sets.\n\nPermission Set A: tabledata Job = RIMD\nPermission Set B: tabledata Job = IMD\n\nYou need to provide the following implementation for a third permission set:\n- Create a new Permission Set C that is a composite of Permission Set A and Permission Set B.\n- Assign Permission Set C to a user.\n- Ensure that the user has only read access to the Job table.\n\nSolution: Set the ExcludedPermissionSets property to Permission Set B.\n\nDoes the solution meet the goal?",
    type: "single",
    choices: [
      "A. Yes",
      "B. No"
    ],
    correct: [1],
    explanation: "No, this solution does not meet the goal. Setting only ExcludedPermissionSets to Permission Set B without specifying an IncludedPermissionSets means the permission set has no base permissions to start from. Excluding B from nothing results in no permissions at all — the user would have no access to the Job table, not read-only access. A valid composite permission set requires at least one included permission set."
  },
  {
    id: 550,
    text: "Note: This question is part of a series.\n\nA company plans to optimize its permission sets.\n\nPermission Set A: tabledata Job = RIMD\nPermission Set B: tabledata Job = IMD\n\nYou need to provide the following implementation for a third permission set:\n- Create a new Permission Set C that is a composite of Permission Set A and Permission Set B.\n- Assign Permission Set C to a user.\n- Ensure that the user has only read access to the Job table.\n\nSolution: Set the IncludedPermissionSets property to Permission Set B and the ExcludedPermissionSets property to Permission Set A.\n\nDoes the solution meet the goal?",
    type: "single",
    choices: [
      "A. Yes",
      "B. No"
    ],
    correct: [1],
    explanation: "No, this solution does not meet the goal. Permission Set B has IMD (Insert, Modify, Delete) — no Read permission. Including B and excluding A: the composite starts with IMD (from B) and removes permissions that are in A (RIMD). Since all of IMD is contained in RIMD, excluding A removes all of B's permissions. The result is no permissions on the Job table — not read-only access."
  },
  {
    id: 551,
    text: "A company uses Business Central. Users in DepartmentA are assigned a base application permission set. The company observes that DepartmentA can display a critical page that should be unavailable to the department. You need to resolve the system control issue. What should you do?",
    type: "single",
    choices: [
      "A. Create a different role center page that excludes the critical page and assign it to the users.",
      "B. Create a permission set object that excludes the critical table and assign it to the users.",
      "C. Create an entitlement object that excludes the base application permission set.",
      "D. Extend the base application permission set and configure the IncludedPermissionSets property.",
      "E. Extend the base application permission set and configure the ExcludedPermissionSets property."
    ],
    correct: [4],
    explanation: "To remove specific permissions from a base application permission set, extend the permission set and use the ExcludedPermissionSets property to exclude the permissions that grant access to the critical page or its underlying objects. This is the correct AL approach for removing permissions from an existing permission set in an extension without modifying the base application directly."
  },
  {
    id: 552,
    text: "A company has extended Business Central. You plan to submit the extension to AppSource. You need to ensure that an application meets the technical requirements before submitting it for validation. Which three actions should you perform? Each correct answer presents a complete solution. (Select THREE)",
    type: "multiple",
    choices: [
      "A. Ensure the .app file is digitally signed.",
      "B. Use the OnBeforeCompanyOpen event for improved sign in time.",
      "C. Use data classification on all tables and extension fields.",
      "D. Include extension translation files with the submission.",
      "E. Code all date fields in the mm-dd-yyyy format."
    ],
    correct: [0, 2, 3],
    explanation: "AppSource technical validation requires: (A) The .app file must be digitally signed with a valid certificate before submission. (C) All table fields and extension fields must have the DataClassification property set — this is required for GDPR compliance and AppSource validation. (D) Extension translation files (.xlf) must be included so the app can be localized. Using OnBeforeCompanyOpen (B) is a performance recommendation but not a technical requirement. Date format coding (E) is not a specific AppSource requirement."
  },
  {
    id: 553,
    text: "Note: This question is part of a series.\n\nA company creates a Business Central app and a table named MyTable to store records when sales orders are posted. Users report the following issues:\n- The users receive permission errors related to MyTable.\n- Users are no longer able to post sales orders since installing the new app.\n- The users cannot access the list page created in MyTable.\n\nYou need to resolve the user issues without creating new permission sets. You must use the principle of least privilege.\n\nSolution: Assign a SUPER permission set.\n\nDoes the solution meet the goal?",
    type: "single",
    choices: [
      "A. Yes",
      "B. No"
    ],
    correct: [1],
    explanation: "No, this solution does not meet the goal. Assigning the SUPER permission set grants unrestricted access to all objects in the system, which violates the principle of least privilege. The correct approach is to grant only the minimum permissions required — for example, by using entitlements or by adding the necessary table and page permissions to the app's permission set objects included with the extension, so users get only what they need to interact with MyTable and post sales orders."
  }
];
