# 🍲 ReceitasAppExpo

Aplicativo de receitas desenvolvido com **React Native** e **Expo**, agora com integração ao **SQLite** para armazenamento local de dados. Testado e validado com **EAS (Expo Application Services)** para builds e deploys eficientes.

---

## 📱 Funcionalidades

- ✅ Exibição de uma lista de receitas ao ar livre
- ✅ Navegação entre telas utilizando **React Navigation (Stack)**
- ✅ Componentes reutilizáveis, como `RecipeCard`
- ✅ Dados centralizados em `recipes.js`
- ✅ Estilização com emojis, cores e layout responsivo
- ✅ Persistência de dados com **SQLite**
- ✅ Testes e builds realizados com **EAS**

---

## ⚙️ Tecnologias Utilizadas

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [React Navigation](https://reactnavigation.org/)
- [SQLite](https://docs.expo.dev/versions/latest/sdk/sqlite/)
- [EAS (Expo Application Services)](https://docs.expo.dev/eas/)

---

## 🚀 Como Executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/serbiow/ReceitasAppExpo.git
   cd ReceitasAppExpo
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o projeto:
   ```bash
   npx expo start
   ```

---

## 🧪 Testes com EAS

O aplicativo foi testado utilizando o **EAS Build**, garantindo builds consistentes para Android e iOS. Para realizar um build:

```bash
npx eas build --platform all
```

Certifique-se de ter o `eas-cli` instalado globalmente:

```bash
npm install -g eas-cli
```

---

## 🗃️ Banco de Dados (SQLite)

A aplicação utiliza o **SQLite** para armazenar e gerenciar os dados das receitas localmente, permitindo acesso offline e melhor desempenho.

---

## 👨‍💻 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

---

## 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
