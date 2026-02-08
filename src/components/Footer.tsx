
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="w-full py-8 mt-12 border-t border-gray-200">
            <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 font-mono">
                <div>
                    &copy; {new Date().getFullYear()} AIBOU LAB. All rights reserved.
                </div>
                <div className="mt-4 md:mt-0 flex space-x-6">
                    <a href="/llms.txt" className="hover:text-aibou-red transition-colors">
                        For AI
                    </a>
                </div>
            </div>
        </footer>
    );
}
