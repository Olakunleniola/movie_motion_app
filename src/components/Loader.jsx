const Loader = () => {
    return (
        <div role="status">
            <svg
                className="animate-spin w-8 h-8"
                viewBox="0 0 50 50"
                aria-hidden="true"
            >
                {/* Track */}
                <circle
                    cx="25"
                    cy="25"
                    r="20"
                    fill="none"
                    stroke="#e5e7eb" // Tailwind gray-200
                    strokeWidth="5"
                    opacity="0.25"
                />
                {/* Spinner arc */}
                <circle
                    cx="25"
                    cy="25"
                    r="20"
                    fill="none"
                    stroke="#2563eb" // Tailwind blue-600
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeDasharray="90 130"
                    strokeDashoffset="0"
                    opacity="0.9"
                />
            </svg>
            <span className="sr-only">Loading...</span>
        </div>
    );
};

export default Loader
