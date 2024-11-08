## NOT PIXEL AIRDROP

**AIRDROP** : NOT PIXEL (OFFICIAL BY PAVEL DUROV)

NotPixel Mining By Pavel Durrov

🏷 Reward: PX Tokens

➡️ Register: [NotPixel](https://t.me/notpixel/app?startapp=f6896240442_s575297)

Color pixels and watch your Not PX balance grow.
Just draw on the canvas and clear some task

Zoom > Find White Color > Draw With Multicolor > Done
📌 Use 1.1.1.1 (Cloudflare DNS) if you can't open the game

---

## Prerequisite

- Git
- Node JS
- TELEGRAM_APP_ID & TELEGRAM_APP_HASH Get it from [Here](https://my.telegram.org/auth?to=apps) (REQUIRED IF YOU WANT USE SESSIONS)
- Not Pixel Register [Here](https://t.me/notpixel/app?startapp=f6896240442_s575297) Regist and atleast do something in game

---

## BOT FEATURE

- Multi Account With Proxy Support
- Support Telegram Sessions and Telegram Query (Query May Expired)
- Auto Draw in Pixel
- Auto Complete Some Missions
- Auto Claim Mining
- Auto Upgrade Boost (reChargeSpeed, EnergyLimit, PaintReward)

---

## Setup & Configure BOT

### Linux & MAC OS

1. clone project repo
   ```
   git clone https://github.com/Rambeboy/NOTPIXEL.git
   ```
   and cd to project dir
   ```
   cd NOTPIXEL
   ```
2. Run
   ```
   npm install && npm run setup
   ```
3. Run
   ```
   npm i telegram@2.22.2
   ```
4. Run
   ```
   mkdir -p accounts
   ```
5. (If You Use Telegram Sessions) To configure the app, run
   ```
   nano config/config.js
   ```
   and add your telegram app id and hash there.
6. (If You Use Proxy) To configure the app, run
   ```
   nano config/proxy_list.js
   ```
   and add your proxy listh there.
7. to start the app run
   ```
   npm run start
   ```

---

### Windows

1. Open your `Command Prompt` or `Power Shell`.
2. Clone project repo
   ```
   git clone https://github.com/Rambeboy/NOTPIXEL.git
   ```
   and cd to project dir
   ```
   cd NOTPIXEL
   ```
3. Run
   ```
   npm instal && npm run setup
   ```
4. Run
   ```
   npm i telegram@2.22.2
   ```
5. Navigate to `NOTPIXEL` directory.
6. Make new folder named `accounts`.
7. Navigate to `config` folder and configure  `config.js` also `proxy_list.js`.
8. Now Open and configure `config.js`.
9. Now back to the `NOTPIXEL` folder
10. To start the app open your `Command Prompt` or `Power Shell` again and run
    ```
    npm start
    ```
11. If Any error happen contains config or proxy, Copy `config` folder to `app` folder
12. Finally run with
    ```
    node app/index.js
    ```

---

## Update Bot

To update bot follow this step :

1. run
   ```
   git pull
   ```
   or
   ```
   git pull --rebase
   ```
   if error run
   ```
   git stash && git pull
   ```
2. run
   ```
   npm update
   ```
3. start the bot.

---

## Setup Accounts

1. Run bot `npm run start`
2. Choose option `1` to create account
3. Choose account type `Query` or `Sessions`
4. `Session` Type
- Enter Account Name
- Enter your phone number starting with countrycode ex : `+628xxxxxxxx`
- You will be asked for verification code and password (if any)
- Start The bot Again after account creation complete
5. `Query` Type
- Enter Account Name
- Enter Telegram Query (you can get query by opening bot app on browser > inspect element > storage / application > session storage > telegram init params > copy tg web app data value)
6. Start The bot Again after account creation complete
7. after bot started choose option 3 start bot

---

## Session Troubleshoot

If you asked to enter phone number again after sessions creation, it mean session not initialized correctly, try to delete the created sessions.

Example Case

- example you already have 1 session (sessionA) and all good when you run bot. After that you create another session, but when you run bot, the bot asked to enter phone number again, so the problem is on (sessionB), to fix it just remove the `accounts/sessionB` folder and re create it or just delete all folder inside `accounts` directory with prefix `sessions-`.

---

## Query Troubleshoot

if your bot get eror, with some error code `401` it mean your query expired, go get new query and run bot again and choose option `4` for query modification.

---

## Note

You can configure bot by opening `config.js` file and modify some of this param
```js
static MODE = 2; // 1 FOR 1 BY 1 RUN & 2 FOR MASS RUN
static USEAUTOUPGRADE = true; //USE AUTO UPGRADE OR NO
static REPAINTER = true; //USE INCORRECT COLOR REPAINTER
static CUSTOMDELAYINMIN = undefined; //CUSTOM DELAY IN MINUTES EX : 60 = 60 minutes
static TEMPLATE = {
   templateID: 446378180,
   startArea: 116450,
   endArea: 165575,
   correctColor: "#6D482F",
}; //configure fren template by finding the id, color, start area and end area (is a rectangle start from top left, and end on bottom right)
```

Don't use bot with `session` type if you using telegram account that bought from someone because it can make your telegram account deleted. instead of using `session` type, use `query` type.

This bot can use Telegram Query and Telegram Sessions. if you want to use sessions, and ever use one of my bot that use telegram sessions, you can just copy the `accounts` folder to this bot. Also for the telegram APP ID and Hash you can use it from another bot. If you want to use Telegram Query, get your query manually.

if you got error `Invalid ConstructorId` try to run this `npm i telegram@2.22.2`

---
