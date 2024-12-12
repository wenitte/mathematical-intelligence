# 

Source: https://proofwiki.org/wiki/Characteristic_of_Quadratic_Equation_that_Represents_Circle



Theorem
A quadratic equation in $2$ variables:

$a x^2 + b y^2 + 2 h x y + 2 g x + 2 f y + c = 0$
describes a circle embedded in the Cartesian plane if and only if:

$(1): \quad h = 0$
$(2): \quad a = b \ne 0$


Proof
Necessary Condition
Consider the equation of a circle:

$A \paren {x^2 + y^2} + B x + C y + D = 0$
which is the equation of a circle with radius $R$ and center $\tuple {a, b}$, where:

$R = \dfrac 1 {2 A} \sqrt {B^2 + C^2 - 4 A D}$
$\tuple {a, b} = \tuple {\dfrac {-B} {2 A}, \dfrac {-C} {2 A} }$
provided:

$A > 0$
$B^2 + C^2 \ge 4 A D$
Thus it is seen that the coefficient for $x^2$ is the same as that for $y^2$, and there is no $x y$ term.
As can be seen, this matches the form as described: $a = b$ and $h = 0$.
$\Box$


Sufficient Condition
Consider the general quadratic equation in $2$ variables:

$a x^2 + b y^2 + 2 h x y + 2 g x + 2 f y + c = 0$
Let us set $a = b$ and $h = 0$.
We obtain:

$a x^2 + a y^2 + 2 g x + 2 f y + c = 0$
Assuming $a \ne 0$, we get:














\(\ds a x^2 + a y^2 + 2 g x + 2 f y + c\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds x^2 + y^2 + 2 \frac g a x + 2 \frac f a y + \frac c a\)

\(=\)







\(\ds 0\)





dividing by $a$




\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \paren {x + \frac g a}^2 + \paren {y + \frac f a}^2\)

\(=\)







\(\ds -\frac c a + \frac {g^2} {a^2} + \frac {f^2} {a^2}\)





Completing the Square and rearranging














\(\ds \)

\(=\)







\(\ds \frac {g^2 + f^2 - a c} {a^2}\)





simplifying



It is seen that $(1)$ is Equation of Circle in Cartesian Plane, where:

the left hand side represents the distance from $\tuple {x, y}$ to the point $\tuple {-\dfrac g a, -\dfrac f a}$ which is its center
the right hand side represents the radius $\sqrt {\dfrac {g^2 + f^2 - a c} {a^2} }$.

If $a$, $g$, $f$ and $c$ are all real numbers, then the center is always a point in the cartesian plane.
The radius, however, is real only if $g^2 + f^2 > a c$.

If $g^2 + f^2 < a c$, then no real $x$ and $y$ can satisfy $(1)$, as $\paren {x + \dfrac g a}^2 + \paren {y + \dfrac f a}^2 + \dfrac {a c - g^2 + f^2} {a^2}$ is always strictly positive.
Hence the locus of $(1)$ is a virtual circle.

If $g^2 + f^2 = a c$, then $(1)$ degenerates to:

$\paren {x + \dfrac g a}^2 + \paren {y + \dfrac f a}^2 = 0$
which is satisfied for $\tuple {x, y} = \tuple {-\dfrac g a, -\dfrac f a}$ only.
Hence the radius is $0$ and the locus of $(1)$ is a point-circle.
$\Box$

If $a = 0$ then the general quadratic equation degenerates to:

$2 g x + 2 f y + c = 0$
which is the equation of a straight line.
$\blacksquare$


Sources
1933: D.M.Y. Sommerville: Analytical Conics (3rd ed.) ... (previous) ... (next): Chapter $\text {III}$. The Circle: $14$. To find the equation of the circle whose centre is $\tuple {\alpha, \beta}$ and radius $r$




