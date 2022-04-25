import { ThemeProvider } from "styled-components";
import { Folder } from "./Folder/Folder";
import { File } from "./File/File";
import { Node, TreeProps, TreeRecusiveProps } from "../types";
import styled from "styled-components/macro";

export const StyledTree = styled.div`
  line-height: 1.75;
  z-index: 1;
`;

export const ActionsWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: space-between;  
`;

export const StyledName = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Collapse = styled.div`
  height: max-content;
  max-height: "800px";
  overflow: hidden;
  transition: 0.3s ease-in-out;
`;

export const VerticalLine = styled.section`
  position: relative;
  :before {
    content: "";
    display: block;
    position: absolute;
    top: -2px;
    left: 1px;
    width: 0;
    height: 100%;
    border: 1px solid #dbdbdd;
    z-index: -1;
  }
`;

export const Tree: React.FC<TreeProps> = ({
  nodes,
}: TreeProps) => {
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

