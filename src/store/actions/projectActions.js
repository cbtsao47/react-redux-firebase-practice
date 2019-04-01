export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async calls to database here
    const firestore = getFirestore();
    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: "Net",
        authorLastName: "Ninja",
        authorId: 123,
        createdAt: new Date()
      })
      .then(res => {
        dispatch({ type: "CREATE_PROJECT", project });
      })
      .catch(err => {
        dispatch({ type: "CREATE_PROJECT_ERROR", err });
      });
  };
};
