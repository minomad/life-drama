import { number, oneOfType, string } from 'prop-types';
import pb from './pocketbase';

export function usePocketData(collection) {
  const defaultOptions = {
    sort: '-created',
  };

  const getListData = (options = {}) => pb.collection(collection).getFullList({...defaultOptions, ...options});

  const getIdData = (id, options = {}) => pb.collection(collection).getOne(id, options);

  const createData = (data) => pb.collection(collection).create(data);

  const updateData = (id, data) => pb.collection(collection).create(id, data);

  const deleteData = (id) => pb.collection(collection).delete(id);

  const signIn = ({ username, password }) => pb.collection('users').authWithPassword(username, password);

  const signOut = () => pb.authStore.clear();

  return { getListData, getIdData, createData, updateData, deleteData, signIn, signOut };
}

usePocketData.propTypes = {
  collection: oneOfType([string, number]).isRequired,
};
