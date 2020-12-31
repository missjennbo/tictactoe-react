# Tic Tac Toe - React 

I used **React Hooks** from [react-redux](https://reactjs.org/docs/hooks-intro.html):
 * `const dispatch = useDispatch()` to dispatch actions
 * `const boardData = useSelector(state => state.boardData);` to consume global state
 * `const [status, setStatus] = useState('gameStatus');` to introduce local state variable

How to publish static app using **Github Pages**: 
* Install github pages as dev dependency `npm install gh-pages --save-dev`
* Add homepage property to `package.json` on top level like `http://{username}.github.io/{repo-name}`
* Add new scripts to `package.json`
    * `"predeploy": "npm run build"`
    * `"deploy": "gh-pages -d build"`
* Run `npm run deploy` to deploy your application on Github Pages

Introduce new tag using git CLI 
* Create new local tag with `git tag -a v1.0 -m "some-message"`
* Push new tag to remote repository with `git push --follow-tags`

Existing tags 
* v1.0 - static app 