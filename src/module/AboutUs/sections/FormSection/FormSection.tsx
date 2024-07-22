import { FC, useCallback, useState, useRef, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import classNames from "classnames";
import { useLocation } from "react-router-dom";
// import axios from 'axios';

import { Section } from "../../../../components/Section";
import { Button } from "../../../../components/Button";
import { BaseInput } from "../../../../components/Inputs";
import { EFields } from "../../../../enums/EFields";
import { Rings } from "../../../../components/Rings";
import { useDevice } from "../../../../hooks/useDevice";

import "./formSection.scss";

export const FormSection: FC = () => {
  const { hash } = useLocation();
  const [message, setMessage] = useState("");
  const [isFetch, setFetch] = useState<boolean>(false);
  const [isSuccess, setSuccess] = useState<boolean>(false);
  const [isError, setError] = useState<boolean>(false);
  const { isMobile } = useDevice();

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref?.current || hash !== "#form") return;

    setTimeout(() => {
      ref?.current?.scrollIntoView({ block: "start" });
    }, 100);
  }, [ref]);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    defaultValues: {
      [EFields.NAME]: "",
      [EFields.COMPANY_NAME]: "",
      [EFields.EMAIL]: "",
      [EFields.PHONE]: "",
      [EFields.WHATSAPP]: false,
      [EFields.MESSAGE]: "",
      [EFields.AGREEMENT]: false,
    },
  });

  const [isWhatsApp, isAgreement] = watch([
    EFields.WHATSAPP,
    EFields.AGREEMENT,
  ]);

  const isValidationError = !!Object.values(errors).length;

  const onSubmit = useCallback(async (data: any, e: any) => {
    const web3FormsApiKeyDev = "a09e1931-b0bf-4961-b203-046c239ae452";
    const web3FormsApiKey = import.meta.env.VITE_WEB3FORMS_API_KEY;

    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(
        { ...data, access_key: web3FormsApiKey || web3FormsApiKeyDev },
        null,
        2
      ),
    })
      .then(async (response) => {
        let json = await response.json();
        if (json.success) {
          setSuccess(true);
          setError(false);
          setMessage(json.message);
          e.target.reset();
          reset();
        } else {
          setError(true);
          setSuccess(false);
          setMessage(json.message);
        }
      })
      .catch((error) => {
        setError(true);
        setSuccess(false);
        setMessage("Client Error. Please check the console.log for more info");
        console.log(error);
      })
      .finally(() => {
        setTimeout(() => {
          setSuccess(false);
          setError(false);
        }, 5000);
      });

    // setFetch(true);

    // try {
    //   // await axios.post('http://localhost:3001/api/save-form-data1', data);
    //   setSuccess(true);
    //   reset();
    // } catch (error) {
    //   console.error('error while sending data', error);
    //   setError(true);
    // } finally {
    //   setFetch(false);

    // setTimeout(() => {
    //   setSuccess(false);
    //   setError(false);
    // }, 1_000);
    // }
  }, []);

  return (
    <div ref={ref}>
      <Section className="about-us-section about-us-section-form">
        <Rings
          className="rings rings-top"
          rotate={isMobile ? -25 : 0}
          scale={isMobile ? 0.5 : 1}
        />
        <h2 className="title">Leave us a message</h2>
        <p className="description">
          Our team will contact you as quickly as possible
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-wrapper">
            <div
              className={classNames("form-wrapper-inner", {
                error: isValidationError,
              })}
            >
              <Controller
                name={EFields.NAME}
                control={control}
                rules={{ required: "required" }}
                render={({ field, ...rest }) => (
                  <BaseInput
                    field={field}
                    errors={errors}
                    label="Full name"
                    name={EFields.NAME}
                    rest={rest}
                  />
                )}
              />
              <Controller
                name={EFields.COMPANY_NAME}
                control={control}
                rules={{ required: "required" }}
                render={({ field }) => (
                  <BaseInput
                    field={field}
                    errors={errors}
                    label="Company name"
                    name={EFields.COMPANY_NAME}
                  />
                )}
              />
              <Controller
                name={EFields.EMAIL}
                control={control}
                rules={{ required: "required" }}
                render={({ field }) => (
                  <BaseInput
                    field={field}
                    errors={errors}
                    label="Email"
                    name={EFields.EMAIL}
                  />
                )}
              />
              <div>
                <Controller
                  name={EFields.PHONE}
                  control={control}
                  rules={{ required: "required" }}
                  render={({ field }) => (
                    <BaseInput
                      field={field}
                      errors={errors}
                      label="Phone number"
                      name={EFields.PHONE}
                      type="tel"
                    />
                  )}
                />
                <Controller
                  name={EFields.WHATSAPP}
                  control={control}
                  defaultValue={false}
                  render={({ field }) => (
                    <BaseInput
                      field={field}
                      errors={errors}
                      name={EFields.WHATSAPP}
                      type="checkbox"
                      label="Text me on a WhatsApp"
                      checked={isWhatsApp}
                    />
                  )}
                />
              </div>
            </div>
            <Controller
              name={EFields.MESSAGE}
              control={control}
              rules={{ required: "required" }}
              render={({ field }) => (
                <BaseInput
                  field={field}
                  errors={errors}
                  placeholder="Write your message..."
                  label="Message"
                  name={EFields.MESSAGE}
                />
              )}
            />
            <Controller
              name={EFields.AGREEMENT}
              control={control}
              rules={{ required: "required" }}
              render={({ field }) => (
                <BaseInput
                  field={field}
                  errors={errors}
                  name={EFields.AGREEMENT}
                  type="checkbox"
                  label="I agree to the Terms of use and Privacy Policy*"
                  checked={isAgreement}
                />
              )}
            />
            <Button
              text="Send message"
              type="submit"
              buttonType="submit"
              className="form-wrapper-btn"
              disabled={isFetch}
              isSuccess={isSuccess}
              isError={isError}
            />
          </div>
        </form>
        <Rings
          className="rings rings-bottom"
          rotate={-90}
          scale={isMobile ? 0.5 : 1}
        />
      </Section>
    </div>
  );
};
