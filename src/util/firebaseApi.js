/* eslint-disable no-plusplus */
import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  writeBatch,
} from 'firebase/firestore';
import db from './firebase';

export const getQuestions = async () => {
  const collectionRef = collection(db, 'questions');
  const queryString = query(collectionRef, orderBy('id'));
  const querySnapshot = await getDocs(queryString);
  const temp = [];
  querySnapshot.forEach(item => {
    temp.push(item.data());
  });
  return temp;
};

export const postQuestions = async data => {
  try {
    const prev = await getQuestions();
    const updateData = prev.map((item, idx) => {
      const [options] = [item.options];
      options[data[idx]]++;
      return options;
    });

    const batch = writeBatch(db);
    for (let idx = 1; idx <= updateData.length; idx++) {
      batch.update(doc(db, `questions`, `question${idx}`), {
        options: updateData[idx - 1],
      });
    }
    await batch.commit();
    return {};
  } catch (error) {
    return {
      error,
    };
  }
};
