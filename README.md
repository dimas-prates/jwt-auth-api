***:warning: In maintenance***
# :pushpin: Index
- [:pushpin: Index](#pushpin-index)
- [:technologist: demo](#technologist-demo)
- [:memo: About](#memo-about)
- [:bento: Techs and Concepts](#bento-techs-and-concepts)
- [:rocket: How to run this project](#rocket-how-to-run-this-project)
- [:mag: Searches/Problems during development](#mag-searchesproblems-during-development)

# :technologist: demo

# :memo: About
This project aims to register the study of authentication using JWT and its features.
Therefore, anytime when it's necessary this repository will be available as a resource for consultation.

# :bento: Techs and Concepts
| Techs      | Concepts             |
| ---------- | -------------------- |
| Express    | Clean Code           |
| Git        | Git flow             |
| TypeScript | Layer system         |
| JWT        | Authentication       |
| Swagger    | Documentation        |
| Jest       | Unit Test            |
| TypeORM    | Integration Test     |
| Linting    | Performance Test     |
| PostgreSQL | Graceful Shutdown    |
| Docker     | Conventional Commits |

# :rocket: How to run this project
```bash

```

# :mag: Searches/Problems during development
* ***ERROR:*** ENOSPC: System limit for number of file watchers reached\
  ***[FIX](https://stackoverflow.com/questions/55763428/react-native-error-enospc-system-limit-for-number-of-file-watchers-reached#:~:text=While%20524%2C288%20is%20the%20maximum,wish%20to%20lower%20the%20number.):***
  ```bash
  sysctl fs.inotify.max_user_watches
  sudo sysctl -w fs.inotify.max_user_watches=524288
  sysctl fs.inotify.max_user_watches
  ```
---
:copyright: Dimas Prates