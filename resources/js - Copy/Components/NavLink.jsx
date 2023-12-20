import { Link } from '@inertiajs/react';

export default function NavLink({ active = false, className = '', children, ...props }) {
    return (
        <Link
            {...props}
            className={
                'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out focus_outline-none ' +
                (active
                    ? 'border-indigo-400 dark_border-indigo-600 text-gray-900 dark_text-gray-100 focus_border-indigo-700 '
                    : 'border-transparent text-gray-500 dark_text-gray-400 hover_text-gray-700 dark_hover_text-gray-300 hover_border-gray-300 dark_hover_border-gray-700 focus_text-gray-700 dark_focus_text-gray-300 focus_border-gray-300 dark_focus_border-gray-700 ') +
                className
            }
        >
            {children}
        </Link>
    );
}
