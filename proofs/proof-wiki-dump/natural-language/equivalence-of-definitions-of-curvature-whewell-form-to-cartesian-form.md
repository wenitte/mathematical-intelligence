# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Curvature/Whewell_Form_to_Cartesian_Form



Theorem
The following definitions of the concept of Curvature are equivalent:

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





Proof
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





