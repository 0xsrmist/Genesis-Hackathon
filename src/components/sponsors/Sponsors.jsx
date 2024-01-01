import SectionTitle from '../../ui/sectiontitle/SectionTitle'
import Card from '../../ui/card/Card'
import sponsor from "../../assets/images/sponsor.png";

const Sponsors = () => {
    return (
        <div className='flex flex-col gap-12 items-center'>
            <SectionTitle name={'SPONSORS'} />
            <div className='flex flex-col gap-24 w-full'>
                <div className='flex flex-col gap-12' >
                    <span className='text-white text-2xl font-extrabold text-center tracking-wider'>PLATINUM</span>
                    <div className='flex justify-evenly flex-wrap gap-8'>
                        <Card
                            image={sponsor}
                            title={"Coming Soon"}
                            content={" "}
                        />
                        <Card
                            image={sponsor}
                            title={"Coming Soon"}
                            content={" "}
                        />
                        <Card
                            image={sponsor}
                            title={"Coming Soon"}
                            content={" "}
                        />
                        <Card
                            image={sponsor}
                            title={"Coming Soon"}
                            content={" "}
                        />
                    </div>
                </div>
                <div className='flex flex-col gap-12' >
                    <span className='text-white text-2xl font-extrabold text-center tracking-wider'>GOLD</span>
                    <div className='flex justify-evenly flex-wrap gap-8'>
                        <Card
                            image={sponsor}
                            title={"Coming Soon"}
                            content={" "}
                        />
                        <Card
                            image={sponsor}
                            title={"Coming Soon"}
                            content={" "}
                        />
                        <Card
                            image={sponsor}
                            title={"Coming Soon"}
                            content={" "}
                        />
                        <Card
                            image={sponsor}
                            title={"Coming Soon"}
                            content={" "}
                        />
                    </div>
                </div>
                <div className='flex flex-col gap-12' >
                    <span className='text-white text-2xl font-extrabold text-center tracking-wider'>SILVER</span>
                    <div className='flex justify-evenly flex-wrap gap-8'>
                        <Card
                            image={sponsor}
                            title={"Coming Soon"}
                            content={" "}
                        />
                        <Card
                            image={sponsor}
                            title={"Coming Soon"}
                            content={" "}
                        />
                        <Card
                            image={sponsor}
                            title={"Coming Soon"}
                            content={" "}
                        />
                        <Card
                            image={sponsor}
                            title={"Coming Soon"}
                            content={" "}
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Sponsors
