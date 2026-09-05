const SERVER_IP = "Anivismp.aternos.me";

const DISCORD =
    "https://discord.gg/yVEVx2TXR";


/* COPY SERVER IP */

function copyIP() {

    navigator.clipboard.writeText(SERVER_IP);

    alert(
        "✅ Server IP copied!\n\n" +
        SERVER_IP
    );

}


/* RANK PURCHASE */

function buyRank(rank, price) {

    alert(
        "🛒 ANIVI SMP RANK SHOP\n\n" +

        "Rank: " + rank + "\n" +

        "Price: " +
        price.toLocaleString() +
        " Coins\n\n" +

        "⚠️ This is currently a demo.\n" +

        "Connect the website to your Minecraft " +
        "economy/API to make purchases real."
    );

}
