import { InfoSection } from "../Components/Home/FAQSection"

export default function page() {
    const infoSections: InfoSection[] = [
    {
      heading: "What is A7 Satta King?",
      description:
        "A7 Satta King is a famous platform for announcing many satta results. While several websites announce the satta results, they are not reliable, and there is a lack of consistency; on the other hand, A7 Satta King is a trustworthy and consistent website for checking everyday satta results, and players can check the whole year's satta chart here, which is crucial for the game.",
    },
    {
      heading: "Games Covered on A7 Satta King",
      description:
        (
          <>
          A7 Satta King provides thorough details about every well-known Satta game that Satta players regularly play. For several well-known Satta games, including <a href="https://a7sattaking.co/sadar-bazar" className="internal-link">Sadar Bazar</a>, <a href="https://a7sattaking.co/gwalior" className="internal-link">Gwalior Satta</a>, Satta King Disawar, A7 Satta, <a href="https://a7sattaking.co/delhi-bazar" className="internal-link">Delhi Bazar</a>, <a href="https://a7sattaking.co/delhi-matka" className="internal-link">Delhi Matka</a>, <a href="https://a7sattaking.co/gali-satta" className="internal-link">Gali Satta</a>, and <a href="https://a7sattaking.co/shri-ganesh" className="internal-link">Shri Ganesh</a>, players can access the most recent Satta charts and results. Regional updates for <a href="https://a7sattaking.co/agra" className="internal-link">Agra Satta</a>, <a href="https://a7sattaking.co/faridabad" className="internal-link">Faridabad Satta</a>, <a href="https://a7sattaking.co/alwar" className="internal-link">Alwar Satta</a>, <a href="https://a7sattaking.co/ghaziabad" className="internal-link">Ghaziabad Satta</a>, A7 Satta, and <a href="https://a7sattaking.co/dwarka" className="internal-link">Dwarka Satta</a> are also available on the website.</>
        ),
    },
    {
      heading: "How to play A7 Satta King games?",
      description:
        "A7 Satta does not promote or organise any Satta King games, though individuals may advertise on this website. To play Satta King games, you must get in touch with people who are involved in the industry. Typically, they take your bet money, place it, and give you the winning amount if your prediction is correct.",
    },
]
    return (
        <>
            <section className=" mx-auto bg-white">
                {/* <p className=" text-[calc(1.325rem+.9vw)] text-[#212529] font-medium py-4">
                    <strong>
                        For any enquiry message us at mail@a7sattaking.com
                    </strong>
                </p> */}

                <div className="text-[20px] font-normal p-[1rem] mb-8 max-w-[700px] mx-auto">

                   {
                    infoSections.map((data, index)=>(
                        <>
                         <h3 className="text-[calc(1.3rem+0.6vw)] xl:text-[1.75rem] font-bold mb-[0.5rem]">
                        {data.heading}

                    </h3>
                    <p className="mb-[1rem]">
                        {data.description}
                    </p></>
                    ))
                   }

                </div>
            </section>
        </>
    )
}