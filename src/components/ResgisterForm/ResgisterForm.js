import './RegisterForm.scss';
import React from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [formData, setFormData] = React.useState(null);
  const onSubmit = (data) => setFormData(data);
  const { formatMessage } = useIntl();

  return (
    <div className='register-form'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className='register-form__fieldset'>
          <input placeholder={formatMessage({ id: 'register_form:first_name' })} type='text' {...register('firstName', { required: true })}></input>
          {errors?.firstName && (
            <p className='register-form__error'>
              <FormattedMessage id='register_form:required_field' />
            </p>
          )}
        </fieldset>
        <fieldset className='register-form__fieldset'>
          <input placeholder={formatMessage({ id: 'register_form:last_name' })} type='text' {...register('lastName', { required: true, minLength: 3 })}></input>
          {errors?.lastName && (
            <p className='register-form__error'>
              <FormattedMessage id='register_form:required_field_3_chars' />
            </p>
          )}
        </fieldset>
        <button>
          <FormattedMessage id='register_form:submit_button' />
        </button>
      </form>
      <h2>
        <FormattedMessage id='register_form:form_data_title' />
      </h2>
      <p>
        <FormattedMessage id='register_form:first_name' /> {formData?.firstName}:
      </p>
      <p>
        <FormattedMessage id='register_form:last_name' /> {formData?.lastName}:
      </p>

      <h2>
        <FormattedMessage id='register_form:live_data_title' />
      </h2>
      <p>
        <FormattedMessage id='register_form:first_name' /> {watch('firstName')}:
      </p>
      <p>
        <FormattedMessage id='register_form:last_name' /> {watch('lastName')}:
      </p>
    </div>
  );
};

export default RegisterForm;
