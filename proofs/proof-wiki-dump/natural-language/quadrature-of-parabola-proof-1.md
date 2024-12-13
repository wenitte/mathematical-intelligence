# 

Source: https://proofwiki.org/wiki/Quadrature_of_Parabola/Proof_1

Theorem
Let $T$ be a parabola.
Consider the parabolic segment bounded by an arbitrary chord $AB$.
Let $C$ be the point on $T$ where the tangent to $T$ is parallel to $AB$.
Then the area $S$ of the parabolic segment $ABC$ of $T$ is given by:

$S = \dfrac 4 3 \triangle ABC$


Proof
Without loss of generality, consider the parabola $y = a x^2$.
Let $A, B, C$ be the points:














\(\ds A\)

\(=\)







\(\ds \tuple {x_0, a {x_0}^2}\)




















\(\ds B\)

\(=\)







\(\ds \tuple {x_2, a {x_2}^2}\)




















\(\ds C\)

\(=\)







\(\ds \tuple {x_1, a {x_1}^2}\)













The slope of the tangent at $C$ is given by using:

$\dfrac {\d y} {\d x} 2 a x_1$
which is parallel to $AB$.
Thus:

$2 a x_1 = \dfrac {a {x_0}^2 - a {x_2}^2} {x_0 - x_2}$
which leads to:

$x_1 = \dfrac {x_0 + x_2} 2$
So the vertical line through $C$ is a bisector of $AB$, at point $P$.
Complete the parallelogram $CPBQ$.
Also, find $E$ which is the point where the tangent to $T$ is parallel to $BC$.
By the same reasoning, the vertical line through $E$ is a bisector of $BC$, and so it also bisects $BP$ at $H$.
Next:














\(\ds EF\)

\(=\)







\(\ds a \paren {\frac {x_1 + x_2} 2}^2 - \paren {a x_1^2 + 2 a x_1 \frac {x_2 - x_1} 2}\)




















\(\ds \)

\(=\)







\(\ds \frac a 4 \paren {\paren {x_1 + x_2}^2 - 4 {x_1}^2 + 4 x_1 \paren {x_2 - x_1} }\)




















\(\ds \)

\(=\)







\(\ds \frac a 4 \paren { {x_1}^2 - 2 x_1 x_2 + {x_2}^2}\)




















\(\ds \)

\(=\)







\(\ds \frac a 4 \paren {x_2 - x_1}^2\)









At the same time:














\(\ds QB\)

\(=\)







\(\ds a {x_2}^2 - \paren {a {x_1}^2 + 2 a x_1 \paren {x_2 - x_2} }\)




















\(\ds \)

\(=\)







\(\ds a \paren { {x_1}^2 - 2 x_1 x_2 + {x_2}^2}\)




















\(\ds \)

\(=\)







\(\ds a \paren {x_2 - x_1}^2\)









So:

$QB = 4 FE = FH$
and because $CB$ is the diagonal of a parallelogram:

$2 FE = 2 EG = FG$
This implies that:

$2 \triangle BEG = \triangle BGH$
and:

$2 \triangle CEG = \triangle BGH$
So:

$\triangle BCE = \triangle BGH$
and so as $\triangle BCP = 4 \triangle BGH$ we have that:

$BCE = \dfrac {\triangle BCP} 4$

A similar relation holds for $\triangle APC$:




so it can be seen that:

$\triangle ABC = 4 \paren {\triangle ADC + \triangle CEB}$
Similarly, we can create four more triangles underneath $\triangle ADC$ and $\triangle CEB$ which are $\dfrac 1 4$ the area of those combined, or $\dfrac 1 {4^2} \triangle ABC$.
This process can continue indefinitely.
So the area $S$ is given as:

$S = \triangle ABC \paren {1 + \dfrac 1 4 + \dfrac 1 {4^2} + \cdots}$
But from Sum of Geometric Sequence it follows that:

$S = \triangle ABC \paren {\dfrac 1 {1 - \dfrac 1 4} } = \dfrac 4 3 \triangle ABC$
$\blacksquare$





