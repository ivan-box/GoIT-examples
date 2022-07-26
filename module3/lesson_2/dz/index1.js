let message1 = {
  update_id: 933058588,
  message: {
    message_id: 1122088,
    from: {
      id: 433982686,
      is_bot: false,
      first_name: "Volodymyr",
      username: "Pikimell",
      language_code: "uk",
    },
    chat: {
      id: 433982686,
      first_name: "Volodymyr",
      username: "Pikimell",
      type: "public",
    },
    date: 1658835452,
    text: "public1",
  },
};

let message2 = {
  update_id: 933058588,
  message: {
    message_id: 1122088,
    from: {
      id: 433982686,
      is_bot: false,
      first_name: "Volodymyr",
      username: "Pikimell",
      language_code: "uk",
    },
    chat: {
      id: 433982686,
      first_name: "Volodymyr",
      username: "Pikimell",
      type: "private",
    },
    date: 1658835452,
    text: "hhawdawd",
  },
};

let message3 = {
  update_id: 933058588,
  message: {
    message_id: 1122088,
    from: {
      id: 433982686,
      is_bot: false,
      first_name: "Volodymyr",
      username: "Pikimell",
      language_code: "uk",
    },
    chat: {
      id: 433982686,
      first_name: "Volodymyr",
      username: "Pikimell",
      type: "public",
    },
    date: 1658835452,
    text: "public2",
  },
};

let message4 = {
  update_id: 933058588,
  message: {
    message_id: 1122088,
    from: {
      id: 433982686,
      is_bot: false,
      first_name: "Volodymyr",
      username: "Pikimell",
      language_code: "uk",
    },
    chat: {
      id: 433982686,
      first_name: "Volodymyr",
      username: "Pikimell",
      type: "private",
    },
    date: 1658835452,
    text: "awdadsrgdawd",
  },
};

let messages = [message1, message2, message3, message4];

function getMessages(messages) {
  let result = [];
  for (let message of messages) {
    let {
      message: { chat },
    } = message;
    let { type } = chat;

    if (type === "public") {
      let {
        message: { text },
      } = message;

      result.push(text);
    }
  }

  return result;
}

console.log(getMessages(messages));
