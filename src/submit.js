import data from './data';

const submitData = [];
for (let i = 0; i < data.length; i += 1) {
  submitData.push({ id: i, select: null });
}

export default submitData;
