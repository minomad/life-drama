import { number, oneOfType, string } from 'prop-types';
import pb from './pocketbase';

export function usePocketData(collection) {
  const defaultOptions = {
    sort: '-created',
  };
  
  function getListData(options = {}) {
    return pb.collection(collection).getFullList({ ...defaultOptions, ...options });
  }
  function getIdData(id, options = {}) {
    return pb.collection(collection).getOne(id, options);
  }

  function createData(data) {
    return pb.collection(collection).create(data);
  }
  function updateData(id, data) {
    return pb.collection(collection).updateData(id, data);
  }

  function deleteData(id) {
    return pb.collection(collection).delete(id);
  }

  function signIn({ username, password }) {
    return pb.collection('users').authWithPassword(username, password);
  }

  function signOut() {
    return pb.authStore.clear();
  }

  return { getListData, getIdData, createData, updateData, deleteData, signIn, signOut };
}

usePocketData.propTypes = {
  collection: oneOfType([string, number]).isRequired,
};
