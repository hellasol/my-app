import { ThemeProvider } from "styled-components";
import { Folder } from "./Folder/Folder";
import { File } from "./File/File";
import { Node, TreeRecusiveProps } from "../types";
import { StyledTree } from "./Tree.style";
import { useContext } from "react";
import { NodeContext } from "../App";

export const Tree: React.FC = () => {
  const nodes = useContext(NodeContext);
  return (
    <ThemeProvider theme={{ indent: 20 }}>
      <StyledTree>
        {nodes.map((node: Node) => (
          <TreeRecusive node={node} />
        ))}
      </StyledTree>
    </ThemeProvider>
  );
};

const TreeRecusive: React.FC<{ node: Node }> = ({
  node,
}: TreeRecusiveProps ) => {
    if (node.type === "file") {
      return <File node={node} />;
    }
    if (node.type === "folder") {
      return (
        <Folder node={node}> 
          {node.contents.map(childNode => (<TreeRecusive key={node.name + "/" + childNode.name} node={childNode} />))}
        </Folder>
      );
    }
    throw new Error("Unknown type");
};

