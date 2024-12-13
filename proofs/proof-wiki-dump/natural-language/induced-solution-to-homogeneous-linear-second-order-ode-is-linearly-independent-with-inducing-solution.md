# 

Source: https://proofwiki.org/wiki/Induced_Solution_to_Homogeneous_Linear_Second_Order_ODE_is_Linearly_Independent_with_Inducing_Solution

Theorem
Let $\map {y_1} x$ be a particular solution to the homogeneous linear second order ODE:

$(1): \quad \dfrac {\d^2 y} {\d x^2} + \map P x \dfrac {\d y} {\d x} + \map Q x y = 0$
such that $y_1$ is not the trivial solution.
Let $\map {y_2} x$ be the real function defined as:

$\map {y_2} x = \map v x \map {y_1} x$
where:

$\ds v = \int \dfrac 1 { {y_1}^2} e^{-\int P \rd x} \rd x$

Then $y_2$ and $y_1$ are linearly independent.


Proof
This will be demonstrated by calculating the Wronskian of $y_1$ and $y_2$ and demonstrating that it is non-zero everywhere.
First we take the derivative of $v$ with respect to $x$:

$v' = \dfrac 1 { {y_1}^2} e^{- \int P \rd x}$













\(\ds \map W {y_1, y_2}\)

\(=\)







\(\ds y_1 {y_2}' - y_2 {y_1}'\)





Definition of Wronskian














\(\ds \)

\(=\)







\(\ds y_1 \paren {v y_1}' - v y_1 {y_1}'\)





Definition of $y_2$














\(\ds \)

\(=\)







\(\ds y_1 \paren {v' y_1 + v {y_1}'} - v y_1 {y_1}'\)





Product Rule for Derivatives














\(\ds \)

\(=\)







\(\ds {y_1}^2 v'\)





simplifying














\(\ds \)

\(=\)







\(\ds {y_1}^2 \dfrac 1 { {y_1}^2} e^{-\int P \rd x}\)





substituting for $v'$














\(\ds \)

\(=\)







\(\ds e^{-\int P \rd x}\)





simplifying



As $\ds -\int P \rd x$ is a real function, $e^{-\int P \rd x}$ is non-zero wherever it is defined.
Hence from Zero Wronskian of Solutions of Homogeneous Linear Second Order ODE iff Linearly Dependent, $y_1$ and $y_2$ are linearly independent.
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 3.16$: Problem $1$




