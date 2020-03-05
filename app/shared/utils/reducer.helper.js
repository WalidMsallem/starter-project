import { isUndefined } from 'lodash'
import {
  TRACK,
  CHECKPOINT,
  REWARD,
  WORKSHOP,
  ONE_TO_ONE,
  NODE_PARAMETER,
} from 'shared/constants'

export const transformGraph = data => {
  const newGraph = {
    nodes: {},
    dependencies: {},
  }

  data.tracks.forEach(track => {
    newGraph.nodes[track.id] = {
      ...track,
      type: TRACK,
      value: track.id,
      label: `${track.name} (${NODE_PARAMETER[TRACK].tag})`,
      color: NODE_PARAMETER[TRACK].color,
      successors: [],
      dependencies: [],
    }
  })

  data.skills.forEach(skill => {
    newGraph.nodes[skill.id] = {
      ...skill,
      value: skill.id,
      label: `${skill.name} (${NODE_PARAMETER[skill.type].tag})`,
      color: NODE_PARAMETER[skill.type].color,
      successors: [],
      dependencies: [],
    }
  })

  data.checkpoints.forEach(checkpoint => {
    newGraph.nodes[checkpoint.id] = {
      ...checkpoint,
      type: CHECKPOINT,
      value: checkpoint.id,
      label: `${checkpoint.name} (${NODE_PARAMETER[CHECKPOINT].tag})`,
      color: NODE_PARAMETER[CHECKPOINT].color,
    }
  })

  data.rewards.forEach(reward => {
    newGraph.nodes[reward.id] = {
      ...reward,
      type: REWARD,
      value: reward.id,
      label: `${reward.name} (${NODE_PARAMETER[REWARD].tag})`,
      color: NODE_PARAMETER[REWARD].color,
    }
  })

  data.oneToOneMeetings.forEach(oneToOne => {
    newGraph.nodes[oneToOne.id] = {
      ...oneToOne,
      type: ONE_TO_ONE,
      value: oneToOne.id,
      label: `${oneToOne.name} (${NODE_PARAMETER[ONE_TO_ONE].tag})`,
      color: NODE_PARAMETER[ONE_TO_ONE].color,
    }
  })
  data.workshops.forEach(workshop => {
    newGraph.nodes[workshop.id] = {
      ...workshop,
      type: WORKSHOP,
      value: workshop.id,
      label: `${workshop.name} (${NODE_PARAMETER[WORKSHOP].tag})`,
      color: NODE_PARAMETER[WORKSHOP].color,
    }
  })

  const newDependencies = data.dependencies
  newDependencies.push(...data.triggers)
  newDependencies.push(...data.unlocks)
  newDependencies.forEach(d => {
    newGraph.dependencies[d.sourceId + d.targetId] = {
      ...d,
      id: d.sourceId + d.targetId,
      source: d.sourceId,
      target: d.targetId,
    }
  })

  return newGraph
}

export const removeDuplicatedElement = list =>
  list.reduce((acc, current) => {
    const duplicateNodeList = acc.find(node => node.id === current.id)
    if (!duplicateNodeList) {
      return acc.concat([current])
    }
    return acc
  }, [])

export const updateList = (list, newItem) => {
  const a = list.map(item => {
    if (newItem.id === item.id) {
      return newItem
    }
    return item
  })
  return a
}

export const filteringListAfterDeleting = (list, id) =>
  list.filter(item => id !== item.id)

export const updateNodeFilter = (nodeFilters, transformedGraph) => {
  const newNodeFilters = []
  nodeFilters.forEach(node => {
    if (!isUndefined(transformedGraph.nodes[node.id])) {
      newNodeFilters.push(transformedGraph.nodes[node.id])
    }
  })
  return newNodeFilters
}
