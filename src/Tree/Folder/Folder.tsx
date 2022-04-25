import { useState } from "react";
import {
  AiOutlineFolder,
  AiOutlineFolderOpen,
} from "react-icons/ai";
import {
  ActionsWrapper,
  Collapse,
  StyledName,
  VerticalLine,
} from "../Tree.style";
import { StyledFolder } from "./Folder.style";
import { FolderProps, Node } from "../../types";

export const Folder: React.FC<React.PropsWithChildren<FolderProps>> = ({
  node,
  children,
  }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <StyledFolder>
      <VerticalLine>
        <ActionsWrapper>
          <StyledName onClick={() => { setIsOpen(!isOpen) }}>
            {isOpen ? <AiOutlineFolderOpen /> : <AiOutlineFolder />}&nbsp;{node.name}
          </StyledName>
        </ActionsWrapper>
        {isOpen && <Collapse>{children}</Collapse>}
      </VerticalLine>
    </StyledFolder>
  );
};
