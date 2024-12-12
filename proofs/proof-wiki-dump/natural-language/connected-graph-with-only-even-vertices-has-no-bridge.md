# 

Source: https://proofwiki.org/wiki/Connected_Graph_with_only_Even_Vertices_has_no_Bridge

Theorem
Let $G$ be a connected graph whose vertices are all even.

Then no edge of $G$ is a bridge.


Proof
Let the vertices of $G$ all be even.
Then by Characteristics of Eulerian Graph, $G$ is Eulerian.
By definition of Eulerian, $G$ therefore contains a Eulerian circuit.
Thus every edge of $G$ lies on a circuit of $G$.
From Condition for Edge to be Bridge, if an edge $e$ of $G$ is a bridge, then it does not lie on a circuit.
Hence no edge of $G$ is a bridge.
$\blacksquare$


Sources
1977: Gary Chartrand: Introductory Graph Theory ... (previous) ... (next): $\S 2.4$: Cut-Vertices and Bridges: Problem $48$




