# 

Source: https://proofwiki.org/wiki/Area_between_Smooth_Curve_and_Line_with_Fixed_Endpoints_is_Maximized_by_Arc_of_Circle


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $y$ be a smooth curve, embedded in $2$-dimensional Euclidean space.
Let $y$ have a total length of $l$.
Let it be contained in the upper halfplane with an exception of endpoints, which are on the x-axis and are given.
Suppose, $y$, together with a line segment connecting $y$'s endpoints, maximizes the enclosed area.

Then $y$ is an arc of a circle.


Proof
Without loss of generality, we choose our point of reference such that $y$ intersect x-axis at points $\tuple {-a, 0}$ and $\tuple {a, 0}$ for some $a > 0$.
The area below the curve $y$ is a functional of the following form:

$\ds A \sqbrk y = \int_{-a}^a y \rd x$
Furthermore, $y$ has to satisfy the following conditions:

$\map y {-a} = \map y a = 0$
$\ds L \sqbrk y = \int_{-a}^a \sqrt {1 + y'^2} \rd x = l$
By Simplest Variational Problem with Subsidiary Conditions, there exists a constant $\lambda$ such that the functional:

$\ds A \sqbrk y + \lambda L \sqbrk y = \int_{-a}^a \paren {y + \lambda \sqrt {1 + y'^2} } \rd x$
is extremized by the mapping $y$.
The corresponding Euler's Equation reads:

$1 + \lambda \dfrac \d {\d x} \dfrac {y'} {\sqrt {1 + y'^2} } = 0$
Integrating with respect to $x$ once yields:

$x + \lambda \dfrac {y'} {\sqrt {1 + y'^2} } = C_1$
Solve this for $y'$:

$\ds y' = \pm \frac {c_1 - x} {\sqrt {\lambda^2 - c_1^2 + 2 c_1 x - x^2} }$
Integration yields:

$\paren {x - C_1}^2 + \paren {y - C_2}^2 = \lambda^2$
This is an equation for a circle with radius $\lambda$ and center $\tuple {C_1, C_2}$.
To find $C_1, C_2, \lambda$, apply boundary conditions and the length constraint.
From the boundary conditions we have that:














\(\ds \paren {-a - C_1}^2\)

\(=\)







\(\ds \lambda^2\)




















\(\ds \paren {a - C_1}^2\)

\(=\)







\(\ds \lambda^2\)









Take the difference of these two equations:

$4 a C_1 = 0 \implies C_1 = 0$
because $a > 0$.
Apply one of the boundary conditions again, that is, at $\tuple {a, 0}$:

$a^2 + C_2^2 = \lambda^2$
Then:

$C_2 = \pm \sqrt {\lambda^2 - a^2}$.
which can be used to get rid of $C_2$.
The last parameter to find is $\lambda$.
We have two cases: 

the curve is an arc of the upper semicirle;
the curve is a union of upper semicirle with two arcs of lower semicirle.
In the first case the length constraint is:

$l = 2 \lambda \map \arctan {\dfrac a {\sqrt {\lambda^2 - a^2} } }$
For real $\lambda$, if $\lambda \ge a$, then $l \in \R$.
To find extremal values, consider the derivate $\dfrac {\d l} {\d \lambda}$:














\(\ds \dfrac {\d l} {\d \lambda}\)

\(=\)







\(\ds 2 \paren {\map \arctan {\frac 1 {\sqrt {\lambda^2 - 1} } } - \frac 1 {\sqrt {\lambda^2 - 1} } }\)




















\(\ds \)

\(<\)







\(\ds 0\)





Tangent Inequality



Hence the domain of $l$ is determined by boundary values.
At the boundary of $\lambda = a$ we have:














\(\ds \lim_{\lambda \mathop \to a^+} l\)

\(=\)







\(\ds \lim_{\lambda \mathop \to a^+} 2 \lambda \map \arctan {\frac a {\sqrt {\lambda^2 - a^2} } }\)




















\(\ds \)

\(=\)







\(\ds 2 a \lim_{\lambda \mathop \to a^+} \map \arctan {\frac a {\sqrt {\lambda^2 - a^2} } }\)





Product Rule for Limits of Real Functions



To calculate the limit of such composite function denote:














\(\ds \map f y\)

\(=\)







\(\ds \map \arctan y\)




















\(\ds \map g {\lambda}\)

\(=\)







\(\ds \frac a {\sqrt {\lambda^2 - a^2} }\)









It follows that:

$\ds \lim_{\lambda \mathop \to a^+} \map g \lambda = + \infty$
$\ds \lim_{y \mathop \to \infty} \map f y = \frac \pi 2$
Arctangent is continuous for all $x \in \R$.
Then, by Limit of Composite Function:

$\ds 2 a \lim_{\lambda \mathop \to a^+} \map \arctan {\frac a {\sqrt {\lambda^2 - a^2} } } = \pi a$
At the boundary of $\lambda = + \infty$ we have:














\(\ds \lim_{\lambda \mathop \to \infty} l\)

\(=\)







\(\ds \lim_{\lambda \mathop \to \infty} 2 \lambda \map \arctan {\frac a {\sqrt {\lambda^2 - a^2} } }\)




















\(\ds \)

\(=\)







\(\ds \lim_{\lambda \mathop \to \infty} 2 \frac {\map \arctan {\frac a {\sqrt {\lambda^2 - a^2} } } } {\frac 1 \lambda}\)





Indeterminate limit $\infty \cdot 0$














\(\ds \)

\(=\)







\(\ds \lim_{\lambda \mathop \to \infty} 2 \frac {-\frac a {\lambda \sqrt {\lambda^2 - a^2} } } {-\frac 1 {\lambda^2} }\)





L'Hôpital's Rule














\(\ds \)

\(=\)







\(\ds \lim_{\lambda \mathop \to \infty} 2 a \frac \lambda {\sqrt {\lambda^2 - a^2} }\)




















\(\ds \)

\(=\)







\(\ds 2 a\)









In the second case the length constraint is:

$l = 2 \lambda \paren {\pi - \arctan \dfrac a {\sqrt {\lambda^2 - a^2} } }$
Similarly to the previous case:














\(\ds \dfrac {\d l} {\d \lambda}\)

\(=\)







\(\ds 2 \pi - 2 \map \arctan {\frac 1 {\sqrt {\lambda^2 - 1} } } + \frac 1 {\sqrt {\lambda^2 - 1} }\)




















\(\ds \)

\(>\)







\(\ds 0\)





Tangent Inequality



Hence the domain of $l$ is determined by boundary values.
At the boundary of $\lambda = a$ we have:














\(\ds \lim_{\lambda \mathop \to a^+} l\)

\(=\)







\(\ds 2 \lambda \paren {\pi - \arctan \dfrac a {\sqrt {\lambda^2 - a^2} } }\)




















\(\ds \)

\(=\)







\(\ds 2 \pi a - \pi a\)




















\(\ds \)

\(=\)







\(\ds \pi a\)









As $\lambda$ approaches the infinity we have:














\(\ds \lim_{\lambda \mathop \to \infty} l\)

\(=\)







\(\ds \lim_{\lambda \mathop \to \infty} 2 \lambda \paren {\pi - \arctan \dfrac a {\sqrt {\lambda^2 - a^2} } }\)




















\(\ds \)

\(=\)







\(\ds \lim_{\lambda \mathop \to \infty} 2 \lambda \pi - 2 a\)




















\(\ds \)

\(=\)







\(\ds \infty\)









Therefore:

$\forall l \ge 2 a: \exists \lambda \ge a$
Hence, within these constraints the real solution maximizing the area with fixed endpoints is an arc of a circle.
$\blacksquare$


Sources
1963: I.M. Gelfand and S.V. Fomin: Calculus of Variations ... (previous) ... (next): $\S 2.12$: Variational Problems with Subsidiary Conditions




