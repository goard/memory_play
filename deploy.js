// use version "ipfs-http-client": "^49.0.2"
const ipfsClient = require("ipfs-http-client");
const { globSource } = ipfsClient;
const ipfs = ipfsClient({
  host: "ipfs.infura.io",
  port: "5001",
  protocol: "https",
});

const deployAppToIpfs = async () => {
  const res = await ipfs.add(globSource("./build", { recursive: true }));
  console.log(res.cid.toV1());
};

deployAppToIpfs();
