// PUT THE ENCRYPTION KEY IN-BETWEEN THE QUOTES
var encryptionKey = "";









window.platform = "android";

process.env = {
    LOCALAPPDATA: "/sdcard/OMORI/browser_ver/localappdata"
};

window.nw = {
    App: {
        argv: `--${encryptionKey}`
    }
};