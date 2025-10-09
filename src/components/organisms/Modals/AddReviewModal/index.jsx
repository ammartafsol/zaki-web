import Input from "@/components/atoms/Input/Input";
import { addReviewFormValues } from "@/formik/initialValues";
import { AddReviewFormSchema } from "@/formik/schema";
import { useFormik } from "formik";
import { Col, Container, Row } from "react-bootstrap";
import ModalSkeleton from "../ModalSkeleton/ModalSkeleton";
import classes from "./AddReviewModal.module.css";
import Button from "@/components/atoms/Button";
import TextArea from "@/components/atoms/TextArea/TextArea";
import Rating from "react-rating";
import { FaStar } from "react-icons/fa";
import { GoStar, GoStarFill } from "react-icons/go";

export default function AddReviewModal({ show, setShow }) {
  const form = useFormik({
    initialValues: addReviewFormValues,
    validationSchema: AddReviewFormSchema,
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
      heading="Give  Review"
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
            label="Submit"
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
            <div className={classes.ratingContainer}>
              <label className={classes.ratingLabel}>Overall Rating</label>
              <Rating
                initialRating={form.values.rating}
                emptySymbol={
                  <GoStar color="#e4e5e9" className={classes.star} size={20} />
                }
                fullSymbol={
                  <GoStarFill
                    color="#024757"
                    className={classes.ratingStar}
                    size={20}
                  />
                }
                onChange={(val) => form.setFieldValue("rating", val)}
                size={14}
                spaceBetween={30}
              />
              {form.touched.rating && form.errors.rating && (
                <p className="error">{form.errors.rating}</p>
              )}
            </div>
          </Col>
          <Col md={12}>
            <TextArea
              label="Write a Review"
              placeholder="Tell others about your experience"
              value={form.values.review}
              setValue={(val) => form.setFieldValue("review", val)}
              error={form.touched.review && form.errors.review}
            />
          </Col>
        </Row>
      </Container>
    </ModalSkeleton>
  );
}
