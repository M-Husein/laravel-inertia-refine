export default function SecondaryButton({ type = 'button', className = '', disabled, children, ...props }) {
    return (
        <button
            {...props}
            type={type}
            className={
                `inline-flex items-center px-4 py-2 bg-white dark_bg-gray-800 border border-gray-300 dark_border-gray-500 rounded-md font-semibold text-xs text-gray-700 dark_text-gray-300 uppercase tracking-widest shadow-sm hover_bg-gray-50 dark_hover_bg-gray-700 focus_outline-none focus_ring-2 focus_ring-indigo-500 focus_ring-offset-2 dark_focus_ring-offset-gray-800 disabled_opacity-25 transition ease-in-out duration-150 ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
