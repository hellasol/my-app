import merge from "lodash.merge"
import { ApiNode, Node } from "./types";

const FILE_SENTINEL = "file"
const EMPTY_FOLDER_SENTINEL = "emptyFolder"

/**
 * Transform a single path into a partial tree
 */
 export function pathToPartialTree(path: string): object {
    const [name, ...folders] = path.split('/').reverse();
    let tree: object = { [name]: name.includes('.') ? FILE_SENTINEL : EMPTY_FOLDER_SENTINEL };
    for (const folder of folders) {
      tree = { [folder]: tree };
    }
    return tree
  }
  
  export function apiNodesToTree(nodes: ApiNode[]): object {
    const contents = nodes.flatMap(node => node.content.length > 0 ? node.content : [node.name]);
    const [partialTree0, ...partialTrees] = contents.map(pathToPartialTree)
    return merge(partialTree0, ...partialTrees) 
  }
  
  export function* treeToNodes(tree: object): IterableIterator<Node> {
    for (const [name, value] of Object.entries(tree)) {
      if (value === FILE_SENTINEL) {
        // console.log('file', name)
        yield { type: 'file', name }
      } else if (value === EMPTY_FOLDER_SENTINEL) {
        // console.log('emptyFolder', name, value)
        yield { type: 'folder', name, contents: [] }
      } else {
        // console.log('folder', name, value)
        yield { type: 'folder', name, contents: Array.from(treeToNodes(value)) }
      }
    }
  }