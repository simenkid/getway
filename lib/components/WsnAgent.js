class WsnAgent {
    constructor(driver) {
        this.driver = driver;
        this.resourceMap = {};  // load map from json
    }

    // prototype
    start() {}
    stop() {}
    reset() {}
    permitJoin() {}
    remove(addr) {}
    ban(addr) {}
    unban(addr) {}
    ping(addr) {}
    maintain() {}

    read(addr, resrc) {}
    write(addr, resrc, value) {}
    exec(addr, resrc, args) {}
    identify(addr) {}
    observe(addr, resrc, cfg) {}

    setResourceEndpoint(resrc, endpoint) {
        this.resourceMap[resrc] = endpoint;

        // refresh json
    }

    getResourceEndpoint(resrc) {
        return this.resourceMap[resrc];
    }

    loadResourceMap() {
        // load map from json
    }

    saveResourceMap() {
        
    }
}