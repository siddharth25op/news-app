import React from "react";
import { Button, Card } from "keep-react";

const Newsitem = (props) => {
  let { title, description, imageURL, newsURL, date, author } = props;
  return (
    <div className="my-3 center">
      <Card
        className="max-w-xs overflow-hidden rounded-md card-height"
        imgSrc={
          !imageURL
            ? "https://s.yimg.com/uu/api/res/1.2/zf3H46PN6rSo4XVCfzR8lQ--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2024-01/25166150-b6df-11ee-bb7e-c69e18a6f010.cf.jpg"
            : imageURL
        }
        imgSize="md"
      >
        <Card.Container className="p-6">
          <Card.Container className="flex items-center justify-between">
            <Card.Description>
              By {!author ? "Anonymous" : author} on{" "}
              {new Date(date).toUTCString()}
            </Card.Description>
          </Card.Container>
          <Card.Container className="my-3">
            <Card.Title>
              {!title ? "Click here to read more" : title.slice(0, 30)}
            </Card.Title>
            <Card.Description>
              {!description ? "Click to read more" : description.slice(0, 50)}
            </Card.Description>
          </Card.Container>
          <Card.Container className="flex items-center justify-start gap-5">
            <Button href={newsURL} target="_blank" size="sm" type="outlineGray">
              Read More
            </Button>
          </Card.Container>
        </Card.Container>
      </Card>
    </div>
  );
};

export default Newsitem;
