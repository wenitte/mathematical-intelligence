# 

Source: https://proofwiki.org/wiki/Equations_defining_Plane_Reflection/Cartesian



Theorem
Let $\LL$ be a straight line through the origin $O$ of a cartesian plane.
Let the angle between $\LL$ and the $x$-axis be $\alpha$.
Let $\phi_\alpha$ denote the reflection in the plane whose axis is $\LL$.

Let $P = \tuple {x, y}$ be an arbitrary point in the plane.
Then:

$\map {\phi_\alpha} P = \tuple {x \cos 2 \alpha + y \sin 2 \alpha, x \sin 2 \alpha - y \cos 2 \alpha}$


Proof

Let $\LL$ reflect $P = \tuple {x, y}$ onto $P' = \tuple {x', y'}$.
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







\(\ds OP \map \cos {\theta + 2 \paren {\alpha - \theta} }\)





from the geometry














\(\ds \)

\(=\)







\(\ds OP \map \cos {2 \alpha - \theta}\)





simplifying














\(\ds \)

\(=\)







\(\ds OP \paren {\cos 2 \alpha \cos \theta + \sin 2 \alpha \sin \theta}\)





Cosine of Difference














\(\ds \)

\(=\)







\(\ds OP \cos \theta \cos 2 \alpha + OP \sin \theta \sin 2 \alpha\)





factoring














\(\ds \)

\(=\)







\(\ds x \cos 2 \alpha + y \sin 2 \alpha\)





substituting $x$ and $y$




and:














\(\ds y'\)

\(=\)







\(\ds OP \map \sin {\theta + 2 \paren {\alpha - \theta} }\)





from the geometry














\(\ds \)

\(=\)







\(\ds OP \map \sin {2 \alpha - \theta}\)





simplifying














\(\ds \)

\(=\)







\(\ds OP \paren {\sin 2 \alpha \cos \theta - \cos 2 \alpha \sin \theta}\)





Sine of Difference














\(\ds \)

\(=\)







\(\ds OP \cos \theta \sin 2 \alpha - OP \sin \theta \cos 2 \alpha\)





factoring














\(\ds \)

\(=\)







\(\ds x \sin 2 \alpha - y \cos 2 \alpha\)





substituting $x$ and $y$




The result follows.
$\blacksquare$


Examples
$x$-Axis
Let $\phi_x$ denote the reflection in the plane whose axis is the $x$-axis.

Let $P = \tuple {x, y}$ be an arbitrary point in the plane
Then:

$\map {\phi_x} P = \tuple {x, -y}$


$y$-Axis
Let $\phi_y$ denote the reflection in the plane whose axis is the $y$-axis.

Let $P = \tuple {x, y}$ be an arbitrary point in the plane
Then:

$\map {\phi_y} P = \tuple {-x, y}$


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): reflection: 2. (in a line)
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): reflection: 2. (in a line)
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): reflection (of the plane)




