# 

Source: https://proofwiki.org/wiki/Partial_Differential_Equation_of_Spheres_in_3-Space

Theorem
The set of spheres in real Cartesian $3$-dimensional space can be described by the system of partial differential equations:

$\dfrac {1 + z_x^2} {z_{xx} } = \dfrac {z_x z_x} {z_{xy} } = \dfrac {1 + z_y^2} {z_{yy} }$
and if the radii of these spheres are expected to be real:

$z_{xx} z_{yy} > z_{xy}$


Proof
From Equation of Sphere, we have that the equation defining a general sphere $S$ is:

$\paren {x - a}^2 + \paren {y - b}^2 + \paren {z - c}^2 = R^2$
where $a$, $b$ and $c$ are arbitrary constants.

We use the technique of Elimination of Constants by Partial Differentiation.

Taking the partial first derivatives with respect to $x$ and $y$ and simplifying, we get:














\(\ds \paren {x - a} + \paren {z - c} \dfrac {\partial z} {\partial x}\)

\(=\)







\(\ds 0\)




















\(\ds \paren {y - b} + \paren {z - c} \dfrac {\partial z} {\partial y}\)

\(=\)







\(\ds b\)










$2$ equations are insufficient to dispose of $3$ constants, so the process continues by taking the partial second derivatives with respect to $x$ and $y$:














\(\ds 1 + \paren {\dfrac {\partial z} {\partial x} }^2 + \paren {z - c} \dfrac {\partial^2 z} {\partial x^2}\)

\(=\)







\(\ds 0\)




















\(\ds \dfrac {\partial z} {\partial x} \dfrac {\partial z} {\partial y} + \paren {z - c} \dfrac {\partial^2 z} {\partial x \partial y}\)

\(=\)







\(\ds 0\)




















\(\ds 1 + \paren {\dfrac {\partial z} {\partial y} }^2 + \paren {z - c} \dfrac {\partial^2 z} {\partial y^2}\)

\(=\)







\(\ds 0\)









Eliminating $z - c$:

$\dfrac {1 + z_x^2} {z_{xx} } = \dfrac {z_x z_x} {z_{xy} } = \dfrac {1 + z_y^2} {z_{yy} }$
This is our system of partial differential equations describing the set of spheres in real Cartesian $3$-dimensional space.
$\Box$

We now investigate the conditions under which the radii of these spheres are real.

Let $\lambda = \dfrac {1 + z_x^2} {z_{xx} } = \dfrac {z_x z_y} {z_{xy} } = \dfrac {1 + z_y^2} {z_{yy} }$.
Then:














\(\ds \lambda^2\)

\(=\)







\(\ds \dfrac {1 + z_x^2} {z_{xx} } \dfrac {1 + z_y^2} {z_{yy} }\)














\(\ds \leadsto \ \ \)





\(\ds \lambda^2 \paren {z_{xx} z_{yy} }\)

\(=\)







\(\ds 1 + z_x^2 + z_y^2 + z_x^2 z_y^2\)














\(\ds \leadsto \ \ \)





\(\ds \lambda^2 \paren {z_{xx} z_{yy} } - z_{xy} \dfrac {z_x z_y} {z_{xy} }\)

\(=\)







\(\ds 1 + z_x^2 + z_y^2\)














\(\ds \leadsto \ \ \)





\(\ds \lambda^2 \paren {z_{xx} z_{yy} - z_{xy} }\)

\(=\)







\(\ds 1 + z_x^2 + z_y^2\)




















\(\ds \)

\(>\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds z_{xx} z_{yy} - z_{xy}\)

\(>\)







\(\ds 0\)









and so:

$z_{xx} z_{yy} > z_{xy}$
$\blacksquare$


Sources
1926: E.L. Ince: Ordinary Differential Equations ... (previous) ... (next): Chapter $\text I$: Introductory: $\S 1.211$ The Partial Differential Equations of All Planes and All Spheres




