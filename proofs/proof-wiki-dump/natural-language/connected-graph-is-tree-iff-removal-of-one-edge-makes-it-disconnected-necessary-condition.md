# 

Source: https://proofwiki.org/wiki/Connected_Graph_is_Tree_iff_Removal_of_One_Edge_makes_it_Disconnected/Necessary_Condition

Theorem
Let $G = \struct {V, E}$ be a connected simple graph such that:

for all edges $e$ of $G$, the edge deletion $G \setminus \set e$ is disconnected.

Then $G$ is a tree.


Proof
Let $G$ be a connected simple graph such that for all edges $e$ of $G$, the edge deletion $G \setminus \set e$ is disconnected.
Hence, by definition, every edge of $G$ must be a bridge.
So by Condition for Edge to be Bridge, $G$ has no circuits.
Hence $G$ is a tree by definition.
$\blacksquare$





