# 

Source: https://proofwiki.org/wiki/Condition_for_Complete_Bipartite_Graph_to_be_Edgeless

Theorem
Let $G = \struct {A \mid B, E} =: K_{m, n}$ be the complete bipartite graph with $m$ vertices in $A$ and $n$ vertices in $B$.
Then:

$K_{m, n}$ is edgeless if and only if either $m = 0$ or $n = 0$.


Proof
Consider $K_{m, n}$ where both $m > 0$ and $n > 0$.
Then:

$\exists u \in A, v \in V: \set {u, v} \in E$
and it follows by definition that $K_{m, n}$ is not edgeless.

Consider $K_{m, n}$ where either $m = 0$ or $n = 0$.
Hence one of the partite sets of $G$ is empty.
Hence there are no vertices for the vertices in the other partite set to be adjacent to.
So $K_{m, 0}$ and $K_{0, n}$ are edgeless.
Hence the result.
$\blacksquare$





