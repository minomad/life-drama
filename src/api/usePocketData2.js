import { number, oneOfType, string } from 'prop-types';
import pb from './pocketbase';

export function usePocketData(collection) {
  const defulatOptions = {
    sort: '-created',
  };

  function getListData(options = {}) {
    return pb.collection(collection).getFullList(defulatOptions, options);
  }
  function getIdData(id, options = {}) {
    return pb.collection(collection).getOne(id, options);
  }

  function createData(data) {
    return pb.collection(collection).create(data);
  }
  function updateData(id, data) {
    return pb.collection(collection).create(id, data);
  }

  function deleteData(id) {
    return pb.collection(collection).create(id);
  }

  function userLogin({ username, password }) {
    return pb.collection('users').authWithPassword(username, password);
  }

  return { getListData, getIdData, createData, updateData, deleteData, userLogin };
}

usePocketData.propTypes = {
  collection: oneOfType([string, number]).isRequired,
};
