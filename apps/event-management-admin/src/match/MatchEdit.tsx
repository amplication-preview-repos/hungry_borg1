import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const MatchEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <DateTimeInput label="date" source="date" />
        <TextInput label="location" source="location" />
        <TextInput label="matchName" source="matchName" />
        <TextInput label="players" multiline source="players" />
        <DateTimeInput label="time" source="time" />
      </SimpleForm>
    </Edit>
  );
};
