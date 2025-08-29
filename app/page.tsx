import Container from "@/components/Container";
import HomeBanner from "@/components/HomeBanner";


export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Container>
        <HomeBanner className='py-10'/>
       </Container>
    </div>
  );
}
