import { AiOutlineFile } from "react-icons/ai";
import { ActionsWrapper, StyledName } from "../Tree.style";
import { FileProps, Node } from "../../types";
import { StyledFile } from "./File.style";

export const File: React.FC<FileProps> = ({
  node,
}: FileProps) => {
  return (
    <StyledFile>
        <ActionsWrapper>
          <StyledName>
              <AiOutlineFile />&nbsp;{node.name}
          </StyledName>
        </ActionsWrapper>
    </StyledFile>
  );
};
