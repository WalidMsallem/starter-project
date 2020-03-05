# React Components

## Commit

Commit helps the user to see the changes they made to the file throughout time.

| Property          | Type                   | Default value | Description                              |
| :---------------- | :--------------------- | :------------ | :--------------------------------------- |
| `commits`         | { [key]: &lt;any&gt; } | _required_    | commits is the list of all the changes . |
| `fetchCommitById` | func                   | _required_    | fetches all the commits By id            |

<sub>Source: **app\pages\Commit\Commit.jsx**</sub>

---

## CommitIndex

<sub>Source: **app\pages\Commit\index.js**</sub>

---

## Commits

the list of Commits

| Property          | Type                   | Default value | Description                                                                                                                                                                         |
| :---------------- | :--------------------- | :------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `commits`         | { [key]: &lt;any&gt; } | _required_    | The commits that were done previously by other users to be displayed as history                                                                                                     |
| `fetchCommits`    | func                   | _required_    | fetches all the commits .                                                                                                                                                           |
| `revertToACommit` | func                   | _required_    | Function that reverts to a selected commit                                                                                                                                          |
| `intl`            | custom                 |               | The Intl object is the namespace for the ECMAScript Internationalization API, which provides language sensitive string comparison, number formatting, and date and time formatting. |
| `roles`           | array                  | _required_    | user roles e.g. CONTENT_ARCHITECT                                                                                                                                                   |

<sub>Source: **app\pages\Commits\Commits.jsx**</sub>

---

## CommitsIndex

<sub>Source: **app\pages\Commits\index.js**</sub>

---

## Dashboard

in Dashboard the user can see all the projects and can search, create, update or delete a project.

| Property                  | Type   | Default value | Description                                                                                                                                                                         |
| :------------------------ | :----- | :------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `fetchProjects`           | func   | _required_    | fetch all the project.                                                                                                                                                              |
| `projects`                | object | _required_    | the list of all the projects.                                                                                                                                                       |
| `addProject`              | func   | _required_    | add project takes name, description, startDate and dueDate as a param.                                                                                                              |
| `deleteProject`           | func   | _required_    | delete project, takes id as a param.                                                                                                                                                |
| `roles`                   | array  | _required_    | user roles e.g. CONTENT_ARCHITECT                                                                                                                                                   |
| `intl`                    | custom |               | The Intl object is the namespace for the ECMAScript Internationalization API, which provides language sensitive string comparison, number formatting, and date and time formatting. |
| `setIsVisible`            | func   | _required_    | whether or not the modal is visible.                                                                                                                                                |
| `updateProject`           | func   | _required_    | update a project,takes name, description, startDate and dueDate as a param.                                                                                                         |
| `setIsUpdateModalVisible` | func   | _required_    | whether or not the update modal is visible                                                                                                                                          |

<sub>Source: **app\pages\Dashboard\Dashboard.jsx**</sub>

---

## ProjectCard

in ProjectCard the user can update or delete a project, also go to project detail by click in project card.

| Property                  | Type   | Default value | Description                                                                             |
| :------------------------ | :----- | :------------ | :-------------------------------------------------------------------------------------- |
| `cards`                   | array  |               | cards contain the name, description and the status e.g. NEW IN_PROGRESS of the project. |
| `updateProject`           | func   | _required_    | update Project, takes name, description, startDate and dueDate as a param.              |
| `setIsUpdateModalVisible` | func   | _required_    | whether or not the modal is visible                                                     |
| `deleteProject`           | func   |               | delete project, takes id as a param.                                                    |
| `roles`                   | array  | _required_    | user roles e.g. CONTENT_ARCHITECT                                                       |
| `projects`                | object | _required_    | the list of all the projects.                                                           |

<sub>Source: **app\pages\Dashboard\ProjectCard\ProjectCard.jsx**</sub>

---

## ProjectModal

the Project Modal

| Property       | Type   | Default value | Description                                                                                   |
| :------------- | :----- | :------------ | :-------------------------------------------------------------------------------------------- |
| `isVisible`    | bool   |               | whether or not the modal is visible.                                                          |
| `handleCancel` | func   |               | Function to execute when cancel is clicked                                                    |
| `handleOk`     | func   |               | handleOk is used to validate and submit the user input                                        |
| `project`      | object |               | the project contain the name, description and the status e.g. NEW IN_PROGRESS of the project. |
| `form`         | any    |               | Form is used to collect the user input                                                        |

<sub>Source: **app\pages\Dashboard\ProjectModal\ProjectModal.jsx**</sub>

---

## ProjectsIndex

<sub>Source: **app\pages\Dashboard\index.js**</sub>

---

## AddAssessment

in AddAssessment Component the user can add an assessment

| Property                    | Type | Default value | Description                                     |
| :-------------------------- | :--- | :------------ | :---------------------------------------------- |
| `addAssessment`             | func | _required_    | add Assessment, takes assessment as a param.    |
| `setIsAddAssessmentVisible` | func | _required_    | whether or not the assessment input is visible. |

<sub>Source: **app\pages\Editor\AddAssessment\AddAssessment.jsx**</sub>

---

## AddLearningStyle

in AddLearningStyle Component the user can add style.

| Property            | Type | Default value | Description         |
| :------------------ | :--- | :------------ | :------------------ |
| `addLearningStyle`  | func | _required_    | add Learning Style. |
| `setIsAddLSVisible` | func | _required_    | setIsAddLSVisible.  |

<sub>Source: **app\pages\Editor\AddLearningStyle\AddLearningStyle.jsx**</sub>

---

## AddPage

the user can add page

| Property              | Type   | Default value | Description                               |
| :-------------------- | :----- | :------------ | :---------------------------------------- |
| `learningStyleId`     | string | _required_    | learning Style Id                         |
| `type`                | number | _required_    | type of the learningStyle                 |
| `addPage`             | func   | _required_    | add page,takes learningStyleId as param.  |
| `setIsAddPageVisible` | func   | _required_    | whether or not the button add is visible. |

<sub>Source: **app\pages\Editor\AddPage\AddPage.jsx**</sub>

---

## AsideBar

AsideBar

| Property                        | Type   | Default value | Description                                                                                                                                                                         |
| :------------------------------ | :----- | :------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `learningStyles`                | array  | _required_    | learning Styles                                                                                                                                                                     |
| `assessments`                   | array  | _required_    | assessments                                                                                                                                                                         |
| `keywords`                      | array  | _required_    | keywords                                                                                                                                                                            |
| `selectedLearningStyleId`       | string |               | selected Learning Style by Id                                                                                                                                                       |
| `selectedKeywordId`             | string |               | selected Keyword by Id                                                                                                                                                              |
| `setIsAddLSVisible`             | func   | _required_    | set Is Add LS Visible                                                                                                                                                               |
| `setIsAddPageVisible`           | func   | _required_    | whether or not the button add is visible.                                                                                                                                           |
| `setIsDrawerVisible`            | func   | _required_    | set Is Drawer Visible                                                                                                                                                               |
| `deleteLearningStyle`           | func   | _required_    | delete Learning Style, takes id as a param.                                                                                                                                         |
| `updateSelectedLearningStyleId` | func   | _required_    | update Selected Learning Style Id                                                                                                                                                   |
| `setIsAddAssessmentVisible`     | func   | _required_    | whether or not the assessment input is visible.                                                                                                                                     |
| `deleteAssessment`              | func   | _required_    | delete Assessment, takes id as a param.                                                                                                                                             |
| `updateSelectedAssessmentId`    | func   | _required_    | update Selected Assessment by Id                                                                                                                                                    |
| `addKeyword`                    | func   | _required_    | add Keyword                                                                                                                                                                         |
| `updateKeyword`                 | func   | _required_    | update Keyword                                                                                                                                                                      |
| `deleteKeyword`                 | func   | _required_    | delete Keyword, takes id as a param.                                                                                                                                                |
| `updateSelectedKeywordId`       | func   | _required_    | update Selected Keyword by Id                                                                                                                                                       |
| `intl`                          | custom |               | The Intl object is the namespace for the ECMAScript Internationalization API, which provides language sensitive string comparison, number formatting, and date and time formatting. |
| `selections`                    | array  |               | selections                                                                                                                                                                          |

