/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import Web3 from 'web3'
import './App.css'
import { CASE_REPO_ABI, CONTRACT_ADDRESS } from './contracts/CaseRepositoryConfig'
import CaseList from './CaseList'

class App extends Component {

  

  async loadBlockchaindata() {
    const web3 = new Web3( Web3.givenProvider || "http://localhost:8545" )
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] });
    const caseRepository = new web3.eth.Contract(CASE_REPO_ABI, CONTRACT_ADDRESS);
    this.setState({ caseRepository: caseRepository, caseFiles: caseRepository.cases });
  }

  async createCaseFile() {
    const newCaseId = await this.state.caseRepository.methods.createCaseFile().send({ from: this.state.account })
      .once('receipt', (receipt) => {
        this.state.caseFiles.push(newCaseId);        
        return ( <CaseList caseFiles={...this.state.caseFiles}
                createCaseFile={this.createCaseFile} newCaseId={ newCaseId }/> );
      });
  }

  function getCaseFiles() { 
    return this.state.caseFiles;
   };

  constructor(props) {
    super(props)
    this.state = { account: '', caseFiles: [] } 
    this.loadBlockchaindata = this.loadBlockchaindata.bind(this)   
    this.createCaseFile = this.createCaseFile.bind(this)
    this.loadBlockchaindata()
    this.createCaseFile()
  }

  render() {
    return (
      <div id="content">
        <header className="p-3 mb-3 border-bottom">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><a href="#" className="nav-link px-2 link-secondary">Overview</a></li>
                        <li><a href="#" className="nav-link px-2 link-dark">Inventory</a></li>
                        <li><a href="#" className="nav-link px-2 link-dark">Customers</a></li>
                        <li><a href="#" className="nav-link px-2 link-dark">Products</a></li>
                    </ul>

                    <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                        <input type="search" className="form-control" placeholder="Search..." aria-label="Search"/>
                    </form>

                    <div className="dropdown text-end">                                    
                        <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1">
                            <li><a className="dropdown-item" href="#">New project...</a></li>
                            <li><a className="dropdown-item" href="#">Settings</a></li>
                            <li><a className="dropdown-item" href="#">Profile</a></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="#">Sign out</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header> 
      </div>

    );
  }
}

export default App;


{/* <CaseList caseFiles={this.state.caseFiles}
  createCaseFile={this.createCaseFile}/> */}