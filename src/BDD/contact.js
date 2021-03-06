import { AsyncStorage } from 'react-native';

import { keyStorageContact } from '../Util';

/**
* permet de récupérer tous les contacts
*
* return tous les objects contacts sous forme d'une string encoder en Json
*/
export async function getAllContactsFromBDD()
{
  try
  {
    const contacts = await AsyncStorage.getItem(keyStorageContact);
    if (contacts !== null)
    {
      return Promise.resolve(JSON.parse(contacts));
    }
    return false;
  }
  catch (error)
  {
    return Promise.reject(error);
  }
}

/**
* permet l'enregistrement de tous les conctacts
*/
export async function saveAllContactsToBDD(contacts)
{
  try
  {
    await AsyncStorage.setItem(keyStorageContact, JSON.stringify(contacts));
    getAllContactsFromBDD();
    return true;
  }
  catch (error)
  {
    return Promise.reject(error);
  }
}

/**
* permet l'enregistrement d'un conctact
*/
export async function saveContactToBDD(newContact)
{
  getAllContactsFromBDD().then((contacts) =>
  {
    contacts.push(newContact);
    saveAllContactsToBDD(contacts);
  });
}

/**
* permet de supprimer tous les contacts
*/
export async function deleteAllContactsToBDD()
{
  try
  {
    await AsyncStorage.removeItem(keyStorageContact);
    return true;
  }
  catch (error)
  {
    return Promise.reject(error);
  }
}

/**
* permet de supprimer un contact précis
*/
export async function deleteContactToBDD(phoneNumber)
{
  let i = 0;
  getAllContactsFromBDD().then((contacts) =>
  {
    for (i = 0; i < contacts.length; i += 1)
    {
      if (contacts[i].phoneNumber.indexOf(phoneNumber) > -1)
      {
        contacts.splice(i, 1);
        saveAllContactsToBDD(contacts);
        break;
      }
    }
  });
}

/**
* permet de modifier un concact
*/
export async function editContactToBDD(phoneNumber, contactEdit)
{
  let i = 0;
  getAllContactsFromBDD().then((contacts) =>
  {
    const contact = contacts;
    for (i = 0; i < contact.length; i += 1)
    {
      if (contact[i].phoneNumber.indexOf(phoneNumber) > -1)
      {
        contact[i] = contactEdit;
        saveAllContactsToBDD(contact);
        break;
      }
    }
  });
}
