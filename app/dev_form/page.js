import React from "react";
import CreateQuestionForm from "./_dev_components/CreateQuestionForm";
import CreateTestForm from "./_dev_components/CreateTestForm";
import CreateStudentForm from "./_dev_components/CreateStudentForm";
import CreateAttemptForm from "./_dev_components/CreateAttemptForm";
import Link from "next/link";

const DevFormPage = async () => {
  return (
    <div>
      <CreateQuestionForm />
      <hr />
      <CreateTestForm />
      <hr />
      <CreateStudentForm />
      <hr />
      <CreateAttemptForm />
      <hr />
      <Link href="/user_dashboard/marks">Back to marks</Link>
    </div>
  );
};

export default DevFormPage;
