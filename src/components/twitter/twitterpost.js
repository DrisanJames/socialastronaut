import React, {PureComponent} from 'react';
import {Button, ButtonToolbar} from 'reactstrap';
import {Field, reduxForm} from 'redux-form';

class TwitterPost extends PureComponent {
  render() {
    const {handleSubmit} = this.props;
    
    return (
      <div className='dashboard__place-order-form'>
        <form className='form form--horizontal' onSubmit={handleSubmit}>
          <div className='form__form-group'>
            <label className='form__form-group-label'>Post</label>
            <div className='form__form-group-field'>
              <Field
                name='price'
                component='input'
                type='textarea'
                placeholder='Write a tweet...'
              />
            </div>
          </div>
          <div className='form__form-group'>
            <label className='form__form-group-label'>Amount</label>
            <div className='form__form-group-field'>
              <Field
                name='amount'
                component='input'
                type='text'
                placeholder='0,000334 BTC'
              />
            </div>
          </div>
          <div className='form__form-group'>
            <label className='form__form-group-label'>Total</label>
            <div className='form__form-group-field'>
              <Field
                name='total'
                component='input'
                type='text'
                placeholder='$ 112,454'
              />
            </div>
          </div>
          <ButtonToolbar className='form__button-toolbar'>
            <Button color='primary' type='submit'>Buy BTC</Button>
          </ButtonToolbar>
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'twitterPostForm', // a unique identifier for this form
})(TwitterPost);
