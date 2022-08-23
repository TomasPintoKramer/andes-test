const { doc, writeBatch, collection } = require("firebase/firestore");
const db = require("./client");
const data = require("../../utils/data");

export default seedearla = async (req, res) => {
  try {
    const batch = await writeBatch(db);
    await data.forEach((documento) => {
      const docRef = doc(collection(db, "date-ventas")); //automatically generate unique id
      batch.set(docRef, documento);
    });
    await batch.commit();
  } catch (error) {
    console.log(error);
  }
};
