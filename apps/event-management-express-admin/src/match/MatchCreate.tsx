import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const MatchCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <DateTimeInput label="date" source="date" />
        <TextInput label="location" source="location" />
        <TextInput label="matchName" source="matchName" />
        <TextInput label="players" multiline source="players" />
        <DateTimeInput label="time" source="time" />
      </SimpleForm>
    </Create>
  );
};
