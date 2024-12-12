# 

Source: https://proofwiki.org/wiki/Derivative_of_Real_Area_Hyperbolic_Cotangent_of_x_over_a



Theorem
$\map {\dfrac \d {\d x} } {\map \arcoth {\dfrac x a} } = \dfrac {-a} {x^2 - a^2}$
where $x^2 > a^2$.


Corollary
$\map {\dfrac \d {\d x} } {\dfrac 1 {2 a} \map \ln {\dfrac {x + a} {x - a} } } = \dfrac 1 {a^2 - x^2}$
where $\size x > a$.


Proof
Let $x^2 > a^2$.
Then either $\dfrac x a < -1$ or $\dfrac x a > 1$ and so:














\(\ds \map {\dfrac \d {\d x} } {\map \arcoth {\dfrac x a} }\)

\(=\)







\(\ds \frac 1 a \frac 1 {1 - \paren {\frac x a}^2}\)





Derivative of $\arcoth$ and Derivative of Function of Constant Multiple














\(\ds \)

\(=\)







\(\ds \frac 1 a \frac 1 {\frac {a^2 - x^2} {a^2} }\)




















\(\ds \)

\(=\)







\(\ds -\frac 1 a \frac {a^2} {x^2 - a^2}\)




















\(\ds \)

\(=\)







\(\ds \frac {-a} {x^2 - a^2}\)










$\arcoth \dfrac x a$ is not defined when $x^2 \le a^2$.
$\blacksquare$


Also presented as
This result can also be (and usually is) reported as:

$\map {\dfrac {\d} {\d x} } {\map \arcoth {\dfrac x a} } = \dfrac a {a^2 - x^2}$
but this obscures the fact that $x^2 > a^2$ in order for it to be defined.
Some sources present it as:

$\map {\dfrac {\d} {\d x} } {\dfrac 1 a \map \arcoth {\dfrac x a} } = \dfrac 1 {a^2 - x^2}$


Also see
Derivative of $\arsinh \dfrac x a$
Derivative of $\arcosh \dfrac x a$
Derivative of $\artanh \dfrac x a$
Derivative of $\arsech \dfrac x a$
Derivative of $\arcsch \dfrac x a$


Sources
1944: R.P. Gillespie: Integration (2nd ed.) ... (previous) ... (next): Chapter $\text {II}$: Integration of Elementary Functions: $\S 7$. Standard Integrals: $16$.




