import { Link } from '@inertiajs/react';

export default function ResponsiveNavLink({ active = false, className = '', children, ...props }) {
    return (
        <Link
            {...props}
            className={`w-full flex items-start ps-3 pe-4 py-2 border-l-4 ${
                active
                    ? 'border-indigo-400 dark_border-indigo-600 text-indigo-700 dark_text-indigo-300 bg-indigo-50 dark_bg-indigo-900/50 focus_text-indigo-800 dark_focus_text-indigo-200 focus_bg-indigo-100 dark_focus_bg-indigo-900 focus_border-indigo-700 dark_focus_border-indigo-300'
                    : 'border-transparent text-gray-600 dark_text-gray-400 hover_text-gray-800 dark_hover_text-gray-200 hover_bg-gray-50 dark_hover_bg-gray-700 hover_border-gray-300 dark_hover_border-gray-600 focus_text-gray-800 dark_focus_text-gray-200 focus_bg-gray-50 dark_focus_bg-gray-700 focus_border-gray-300 dark_focus_border-gray-600'
            } text-base font-medium focus_outline-none transition duration-150 ease-in-out ${className}`}
        >
            {children}
        </Link>
    );
}
