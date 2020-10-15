
var gw = new Getway();
var wsn = Getway.createWsn(name, w);
var rpc = Getway.createRpc(name, r);








var gw2 = new Getway(wsn2);

var wsn1 = new Wsn();
wsn.read = function () {}; // Interfaces
wsn.attrMap = {};

gw1.read(addr, attr, cb);          // attr -> ep path -> wsn1.read(addr, ep, cb);
gw1.write(addr, attr, value, cb);
gw1.exec(addr, attr, args, cb);
gw1.observe(addr, attr, cfg, cb);
gw1.identify(addr, cb);
gw1.ping(addr, cb);


var wsn = new Wsn('WSN', gw);
var rpc1 = new rpc1('RPC1', gw);
var rpc2 = new rpc2('RPC2', gw);
//--

// for wsn
gw.emit('devIncoming', msg);
gw.on('REQ', function () {});

wsn.reqHandler();

// for rpc
gw.emit('REQ', msg);
gw.on('NOTIFY', msg);

// EVENT
gw.emit('FROM:TO:EVENT');
gw.emit('WSN:GW:devIncoming');
gw.emitBy(wsn, 'devIncoming');
gw.emit('WSN:GW:devIncoming');
gw.listenFrom(wsn, 'devIncoming', function () {});
gw.on('WSN:GW:devIncoming', function () {});
gw.emit('GW:RPC1:devIncoming');

// WSN:devIncoming <- gw: gw.on
// GW:devIncoming <- rpc: gw.on

/* emit message
{
    from: 'wsn_name',
    type: 'RSP',

}
*/

var wsnAgent = new wsnAgent();
// GW APIs
gw.read(name, addr, attr, function () {});  
// -> wsn1.read(addr, attr)   HOW: attr -> ep


gw.maintain();
