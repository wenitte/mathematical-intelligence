# 

Source: https://proofwiki.org/wiki/Area_between_Smooth_Curve_and_Line_is_Maximized_by_Semicircle


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $y$ be a smooth curve, embedded in $2$-dimensional Euclidean space.
Let $y$ have a total length of $l$.
Let it be contained in the upper half-plane with an exception of endpoints, which are on the $x$-axis.
Suppose, $y$, together with a line segment connecting $y$'s endpoints, maximizes the enclosed area.

Then $y$ is a semicircle.


Proof
By Area between Smooth Curve and Line with Fixed Endpoints is Maximized by Arc of Circle the maximizing curve is an arc of a circle.
It is described as follows:


If $\dfrac l \pi \le \lambda < \infty$ then:
$y = \sqrt {\lambda^2 - x^2} - \sqrt {\lambda^2 - a^2}$
where:
$l = 2 \lambda \, \map \arctan {\dfrac a {\sqrt {\lambda^2 - a^2} } }$


If $\dfrac l {2 \pi} \le \lambda < \dfrac l \pi$ then:
$y = \sqrt{\lambda^2 - a^2} - \sqrt{\lambda^2 - x^2}$
where:
$l = 2 \lambda \paren {\pi - \map \arctan {\dfrac a {\sqrt {\lambda^2 - a^2} } } }$

In the first case the area is a definite integral between $x = -a$ and $x = a$:














\(\ds A\)

\(=\)







\(\ds \int_{-a}^a \paren {\sqrt {\lambda^2 - x^2} - \sqrt {\lambda^2 - a^2} } \rd x\)




















\(\ds \)

\(=\)







\(\ds \intlimits {\frac 1 2 \paren {x \sqrt {\lambda^2 - a^2} + \lambda^2 \arctan {\dfrac x {\sqrt {\lambda^2 - x^2} } } } - x \sqrt {\lambda^2 - a^2} } {-a} a\)





Primitive of Root of a squared minus x squared














\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {\lambda^2 \arctan \frac a {\sqrt {\lambda^2 - a^2} } - a \sqrt {\lambda^2 - a^2} }\)









Solve the length constraint for $a$.
The solution, satisfying strict positivity of $l$ and the allowed values of $\lambda$, is:

$a = \dfrac {\lambda \map \tan {\frac l {2 \lambda} } } {\sqrt {1 + \map {\tan^2} {\frac l {2 \lambda} } } }$
Substitution of this into the expression for the area leads to:

$A = \dfrac \lambda 2 \paren {l - \lambda \sin \dfrac l \lambda}$
$l$ is a constant, while $\lambda$ is a free variable.
For the allowed values of $\lambda$, the area function is a continuous real function.
By Definition of Local Maximum, the maximum is either in a subinterval of domain of $A$ with respect to $\lambda$ or at one of the boundary values.
By Derivative at Maximum or Minimum, we have to find the extremum of $A$:

$\dfrac {\d A} {\d \lambda} = \dfrac \lambda 2 \paren {\dfrac l \lambda + \dfrac l \lambda \cos \dfrac l \lambda - 2 \sin \dfrac l \lambda}$
This vanishes at $\dfrac l \lambda = \paren {2 k + 1} \pi$ and $\dfrac l \lambda = 0$, where $k \in \Z$.
Then the area at these extremums acquires the following values:

$\map A {\dfrac l \lambda = 0} = 0$;
$\map A {\dfrac l \lambda = \paren {2 k + 1} \pi} = \dfrac {l^2} {\paren {1 + 2 k} 2 \pi}$
This is maximized for $k = 0$, or $\dfrac l \lambda = \pi$.
Incidentally, these are also boundary values of the area function.
This concludes the maximization of area when the arc is being varied from a straight line to a semicircle.
The second part considers the variation of the curve from a semicircle to a circle.
In this case the area is that of a semicircle plus a part of the lower semicircle:














\(\ds A\)

\(=\)







\(\ds \pi \frac {\lambda^2} 2 + \int_{-\lambda}^{-a} \paren {\sqrt {\lambda^2 - a^2} - \paren {\sqrt {\lambda^2 - a^2} - \sqrt {\lambda^2 - x^2} } } \rd x + \int_{-a}^a \paren {\sqrt {\lambda^2 - a^2} } \rd x + \int_a^\lambda \paren {\sqrt {\lambda^2 - a^2} - \paren {\sqrt {\lambda^2 - a^2} - \sqrt {\lambda^2 - x^2} } } \rd x\)




















\(\ds \)

\(=\)







\(\ds \pi \lambda^2 + a \sqrt {\lambda^2 - a^2} - \lambda^2 \arctan \paren {\frac a {\sqrt {\lambda^2 - a^2} } }\)





Primitive of Root of a squared minus x squared



Like in the previous case, solve the length constraint for $a$, while satisfying positivity and range conditions:

$a = \dfrac {\tan {\frac {2 \pi \lambda - l} {2 \lambda} } } {\sqrt {1 + \tan^2 {\frac {2 \pi \lambda - l} {2 \lambda} } } }$
Substitution into the area expression leads to:

$A = \dfrac {\lambda} 2 \paren {l - \lambda \sin \dfrac l \lambda}$
To find the extremum, compute its derivative with respect to $\lambda$:

$\dfrac {\d A} {\d \lambda} = \dfrac 1 2 \paren {l + l \cos \dfrac l \lambda - 2 \lambda \sin \dfrac l \lambda}$
It vanishes if $\dfrac l \lambda = 0$ or $\dfrac l \lambda = \pi \paren {1 + 2 k}$, with $k \in \Z$.
From these solutions the one satisfying the range of $\lambda$ is $\dfrac l \lambda = \pi$.
The area for this value is $\dfrac {\pi \lambda^2} 2$.
For completeness we have to check the other boundary value in this range, namely, $\lambda = \dfrac l {2 \pi}$.

$\map A {\lambda = \dfrac l {2\pi} } = \pi \lambda^2$.
Since we have length as an input for this problem, express both areas in terms of length.

$\map A {l = \pi \lambda} = \dfrac {l^2} {2 \pi}$
$\map A {l = 2 \pi \lambda} = \dfrac {l^2} {4 \pi}$
Hence, the area is maximized when the curve $y$ is a semicircle.
$\blacksquare$





