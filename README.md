# SE_summative

## Proposal
The objective of this project is to design and implement a simple, web-based Currency Converter App that allows users to convert numeric values between widely used currencies. The app is intended as a minimal, functional tool with a clean interface, focused on usability and clarity, rather than exhaustive features or extensive currency coverage. The core goal is to demonstrate proficiency in front-end development using HTML, CSS, and JavaScript, while integrating modern software engineering practices such as Test-Driven Development (TDD), automated testing with Jest, and continuous integration and deployment (CI/CD) using GitHub Actions.

Firstly, it provides an opportunity to practice the entire software development lifecycle in a small, manageable project. From initial requirements gathering and prototyping through coding, testing, and deployment, the project offers a taste of real-world software development.

Secondly, it demonstrates the application of automated workflows, showing that even a simple project can benefit from best practices in version control, testing, and deployment automation.

The scope of the project is deliberately constrained to ensure focus and clarity. The app includes interactive numeric inputs, dropdown-based currency selection, real-time bidirectional updates between input fields, and static conversion rates for simplicity. The final deliverable will be deployed online, accessible via GitHub Pages, and accompanied by full documentation and testing evidence to support evaluation.


## Design & Prototyping
The Figma prototype for the Currency Converter App demonstrates the intended user interface and basic interactions. The design is minimal, with a white background and text elements positioned higher on the page to allow space for the dropdown menus.

### Layout
- Title: "Currency Converter App" at the top.
- Currency Selection: Two stacked dropdown boxes for currency codes (GBP, USD, EUR).
- Value Input: Each dropdown has a corresponding numeric input box for entering a value. The value in one box automatically updates the other to two decimal places.

### Interactions
The prototype illustrates two main interaction paths:
1. Changing Currency:
 - Click the dropdown arrow to view the list of supported currencies.
 - Select a currency (for example, GBP).
 - The top currency updates and the bottom value box recalculates automatically.
2. Changing Value:
 - Click the top value box on the first page to simulate entering a new value.
 - The next page shows the updated corresponding value in the bottom box.

**Main Page**
![Main Page Screenshot](./images/currency_home_page.png)

**Recalculate by changing amount**
![Recalculated conversion screenshot](./images/new_value.png)

**Dropdown Selection**
![Dropdown Screenshot](./images/dropdown.png)

**Currency change**
![Screenshot of different currency conversion](./images/new_currency.png)

**Interactions**
![Prorotype Interactions Screenshot](./images/prototype_interactions.png)

The link to the figma design can be found [here](https://www.figma.com/design/NkJTdkXotMxNGNgTv1rJ5r/currency-converter-prototype?node-id=1-2518)