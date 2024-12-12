# 

Source: https://proofwiki.org/wiki/Cosine_of_Angle_in_Cartesian_Plane

Theorem
Let $P = \tuple {x, y}$ be a point in the cartesian plane whose origin is at $O$.
Let $\theta$ be the angle between the $x$-axis and the line $OP$.
Let $r$ be the length of $OP$.
Then:

$\cos \theta = \dfrac x r$
where $\cos$ denotes the cosine of $\theta$.


Proof

Let a unit circle $C$ be drawn with its center at the origin $O$.
Let $Q$ be the point on $C$ which intersects $OP$.
From Parallelism implies Equal Alternate Angles, $\angle OQR = \theta$.
Thus:

$(1): \quad \cos \theta = RQ$
by definition of cosine

$\angle OSP = \angle ORQ$, as both are right angles.
Both $\triangle OSP$ and $\triangle ORQ$ share angle $\angle SOP$.
By Triangles with Two Equal Angles are Similar it follows that $\triangle OSP$ and $\triangle ORQ$ are similar.
By definition of similarity:
Then:














\(\ds \frac x r\)

\(=\)







\(\ds \frac {SP} {OP}\)




















\(\ds \)

\(=\)







\(\ds \frac {RQ} {OQ}\)





Definition of Similar Triangles














\(\ds \)

\(=\)







\(\ds RQ\)





as $OP$ is the radius of the unit circle














\(\ds \)

\(=\)







\(\ds \cos \theta\)





from $(1)$ above



$\blacksquare$



When $\theta$ is obtuse, the same argument holds, except that this time both $x$ and $\cos \theta$ are negative.

When $\theta = \dfrac \pi 2$ we have that $x = 0$ and $\cos \theta = 0 = \dfrac x r$.
Thus $y = r$ and $\sin \theta = 1 \dfrac y r$.
Thus the relation holds for $\theta = \dfrac \pi 2$.

When $\pi < \theta < 2 \pi$ the diagram can be reflected in the $x$-axis.
Thus the relation continues to hold.

When $\theta = 0$ we have that $y = 0$ and $\cos \theta = 1 = \dfrac x r$.
When $\theta = \pi$ we have that $y = 0$ and $x = -r$, while $\cos \theta = -1 = \dfrac x r$.
Hence the result.
$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 5$: Trigonometric Functions: $5.8$




