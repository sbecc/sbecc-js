cd sbecc-c/libsodium
emconfigure ./configure
emmake make "CFLAGS=-g -O2 -pthread -fvisibility=hidden -fPIC -fPIE -fno-strict-aliasing -fno-strict-overflow -fno-stack-protector -ftls-model=local-dynamic" "CWFLAGS=-g -O2 -pthread -fvisibility=hidden -fPIC -fPIE -fno-strict-aliasing -fno-strict-overflow -fno-stack-protector -Wextra -Wno-unknown-warning-option -Wbad-function-cast -Wcast-qual -Wdiv-by-zero -Wduplicated-branches -Wduplicated-cond -Wfloat-equal -Wformat=2 -Wlogical-op -Wmaybe-uninitialized -Wmisleading-indentation -Wmissing-declarations -Wmissing-prototypes -Wnested-externs -Wno-type-limits -Wno-unknown-pragmas -Wnormalized=id -Wnull-dereference -Wold-style-declaration -Wpointer-arith -Wredundant-decls -Wrestrict -Wshorten-64-to-32 -Wsometimes-uninitialized -Wstrict-prototypes -Wswitch-enum -Wvariable-decl -Wwrite-strings"
cd ..