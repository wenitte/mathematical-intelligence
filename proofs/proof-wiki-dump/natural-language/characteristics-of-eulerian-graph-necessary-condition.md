# 

Source: https://proofwiki.org/wiki/Characteristics_of_Eulerian_Graph/Necessary_Condition

Theorem
Let $G$ be a finite (undirected) graph.
Let $G$ be Eulerian.

Then $G$ is connected and each vertex of $G$ is even.

Note that the definition of graph here includes:

Simple graph
Loop-graph
Multigraph
Loop-multigraph
but does not include directed graph.


Proof
Suppose that $G$ is Eulerian.
Then $G$ contains an Eulerian circuit, that is, a circuit that uses each vertex and passes through each edge exactly once.
Since a circuit must be connected, $G$ is connected.

Beginning at a vertex $v$, follow the Eulerian circuit through $G$.
As the circuit passes through each vertex, it uses two edges: one going to the vertex and another leaving.
Each edge is used exactly once, so each of the vertices must be even.
Since the circuit must also end at $v$, it follows that $v$ is also even.
$\blacksquare$


Sources
1977: Gary Chartrand: Introductory Graph Theory ... (previous) ... (next): $\S 3.1$: The Königsberg Bridge Problem: An Introduction to Eulerian Graphs: Theorem $3.2$




