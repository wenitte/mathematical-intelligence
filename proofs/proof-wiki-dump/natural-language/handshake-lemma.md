# 

Source: https://proofwiki.org/wiki/Handshake_Lemma

  This article was Featured Proof between 22 September 2008 and 28 September 2008.




Theorem
Let $G$ be a $\tuple {p, q}$-undirected graph, which may be a multigraph or a loop-graph, or both.
Let $V = \set {v_1, v_2, \ldots, v_p}$ be the vertex set of $G$.

Then:

$\ds \sum_{i \mathop = 1}^p \map {\deg_G} {v_i} = 2 q$
where $\map {\deg_G} {v_i}$ is the degree of vertex $v_i$.

That is, the sum of all the degrees of all the vertices of an graph is equal to twice its size.

This result is known as the Handshake Lemma or Handshaking Lemma.


Corollary
The number of odd vertices in $G$ is even.


Proof
In the notation $\tuple {p, q}$-graph, $p$ is its order and $q$ its size.
That is, $p$ is the number of vertices in $G$, and $q$ is the number of edges in $G$.
Each edge is incident to exactly two vertices.
The degree of each vertex is defined as the number of edges to which it is incident.
So when we add up the degrees of all the vertices, we are counting all the edges of the graph twice.
$\blacksquare$


Examples
Arbitrary Order $8$ Graph

The above simple graph has $8$ vertices and $10$ edges (which can be ascertained by counting).














\(\ds \map \deg {v_1}\)

\(=\)







\(\ds 2\)




















\(\ds \map \deg {v_2}\)

\(=\)







\(\ds 3\)




















\(\ds \map \deg {v_3}\)

\(=\)







\(\ds 3\)




















\(\ds \map \deg {v_4}\)

\(=\)







\(\ds 3\)




















\(\ds \map \deg {v_5}\)

\(=\)







\(\ds 4\)




















\(\ds \map \deg {v_6}\)

\(=\)







\(\ds 1\)




















\(\ds \map \deg {v_7}\)

\(=\)







\(\ds 2\)




















\(\ds \map \deg {v_8}\)

\(=\)







\(\ds 2\)














\(\ds \leadsto \ \ \)





\(\ds \sum \map \deg V\)

\(=\)







\(\ds 2 + 3 + 3 + 3 + 4 + 1 + 2 + 2\)




















\(\ds \)

\(=\)







\(\ds 20\)




















\(\ds \)

\(=\)







\(\ds 2 \times 10\)











Impossible Order $6$ Graph
There exists no undirected graph whose vertices have degrees $2, 3, 3, 4, 4, 5$.


No Graph with One Odd Vertex
There exists no undirected graph with exactly one odd vertex.


Historical Note
The Handshake Lemma was first given by Leonhard Euler in his $1736$ paper Solutio problematis ad geometriam situs pertinentis.
This is widely considered as the first ever paper in the field of graph theory.


Sources
1977: Gary Chartrand: Introductory Graph Theory ... (previous) ... (next): Chapter $2$: Elementary Concepts of Graph Theory: $\S 2.1$: The Degree of a Vertex: Theorem $2.1$




