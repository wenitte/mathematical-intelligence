# 

Source: https://proofwiki.org/wiki/Circuit_of_Simple_Graph_has_Three_Edges_or_More

Theorem
Let $G$ be a simple graph.
Let $C$ be a circuit in $G$.

Then $C$ has at least $3$ edges.


Proof
By definition, a circuit contains at least one edge.
That is, a single vertex does not comprise a trivial degenerate circuit with no edges.

Suppose $C$ contains only one edge $e$.
As $G$ is a simple graph it contains no loops.
Therefore $e$ starts and ends at two distinct vertices.
Therefore $C$, consisting entirely of $e$ can not be a circuit.

Suppose $C$ contains exactly $2$ edges $e$ and $f$.
Let $e = u v$ where $u$ and $v$ are vertices of $G$.
Then for $C$ to be a circuit it must follow that $f = v u$.
Thus there are two edges between the same vertices $v$ and $u$.
As $G$ is an undirected graph, it must be that $e$ and $f$ are part of a multiple edge between $u$ and $v$.
But $G$ is not a multigraph, and so such a circuit can not exist.

A circuit containing $3$ edges definitely exists, though.
Let $G = \struct {V, E}$ where $V = \set {u, v, w}$ and $E = \set {\set {u, v}, \set {u, w}, \set {v, w} }$.
Then $\tuple {u, w, v, u}$ is a $3$-edge circuit.
$\blacksquare$


Sources
1977: Gary Chartrand: Introductory Graph Theory ... (previous) ... (next): $\S 2.3$: Connected Graphs




