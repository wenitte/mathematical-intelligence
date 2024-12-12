# 

Source: https://proofwiki.org/wiki/Degrees_of_Vertices_determine_Order_and_Size_of_Graph

Theorem
Let $G = \struct {V, E}$ be a simple graph.
Let the degrees of each of the vertices of $G$ be given.

Then it is possible to determine both the order $\card V$ and size $\card E$ of $G$.


Proof
Suppose we are given the degrees of each of the vertices of $G$.
By definition, $\card V$ is simply the count of the vertices.
So if we have been given the degrees of each of the vertices, we must know how many vertices there are.

Then from the Handshake Lemma:

$\ds \sum_{v \mathop \in V} \map \deg v = 2 \card E$
That is, the sum of the degrees of all the vertices is equal to twice $\card E$.
So to find the size of $G$, add up the degrees of all the vertices and divide by $2$.
$\blacksquare$


Sources
1977: Gary Chartrand: Introductory Graph Theory ... (previous) ... (next): Chapter $2$: Elementary Concepts of Graph Theory: $\S 2.1$: The Degree of a Vertex: Problem $5$




