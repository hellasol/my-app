export type Node = 
  | { type: 'folder'; name: string; contents: Node[] } 
  | { type: 'file'; name: string }

export interface ApiNode {
    name: string
    content: string[]
}
  
export interface TreeProps {
    nodes:  Node[];
}
  
export interface TreeRecusiveProps {
    node: Node;
}

export interface FileProps {
    node: Node;
}

export interface FolderProps {
    node: Node;
}