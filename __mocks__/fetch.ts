export default function() {
  return Promise.resolve({
    json: () =>
      Promise.resolve({
        // mock api data with data > children > objects
        data: {
          children: [
            {
              id: 0,
              data: {
                name: "t3_dozu5d"
              }
            },
            {
              id: 1,
              data: {
                name: "t3_dozu73"
              }
            }
          ]
        }
      })
  });
}
