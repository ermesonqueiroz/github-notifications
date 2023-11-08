# Github Notifications

A simple application to add a github notifications indicator in System Tray.

## ⚙️ Requirements

You need a `Personal Access Token`, with `notifications` scope selected. [Managing your personal access tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens).

## 🚀 Setup

```bash
# Clone the Repository
git clone git@github.com:ermesonqueiroz/github-notifications.git

cd github-notifications

# Create the .env file
cp .env.example .env

npm install
```

Then, you need add your `Personal Access Token` in `.env` file.

Now, you can generate the `.flatpak` file to install the project in your machine.

```bash
npm run make
```

---

Github Notifications is an open-sourced software licensed under the [MIT license](./LICENSE).
