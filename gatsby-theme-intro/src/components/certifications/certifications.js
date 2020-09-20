import React from "react"
import { ProfileType } from "../../types"

const Certifications = ({ certifications }) => (
  <>
    <h5 className="font-header font-semibold text-front text-sm uppercase mb-3">
      Certifications
    </h5>
    <div className="font-text text-sm pb-12 leading-normal whitespace-pre-line">
      {certifications}
    </div>
  </>
)

Certifications.propTypes = {
  certifications: ProfileType.certifications,
}

export default Certifications
