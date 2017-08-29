import React, { Component, PropTypes } from 'react';
import { Container, Header, Item, Input, Icon } from 'native-base';
import _ from 'lodash';

export default class SearchBar extends Component
{
  constructor(props)
  {
    super(props);
    this.onCurrentSearchChange = this.onCurrentSearchChange.bind(this);
    this.state = { listContacts: props.arrayContacts };
  }

  onCurrentSearchChange(text)
  {
    this.props.onChange((item) =>
    {
      const Surname = item.firstName.toLowerCase();
      const Name = item.lastName.toLowerCase();
      return ((Surname.indexOf(text.toLowerCase()) > -1)
      || (Name.indexOf(text.toLowerCase()) > -1)
      || (item.phone.indexOf(text) > -1));
    });
  }

  render()
  {
    return (
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input
              placeholder="Search"
              onChangeText={text => this.onCurrentSearchChange(text)}
            />
            <Icon name="ios-people" />
          </Item>
        </Header>
      </Container>
    );
  }
}

SearchBar.propTypes = {
  arrayContacts: PropTypes.objectOf(PropTypes.any).isRequired,
  onChange: PropTypes.func.isRequired,
};