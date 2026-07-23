import svgPaths from "./svg-nq24mefp0n";
import imgProfilephoto1 from "./3f47708694a75e6644ce18c8ae2eb87d1d26320d.png";
import imgImageWithFallback from "./816559cb488c438e6d985e6c4f3173d19b864230.png";
import imgImageWithFallback1 from "./7b982e536a16c22d9fbcbaf1cab45edd06698951.png";
import imgImageWithFallback2 from "./c07b7c1668fc98fa9902f9d2d9c04b499d71e616.png";

function Icon() {
  return (
    <div className="h-[610.37px] relative shrink-0 w-[1036.3px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1036.3 610.37">
        <g clipPath="url(#clip0_25_255)" id="Icon">
          <g id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_25_255">
            <rect fill="white" height="610.37" width="1036.3" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 opacity-10 top-0" data-name="Container">
      <Icon />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[15.995px] left-[16px] top-[8px] w-[100.718px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Ligconsolata:Regular',sans-serif] leading-[16px] left-0 not-italic text-[#d4af37] text-[12px] top-[-0.26px] tracking-[0.6px] whitespace-nowrap">PERSONNEL FILE</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute border-[#d4af37] border-[0.741px] border-solid h-[33.472px] left-0 top-0 w-[134.19px]" data-name="Container">
      <Container3 />
    </div>
  );
}

function InlineContent() {
  return (
    <div className="h-[57.465px] relative shrink-0 w-full" data-name="Inline content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container2 />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Ligconsolata:Regular',sans-serif] leading-[48px] not-italic relative shrink-0 text-[#e9d8a6] text-[48px] whitespace-nowrap">About Hazel</p>
      </div>
    </div>
  );
}

function Container4() {
  return <div className="bg-[#d4af37] h-[3.993px] relative shrink-0 w-[95.995px]" data-name="Container" />;
}

function ContainerMargin() {
  return (
    <div className="relative shrink-0" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <Container4 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-[972.315px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <InlineContent />
        <Heading />
        <ContainerMargin />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 w-[260.417px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start py-[32px] relative size-full">
        <div className="h-[276px] opacity-80 relative shrink-0 w-[261px]" data-name="profilephoto 1">
          <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgProfilephoto1} />
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[#111] relative shrink-0 size-[263.38px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip p-[1.481px] relative rounded-[inherit] size-full">
        <Container9 />
      </div>
      <div aria-hidden className="absolute border-[1.481px] border-[rgba(212,175,55,0.3)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Noto_Sans_Georgian:Regular','Noto_Sans:Regular',sans-serif] leading-[28px] relative shrink-0 text-[#e9d8a6] text-[18px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          Hazel White
        </p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Ligconsolata:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#7c7c7c] text-[14px] text-center whitespace-nowrap">{` UTD EMAIL: HAZEL.WHITE@UTDALLAS.EDU`}</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[64px] relative shrink-0 w-[263.38px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <Container11 />
        <Container12 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[#2d2d2d] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#4a4a4a] border-[3.704px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[19.704px] relative size-full">
        <Container8 />
        <Container10 />
      </div>
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="h-[63.993px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container14() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[63.993px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <ImageWithFallback />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Ligconsolata:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#d4af37] text-[12px] whitespace-nowrap">ORIGIN</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[24px] relative shrink-0 w-[193.313px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] relative size-full">
        <p className="[word-break:break-word] font-['IBM_Plex_Mono:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#e9d8a6] text-[14px] whitespace-nowrap">Istanbul, Turkey</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="flex-[193.322_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container16 />
        <Container17 />
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="relative shrink-0" data-name="About">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start relative size-full">
        <Container14 />
        <Container15 />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-[#2d2d2d] relative rounded-[8px] shrink-0 w-full" data-name="Card">
      <div aria-hidden className="absolute border-[0.741px] border-[rgba(212,175,55,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[16.741px] relative size-full">
        <About />
      </div>
    </div>
  );
}

function ImageWithFallback1() {
  return (
    <div className="h-[63.993px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback1} />
    </div>
  );
}

function Container18() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[63.993px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <ImageWithFallback1 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Ligconsolata:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#d4af37] text-[12px] whitespace-nowrap">CURRENT LOCATION</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[24px] relative shrink-0 w-[193.313px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] relative size-full">
        <p className="[word-break:break-word] font-['IBM_Plex_Mono:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#e9d8a6] text-[14px] whitespace-nowrap">Plano, Texas</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="flex-[193.322_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container20 />
        <Container21 />
      </div>
    </div>
  );
}

function About1() {
  return (
    <div className="relative shrink-0" data-name="About">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start relative size-full">
        <Container18 />
        <Container19 />
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-[#2d2d2d] relative rounded-[8px] shrink-0 w-full" data-name="Card">
      <div aria-hidden className="absolute border-[0.741px] border-[rgba(212,175,55,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col items-start p-[16.741px] relative size-full">
        <About1 />
      </div>
    </div>
  );
}

function CardMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Card (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
        <Card1 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[230.949px] relative shrink-0 w-[302.778px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] relative size-full">
        <Card />
        <CardMargin />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[302.778px]" data-name="Container">
      <Container7 />
      <Container13 />
    </div>
  );
}

function Container23() {
  return <div className="bg-[#d4af37] relative shrink-0 size-[7.998px]" data-name="Container" />;
}

function Heading1() {
  return (
    <div className="h-[27.998px] relative shrink-0 w-[90.382px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Noto_Sans_Georgian:Medium','Noto_Sans:Medium',sans-serif] leading-[28px] left-0 text-[#d4af37] text-[20px] top-[-0.78px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 500' }}>
          Who I Am
        </p>
      </div>
    </div>
  );
}

function About2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center pb-[12.741px] relative shrink-0 w-full" data-name="About">
      <div aria-hidden className="absolute border-[rgba(212,175,55,0.2)] border-b-[0.741px] border-solid inset-0 pointer-events-none" />
      <Container23 />
      <Heading1 />
    </div>
  );
}

function AboutMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="About (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
        <About2 />
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['IBM_Plex_Mono:Regular',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#e9d8a6] text-[16px] w-[589px]">I am a Computer Engineering student at the University of Texas at Dallas with interests in:</p>
      </div>
    </div>
  );
}

function Container24() {
  return <div className="bg-[#d4af37] relative shrink-0 size-[5.995px]" data-name="Container" />;
}

function Text() {
  return (
    <div className="h-[20px] relative shrink-0 w-[176.308px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#e9d8a6] text-[14px] top-[-0.26px] whitespace-nowrap">Computer Architecture</p>
      </div>
    </div>
  );
}

function ListItem() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-[16px] top-0 w-[282.037px]" data-name="List Item">
      <Container24 />
      <Text />
    </div>
  );
}

