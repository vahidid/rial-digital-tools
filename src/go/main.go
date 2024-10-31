package main

import (
	"crypto"
	"crypto/rand"
	"crypto/rsa"
	"crypto/sha256"
	"crypto/x509"
	"encoding/base64"
	"encoding/pem"
	"fmt"
)

const (
	KEY_BITS = 2048
)

type (
	GenerateKeyResponse struct {
		PrivateKeyPEM string `json:"private_key_pem"`
		PublicKeyPEM  string `json:"public_key_pem"`
	}

	SignMessageResponse struct {
		Signature string `json:"signature"`
	}
)

func main() {

	fmt.Println("Start using WASM")
	// js.Global().Set("generateKey", keysWrapper())

	// <-make(chan struct{})
}

// func keysWrapper() js.Func {
// 	function := js.FuncOf(func(this js.Value, _ []js.Value) any {
// 		generateKeys()

// 		return "complete"
// 	})
// 	return function
// }

func generateKeys() GenerateKeyResponse {
	privateKey, err := rsa.GenerateKey(rand.Reader, KEY_BITS)
	if err != nil {
		panic(err)
	}

	privateKeyPEM := &pem.Block{
		Type:  "RSA PRIVATE KEY",
		Bytes: x509.MarshalPKCS1PrivateKey(privateKey),
	}

	publicKey := &privateKey.PublicKey
	publicKeyPEM := &pem.Block{
		Type:  "RSA PUBLIC KEY",
		Bytes: x509.MarshalPKCS1PublicKey(publicKey),
	}

	return GenerateKeyResponse{
		PrivateKeyPEM: base64.StdEncoding.EncodeToString(privateKeyPEM.Bytes),
		PublicKeyPEM:  base64.StdEncoding.EncodeToString(publicKeyPEM.Bytes),
	}
}

func signMessage(message string, privatePem string) SignMessageResponse {
	byteMessage := []byte(message)
	hashMessage := sha256.Sum256(byteMessage)

	block, _ := pem.Decode([]byte(privatePem))
	privateKey, _ := x509.ParsePKCS1PrivateKey(block.Bytes)
	signature, err := rsa.SignPKCS1v15(rand.Reader, privateKey, crypto.SHA256, hashMessage[:])

	if err != nil {
		panic(err)
	}
	return SignMessageResponse{
		Signature: base64.StdEncoding.EncodeToString(signature),
	}
}
