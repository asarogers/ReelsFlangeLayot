function Form() {
  return (
    <div>
      <div className="container">
        <form className="form">
        <label>Date Added</label>
          <input type="text" />
          <br />
          <br/> <label>Layout Rating</label>
          <input type="text" />
          <br />
          <br/> <label>Consumed</label>
          <input type="text" />
          <br />
          <br/> <label>Produced</label>
          <input type="text" />
          <br />
          <br/> <label>Tecloss</label>
          <input type="text" />
          <br />
          <br/> <label>Holtec loss</label>
          <input type="text" />
          <br />
          <br/> <label>Holtec_Waste</label>
          <input type="text" />
          <br />
          <br/> <label>circle_wu</label>
          <input type="text" />
          <br />
          <br/>
          <label>Waste/Circle</label>
          <input type="text" />
          <br />
          <br/>
          <label>WULoss</label>
          <input type="text" />
          <br />
          <br/>
          <label>WU Consumed</label>
          <input type="text" />
          <br />
          <br/>
          <label>produced_WU</label> <input type="text" />
          <br />
          <br/>
          <label>Customer</label>
          <input type="text" />
          <br />
          <br/>
          <label>Job# </label>
          <input type="text" />
          <br />
          <br/>
          <label>Page#</label> <input type="text" />
          <br />
          <br/>
          <label>Go To:</label>
          <input list="example" />
          <datalist id="example">
            <option value="example"></option>
            <option value="example"></option>
            <option value="example"></option>
          </datalist>
        </form>

        <button className="left">Delete Record</button>
      </div>

      <div className="container">
        <div>
          <h3 className="title">Work orders</h3>
          <form className="form">
            <label className="label">Work Order 1</label>
            <input type="text" />
            <br />
            <br/>
            <label className="label" >Work Order 2</label> <input type="text" />
            <br/>
            <br/>
            <label className="label">Work Order 3</label>
          
            <input type="text" />
            <br />
            <br/>
            <label className="label">Work Order 4</label> <input type="text" />
            <br />
            <br/>
            <label className="label">Work Order 5</label> <input type="text" />
          </form>
        </div>
        <button className="pdf-button">PDF</button>
      </div>

      <br />
      <div className="group-of-buttons">
        <button>print</button>
        <button>reports</button>
        <button>PDF</button>
      </div>

      <br />

      <div className="container">
        <div className="block">
          <label className="label1">Error </label>
          <textarea name="error" id="" cols="30" rows="10"></textarea>
        </div>
      </div>
    </div>
  );
}
export default Form;