<sub>Source: **app\pages\Editor\AsideBar\AsideBar.jsx**</sub>

---

## Chat

chat Component

| Property          | Type   | Default value | Description                                                                                                                                                                         |
| :---------------- | :----- | :------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `closeChat`       | func   | _required_    | close Chat                                                                                                                                                                          |
| `intl`            | custom |               | The Intl object is the namespace for the ECMAScript Internationalization API, which provides language sensitive string comparison, number formatting, and date and time formatting. |
| `instantMessages` | array  | _required_    | instant Messages                                                                                                                                                                    |
| `sendChatMessage` | array  | _required_    | send Chat Message                                                                                                                                                                   |
| `connection`      | object | _required_    | connection                                                                                                                                                                          |
| `skillId`         | string | _required_    | skill Id                                                                                                                                                                            |

<sub>Source: **app\pages\Editor\Chat\Chat.jsx**</sub>

---

## ChooseType

ChooseType Component

| Property      | Type   | Default value | Description          |
| :------------ | :----- | :------------ | :------------------- |
| `name`        | object | _required_    | name                 |
| `icon`        | string | _required_    | icon                 |
| `handleClick` | func   | _required_    | handleClick function |

<sub>Source: **app\pages\Editor\ChooseType\ChooseType.jsx**</sub>

---

## CodeCompiling

CodeCompiling Component

| Property                           | Type                        | Default value | Description                                                                                                                                                                         |
| :--------------------------------- | :-------------------------- | :------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `assessment`                       | object                      | _required_    | assessments                                                                                                                                                                         |
| `updateCodeCompilingQuestion`      | func                        | _required_    | update Code Compiling Question                                                                                                                                                      |
| `updateCodeCompilingLanguage`      | func                        | _required_    | update Code Compiling Language                                                                                                                                                      |
| `updateCodeCompilingSolution`      | func                        | _required_    | update Code Compiling Solution                                                                                                                                                      |
| `updateCodeCompilingPlaceholder`   | func                        | _required_    | update Code Compiling Place holder                                                                                                                                                  |
| `updateCodeCompilingAddUseCase`    | func                        | _required_    | update Code Compiling Add Use Case                                                                                                                                                  |
| `updateCodeCompilingDeleteUseCase` | func                        | _required_    | update Code Compiling Delete Use Case                                                                                                                                               |
| `updateCodeCompilingUpdateUseCase` | func                        | _required_    | update Code Compiling Update Use Case                                                                                                                                               |
| `skill`                            | { [key]: &lt;objectOf&gt; } | _required_    | skill                                                                                                                                                                               |
| `intl`                             | custom                      |               | The Intl object is the namespace for the ECMAScript Internationalization API, which provides language sensitive string comparison, number formatting, and date and time formatting. |
| `selections`                       | array                       |               | selections                                                                                                                                                                          |

<sub>Source: **app\pages\Editor\CodeCompiling\CodeCompiling.jsx**</sub>

---

## CrdtEditor

<sub>Source: **app\pages\Editor\CrdtEditor\CrdtEditor.jsx**</sub>

---

## Editor

Editor Component

| Property                           | Type   | Default value | Description                                                                                                                                                                         |
| :--------------------------------- | :----- | :------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `skill`                            | object |               | skill                                                                                                                                                                               |
| `match`                            | object | _required_    | Url info.                                                                                                                                                                           |
| `learningStyles`                   | array  | _required_    | learning Styles                                                                                                                                                                     |
| `keywords`                         | array  | _required_    | keywords                                                                                                                                                                            |
| `assessments`                      | array  | _required_    | assessments                                                                                                                                                                         |
| `connectedUsers`                   | array  |               | connected Users                                                                                                                                                                     |
| `fetchSkill`                       | func   | _required_    | fetch Skill                                                                                                                                                                         |
| `updateSkill`                      | func   | _required_    | update Skill                                                                                                                                                                        |
| `addLearningStyle`                 | func   | _required_    | add Learning Style                                                                                                                                                                  |
| `addPage`                          | func   | _required_    | add page                                                                                                                                                                            |
| `deletePage`                       | func   | _required_    | delete page, takes pageId as a param.                                                                                                                                               |
| `deleteLearningStyle`              | func   | _required_    | delete Learning Style                                                                                                                                                               |
| `updateSelectedLearningStyleId`    | func   | _required_    | update Selected Learning Style by Id                                                                                                                                                |
| `addAssessment`                    | func   | _required_    | add Assessment                                                                                                                                                                      |
| `deleteAssessment`                 | func   | _required_    | delete Assessment, takes id as a param.                                                                                                                                             |
| `updateSelectedAssessmentId`       | func   | _required_    | update Selected Assessment by Id                                                                                                                                                    |
| `addKeyword`                       | func   | _required_    | add Keyword                                                                                                                                                                         |
| `updateKeyword`                    | func   | _required_    | update Keyword                                                                                                                                                                      |
| `deleteKeyword`                    | func   | _required_    | delete Keyword, takes id as a param.                                                                                                                                                |
| `updateSelectedKeywordId`          | func   | _required_    | update Selected Keyword by Id                                                                                                                                                       |
| `updateSelectedPageId`             | func   | _required_    | update Selected Page by Id                                                                                                                                                          |
| `updateReorderChallengeQuestion`   | func   | _required_    | update Reorder Challenge Question                                                                                                                                                   |
| `addReorderChallengeStatement`     | func   | _required_    | add Reorder Challenge Statement                                                                                                                                                     |
| `updateReorderChallengeStatement`  | func   | _required_    | update Reorder Challenge Statement                                                                                                                                                  |
| `deleteReorderChallengeStatement`  | func   | _required_    | delete Reorder Challenge Statement, takes id as a param.                                                                                                                            |
| `updateCodeCompilingQuestion`      | func   | _required_    | update Code Compiling Question                                                                                                                                                      |
| `updateCodeCompilingLanguage`      | func   | _required_    | update Code Compiling Language                                                                                                                                                      |
| `updateCodeCompilingSolution`      | func   | _required_    | update Code Compiling Solution                                                                                                                                                      |
| `updateCodeCompilingPlaceholder`   | func   | _required_    | update Code Compiling Place holder                                                                                                                                                  |
| `updateCodeCompilingAddUseCase`    | func   | _required_    | update Code Compiling Add Use Case                                                                                                                                                  |
| `updateCodeCompilingDeleteUseCase` | func   | _required_    | update Code Compiling Delete Use Case                                                                                                                                               |
| `updateCodeCompilingUpdateUseCase` | func   | _required_    | update Code Compiling Update Use Case                                                                                                                                               |
| `addQuizQuestion`                  | func   | _required_    | add Quiz Question                                                                                                                                                                   |
| `updateQuizQuestion`               | func   | _required_    | update Quiz Question                                                                                                                                                                |
| `deleteQuizQuestion`               | func   | _required_    | delete Quiz Question, takes id as a param.                                                                                                                                          |
| `updateQuizLanguage`               | func   | _required_    | update Quiz Language                                                                                                                                                                |
| `updateQuizCode`                   | func   | _required_    | update Quiz Code                                                                                                                                                                    |
| `addQuizChoice`                    | func   | _required_    | add Quiz Choice                                                                                                                                                                     |
| `updateQuizChoice`                 | func   | _required_    | update Quiz Choice                                                                                                                                                                  |
| `deleteQuizChoice`                 | func   | _required_    | delete Quiz Choice, takes id as a param.                                                                                                                                            |
| `addFibElement`                    | func   | _required_    | add Fib Element                                                                                                                                                                     |
| `updateFibElement`                 | func   | _required_    | update Fib Element                                                                                                                                                                  |
| `deleteFibElement`                 | func   | _required_    | delete Fib Element, takes id as a param.                                                                                                                                            |
| `push`                             | func   | _required_    | push                                                                                                                                                                                |
| `intl`                             | custom |               | The Intl object is the namespace for the ECMAScript Internationalization API, which provides language sensitive string comparison, number formatting, and date and time formatting. |
| `clearState`                       | func   | _required_    | clear State                                                                                                                                                                         |
| `connection`                       | object | _required_    | connection                                                                                                                                                                          |
| `isConnectedToLiveshare`           | bool   | _required_    | is Connected To Liveshare                                                                                                                                                           |
| `connectionStatus`                 | number | _required_    | connection Status                                                                                                                                                                   |
| `instantMessages`                  | array  | _required_    | instant Messages                                                                                                                                                                    |
| `createOrLoadSkillInstance`        | func   | _required_    | create Or Load Skill Instance                                                                                                                                                       |
| `closeOrUnloadSkillInstance`       | func   | _required_    | close Or Unload Skill Instance                                                                                                                                                      |
| `sendContentOperationMessage`      | func   | _required_    | send Content Operation Message                                                                                                                                                      |
| `setPageContent`                   | func   | _required_    | set Page Content                                                                                                                                                                    |
| `sendChatMessage`                  | func   | _required_    | send Chat Message                                                                                                                                                                   |
| `selections`                       | object |               | selections                                                                                                                                                                          |

