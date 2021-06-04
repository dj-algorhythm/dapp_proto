/* eslint-disable jsx-a11y/anchor-is-valid */
import CaseFile from './CaseFile'
import React, { Component } from 'react';


class CaseList extends Component {

    render() {
        if ((this.props.caseFiles[0] === undefined) || this.props.caseFiles.length <- 0 ) {
            this.setState = { caseFiles: [ this.props.newCaseId ] }
            return (
                <div id="caseList" className="container">
                    <div id="no-cases">
                        <h3>No cases found</h3>
                        <p className="text-center"><button onClick={this.props.createCaseFile} className="btn btn">Create case</button></p>
                    </div>
                </div>
            );
        } else {
            return (
            );
        }
    }
}

export default CaseList;

<div id="caseList" className="container">
                        { this.props.caseFiles.map( ( caseFile, key ) => {
                            let caseId = caseFile.caseId
                            return (<CaseFile caseId= { caseId }
                                caseCreator={ caseFile.caseCreator }
                                phase={ caseFile.phase }
                                assignedOfficer={ caseFile.assignedOfficer }
                                key={ caseId }
                            />);
                        })}
                    </div>
                
