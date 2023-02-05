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
  // questions 컬렉션이 가진  doc를 전부 가진 객체반환
  const queryString = query(collectionRef, orderBy('id'));
  const querySnapshot = await getDocs(queryString);
  // forEach 문을 사용해 각 문서(question1~20)이 가진 요소를 확인 가능
  const temp = [];
  querySnapshot.forEach(item => {
    // map 메서드 사용이 불가능 합니다.
    temp.push(item.data());
  });
  return temp;
};

export const postQuestions = async data => {
  const prev = await getQuestions();
  const updateData = prev.map((item, idx) => {
    const [options] = [item.options];
    options[data[idx]]++;
    return options;
  });

  const batch = writeBatch(db);
  for (let idx = 1; idx <= 20; idx++) {
    batch.update(doc(db, `questions`, `question${idx}`), {
      options: updateData[idx - 1],
    });
  }
  await batch.commit();
};
