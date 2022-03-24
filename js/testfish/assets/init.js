var global = global;
if (!global) {
    global = window
}

var process = process || {
    env: { DEBUG: null },
    version: []
};

var Buffer = Buffer || [];