<sub>Source: **app\pages\Editor\Editor.jsx**</sub>

---

## ErrorSaveModal

Error Save Modal Component

| Property   | Type   | Default value | Description                                                                                                                                                                         |
| :--------- | :----- | :------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `skill`    | object |               | skill                                                                                                                                                                               |
| `onCancel` | func   | _required_    | Function to execute when cancel is clicked                                                                                                                                          |
| `onOk`     | func   | _required_    | onOk is used to validate and submit the user input                                                                                                                                  |
| `intl`     | custom |               | The Intl object is the namespace for the ECMAScript Internationalization API, which provides language sensitive string comparison, number formatting, and date and time formatting. |

<sub>Source: **app\pages\Editor\ErrorSaveModal\ErrorSaveModal.jsx**</sub>

---

## FillInTheBlanks

Fill In The Blanks component

| Property           | Type   | Default value | Description                                                                                                                                                                         |
| :----------------- | :----- | :------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `assessment`       | object | _required_    | assessment                                                                                                                                                                          |
| `skill`            | object | _required_    | skill                                                                                                                                                                               |
| `addFibElement`    | func   | _required_    | add Fib Element                                                                                                                                                                     |
| `updateFibElement` | func   | _required_    | update Fib Element                                                                                                                                                                  |
| `deleteFibElement` | func   | _required_    | delete Fib Element, takes id as a param.                                                                                                                                            |
| `intl`             | custom |               | The Intl object is the namespace for the ECMAScript Internationalization API, which provides language sensitive string comparison, number formatting, and date and time formatting. |
| `selections`       | array  |               | selections                                                                                                                                                                          |

<sub>Source: **app\pages\Editor\FillInTheBlanks\FillInTheBlanks.jsx**</sub>

---

## MdxPage

MdxPage component

| Property   | Type   | Default value | Description                            |
| :--------- | :----- | :------------ | :------------------------------------- |
| `selected` | bool   | _required_    | Form is used to collect the user input |
| `content`  | string |               | content                                |
| `index`    | number | _required_    | index                                  |
| `onClick`  | func   | _required_    | collect the user input                 |

<sub>Source: **app\pages\Editor\MdxPage\MdxPage.jsx**</sub>

---

## Quiz

Quiz Component

| Property             | Type   | Default value | Description                                                                                                                                                                         |
| :------------------- | :----- | :------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `assessment`         | object | _required_    | assessment                                                                                                                                                                          |
| `skill`              | object | _required_    | skill                                                                                                                                                                               |
| `addQuizQuestion`    | func   | _required_    | add Quiz Question                                                                                                                                                                   |
| `updateQuizQuestion` | func   | _required_    | update Quiz Question                                                                                                                                                                |
| `deleteQuizQuestion` | func   | _required_    | delete Quiz Question, takes id as a param.                                                                                                                                          |
| `updateQuizLanguage` | func   | _required_    | update Quiz Language                                                                                                                                                                |
| `updateQuizCode`     | func   | _required_    | update Quiz Code                                                                                                                                                                    |
| `addQuizChoice`      | func   | _required_    | add Quiz Choice                                                                                                                                                                     |
| `updateQuizChoice`   | func   | _required_    | update Quiz Choice                                                                                                                                                                  |
| `deleteQuizChoice`   | func   | _required_    | delete Quiz Choice, takes id as a param.                                                                                                                                            |
| `intl`               | custom |               | The Intl object is the namespace for the ECMAScript Internationalization API, which provides language sensitive string comparison, number formatting, and date and time formatting. |
| `selections`         | array  |               | selections                                                                                                                                                                          |

<sub>Source: **app\pages\Editor\Quiz\Quiz.jsx**</sub>

---

## ReorderChallenge

Reorder Challenge Component

