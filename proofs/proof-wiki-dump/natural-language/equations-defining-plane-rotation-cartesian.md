# 

Source: https://proofwiki.org/wiki/Equations_defining_Plane_Rotation/Cartesian



Theorem
Let $r_\alpha$ be the rotation of the plane about the origin through an angle of $\alpha$.
Let $P = \tuple {x, y}$ be an arbitrary point in the plane.
Then:

$\map {r_\alpha} P = \tuple {x \cos \alpha - y \sin \alpha, x \sin \alpha + y \cos \alpha}$


Proof

Let $r_\alpha$ rotate $P = \tuple {x, y}$ onto $P' = \tuple {x', y'}$.
Let $OP$ form an angle $\theta$ with the $x$-axis.
We have:

$OP = OP'$
Thus:














\(\ds x\)

\(=\)







\(\ds OP \cos \theta\)




















\(\ds y\)

\(=\)







\(\ds OP \sin \theta\)










Then:














\(\ds x'\)

\(=\)







\(\ds OP \map \cos {\alpha + \theta}\)





from the geometry














\(\ds \)

\(=\)







\(\ds OP \paren {\cos \alpha \cos \theta - \sin \alpha \sin \theta}\)





Cosine of Sum














\(\ds \)

\(=\)







\(\ds OP \cos \theta \cos \alpha - OP \sin \theta \sin \alpha\)





factoring














\(\ds \)

\(=\)







\(\ds x \cos \alpha - y \sin \alpha\)





substituting $x$ and $y$




and:














\(\ds y'\)

\(=\)







\(\ds OP \map \sin {\alpha + \theta}\)





from the geometry














\(\ds \)

\(=\)







\(\ds OP \paren {\sin \alpha \cos \theta + \cos \alpha \sin \theta}\)





Sine of Difference














\(\ds \)

\(=\)







\(\ds OP \cos \theta \sin \alpha + OP \sin \theta \cos \alpha\)





factoring














\(\ds \)

\(=\)







\(\ds x \sin \alpha + y \cos \alpha\)





substituting $x$ and $y$




The result follows.
$\blacksquare$


Examples
Right Angle
Let $r_\Box$ be the rotation of the plane about the origin through a right angle.

Let $P = \tuple {x, y}$ be an arbitrary point in the plane
Then:

$\map {r_\Box} P = \tuple {y, -x}$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {V}$: Vector Spaces: $\S 28$. Linear Transformations: Example $28.2$
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $2$: Continuity generalized: metric spaces: Exercise $2.6: 21$




