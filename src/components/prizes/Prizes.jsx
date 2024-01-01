import SectionTitle from "../../ui/sectiontitle/SectionTitle";
import Card from "../../ui/card/Card";
import technical_mock from "../../assets/images/technical_mock.svg";

const Prizes = () => {
  return (
    <div className="flex flex-col gap-12 items-center">
      <SectionTitle name={"PRIZES"} />
      <div className="flex justify-evenly w-full flex-wrap gap-8">
        <Card
          image={technical_mock}
          title={"Coming Soon"}
          content={" "}
        />
        <Card
          image={technical_mock}
          title={"Coming Soon"}
          content={" "}
        />
        <Card
          image={technical_mock}
          title={"Coming Soon"}
          content={" "}
        /> <Card
          image={technical_mock}
          title={"Coming Soon"}
          content={" "}
        />
      </div>
    </div>
  );
};

export default Prizes;
