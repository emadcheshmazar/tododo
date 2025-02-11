# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

for start please run:
npm install
npm run dev

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

توضیحات:
سعی کردم تو زمان محدود تسک رو با معماری و ساختار پیچیده تری بنویسم که تا صرفا مهارت های برنامه نویسی ام رو برای پروژه های بزرگتر با معماری های پیچیده تر نشان بدم. در نگاه اول این معماری برای این تسک کمی پیچیده است و به سادگی خیلی بیشتری میشه این تسک رو پیاده کرد ولی هدف من ایجاد ساختاری توسعه پذیر، خونا و با قابلیت نگه داری بیشتر بوده.
این معماری core-base و به کمک ریداکس ایجاد شده. به دلیل نداشتن api استیت های مورد نظر به صورت persist در لوکال استوریج ذخیره و به کمک هسته و ریداکس در کل اپ قابل دسترسی و تغییر هستند.
همچنین از اصول دیکاپلینگ جهت جداسازی لایه های سرویس و ui تبعیت میکنه که در صورت اضافه شدن ای پی آی یک لایه دیگر به این ها اضافه میشه
ساختار پوشه بندی هم با الهام از ساختار app router در next js استفاده شده هرچند این اپ با react ایجاد شده.


