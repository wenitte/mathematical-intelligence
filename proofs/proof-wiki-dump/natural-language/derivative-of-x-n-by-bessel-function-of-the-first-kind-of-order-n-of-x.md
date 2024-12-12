# 

Source: https://proofwiki.org/wiki/Derivative_of_x%5En_by_Bessel_Function_of_the_First_Kind_of_Order_n_of_x

Theorem
Let $\map {J_n} x$ denote the Bessel function of the first kind of order $n$.

Then:

$\map {\dfrac \d {\d x} } {x^n \map {J_n} x} = x^n \map {J_{n - 1} } x$


Proof













\(\ds \map {\frac \d {\d x} } {x^n \map {J_n} x}\)

\(=\)







\(\ds n x^{n - 1} \map {J_n} x + x^n \map {J_n'} x\)





Product Rule for Derivatives














\(\ds \)

\(=\)







\(\ds n x^{n - 1} \map {J_n} x - x^n \paren {\frac {\map {J_{n + 1} } x - \map {J_{n - 1} } x} 2}\)





Recurrence Formula for Bessel Function of the First Kind














\(\ds \)

\(=\)







\(\ds n x^{n - 1} \map {J_n} x - x^n \paren {\frac {\frac {2 n} x \map {J_n} x - 2 \map {J_{n - 1} } x} 2}\)





Recurrence Formula for Bessel Function of the First Kind














\(\ds \)

\(=\)







\(\ds n x^{n - 1} \map {J_n} x - x^n \paren {\frac n x \map {J_n} x - \map {J_{n - 1} } x}\)




















\(\ds \)

\(=\)







\(\ds n x^{n - 1} \map {J_n} x - n x^{n - 1} \map {J_n} x + x^n \map {J_{n - 1} } x\)




















\(\ds \)

\(=\)







\(\ds x^n \map {J_{n - 1} } x\)









$\blacksquare$


Sources
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Some Special Functions: $\text {II}$. Bessel functions: $3$




