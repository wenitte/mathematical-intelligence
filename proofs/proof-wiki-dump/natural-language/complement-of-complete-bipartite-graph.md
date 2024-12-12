# 

Source: https://proofwiki.org/wiki/Complement_of_Complete_Bipartite_Graph

Theorem
Let $K_{p, q}$ be a complete bipartite graph.
The complement of $K_{p, q}$ consists of a disconnected graph with two components:

The complete graph $K_p$
The complete graph $K_q$.


Proof
By definition, the complete bipartite graph $K_{p, q}$ consists of two sets of vertices: $A$ of cardinality $p$, and $B$ of cardinality $q$, such that:

Every vertex in $A$ is adjacent to every vertex in $B$
No vertex in $A$ is adjacent to any other vertex in $A$
No vertex in $B$ is adjacent to any other vertex in $B$.

The complement of $K_{p, q}$ therefore must be a graph $G$ such that:

No vertex in $A$ is adjacent to any vertex in $B$
Every vertex in $A$ is adjacent to every other vertex in $A$
Every vertex in $B$ is adjacent to every other vertex in $B$.

The second and third of these conditions describes the complete graphs $K_p$ and $K_q$.
From the first of these conditions, it follows that $G$ comes in two disconnected graph components.
Hence the result.
$\blacksquare$





