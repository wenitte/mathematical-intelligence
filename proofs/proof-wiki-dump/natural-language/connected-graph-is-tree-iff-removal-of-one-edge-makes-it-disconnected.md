# 

Source: https://proofwiki.org/wiki/Connected_Graph_is_Tree_iff_Removal_of_One_Edge_makes_it_Disconnected


This article has been identified as a candidate for Featured Proof status.If you do not believe that this proof is worthy of being a Featured Proof, please state your reasons on the talk page.To discuss this page in more detail, feel free to use the talk page.


Theorem
Let $G = \struct {V, E}$ be a connected simple graph.
Then $G$ is a tree if and only if:

for all edges $e$ of $G$, the edge deletion $G \setminus \set e$ is disconnected.


Proof
Sufficient Condition
Let $G$ be a tree.
Then by definition $G$ has no circuits.
From Condition for Edge to be Bridge, every edge of $G$ is a bridge.
Thus by definition of bridge, removing any edge of $G$ will disconnect $G$.
$\Box$


Necessary Condition
Let $G = \struct {V, E}$ be a connected simple graph such that:

for all edges $e$ of $G$, the edge deletion $G \setminus \set e$ is disconnected.

Then $G$ is a tree.
Let $G$ be a connected simple graph such that for all edges $e$ of $G$, the edge deletion $G \setminus \set e$ is disconnected.
Hence, by definition, every edge of $G$ must be a bridge.
So by Condition for Edge to be Bridge, $G$ has no circuits.
Hence $G$ is a tree by definition.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 2.3.4.1$: Free Trees: Theorem $\mathrm A$




