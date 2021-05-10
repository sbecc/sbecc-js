cd sbecc-c
emcc -Isecp256k1/src -Ilibsodium/src/libsodium/include -Llibsodium/src/libsodium/.libs -lsodium -o ../main.html main.c -s WASM=1
cd ..