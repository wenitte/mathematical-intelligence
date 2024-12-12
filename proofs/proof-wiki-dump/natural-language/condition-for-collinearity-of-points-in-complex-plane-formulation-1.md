# 

Source: https://proofwiki.org/wiki/Condition_for_Collinearity_of_Points_in_Complex_Plane/Formulation_1

Theorem
Let $z_1$, $z_2$ and $z_3$ be points in the complex plane.
Then $z_1$, $z_2$ and $z_3$ are collinear if and only if:

$\dfrac {z_1 - z_3} {z_3 - z_2} = \lambda$
where $\lambda \in \R$ is a real number.

If this is the case, then $z_3$ divides the line segment in the ratio $\lambda$.
If $\lambda > 0$ then $z_3$ is between $z_1$ and $z_2$, and if $\lambda < 0$ then $z_3$ is outside the line segment joining $z_1$ to $z_2$.


Proof
By Geometrical Interpretation of Complex Subtraction:

$z_1 - z_3$ can be represented as the line segment from $z_3$ to $z_1$
$z_3 - z_2$ can be represented as the line segment from $z_2$ to $z_3$.
Thus we have that $z_1$, $z_2$ and $z_3$ are collinear if and only if $z_1 - z_3$ is parallel to $z_3 - z_2$, when expressed as line segments.

Let $\dfrac {z_1 - z_3} {z_3 - z_2} = \lambda$ for $\lambda \in \C$.
That is:

$z_1 - z_3 = \lambda \paren {z_3 - z_2}$

By Complex Multiplication as Geometrical Transformation‎:

$\map \arg {z_1 - z_3} = \map \arg {z_3 - z_2} \iff \map \arg {z_3 - z_2} \arg \lambda \in \R_{>0}$
and:

$\map \arg {z_1 - z_3} = -\map \arg {z_3 - z_2} \iff \map \arg {z_3 - z_2} \arg \lambda \in \R_{<0}$
where $\arg$ denotes the argument of a complex number.

Also by Complex Multiplication as Geometrical Transformation‎, $z_1 - z_3$ is $\lambda$ the length of $z_3 - z_2$.
The result follows.
$\blacksquare$


Sources
1960: Walter Ledermann: Complex Numbers ... (previous) ... (next): $\S 2$. Geometrical Representations: Example $2$.




