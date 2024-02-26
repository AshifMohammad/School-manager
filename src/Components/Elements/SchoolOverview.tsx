

interface ISchoolOverview {
    overview_paragraph:string
}

export const SchoolOverview = ({overview_paragraph}:ISchoolOverview):JSX.Element => {

    return  <section data-testid="school-viewer-box" className="school-viewer-section">
    {overview_paragraph ||
      "Please Select School to view the details"}
  </section>
}