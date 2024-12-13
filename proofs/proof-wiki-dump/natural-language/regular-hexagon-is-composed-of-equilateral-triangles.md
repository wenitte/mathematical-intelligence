# 

Source: https://proofwiki.org/wiki/Regular_Hexagon_is_composed_of_Equilateral_Triangles

Theorem
Let $P$ be a regular hexagon.
Let $O$ be the center of $P$.

Then there exists a triangulation of $P$ into six congruent equilateral triangles.
The three vertices of each triangle are $O$ and two adjacent vertices of $P$.


Proof
Let $V_2$ be a vertex of $P$.
Let $V_1, V_3$ be the two adjacent vertices of $V_1$.
From Regular Polygon is composed of Isosceles Triangles, it follows that there exists a triangulation of $P$ into six congruent isosceles triangles of the type $V_1 V_2 O$.
As $\angle V_1 V_2 O$ and $\angle V_3 V_2 O$ are corresponding angles of the congruent isosceles triangles $\triangle V_1 V_2 O$ and $\triangle V_3 V_2 O$, it follows that $\angle V_1 V_2 O = \angle V_3 V_2 O$.
Let $V_2 O$ denote one side of the triangles $\triangle V_1 V_2 O$ and $\triangle V_1 V_3 O$.
As the angles $\angle V_1 V_2 O$ and $\angle V_3 V_2 O$ are constructed by intersecting the angle $\angle V_1 V_2 V_3$ with $V_2 O$, it follows that:














\(\ds \angle V_1 V_2 V_3\)

\(=\)







\(\ds \angle V_1 V_2 O + \angle V_3 V_2 O\)














\(\ds \leadsto \ \ \)





\(\ds 120 \degrees\)

\(=\)







\(\ds \angle V_1 V_2 O + \angle V_3 V_2 O\)





by Internal Angles of Regular Polygon, as $\dfrac {\paren {6 - 2} 180 \degrees} 6 = 120 \degrees$








\(\ds \leadsto \ \ \)





\(\ds 60 \degrees\)

\(=\)







\(\ds \angle V_1 V_2 O\)





as $\angle V_1 V_2 O$ = $\angle V_3 V_2 O$




As $\triangle V_1 V_2 O$ is an isosceles triangle, it follows that:

$\angle V_2 V_1 O = 60 \degrees$

From Sum of Angles of Triangle equals Two Right Angles used on $\triangle V_1 V_2 O$, it follows that:

$\angle V_1 O V_2 = 180 \degrees - \angle V_1 V_2 O - \angle V_2 V_1 O = 60 \degrees$

From Equiangular Triangle is Equilateral, it follows that $\triangle V_1 V_2 O$ is an equilateral triangle.
As the triangles in the triangulation of $P$ are congruent, it follows that they are all equilateral.
$\blacksquare$


Illustration

Here, the angle $\alpha$ corresponds to $\angle V_1 O V_2$.
The side $s$ corresponds to $V_1 V_2$.





