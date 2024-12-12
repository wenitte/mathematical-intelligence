# 

Source: https://proofwiki.org/wiki/Connected_Graph_is_Tree_iff_Removal_of_One_Edge_makes_it_Disconnected/Sufficient_Condition/Proof_2

Theorem
Let $G = \struct {V, E}$ be a tree.
Then for all edges $e$ of $G$, the edge deletion $G \setminus \set e$ is disconnected.


Proof
Let $G$ be a tree.
Hence a fortiori $G$ has no cycles.
Let $v, v' \in V$.
Let the edge $\set {v, v'}$ be removed.
Aiming for a contradiction, suppose $G$ is still connected.
Then a priori $v$ and $v'$ are connected.
By If Vertices are Connected then Path Exists between them, there is a path $\tuple {v, v_1, \ldots, v'}$ of length $2$ or more.
Hence $\tuple {v, v_1, \ldots, v', v}$ is a cycle in $G$.
This contradicts the statement that $G$ has no cycles.
The result follows by Proof by Contradiction.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 2.3.4.1$: Free Trees: Theorem $\mathrm A$




