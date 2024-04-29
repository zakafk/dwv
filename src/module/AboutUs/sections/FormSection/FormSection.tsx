import { FC, useCallback } from 'react';
import { useForm, Controller } from 'react-hook-form';
import classNames from 'classnames';

import { Section } from '../../../../components/Section';
import { Button } from '../../../../components/Button';
import { BaseInput } from "../../../../components/Inputs";
import { EFields } from '../../../../enums/EFields';
import { Rings } from '../../../../components/Rings';
import { useDevice } from '../../../../hooks/useDevice';

import './formSection.scss';

export const FormSection: FC = () => {
  const { isMobile } = useDevice();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const isError = !!Object.values(errors).length;

  const onSubmit = useCallback((data: any) => {
    return null;
  }, []);

  return (
    <Section className="about-us-section about-us-section-form">
      <Rings className="rings rings-top" rotate={isMobile ? -25 : 0} scale={isMobile ? 0.5 : 1} />
      <h2 className="title">Leave us a message</h2>
      <p className="description">Our team will contact you as quickly as possible</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-wrapper">
          <div className={classNames('form-wrapper-inner', { 'error': isError })}>
            <Controller
              name={EFields.NAME}
              control={control}
              defaultValue=""
              rules={{ required: 'required' }}
              render={({ field }) => (
                <BaseInput
                  field={field}
                  errors={errors}
                  label="Full name"
                  name={EFields.NAME}
                />
              )}
            />
            <Controller
              name={EFields.COMPANY_NAME}
              control={control}
              defaultValue=""
              rules={{ required: 'required' }}
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
              defaultValue=""
              rules={{ required: 'required' }}
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
                defaultValue=""
                rules={{ required: 'required' }}
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
                defaultValue=""
                render={({ field }) => (
                  <BaseInput
                    field={field}
                    errors={errors}
                    name={EFields.WHATSAPP}
                    type="checkbox"
                    label="Text me on a WhatsApp"
                  />
                )}
              />
            </div>
          </div>
          <Controller
            name={EFields.MESSAGE}
            control={control}
            defaultValue=""
            rules={{ required: 'required' }}
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
            defaultValue=""
            rules={{ required: 'required' }}
            render={({ field }) => (
              <BaseInput
                field={field}
                errors={errors}
                name={EFields.AGREEMENT}
                type="checkbox"
                label="I agree to the Terms of use and Privacy Policy*"
              />
            )}
          />
          <Button text="Send message" type="submit" buttonType="submit" className="form-wrapper-btn" />
        </div>
      </form>
      <Rings className="rings rings-bottom" rotate={-90} scale={isMobile ? 0.5 : 1} />
    </Section>
  );
}
