module.exports = async function main(callback) {
    try {
        const accounts = await web3.eth.getAccounts();
        console.log(accounts);

        const CaseRepository = artifacts.require("CaseRepository");
        
        const cr = await CaseRepository.deployed();

        obj = await cr.createCase();
        console.log("Case has been created", obj);

        callback(0);
    } catch (error) {
        console.error(error);callback(1);
    }
}