import Card from "@mui/material/Card";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";

import img1 from "../assets/images/LevelTest/1.png";
import img2 from "../assets/images/LevelTest/2.png";
import img3 from "../assets/images/LevelTest/3.png";
import img4 from "../assets/images/LevelTest/4.png";

function LevelTest(props) {
  const navigate = useNavigate();
  const [score, setScore] = useState(0);
  const [select, setSelect] = useState([]);
  const [prohibited, setProhibited] = useState([]);
  const [open, setOpen] = useState(false);
  const [txt, settxt] = useState("");
  const formRef = useRef();

  const list = [
    {
      label: "Q1: Is this a polygon?",
      img: img1,
      answer: "NO",
      btns: ["YES", "NO"],
    },
    {
      label: "Q2: What is the perimeter of the rectangle?",
      img: img2,
      answer: "42 metres",
      btns: ["41 metres", "42 metres", "43 metres", "44 metres"],
    },
    {
      label: "Q3: What is the area?",
      img: img3,
      answer: "225 square metres",
      btns: [
        "225 square metres",
        "215 square metres",
        "245 square metres",
        "255 square metres",
      ],
    },
    {
      label: "Q4: What is the volume of this object?",
      img: img4,
      answer: "9 cubic units",
      btns: [
        "3 cubic units",
        "9 cubic units",
        "7 cubic units",
        "8 cubic units",
      ],
    },
  ];
  return (
    <div>
      <h1>Level Test </h1>
      <div
        style={{
          position: "fixed",
          zIndex: "99",
          top: "150px",
          left: "20px",
          background: "#000",
          color: "#fff",
          width: "200px",
          height: "100px",
          textAlign: "center",
          lineHeight: "100px",
          borderRadius: "10px",
        }}
      >
        Your accuracy：{score} %
      </div>
      <form ref={formRef}>
        {list.map((item, index) => {
          return (
            <Card style={{ marginTop: "15px" }} key={index}>
              <h3>{item.label}</h3>
              <img style={{ width: "300px" }} src={item.img} />
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {item.btns.map((i, e) => {
                  return (
                    <FormControlLabel
                      disabled={prohibited[index]}
                      key={e}
                      value={i}
                      control={<Radio />}
                      label={i}
                      onChange={() => {
                        setProhibited((v) => {
                          let a = [...v];
                          a[index] = true;
                          return a;
                        });
                        let arr = select;
                        arr[index] = i;
                        setSelect(arr);
                        let num = 0;
                        list.map((item, index) => {
                          if (item.answer === arr[index]) {
                            num++;
                          }
                        });
                        const fen = parseInt((num / list.length) * 100);
                        setScore(fen);
                        let type = arr.includes(undefined);
                        if (type || arr.length !== list.length) {
                          return;
                        }

                        if (100 >=fen >= 90) {
                          settxt("You can learn from advanced level course");
                          setOpen(true);
                          return;
                        }
                        if (90 >fen >= 75) {
                          settxt("You can learn from the medium level course.");
                          setOpen(true);
                          return;
                        }
                        if (fen < 75) {
                          settxt("You should learn from easy level course");
                          setOpen(true);
                          return;
                        }
                      }}
                    />
                  );
                })}
              </RadioGroup>
            </Card>
          );
        })}
      </form>
      <Dialog
        open={open}
        keepMounted
        onClose={() => {}}
        aria-describedby="alert-dialog-slide-description"
      >
        <div style={{ width: "300px", height: "200", padding: "10px" }}>
          <p>{txt}</p>
          <Button
            onClick={() => {
              navigate("/learn");
            }}
          >
            Go learn
          </Button>
        </div>
      </Dialog>
    </div>
  );
}

export default LevelTest;
