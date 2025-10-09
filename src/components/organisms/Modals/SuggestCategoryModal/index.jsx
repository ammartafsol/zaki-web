import Input from "@/components/atoms/Input/Input";
import { suggestCategoryFormValues } from "@/formik/initialValues";
import { SuggestCategoryFormSchema } from "@/formik/schema";
import { useFormik } from "formik";
import { Col, Container, Row } from "react-bootstrap";
import ModalSkeleton from "../ModalSkeleton/ModalSkeleton";
import classes from "./SuggestCategoryModal.module.css";
import Button from "@/components/atoms/Button";

export default function SuggestCategoryModal({ show, setShow }) {
  const form = useFormik({
    initialValues: suggestCategoryFormValues,
    validationSchema: SuggestCategoryFormSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log(form.errors);

  return (
    <ModalSkeleton
      variant="primary"
      size="lg"
      show={show}
      setShow={setShow}
      heading="Suggest category"
      showCloseIcon={true}
      footerData={
        <div className={classes.footerContainer}>
          <Button
            label="Cancel"
            variant="secondary-outline"
            onClick={() => setShow(false)}
            className={classes.cancelButton}
          />
          <Button
            label="Request Category"
            variant="secondary"
            onClick={() => form.handleSubmit()}
            className={classes.addReviewButton}
          />
        </div>
      }
    >
      <Container fluid>
        <Row className={classes.rowGap}>
          <Col md={12}>
            <Input
              label="Category Name"
              placeholder="Enter category name"
              value={form.values.categoryName}
              setValue={(val) => form.setFieldValue("categoryName", val)}
              error={form.touched.categoryName && form.errors.categoryName}
            />
          </Col>
        </Row>
      </Container>
    </ModalSkeleton>
  );
}
