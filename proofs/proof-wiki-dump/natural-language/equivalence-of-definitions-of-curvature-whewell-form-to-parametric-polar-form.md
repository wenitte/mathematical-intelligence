# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Curvature/Whewell_Form_to_Parametric_Polar_Form



Theorem
The following definitions of the concept of Curvature are equivalent:

Whewell Form
The curvature $\kappa$ of $C$ at a point $P$ can be expressed in the form of a Whewell equation as:

$\kappa = \dfrac {\d \psi} {\d s}$
where:

$\psi$ is the turning angle of $C$
$s$ is the arc length of $C$.
Parametric Polar Form
Let $C$ be embedded in a polar plane and defined by the parametric equations:

$\begin{cases} r = \map r t \\ \theta = \map \theta t \end{cases}$

The curvature $\kappa$ of $C$ at a point $P = \polar {r, \theta}$ is given by:

$\kappa = \dfrac {2 r'^2 \theta' + r r' ' \theta' + r r' \theta' ' + r^2 \theta'^3} {\paren {r'^2 + \paren {r \theta'}^2}^{1/2} }$
where:

$r' = \dfrac {\d r} {\d t}$ is the derivative of $r$ with respect to $t$ at $P$
$\theta' = \dfrac {\d \theta} {\d t}$ is the derivative of $\theta$ with respect to $t$ at $P$
$r' '$ and $\theta' '$ are the second derivatives of $r$ and $y$ with respect to $t$ at $P$.


Proof
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



This article needs proofreading.In particular: I found this on a scrap of paper in my notes which I am about to shred. Have no clue about its rigor or accuracy. Please feel free to give this whatever workover is needed.If you believe all issues are dealt with, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.




