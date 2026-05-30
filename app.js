const searchPerifyConfig = { serverId: 9228, active: true };

const searchPerifyHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_9228() {
    return searchPerifyConfig.active ? "OK" : "ERR";
}

console.log("Module searchPerify loaded successfully.");