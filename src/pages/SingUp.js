import Form from "../components/Form";
import Lllustration from "../components/Lllustration";
import TextInput from "../components/TextInput";
import classes from "../styles/singup.module.css";
export default function SingUp() {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Lllustration />
        <Form className={`${classes.singup}`}>
          <TextInput type="text" placeholder="Enter name" icon="person" />

          <TextInput
            type="text"
            placeholder="Enter email"
            icon="alternate_email"
          />
          <TextInput type="password" placeholder="Enter password" icon="lock" />
          <TextInput
            type="password"
            placeholder="Confirm password"
            icon="lock_clock"
          />
        </Form>
      </div>
    </>
  );
}
