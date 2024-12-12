# 

Source: https://proofwiki.org/wiki/Complete_Bipartite_Graphs_which_are_Path_Graphs

Theorem
Let $K_{m, n}$ be a complete bipartite graph.

$K_{0, 0}$ is the path graph $P_0$
$K_{0, 1}$ and $K_{1, 0}$ are the path graph $P_1$
$K_{1, 1}$ is the path graph $P_2$
$K_{1, 2}$ and $K_{2, 1}$ are the path graphs $P_3$
and no other complete bipartite graphs are path graphs.


Proof
$K_{0, 0}$, $K_{0, 1}$ and $K_{1, 0}$ have no edges.
Hence they are path graphs vacuously.
$\Box$

That $K_{1, 1}$ is the path graph $P_2$ can be determined by inspection:


$\Box$

Similarly, that $K_{1, 2}$ and $K_{2, 1}$ are the path graph $P_3$ can be determined by inspection:


$\Box$

We have that Path Graph is Tree.
From Complete Bipartite Graphs which are Trees, a path graph must be of the form $K_{1, n}$ or $K_{n, 1}$ for some $n$.
But for $n \ge 3$ there exists one vertex which is of degree greater than $2$.
Hence from Degree of Vertex in Path Graph is Less than 3, $K_{1, n}$ or $K_{n, 1}$ is not a path graph for $n \ge 3$.
Hence the result.
$\blacksquare$





