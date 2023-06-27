export default {
  async registerRequest(context, request) {
    // const requestData = {
    //   name: data.name,
    //   text: data.text,
    //   gitHubUrl: data.url,
    // };

    const response = await fetch(
      `https://todo-list-46a06-default-rtdb.europe-west1.firebasedatabase.app/requests/${request.name}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(request),
      }
    );
    if (!response.ok) {
      console.log('crash!');
    } else {
      console.log('all good!', context);
    }
  },
  async getDataRequests(context) {
    const response = await fetch(
      `https://todo-list-46a06-default-rtdb.europe-west1.firebasedatabase.app/requests/.json`
    );
    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch!');
      throw error;
    }
    context.state.requestsList = responseData;
    //TODO: добавить очередность отзывов, чтобы более новые были сверху!
  },
};
