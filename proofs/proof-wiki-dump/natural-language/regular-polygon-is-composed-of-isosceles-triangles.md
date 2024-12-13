# 

Source: https://proofwiki.org/wiki/Regular_Polygon_is_composed_of_Isosceles_Triangles

Theorem
Let $P$ be a regular $n$-gon.
Let $O$ be the center of $P$.

Then there exists a triangulation of $P$ into $n$ congruent isosceles triangles.
The three vertices of each triangle are $O$ and two adjacent vertices of $P$.


Proof
From Regular Polygon is Cyclic, it follows that $O$ is the center of the circumcircle of $P$.
Let $V_1 , V_2$ be adjacent vertices of $P$.
By definition of circumcircle, $V_1 O$ and $V_2 O$ are radii of the circumcircle.
As $V_1 O$ and $V_2 O$ have the same length, it follows that $\triangle V_1 V_2 O$ is an isosceles triangles.
As there are $n$ pairs of adjacent vertices in $P$, corresponding to the $n$ sides of $P$, it follows that there are $n$ triangles of the type $\triangle V_1 V_2 O$.
All of these triangles consist of one side of $P$, as well as two sides of the type $V_1 O, V_2 O$ which they share with one of the adjacent triangles.
Hence, the triangles form a triangulation of $P$.

By definition of regular polygon, all sides of $P$ have the same length.
From Triangle Side-Side-Side Congruence, it follows that all the triangles are congruent.
$\blacksquare$





