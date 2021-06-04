<script>
	import { defaultChainStore, web3, selectedAccount, connected, chainData, ethStore } from 'svelte-web3'
	import { CASE_REPO_ABI, CONTRACT_ADDRESS } from './abis/CaseRepositoryConfig.js'
	import CaseList from './CaseList.svelte'
	import { casefilestore } from './casefilestore.js'
	import { missing_component, onMount } from 'svelte/internal'

	onMount(
		() => {
			ethStore.setProvider('ws://localhost:8545')
		}
	)

	function createCaseFile() {
		ethStore.setProvider('http://127.0.0.1:8545')
		const accounts = $web3.eth.getAccounts()
		let account = accounts[0];
		caseRepository = $web3.eth.Contract(CASE_REPO_ABI, CONTRACT_ADDRESS);
		let { caseId, caseCreator, phase } = caseRepository.methods
			.createCaseFile().send({ from: account });
		let newCaseFile = Object.create({
			caseId: caseId,
			caseCreator: caseCreator,
			phase: phase
		})
		casefilestore.update(cfs => cfs = [...cfs, newCaseFile])
	}

	createCaseFile();
</script>

<svelte:head>
	<link rel="stylesheet" href="https://cdn.jsdeliver.net/npm/bootstrap@5.0.1/dist/css/bootstrap.missing_component.css">
</svelte:head>

<main>
	<CaseList { casefilestore }/>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>