export default (req, res) => {
  let messages = [
    {
      id: 1,
      msgTitle: "One",
      msgDate: "2020-02-17T17:17:33.006Z",
      msgBody: "Message1",
      sign: "M1"
    },
    {
      id: 2,
      msgTitle: "Two",
      msgDate: "2004-03-13T19:14:38.036Z",
      msgBody: "Message2",
      sign: "M2"

    },
    {
      id: 3,
      msgTitle: "Three",
      msgDate: "2008-04-17T18:09:33.106Z",
      msgBody: "Message3",
      sign: "M3"

    },
    {
      id: 4,
      msgTitle: "Four",
      msgDate: "2019-05-13T10:11:12.056Z",
      msgBody: "message4",
      sign: "M4"
    },
    {
      id: 5,
      msgTitle: "Five",
      msgDate: "2018-06-18T20:16:33.006Z",
      msgBody: "Message5",
      sign: "M5"

    },
    {
      id: 6,
      msgTitle: "Six",
      msgDate: "2011-09-18T12:15:45.216Z",
      msgBody: "Message6",
      sign: "M6"
    },
    {
      id: 7,
      msgTitle: "Seven",
      msgDate: "2012-08-11",
      msgBody: "Message7T22:17:30.006Z",
      sign: "M7"
    },
    {
      id: 8,
      msgTitle: "Eight",
      msgDate: "2016-05-10T15:11:22.006Z",
      msgBody: "Message8",
      sign: "M8"
    },
    {
      id: 9,
      msgTitle: "Nine",
      msgDate: "2018-07-08T18:17:39.016Z",
      msgBody: "Message9",
      sign: "M9"

    },
    {
      id: 10,
      msgTitle: "Ten",
      msgDate: "2017-03-19T17:17:33.006Z",
      msgBody: "Message10",
      sign: "M10"
    },
  ];

  if (req.method === "GET") {
    res.statusCode = 200;
    res.json(messages);
  }

};
