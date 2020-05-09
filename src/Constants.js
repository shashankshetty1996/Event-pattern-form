const input = {
  Customer: { value: "", type: "input", hint: "Specify customer name" },
  "Salesforce Reference": {
    value: "",
    type: "input",
    hint: "Specify the Salesforce case number (e.g., 00001234)",
  },
  "Affected Node": {
    value: "",
    type: "input",
    hint: "Affected node:* If applicable, specify the affected node",
  },
  "Rubrik Version": {
    value: "",
    type: "input",
    hint: "Specify the Salesforce case number (e.g., 00001234)",
  },
  "Special Handling Instructions": {
    value: "",
    type: "input",
    hint:
      "If applicable, document any special instructions. For example, before restarting services, we must request approval from the customer.",
  },
  "Cluster UUID": {
    value: "",
    type: "input",
    hint: "Specify the Cluster UUID",
  },
  "Cluster Tag": { value: "", type: "input", hint: "Specify the Cluster Tag" },
  "Support Contacts": { value: "", type: "input", hint: "Support Contacts" },
  Summary: {
    value: "",
    type: "input",
    hint:
      "Provide a detailed and concise summary of the problem. Describe the customer scenario and provide the workflow of the problem at a high-level.",
  },
  Environment: {
    value: "",
    type: "input",
    hint:
      "Describe any customer specific deployment details that pertain to the problem being reported. For example, does the problem involve Microsoft SQL or Exchange or third party hardware (e.g., storage array manufacturer and model).",
  },
  "Version Information": {
    value: "",
    type: "input",
    hint:
      "Please include the version information for any third party software (e.g., vSphere version, Microsoft SQL version/build, Microsoft version/build, etc.).",
  },
  "Customer impact and current status": {
    value: "",
    type: "input",
    hint:
      "For proper prioritization and visibility, provide the customer context regarding the impact. For example, if the customer is currently blocked, please be explicit. Given the volume of requests, providing clear status and visibility allows Engineering to prioritize all requests relative to the true customer impact and urgency. Also, provide clear and concise customer expectations on the path to address the issue from their perspective (e.g., the issue is resolved, but the customer requires a root cause analysis).",
  },
  "Reproduction steps": {
    value: "",
    type: "input",
    hint:
      "If the specific steps are available to reproduce the problem, please specify the instructions. Please confirm if the steps are only reproducible in the customer environment or through lab testing.",
  },
  Workaround: {
    value: "",
    type: "input",
    hint:
      "Indicate if a workaround is available. Please be specific and do not assume that the audience is an expert (i.e., consider that new team members are the audience).",
  },
  "Support analysis": {
    value: "",
    type: "textarea",
    hint:
      "Provide the detailed analysis taken thus far from Support and Customer Success perspectives. If any logs were reviewed, what was the analysis and reference log snippets. Please include any theories, etc. Please consider that new team members are the audience. The analysis provided facilitates self-learning for new team members. Including exact commands for log isolation will be very helpful (e.g., the commands used to grep the logs).",
  },
  "What is being requested of Engineering": {
    value: "",
    type: "textarea",
    hint:
      "Be specific of what exactly is required of Engineering to address the concern being raised in the JIRA request. Do not assume that Engineering knows what is being requested. Concise requests allow Engineering to focus on the solution instead of interpreting the requirements. For example, is a root cause being requested? Is a workaround being requested as the customer is blocked? Is an immediate fix being requested as the customer is currently blocked? Support and Customer Success have the customer perspective, so they must be conveyed properly in this section on the required next steps to address the customer concern. Finally, be sure to convey the timeline of the request (i.e.., when is the customer expecting a response from Rubrik?).",
  },
};

export default { FORM_DETAILS: { input } };
