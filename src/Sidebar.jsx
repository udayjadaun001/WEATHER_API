import './Sidebar.css';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-item active">
                <span className="icon">🌧️</span>
                <span className="label">Weather</span>
            </div>
            <div className="sidebar-item">
                <span className="icon">📋</span>
                <span className="label">Cities</span>
            </div>
            <div className="sidebar-item">
                <span className="icon">🗺️</span>
                <span className="label">Map</span>
            </div>
            <div className="sidebar-item">
                <span className="icon">⚙️</span>
                <span className="label">Settings</span>
            </div>
        </div>
    );
}
