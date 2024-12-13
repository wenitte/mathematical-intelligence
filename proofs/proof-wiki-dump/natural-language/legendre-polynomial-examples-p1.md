# 

Source: https://proofwiki.org/wiki/Legendre_Polynomial/Examples/P1

Example of Legendre Polynomial
The $1$st Legendre polynomial is:

$\map {P_1} x = x$


Proof
From Generating Function for Legendre Polynomials, $\map {P_1} x$ is the coefficient of the term in $t^1$ of the generating function:

$\map G t = \dfrac 1 {\sqrt {1 - 2 x t + t^2} }$

Thus:














\(\ds \map G t\)

\(=\)







\(\ds \dfrac 1 {\sqrt {1 - 2 x t + t^2} }\)




















\(\ds \)

\(=\)







\(\ds \paren {1 - 2 x t + t^2}^{-1/2}\)




















\(\ds \)

\(=\)







\(\ds 1 + \paren {-\dfrac 1 2 } \paren {-2 x t + t^2} + \paren {\dfrac 1 {2!} } \paren {-\dfrac 1 2} \paren {-\dfrac 3 2} \paren {-2 x t + t^2}^2 + \cdots\)





General Binomial Theorem














\(\ds \)

\(=\)







\(\ds 1 + \paren {x t^1 - 2 t^2} + \dfrac 3 8 \paren {4 x^2 t^2 - 4 x t^3 + t^4} + \cdots\)





Square of Sum and simplifying



Further terms generate terms in $t$ of higher powers.
Hence the term in $t^1$ is seen to be $x t$.
Hence, by definition of generating function:

$\map {P_1} x = x$
$\blacksquare$


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): generating function
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Legendre's differential equation
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): generating function
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Legendre's differential equation




