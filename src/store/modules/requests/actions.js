export default {
  async registerRequest(context, request) {
    // const requestData = {
    //   name: data.name,
    //   text: data.text,
    //   gitHubUrl: data.url,
    // };

    const response = await fetch(
      `https://todo-list-46a06-default-rtdb.europe-west1.firebasedatabase.app/${request.name}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(request),
      }
    );
    if (!response.ok) {
      console.log('crash!');
    } else {
      console.log('all good!'.context);
    }
  },
};
