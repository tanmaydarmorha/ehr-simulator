import logo from './logo.svg';
import './App.css';
import axios from "axios"
import {useEffect, useState} from 'react'
import { cards } from './cds hook response';

function App() {

  const [patientList, setPatientList] = useState([]);
  const [serviceList, setServiceList] = useState([]);
  const [practitionerList, setPractitionerList] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState({});
  const [selectedService, setSelectedService] = useState("");
  const [selectedPractitioner, setSelectedPractitioner] = useState("");
  const [showSummary, setShowSummary] = useState(true);
  const [currentCard, setCurrentcard] = useState(cards[0])

  const handlePatientChange = (e) => {
    if(e.target.value){
      setSelectedPatient(patientList.filter(patient => patient.resource.id === e.target.value)[0])
    }else{
      setSelectedPatient({})
    }
  }

  const handleServiceChange = (e) => {
    setSelectedService(e.target.value)
  }

  const handlePractitionerChange = (e) => {
    setSelectedPractitioner(e.target.value)
  }

  useEffect(()=>{
    axios.get("http://localhost:8080/test-ehr/r4/Patient").then((res) => {
      console.log('got the logs', res)
      setPatientList(res.data?.entry)
    }).catch((err) => console.log(err));
    axios.get("http://localhost:8080/test-ehr/r4/DeviceRequest").then((res) => {
      console.log("got the services", res);
      setServiceList(res.data.entry)
    })
    axios.get("http://localhost:8080/test-ehr/r4/Practitioner").then((res) => {
      console.log("got the practionerList", res);
      setPractitionerList(res.data.entry)
    })
  }, [])


  return (
    <div className="App">
      <div className="Header">
        <p>EHR Simulator</p>
      </div>
      <div className="AppBodyWrapper">
        <form>
          <div className="DropdownWrapper">
            <div className='dropdownHolder'>
              <label>Patient Name</label>
              <select name="patient" onChange={handlePatientChange} className="dropdown">
                <option value="">Select Patient</option>
                {patientList && patientList.map((element, index) => {
                  return(
                    <option key={index} value={element.resource.id}>{element.resource.name[0].given[0]}</option>
                  )
                })}
              </select>
            </div>
            <div className='dropdownHolder'>
              <label>Service Name</label>
              <select className="dropdown" onChange={handleServiceChange} disabled={!Object.keys(selectedPatient).length > 0}>
                <option value="">Select Service</option>
                {
                  serviceList.length>0 && patientList.length > 0 && serviceList.filter((e) => e.resource.subject.reference.includes(selectedPatient?.resource?.id)).map((e, i) => {
                    return(
                      <option key={i} value={e.resource.id}>
                          {`${e.resource.codeCodeableConcept?.coding?.[0].code} (${e.resource.resourceType})`}
                          {/* {e.resource.codeCodeableConcept?.coding?.[0].display} */}
                      </option>
                    )
                  })
                }
              </select>
            </div>
            <div className='dropdownHolder'>
              <label>Practitioner Name</label>
              <select className="dropdown">
                <option value="">Select Practitioner</option>
                {
                  practitionerList && practitionerList.map((element, index) => {
                    return(
                      <option value={element.resource.id}>{`${element.resource.name?.[0].prefix} ${element.resource.name?.[0].given[0]}`}</option>
                      )
                    })
                  }
              </select>
            </div>
          </div>
        </form>
        <div className="DetailsWrapper">
          <p className='detailsheading'>Patient Details</p>
          {Object.keys(selectedPatient).length > 0 ? <table>
            <tbody>
              <tr>
                  <td>Name</td>
                  <td>{selectedPatient?.resource?.name[0].given[0]}</td>
              </tr>
              <tr>
                  <td>Birthdate</td>
                  <td>{selectedPatient?.resource?.birthDate}</td>
              </tr>
              <tr>
                  <td>Gender</td>
                  <td>{selectedPatient?.resource?.gender}</td>
              </tr>
              <tr>
                  <td>Address</td>
                  <td>{`${selectedPatient?.resource?.address[0].line[0]}, ${selectedPatient?.resource?.address[0].city}, ${selectedPatient?.resource?.address[0].state}, ${selectedPatient?.resource?.address[0].postalCode}`}</td>
              </tr>
            </tbody>
          </table>
          : <p>Please select a Patient</p>  
        }
        </div>
      </div>
      <hr style={{margin: "0px 30px"}} />
      <div className='summaryWrapper'>
        <p className='summaryHeading'>{showSummary ? "Summary" : "No Cards found"}</p>
        {
          showSummary && 
            <div className='Summary'>
              <p className='summaryInfo'>{currentCard.summary}</p>
              <p className='summaryHeading'>Details</p>
              <p className='detailsInfo'>{currentCard.detail}</p>
              <p className='source'>Source: <span>{currentCard.source.label}</span></p>
              <div className='linkWrapper'>
                {
                  currentCard.links.map((link, index) => {
                    return(
                      <a key={index} target='_blank' href={link.url}>{link.label}</a>
                    )
                  })
                }
              </div>
              <p className='summaryHeading'>Type</p>
              <a className='typeLink' href={currentCard.source.topic.system}>{currentCard.source.topic.display}</a>
            </div>
        }
      </div>
    </div>
  );
}

export default App;
