import TimeBlockCollection from "../../components/TimeBlockCollection/TimeBlockCollection";

const TimeBlockPage = () => {
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let fullDate = `${month}-${day}-${year}`;

  return (
    <div>
      <div className="flex justify-center">{fullDate}</div>
      {/* <div className="columns-2"> */}
        {/* <div>hello</div> */}
        <TimeBlockCollection  />
      {/* </div> */}
    </div>
  );
};

export default TimeBlockPage;
