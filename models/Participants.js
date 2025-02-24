import mongoose from 'mongoose'

const ParticipantSchema = new mongoose.Schema(
  {
    tutor_nationality: { type: String },
    tutor_ci: { type: String },
    tutor_firstname: { type: String },
    tutor_secondname: { type: String },
    tutor_firstlastname: { type: String },
    tutor_secondlastname: { type: String },
    tutor_gender: { type: String },
    tutor_civilstatus: { type: String },
    tutor_phone1: { type: String },
    tutor_phone2: { type: String },
    tutor_email: { type: String },
    tutor_state: { type: Object },
    tutor_municipality: { type: Object },
    tutor_parish: { type: Object },

    tutor_institution: { type: String },
    tutor_especiality: { type: String },


    student_hasCI: { type: String },
    student_nationality: { type: String },
    student_CI: { type: String, required: true, unique: true },
    student_firstname: { type: String },
    student_secondname: { type: String },
    student_firstlastname: { type: String },
    student_secondlastname: { type: String },
    student_birthdate: { type: String },
    student_age: { type: Number },
    student_gender: { type: String },
    student_civilstatus: { type: String },
    student_phone1: { type: String },
    student_phone2: { type: String },
    student_email: { type: String },
    student_state: { type: Object },
    student_municipality: { type: Object },
    student_parish: { type: Object },
    student_address: { type: String },

    student_disability: { type: String },
    student_grade: { type: String },
    student_shirtSize: { type: String },
    student_institution: { type: String },
    student_pcaccess: { type: String },
    student_internetaccess: { type: String },
    student_moreinfosubs: { type: String },


  },

  { timestamps: true }
);

export default mongoose.model("Participant", ParticipantSchema);