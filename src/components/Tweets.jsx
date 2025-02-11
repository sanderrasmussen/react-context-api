import CreateTweet from './CreateTweet'
import Tweet from './Tweet'
import { useContext } from 'react'
import { UserContext } from '../Contexts'
import { ThemeContext } from '../Contexts'
import { TweetsContext } from '../Contexts'


export default function Tweets() {
    const {tweets, setTweets} = useContext(TweetsContext)
    const {CurrentUser, setUser} = useContext(UserContext)
    const {theme, setTheme}= useContext(ThemeContext)
    
  return (
        <main>
            <div className={theme === 'dark' ? 'top-bar dark' : 'top-bar'}>
                <h2 className="title">Home</h2>
            </div>

            <CreateTweet  />

            <div className="show-more-tweets">
                <p>Show 35 Tweets</p>
            </div>

            {tweets.map((tweet, index) => <Tweet tweet={tweet} theme={theme} key={index} />)}
        </main>
    )
}
