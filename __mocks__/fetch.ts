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
                url:
                  "https://b.thumbs.redditmedia.com/6ZjU5BCa0RlKD5LOOTPMoCFZAsoMmO3JMcpuVn66EPs.jpg",
                title: "bob",
                name: "t3_dozu5d"
              }
            },
            {
              id: 1,
              data: {
                url:
                  "https://b.thumbs.redditmedia.com/6ZjU5BCa0RlKD5LOOTPMoCFZAsoMmO3JMcpuVn66EPs.jpg",
                title: "john",
                name: "t3_dozu73"
              }
            }
          ]
        }
      })
  });
}
