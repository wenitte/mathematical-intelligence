# 

Source: https://proofwiki.org/wiki/Complete_Graph_K5_is_not_Planar

Theorem
The complete graph $K_5$ is not planar.


Proof
Recall the definition of planar graph:
A planar graph is a graph which can be drawn in the plane (for example, on a piece of paper) without any of the edges crossing over, that is, meeting at points other than the vertices.

First we note that the complete graph $K_4$ is planar by demonstrating its planarity:



Now we attempt to create $K_5$ by building it from its subgraph $K_4$.
Each of the faces of $K_4$ is in the same form as each of the others.
That is, each face consists of a triangle of $3$ vertices which is not incident to the $4$th vertex.
So exactly where in the plane we place the $5$th vertex does not matter.
Without loss of generality let us place vertex $E$ outside the triangle $ABC$ as shown below:


Edges $AE$, $BE$ and $CE$ can be constructed without crossing an existing edge of $K_4$, as indicated by dotted black lines.
However, it is not possible to construct edge $DE$ without crossing one of $AB$, $AC$ or $BC$.
This is shown in dotted $\color{red} {\text {red} }$.
Hence the result.
$\blacksquare$


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): graph: 2.
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): graph: 2.




