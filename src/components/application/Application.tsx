const Application = () => {
  return (
    <>
      <form>
        <div>
          <h1>Job Application Form</h1>
          <p>Please fill out the form below</p>
          <span title="close">X</span>
          <hr />
        </div>

        <div>
          <h2>Section 1</h2>
          <p>All fields are required</p>
          <hr />
        </div>

        <div data-testid="name-input">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" value="vinod" onChange={() => {}} />
        </div>

        <div>
          <label htmlFor="job-description">job location</label>
          <input type="textArea" id="job-description" />

          <select id="job-location">
            <option value="">Select a country</option>
          </select>
        </div>

        <div>
          <label htmlFor="job-location">job location</label>

          <select id="job-location">
            <option value="">Select a country</option>
            <option value="US">United States</option>
            <option value="IN">India</option>
            <option value="UK">United kingdom</option>
            <option value="AU">Australia</option>
          </select>
        </div>

        <div>
          <label>
            <input type="checkbox" id="terms" /> I agree to the terms and
            conditions
          </label>
        </div>

        <div>
          <button>Submit</button>
        </div>
      </form>
    </>
  );
};

export default Application;
