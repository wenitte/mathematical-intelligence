# 

Source: https://proofwiki.org/wiki/Equation_of_Circle_in_Complex_Plane/Formulation_2

Theorem
Let $\C$ be the complex plane.
Let $C$ be a circle in $\C$.

Then $C$ may be written as:

$\alpha z \overline z + \beta z + \overline \beta \overline z + \gamma = 0$
where:

$\alpha \in \R_{\ne 0}$ is real and non-zero
$\gamma \in \R$ is real
$\beta \in \C$ is complex such that $\cmod \beta^2 > \alpha \gamma$.
The curve $C$ is a straight line if and only if $\alpha = 0$ and $\beta \ne 0$.


Proof 1













\(\ds \cmod {z - a}\)

\(=\)







\(\ds r\)





Equation of Circle in Complex Plane: Formulation 1








\(\ds \leadsto \ \ \)





\(\ds \cmod {z - a}^2\)

\(=\)







\(\ds r^2\)














\(\ds \leadsto \ \ \)





\(\ds \paren {z - a} \overline {\paren {z - a} }\)

\(=\)







\(\ds r^2\)





Modulus in Terms of Conjugate








\(\ds \leadsto \ \ \)





\(\ds \paren {z - a} {\paren {\overline z - \overline a} }\)

\(=\)







\(\ds r^2\)





Sum of Complex Conjugates








\(\ds \leadsto \ \ \)





\(\ds z \overline z - a z - \overline a \overline z + a \overline a\)

\(=\)







\(\ds r^2\)














\(\ds \leadsto \ \ \)





\(\ds \alpha z \overline z - \alpha a z - \alpha \overline a \overline z + \alpha a \overline a - r^2\)

\(=\)







\(\ds 0\)





where $\alpha \in \R_{>0}$ is arbitrary



By setting:

$\beta := -\alpha a$ and $\gamma = \alpha a \overline a - r^2$
we have:

$\alpha z \overline z + \beta z + \overline \beta \overline z + \gamma = 0$

We have that:














\(\ds r^2\)

\(>\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \alpha a \overline a - \gamma\)

\(>\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \paren {\alpha a} \paren {\alpha \overline a}\)

\(>\)







\(\ds \alpha \gamma\)














\(\ds \leadsto \ \ \)





\(\ds \beta \overline \beta\)

\(>\)







\(\ds \alpha \gamma\)














\(\ds \leadsto \ \ \)





\(\ds \cmod {\beta}^2\)

\(>\)







\(\ds \alpha \gamma\)





Modulus in Terms of Conjugate



$\Box$

If $\alpha = 0$ and $\beta \ne 0$ the equation devolves to:

$\beta z + \overline \beta \overline z + \gamma = 0$
which from Equation of Line in Complex Plane: Formulation 1 is the equation of a straight line.

The result follows.
$\blacksquare$


Proof 2
From Equation of Circle in Cartesian Plane: Formulation 2, the equation for a circle is:

$A \paren {x^2 + y^2} + B x + C y + D = 0$
provided that:

$B^2 + C^2 \ge 4 A D$
$A > 0$.
Thus:














\(\ds A \paren {x^2 + y^2} + B x + C y + D\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds A z \overline z + B x + C y + D\)

\(=\)







\(\ds 0\)





Product of Complex Number with Conjugate








\(\ds \leadsto \ \ \)





\(\ds A z \overline z + \frac B 2 \paren {z + \overline z} + C y + D\)

\(=\)







\(\ds 0\)





Sum of Complex Number with Conjugate








\(\ds \leadsto \ \ \)





\(\ds A z \overline z + \frac B 2 \paren {z + \overline z} + \frac C {2 i} \paren {z - \overline z} + D\)

\(=\)







\(\ds 0\)





Difference of Complex Number with Conjugate








\(\ds \leadsto \ \ \)





\(\ds A z \overline z + \paren {\frac B 2 + \frac C {2 i} } z + \paren {\frac B 2 - \frac C {2 i} } \overline z + D\)

\(=\)







\(\ds 0\)





gathering terms



By setting:

$\alpha := A$, $\beta := \dfrac B 2 + \dfrac C {2 i}$ and $\gamma := D$
we have:

$\alpha z \overline z + \beta z + \overline \beta \overline z + \gamma = 0$
As $A, B, C, D \in \R$ it follows that both $\alpha$ and $\gamma$ are real.
Then we have that $A > 0$ and so $\alpha > 0$.
Then note that:














\(\ds \paren {\frac B 2 + \frac C {2 i} } \paren {\frac B 2 - \frac C {2 i} }\)

\(=\)







\(\ds \paren {\frac B 2}^2 + \paren {\frac C 2}^2\)




















\(\ds \)

\(=\)







\(\ds \frac {B^2 + C^2} 4\)









Given that:

$B^2 + C^2 \ge 4 A D$
it follows that:

$\cmod \beta^2 > \alpha \gamma$
$\Box$

If $\alpha = 0$ and $\beta \ne 0$ the equation devolves to:

$\beta z + \overline \beta \overline z + \gamma = 0$
which from Equation of Line in Complex Plane: Formulation 1 is the equation of a straight line.

The result follows.
$\blacksquare$





