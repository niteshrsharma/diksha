
let allCourses = document.querySelectorAll(".course-card");

allCourses.forEach((course) => {
  let courseName = course.querySelector(".card-title").innerText;
  let linkOfCourse = course.querySelector(".join-link");
  let prototype = `<section class="h-100 bg-light">
    <div class="close-btn">close</div>
<div class="container py-5 h-100">
  <div class="row d-flex justify-content-center align-items-center h-100">
    <div class="col">
      <div class="card card-registration my-4">
        <div class="row g-0">
          <div class="col-xl-6 d-none d-xl-block">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
              alt="Sample photo" class="img-fluid"
              style="border-top-left-radius: .25rem; border-bottom-left-radius: .25rem;" />
          </div>
          <div class="col-xl-6">
            <div class="card-body p-md-5 text-black">
              <h3 class="mb-5 text-uppercase course-name">${courseName}</h3>

              <div class="row">
                <div class="col-md-6 mb-4">
                  <div class="form-outline">
                    <input type="text" id="form3Example1m" class="form-control form-control-lg" />
                    <label class="form-label" for="form3Example1m">First name</label>
                  </div>
                </div>
                <div class="col-md-6 mb-4">
                  <div class="form-outline">
                    <input type="text" id="form3Example1n" class="form-control form-control-lg" />
                    <label class="form-label" for="form3Example1n">Last name</label>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-6 mb-4">
                  <div class="form-outline">
                    <input type="text" id="form3Example1m1" class="form-control form-control-lg" />
                    <label class="form-label" for="form3Example1m1">Mother's name</label>
                  </div>
                </div> 
                <div class="col-md-6 mb-4">
                  <div class="form-outline">
                    <input type="text" id="form3Example1n1" class="form-control form-control-lg" />
                    <label class="form-label" for="form3Example1n1">Father's name</label>
                  </div>
                </div>
              </div>

              <div class="form-outline mb-4">
                <input type="text" id="form3Example8" class="form-control form-control-lg" />
                <label class="form-label" for="form3Example8">Address</label>
              </div>

              <div class="d-md-flex justify-content-start align-items-center mb-4 py-2">

                <h6 class="mb-0 me-4">Gender: </h6>

                <div class="form-check form-check-inline mb-0 me-4">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                    value="option1" />
                  <label class="form-check-label" for="femaleGender">Female</label>
                </div>

                <div class="form-check form-check-inline mb-0 me-4">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                    value="option2" />
                  <label class="form-check-label" for="maleGender">Male</label>
                </div>

                <div class="form-check form-check-inline mb-0">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                    value="option3" />
                  <label class="form-check-label" for="otherGender">Other</label>
                </div>

              </div>

              <h6 class="mb-0 me-4">Education: </h6>
              <br>

              <div class="row">
                <div class="col-md-6 mb-4">
                    
                  <select class="select">
                    <option value="1">Engineering (All Branches)</option>
                    <option value="2">Bsc/Msc (Computer Science)</option>
                    <option value="3">Bca/Mca</option>
                    <option value="4">Bsc/Msc(General Branch)</option>
                  </select>

                </div>


              <div class="form-outline mb-4">
                <input type="date" id="form3Example9" class="form-control form-control-lg" />
                <label class="form-label" for="form3Example9">DOB</label>
              </div>

              <div class="form-outline mb-4">
                <input type="number" id="form3Example90" class="form-control form-control-lg" />
                <label class="form-label" for="form3Example90">Pincode</label>
              </div>

              <div class="form-outline mb-4">
                <input type="tel" id="form3Example97" class="form-control form-control-lg" />
                <label class="form-label" for="form3Example97">Mobile Number</label>
              </div>

              <div class="form-outline mb-4">
                <input type="text" id="form3Example97" class="form-control form-control-lg" />
                <label class="form-label" for="form3Example97">Email ID</label>
              </div>

              <div class="d-flex justify-content-end pt-3">
                <button type="button" class="btn btn-light btn-lg">Reset all</button>
                <button type="button" class="btn btn-warning btn-lg ms-2">Submit form</button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</section>`;

  let div = document.createElement("div");
  div.className = "course-form";
  div.innerHTML = prototype;
  linkOfCourse.addEventListener("click", (e) => {
    let body = document.querySelector("body");
    body.appendChild(div);
  })

  let closeBtn = div.querySelector(".close-btn");

  closeBtn.addEventListener("click", (e) => {
    div.style.display = "none";
  })
})


const elements = document.querySelectorAll('.element');

const options = {
  root: null, // Use viewport as root
  threshold: 0.5, // Trigger at 50% visibility
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    }
    else {
      // Optionally remove the class when no longer in view
      entry.target.classList.remove('in-view');
    }
  });
}, options);

elements.forEach((element) => {
  observer.observe(element);
});

//sending data to mail 

