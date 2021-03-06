import { Tree } from "./Tree/Tree";
import { ApiNode, Node } from "./types";
import { apiNodesToTree, treeToNodes } from "./utils";
import React, {createContext} from "react";

const originalTree: ApiNode[] = [
  {
    name: 'templates',
    content: [
      'templates/natzka.png',
      'templates/siginpage.html',
    ],
  },
  {
    name: 'test',
    content: [
      'test/my folder/aro-stacked-color.png', // { 'test': { 'my folder': { 'aro-stacked-color.png': FILE_SENTINEL } } }
      'test/my folder/lol.png', // { 'test': { 'my folder': { 'lol.png': FILE_SENTINEL } } }
      'test/mydata.csv', // { 'test': { 'mydata.csv': FILE_SENTINEL } }
    ],
  },
  {
    name: 'test-neu',
    content: []
  },
];

const tree = apiNodesToTree(originalTree)
const nodes = Array.from(treeToNodes(tree))
export const NodeContext = createContext<Node[]>([]);


export default function App() {
  return (
    <NodeContext.Provider value={nodes}>
      <Tree />
    </NodeContext.Provider>
  );
}
