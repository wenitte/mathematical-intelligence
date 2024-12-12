# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Tree



Theorem
The following definitions of the concept of Tree in the context of Graph Theory are equivalent:

Definition 1
A tree is a simple connected graph with no circuits.

Definition 2
A tree is a simple connected graph with no cycles.


Proof
Let $G$ be a simple graph.


Definition 1 implies Definition 2
Let $G$ have no circuits.
As by definition a cycle is a circuit, it follows that $G$ has no cycles.
$\Box$


Definition 2 implies Definition 1
Let $G$ have no cycles.
Aiming for a contradiction, suppose $G$ contains a circuit $C$.
From Circuit contains Cycle as Subgraph it follows that $G$ contains a cycle.
From that contradiction it follows that $G$ can have no circuits.
$\blacksquare$





