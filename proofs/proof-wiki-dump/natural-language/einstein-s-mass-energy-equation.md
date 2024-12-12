# 

Source: https://proofwiki.org/wiki/Einstein%27s_Mass-Energy_Equation



Theorem
The energy imparted to a body to cause that body to move causes the body to increase in mass by a value $M$ as given by the equation:

$E = M c^2$
where $c$ is the speed of light.


Proof
From Einstein's Law of Motion, we have:

$\mathbf F = \dfrac {m_0 \mathbf a} {\paren {1 - \dfrac {v^2} {c^2} }^{\tfrac 3 2} }$
where:

$\mathbf F$ is the force on the body
$\mathbf a$ is the acceleration induced on the body
$v$ is the magnitude of the velocity of the body
$c$ is the speed of light
$m_0$ is the rest mass of the body.

Without loss of generality, assume that the body is starting from rest at the origin of a cartesian plane.
Assume the force $\mathbf F$ on the body is in the positive direction along the $x$-axis.
To simplify the work, we consider the acceleration as a scalar quantity and write it $a$.
Thus, from the Chain Rule for Derivatives:

$a = \dfrac {\d v} {\d t} = \dfrac {\d v} {\d x} \dfrac {\d x} {\d t} = v \dfrac {\d v} {\d x}$
Then from the definition of energy:

$\ds E = \int_0^x F \rd x$
which leads us to:














\(\ds E\)

\(=\)







\(\ds m_0 \int_0^x \frac a {\paren {1 - v^2 / c^2}^{\tfrac 3 2} } \rd x\)




















\(\ds \)

\(=\)







\(\ds m_0 \int_0^v \frac v {\paren {1 - v^2 / c^2}^{\tfrac 3 2} } \rd v\)





substituting $v \rd v = a \rd x$ from above














\(\ds \)

\(=\)







\(\ds m_0 \int_0^v \frac v {\paren {1 - v^2 / c^2}^{\tfrac 3 2} } \rd v \times \paren {-\frac {c^2} 2} \times \paren {-\frac 2 {c^2} }\)





multiplying top and bottom by $-\dfrac {c^2} 2$














\(\ds \)

\(=\)







\(\ds m_0 \paren {- \frac {c^2} 2} \int_0^v \paren {1 - \frac {v^2} {c^2} }^{-\tfrac 3 2} \paren {- \frac {2 v \rd v} {c^2} }\)




















\(\ds \)

\(=\)







\(\ds \intlimits {m_0 c^2 \paren {1 - \frac {v^2} {c^2} }^{- \tfrac 1 2} } 0 v\)




















\(\ds \)

\(=\)







\(\ds m_0 c^2 \paren {\frac 1 {\sqrt {1 - \frac {v^2} {c^2} } } - 1}\)




















\(\ds \)

\(=\)







\(\ds c^2 \paren {\frac {m_0} {\sqrt {1 - \frac {v^2} {c^2} } } - m_0}\)




















\(\ds \)

\(=\)







\(\ds c^2 \paren {m - m_0}\)





Einstein's Mass-Velocity Equation














\(\ds \)

\(=\)







\(\ds M c^2\)









$\blacksquare$


Also known as
Einstein's Mass-Energy Equation is usually known as Einstein's Equation, but there are a number of such equations that Einstein deduced.
However, this is the most famous one, and has caught the imagination of the general public.
Hence, if you refer to Einstein's Equation at a party, for example, everyone will know which one you mean, and it's this one.
Some sources refer to it boringly as the Mass-Energy Equation.


Also see
Einstein's Mass-Velocity Equation


Source of Name
This entry was named for Albert Einstein.


Historical Note
Einstein's Mass-Energy Equation was proposed by Albert Einstein as part of the special theory of relativity.
It has since been confirmed by experiment.


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): Miscellaneous Problems for Chapter $2$: Problem $32 \ \text{(b)}$
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {B}.7$: A Simple Approach to $E = M c^2$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): conservation of energy
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): mass-energy equation (Einstein's equation)
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): relativistic mass
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): conservation of energy
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): mass-energy equation (Einstein's equation)
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): relativistic mass




