# 

Source: https://proofwiki.org/wiki/Derivative_of_Real_Area_Hyperbolic_Cosine_of_x_over_a



Theorem
$\dfrac {\map \d {\map \arcosh {\frac x a} } } {\d x} = \dfrac 1 {\sqrt {x^2 - a^2} }$
where $x > a$.


Corollary 1
$\map {\dfrac \d {\d x} } {\map \ln {x + \sqrt {x^2 - a^2} } } = \dfrac 1 {\sqrt {x^2 - a^2} }$
for $x > a$.


Corollary 2
$\map {\dfrac \d {\d x} } {\map \ln {x - \sqrt {x^2 - a^2} } } = -\dfrac 1 {\sqrt {x^2 - a^2} }$
for $x > a$.


Proof
Let $x > a$.
Then $\dfrac x a > 1$ and so:














\(\ds \frac {\map \d {\map {\cosh^{-1} } {\frac x a} } } {\d x}\)

\(=\)







\(\ds \frac 1 a \frac 1 {\sqrt {\paren {\frac x a}^2} - 1}\)





Derivative of $\arcosh$ and Derivative of Function of Constant Multiple














\(\ds \)

\(=\)







\(\ds \frac 1 a \frac 1 {\sqrt {\frac {x^2 - a^2} {a^2} } }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 a \frac a {\sqrt {x^2 - a^2} }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {\sqrt {x^2 - a^2} }\)










$\cosh^{-1} \dfrac x a$ is not defined when $x \le a$.
When $x = a$ we have that $\sqrt {x^2 - a^2} = 0$ and so $\dfrac 1 {\sqrt {x^2 - a^2} }$ is not defined.
Hence the restriction on the domain.
$\blacksquare$


Also see
Derivative of $\arsinh \dfrac x a$
Derivative of $\artanh \dfrac x a$
Derivative of $\arcoth \dfrac x a$
Derivative of $\arsech \dfrac x a$
Derivative of $\arcsch \dfrac x a$


Sources
1944: R.P. Gillespie: Integration (2nd ed.) ... (previous) ... (next): Chapter $\text {II}$: Integration of Elementary Functions: $\S 7$. Standard Integrals: $15$.