function Container25() {
  return <div className="bg-[#d4af37] relative shrink-0 size-[5.995px]" data-name="Container" />;
}

function Text1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[134.34px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#e9d8a6] text-[14px] top-[-0.26px] whitespace-nowrap">Embedded Systems</p>
      </div>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-[306.03px] top-0 w-[282.049px]" data-name="List Item">
      <Container25 />
      <Text1 />
    </div>
  );
}

function Container26() {
  return <div className="bg-[#d4af37] relative shrink-0 size-[5.995px]" data-name="Container" />;
}

function Text2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[92.361px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#e9d8a6] text-[14px] top-[-0.26px] whitespace-nowrap">Electronics</p>
      </div>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-[16px] top-[28px] w-[282.037px]" data-name="List Item">
      <Container26 />
      <Text2 />
    </div>
  );
}

function Container27() {
  return <div className="bg-[#d4af37] relative shrink-0 size-[5.995px]" data-name="Container" />;
}

function Text3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[109.144px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#e9d8a6] text-[14px] top-[-0.26px] whitespace-nowrap">Cybersecurity</p>
      </div>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-[306.03px] top-[28px] w-[282.049px]" data-name="List Item">
      <Container27 />
      <Text3 />
    </div>
  );
}

function Container28() {
  return <div className="bg-[#d4af37] relative shrink-0 size-[5.995px]" data-name="Container" />;
}

function Text4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[167.917px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#e9d8a6] text-[14px] top-[-0.26px] whitespace-nowrap">Software Development</p>
      </div>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-[16px] top-[56px] w-[282.037px]" data-name="List Item">
      <Container28 />
      <Text4 />
    </div>
  );
}

function Container29() {
  return <div className="bg-[#d4af37] relative shrink-0 size-[5.995px]" data-name="Container" />;
}

function Text5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[142.732px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#e9d8a6] text-[14px] top-[-0.26px] whitespace-nowrap">IT Infrastructure</p>
      </div>
    </div>
  );
}

function ListItem5() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-[306.03px] top-[56px] w-[282.049px]" data-name="List Item">
      <Container29 />
      <Text5 />
    </div>
  );
}

function List() {
  return (
    <div className="h-[75.995px] relative shrink-0 w-full" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
      <ListItem3 />
      <ListItem4 />
      <ListItem5 />
    </div>
  );
}

function ListMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="List (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <List />
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="relative shrink-0 w-[588.065px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <p className="[word-break:break-word] font-['IBM_Plex_Mono:Regular',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#e9d8a6] text-[16px] w-[589px]">I enjoy solving technical problems, restoring old technology, hiking, sketching, and learning how complex systems work.</p>
      </div>
    </div>
  );
}

