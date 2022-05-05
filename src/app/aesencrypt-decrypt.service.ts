import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';



/**
 *  AES 加密解密 工具類
 * @export
 * @class AESEncryptDecryptService
 */
@Injectable({
  providedIn: 'root'
})
export class AESEncryptDecryptService {
  secretKey = "EFwFk0+1w3UHEfv5x/zQHYgDM7J7TwnW7NWcbEo2V5E=";
  constructor() { }
  /**
* AES-256-ECB對稱加密
* @param value {string} 要加密的明文
* @param secretKey {string} 密鑰，43位隨機大小寫數字
* @returns {string} 加密的密文
*/
  encrypt(value: string): string {
    const keyHex = CryptoJS.enc.Base64.parse(this.secretKey);
    const keyHex2 = CryptoJS.enc.Utf8.parse(this.secretKey);
    console.log("keyHex : " +  keyHex);
    console.log("keyHex2 : " + keyHex2);
    const messageHex = CryptoJS.enc.Utf8.parse(value);
    const encrypted = CryptoJS.AES.encrypt(messageHex, keyHex, {
      "mode": CryptoJS.mode.ECB,
      "padding": CryptoJS.pad.Pkcs7
    });
    return encrypted.toString(); // 轉成Base64格式
    // return CryptoJS.AES.encrypt(value, this.secretKey.trim()).toString();
  }

  /**
* AES - 256 - ECB對稱解密
* @param textToDecrypt { string } 要解密的密文
* @param secretKey { string } 密鑰，43位隨機大小寫與數字
* @returns { string } 解密後的明文
*/
  decrypt(textToDecrypt: string) {
    // var keyHex = CryptoJS.enc.Base64.parse(this.secretKey);
    const keyHex2 = CryptoJS.enc.Utf8.parse(this.secretKey);
    var decrypt = CryptoJS.AES.decrypt(textToDecrypt, keyHex2, {
      "mode": CryptoJS.mode.ECB,
      "padding": CryptoJS.pad.Pkcs7
    });
    return CryptoJS.enc.Utf8.stringify(decrypt); // 轉成utf-8格式
    // return CryptoJS.AES.decrypt(textToDecrypt, this.secretKey.trim()).toString(CryptoJS.enc.Utf8);
  }
}