| Property                          | Type   | Default value | Description                                                                                                                                                                         |
| :-------------------------------- | :----- | :------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `assessment`                      | object | _required_    | assessments                                                                                                                                                                         |
| `skill`                           | object | _required_    | skill                                                                                                                                                                               |
| `addReorderChallengeStatement`    | func   | _required_    | add Reorder Challenge Statement                                                                                                                                                     |
| `updateReorderChallengeStatement` | func   | _required_    | update Reorder Challenge Statement                                                                                                                                                  |
| `deleteReorderChallengeStatement` | func   | _required_    | delete Reorder Challenge Statement, takes id as a param.                                                                                                                            |
| `updateReorderChallengeQuestion`  | func   | _required_    | update Reorder Challenge Question                                                                                                                                                   |
| `intl`                            | custom |               | The Intl object is the namespace for the ECMAScript Internationalization API, which provides language sensitive string comparison, number formatting, and date and time formatting. |
| `selections`                      | array  |               | selections                                                                                                                                                                          |

<sub>Source: **app\pages\Editor\ReorderChallenge\ReorderChallenge.jsx**</sub>

---

## SlideItem

Slide Item component

| Property   | Type   | Default value | Description   |
| :--------- | :----- | :------------ | :------------ |
| `selected` | bool   | _required_    | selected item |
| `index`    | number | _required_    | index         |

<sub>Source: **app\pages\Editor\SlideItem\SlideItem.jsx**</sub>

---

## TestCase

TestCase Component

| Property                           | Type   | Default value | Description                                                                                                                                                                         |
| :--------------------------------- | :----- | :------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `el`                               | string | _required_    | element                                                                                                                                                                             |
| `assessment`                       | object | _required_    | assessment                                                                                                                                                                          |
| `skill`                            | object | _required_    | skill                                                                                                                                                                               |
| `updateCodeCompilingUpdateUseCase` | func   | _required_    | update Code Compiling Update Use Case                                                                                                                                               |
| `updateCodeCompilingDeleteUseCase` | func   | _required_    | update Code Compiling Delete Use Case                                                                                                                                               |
| `intl`                             | custom |               | The Intl object is the namespace for the ECMAScript Internationalization API, which provides language sensitive string comparison, number formatting, and date and time formatting. |

<sub>Source: **app\pages\Editor\TestCase\TestCase.jsx**</sub>

---

## EditorIndex

<sub>Source: **app\pages\Editor\index.js**</sub>

---

## FourOfFour

<sub>Source: **app\pages\FourOfFour\FourOfFour.jsx**</sub>

---

## FourOfFourIndex

<sub>Source: **app\pages\FourOfFour\index.js**</sub>

---

## ConsistencyCheck

| Property                           | Type                   | Default value | Description                                             |
| :--------------------------------- | :--------------------- | :------------ | :------------------------------------------------------ |
| `fetchGraphInconsistenciesByTrack` | func                   | _required_    | fetches the graph inconsistencies by the id of a track. |
| `fetchGraphInconsistencies`        | func                   | _required_    | fetches all the graph inconsistencies.                  |
| `graph`                            | { [key]: &lt;any&gt; } | _required_    | Graphnos reducer.                                       |
| `updateConsistencyFilter`          | func                   | _required_    | Updates the consistency tracks filtering,               |

updating in both reducer and local storage.

<sub>Source: **app\pages\Graphnos\ConsistencyCheck\ConsistencyCheck.jsx**</sub>

---

## Graph

