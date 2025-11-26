export default function SectionDivider({
    position = "bottom",
    fill = "fill-background"
}: {
    position?: "top" | "bottom";
    fill?: string;
}) {
    return (
        <div
            className={`absolute left-0 w-full overflow-hidden leading-none z-20 ${position === "bottom" ? "bottom-0 translate-y-[90%]" : "top-0 -translate-y-[90%] rotate-180"
                }`}
        >
            <svg
                className="relative block w-[calc(100%+1.3px)] h-[40px] md:h-[60px]"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
            >
                {/* Border (Black) */}
                <path
                    d="M0 0 V10 L5 2 L10 8 L15 1 L20 9 L25 3 L30 8 L35 2 L40 9 L45 1 L50 8 L55 3 L60 9 L65 2 L70 8 L75 1 L80 9 L85 3 L90 8 L95 2 L100 10 V0 Z"
                    className="fill-black"
                    transform="translate(0, 1)"
                />
                {/* Fill (Dynamic Color) */}
                <path
                    d="M0 0 V10 L5 2 L10 8 L15 1 L20 9 L25 3 L30 8 L35 2 L40 9 L45 1 L50 8 L55 3 L60 9 L65 2 L70 8 L75 1 L80 9 L85 3 L90 8 L95 2 L100 10 V0 Z"
                    className={fill}
                />
            </svg>
        </div>
    );
}
