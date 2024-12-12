# 

Source: https://proofwiki.org/wiki/Connected_Graph_is_Tree_iff_Removal_of_One_Edge_makes_it_Disconnected/Sufficient_Condition/Proof_1

Theorem
Let $G = \struct {V, E}$ be a tree.
Then for all edges $e$ of $G$, the edge deletion $G \setminus \set e$ is disconnected.


Proof
Let $G$ be a tree.
Then by definition $G$ has no circuits.
From Condition for Edge to be Bridge, every edge of $G$ is a bridge.
Thus by definition of bridge, removing any edge of $G$ will disconnect $G$.
$\blacksquare$





