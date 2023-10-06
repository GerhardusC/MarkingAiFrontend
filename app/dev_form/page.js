import React from "react";
import CreateQuestionForm from "./_dev_components/CreateQuestionForm";
import CreateTestForm from "./_dev_components/CreateTestForm";
import CreateStudentForm from "./_dev_components/CreateStudentForm";

const DevFormPage = async () => {
  return (
    <div>
      <CreateQuestionForm />
      <hr />
      <CreateTestForm />
      <hr />
      <CreateStudentForm />
    </div>
  );
};

export default DevFormPage;
