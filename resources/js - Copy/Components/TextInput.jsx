import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextInput({ type = 'text', className = '', isFocused = false, ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={type}
            className={
                'border-gray-300 dark_border-gray-700 dark_bg-gray-900 dark_text-gray-300 focus_border-indigo-500 dark_focus_border-indigo-600 focus_ring-indigo-500 dark_focus_ring-indigo-600 rounded-md shadow-sm ' +
                className
            }
            ref={input}
        />
    );
});
