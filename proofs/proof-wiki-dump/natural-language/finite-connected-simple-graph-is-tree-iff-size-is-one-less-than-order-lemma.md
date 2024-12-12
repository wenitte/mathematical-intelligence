# 

Source: https://proofwiki.org/wiki/Finite_Connected_Simple_Graph_is_Tree_iff_Size_is_One_Less_than_Order/Lemma

Theorem
Let $G = \struct {V, E}$ be a non-edgeless connected finite simple graph.
Let $G$ have no cycles.

Then:

$G$ has at least one leaf node.


Proof
Let $G = \struct {V, E}$ be a non-edgeless connected finite simple graph.
Let us select $v_1 \in V$ and some $v_2 \in V$ which is adjacent to $v_1$.
Such will always exist because $G$ is connected and not edgeless.

For $k \ge 2$, either $v_k$ is adjacent to $v_{k - 1}$ and no other, or it is adjacent to $v_{k - 1}$ and some $v_{k + 1}$ where $v_{k + 1} \ne v_{k - 1}$.
Since there are no cycles in $G$, each of $v_1, v_2, \ldots, v_{k + 1}$ are all distinct.
Hence as $G$ is finite, the process will terminate.
Thus $v_{k + 1}$ will be a leaf node.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 2.3.4.1$: Free Trees: Theorem $\mathrm A$




