export default function Checkbox({ className = '', ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                'rounded dark_bg-gray-900 border-gray-300 dark_border-gray-700 text-indigo-600 shadow-sm focus_ring-indigo-500 dark_focus_ring-indigo-600 dark_focus_ring-offset-gray-800 ' +
                className
            }
        />
    );
}
