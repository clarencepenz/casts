import React from "react";
import { Avatar, AvatarImage } from "../ui/avatar";

type ImageProp = {
  image: string;
};

const CustomAvatar = ({ image }: ImageProp) => {
  return (
    <Avatar>
      <AvatarImage src={image} alt="avatar"  className="object-cover"/>
      <AvatarImage src="/fallback.jpeg" alt="avatar"  className="object-cover"/>
    </Avatar>
  );
};

export default CustomAvatar;
