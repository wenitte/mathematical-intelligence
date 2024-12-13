# 

Source: https://proofwiki.org/wiki/Partial_Differential_Equation_of_Planes_in_3-Space



Theorem
The set of planes in real Cartesian $3$-dimensional space can be described by the system of partial differential equations:














\(\ds \dfrac {\partial^2 z} {\partial x^2}\)

\(=\)







\(\ds 0\)




















\(\ds \dfrac {\partial^2 z} {\partial x \partial y}\)

\(=\)







\(\ds 0\)




















\(\ds \dfrac {\partial^2 z} {\partial y^2}\)

\(=\)







\(\ds 0\)











Proof
From Equation of Plane, we have that the equation defining a general plane $P$ is:

$\alpha_1 x + \alpha_2 y + \alpha_3 z = \gamma$
which can be written as:

$z = a x + b y + c$
by setting:














\(\ds a\)

\(=\)







\(\ds \dfrac {-\alpha_1} {\alpha_3}\)




















\(\ds b\)

\(=\)







\(\ds \dfrac {-\alpha_2} {\alpha_3}\)




















\(\ds c\)

\(=\)







\(\ds \dfrac {-\gamma} {\alpha_3}\)










We use the technique of Elimination of Constants by Partial Differentiation.
We see we have:

$1$ dependent variable, that is: $z$
$2$ independent variables, that is: $x$ and $y$
$3$ constants, that is: $a$, $b$ and $c$.
Taking the partial first derivatives with respect to $x$ and $y$, we get:














\(\ds \dfrac {\partial z} {\partial x}\)

\(=\)







\(\ds a\)




















\(\ds \dfrac {\partial z} {\partial y}\)

\(=\)







\(\ds b\)










$2$ equations are insufficient to dispose of $3$ constants, so the process continues by taking the partial second derivatives with respect to $x$ and $y$:














\(\ds \dfrac {\partial^2 z} {\partial x^2}\)

\(=\)







\(\ds 0\)




















\(\ds \dfrac {\partial^2 z} {\partial x \partial y}\)

\(=\)







\(\ds 0\)




















\(\ds \dfrac {\partial^2 z} {\partial y^2}\)

\(=\)







\(\ds 0\)









and the system of partial differential equations has been established.
$\blacksquare$


Also defined as
Some older sources suggest that it is "customary" to assign a standard system of labels to these partial differential equations:














\(\ds p\)

\(:=\)







\(\ds \dfrac {\partial z} {\partial x}\)




















\(\ds q\)

\(:=\)







\(\ds \dfrac {\partial z} {\partial y}\)




















\(\ds r\)

\(:=\)







\(\ds \dfrac {\partial^2 z} {\partial x^2}\)




















\(\ds s\)

\(:=\)







\(\ds \dfrac {\partial^2 z} {\partial x \partial y}\)




















\(\ds t\)

\(:=\)







\(\ds \dfrac {\partial^2 z} {\partial y^2}\)









but this is a technique which is rarely emphasised in more modern works.


Sources
1926: E.L. Ince: Ordinary Differential Equations ... (previous) ... (next): Chapter $\text I$: Introductory: $\S 1.211$ The Partial Differential Equations of All Planes and All Spheres




