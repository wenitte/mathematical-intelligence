# 

Source: https://proofwiki.org/wiki/Plane_Reflection_is_Involution

Theorem
Let $M$ be a straight line in the plane passing through the origin.
Let $s_M$ be the reflection of $\R^2$ in $M$.

Then $s_M$ is an involution in the sense that:

$s_M \circ s_M = I_{\R^2}$
where $I_{\R^2}$ is the identity mapping on $\R_2$.
That is:

$s_M = {s_M}^{-1}$


Proof
Let the angle between $M$ and the $x$-axis be $\alpha$.

Let $P = \tuple {x, y}$ be an arbitrary point in the plane.
Then from Equations defining Plane Reflection:

$\map {s_M} P = \tuple {x \cos 2 \alpha + y \sin 2 \alpha, x \sin 2 \alpha - y \cos 2 \alpha}$

Thus:














\(\ds \map {s_M \circ s_M} P\)

\(=\)







\(\ds \map {s_M} {\map {s_M} P}\)





Definition of Composition of Mappings














\(\ds \)

\(=\)







\(\ds \map {s_M} {\tuple {x \cos 2 \alpha + y \sin 2 \alpha, x \sin 2 \alpha - y \cos 2 \alpha} }\)




















\(\ds \)

\(=\)







\(\ds {\tuple {\paren {x \cos 2 \alpha + y \sin 2 \alpha} \cos 2 \alpha + \paren {x \sin 2 \alpha - y \cos 2 \alpha} \sin 2 \alpha, \paren {x \cos 2 \alpha + y \sin 2 \alpha} \sin 2 \alpha - \paren {x \sin 2 \alpha - y \cos 2 \alpha}  \cos 2 \alpha} }\)




















\(\ds \)

\(=\)







\(\ds \tuple {x \cos^2 2 \alpha + y \sin 2 \alpha \cos 2 \alpha + x \sin^2 2 \alpha - y \sin 2 \alpha \cos 2 \alpha, x \sin 2 \alpha \cos 2 \alpha + y \sin^2 2 \alpha - x \sin 2 \alpha \cos 2 \alpha + y \cos^2 2 \alpha}\)




















\(\ds \)

\(=\)







\(\ds \tuple {x \paren {\cos^2 2 + \sin^2 2 \alpha}, y \paren {\sin^2 2 \alpha + \cos^2 2 \alpha} }\)





simplifying














\(\ds \)

\(=\)







\(\ds \tuple {x, y}\)





Sum of Squares of Sine and Cosine



Hence the result.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {V}$: Vector Spaces: $\S 28$. Linear Transformations: Example $28.4$




