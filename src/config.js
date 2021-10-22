const layersOrder = [
    { name: 'background', number: 7 },
    { name: 'layer1', number: 7 },
    { name: 'layer2', number: 7 },
    { name: 'layer3', number: 3 },
    { name: 'layer4', number: 7 },
    { name: 'layer5', number: 7 },
    { name: 'layer6', number: 7 },
    { name: 'layer7', number: 1 },
];
  
const format = {
    width: 500,
    height: 500
};

const rarity = [
    { key: "", val: "original" },
    { key: "_r", val: "rare" },
    { key: "_sr", val: "super rare" },
];

const defaultEdition = 100;

module.exports = { layersOrder, format, rarity, defaultEdition };
