import { number, oneOfType, string } from 'prop-types';
import pb from './pocketbase';

export function usePocketData(collection) {
  const defulatOptions = {
    sort: '-created',
  };

  const getListData = (options = {}) => pb.collection(collection).getFullList({ ...defulatOptions }, options);
  //options => filter,sort,expand,fields

  const getIdData = (id, options = {}) => pb.collection(collection).getOne(id, options);
  //options => expand,fields

  const createData = (data) => pb.collection(collection).create(data);

  const updateData = (id, data) => pb.collection(collection).create(id, data);

  const deleteData = (id) => pb.collection(collection).delete(id);

  const userLogin = ({ username, password }) => pb.collection('users').authWithPassword(username, password);

  return { getListData, getIdData, createData, updateData, deleteData, userLogin };
}

usePocketData.propTypes = {
  collection: oneOfType([string, number]).isRequired,
};
