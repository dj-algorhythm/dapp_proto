export const CONTRACT_ADDRESS = '0xCfEB869F69431e42cdB54A4F4f105C19C080A601'

export const CASE_REPO_ABI = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "caseOfficer",
        "type": "address"
      }
    ],
    "name": "CaseAssigned",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "caseCreator",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "caseId",
        "type": "uint256"
      }
    ],
    "name": "CaseCreated",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "cases",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "caseId",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "caseCreator",
        "type": "address"
      },
      {
        "internalType": "enum CaseRepository.MgmtPhase",
        "name": "phase",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "createCaseFile",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_caseId",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "_officerAddress",
        "type": "address"
      }
    ],
    "name": "assignCase",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]