/* eslint-disable no-undef */
import fs from "fs";
import path from "path";

const componentName = process.argv[2];

if (!componentName) {
  console.error("❌ Укажи имя компонента: npm run g ComponentName");
  process.exit(1);
}

if (!/^[A-Z][A-Za-z0-9]*$/.test(componentName)) {
  console.error("❌ Имя компонента должно быть в PascalCase");
  process.exit(1);
}

const componentPath = path.resolve("src", "components", componentName);

if (fs.existsSync(componentPath)) {
  console.error("❌ Компонент уже существует");
  process.exit(1);
}

// преобразуем имя в camelCase для класса
const className = componentName[0].toLowerCase() + componentName.slice(1);

fs.mkdirSync(componentPath, { recursive: true });

// JSX
fs.writeFileSync(
  path.join(componentPath, `${componentName}.jsx`),
  `import styles from "./${componentName}.module.scss";

export const ${componentName} = (props) => {
  const {} = props;

  return <div className={styles.${className}}></div>;
};
`
);

// SCSS
fs.writeFileSync(
  path.join(componentPath, `${componentName}.module.scss`),
  `.${className} {

}
`
);

console.log(`✅ Компонент ${componentName}  создан`);
