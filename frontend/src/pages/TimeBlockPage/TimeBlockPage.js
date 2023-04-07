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
      <div className="columns-2">
        <div>hello</div>
        <div><TimeBlockCollection activities={[{id: 1, activity: 'coding', timeStart: '8:00', timeEnd: '10:00'},{id: 2, activity: 'Reading', timeStart: '10:00', timeEnd: '12:00'}]} isActive={true} /></div>
      </div>
    </div>
  );
};

export default TimeBlockPage;
