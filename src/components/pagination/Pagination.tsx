type PaginationProps = {
    currPage: number;
    totalRecord: number;
    PER_PAGE: number;
    handlePageSelect: (page: number) => void;
};

export const Pagination: React.FC<PaginationProps> = ({
    currPage,
    handlePageSelect,
    totalRecord,
    PER_PAGE,
}) => {
    const totalPages = Math.ceil(totalRecord / PER_PAGE);

    return (
        <div className="pagination">
            <button
                className="page-number"
                disabled={currPage === 0}
                onClick={() => {
                    handlePageSelect(currPage - 1);
                }}
            >
                ◀️
            </button>
            {Array(totalPages)
                .fill("")
                .map((_i, index) => {
                    return (
                        <span
                            key={index}
                            className={`page-number ${
                                currPage === index ? "active" : ""
                            } `}
                            onClick={() => {
                                handlePageSelect(index);
                            }}
                        >
                            {index + 1}
                        </span>
                    );
                })}
            <button
                className="page-number"
                disabled={currPage === totalPages - 1}
                onClick={() => {
                    handlePageSelect(currPage + 1);
                }}
            >
                ▶️
            </button>
        </div>
    );
};
