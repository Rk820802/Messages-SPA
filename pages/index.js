import { useState, useEffect } from "react";
import styles from "../styles/Home.module.scss";
export default function Home() {
  const [messages, setMessages] = useState();
  let [newMessage, setNewMessage] = useState([{ id: '',
                                                msgTitle: '',
                                                msgBody: '',
                                                msgDate: new Date(),
                                                sign: ''
                                              }]);

  useEffect(async () => {
    const response = await fetch("/api/localApi");
    setMessages(await response.json());
  }, []);

  const sortNames = () => {
    let newTitles = [...messages];
    newTitles.sort((a, b) => {
      let fa = a.msgTitle.toLowerCase(),
        fb = b.msgTitle.toLowerCase();

      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    });
    setMessages([...newTitles]);
  }

  const sortDates = () => {
    let newDates = [...messages];
    newDates.sort((a, b) => {
      let fa = a.msgDate,
        fb = b.msgDate;

      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    });
    setMessages([...newDates]);
  }

  const handleChange = e => {
    e.persist();
    setNewMessage(prevMsg => ({ ...prevMsg, [e.target.name]: e.target.value }));
  }

  let save = (e) => {
    e.preventDefault();
    setMessages([...messages, newMessage]);
    setNewMessage(" ");
    document.getElementById("id").value = '';
    document.getElementById("msgTitle").value = ''
    document.getElementById("msgBody").value = '';
    document.getElementById("msgDate").value = new Date();
    document.getElementById("sign").value = '';
  }

  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>
              <button
                className={styles.button}
                type="button"
                onClick={() => sortDates()}
              >
                Date
            </button></th>
            <th>
              <button
                className={styles.button}
                type="button"
                onClick={() => sortNames()}
              >
                Messsage Title and Details
            </button>
            </th>
          </tr>
        </thead>
        {messages ?
          messages.map((item) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>
                  {new Date(item.msgDate).toLocaleDateString()}
                </td>
                <td><h3>{item.msgTitle}</h3>
                  <p>
                    Body of the message:--  {item.msgBody}<br />
                    Time:--  {new Date(item.msgDate).toLocaleTimeString()}<br />
                    Signature:--  {item.sign}
                  </p>
                </td>
              </tr>
            );
          })
          : "Loading..."}
      </table>
      <div className={styles.div}>
        
        <form method="post" onSubmit={save} id="newMessage">
        <h3>New Message</h3>
          <label for="id">Message Id</label>
          <input className={styles.input} type="text" id="id" name="id" value={newMessage.id} placeholder="Enter the message id" required onChange={handleChange} />

          <label for="msgTitle">Message Title</label>
          <input className={styles.input} type="text" id="msgTitle" name="msgTitle" value={newMessage.msgTitle} placeholder="Title of the message" required onChange={handleChange} />

          <label for="msgBody">Message Body</label>
          <input className={styles.input} type="text" id="msgBody" name="msgBody" value={newMessage.msgBody} placeholder="Body of the message" required onChange={handleChange} />

          <label for="msgdate">Enter the Date</label>
          <input className={styles.input} type="date" id="msgDate" name="msgDate" value={newMessage.msgDate} required onChange={handleChange} ></input>

          <label for="sign">Enter the Signature</label>
          <input className={styles.input} type="text" id="sign" name="sign" value={newMessage.sign}  placeholder="Enter the signature" required onChange={handleChange} />

          <input className={styles.input} type="submit" value="Submit" />

        </form>
      </div>
    </div>
  );
}

