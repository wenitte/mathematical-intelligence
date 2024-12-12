# 

Source: https://proofwiki.org/wiki/Descartes%27s_Solution_to_Quartic_Equation



Theorem
Let $P$ be the quartic equation:

$a x^4 + b x^3 + c x^2 + d x + e = 0$
such that $a \ne 0$.

Then $P$ has solutions:


Work In ProgressIn particular: Work to be done to complete thisYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by completing it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{WIP}} from the code.


Proof
First we render the quartic into monic form:

$x^4 + \dfrac b a x^3 + \dfrac c a x^2 + \dfrac d a x + \dfrac e a = 0$
Using a Tschirnhaus transformation, $x = y - \dfrac b {4 a}$, we convert $P$ into the reduced quartic:

$y^4 + p y^2 + q y + r = 0$
This is set identically equal to:

$\paren {y^2 + \lambda y + m} \paren {y^2 - \lambda y + n}$
Equating coefficients and eliminating $m$ and $n$ we obtain the following cubic in $\lambda^2$:

$\lambda^6 + 2 p \lambda^4 + \paren {p^2 - 4 r} \lambda^2 - q^2 = 0$
which can be solved using Cardano's Method, for example.
Hence by solving the two quadratic equations:














\(\ds y^2 + \lambda y + m\)

\(=\)







\(\ds 0\)




















\(\ds y^2 - \lambda y + n\)

\(=\)







\(\ds 0\)









the solution to the reduced quartic is found.
$\blacksquare$


Also see
Ferrari's Method


Source of Name
This entry was named for René Descartes.


Historical Note
René Descartes came up with his solution to the quartic equation in $1637$.


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): quartic (biquadratic)
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): quartic (biquadratic)




