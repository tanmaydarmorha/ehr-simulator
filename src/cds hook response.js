
    export const cards = [
        {
            "uuid": "40844783-b315-4b95-8f2e-5a492f5cdf87",
            "summary": "Home Oxygen Therapy: Documentation Required.",
            "detail": "Documentation Required, please complete form via Smart App link.",
            "indicator": "info",
            "source": {
                "label": "Da Vinci CRD Reference Implementation",
                "url": null,
                "icon": null,
                "topic": {
                    "code": "dtr-clin",
                    "system": "http://hl7.org/fhir/us/davinci-crd/CodeSystem/cardType",
                    "display": "DTR Clin"
                }
            },
            "suggestions": [
                {
                    "label": "Save Update To EHR",
                    "uuid": "27b371c7-38c7-4131-9ddf-793306191c60",
                    "actions": [
                        {
                            "type": "update",
                            "description": "Update original DeviceRequest to add note",
                            "resource": {
                                "requester": {
                                    "reference": "Practitioner/pra-hfairchild"
                                },
                                "insurance": [
                                    {
                                        "reference": "Coverage/cov013"
                                    }
                                ],
                                "identifier": [
                                    {
                                        "type": {
                                            "coding": [
                                                {
                                                    "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                                                    "code": "PLAC"
                                                }
                                            ]
                                        },
                                        "value": "db91f321-928c-4a27-b892-969b5f7cc674"
                                    }
                                ],
                                "note": [
                                    {
                                        "authorString": "Da Vinci CRD Reference Implementation",
                                        "time": "2023-10-18T21:16:52+05:30",
                                        "text": "Home Oxygen Therapy: Documentation Required.: Documentation Required, please complete form via Smart App link."
                                    }
                                ],
                                "extension": [
                                    {
                                        "url": "http://hl7.org/fhir/us/davinci-crd/StructureDefinition/ext-coverage-information",
                                        "extension": [
                                            {
                                                "url": "coverageInfo",
                                                "valueCoding": {
                                                    "system": "http://hl7.org/fhir/us/davinci-crd/CodeSystem/coverageGuidance",
                                                    "code": "clinical",
                                                    "display": "Clinical"
                                                }
                                            },
                                            {
                                                "url": "coverage",
                                                "valueReference": {
                                                    "reference": "Coverage/cov013"
                                                }
                                            },
                                            {
                                                "url": "date",
                                                "valueDate": "2023-10-18"
                                            },
                                            {
                                                "url": "identifier",
                                                "valueString": "9636b18d-ec6a-4c6f-b357-e70a500e27d2"
                                            }
                                        ]
                                    }
                                ],
                                "authoredOn": "2023-01-01T00:00:00Z",
                                "performer": {
                                    "reference": "Practitioner/pra1234"
                                },
                                "subject": {
                                    "reference": "Patient/pat013"
                                },
                                "intent": "original-order",
                                "meta": {
                                    "versionId": "1",
                                    "lastUpdated": "2023-10-18T14:40:05.832+05:30",
                                    "source": "#ekYCGV5ssXKvJVNp",
                                    "profile": [
                                        "http://hl7.org/fhir/us/davinci-crd/R4/StructureDefinition/profile-devicerequest-r4"
                                    ]
                                },
                                "id": "devreq013",
                                "codeCodeableConcept": {
                                    "coding": [
                                        {
                                            "system": "https://bluebutton.cms.gov/resources/codesystem/hcpcs",
                                            "code": "E0424",
                                            "display": "Stationary Compressed Gaseous Oxygen System, Rental"
                                        }
                                    ]
                                },
                                "resourceType": "DeviceRequest",
                                "status": "draft"
                            },
                            "resourceId": "DeviceRequest/devreq013"
                        }
                    ],
                    "isRecommended": true
                }
            ],
            "selectionBehavior": null,
            "links": [
                {
                    "label": "Documentation Requirements",
                    "url": "https://www.cms.gov/outreach-and-education/medicare-learning-network-mln/mlnproducts/downloads/home-oxygen-therapy-text-only.pdf",
                    "type": "absolute",
                    "appContext": null
                },
                {
                    "label": "Order Form",
                    "url": "http://localhost:3005/launch",
                    "type": "smart",
                    "appContext": "questionnaire%3Dhttp%3A%2F%2Flocalhost%3A8090%2Ffhir%2Fr4%2FQuestionnaire%2FHomeOxygenTherapy%26order%3D%7B%5C%22resourceType%5C%22%3A%5C%22DeviceRequest%5C%22%2C%5C%22id%5C%22%3A%5C%22devreq013%5C%22%2C%5C%22meta%5C%22%3A%7B%5C%22versionId%5C%22%3A%5C%221%5C%22%2C%5C%22lastUpdated%5C%22%3A%5C%222023-10-18T14%3A40%3A05.832%2B05%3A30%5C%22%2C%5C%22source%5C%22%3A%5C%22%23ekYCGV5ssXKvJVNp%5C%22%2C%5C%22profile%5C%22%3A%5B%5C%22http%3A%5C%2F%5C%2Fhl7.org%5C%2Ffhir%5C%2Fus%5C%2Fdavinci-crd%5C%2FR4%5C%2FStructureDefinition%5C%2Fprofile-devicerequest-r4%5C%22%5D%7D%2C%5C%22identifier%5C%22%3A%5B%7B%5C%22type%5C%22%3A%7B%5C%22coding%5C%22%3A%5B%7B%5C%22system%5C%22%3A%5C%22http%3A%5C%2F%5C%2Fterminology.hl7.org%5C%2FCodeSystem%5C%2Fv2-0203%5C%22%2C%5C%22code%5C%22%3A%5C%22PLAC%5C%22%7D%5D%7D%2C%5C%22value%5C%22%3A%5C%22db91f321-928c-4a27-b892-969b5f7cc674%5C%22%7D%5D%2C%5C%22status%5C%22%3A%5C%22draft%5C%22%2C%5C%22intent%5C%22%3A%5C%22original-order%5C%22%2C%5C%22codeCodeableConcept%5C%22%3A%7B%5C%22coding%5C%22%3A%5B%7B%5C%22system%5C%22%3A%5C%22https%3A%5C%2F%5C%2Fbluebutton.cms.gov%5C%2Fresources%5C%2Fcodesystem%5C%2Fhcpcs%5C%22%2C%5C%22code%5C%22%3A%5C%22E0424%5C%22%2C%5C%22display%5C%22%3A%5C%22Stationary+Compressed+Gaseous+Oxygen+System%2C+Rental%5C%22%7D%5D%7D%2C%5C%22subject%5C%22%3A%7B%5C%22reference%5C%22%3A%5C%22Patient%5C%2Fpat013%5C%22%7D%2C%5C%22authoredOn%5C%22%3A%5C%222023-01-01T00%3A00%3A00Z%5C%22%2C%5C%22requester%5C%22%3A%7B%5C%22reference%5C%22%3A%5C%22Practitioner%5C%2Fpra-hfairchild%5C%22%7D%2C%5C%22performer%5C%22%3A%7B%5C%22reference%5C%22%3A%5C%22Practitioner%5C%2Fpra1234%5C%22%7D%2C%5C%22insurance%5C%22%3A%5B%7B%5C%22reference%5C%22%3A%5C%22Coverage%5C%2Fcov013%5C%22%7D%5D%7D%26coverage%3DCoverage%2Fcov013"
                },
                {
                    "label": "Face to Face Encounter Form",
                    "url": "http://localhost:3005/launch",
                    "type": "smart",
                    "appContext": "questionnaire%3Dhttp%3A%2F%2Flocalhost%3A8090%2Ffhir%2Fr4%2FQuestionnaire%2FHomeOxygenTherapyFaceToFace%26order%3D%7B%5C%22resourceType%5C%22%3A%5C%22DeviceRequest%5C%22%2C%5C%22id%5C%22%3A%5C%22devreq013%5C%22%2C%5C%22meta%5C%22%3A%7B%5C%22versionId%5C%22%3A%5C%221%5C%22%2C%5C%22lastUpdated%5C%22%3A%5C%222023-10-18T14%3A40%3A05.832%2B05%3A30%5C%22%2C%5C%22source%5C%22%3A%5C%22%23ekYCGV5ssXKvJVNp%5C%22%2C%5C%22profile%5C%22%3A%5B%5C%22http%3A%5C%2F%5C%2Fhl7.org%5C%2Ffhir%5C%2Fus%5C%2Fdavinci-crd%5C%2FR4%5C%2FStructureDefinition%5C%2Fprofile-devicerequest-r4%5C%22%5D%7D%2C%5C%22identifier%5C%22%3A%5B%7B%5C%22type%5C%22%3A%7B%5C%22coding%5C%22%3A%5B%7B%5C%22system%5C%22%3A%5C%22http%3A%5C%2F%5C%2Fterminology.hl7.org%5C%2FCodeSystem%5C%2Fv2-0203%5C%22%2C%5C%22code%5C%22%3A%5C%22PLAC%5C%22%7D%5D%7D%2C%5C%22value%5C%22%3A%5C%22db91f321-928c-4a27-b892-969b5f7cc674%5C%22%7D%5D%2C%5C%22status%5C%22%3A%5C%22draft%5C%22%2C%5C%22intent%5C%22%3A%5C%22original-order%5C%22%2C%5C%22codeCodeableConcept%5C%22%3A%7B%5C%22coding%5C%22%3A%5B%7B%5C%22system%5C%22%3A%5C%22https%3A%5C%2F%5C%2Fbluebutton.cms.gov%5C%2Fresources%5C%2Fcodesystem%5C%2Fhcpcs%5C%22%2C%5C%22code%5C%22%3A%5C%22E0424%5C%22%2C%5C%22display%5C%22%3A%5C%22Stationary+Compressed+Gaseous+Oxygen+System%2C+Rental%5C%22%7D%5D%7D%2C%5C%22subject%5C%22%3A%7B%5C%22reference%5C%22%3A%5C%22Patient%5C%2Fpat013%5C%22%7D%2C%5C%22authoredOn%5C%22%3A%5C%222023-01-01T00%3A00%3A00Z%5C%22%2C%5C%22requester%5C%22%3A%7B%5C%22reference%5C%22%3A%5C%22Practitioner%5C%2Fpra-hfairchild%5C%22%7D%2C%5C%22performer%5C%22%3A%7B%5C%22reference%5C%22%3A%5C%22Practitioner%5C%2Fpra1234%5C%22%7D%2C%5C%22insurance%5C%22%3A%5B%7B%5C%22reference%5C%22%3A%5C%22Coverage%5C%2Fcov013%5C%22%7D%5D%7D%26coverage%3DCoverage%2Fcov013"
                },
                {
                    "label": "Lab Form",
                    "url": "http://localhost:3005/launch",
                    "type": "smart",
                    "appContext": "questionnaire%3Dhttp%3A%2F%2Flocalhost%3A8090%2Ffhir%2Fr4%2FQuestionnaire%2FHomeOxygenTherapyLab%26order%3D%7B%5C%22resourceType%5C%22%3A%5C%22DeviceRequest%5C%22%2C%5C%22id%5C%22%3A%5C%22devreq013%5C%22%2C%5C%22meta%5C%22%3A%7B%5C%22versionId%5C%22%3A%5C%221%5C%22%2C%5C%22lastUpdated%5C%22%3A%5C%222023-10-18T14%3A40%3A05.832%2B05%3A30%5C%22%2C%5C%22source%5C%22%3A%5C%22%23ekYCGV5ssXKvJVNp%5C%22%2C%5C%22profile%5C%22%3A%5B%5C%22http%3A%5C%2F%5C%2Fhl7.org%5C%2Ffhir%5C%2Fus%5C%2Fdavinci-crd%5C%2FR4%5C%2FStructureDefinition%5C%2Fprofile-devicerequest-r4%5C%22%5D%7D%2C%5C%22identifier%5C%22%3A%5B%7B%5C%22type%5C%22%3A%7B%5C%22coding%5C%22%3A%5B%7B%5C%22system%5C%22%3A%5C%22http%3A%5C%2F%5C%2Fterminology.hl7.org%5C%2FCodeSystem%5C%2Fv2-0203%5C%22%2C%5C%22code%5C%22%3A%5C%22PLAC%5C%22%7D%5D%7D%2C%5C%22value%5C%22%3A%5C%22db91f321-928c-4a27-b892-969b5f7cc674%5C%22%7D%5D%2C%5C%22status%5C%22%3A%5C%22draft%5C%22%2C%5C%22intent%5C%22%3A%5C%22original-order%5C%22%2C%5C%22codeCodeableConcept%5C%22%3A%7B%5C%22coding%5C%22%3A%5B%7B%5C%22system%5C%22%3A%5C%22https%3A%5C%2F%5C%2Fbluebutton.cms.gov%5C%2Fresources%5C%2Fcodesystem%5C%2Fhcpcs%5C%22%2C%5C%22code%5C%22%3A%5C%22E0424%5C%22%2C%5C%22display%5C%22%3A%5C%22Stationary+Compressed+Gaseous+Oxygen+System%2C+Rental%5C%22%7D%5D%7D%2C%5C%22subject%5C%22%3A%7B%5C%22reference%5C%22%3A%5C%22Patient%5C%2Fpat013%5C%22%7D%2C%5C%22authoredOn%5C%22%3A%5C%222023-01-01T00%3A00%3A00Z%5C%22%2C%5C%22requester%5C%22%3A%7B%5C%22reference%5C%22%3A%5C%22Practitioner%5C%2Fpra-hfairchild%5C%22%7D%2C%5C%22performer%5C%22%3A%7B%5C%22reference%5C%22%3A%5C%22Practitioner%5C%2Fpra1234%5C%22%7D%2C%5C%22insurance%5C%22%3A%5B%7B%5C%22reference%5C%22%3A%5C%22Coverage%5C%2Fcov013%5C%22%7D%5D%7D%26coverage%3DCoverage%2Fcov013"
                },
                {
                    "label": "Additional Form",
                    "url": "http://localhost:3005/launch",
                    "type": "smart",
                    "appContext": "questionnaire%3Dhttp%3A%2F%2Flocalhost%3A8090%2Ffhir%2Fr4%2FQuestionnaire%2FHomeOxygenTherapyAdditional%26order%3D%7B%5C%22resourceType%5C%22%3A%5C%22DeviceRequest%5C%22%2C%5C%22id%5C%22%3A%5C%22devreq013%5C%22%2C%5C%22meta%5C%22%3A%7B%5C%22versionId%5C%22%3A%5C%221%5C%22%2C%5C%22lastUpdated%5C%22%3A%5C%222023-10-18T14%3A40%3A05.832%2B05%3A30%5C%22%2C%5C%22source%5C%22%3A%5C%22%23ekYCGV5ssXKvJVNp%5C%22%2C%5C%22profile%5C%22%3A%5B%5C%22http%3A%5C%2F%5C%2Fhl7.org%5C%2Ffhir%5C%2Fus%5C%2Fdavinci-crd%5C%2FR4%5C%2FStructureDefinition%5C%2Fprofile-devicerequest-r4%5C%22%5D%7D%2C%5C%22identifier%5C%22%3A%5B%7B%5C%22type%5C%22%3A%7B%5C%22coding%5C%22%3A%5B%7B%5C%22system%5C%22%3A%5C%22http%3A%5C%2F%5C%2Fterminology.hl7.org%5C%2FCodeSystem%5C%2Fv2-0203%5C%22%2C%5C%22code%5C%22%3A%5C%22PLAC%5C%22%7D%5D%7D%2C%5C%22value%5C%22%3A%5C%22db91f321-928c-4a27-b892-969b5f7cc674%5C%22%7D%5D%2C%5C%22status%5C%22%3A%5C%22draft%5C%22%2C%5C%22intent%5C%22%3A%5C%22original-order%5C%22%2C%5C%22codeCodeableConcept%5C%22%3A%7B%5C%22coding%5C%22%3A%5B%7B%5C%22system%5C%22%3A%5C%22https%3A%5C%2F%5C%2Fbluebutton.cms.gov%5C%2Fresources%5C%2Fcodesystem%5C%2Fhcpcs%5C%22%2C%5C%22code%5C%22%3A%5C%22E0424%5C%22%2C%5C%22display%5C%22%3A%5C%22Stationary+Compressed+Gaseous+Oxygen+System%2C+Rental%5C%22%7D%5D%7D%2C%5C%22subject%5C%22%3A%7B%5C%22reference%5C%22%3A%5C%22Patient%5C%2Fpat013%5C%22%7D%2C%5C%22authoredOn%5C%22%3A%5C%222023-01-01T00%3A00%3A00Z%5C%22%2C%5C%22requester%5C%22%3A%7B%5C%22reference%5C%22%3A%5C%22Practitioner%5C%2Fpra-hfairchild%5C%22%7D%2C%5C%22performer%5C%22%3A%7B%5C%22reference%5C%22%3A%5C%22Practitioner%5C%2Fpra1234%5C%22%7D%2C%5C%22insurance%5C%22%3A%5B%7B%5C%22reference%5C%22%3A%5C%22Coverage%5C%2Fcov013%5C%22%7D%5D%7D%26coverage%3DCoverage%2Fcov013"
                }
            ],
            "extension": {
                "davinci-associated-resource": [
                    "http://localhost:8080/test-ehr/r4/DeviceRequest/devreq013/_history/1"
                ]
            }
        }
    ]