# 

Source: https://proofwiki.org/wiki/Complete_Bipartite_Graphs_which_are_Complete_Graphs

Theorem
Let $K_{m, n}$ be a complete bipartite graph.

$K_{0, 0}$ is the complete graph $K_0$
$K_{0, 1}$ and $K_{1, 0}$ are the complete graph $K_1$
$K_{1, 1}$ is the complete graph $K_2$
and no other complete bipartite graphs are complete.


Proof
$K_{0, 0}$ is the null graph by Null Graph is Complete Bipartite Graph.
Then by Null Graph is Complete Graph, $K_{0, 0}$ is the complete graph $K_0$.

$K_{0, 1}$ and $K_{1, 0}$ consist of one vertex and no edges.
Then by Complete Graph of Order 1 is Edgeless, $K_{0, 1}$ and $K_{1, 0}$ are both the complete graph $K_1$.

That $K_{1, 1}$ is the complete graph $K_2$ can be determined by inspection:


$\Box$

Suppose either $m > 1$ or $n > 1$.
Then one of the partite sets contains more than $1$ vertex.
By the nature of a bipartite graph, $2$ such vertices are not joined by an edge.
Hence by definition such a $K_{m, n}$ is not a complete graph.
$\blacksquare$





