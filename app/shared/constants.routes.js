export default {
  TREE_CREATOR: { path: '/graph/tree' },
  GRAPH: { path: '/graph' },
  TRAVERSAL: { path: '/graph/traversal' },
  INSPECT: { path: '/graph/inspect' },
  OPTIMIZE: { path: '/graph/optimize' },
  CONTENT_EDITOR: {
    defaultPath: '/content-editor',
    pathNode: '/content-editor/:trackId/:skillId',
    linkPath: (trackId, skillId) => `/content-editor/${trackId}/${skillId}`,
  },
  PROJECT_CREATOR: {
    path: '/project/create',
  },
  PROJECT_OVERVIEW: {
    path: '/project/overview/:projectId',
    linkPath: projectId => `/project/overview/${projectId}`,
  },
  PROJECT_DETAILS: {
    path: '/project/details/:projectId',
  },
  COMMITS: {
    path: '/commits',
  },
}
