# 

Source: https://proofwiki.org/wiki/Position_of_Centroid_of_Triangle_on_Median



Theorem
Let $\triangle ABC$ be a triangle.
Let $AL$, $BM$ and $CN$ be the medians of $\triangle ABC$ meeting at the centroid $G$ of $\triangle ABC$.

Then $G$ is $\dfrac 1 3$ of the way along $AL$ from $L$, and similarly for the other medians.


Proof 1


Let $\triangle ABC$ be embedded in a Cartesian plane such that $A = \tuple {x_1, y_1}$, $B = \tuple {x_2, y_2}$ and $C = \tuple {x_3, y_3}$.
The coordinates of $L$ are $\tuple {\dfrac {x_2 + x_3} 2, \dfrac {y_2 + y_3} 2}$.
Let $G$ be the point dividing $AL$ in the ratio $2 : 1$.
The coordinates of $G$ are $\tuple {\dfrac {x_1 + \paren {x_2 + x_3} } {1 + 2}, \dfrac {y_1 + \paren {y_2 + y_3} } {1 + 2} }$.
By similarly calculating the coordinates of $M$ and $N$, we get:














\(\ds M\)

\(=\)







\(\ds \tuple {\dfrac {x_1 + x_3} 2, \dfrac {y_1 + y_3} 2}\)




















\(\ds N\)

\(=\)







\(\ds \tuple {\dfrac {x_1 + x_2} 2, \dfrac {y_1 + y_2} 2}\)









Similarly:

calculating the position of the point $G'$ dividing $BM$ in the ratio $2 : 1$
calculating the position of the point $G$ dividing $CN$ in the ratio $2 : 1$
we find that:

$G = G' = G = \tuple {\dfrac {x_1 + x_2 + x_3} 3, \dfrac {y_1 + y_2 + y_3} 3}$
and the result follows.
$\blacksquare$


Proof 2

Let $\triangle ABC$ be a triangle.
Let $AL$, $BM$ and $CN$ be the medians of $\triangle ABC$.
Let the medians be concurrent at the centroid, $G$.
By the definition of median, the sides of $\triangle ABC$ are bisected.














\(\ds BL\)

\(=\)







\(\ds LC\)





by hypothesis














\(\ds BC\)

\(=\)







\(\ds BL + LC\)





addition




\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \frac {BC} {LC}\)

\(=\)







\(\ds 2\)




















\(\ds AN\)

\(=\)







\(\ds NB\)





by hypothesis




\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \frac {AN} {NB}\)

\(=\)







\(\ds 1\)




















\(\ds \dfrac {LG} {GA} \cdot \dfrac {AN} {NB} \cdot \dfrac {BC} {CL}\)

\(=\)







\(\ds -1\)





Menelaus's Theorem














\(\ds CL\)

\(=\)







\(\ds -LC\)





Definition of Directed Line Segment








\(\ds \leadsto \ \ \)





\(\ds \dfrac {LG} {GA} \cdot \dfrac {AN} {NB} \cdot \dfrac {BC} {LC}\)

\(=\)







\(\ds 1\)




















\(\ds \dfrac {LG} {GA} \cdot 2\)

\(=\)







\(\ds 1\)





substitute from $(1)$ and $(2)$














\(\ds \dfrac {GA} {LG}\)

\(=\)







\(\ds 2\)





rearranging



Hence:

the distance from the vertex to the centroid is $2/3$ of the whole length of the median.
and so:

the distance from the centroid to the side is $1/3$ of the whole length of the median.

The result follows.
$\blacksquare$


Proof 3

By Medians of Triangle Form Six Triangles of Equal Area‎:

these six triangles formed by the medians of $\triangle ABC$ have equal area:
$\triangle AGN$
$\triangle BGN$
$\triangle BGL$
$\triangle CGL$
$\triangle CGM$
$\triangle AGM$
Without loss of generality consider one of the three medians of $\triangle ABC$, $AGL$.
The following triangles both have their base on $AGL$ and share vertex $C$:

$\triangle CGA$
$\triangle CGL$
Since $\triangle CGA$ contains two of the small triangles:








\(\ds \leadsto \ \ \)





\(\ds \AA \paren { \triangle CGA }\)

\(=\)







\(\ds \AA \paren { \triangle AGM } + \AA \paren { \triangle CGM }\)




















\(\ds \dfrac { \AA \paren { \triangle CGA } } { \AA \paren { \triangle CGL } }\)

\(=\)







\(\ds \dfrac { \AA \paren { \triangle AGM } + \AA \paren { \triangle CGM } } { \AA \paren { \triangle CGL } }\)









Since 

$\AA \paren { \triangle AGM } = \AA \paren { \triangle CGM } = \AA \paren { \triangle CGL }$







\(\ds \leadsto \ \ \)





\(\ds \dfrac 2 1\)

\(=\)







\(\ds \dfrac { \AA \paren { \triangle AGM } + \AA \paren { \triangle CGM } } { \AA \paren { \triangle CGL } }\)




















\(\ds \dfrac { \AA \paren { \triangle CGA } } { \AA \paren { \triangle CGL } }\)

\(=\)







\(\ds \dfrac 2 1\)





Common Notion $1$














\(\ds \dfrac { \AA \paren { \triangle CGA } } { \AA \paren { \triangle CGL } }\)

\(=\)







\(\ds \dfrac { AG } { GL }\)





Areas of Triangles and Parallelograms Proportional to Base














\(\ds \dfrac { AG } { GL }\)

\(=\)







\(\ds \dfrac 2 1\)





Common Notion $1$








\(\ds \leadsto \ \ \)





\(\ds AG\)

\(=\)







\(\ds 2 \cdot GL\)









mutatis mutandis:

$BG = 2 \cdot GM$
$CG = 2 \cdot GN$
Hence:

the distance from the vertex to the centroid is $2/3$ of the whole length of the median.
and so:

the distance from the centroid to the side is $1/3$ of the whole length of the median.

The result follows.
$\blacksquare$


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): centroid
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): centroid




