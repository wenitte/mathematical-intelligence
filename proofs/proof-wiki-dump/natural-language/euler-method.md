# 

Source: https://proofwiki.org/wiki/Euler_Method



Proof Technique
Consider the first order ODE:

$(1): \quad y' = \map f {x, y}$ subject to the initial condition $\map y {x_0} = y_0$
where $\map f {x, y}$ is a continuous real function.

Let $\map y x$ be the particular solution of $(1)$.
For all $n \in \N_{>0}$, we define:

$x_n = x_{n - 1} + h$
where $h \in \R_{>0}$.

Then for all $n \in \N_{>0}$ such that $x_n$ is in the domain of $y$:

$y_{n + 1} = y_n + h \map f {x_n, y_n}$
is an approximation to $\map y {x_{n + 1} }$.


Proof
Let $(1)$ be integrated with respect to $x$ from $x_0$ to $x_1$.




\(\text {(2)}: \quad\)









\(\ds \map y {x_1} - \map y {x_0}\)

\(=\)







\(\ds \int_{x_0}^{x_1} \map f {x, y} \rd x\)














\(\ds \leadsto \ \ \)





\(\ds \map y {x_1}\)

\(=\)







\(\ds y_0 + \int_{x_0}^{x_1} \map f {x, y} \rd x\)










Assuming that the integrand in $(2)$ varies little over the interval $\closedint {x_0} {x_1}$:






\(\ds \leadsto \ \ \)





\(\ds \map y {x_1}\)

\(\approx\)







\(\ds y_0 + \map f {x_0, y_0} \paren {x_1 - x_0}\)




















\(\ds \)

\(=\)







\(\ds y_0 + h \, \map f {x_0, y_0}\)









Because $f$ is continuous, the assumption holds.
By making $h$ small, the difference:

$y_0 + h \, \map f {x_0, y_0} - \map f {x_1, y_1}$
can be made arbitrarily small.

$y_{n + 1}$ can be defined recursively:














\(\ds \map y {x_{n + 1} } - \map y {x_n}\)

\(=\)







\(\ds \int_{x_n}^{x_{n + 1} } \map f {x, y} \rd x\)














\(\ds \leadsto \ \ \)





\(\ds \map y {x_{n + 1} }\)

\(=\)







\(\ds \map y {x_n} + \int_{x_n}^{x_{n + 1} } \map f {x, y} \rd x\)




















\(\ds \)

\(\approx\)







\(\ds \map y {x_n} + \map f {x_n, y_n} \paren {x_{n + 1} - x_n}\)













The errors accumulate; with increasing $n$ the values of $y_{n + 1}$ are based on increasingly inaccurate values of $y_n$.
These can be reduced by making $h$ smaller, so the inaccuracies can be reduced by increasing the computation needed.
$\blacksquare$


Also known as
Some sources give the Euler Method in the possessive form, as Euler's Method.


Examples
Arbitrary Example
Consider the differential equation:

$y' = \paren {1 - x} y + \cos x$
with the initial condition:

$\map y 0 = 1$

Then the Euler Method generates:

$y_1 = 1 + 2 h$
as an approximatiion to $\map y h$.


Also see
Improved Euler Method


Source of Name
This entry was named for Leonhard Paul Euler.


Sources
1962: J.C. Burkill: The Theory of Ordinary Differential Equations (2nd ed.) ... (previous) ... (next): Chapter $\text I$: Existence of Solutions: $2$. Simple ideas about solutions
1972: George F. Simmons: Differential Equations ... (previous) ... (next): Miscellaneous Problems for Chapter $2$: Appendix $\text{A}$. Numerical Methods
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Euler's method
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Euler's method
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Euler's function




