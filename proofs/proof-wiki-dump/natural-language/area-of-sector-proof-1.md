# 

Source: https://proofwiki.org/wiki/Area_of_Sector/Proof_1

Theorem
Let $\CC = ABC$ be a circle whose center is $A$ and with radii $AB$ and $AC$.
Let $BAC$ be the sector of $\CC$ whose angle between $AB$ and $AC$ is $\theta$.



Then the area $\AA$ of sector $BAC$ is given by:

$\AA = \dfrac {r^2 \theta} 2$
where:

$r = AB$ is the length of the radius of the circle
$\theta$ is measured in radians.


Proof
Let $\CC$ be a circle of radius $r$ whose center $A$ is at the origin and with radii $AB$ and $AC$.
Let $B$ and $C$ be arbitrary points on the circumference of $\CC$.
Let $C$ be positioned at $\tuple {0, r}$ so that $AC$ coincides with the $y$-axis.
Let $BAC$ be the sector of $\CC$ whose angle between $AB$ and $AC$ is $\theta$.




We have that $\CC$ is centered at the origin.
From Equation of Circle center Origin, the equation of $\CC$ is given by:

$r^2 = x^2 + y^2$

Let $B$ have co-ordinates:

$\tuple {x_0, y_0} = \tuple {x_0, \sqrt {r^2 - {x_0}^2} }$
Triangle $\triangle ADB$ is a right triangle whose leg $DB$ is opposite $\theta$, and whose hypotenuse is $AB$.
Hence:














\(\ds \sin \theta\)

\(=\)







\(\ds \frac {\size {BD} } {\size {AB} }\)





Definition of Sine of Angle














\(\ds \)

\(=\)







\(\ds \frac {x_0} r\)





Definition of $x_0$ and $r$








\(\ds \leadsto \ \ \)





\(\ds \map \arcsin {\sin \theta}\)

\(=\)







\(\ds \map \arcsin {\frac {x_0} r}\)





taking $\arcsin$ of both sides




\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \theta\)

\(=\)







\(\ds \map \arcsin {\frac {x_0} r}\)





Definition of Real Arcsine




Consider the line $AB$, which by definition passes through $A = \tuple {0, 0}$ and $B = \tuple {x_0, \sqrt {r^2 - {x_0}^2} }$.

Let:

$\Delta y$ be the change in $y$ between $A$ and $B$
$\Delta x$ be the change in $x$
$m$ be the slope of $AB$.













\(\ds \Delta y\)

\(=\)







\(\ds \sqrt {r^2 - {x_0}^2} - 0\)





Difference between $y$ values of $A$ and $B$














\(\ds \)

\(=\)







\(\ds \sqrt {r^2 - {x_0}^2}\)




















\(\ds \Delta x\)

\(=\)







\(\ds x_0 - 0\)





Difference between $x$ values of $A$ and $B$














\(\ds \)

\(=\)







\(\ds x_0\)














\(\ds \leadsto \ \ \)





\(\ds m\)

\(=\)







\(\ds \frac {\Delta y} {\Delta x}\)





Definition of Slope of Straight Line














\(\ds \)

\(=\)







\(\ds \frac {\sqrt {r^2 - {x_0}^2} } {x_0}\)










\(\text {(2)}: \quad\)









\(\ds y\)

\(=\)







\(\ds \frac {\sqrt {r^2 - {x_0}^2} } {x_0} x\)





Equation of Straight Line in Plane in Slope-Intercept Form: $y$ intercept is $0$




Let $K$ be the region between $\CC$, $AC$ and $AB$, from $0$ to $x_0$, orange in the diagram above.
This is the sector of $\CC$ whose area we are to find.

Let $\AA$ be the area of $K$.
Then:














\(\ds \AA\)

\(=\)







\(\ds \int_0^{x_0} \paren {\sqrt {r^2 - x^2} - \frac {\sqrt {r^2 - {x_0}^2} } {x_0} x} \rd x\)





integrating between two curves to find area














\(\ds \)

\(=\)







\(\ds \int_0^{x_0} \sqrt {r^2 - x^2} \rd x - \frac {\sqrt {r^2 - {x_0}^2} } {x_0} \int_0^{x_0} x \rd x\)





Linear Combination of Definite Integrals














\(\ds \)

\(=\)







\(\ds \int_0^{x_0} \sqrt {r^2 - x^2} \rd x - \frac {\sqrt {r^2 - {x_0}^2} } {x_0} \sqbrk {\frac {x^2} 2}_0^{x_0}\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \sqbrk {\frac {x \sqrt {r^2 - x^2} } 2 + \frac {r^2} 2 \arcsin \frac x r}_0^{x_0} - \frac {\sqrt {r^2 - {x_0}^2} } {x_0} \sqbrk {\frac {x^2} 2}_0^{x_0}\)





Primitive of $\sqrt {a^2 - x^2}$














\(\ds \)

\(=\)







\(\ds \frac {x_0 \sqrt {r^2 - {x_0}^2} } 2 + \frac {r^2} 2 \arcsin \frac {x_0} r - \frac {\sqrt {r^2 - {x_0}^2} } {x_0} \frac { {x_0}^2} 2\)





evaluating over range $\closedint 0 {x_0}$














\(\ds \)

\(=\)







\(\ds \frac {x_0 \sqrt {r^2 - {x_0}^2} } 2 + \frac {r^2} 2 \arcsin \frac {x_0} r - \frac {x_0 \sqrt {r^2 - {x_0}^2} } 2\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac {r^2} 2 \arcsin \frac {x_0} r\)





cancelling














\(\ds \)

\(=\)







\(\ds \frac {r^2 \theta} 2\)





from $(1)$



$\blacksquare$





