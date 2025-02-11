import { useEffect, useState } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user from './assets/data/user.js' 
import { createContext } from 'react'
import { ThemeContext } from './Contexts.jsx'
import { UserContext } from './Contexts.jsx'
import { TweetsContext } from './Contexts.jsx'

function App() {
    const [tweets, setTweets] = useState(defaultTweets)
    const [theme, setTheme] = useState('light');
    const [CurrentUser, setUser] = useState(user);

    useEffect(() => {
        theme === 'light'
          ? document.body.style.backgroundColor = 'white'
          : document.body.style.backgroundColor = 'black'
    }, [theme])

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            <UserContext.Provider value={{CurrentUser, setUser }}>
                <TweetsContext.Provider value={{tweets , setTweets}}>                  
                    <div className="container">
                        <Header  />
                        <Tweets   />
                        <RightSide  />
                    </div>
                </TweetsContext.Provider>
            </UserContext.Provider>
        </ThemeContext.Provider>

    )
}

export { App };
