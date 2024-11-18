# e-PlantShopping 🌱🛒

A sleek, responsive, and interactive plant shopping web application built with **React**, **Redux**, and **Vite**. This project allows users to browse categories of plants, add them to a cart, update quantities, and experience a modern shopping interface.

---

## Features 🚀

- **Browse Plants by Categories**: Explore a variety of plants categorized for easy navigation.
- **Add to Cart**: Seamlessly add plants to your shopping cart with a single click.
- **Cart Management**:
  - Increment or decrement item quantities.
  - Remove items from the cart.
  - View real-time cart totals and subtotals.
- **Responsive Design**: Optimized for mobile, tablet, and desktop screens.
- **Redux-Powered State Management**: Efficient and predictable global state handling.
- **Vite Build System**: Fast development and optimized production builds.

---

## Tech Stack 🛠️

- **Frontend**: React, Redux
- **Build Tool**: Vite
- **Styling**: CSS (responsive and modern styling)
- **State Management**: Redux Toolkit

---

## Installation & Setup 🛠️

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Cod-e-Codes/e-plantShopping.git
   cd e-plantShopping
   ```

2. **Install Dependencies:**:
   ```bash
   npm install
   ```

3. **Run the Development Server:**:
   ```bash
   npm run dev
   ```

4. **Build for Production:**:
   ```bash
   npm run build
   ```

5. **Preview the Production Build:**:
   ```bash
   npm run preview
   ```

---

## Usage Instructions 🛍️

- **Browse Categories**: Navigate through the categorized plants on the home page.
- **Add Items to Cart**: Click the "Add to Cart" button on your favorite plants.
- **Manage Cart**:
  - Adjust the quantity of items.
  - Remove items you no longer need.
- **Continue Shopping**: Switch between the cart and product catalog seamlessly.
- **View Cart Totals**: Stay informed about your cart's total cost.

---

## Deployment 🚀

This project can be deployed to platforms like **Netlify**, **Vercel**, or **GitHub Pages**. The `vite.config.js` is configured with a `base` for GitHub Pages.

### GitHub Pages Deployment:

1. Add the `gh-pages` package:
   ```bash
   npm install gh-pages --save-dev
   ```

. Update package.json with the following scripts:
   ```json
   "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
    }
   ```

3. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

---

## Contributing 🤝

Contributions, issues, and feature requests are welcome! Feel free to fork the repo and submit a pull request.

---

## License 📝

This project is licensed under the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0). You are free to use, modify, and distribute this project under the terms of this license.

---

## Acknowledgements 🙌

- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://reactjs.org/)

## Author ✨

- **Cody Marsengill**
  - GitHub: [Cod-e-Codes](https://github.com/Cod-e-Codes)