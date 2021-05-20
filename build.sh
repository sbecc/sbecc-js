cd sbecc-c
emcc -Isecp256k1/src -Ilibsodium/src/libsodium/include -Llibsodium/src/libsodium/.libs -lsodium -o ../dist/sbecc.js sbecc.c -s MODULARIZE -s EXPORT_NAME=sbecc -s WASM=1 -s EXPORTED_RUNTIME_METHODS=stackAlloc,stringToUTF8,lengthBytesUTF8 -s EXPORTED_FUNCTIONS='["_sbecc_create_context","_sbecc_encrypt","_sbecc_destroy_context"]' -O3
cd ..