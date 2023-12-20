export default function PrimaryButton({ className = '', disabled, children, ...props }) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center px-4 py-2 bg-gray-800 dark_bg-gray-200 border border-transparent rounded-md font-semibold text-xs text-white dark_text-gray-800 uppercase tracking-widest hover_bg-gray-700 dark_hover_bg-white focus_bg-gray-700 dark_focus_bg-white active_bg-gray-900 dark_active_bg-gray-300 focus_outline-none focus_ring-2 focus_ring-indigo-500 focus_ring-offset-2 dark_focus_ring-offset-gray-800 transition ease-in-out duration-150 ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
