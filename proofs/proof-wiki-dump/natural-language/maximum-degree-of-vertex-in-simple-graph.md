# 

Source: https://proofwiki.org/wiki/Maximum_Degree_of_Vertex_in_Simple_Graph



Theorem
Let $G = \struct {V, E}$ be a simple graph.
Let $\card V$ denote the order of $G$.
Then no vertex of $G$ has a degree higher than $\card V - 1$.


Proof
By definition, a simple graph has no loops or multiple edges.
So a vertex can be incident to only as many edges that will join it to all the other vertices once each.
There are $\card V - 1$ other vertices.
Hence the result.
$\blacksquare$


Examples
Impossible Order $5$ Graph
There exists no simple graph whose vertices have degrees $2, 3, 4, 4, 5$.





