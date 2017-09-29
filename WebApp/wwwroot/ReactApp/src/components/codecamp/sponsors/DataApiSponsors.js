class DataApiSponsors {
  constructor(rawData) {
    this.rawData = rawData;
  }

  mapIntoObject(arr) {
    const acc = [];
    for (let i = 0; i < arr.length; i++) {
      // var attendeesId = arr[i].attendeesId;
      acc.push(arr[i]);
    }
    return acc;
    // return arr.reduce((acc, curr) => {
    //     acc[curr.attendeesId] = curr;
    //     return acc;
    // });
  }

  getSponsors() {
    return this.mapIntoObject(this.rawData);
  }
}

export default DataApiSponsors;
