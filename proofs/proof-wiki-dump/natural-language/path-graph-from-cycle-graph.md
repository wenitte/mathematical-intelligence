# 

Source: https://proofwiki.org/wiki/Path_Graph_from_Cycle_Graph

Theorem
Removing one edge from a cycle graph leaves a path graph.


Proof
Let $G_n$ be the graph obtained by removing any edge from the cycle graph $C_n$.
As each of those edges lies on a cycle, by Condition for Edge to be Bridge, none of them is a bridge.
So removing any edge from $C_n$ leaves the resulting subgraph of $C_n$ connected.

From Size of Cycle Graph equals Order, the cycle graph $C_n$ has $n$ edges.
So $G_n$ has $n$ vertices and $n - 1$ edges, and is connected.
From Finite Connected Simple Graph is Tree iff Size is One Less than Order, $G_n$ is a tree.
But $G_n$ has two vertices of degree $1$, and all the others are of degree $2$.

It follows that $G_n$ is traversable, and hence by definition is a path graph.
$\blacksquare$





