import { motion } from "motion/react";
import svgPaths from "./svg-3pth0jy3v4";
import imgCanvas from "./f139ec9f2f056dbd5e34e23781c27a8990d970ed.png";

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
    <div className="absolute border-[#d4af37] border-[0.741px] border-solid h-[32px] left-0 top-[25.27px] w-[175px]" data-name="Container">
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Ligconsolata:Regular',sans-serif] h-[32px] justify-center leading-[0] left-[86.76px] not-italic text-[#d4af37] text-[12px] text-center top-[15.26px] tracking-[0.6px] w-[175px]">
        <p className="leading-[16px]">WELCOME TO MY PORTFOLIO!</p>
      </div>
    </div>
  );
}

function InlineContent() {
  return (
    <div className="absolute h-[65.463px] left-0 right-0 top-0" data-name="Inline content">
      <Container3 />
    </div>
  );
}

function Heading() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Ligconsolata:Regular',sans-serif] leading-[72px] not-italic relative shrink-0 text-[#e9d8a6] text-[72px] whitespace-nowrap">Hazel White</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col h-[36px] items-start left-[5px] pt-[8px] top-[5.8px] w-[462.153px]" data-name="Container">
      <p className="[word-break:break-word] font-['Ligconsolata:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#7c7c7c] text-[18px] whitespace-nowrap">University of Texas at Dallas</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute h-[42px] left-0 right-0 top-[16px]" data-name="Container">
      <Container7 />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[84px] relative shrink-0 w-[462.153px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container6 />
        <p className="[word-break:break-word] absolute font-['Noto_Sans_Georgian:Regular','Noto_Sans:Regular',sans-serif] leading-[32px] left-0 text-[#d4af37] text-[24px] top-[-0.2px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          Computer Engineering Student
        </p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col h-[148px] items-start left-0 right-0 top-[65.46px]" data-name="Container">
      <Heading />
      <Container5 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute content-stretch flex flex-col h-[131px] items-start left-0 max-w-[576px] top-[213.46px] w-[462px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['IBM_Plex_Mono:Regular',sans-serif] leading-[29.25px] not-italic relative shrink-0 text-[#e9d8a6] text-[18px] w-[463px]">I enjoy building, repairing, and understanding complex systems—from electronics and computer architecture to software and cybersecurity.</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[15.995px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9954 15.9954">
        <g id="Icon">
          <path d="M3.33238 7.9977H12.663" id="Vector" stroke="var(--stroke-0, #E9D8A6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33295" />
          <path d={svgPaths.p261fed00} id="Vector_2" stroke="var(--stroke-0, #E9D8A6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33295" />
        </g>
      </svg>
    </div>
  );
}

function IconMargin() {
  return (
    <div className="relative shrink-0" data-name="Icon (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pl-[8px] relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#5b1e2d] content-stretch flex gap-[8px] h-[35.995px] items-center justify-center left-0 px-[12.741px] py-[8.741px] rounded-[2px] top-0 w-[166.597px]" data-name="Button">
      <div aria-hidden className="absolute border-[0.741px] border-[rgba(212,175,55,0.3)] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <p className="[word-break:break-word] font-['IBM_Plex_Mono:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#e9d8a6] text-[14px] text-center whitespace-nowrap">View Projects</p>
      <IconMargin />
    </div>
  );
}

function Link() {
  return (
    <div className="absolute h-[35.995px] left-0 top-0 w-[166.597px]" data-name="Link">
      <Button />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[15.995px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9954 15.9954">
        <g id="Icon">
          <path d={svgPaths.p9020860} id="Vector" stroke="var(--stroke-0, #D4AF37)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33295" />
          <path d={svgPaths.p6f72c20} id="Vector_2" stroke="var(--stroke-0, #D4AF37)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33295" />
          <path d="M7.9977 9.99713V1.99943" id="Vector_3" stroke="var(--stroke-0, #D4AF37)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33295" />
        </g>
      </svg>
    </div>
  );
}

function IconMargin1() {
  return (
    <div className="relative shrink-0" data-name="Icon (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pr-[8px] relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[#111] content-stretch flex gap-[8px] h-[35.995px] items-center justify-center left-[182.59px] px-[12.741px] py-[8.741px] rounded-[2px] top-0 w-[183.391px]" data-name="Button">
      <div aria-hidden className="absolute border-[#d4af37] border-[0.741px] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <IconMargin1 />
      <p className="[word-break:break-word] font-['IBM_Plex_Mono:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#d4af37] text-[14px] text-center whitespace-nowrap">Download Resume</p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[15.995px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9954 15.9954">
        <g clipPath="url(#clip0_25_251)" id="Icon">
          <path d={svgPaths.pd8a0c00} id="Vector" stroke="var(--stroke-0, #E9D8A6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33295" />
          <path d={svgPaths.p3a82fd70} id="Vector_2" stroke="var(--stroke-0, #E9D8A6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33295" />
        </g>
        <defs>
          <clipPath id="clip0_25_251">
            <rect fill="white" height="15.9954" width="15.9954" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconMargin2() {
  return (
    <div className="relative shrink-0" data-name="Icon (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pr-[8px] relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-[#111] content-stretch flex gap-[8px] h-[35.995px] items-center justify-center left-0 px-[12.741px] py-[8.741px] rounded-[2px] top-0 w-[141.412px]" data-name="Button">
      <div aria-hidden className="absolute border-[0.741px] border-[rgba(212,175,55,0.5)] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <IconMargin2 />
      <p className="[word-break:break-word] font-['IBM_Plex_Mono:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#e9d8a6] text-[14px] text-center whitespace-nowrap">Contact Me</p>
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute h-[35.995px] left-0 top-[51.99px] w-[141.412px]" data-name="Link">
      <Button2 />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute h-[88px] left-[-2px] right-[-72.85px] top-[354.27px]" data-name="Container">
      <Link />
      <Button1 />
      <Link1 />
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Noto_Sans_Georgian:Regular','Noto_Sans:Regular','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_Symbols2:Regular',sans-serif] leading-[32px] relative shrink-0 text-[#d4af37] text-[24px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          700+
        </p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Ligconsolata:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#7c7c7c] text-[14px] whitespace-nowrap">Users Supported</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[32.73px] w-[143.38px]" data-name="Container">
      <Container11 />
      <Container12 />
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Noto_Sans_Georgian:Regular','Noto_Sans:Regular','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_Symbols2:Regular',sans-serif] leading-[32px] relative shrink-0 text-[#d4af37] text-[24px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          5+
        </p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Ligconsolata:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#7c7c7c] text-[14px] whitespace-nowrap">Projects</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[159.38px] top-[32.73px] w-[143.391px]" data-name="Container">
      <Container14 />
      <Container15 />
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Noto_Sans_Georgian:Regular','Noto_Sans:Regular','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_Symbols2:Regular',sans-serif] leading-[32px] relative shrink-0 text-[#d4af37] text-[24px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          1
        </p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Ligconsolata:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#7c7c7c] text-[14px] whitespace-nowrap">{`Part-time `}</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[462px] top-[32.82px] w-[144px]" data-name="Container">
      <Container17 />
      <Container18 />
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Noto_Sans_Georgian:Regular','Noto_Sans:Regular','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_Symbols2:Regular',sans-serif] leading-[32px] relative shrink-0 text-[#d4af37] text-[24px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          4
        </p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Ligconsolata:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#7c7c7c] text-[14px] whitespace-nowrap">Internships</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[318.76px] top-[32.73px] w-[143.391px]" data-name="Container">
      <Container20 />
      <Container21 />
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[84.734px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[rgba(212,175,55,0.2)] border-solid border-t-[0.741px] inset-0 pointer-events-none" />
      <Container10 />
      <Container13 />
      <Container16 />
      <Container19 />
    </div>
  );
}

function ContainerMargin() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pt-[64px] right-0 top-[437.46px]" data-name="Container (margin)">
      <Container9 />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[586.197px] left-[13px] top-[9.27px] w-[462.153px]" data-name="Container">
      <InlineContent />
      <Container4 />
      <Paragraph />
      <Container8 />
      <ContainerMargin />
    </div>
  );
}

function Container26() {
  return <div className="bg-[#d4af37] opacity-72 relative rounded-[24855100px] shrink-0 size-[11.991px]" data-name="Container" />;
}

function Text() {
  return (
    <div className="h-[15.995px] relative shrink-0 w-[93.519px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Ligconsolata:Regular',sans-serif] leading-[16px] left-0 not-italic text-[#d4af37] text-[12px] top-[-0.26px] tracking-[0.6px] whitespace-nowrap">SIGNAL ACTIVE</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container26 />
        <Text />
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[15.995px] relative shrink-0 w-[59.352px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Ligconsolata:Regular',sans-serif] leading-[16px] left-0 not-italic text-[#7c7c7c] text-[12px] top-[-0.26px] whitespace-nowrap">CH1: 5.0V</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="relative shrink-0 w-[422.766px]" data-name="Container">
      <div aria-hidden className="absolute border-[rgba(212,175,55,0.3)] border-b-[0.741px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[12.741px] relative size-full">
        <Container25 />
        <Container27 />
      </div>
    </div>
  );
}

function Canvas() {
  return (
    <div className="h-[319.988px] relative shrink-0 w-full" data-name="Canvas">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-contain pointer-events-none size-full" src={imgCanvas} />
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute h-[15.995px] left-[327.57px] opacity-70 top-[9.48px] w-[85.718px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Ligconsolata:Regular',sans-serif] leading-[16px] left-0 not-italic text-[#d4af37] text-[12px] top-[-0.26px] whitespace-nowrap">[V/div: 1.0V]</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute h-[15.995px] left-[327.57px] opacity-70 top-[297.48px] w-[85.718px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Ligconsolata:Regular',sans-serif] leading-[16px] left-0 not-italic text-[#8a2e3f] text-[12px] top-[-0.26px] whitespace-nowrap">[t/div: 10ms]</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="bg-[#111] h-[322.951px] relative shrink-0 w-[422.766px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[1.481px] relative rounded-[inherit] size-full">
        <Canvas />
        <Container29 />
        <Container30 />
      </div>
      <div aria-hidden className="absolute border-[#4a4a4a] border-[1.481px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ContainerMargin1() {
  return (
    <div className="relative shrink-0" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <Container28 />
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute flex h-[12.392px] items-center justify-center left-[-2.73px] top-[-0.2px] w-[9.464px]">
      <div className="flex-none rotate-30">
        <div className="bg-[#d4af37] h-[12px] relative w-[4px]" data-name="Container" />
      </div>
    </div>
  );
}

function ContainerTransform() {
  return (
    <div className="h-[12px] relative shrink-0 w-[4px]" data-name="Container (transform)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container34 />
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="bg-[#111] relative rounded-[24855100px] shrink-0 size-[31.991px]" data-name="Container">
      <div aria-hidden className="absolute border-[#4a4a4a] border-[1.481px] border-solid inset-0 pointer-events-none rounded-[24855100px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.481px] relative size-full">
        <ContainerTransform />
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute flex h-[9.464px] items-center justify-center left-[-4.2px] top-[1.27px] w-[12.392px]">
      <div className="flex-none rotate-60">
        <div className="bg-[#d4af37] h-[12px] relative w-[4px]" data-name="Container" />
      </div>
    </div>
  );
}

function ContainerTransform1() {
  return (
    <div className="h-[12px] relative shrink-0 w-[4px]" data-name="Container (transform)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container36 />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="bg-[#111] relative rounded-[24855100px] shrink-0 size-[31.991px]" data-name="Container">
      <div aria-hidden className="absolute border-[#4a4a4a] border-[1.481px] border-solid inset-0 pointer-events-none rounded-[24855100px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.481px] relative size-full">
        <ContainerTransform1 />
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute flex h-[4px] items-center justify-center left-[-4.01px] top-[4px] w-[12px]">
      <div className="flex-none rotate-90">
        <div className="bg-[#d4af37] h-[12px] relative w-[4px]" data-name="Container" />
      </div>
    </div>
  );
}

function ContainerTransform2() {
  return (
    <div className="h-[12px] relative shrink-0 w-[4px]" data-name="Container (transform)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container38 />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="bg-[#111] relative rounded-[24855100px] shrink-0 size-[31.991px]" data-name="Container">
      <div aria-hidden className="absolute border-[#4a4a4a] border-[1.481px] border-solid inset-0 pointer-events-none rounded-[24855100px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.481px] relative size-full">
        <ContainerTransform2 />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container33 />
        <Container35 />
        <Container37 />
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[15.995px] relative shrink-0 w-[98.912px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Ligconsolata:Regular',sans-serif] leading-[16px] left-0 not-italic text-[#7c7c7c] text-[12px] top-[-0.26px] whitespace-nowrap">HAZEL_WHITE.SYS</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[422.766px]" data-name="Container">
      <Container32 />
      <Container39 />
    </div>
  );
}

function ContainerMargin2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[16px] relative size-full">
        <Container31 />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="bg-[#2d2d2d] drop-shadow-[0px_25px_25px_rgba(0,0,0,0.25)] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#4a4a4a] border-[3.704px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[19.704px] relative size-full">
        <Container24 />
        <ContainerMargin1 />
        <ContainerMargin2 />
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute left-[-16px] opacity-30 size-[79.988px] top-[-16px]" data-name="Container">
      <div aria-hidden className="absolute border-[#d4af37] border-[0.741px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute left-[414.17px] opacity-30 size-[63.993px] top-[407.06px]" data-name="Container">
      <div aria-hidden className="absolute border-[#8a2e3f] border-[0.741px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container22() {
  return (
    <motion.div className="absolute content-stretch flex flex-col items-start left-[502.15px] top-[44.01px] w-[462.164px]" data-name="Container">
      <Container23 />
      <Container40 />
      <Container41 />
    </motion.div>
  );
}

function Container1() {
  return (
    <div className="h-[607.083px] relative shrink-0 w-[972.315px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container2 />
        <Container22 />
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Ligconsolata:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#d4af37] text-[14px] text-center whitespace-nowrap">SPECIALIZATION</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="h-[28px] relative shrink-0 w-[225.081px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['IBM_Plex_Mono:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#e9d8a6] text-[14px] text-center whitespace-nowrap">Computer Engineering</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[225.081px]" data-name="Container">
      <Container45 />
      <Container46 />
    </div>
  );
}

function Container48() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Ligconsolata:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#d4af37] text-[14px] text-center whitespace-nowrap">LOCATION</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="h-[28px] relative shrink-0 w-[225.081px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['IBM_Plex_Mono:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#e9d8a6] text-[14px] text-center whitespace-nowrap">Plano, Texas</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[249.07px] top-0 w-[225.081px]" data-name="Container">
      <Container48 />
      <Container49 />
    </div>
  );
}

function Container51() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Ligconsolata:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#d4af37] text-[14px] text-center whitespace-nowrap">FOCUS AREAS</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="relative shrink-0 w-[225.081px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['IBM_Plex_Mono:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#e9d8a6] text-[14px] text-center w-[226px]">Hardware • Software • Security</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[498.15px] top-0 w-[225.081px]" data-name="Container">
      <Container51 />
      <Container52 />
    </div>
  );
}

function Container54() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Ligconsolata:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#d4af37] text-[14px] text-center whitespace-nowrap">STATUS</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-[161px]" data-name="Container">
      <p className="[word-break:break-word] font-['IBM_Plex_Mono:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#d4af37] text-[14px] text-center w-[226px]">Available for Opportunities</p>
    </div>
  );
}

function ContainerMargin4() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center pt-[8px] relative size-full">
        <Container55 />
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[773px] top-[0.44px] w-[166px]" data-name="Container">
      <Container54 />
      <ContainerMargin4 />
    </div>
  );
}

function Text1() {
  return <div className="absolute bg-[#d4af37] h-[7.998px] left-[769px] opacity-72 rounded-[24855100px] top-[43.44px] w-[7.396px]" data-name="Text" />;
}

function Text2() {
  return <div className="absolute bg-[#d4af37] h-[7.998px] left-[932px] opacity-72 rounded-[24855100px] top-[43.44px] w-[7.396px]" data-name="Text" />;
}

function Container43() {
  return (
    <div className="h-[67.998px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container44 />
        <Container47 />
        <Container50 />
        <Container53 />
        <Text1 />
        <Text2 />
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[32.741px] relative shrink-0 w-[972.315px]" data-name="Container">
      <div aria-hidden className="absolute border-[rgba(212,175,55,0.2)] border-solid border-t-[0.741px] inset-0 pointer-events-none" />
      <Container43 />
    </div>
  );
}

function ContainerMargin3() {
  return (
    <div className="relative shrink-0" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[64px] relative size-full">
        <Container42 />
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 max-w-[1280px] px-[32px] py-[80px] top-[90px] w-[1036.296px]" data-name="Section">
      <Container1 />
      <ContainerMargin3 />
    </div>
  );
}

function Layout1() {
  return <div className="absolute bg-[#d4af37] h-[1.991px] left-0 top-[34px] w-[62.766px]" data-name="Layout" />;
}

function Link2() {
  return (
    <div className="h-[35.995px] relative shrink-0 w-[62.766px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Ligconsolata:Regular',sans-serif] leading-[20px] left-[16px] not-italic text-[#d4af37] text-[14px] top-[7.48px] whitespace-nowrap">Home</p>
        <Layout1 />
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="h-[35.995px] relative shrink-0 w-[93.542px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Ligconsolata:Regular',sans-serif] leading-[20px] left-[16px] not-italic text-[#e9d8a6] text-[14px] top-[7.48px] whitespace-nowrap">About Me</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="h-[35.995px] relative shrink-0 w-[108.924px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Ligconsolata:Regular',sans-serif] leading-[20px] left-[16px] not-italic text-[#e9d8a6] text-[14px] top-[7.48px] whitespace-nowrap">Experience</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="h-[35.995px] relative shrink-0 w-[93.542px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Ligconsolata:Regular',sans-serif] leading-[20px] left-[16px] not-italic text-[#e9d8a6] text-[14px] top-[7.48px] whitespace-nowrap">Projects</p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="h-[35.995px] relative shrink-0 w-[139.699px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Ligconsolata:Regular',sans-serif] leading-[20px] left-[16px] not-italic text-[#e9d8a6] text-[14px] top-[7.48px] whitespace-nowrap">Certifications</p>
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="h-[35.995px] relative shrink-0 w-[78.16px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Ligconsolata:Regular',sans-serif] leading-[20px] left-[16px] not-italic text-[#e9d8a6] text-[14px] top-[7.48px] whitespace-nowrap">Resume</p>
      </div>
    </div>
  );
}

function Link8() {
  return (
    <div className="h-[35.995px] relative shrink-0 w-[85.845px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Ligconsolata:Regular',sans-serif] leading-[20px] left-[16px] not-italic text-[#e9d8a6] text-[14px] top-[7.48px] whitespace-nowrap">Contact</p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Link2 />
        <Link3 />
        <Link4 />
        <Link5 />
        <Link6 />
        <Link7 />
        <Link8 />
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="h-[63.993px] relative shrink-0 w-[1036.296px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[32px] relative size-full">
        <Container57 />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-[rgba(17,17,17,0.95)] content-stretch flex flex-col items-start left-0 pb-[0.741px] top-0 w-[1036.296px]" data-name="Header">
      <div aria-hidden className="absolute border-[rgba(212,175,55,0.2)] border-b-[0.741px] border-solid inset-0 pointer-events-none" />
      <Container56 />
    </div>
  );
}

function Layout() {
  return (
    <div className="h-[1065px] min-h-[610.3699951171875px] relative shrink-0 w-full" data-name="Layout">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Container />
        <Section />
        <Header />
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="h-[958px] relative shrink-0 w-[1036px]" data-name="Body">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Layout />
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="h-[20px] relative shrink-0 w-[423.137px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Ligconsolata:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#7c7c7c] text-[14px] top-[-0.52px] whitespace-nowrap">© 2026 Hazel White. Built with passion for engineering.</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[94px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Ligconsolata:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#7c7c7c] text-[14px] top-[-0.52px] whitespace-nowrap">Lastest Update</p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[7.697px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Ligconsolata:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#d4af37] text-[14px] top-[-0.52px] whitespace-nowrap">•</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[53.854px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Ligconsolata:Regular',sans-serif] leading-[20px] left-[-6.15px] not-italic text-[#7c7c7c] text-[14px] top-0 whitespace-nowrap">07.04.2026</p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Text3 />
        <Text4 />
        <Text5 />
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="h-[91px] relative shrink-0 w-[1036px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between p-[32px] relative size-full">
        <Container59 />
        <Container60 />
      </div>
    </div>
  );
}

export default function EditableWebsiteWithChat() {
  return (
    <div className="bg-[#111] content-stretch flex flex-col items-start relative size-full" data-name="Editable website with chat">
      <Body />
      <Container58 />
    </div>
  );
}