Graph component is the main component for react-d3-graph components, its interface allows its user
to build the graph once the user provides the data, configuration (optional) and callback interactions (also optional).
The code for the [live example](https://danielcaldas.github.io/react-d3-graph/sandbox/index.html)
can be consulted [here](https://github.com/danielcaldas/react-d3-graph/blob/master/sandbox/Sandbox.jsx)
@example
import { Graph } from 'react-d3-graph';

// graph payload (with minimalist structure)
const data = {
nodes: [
{id: 'Harry'},
{id: 'Sally'},
{id: 'Alice'}
],
links: [
{source: 'Harry', target: 'Sally'},
{source: 'Harry', target: 'Alice'},
]
};

// the graph configuration, you only need to pass down properties
// that you want to override, otherwise default ones will be used
const myConfig = {
nodeHighlightBehavior: true,
node: {
color: 'lightgreen',
size: 120,
highlightStrokeColor: 'blue'
},
link: {
highlightColor: 'lightblue'
}
};

// graph event callbacks
const onClickNode = function(nodeId) {
window.alert('Clicked node \${nodeId}');
};

const onMouseOverNode = function(nodeId) {
window.alert(`Mouse over node ${nodeId}`);
};

const onMouseOutNode = function(nodeId) {
window.alert(`Mouse out node ${nodeId}`);
};

const onClickLink = function(source, target) {
window.alert(`Clicked link between ${source} and ${target}`);
};

const onMouseOverLink = function(source, target) {
window.alert(`Mouse over in link between ${source} and ${target}`);
};

const onMouseOutLink = function(source, target) {
window.alert(`Mouse out link between ${source} and ${target}`);
};

<Graph
id='graph-id' // id is mandatory, if no id is defined rd3g will throw an error
data={data}
config={myConfig}
onClickNode={onClickNode}
onClickLink={onClickLink}
onMouseOverNode={onMouseOverNode}
onMouseOutNode={onMouseOutNode}
onMouseOverLink={onMouseOverLink}
onMouseOutLink={onMouseOutLink}/>

<sub>Source: **app\pages\Graphnos\GraphContainer\Graph\graph\Graph.jsx**</sub>

---

## Link

Link component is responsible for encapsulating link render.
@example
const onClickLink = function(source, target) {
window.alert(`Clicked link between ${source} and ${target}`);
};

const onMouseOverLink = function(source, target) {
window.alert(`Mouse over in link between ${source} and ${target}`);
};

const onMouseOutLink = function(source, target) {
window.alert(`Mouse out link between ${source} and ${target}`);
};

<Link
    source='idSourceNode'
    target='idTargetNode'
    x1=22
    y1=22
    x2=22
    y2=22
    strokeWidth=1.5
    stroke='green'
    className='link'
    opacity=1
    onClickLink={onClickLink}
    onMouseOverLink={onMouseOverLink}
    onMouseOutLink={onMouseOutLink} />

<sub>Source: **app\pages\Graphnos\GraphContainer\Graph\link\Link.jsx**</sub>

---

## Node

Node component is responsible for encapsulating node render.
@example
const onClickNode = function(nodeId) {
window.alert('Clicked node', nodeId);
};

const onMouseOverNode = function(nodeId) {
window.alert('Mouse over node', nodeId);
};

const onMouseOutNode = function(nodeId) {
window.alert('Mouse out node', nodeId);
};

<Node
    id='nodeId'
    cx=22
    cy=22
    fill='green'
    fontSize=10
    fontColor='black'
    fontWeight='normal'
    dx=90
    label='label text'
    opacity=1
    renderLabel=true
    size=200
    stroke='none'
    strokeWidth=1.5
    svg='assets/my-svg.svg'
    type='square'
    className='node'
    onClickNode={onClickNode}
    onMouseOverNode={onMouseOverNode}
    onMouseOutNode={onMouseOutNode} />

<sub>Source: **app\pages\Graphnos\GraphContainer\Graph\node\Node.jsx**</sub>

---

## GraphContainer

This is the Graph container.

| Property         | Type                   | Default value | Description                                  |
| :--------------- | :--------------------- | :------------ | :------------------------------------------- |
| `onClickNode`    | func                   |               | Function to execute when a node is clicked.  |
| `onClickLink`    | func                   |               | Function to execute when a link is clicked.  |
| `graphToDisplay` | { [key]: &lt;any&gt; } | _required_    | The graph that&#x27;s going to be displayed. |

<sub>Source: **app\pages\Graphnos\GraphContainer\GraphContainer.jsx**</sub>

---

## Graphnos

Wraps the graph related pages

| Property                   | Type                   | Default value | Description                               |
| :------------------------- | :--------------------- | :------------ | :---------------------------------------- |
| `fetchGraph`               | func                   | _required_    | Api call to fetch the graph.              |
| `graph`                    | { [key]: &lt;any&gt; } | _required_    | Graphnos reducer.                         |
| `deleteNode`               | func                   | _required_    | Delete node, takes id as param.           |
| `createNode`               | func                   | _required_    | Create node, takes node object as param.  |
| `updateNode`               | func                   | _required_    | Update node, takes node object as param.  |
| `createOrUpdateDependency` | func                   | _required_    | Update or create dependency if not found, |

takes sourceId, targetId and weight as
params.
`deleteDependency`|func|_required_|Deletes dependency, take source and target Ids.
`loadSimulatedGraph`|func|_required_|Loads the traversal simulation graph in reducer.
`updateSimulationNode`|func|_required_|Update a traversed node in the Traversal simulation.
`duplicateNode`|func|_required_|Duplicates a node, takes the node, it&#x27;s parent&#x27;s id
and the weight of the dependency.
`resetSimulation`|func|_required_|Resets nodes in the traversal simulation to
unvisited state.
`finishSimulation`|func|_required_|Forces all nodes in the traversal simulation
shift to visited state.
`applyPBro`|func|_required_|Applies P-bro(Depth to breadth) operation
to selected edges.
`applyReversePBro`|func|_required_|Applies reverse P-bro(Breadth to depth) operation
to a selected edge.
`magnify`|func|_required_|Applies magnifying operation to selected node.
`updateTrackFilters`|func|_required_|Updates the track filtering, updating in both
reducer and local storage.
`updateNodeFilters`|func|_required_|Updates the nodes(excluding tracks) filtering,
updating in both reducer and local storage.
`loadSimulatedNodes`|func|_required_|Loads array of ordered nodes in the editor&#x27;s
reducer.
`roles`|array|_required_|Array containing the roles of the current
user.
`intl`|custom||
`selectNode`|func|_required_|Loads the node as selected in the reducer
and moves the currently selected node to
the previously selected node.
`setPreviousNode`|func|_required_|Loads the node as previously selected in the reducer.
`setLink`|func|_required_|Loads the Link in the reducer.
`setShowModal`|func|_required_|Toggle modal visibility in the reducer.
`clearReducer`|func|_required_|Sets the reducer to it&#x27;s initial state.
`push`|func|_required_|Redirect to param path.
`connection`|object|_required_|Connection information.
`isConnectedToLiveshare`|bool|_required_|Variable to check connection to live share.
`connectionStatus`|number|_required_|Status of the connection with the server.
`forceSyncGraphByTrack`|func|_required_|Force the synchronization of the graph with the server.
`fetchGraphInconsistenciesByTrack`|func|_required_|fetches the graph inconsistencies by the id of a track.
`fetchGraphInconsistencies`|func|_required_|fetches all the graph inconsistencies.
`updateConsistencyFilter`|func|_required_|Updates the consistency tracks filtering,
updating in both reducer and local storage.

<sub>Source: **app\pages\Graphnos\Graphnos.jsx**</sub>

---

## NodeCreation

Node creation and update modal.

| Property           | Type   | Default value | Description                                  |
| :----------------- | :----- | :------------ | :------------------------------------------- |
| `isVisible`        | bool   | _required_    | Wether or not the modal is visible.          |
| `handleCancel`     | func   | _required_    | Function to execute when cancel is clicked.  |
| `handleOk`         | func   | _required_    | Function to execute when OK is clicked.      |
| `form`             | any    |               | Form data.                                   |
| `mode`             | string | _required_    | Update or delete.                            |
| `nodeName`         | string |               | In update mode, the name of the node.        |
| `nodeDescription`  | string |               | In update mode, the description of the node. |
| `nodeType`         | number |               | In update mode, the type of the node.        |
| `nodeIcon`         | string |               | In update mode, the icon of the node.        |
| `nodeCondition`    | string |               | In update mode, the condition of the node.   |
| `nodeImage`        | string |               | In update mode, the image of the node.       |
| `nodeContent`      | string |               | In update mode, the content of the node.     |
| `nodeInstructions` | string |               | In update mode, the instruction of the node. |

<sub>Source: **app\pages\Graphnos\NodeCreation\NodeCreation.jsx**</sub>

---

## SkillNetwork

The page where the user can manage the graph (
node/dependency creation, update and delete)

| Property                   | Type                   | Default value | Description                               |
| :------------------------- | :--------------------- | :------------ | :---------------------------------------- |
| `graphData`                | { [key]: &lt;any&gt; } | _required_    | Contains the graph data.                  |
| `deleteNode`               | func                   | _required_    | Delete node, takes id as param.           |
| `createNode`               | func                   | _required_    | Create node, takes node object as param.  |
| `updateNode`               | func                   | _required_    | Update node, takes node object as param.  |
| `createOrUpdateDependency` | func                   | _required_    | Update or create dependency if not found, |

takes sourceId, targetId and weight as
params.
`deleteDependency`|func|_required_|Deletes dependency, take source and target Ids.
`duplicateNode`|func|_required_|Duplicates a node, takes the node, it&#x27;s parent&#x27;s id
and the weight of the dependency.
`graphToDisplay`|{ [key]: &lt;any&gt; }|_required_|The graph to be displayed after applying all different
filters.
`updateTrackFilters`|func|_required_|Updates the track filtering, updating in both
reducer and local storage.
`updateNodeFilters`|func|_required_|Updates the nodes(excluding tracks) filtering,
updating in both reducer and local storage.
`nodeFilters`|&lt;any&gt;[]|_required_|Array containing the Ids of the nodes(excluding tracks) to be
filtered(displayed).
`trackFilters`|&lt;any&gt;[]|_required_|Array containing the Ids of the tracks to be
filtered(displayed).
`loadSimulatedNodes`|func|_required_|Loads array of ordered nodes in the editor&#x27;s
reducer.
`loadSimulatedGraph`|func|_required_|Loads the simulated graph in the reducer.
`roles`|array|_required_|Array containing the roles of the current
user.
`selectedNode`|{ [key]: &lt;any&gt; }|_required_|The currently selected node.
`previousNode`|{ [key]: &lt;any&gt; }|_required_|The previously selected node.
`link`|{ [key]: &lt;any&gt; }|_required_|The currently selected link.
`selectNode`|func|_required_|Loads the node as selected in the reducer
and moves the currently selected node to
the previously selected node.
`setPreviousNode`|func|_required_|Loads the node as previously selected in the reducer.
`setLink`|func|_required_|Loads the Link in the reducer.
`showModal`|bool|_required_|Value to define is modal should be visible or not.
`setShowModal`|func|_required_|Toggle modal visibility in the reducer.
`connection`|object|_required_|Connection information.
`isConnectedToLiveshare`|bool|_required_|Variable to check connection to live share.
`connectionStatus`|number|_required_|Status of the connection with the server.
`forceSyncGraphByTrack`|func|_required_|Force the synchronization of the graph with the server.
`inconsistencies`|{ [key]: &lt;any&gt; }|_required_|Object containing the inconsistencies.
`loading`|bool|_required_|Boolean variable for the loading status.

<sub>Source: **app\pages\Graphnos\SkillNetwork\SkillNetwork.jsx**</sub>

---

## generateDependencyDeleteMessage

<sub>Source: **app\pages\Graphnos\SkillNetwork\helpers.js**</sub>

---

## generateDependencyCreationErrorMessage

<sub>Source: **app\pages\Graphnos\SkillNetwork\helpers.js**</sub>

---

## SkillNetworkMenu

Menu of Skill network interface.

| Property        | Type                   | Default value | Description                                                   |
| :-------------- | :--------------------- | :------------ | :------------------------------------------------------------ |
| `selectedNode`  | { [key]: &lt;any&gt; } | _required_    | The currently selected node.                                  |
| `filter`        | string                 | _required_    | Filter applied on the nodes.                                  |
| `nodes`         | &lt;any&gt;[]          | _required_    | Array of nodes.                                               |
| `setFilter`     | func                   | _required_    | Sets the filter of the nodes by name.                         |
| `duplicateNode` | func                   | _required_    | Duplicates a node, takes the node, it&#x27;s parent&#x27;s id |

and the weight of the dependency.
`onUpdateNode`|func|_required_|Updates the current node.
`deleteNode`|func|_required_|Delete node, takes id as param.
`simulateCourse`|func|_required_|Simulates the krypton traversal.
`updateTrackFilters`|func|_required_|Updates the track filtering, updating in both
reducer and local storage.
`updateNodeFilters`|func|_required_|Updates the nodes(excluding tracks) filtering,
updating in both reducer and local storage.
`nodeFilters`|&lt;any&gt;[]|_required_|Array containing the Ids of the nodes(excluding tracks) to be
filtered(displayed).
`trackFilters`|&lt;any&gt;[]|_required_|Array containing the Ids of the tracks to be
filtered(displayed).
`roles`|array|_required_|Array containing the roles of the current
user.
`loadSimulatedNodes`|func|_required_|Loads array of ordered nodes in the editor&#x27;s
reducer.
`loadSimulatedGraph`|func|_required_|Loads the simulated graph in the reducer.
`resetSelection`|func|_required_|Clears all selected entities(nodes, links etc).
`forceSyncGraphByTrack`|func|_required_|Force the synchronization of the graph with the server.

<sub>Source: **app\pages\Graphnos\SkillNetworkMenu\SkillNetworkMenu.jsx**</sub>

---

## generateNodeDeleteMessage

<sub>Source: **app\pages\Graphnos\SkillNetworkMenu\helpers.js**</sub>

---

## SkillNetworkTitle

Contains the title of the page and creation buttons.

| Property        | Type  | Default value | Description                               |
| :-------------- | :---- | :------------ | :---------------------------------------- |
| `onNewCreation` | func  | _required_    | Opens node creation modal.                |
| `roles`         | array | _required_    | Array containing the roles of the current |

user.
`inconsistencies`|{ [key]: &lt;any&gt; }|_required_|Object containing the inconsistencies.

<sub>Source: **app\pages\Graphnos\SkillNetworkTitle\SkillNetworkTitle.jsx**</sub>

---

## TagFilter

Tag to filter inconsistencies by status.

| Property            | Type   | Default value | Description          |
| :------------------ | :----- | :------------ | :------------------- |
| `handleStatusValue` | func   |               | Updates the tag.     |
| `statusValue`       | number |               | Value of the status. |

<sub>Source: **app\pages\Graphnos\TagFilter\TagFilter.jsx**</sub>

---

## Transform

Graph page where transformation operation are
applied to the graph.

| Property    | Type                   | Default value | Description                               |
| :---------- | :--------------------- | :------------ | :---------------------------------------- |
| `graphData` | { [key]: &lt;any&gt; } | _required_    | Contains the graph data.                  |
| `applyPBro` | func                   | _required_    | Applies P-bro(Depth to breadth) operation |

to selected edges.
`applyReversePBro`|func|_required_|Applies reverse P-bro(Breadth to depth) operation
to a selected edge.
`magnify`|func|_required_|Applies magnifying operation to selected node.

<sub>Source: **app\pages\Graphnos\Transform\Transform.jsx**</sub>

---

## generateDepthToBreadthError

<sub>Source: **app\pages\Graphnos\Transform\helpers.js**</sub>

---

## OptimizeMenu

Menu of the Transform interface.

| Property          | Type                   | Default value | Description                                            |
| :---------------- | :--------------------- | :------------ | :----------------------------------------------------- |
| `transformMode`   | string                 | _required_    | The operation to handle.                               |
| `parentNode`      | { [key]: &lt;any&gt; } | _required_    | The root node of a chain of selected links.            |
| `firstChildNode`  | { [key]: &lt;any&gt; } | _required_    | The first child node of a chain of selected links.     |
| `secondChildNode` | { [key]: &lt;any&gt; } | _required_    | The second child node of a chain of selected links.    |
| `selectedNode`    | { [key]: &lt;any&gt; } | _required_    | The currently selected node.                           |
| `checkAndApply`   | func                   | _required_    | Checks if the parameters of the selected operation are |

correct and apply them.
`applyPreview`|func|_required_|Shows a preview of the operation.
`resetSelection`|func|_required_|Clears all selected entities(nodes, links etc).
`isButtonDisabled`|func|_required_|Boolean value for the ability of the buttons.
`canReset`|func|_required_|Wether the user can reset selection or not.

<sub>Source: **app\pages\Graphnos\OptimizeMenu\OptimizeMenu.jsx**</sub>

---

## TransformTitle

Component containing the title of the Transform page.

<sub>Source: **app\pages\Graphnos\TransformTitle\TransformTitle.jsx**</sub>

---

## Traversal

The page where the user can simulate the traversal
of the graph.

| Property               | Type                   | Default value | Description                                                |
| :--------------------- | :--------------------- | :------------ | :--------------------------------------------------------- |
| `graphData`            | { [key]: &lt;any&gt; } | _required_    | Contains the graph data.                                   |
| `match`                | { [key]: &lt;any&gt; } | _required_    | Url info.                                                  |
| `simulatedGraph`       | { [key]: &lt;any&gt; } | _required_    | The graph to be displayed with it&#x27;s nodes ordered.    |
| `loadSimulatedGraph`   | func                   | _required_    | Simulates the traversal and loads the ordered graph.       |
| `updateSimulationNode` | func                   | _required_    | Updates the status of a node (traversed/color).            |
| `resetSimulation`      | func                   | _required_    | Resets all nodes to unvisited (change colors to original). |
| `finishSimulation`     | func                   | _required_    | Mark all nodes as visited.                                 |
| `push`                 | func                   | _required_    | Navigate to another url.                                   |

<sub>Source: **app\pages\Graphnos\Traversal\Traversal.jsx**</sub>

---

## TraversalMenu

Menu of Traversal interface.

| Property             | Type                   | Default value | Description                                                |
| :------------------- | :--------------------- | :------------ | :--------------------------------------------------------- |
| `nodes`              | &lt;objectOf&gt;[]     |               | Array of the ordered nodes.                                |
| `resetSimulation`    | func                   | _required_    | Resets all nodes to unvisited (change colors to original). |
| `finishSimulation`   | func                   | _required_    | Mark all nodes as visited.                                 |
| `startSimulation`    | func                   | _required_    | Starts traversing the graph.                               |
| `simulatedGraph`     | { [key]: &lt;any&gt; } | _required_    | The graph to be displayed with it&#x27;s nodes ordered.    |
| `counters`           | &lt;objectOf&gt;[]     | _required_    | Counter to store the setTimeouts.                          |
| `setSimulationSpeed` | func                   | _required_    | Update the speed of the simulation.                        |
| `simulationSpeed`    | number                 | _required_    | The speed of the simulation.                               |
| `isSimulating`       | bool                   | _required_    | Wether or not the simulation is going.                     |
| `setIsSimulating`    | func                   | _required_    | Starts/stops the simulation.                               |

<sub>Source: **app\pages\Graphnos\TraversalMenu\TraversalMenu.jsx**</sub>

---

## SimulateTitle

Component containing the title of the Traversal page.

| Property   | Type   | Default value | Description                                          |
| :--------- | :----- | :------------ | :--------------------------------------------------- |
| `nodeName` | string | _required_    | Name of the root node(start point) of the traversal. |

<sub>Source: **app\pages\Graphnos\TraversalTitle\TraversalTitle.jsx**</sub>

---

## GraphnosIndex

<sub>Source: **app\pages\Graphnos\index.js**</sub>

---

## AssignToProjectModal

the Assign To Project Modal

| Property           | Type   | Default value | Description                                            |
| :----------------- | :----- | :------------ | :----------------------------------------------------- |
| `isVisible`        | bool   | _required_    | whether or not the modal is visible.                   |
| `handleCancel`     | func   | _required_    | Function to execute when cancel is clicked             |
| `handleOk`         | func   | _required_    | handleOk is used to validate and submit the user input |
| `issueName`        | string | _required_    | issue Name                                             |
| `issueDescription` | string | _required_    | issue Description                                      |
| `sprints`          | object |               | sprints                                                |
| `projects`         | array  | _required_    | the list of all the projects.                          |
| `fetchSprints`     | func   | _required_    | fetch sprints                                          |
| `form`             | any    |               | Form is used to collect the user input                 |

<sub>Source: **app\pages\Issues\AssignToProjectModal\AssignToProjectModal.jsx**</sub>

---

## AssignToProjectModalIndex

<sub>Source: **app\pages\Issues\AssignToProjectModal\index.js**</sub>

---

## Issues

Issues component

| Property        | Type   | Default value | Description                                                                                                                                                                         |
| :-------------- | :----- | :------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `issues`        | object | _required_    | issues                                                                                                                                                                              |
| `fetchIssues`   | func   | _required_    | fetch Issues                                                                                                                                                                        |
| `projects`      | object | _required_    | the list of all the projects.                                                                                                                                                       |
| `updateStatus`  | func   | _required_    | update Status                                                                                                                                                                       |
| `addWorkItem`   | func   | _required_    | add Work Item                                                                                                                                                                       |
| `fetchProjects` | func   | _required_    | fetch Projects                                                                                                                                                                      |
| `intl`          | custom |               | The Intl object is the namespace for the ECMAScript Internationalization API, which provides language sensitive string comparison, number formatting, and date and time formatting. |

<sub>Source: **app\pages\Issues\Issues.jsx**</sub>

---

## MarkAsModal

Mark As Modal

| Property       | Type   | Default value | Description                                                      |
| :------------- | :----- | :------------ | :--------------------------------------------------------------- |
| `isVisible`    | bool   | _required_    | whether or not the modal is visible.                             |
| `handleCancel` | func   | _required_    | Function to execute when cancel is clicked                       |
| `handleOk`     | func   | _required_    | handleOk is used to validate and submit the user input           |
| `status`       | number | _required_    | status e.g ACKNOWLEDGED, REJECTED, DUPLICATED, RESOLVED, PENDING |
| `form`         | any    |               | Form is used to collect the user input                           |

<sub>Source: **app\pages\Issues\MarkAsModal\MarkAsModal.jsx**</sub>

---

## TagFilter

TagFilter component

| Property            | Type   | Default value | Description                                                                 |
| :------------------ | :----- | :------------ | :-------------------------------------------------------------------------- |
| `handleStatusValue` | func   |               | handle Status Value                                                         |
| `statusValue`       | number |               | statusValue is one of ACKNOWLEDGED, REJECTED, DUPLICATED, RESOLVED, PENDING |

<sub>Source: **app\pages\Issues\TagFilter\TagFilter.jsx**</sub>

---

## IssuesIndex

<sub>Source: **app\pages\Issues\index.js**</sub>

---

## AddMemberModal

Add Member Modal

| Property       | Type  | Default value | Description                                            |
| :------------- | :---- | :------------ | :----------------------------------------------------- |
| `isVisible`    | bool  | _required_    | whether or not the modal is visible.                   |
| `handleCancel` | func  | _required_    | Function to execute when cancel is clicked             |
| `handleOk`     | func  | _required_    | handleOk is used to validate and submit the user input |
| `membersIds`   | array | _required_    | members Ids                                            |
| `form`         | any   |               | Form is used to collect the user input                 |

<sub>Source: **app\pages\ProjectDetails\AddMemberModal\AddMemberModal.jsx**</sub>

---

## NumberStats

NumberStats component

| Property | Type   | Default value | Description |
| :------- | :----- | :------------ | :---------- |
| `image`  | string | _required_    | image       |
| `number` | string | _required_    | number      |
| `text`   | object | _required_    | text        |

<sub>Source: **app\pages\ProjectDetails\NumberStats\NumberStats.jsx**</sub>

---

## ProjectDetails

ProjectDetails Component

| Property                     | Type   | Default value | Description                                                                                                                                                                         |
| :--------------------------- | :----- | :------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `selectedProject`            | object | _required_    | selected Project                                                                                                                                                                    |
| `deleteMember`               | func   | _required_    | delete Member, takes id as a param.                                                                                                                                                 |
| `match`                      | object | _required_    | Url info.                                                                                                                                                                           |
| `fetchProjectById`           | func   | _required_    | fetch Project By Id                                                                                                                                                                 |
| `fetchProjectStatsById`      | func   | _required_    | fetch Project Stats By Id                                                                                                                                                           |
| `addMember`                  | func   | _required_    | add Member                                                                                                                                                                          |
| `updateProject`              | func   | _required_    | update Project                                                                                                                                                                      |
| `roles`                      | string | _required_    | user roles e.g. CONTENT_ARCHITECT                                                                                                                                                   |
| `intl`                       | custom |               | The Intl object is the namespace for the ECMAScript Internationalization API, which provides language sensitive string comparison, number formatting, and date and time formatting. |
| `setIsAddMemberModalVisible` | func   | _required_    | set Is Add Member Modal Visible                                                                                                                                                     |
| `setIsUpdateModalVisible`    | func   | _required_    | set Is Update Modal Visible                                                                                                                                                         |

<sub>Source: **app\pages\ProjectDetails\ProjectDetails.jsx**</sub>

---

## ProjectDetailsIndex

<sub>Source: **app\pages\ProjectDetails\index.js**</sub>

---

## ChangeNodeModal

| Property        | Type | Default value | Description |
| :-------------- | :--- | :------------ | :---------- |
| `isVisible`     | bool | _required_    |
| `handleCancel`  | func | _required_    |
| `handleOk`      | func | _required_    |
| `form`          | any  |               |
| `disabled`      | bool | _required_    |
| `superDisabled` | bool | _required_    |

<sub>Source: **app\pages\SelectTree\ChangeNodeModal\ChangeNodeModal.jsx**</sub>

---

## NodeModal

| Property       | Type | Default value | Description |
| :------------- | :--- | :------------ | :---------- |
| `isVisible`    | bool | _required_    |
| `handleCancel` | func | _required_    |
| `handleOk`     | func | _required_    |
| `form`         | any  |               |
| `disabled`     | bool | _required_    |

<sub>Source: **app\pages\SelectTree\NodeModal\NodeModal.jsx**</sub>

---

## NodeRootModal

| Property       | Type | Default value | Description |
| :------------- | :--- | :------------ | :---------- |
| `isVisible`    | bool | _required_    |
| `handleCancel` | func | _required_    |
| `handleOk`     | func | _required_    |
| `form`         | any  |               |

<sub>Source: **app\pages\SelectTree\NodeRootModal\NodeRootModal.jsx**</sub>

---

## SelectTree

<sub>Source: **app\pages\SelectTree\SelectTree.jsx**</sub>

---

## SelectTreeIndex

<sub>Source: **app\pages\SelectTree\index.js**</sub>

---

## AddWorkItem

Add work item

| Property      | Type | Default value | Description            |
| :------------ | :--- | :------------ | :--------------------- |
| `addWorkItem` | func | _required_    | Add work item function |
| `onCancel`    | func | _required_    | button cancel          |

<sub>Source: **app\pages\SprintBoard\AddWorkItem\AddWorkItem.jsx**</sub>

---

## SprintBoard

Sprint Board , the user can manage all the work items of a project

| Property                | Type   | Default value | Description                                                                                                                                                                         |
| :---------------------- | :----- | :------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sprints`               | object | _required_    | sprints                                                                                                                                                                             |
| `selectedSprintId`      | string | _required_    | selected Sprint by Id                                                                                                                                                               |
| `selectedProject`       | object | _required_    | selected Project                                                                                                                                                                    |
| `fetchSprintsFirstTime` | func   | _required_    | fetch Sprints First Time                                                                                                                                                            |
| `updateWorkItemState`   | func   | _required_    | update Work Item State                                                                                                                                                              |
| `deleteWorkItem`        | func   | _required_    | delete Work Item, takes id as a param.                                                                                                                                              |
| `fetchWorkItems`        | func   | _required_    | fetch Work Items                                                                                                                                                                    |
| `addWorkItem`           | func   | _required_    | add Work Items                                                                                                                                                                      |
| `updateWorkItem`        | func   | _required_    | update Work Items                                                                                                                                                                   |
| `addSprint`             | func   | _required_    | add Sprint                                                                                                                                                                          |
| `match`                 | object | _required_    | if the sprint match project Id                                                                                                                                                      |
| `intl`                  | custom |               | The Intl object is the namespace for the ECMAScript Internationalization API, which provides language sensitive string comparison, number formatting, and date and time formatting. |
| `roles`                 | array  | _required_    | user roles e.g. CONTENT_ARCHITECT                                                                                                                                                   |
| `errors`                | array  |               | errors                                                                                                                                                                              |
| `push`                  | func   | _required_    | push                                                                                                                                                                                |
| `members`               | array  | _required_    | members                                                                                                                                                                             |

<sub>Source: **app\pages\SprintBoard\SprintBoard.jsx**</sub>

---

## SprintModal

the sprint Modal

| Property       | Type   | Default value | Description                                                                               |
| :------------- | :----- | :------------ | :---------------------------------------------------------------------------------------- |
| `isVisible`    | bool   | _required_    | whether or not the modal is visible.                                                      |
| `handleCancel` | func   | _required_    | Function to execute when cancel is clicked                                                |
| `handleOk`     | func   | _required_    | handleOk is used to validate and submit the user input                                    |
| `form`         | any    |               | Form is used to collect the user input                                                    |
| `project`      | object | _required_    | project contain the name, description and the status e.g. NEW IN_PROGRESS of the project. |
| `startDate`    | string | _required_    | start date                                                                                |
| `dueDate`      | string | _required_    | due Date                                                                                  |

<sub>Source: **app\pages\SprintBoard\SprintModal\SprintModal.jsx**</sub>

---

## WorkItem

Work Item Component

| Property                          | Type   | Default value | Description                       |
| :-------------------------------- | :----- | :------------ | :-------------------------------- |
| `name`                            | string | _required_    | name of the work item             |
| `completionDate`                  | object |               | completion Date                   |
| `type`                            | number | _required_    | work item type                    |
| `fullName`                        | string | _required_    | Full name                         |
| `menu`                            | any    | _required_    | work item menu                    |
| `workItem`                        | object | _required_    | work item                         |
| `setSelectedWorkItem`             | func   | _required_    | select the work item              |
| `isUpdateWorkItemModalVisible`    | bool   |               | if Update Work Item Modal Visible |
| `setIsUpdateWorkItemModalVisible` | func   | _required_    | Update Work Item Modal open       |
| `setIsAddWorkItemModalVisible`    | func   | _required_    | Update Work Item Modal open       |

<sub>Source: **app\pages\SprintBoard\WorkItem\WorkItem.jsx**</sub>

---

## WorkItemModal

the modal of work Item.

| Property       | Type   | Default value | Description                                            |
| :------------- | :----- | :------------ | :----------------------------------------------------- |
| `isVisible`    | bool   | _required_    | whether or not the modal is visible.                   |
| `handleCancel` | func   | _required_    | Function to execute when cancel is clicked             |
| `handleOk`     | func   | _required_    | handleOk is used to validate and submit the user input |
| `workItem`     | object |               | workItem                                               |
| `name`         | string | _required_    | sprint name                                            |
| `description`  | string | _required_    | sprint description                                     |
| `type`         | number | _required_    | sprint types                                           |
| `sprints`      | array  | _required_    | sprint                                                 |
| `sprintId`     | string | _required_    | sprint id                                              |
| `members`      | array  | _required_    | members                                                |
| `memberId`     | string | _required_    | members id                                             |
| `form`         | any    |               | Form is used to collect the user input                 |

<sub>Source: **app\pages\SprintBoard\WorkItemModal\WorkItemModal.jsx**</sub>

---

## SprintBoardIndex

<sub>Source: **app\pages\SprintBoard\index.js**</sub>

---

<sub>Documentation generated using **React Doc Creator v0.0.9**</sub>
