const crypto = require('crypto');

function encrypt(text, key, iv) {
    const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
    let encrypted = cipher.update(text, 'utf8', 'base64');
    encrypted += cipher.final('base64');
    return encrypted;
}

function decrypt(encryptedText, key, iv) {
    const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
    let decrypted = decipher.update(encryptedText, 'base64', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

// Static 32-byte key for AES-256
const key = Buffer.from('XPbo21Ygl7wsJIkciK1KyQYnyAs56d3z', 'utf8'); // 32 bytes

// Static 16-byte IV
const iv = Buffer.from('iK1KyQYnyAs56d3z', 'utf8'); // 16 bytes
const text = JSON.stringify({    "file_id": "2025-05-30_4738904020250518000507"   })

const encryptedText = encrypt(text, key, iv);
console.log("Encrypted:", encryptedText);

const decryptedText = decrypt(encryptedText, key, iv);
console.log("Decrypted:", decryptedText);
