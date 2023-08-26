import { useState } from 'react';
import pb from './pocketbase';

export function usePocketData({ collection }) {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState('pending');

  async function getList() {
    try {
      setStatus('loading');
      const responseList = await pb.collection(collection).getFullList({ sort: '-created' });
      setData(responseList);
      setStatus('success');
    } catch (error) {
      setStatus('error');
    }
  }

  async function getIdData(id) {
    try {
      setStatus('loading');
      const responseId = await pb.collection(collection).getOne(id);
      setData(responseId);
      setStatus('success');
    } catch (error) {
      setStatus('error');
    }
  }

  async function createData(data) {
    try {
      const responseCreate = await pb.collection(collection).create(data);
      setData(responseCreate);
      setStatus('success');
    } catch (error) {
      setStatus('error');
    }
  }

  async function deleteData(id) {
    try {
      const responseDelete = await pb.collection(collection).delete(id);
      setData(responseDelete);
      setStatus('success');
    } catch (error) {
      setStatus('error');
    }
  }

  return {
    data,
    status,
    getList,
    getIdData,
    createData,
    deleteData,
  };
}