function About3() {
  return (
    <div className="relative shrink-0 w-full" data-name="About">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph />
        <ListMargin />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-[#2d2d2d] h-[342.107px] relative rounded-[8px] shrink-0 w-full" data-name="Card">
      <div aria-hidden className="absolute border-[0.741px] border-[rgba(212,175,55,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start p-[24.741px] relative size-full">
        <AboutMargin />
        <About3 />
      </div>
    </div>
  );
}

function Container30() {
  return <div className="bg-[#8a2e3f] relative shrink-0 size-[7.998px]" data-name="Container" />;
}

function Heading2() {
  return (
    <div className="h-[27.998px] relative shrink-0 w-[106.875px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Noto_Sans_Georgian:Medium','Noto_Sans:Medium',sans-serif] leading-[28px] left-0 text-[#d4af37] text-[20px] top-[-0.78px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 500' }}>
          Background
        </p>
      </div>
    </div>
  );
}

function About4() {
  return (
    <div className="content-stretch flex gap-[12px] items-center pb-[12.741px] relative shrink-0 w-full" data-name="About">
      <div aria-hidden className="absolute border-[rgba(212,175,55,0.2)] border-b-[0.741px] border-solid inset-0 pointer-events-none" />
      <Container30 />
      <Heading2 />
    </div>
  );
}

function AboutMargin1() {
  return (
    <div className="relative shrink-0 w-full" data-name="About (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
        <About4 />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[20px] relative shrink-0 w-[53.854px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Ligconsolata:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#d4af37] text-[14px] top-[-0.52px] whitespace-nowrap">ORIGIN:</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[23.993px] relative shrink-0 w-[239.896px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#e9d8a6] text-[16px] top-[0.48px] whitespace-nowrap">Born in Istanbul, Turkey.</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start relative size-full">
        <Container32 />
        <Container33 />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[20px] relative shrink-0 w-[69.248px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Ligconsolata:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#d4af37] text-[14px] top-[-0.52px] whitespace-nowrap">LOCATION:</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[23.993px] relative shrink-0 w-[307.06px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#e9d8a6] text-[16px] top-[0.48px] whitespace-nowrap">Currently based in Plano, Texas.</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[39.993px] relative shrink-0 w-[588.065px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start pt-[16px] relative size-full">
        <Container35 />
        <Container36 />
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[20px] relative shrink-0 w-[76.933px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Ligconsolata:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#d4af37] text-[14px] top-[-0.52px] whitespace-nowrap">EDUCATION:</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['IBM_Plex_Mono:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#e9d8a6] text-[16px] w-[496px]">Associate Degree in Liberal Arts from Austin Community College.</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="relative shrink-0 w-[495.151px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['IBM_Plex_Mono:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#e9d8a6] text-[16px] w-[496px]">Currently pursuing a Bachelor of Science in Computer Engineering at the University of Texas at Dallas.</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="relative shrink-0 w-[495.151px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container40 />
        <Container41 />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Container38 />
      <Container39 />
    </div>
  );
}

function ContainerMargin2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <Container37 />
      </div>
    </div>
  );
}

function About5() {
  return (
    <div className="relative shrink-0 w-full" data-name="About">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container31 />
        <Container34 />
        <ContainerMargin2 />
      </div>
    </div>
  );
}

function Card3() {
  return (
    <div className="bg-[#2d2d2d] h-[338.125px] relative rounded-[8px] shrink-0 w-full" data-name="Card">
      <div aria-hidden className="absolute border-[0.741px] border-[rgba(212,175,55,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[24.741px] relative size-full">
        <AboutMargin1 />
        <About5 />
      </div>
    </div>
  );
}

function CardMargin1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Card (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[32px] relative size-full">
        <Card3 />
      </div>
    </div>
  );
}

function Container43() {
  return <div className="bg-[#d4af37] relative shrink-0 size-[7.998px]" data-name="Container" />;
}

function Heading3() {
  return (
    <div className="h-[27.998px] relative shrink-0 w-[199.468px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Noto_Sans_Georgian:Medium','Noto_Sans:Medium',sans-serif] leading-[28px] left-0 text-[#d4af37] text-[20px] top-[-0.78px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 500' }}>
          Workshop Companion
        </p>
      </div>
    </div>
  );
}

function About6() {
  return (
    <div className="content-stretch flex gap-[12px] items-center pb-[12.741px] relative shrink-0 w-full" data-name="About">
      <div aria-hidden className="absolute border-[rgba(212,175,55,0.2)] border-b-[0.741px] border-solid inset-0 pointer-events-none" />
      <Container43 />
      <Heading3 />
    </div>
  );
}

function AboutMargin2() {
  return (
    <div className="relative shrink-0 w-full" data-name="About (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
        <About6 />
      </div>
    </div>
  );
}

function ImageWithFallback2() {
  return (
    <div className="h-[97px] opacity-75 relative shrink-0 w-full" data-name="ImageWithFallback">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[134.21%] left-[-4.29%] max-w-none top-[-33.78%] w-[103.87%]" src={imgImageWithFallback2} />
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="relative rounded-[24855100px] shrink-0 size-[95.995px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[1.481px] relative rounded-[inherit] size-full">
        <ImageWithFallback2 />
      </div>
      <div aria-hidden className="absolute border-[#d4af37] border-[1.481px] border-solid inset-0 pointer-events-none rounded-[24855100px]" />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="flex-[468.09_0_0] min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['IBM_Plex_Mono:Italic',sans-serif] italic leading-[20px] relative shrink-0 text-[#e9d8a6] text-[14px] w-[469px]">{`"Every good workshop needs a curious supervisor. Mine happens to have four paws and a particular interest in knocking components off the workbench."`}</p>
      </div>
    </div>
  );
}

function About7() {
  return (
    <div className="relative shrink-0 w-full" data-name="About">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-center relative size-full">
        <Container44 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Card4() {
  return (
    <div className="bg-[#2d2d2d] h-[226.181px] relative rounded-[8px] shrink-0 w-full" data-name="Card">
      <div aria-hidden className="absolute border-[0.741px] border-[rgba(212,175,55,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start p-[24.741px] relative size-full">
        <AboutMargin2 />
        <About7 />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[47.998px] relative shrink-0 w-full" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[11.74%_12.5%_12.5%_12.46%]" data-name="Vector">
          <div className="absolute inset-[-5.5%_-5.55%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.0187 40.3648">
              <path d={svgPaths.p39913100} id="Vector" stroke="var(--stroke-0, #D4AF37)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.99981" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[58.33%_66.67%_39.58%_33.33%]" data-name="Vector">
          <div className="absolute inset-[-200%_-2px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.99981 4.99976">
              <path d="M1.9999 1.9999V2.99986" id="Vector" stroke="var(--stroke-0, #D4AF37)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.99981" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[58.33%_33.33%_39.58%_66.67%]" data-name="Vector">
          <div className="absolute inset-[-200%_-2px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.99981 4.99976">
              <path d="M1.9999 1.9999V2.99986" id="Vector" stroke="var(--stroke-0, #D4AF37)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.99981" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[67.71%_46.87%_29.17%_46.88%]" data-name="Vector">
          <div className="absolute inset-[-133.33%_-66.67%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.99978 5.49974">
              <path d={svgPaths.p325ab580} id="Vector" stroke="var(--stroke-0, #D4AF37)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.99981" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute left-[613.54px] opacity-10 size-[47.998px] top-[-23.99px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Card4 />
      <Container45 />
    </div>
  );
}

function ContainerMargin3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[32px] relative size-full">
        <Container42 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[334.77px] top-0 w-[637.546px]" data-name="Container">
      <Card2 />
      <CardMargin1 />
      <ContainerMargin3 />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[970.394px] relative shrink-0 w-[972.315px]" data-name="Container">
      <Container6 />
      <Container22 />
    </div>
  );
}

function ContainerMargin1() {
  return (
    <div className="relative shrink-0" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[48px] relative size-full">
        <Container5 />
      </div>
    </div>
  );
}

function Container48() {
  return <div className="bg-[#d4af37] relative shrink-0 size-[7.998px]" data-name="Container" />;
}

function Heading4() {
  return (
    <div className="h-[32.002px] relative shrink-0 w-[214.444px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Noto_Sans_Georgian:Medium','Noto_Sans:Medium',sans-serif] leading-[32px] left-0 text-[#d4af37] text-[24px] top-[0.22px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 500' }}>{`Interests & Passions`}</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container48 />
        <Heading4 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[23.993px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9931 23.9931">
        <g id="Icon">
          <path d={svgPaths.pec61c00} id="Vector" stroke="var(--stroke-0, #D4AF37)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99943" />
          <path d={svgPaths.p2d7dfb00} id="Vector_2" stroke="var(--stroke-0, #D4AF37)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99943" />
          <path d="M14.9957 1.99942V3.99942" id="Vector_3" stroke="var(--stroke-0, #D4AF37)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99943" />
          <path d="M14.9957 19.9942V21.9942" id="Vector_4" stroke="var(--stroke-0, #D4AF37)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99943" />
          <path d="M1.99942 14.9957H3.99942" id="Vector_5" stroke="var(--stroke-0, #D4AF37)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99943" />
          <path d="M1.99942 8.99741H3.99942" id="Vector_6" stroke="var(--stroke-0, #D4AF37)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99943" />
          <path d="M19.9942 14.9957H21.9942" id="Vector_7" stroke="var(--stroke-0, #D4AF37)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99943" />
          <path d="M19.9942 8.99741H21.9942" id="Vector_8" stroke="var(--stroke-0, #D4AF37)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99943" />
          <path d="M8.99741 1.99942V3.99942" id="Vector_9" stroke="var(--stroke-0, #D4AF37)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99943" />
          <path d="M8.99741 19.9942V21.9942" id="Vector_10" stroke="var(--stroke-0, #D4AF37)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99943" />
        </g>
      </svg>
    </div>
  );
}

function Container50() {
  return (
    <div className="relative rounded-[24855100px] shrink-0 size-[47.998px]" data-name="Container">
      <div aria-hidden className="absolute border-[#d4af37] border-[1.481px] border-solid inset-0 pointer-events-none rounded-[24855100px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.481px] relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="h-[20px] relative shrink-0 w-[84.63px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Ligconsolata:Regular',sans-serif] leading-[20px] left-[42.5px] not-italic text-[#e9d8a6] text-[14px] text-center top-[-0.52px] whitespace-nowrap">Electronics</p>
      </div>
    </div>
  );
}

function About8() {
  return (
    <div className="relative shrink-0 w-full" data-name="About">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-center relative size-full">
        <Container50 />
        <Container51 />
      </div>
    </div>
  );
}

function Card5() {
  return (
    <div className="absolute bg-[#2d2d2d] content-stretch flex flex-col h-[133.461px] items-start left-0 p-[16.741px] rounded-[8px] top-0 w-[181.667px]" data-name="Card">
      <div aria-hidden className="absolute border-[0.741px] border-[rgba(212,175,55,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <About8 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[23.993px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9931 23.9931">
        <g id="Icon">
          <path d={svgPaths.pec61c00} id="Vector" stroke="var(--stroke-0, #8A2E3F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99943" />
          <path d={svgPaths.p2d7dfb00} id="Vector_2" stroke="var(--stroke-0, #8A2E3F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99943" />
          <path d="M14.9957 1.99942V3.99942" id="Vector_3" stroke="var(--stroke-0, #8A2E3F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99943" />
          <path d="M14.9957 19.9942V21.9942" id="Vector_4" stroke="var(--stroke-0, #8A2E3F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99943" />
          <path d="M1.99942 14.9957H3.99942" id="Vector_5" stroke="var(--stroke-0, #8A2E3F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99943" />
          <path d="M1.99942 8.99741H3.99942" id="Vector_6" stroke="var(--stroke-0, #8A2E3F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99943" />
          <path d="M19.9942 14.9957H21.9942" id="Vector_7" stroke="var(--stroke-0, #8A2E3F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99943" />
          <path d="M19.9942 8.99741H21.9942" id="Vector_8" stroke="var(--stroke-0, #8A2E3F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99943" />
          <path d="M8.99741 1.99942V3.99942" id="Vector_9" stroke="var(--stroke-0, #8A2E3F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99943" />
          <path d="M8.99741 19.9942V21.9942" id="Vector_10" stroke="var(--stroke-0, #8A2E3F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99943" />
        </g>
      </svg>
    </div>
  );
}

function Container52() {
  return (
    <div className="relative rounded-[24855100px] shrink-0 size-[47.998px]" data-name="Container">
      <div aria-hidden className="absolute border-[#8a2e3f] border-[1.481px] border-solid inset-0 pointer-events-none rounded-[24855100px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.481px] relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="h-[40px] relative shrink-0 w-[148.194px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Ligconsolata:Regular',sans-serif] leading-[20px] left-[74.5px] not-italic text-[#e9d8a6] text-[14px] text-center top-[-0.52px] w-[149px]">Computer Architecture</p>
      </div>
    </div>
  );
}

function About9() {
  return (
    <div className="relative shrink-0 w-full" data-name="About">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-center relative size-full">
        <Container52 />
        <Container53 />
      </div>
    </div>
  );
}

function Card6() {
  return (
    <div className="absolute bg-[#2d2d2d] content-stretch flex flex-col items-start left-[197.66px] p-[16.741px] rounded-[8px] top-0 w-[181.667px]" data-name="Card">
      <div aria-hidden className="absolute border-[0.741px] border-[rgba(212,175,55,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <About9 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[23.993px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9931 23.9931">
        <g id="Icon">
          <path d={svgPaths.p21349100} id="Vector" stroke="var(--stroke-0, #D4AF37)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99943" />
        </g>
      </svg>
    </div>
  );
}

function Container54() {
  return (
    <div className="relative rounded-[24855100px] shrink-0 size-[47.998px]" data-name="Container">
      <div aria-hidden className="absolute border-[#d4af37] border-[1.481px] border-solid inset-0 pointer-events-none rounded-[24855100px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.481px] relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="h-[20px] relative shrink-0 w-[76.933px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Ligconsolata:Regular',sans-serif] leading-[20px] left-[38px] not-italic text-[#e9d8a6] text-[14px] text-center top-[-0.52px] whitespace-nowrap">PCB Design</p>
      </div>
    </div>
  );
}

function About10() {
  return (
    <div className="relative shrink-0 w-full" data-name="About">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-center relative size-full">
        <Container54 />
        <Container55 />
      </div>
    </div>
  );
}

function Card7() {
  return (
    <div className="absolute bg-[#2d2d2d] content-stretch flex flex-col h-[133.461px] items-start left-[395.32px] p-[16.741px] rounded-[8px] top-0 w-[181.667px]" data-name="Card">
      <div aria-hidden className="absolute border-[0.741px] border-[rgba(212,175,55,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <About10 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[23.993px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9931 23.9931">
        <g id="Icon">
          <path d={svgPaths.paca2c00} id="Vector" stroke="var(--stroke-0, #8A2E3F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99943" />
        </g>
      </svg>
    </div>
  );
}

function Container56() {
  return (
    <div className="relative rounded-[24855100px] shrink-0 size-[47.998px]" data-name="Container">
      <div aria-hidden className="absolute border-[#8a2e3f] border-[1.481px] border-solid inset-0 pointer-events-none rounded-[24855100px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.481px] relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="h-[20px] relative shrink-0 w-[100.012px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Ligconsolata:Regular',sans-serif] leading-[20px] left-[50.5px] not-italic text-[#e9d8a6] text-[14px] text-center top-[-0.52px] whitespace-nowrap">Cybersecurity</p>
      </div>
    </div>
  );
}

function About11() {
  return (
    <div className="relative shrink-0 w-full" data-name="About">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-center relative size-full">
        <Container56 />
        <Container57 />
      </div>
    </div>
  );
}

function Card8() {
  return (
    <div className="absolute bg-[#2d2d2d] content-stretch flex flex-col h-[133.461px] items-start left-[592.99px] p-[16.741px] rounded-[8px] top-0 w-[181.667px]" data-name="Card">
      <div aria-hidden className="absolute border-[0.741px] border-[rgba(212,175,55,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <About11 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[23.993px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9931 23.9931">
        <g id="Icon">
          <path d={svgPaths.pec61c00} id="Vector" stroke="var(--stroke-0, #D4AF37)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99943" />
          <path d={svgPaths.p2d7dfb00} id="Vector_2" stroke="var(--stroke-0, #D4AF37)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99943" />
          <path d="M14.9957 1.99942V3.99942" id="Vector_3" stroke="var(--stroke-0, #D4AF37)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99943" />
          <path d="M14.9957 19.9942V21.9942" id="Vector_4" stroke="var(--stroke-0, #D4AF37)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99943" />
          <path d="M1.99942 14.9957H3.99942" id="Vector_5" stroke="var(--stroke-0, #D4AF37)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99943" />
          <path d="M1.99942 8.99741H3.99942" id="Vector_6" stroke="var(--stroke-0, #D4AF37)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99943" />
          <path d="M19.9942 14.9957H21.9942" id="Vector_7" stroke="var(--stroke-0, #D4AF37)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99943" />
          <path d="M19.9942 8.99741H21.9942" id="Vector_8" stroke="var(--stroke-0, #D4AF37)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99943" />
          <path d="M8.99741 1.99942V3.99942" id="Vector_9" stroke="var(--stroke-0, #D4AF37)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99943" />
          <path d="M8.99741 19.9942V21.9942" id="Vector_10" stroke="var(--stroke-0, #D4AF37)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99943" />
        </g>
      </svg>
    </div>
  );
}

function Container58() {
  return (
    <div className="relative rounded-[24855100px] shrink-0 size-[47.998px]" data-name="Container">
      <div aria-hidden className="absolute border-[#d4af37] border-[1.481px] border-solid inset-0 pointer-events-none rounded-[24855100px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.481px] relative size-full">
        <Icon6 />
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="h-[40px] relative shrink-0 w-[148.194px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Ligconsolata:Regular',sans-serif] leading-[20px] left-[74.5px] not-italic text-[#e9d8a6] text-[14px] text-center top-[-0.52px] w-[149px]">{`Software & AI`}</p>
      </div>
    </div>
  );
}

function About12() {
  return (
    <div className="relative shrink-0 w-full" data-name="About">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-center relative size-full">
        <Container58 />
        <Container59 />
      </div>
    </div>
  );
}

function Card9() {
  return (
    <div className="absolute bg-[#2d2d2d] content-stretch flex flex-col items-start left-[790.65px] p-[16.741px] rounded-[8px] top-0 w-[181.667px]" data-name="Card">
      <div aria-hidden className="absolute border-[0.741px] border-[rgba(212,175,55,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <About12 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[23.993px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9931 23.9931">
        <g id="Icon">
          <path d={svgPaths.p14a23d00} id="Vector" stroke="var(--stroke-0, #8A2E3F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99943" />
        </g>
      </svg>
    </div>
  );
}

function Container60() {
  return (
    <div className="relative rounded-[24855100px] shrink-0 size-[47.998px]" data-name="Container">
      <div aria-hidden className="absolute border-[#8a2e3f] border-[1.481px] border-solid inset-0 pointer-events-none rounded-[24855100px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.481px] relative size-full">
        <Icon7 />
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="h-[20px] relative shrink-0 w-[46.169px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Ligconsolata:Regular',sans-serif] leading-[20px] left-[23px] not-italic text-[#e9d8a6] text-[14px] text-center top-[-0.52px] whitespace-nowrap">Hiking</p>
      </div>
    </div>
  );
}

function About13() {
  return (
    <div className="relative shrink-0 w-full" data-name="About">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-center relative size-full">
        <Container60 />
        <Container61 />
      </div>
    </div>
  );
}

function Card10() {
  return (
    <div className="absolute bg-[#2d2d2d] content-stretch flex flex-col h-[133.461px] items-start left-0 p-[16.741px] rounded-[8px] top-[149.46px] w-[181.667px]" data-name="Card">
      <div aria-hidden className="absolute border-[0.741px] border-[rgba(212,175,55,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <About13 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[23.993px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9931 23.9931">
        <g id="Icon">
          <path d={svgPaths.p2e956a80} fill="var(--fill-0, #D4AF37)" id="Vector" stroke="var(--stroke-0, #D4AF37)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99943" />
          <path d={svgPaths.p11eac600} fill="var(--fill-0, #D4AF37)" id="Vector_2" stroke="var(--stroke-0, #D4AF37)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99943" />
          <path d={svgPaths.p8aaad00} fill="var(--fill-0, #D4AF37)" id="Vector_3" stroke="var(--stroke-0, #D4AF37)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99943" />
          <path d={svgPaths.pabac380} fill="var(--fill-0, #D4AF37)" id="Vector_4" stroke="var(--stroke-0, #D4AF37)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99943" />
          <path d={svgPaths.p3c79c180} id="Vector_5" stroke="var(--stroke-0, #D4AF37)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99943" />
        </g>
      </svg>
    </div>
  );
}

function Container62() {
  return (
    <div className="relative rounded-[24855100px] shrink-0 size-[47.998px]" data-name="Container">
      <div aria-hidden className="absolute border-[#d4af37] border-[1.481px] border-solid inset-0 pointer-events-none rounded-[24855100px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.481px] relative size-full">
        <Icon8 />
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="h-[20px] relative shrink-0 w-[69.248px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Ligconsolata:Regular',sans-serif] leading-[20px] left-[35.5px] not-italic text-[#e9d8a6] text-[14px] text-center top-[-0.52px] whitespace-nowrap">Sketching</p>
      </div>
    </div>
  );
}

function About14() {
  return (
    <div className="relative shrink-0 w-full" data-name="About">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-center relative size-full">
        <Container62 />
        <Container63 />
      </div>
    </div>
  );
}

function Card11() {
  return (
    <div className="absolute bg-[#2d2d2d] content-stretch flex flex-col h-[133.461px] items-start left-[197.66px] p-[16.741px] rounded-[8px] top-[149.46px] w-[181.667px]" data-name="Card">
      <div aria-hidden className="absolute border-[0.741px] border-[rgba(212,175,55,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <About14 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[23.993px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9931 23.9931">
        <g id="Icon">
          <path d={svgPaths.p2e956a80} fill="var(--fill-0, #8A2E3F)" id="Vector" stroke="var(--stroke-0, #8A2E3F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99943" />
          <path d={svgPaths.p11eac600} fill="var(--fill-0, #8A2E3F)" id="Vector_2" stroke="var(--stroke-0, #8A2E3F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99943" />
          <path d={svgPaths.p8aaad00} fill="var(--fill-0, #8A2E3F)" id="Vector_3" stroke="var(--stroke-0, #8A2E3F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99943" />
          <path d={svgPaths.pabac380} fill="var(--fill-0, #8A2E3F)" id="Vector_4" stroke="var(--stroke-0, #8A2E3F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99943" />
          <path d={svgPaths.p3c79c180} id="Vector_5" stroke="var(--stroke-0, #8A2E3F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99943" />
        </g>
      </svg>
    </div>
  );
}

function Container64() {
  return (
    <div className="relative rounded-[24855100px] shrink-0 size-[47.998px]" data-name="Container">
      <div aria-hidden className="absolute border-[#8a2e3f] border-[1.481px] border-solid inset-0 pointer-events-none rounded-[24855100px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.481px] relative size-full">
        <Icon9 />
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="h-[20px] relative shrink-0 w-[107.708px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Ligconsolata:Regular',sans-serif] leading-[20px] left-[54px] not-italic text-[#e9d8a6] text-[14px] text-center top-[-0.52px] whitespace-nowrap">Graphic Design</p>
      </div>
    </div>
  );
}

function About15() {
  return (
    <div className="relative shrink-0 w-full" data-name="About">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-center relative size-full">
        <Container64 />
        <Container65 />
      </div>
    </div>
  );
}

function Card12() {
  return (
    <div className="absolute bg-[#2d2d2d] content-stretch flex flex-col h-[133.461px] items-start left-[395.32px] p-[16.741px] rounded-[8px] top-[149.46px] w-[181.667px]" data-name="Card">
      <div aria-hidden className="absolute border-[0.741px] border-[rgba(212,175,55,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <About15 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[23.993px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9931 23.9931">
        <g id="Icon">
          <path d={svgPaths.p32595900} id="Vector" stroke="var(--stroke-0, #D4AF37)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99943" />
          <path d="M7.9977 13.996V14.496" id="Vector_2" stroke="var(--stroke-0, #D4AF37)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99943" />
          <path d="M15.9954 13.996V14.496" id="Vector_3" stroke="var(--stroke-0, #D4AF37)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99943" />
          <path d={svgPaths.p1f830e80} id="Vector_4" stroke="var(--stroke-0, #D4AF37)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99943" />
        </g>
      </svg>
    </div>
  );
}

function Container66() {
  return (
    <div className="relative rounded-[24855100px] shrink-0 size-[47.998px]" data-name="Container">
      <div aria-hidden className="absolute border-[#d4af37] border-[1.481px] border-solid inset-0 pointer-events-none rounded-[24855100px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.481px] relative size-full">
        <Icon10 />
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="h-[20px] relative shrink-0 w-[30.775px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Ligconsolata:Regular',sans-serif] leading-[20px] left-[15px] not-italic text-[#e9d8a6] text-[14px] text-center top-[-0.52px] whitespace-nowrap">Cats</p>
      </div>
    </div>
  );
}

function About16() {
  return (
    <div className="relative shrink-0 w-full" data-name="About">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-center relative size-full">
        <Container66 />
        <Container67 />
      </div>
    </div>
  );
}

function Card13() {
  return (
    <div className="absolute bg-[#2d2d2d] content-stretch flex flex-col h-[133.461px] items-start left-[592.99px] p-[16.741px] rounded-[8px] top-[149.46px] w-[181.667px]" data-name="Card">
      <div aria-hidden className="absolute border-[0.741px] border-[rgba(212,175,55,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <About16 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[23.993px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9931 23.9931">
        <g id="Icon">
          <path d={svgPaths.p21349100} id="Vector" stroke="var(--stroke-0, #8A2E3F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99943" />
        </g>
      </svg>
    </div>
  );
}

function Container68() {
  return (
    <div className="relative rounded-[24855100px] shrink-0 size-[47.998px]" data-name="Container">
      <div aria-hidden className="absolute border-[#8a2e3f] border-[1.481px] border-solid inset-0 pointer-events-none rounded-[24855100px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.481px] relative size-full">
        <Icon11 />
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="h-[40px] relative shrink-0 w-[148.194px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Ligconsolata:Regular',sans-serif] leading-[20px] left-[74.5px] not-italic text-[#e9d8a6] text-[14px] text-center top-[-0.52px] w-[149px]">Restoring Vintage Technology</p>
      </div>
    </div>
  );
}

function About17() {
  return (
    <div className="relative shrink-0 w-full" data-name="About">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-center relative size-full">
        <Container68 />
        <Container69 />
      </div>
    </div>
  );
}

function Card14() {
  return (
    <div className="absolute bg-[#2d2d2d] content-stretch flex flex-col items-start left-[790.65px] p-[16.741px] rounded-[8px] top-[149.46px] w-[181.667px]" data-name="Card">
      <div aria-hidden className="absolute border-[0.741px] border-[rgba(212,175,55,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <About17 />
    </div>
  );
}

function Container49() {
  return (
    <div className="h-[282.917px] relative shrink-0 w-full" data-name="Container">
      <Card5 />
      <Card6 />
      <Card7 />
      <Card8 />
      <Card9 />
      <Card10 />
      <Card11 />
      <Card12 />
      <Card13 />
      <Card14 />
    </div>
  );
}

function ContainerMargin4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] relative size-full">
        <Container49 />
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="relative shrink-0 w-[972.315px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[48px] relative size-full">
        <Container47 />
        <ContainerMargin4 />
      </div>
    </div>
  );
}

function CardMargin2() {
  return <div className="h-[224.944px] relative shrink-0 w-[972.315px]" data-name="Card (margin)" />;
}

function MainContent() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 px-[32px] py-[48px] top-[65px] w-[1036.296px]" data-name="Main Content">
      <Container1 />
      <ContainerMargin1 />
      <Container46 />
      <CardMargin2 />
    </div>
  );
}

function Container71() {
  return (
    <div className="h-[20px] relative shrink-0 w-[423.137px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Ligconsolata:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#7c7c7c] text-[14px] top-[-0.52px] whitespace-nowrap">© 2026 Hazel White. Built with passion for engineering.</p>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[20px] relative shrink-0 w-[94px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Ligconsolata:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#7c7c7c] text-[14px] top-[-0.52px] whitespace-nowrap">Lastest Update</p>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[7.697px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Ligconsolata:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#d4af37] text-[14px] top-[-0.52px] whitespace-nowrap">•</p>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[20px] relative shrink-0 w-[53.854px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Ligconsolata:Regular',sans-serif] leading-[20px] left-[-6.15px] not-italic text-[#7c7c7c] text-[14px] top-0 whitespace-nowrap">07.04.2026</p>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Text6 />
        <Text7 />
        <Text8 />
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="h-[84px] relative shrink-0 w-[1036.296px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between p-[32px] relative size-full">
        <Container71 />
        <Container72 />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-[rgba(17,17,17,0.95)] content-stretch flex flex-col h-[84px] items-start left-0 pt-[0.741px] top-[1714px] w-[1036px]" data-name="Footer">
      <div aria-hidden className="absolute border-[rgba(212,175,55,0.2)] border-solid border-t-[0.741px] inset-0 pointer-events-none" />
      <Container70 />
    </div>
  );
}

function Link() {
  return (
    <div className="h-[35.995px] relative shrink-0 w-[62.766px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Ligconsolata:Regular',sans-serif] leading-[20px] left-[16px] not-italic text-[#e9d8a6] text-[14px] top-[7.48px] whitespace-nowrap">Home</p>
      </div>
    </div>
  );
}

function Layout1() {
  return <div className="absolute bg-[#d4af37] h-[1.991px] left-[13.23px] top-[34px] w-[62.766px]" data-name="Layout" />;
}

function Link1() {
  return (
    <div className="h-[35.995px] relative shrink-0 w-[93.542px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Ligconsolata:Regular',sans-serif] leading-[20px] left-[16px] not-italic text-[#d4af37] text-[14px] top-[7.48px] whitespace-nowrap">About Me</p>
        <Layout1 />
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="h-[35.995px] relative shrink-0 w-[108.924px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Ligconsolata:Regular',sans-serif] leading-[20px] left-[16px] not-italic text-[#e9d8a6] text-[14px] top-[7.48px] whitespace-nowrap">Experience</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="h-[35.995px] relative shrink-0 w-[93.542px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Ligconsolata:Regular',sans-serif] leading-[20px] left-[16px] not-italic text-[#e9d8a6] text-[14px] top-[7.48px] whitespace-nowrap">Projects</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="h-[35.995px] relative shrink-0 w-[139.699px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Ligconsolata:Regular',sans-serif] leading-[20px] left-[16px] not-italic text-[#e9d8a6] text-[14px] top-[7.48px] whitespace-nowrap">Certifications</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="h-[35.995px] relative shrink-0 w-[78.16px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Ligconsolata:Regular',sans-serif] leading-[20px] left-[16px] not-italic text-[#e9d8a6] text-[14px] top-[7.48px] whitespace-nowrap">Resume</p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="h-[35.995px] relative shrink-0 w-[85.845px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Ligconsolata:Regular',sans-serif] leading-[20px] left-[16px] not-italic text-[#e9d8a6] text-[14px] top-[7.48px] whitespace-nowrap">Contact</p>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Link />
        <Link1 />
        <Link2 />
        <Link3 />
        <Link4 />
        <Link5 />
        <Link6 />
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="h-[63.993px] relative shrink-0 w-[1036.296px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[32px] relative size-full">
        <Container74 />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-[rgba(17,17,17,0.95)] content-stretch flex flex-col items-start left-0 pb-[0.741px] top-0 w-[1036.296px]" data-name="Header">
      <div aria-hidden className="absolute border-[rgba(212,175,55,0.2)] border-b-[0.741px] border-solid inset-0 pointer-events-none" />
      <Container73 />
    </div>
  );
}

function Layout() {
  return (
    <div className="h-[1799px] min-h-[610.3699951171875px] relative shrink-0 w-full" data-name="Layout">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Container />
        <MainContent />
        <Footer />
        <Header />
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="h-[610.37px] relative shrink-0 w-[1036.296px]" data-name="Body">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Layout />
      </div>
    </div>
  );
}

export default function EditableWebsiteWithChat() {
  return (
    <div className="bg-[#111] content-stretch flex flex-col items-start relative size-full" data-name="Editable website with chat">
      <Body />
    </div>
  );
}