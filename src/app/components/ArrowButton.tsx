import Link from "next/link";

type ArrowButtonProps = {
    link: string;
};

export default function ArrowButton({ link }: ArrowButtonProps) {
    return (
        <Link href={link}>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M18.9754 8.625L6.90039 20.7" stroke="#141414" strokeWidth="2.3" strokeLinecap="round" />
                <path d="M9.19922 7.11648C9.19922 7.11648 18.4543 6.3363 19.8588 7.7408C21.2634 9.14529 20.483 18.4004 20.483 18.4004" stroke="#141414" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </Link>
    );
}
