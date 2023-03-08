import { FC } from "react";
import { UserProfile } from "../types/userProfile";

// ここで別ファイルで定義した型をuserにぶちこむ
type Props = {
  user: UserProfile;
};

type FlexDirection = "column";

type Styles = {
  display: string;
  flexDirection: FlexDirection;
  justifyContent: string;
  borderRadius: string;
  boxShadow: string;
  backgroundColor: string;
  padding: string;
  maxWidth: string;
  width: string;
  margin: string;
};

export const UserCard: FC<Props> = ({ user }) => {
  const styles: Styles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "8px",
    boxShadow: "13px 8px 1px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#ccc",
    padding: "0 16px",
    maxWidth: "300px",
    width: "100%",
    margin: "8px auto",
  };

  return (
    <div style={styles}>
      <dl>
        <dt>名前</dt>
        <dd>{user.name}</dd>
        <dt>メール</dt>
        <dd>{user.email}</dd>
        <dt>住所</dt>
        <dd>{user.address}</dd>
      </dl>
    </div>
  );
};
