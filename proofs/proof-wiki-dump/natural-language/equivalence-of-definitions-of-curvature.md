# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Curvature



Theorem
The following definitions of the concept of Curvature are equivalent:

Reciprocal of Radius of Osculating Circle
The curvature of $C$ is defined as:

the reciprocal of the radius of the osculating circle to $C$.
Whewell Form
The curvature $\kappa$ of $C$ at a point $P$ can be expressed in the form of a Whewell equation as:

$\kappa = \dfrac {\d \psi} {\d s}$
where:

$\psi$ is the turning angle of $C$
$s$ is the arc length of $C$.
Cartesian Form
Let $C$ be embedded in a cartesian plane.
The curvature $\kappa$ of $C$ at a point $P = \tuple {x, y}$ is given by:

$\kappa = \dfrac {y' '} {\paren {1 + y'^2}^{3/2} }$
where:














\(\ds y'\)

\(=\)







\(\ds \dfrac {\d y} {\d x}\)





is the derivative of $y$ with respect to $x$ at $P$














\(\ds y' '\)

\(=\)







\(\ds \dfrac {\d^2 y} {\d x^2}\)





is the second derivative of $y$ with respect to $x$ at $P$.



Parametric Form
Cartesian Coordinates
Let $C$ be embedded in a cartesian plane and defined by the parametric equations:

$\begin{cases} x = \map x t \\ y = \map y t \end{cases}$

The curvature $\kappa$ of $C$ at a point $P = \tuple {x, y}$ is given by:

$\kappa = \dfrac {x' y' ' - y' x' '} {\paren {x'^2 + y'^2}^{3/2} }$
where:

$x' = \dfrac {\d x} {\d t}$ is the derivative of $x$ with respect to $t$ at $P$
$y' = \dfrac {\d y} {\d t}$ is the derivative of $y$ with respect to $t$ at $P$
$x' '$ and $y' '$ are the second derivatives of $x$ and $y$ with respect to $t$ at $P$.


Polar Coordinates
Let $C$ be embedded in a polar plane and defined by the parametric equations:

$\begin{cases} r = \map r t \\ \theta = \map \theta t \end{cases}$

The curvature $\kappa$ of $C$ at a point $P = \polar {r, \theta}$ is given by:

$\kappa = \dfrac {2 r'^2 \theta' + r r' ' \theta' + r r' \theta' ' + r^2 \theta'^3} {\paren {r'^2 + \paren {r \theta'}^2}^{1/2} }$
where:

$r' = \dfrac {\d r} {\d t}$ is the derivative of $r$ with respect to $t$ at $P$
$\theta' = \dfrac {\d \theta} {\d t}$ is the derivative of $\theta$ with respect to $t$ at $P$
$r' '$ and $\theta' '$ are the second derivatives of $r$ and $y$ with respect to $t$ at $P$.


Proof
Whewell Form to Cartesian Form
Consider the curvature of a curve $C$ at a point $P$ expressed as a Whewell equation:

$\kappa = \dfrac {\d \psi} {\d s}$
where:

$\psi$ is the turning angle of $C$
$s$ is the arc length of $C$.

The derivative of the tangent of the turning angle $\psi$ at a point $P$ with respect to $\psi$ is also the derivative of the tangent to $C$ at $P$, again with respect to $\psi$.
That is:














\(\ds \frac {\d} {\d \psi} \tan \psi\)

\(=\)







\(\ds \frac {\d} {\d \psi} \frac {\d y} {\d x}\)














\(\ds \leadsto \ \ \)





\(\ds \sec^2 \psi\)

\(=\)







\(\ds \frac {\d y'} {\d \psi}\)





Derivative of Tangent Function








\(\ds \leadsto \ \ \)





\(\ds 1 + \tan^2 \psi\)

\(=\)







\(\ds \frac {\d y'} {\d \psi}\)





Difference of Squares of Secant and Tangent








\(\ds \leadsto \ \ \)





\(\ds 1 + y'^2\)

\(=\)







\(\ds \frac {\d y'} {\d \psi}\)














\(\ds \leadsto \ \ \)





\(\ds \frac 1 {1 + y'^2}\)

\(=\)







\(\ds \frac {\d \psi} {\d y'}\)












This article, or a section of it, needs explaining.In particular: Clarify the relationship between the tangent and turning angle. The latter is still inadequately defined.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.

We also have that:














\(\ds \d s\)

\(=\)







\(\ds \sqrt {\d x^2 + \d y^2}\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d s} {\d x}\)

\(=\)







\(\ds \sqrt {\paren {\frac {\d x} {\d x} }^2 + \paren {\frac {\d y} {\d x} }^2}\)




















\(\ds \)

\(=\)







\(\ds \sqrt {1 + y'^2}\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d x} {\d s}\)

\(=\)







\(\ds \frac 1 {\paren {1 + y'^2}^{1/2} }\)










Then:














\(\ds \kappa\)

\(=\)







\(\ds \dfrac {\d \psi} {\d s}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\d \psi} {\d y'} \dfrac {\d y'} {\d x} \dfrac {\d x} {\d s}\)





Chain Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \frac 1 {1 + y'^2} y' ' \frac 1 {\paren {1 + y'^2}^{1/2} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {y' '} {\paren {1 + y'^2}^{3/2} }\)









which is the Cartesian form of curvature as required.
$\blacksquare$


Whewell Form to Parametric Polar Form
Consider the curvature of a curve $C$ at a point $P$ expressed as a Whewell equation:

$\kappa = \dfrac {\d \psi} {\d s}$
where:

$\psi$ is the turning angle of $C$
$s$ is the arc length of $C$.
Let us consider $C$ expressed in cartesian form:














\(\ds x\)

\(=\)







\(\ds r \cos \theta\)




















\(\ds y\)

\(=\)







\(\ds r \sin \theta\)









Then:














\(\ds \dfrac {\d x} {\d t}\)

\(=\)







\(\ds r' \cos \theta - r \theta' \sin \theta\)





Chain Rule for Derivatives, Derivative of Cosine Function














\(\ds \dfrac {\d y} {\d t}\)

\(=\)







\(\ds r' \sin \theta + r \theta' \cos \theta\)





Chain Rule for Derivatives, Derivative of Sine Function




In Whewell form:














\(\ds \tan \psi\)

\(=\)







\(\ds \dfrac {y'} {x'}\)




















\(\ds s^2\)

\(=\)







\(\ds x'^2 + y'^2\)




















\(\ds \)

\(=\)







\(\ds r^2 \theta'^2 + r'2\)














\(\ds \leadsto \ \ \)





\(\ds \map \kappa t\)

\(=\)







\(\ds \dfrac {\map \arctan {\dfrac {y'} {x'} }' } {s'}\)









Let:














\(\ds g\)

\(=\)







\(\ds \dfrac {y'} {x'}\)




















\(\ds \)

\(=\)







\(\ds \tan \psi\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac \d {\d \psi}\)

\(=\)







\(\ds \dfrac {\d g} {\d \psi}\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac {\d \psi} {\d g}\)

\(=\)







\(\ds \dfrac 1 {1 + g^2}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {x'^2} {x'^2 + y'^2}\)










We have:

$\map \kappa t = \dfrac {\d \psi} {\d g} \dfrac {\d g} {\d t} \dfrac {\d t} {\d s}$

Then:














\(\ds \dfrac {\d t} {\d s}\)

\(=\)







\(\ds \dfrac 1 {\paren {x'^2 + y'^2}^{1/2} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {\paren {r^2 \theta'^2 + r'2}^{1/2} }\)
























\(\ds \dfrac {\d g} {\d t}\)

\(=\)







\(\ds \map {\dfrac \d {\d t} } {\dfrac {y'} {x'} }\)




















\(\ds \)

\(=\)







\(\ds \map {\dfrac \d {\d t} } {\dfrac {r' \sin \theta + r \theta' \cos \theta} {r' \cos \theta - r \theta' \sin \theta} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {x' y' ' - y' x' '} {\paren {x'}^2}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {2 r'^2 \theta' + r r' \theta' ' - r r' ' \theta' + r^2 \theta'^3} {\paren {x'}^2}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {r' \paren {r \theta'}' - r r' ' \theta' + \paren {r'^2 + \paren {r \theta'}^2} \theta'} {\paren {x'}^2}\)














\(\ds \leadsto \ \ \)





\(\ds \map \kappa t\)

\(=\)







\(\ds \dfrac {x'^2} {s'^2} \cdot \dfrac {2 r'^2 \theta' + r r' \theta' ' - r r' ' \theta' + r^2 \theta'^3} {\paren {x'}^2} \cdot \dfrac 1 {\paren {r'^2 + \paren {r \theta'}^2}^{1/2} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {2 r'^2 \theta' + r r' ' \theta' + r r' \theta' ' + r^2 \theta'^3} {\paren {r'^2 + \paren {r \theta'}^2}^{1/2} }\)









$\blacksquare$



This needs considerable tedious hard slog to complete it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.




