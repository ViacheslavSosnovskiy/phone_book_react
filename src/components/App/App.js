import { Component } from "react";
import { nanoid } from "nanoid";

import Form from "../ContactForm";
import ContactList from "../ContactList";
import Filter from "../Filter";

export default class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    ],
    filter: '',
  }

  getContactInfo = data => {
    const {contacts} = this.state
    const newContact = {
      id: nanoid(),
      ...data,
    }
    if (contacts.find((contact) => (
      contact.name.toLowerCase() === newContact.name.toLowerCase()
    ))) {
      alert("This contact is already exist")
      return;
    }
    this.setState((prev) => ({
      contacts: [newContact, ...prev.contacts]
    }))
  }

  deleteContact = id => {
    this.setState((prev) => ({
      contacts: prev.contacts.filter((contact) => contact.id !== id)
    }))
  }

  handleFilterChange = ({target: {value}}) => {
    this.setState({
      filter: value
    })
  }

  getVisibleContacts = () => {
    const {contacts, filter} = this.state
    return contacts.filter((contact) => (
        contact.name.toLowerCase().includes(filter.toLowerCase())
    ))
  }

  render() {
    const visibleContacts = this.getVisibleContacts()
    const {filter} = this.state
    return (
      <>
        <Form getContactInfo={this.getContactInfo}/>
        <Filter filter={filter} handleFilterChange={this.handleFilterChange}/>
        <ContactList contacts={visibleContacts} deleteContact={this.deleteContact}/>
      </>
    )
  }
}