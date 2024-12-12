# 

Source: https://proofwiki.org/wiki/Finite_Connected_Simple_Graph_is_Tree_iff_Size_is_One_Less_than_Order/Necessary_Condition/Induction_Step/Proof_1

Theorem
Let the following hold:

For all $j \le k$, a tree of order $j$ is of size $j - 1$.

Then this holds:

A tree of order $k + 1$  is of size $k$.


Proof
Let $T_{k + 1}$ be an arbitrary tree with $k + 1$ nodes.
Take any node $v$ of $T_{k + 1}$ of degree $1$.
Such a node exists from Finite Tree has Leaf Nodes.
Consider $T_k$, the subgraph of $T_{k + 1}$ created by removing $v$ and the edge connecting it to the rest of the tree.
By Connected Subgraph of Tree is Tree, $T_k$ is itself a tree.
The order of $T_k$ is $k$, and it has one less edge than $T_{k + 1}$ by definition.
We have by hypothesis that $T_k$ has $k - 1$ edges.
So $T_{k + 1}$ must have $k$ edges.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 2.3.4.1$: Free Trees: Theorem $\mathrm A$




