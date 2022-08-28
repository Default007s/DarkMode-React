import '../Css/MainContent.css'

export default function MainContent ({darkMode}) {
    const contentContainer = {
        backgroundColor: darkMode ? 'rgb(28, 28, 28)' : '#fff'
    }
    const mainHeading = {
        color: darkMode ? '#fff' : 'rgb(28, 28, 28)'
    }
    const listItem = {
        color: darkMode ? '#fff' : 'rgb(28, 28, 28)'
    }
    return (
    <div className="contentContainer" style={contentContainer}>
        <h1 style={mainHeading}>Fun Facts about React</h1>
        <ul>
            <li style={listItem}>Was first released in 2013</li>
            <li style={listItem}>Was originally created by Jordan Walke</li>
            <li style={listItem}>Has well over 100K stars on Github</li>
            <li style={listItem}>Is maintained by Facebook</li>
            <li style={listItem}>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </div>
    )
}
