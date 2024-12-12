# 

Source: https://proofwiki.org/wiki/Circle_of_Apollonius_is_Circle

Theorem
Let $A, B$ be distinct points in the plane.
Let $\lambda \in \R_{>0}$ be a strictly positive real number.

Let $X$ be the locus of points in the plane such that:

$XA = \lambda \paren {XB}$

Then $X$ is in the form of a circle, known as a circle of Apollonius.




If $\lambda < 1$, then $A$ is inside the circle, and $B$ is outside.
If $\lambda > 1$, then $B$ is inside the circle, and $A$ is outside.


Proof 1

Let $P$ be an arbitrary point such that $\dfrac {AP} {PB} = \lambda$.
Let $\angle APB$ be bisected internally and externally to intersect $AB$ at $X$ and $Y$ respectively.
Then:

$\dfrac {AX} {XB} = \dfrac {AP} {PB} = \lambda$
and:

$\dfrac {AY} {YB} = \dfrac {AP} {PB} = \lambda$

This article, or a section of it, needs explaining.In particular: explain why the aboveYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Thus $X$ and $Y$ are the points which divide $AB$ internally and externally in the given ratio.
Therefore, for a given $A$, $B$ and $\lambda$, $X$ and $Y$ are fixed.
From Bisectors of Adjacent Angles between Straight Lines Meeting at Point are Perpendicular, $\angle XPY$ is a right angle.
Hence by Thales' Theorem, $P$ lies on the circumference of a circle of which $XY$ is a diameter.
$\blacksquare$


Proof 2

Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: Simplify the workings by setting one of the points at the origin and the other on the x-axis.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Let $A = \tuple {x_a, y_a}, B = \tuple {x_b, y_b}$.
Let $X = \tuple {x, y}$.

We have:














\(\ds XA\)

\(=\)







\(\ds \lambda \paren {XB}\)














\(\ds \leadsto \ \ \)





\(\ds \sqrt {\paren {x - x_a}^2 + \paren {y - y_a}^2}\)

\(=\)







\(\ds \lambda \sqrt {\paren {x - x_b}^2 + \paren {y - y_b}^2}\)





Pythagoras's Theorem








\(\ds \leadsto \ \ \)





\(\ds \paren {x - x_a}^2 + \paren {y - y_a}^2\)

\(=\)







\(\ds \lambda^2 \paren {\paren {x - x_b}^2 + \paren {y - y_b}^2}\)














\(\ds \leadsto \ \ \)





\(\ds x^2 - 2 x x_a + {x_a}^2 + y^2 - 2 y y_a + {y_a}^2\)

\(=\)







\(\ds \lambda^2 \paren {x^2 - 2 x x_b + {x_b}^2 + y^2 - 2 y y_b + {y_b}^2}\)














\(\ds \leadsto \ \ \)





\(\ds \paren {\lambda^2 - 1} \paren {x^2 + y^2} + 2 x \paren {\lambda^2 x_b + x_a} + 2 y \paren {\lambda^2 y_b + y_a} + {x_a}^2 + {y_a}^2 - \lambda^2 \paren { {x_b}^2 + {y_b}^2}\)

\(=\)







\(\ds 0\)









From Equation of Circle in Cartesian Plane, this is an equation in the form:

$A \paren {x^2 + y^2} + B x + C y + D = 0$
with radius $R$ and center $\tuple {a, b}$, where:

$R = \dfrac 1 {2 A} \sqrt {B^2 + C^2 - 4 A D}$
$\tuple {a, b} = \tuple {\dfrac B {2 A}, \dfrac C {2 A} }$

Here, we have:














\(\ds A\)

\(=\)







\(\ds \lambda^2 - 1\)




















\(\ds B\)

\(=\)







\(\ds 2 \paren {\lambda^2 x_b + x_a}\)




















\(\ds C\)

\(=\)







\(\ds 2 \paren {\lambda^2 y_b + y_a}\)




















\(\ds D\)

\(=\)







\(\ds {x_a}^2 + {y_a}^2 - \lambda^2 \paren { {x_b}^2 + {y_b}^2}\)










Hence the center $\tuple {a, b}$ can be evaluated:














\(\ds a\)

\(=\)







\(\ds \dfrac B {2 A}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {2 \paren {\lambda^2 x_b + x_a} } {2 \paren {\lambda^2 - 1} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\lambda^2 x_b + x_a} {\lambda^2 - 1}\)
























\(\ds b\)

\(=\)







\(\ds \dfrac C {2 A}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {2 \paren {\lambda^2 y_b + y_a} } {2 \paren {\lambda^2 - 1} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\lambda^2 y_b + y_a} {\lambda^2 - 1}\)










Then the radius can be evaluated:














\(\ds R\)

\(=\)







\(\ds \dfrac 1 {2 A} \sqrt {B^2 + C^2 - 4 A D}\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {2 \paren {\lambda^2 - 1} } \sqrt {4 \paren {\lambda^2 x_b + x_a}^2 + 4 \paren {\lambda^2 y_b + y_a}^2 - 4 \paren {\lambda^2 - 1} \paren { {x_a}^2 + {y_a}^2 - \lambda^2 \paren { {x_b}^2 + {y_b}^2} } }\)










This needs considerable tedious hard slog to complete it.In particular: Good luck with that.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.




