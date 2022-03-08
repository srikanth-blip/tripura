import React from 'react';
import './CheckOutForm.css';
function CheckOutForm() {
  return (
    <div className="check-out-form-div">
    <form action="download-invoice.html" className="check-out-form" id="check-out-form">
        <div className="form-group">
            <label htmlFor="">Your Name</label>
            <input type="text" className="form-control" required="" />
        </div>
        <div className="form-group">
            <label htmlFor="">E-mail</label>
            <input type="mail" className="form-control" required="" />
        </div>
        <div className="form-group">
            <label htmlFor="">Phone Number</label>
            <input type="number" className="form-control" required="" />
        </div>
        <div className="form-group">
            <label htmlFor="">Address Line 1</label>
            <input type="text" className="form-control" required="" />
        </div>
        <div className="form-group">
            <label htmlFor="">Address Line 2</label>
            <input type="text" className="form-control" required="" />
        </div>
        <div className="form-group text-center">
            <input type="submit" value="Checkout" required="" />
        </div>
    </form>
</div>
  );
}

export default CheckOutForm;
