import React, {useState, useEffect, useCallback} from "react";
import {TextForm} from './index';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const  FormDialog = () => {
  const [open, setOpen] = useState(false);
  const [name, setName]  = useState("");
  const [email, setEmail]  = useState("");
  const [description, setDescription]  = useState("");

  const inputName = useCallback((event) => {
    setName(event.target.value)
  }, [setName])

  const inputEmail = useCallback((event) => {
    setEmail(event.target.value)
  }, [setEmail])

  const inputDescription = useCallback((event) => {
    setDescription(event.target.value)
  }, [setDescription])

  const validateEmailFormat = (email) => {
    const regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    return regex.test(email)
  }

  const validateRequiredInput = (...args) => {
    let isBlank = false;
    for (let i = 0; i < args.length; i=(i+1)|0) {
        if (args[i] === "") {
            isBlank = true;
        }
    }
    return isBlank
  };

  const submitForm = () => {
    const isBlank = validateRequiredInput(name, email, description)
    const isValidEmail = validateEmailFormat(email)


    if (isBlank) {
      alert('必須入力欄が空白です。')
      return false
    } else if (!isValidEmail) {
      alert('メールアドレスの書式が異なります。')
      return false
    } else {
    const payload = {
      text: 'お問い合わせがありました\n'
        + 'お名前: ' + name + '\n'
        + 'メールアドレス: ' + email + '\n'
        + '【問い合わせ内容】\n' + description
    }

     // fetchメソッドでフォームの内容をSlackのIncoming Webhook URL に送信する
     const url = 'https://hooks.slack.com/services/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';
            
     fetch(url, {
         method: 'POST',
         body: JSON.stringify(payload)
     }).then(() => {
         alert('送信が完了しました。追ってご連絡いたします🙌');
         setName("")
         setEmail("")
         setDescription("")
         return handleClose();
     })
    }
  }
  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <p className="contact">
      <a 
        variant="outlined" 
        onClick={handleClickOpen}
        >
        Contact
      </a>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Contact</DialogTitle>
        <DialogContent>
          <DialogContentText>
            こちらからお問い合わせできます。仕事の依頼や何かわからないことがありましたらどうぞ遠慮なくご利用ください。こちらのテキストは私のSlackにつながっています。頂いた内容は外部への情報漏えいに努め、細心の注意を払い取り扱います。
          </DialogContentText>
          <TextForm
            label={"Name"}
            type={"text"}
            row={1}
            multiline={false}
            onChange={inputName}
            value={name}
          />
          <TextForm
            label={"Email Address"}
            type={"email"}
            row={1}
            multiline={false}
            onChange={inputEmail}
            value={email}
          />
          <TextForm
            label={"Contact Form"}
            type={"text"}
            row={5}
            multiline={true}
            onChange={inputDescription}
            value={description}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>キャンセル</Button>
          <Button onClick={submitForm}>送信</Button>
        </DialogActions>
      </Dialog>
    </p>
  );
}

export default FormDialog;