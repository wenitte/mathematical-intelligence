# 

Source: https://proofwiki.org/wiki/Length_of_Tangent_to_Astroid_between_Axes_equals_Radius_of_Stator

Theorem
Let $C_1$ be a circle of radius $b$ roll without slipping around the inside of a circle $C_2$ of radius $a = 4 b$.
Let $C_2$ be embedded in a cartesian plane with its center $O$ located at the origin.
Let $P$ be a point on the circumference of $C_1$.
Let $C_1$ be initially positioned so that $P$ is its point of tangency to $C_2$, located at point $A = \tuple {a, 0}$ on the $x$-axis.

Let $H$ be the astroid formed by the locus of $P$.

The segment of the tangent to $H$ between the $x$-axis and the $y$-axis is constant and equals the radius of the stator $C_2$.


Proof


From Equation of Astroid, $H$ can be expressed as:

$\begin {cases} x & = a \cos^3 \theta \\ y & = a \sin^3 \theta \end {cases}$
Thus the slope of the tangent to $H$ at $\tuple {x, y}$ is:














\(\ds \frac {\d y} {\d x}\)

\(=\)







\(\ds \frac {3 a \sin^2 \theta \cos \theta \rd \theta} {-3 a \cos^2 \theta \sin \theta \rd \theta}\)




















\(\ds \)

\(=\)







\(\ds -\tan \theta\)









Thus the equation of the tangent to $H$ is given by:

$y - a \sin^3 \theta = -\tan \theta \paren {x - a \cos^3 \theta}$

This article, or a section of it, needs explaining.In particular: Find, or post up, the equation of a line of given tangent passing through point $\tuple {x, y}$ as this is what is needed hereYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.

The $x$-intercept is found by setting $y = 0$ and solving for $x$:














\(\ds x\)

\(=\)







\(\ds a \cos^3 \theta + a \sin^2 \theta \cos \theta\)




















\(\ds \)

\(=\)







\(\ds a \cos \theta \paren {\cos^2 \theta + \sin^2 \theta}\)




















\(\ds \)

\(=\)







\(\ds a \cos \theta\)





Sum of Squares of Sine and Cosine




Similarly, the $y$-intercept is found by setting $x = 0$ and solving for $y$, which gives:

$y = a \sin \theta$

The length of the part of the tangent to $H$ between the $x$-axis and the $y$-axis is given by:














\(\ds \sqrt {a^2 \cos^2 \theta + a^2 \sin^2 \theta}\)

\(=\)







\(\ds a \sqrt {\cos^2 \theta + \sin^2 \theta}\)




















\(\ds \)

\(=\)







\(\ds a\)





Sum of Squares of Sine and Cosine



which is constant.
$\blacksquare$


Sources
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {B}.21$: The Cycloid
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): astroid




