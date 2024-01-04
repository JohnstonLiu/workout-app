const SplitMeta = ({ split }) => {
    return(
        <div className="split-meta">
            <h4>{split.title}</h4>
            <p><strong>Length: </strong>{split.span}</p>
            <p>{split.created}</p>
        </div>
    )
};

export default SplitMeta;