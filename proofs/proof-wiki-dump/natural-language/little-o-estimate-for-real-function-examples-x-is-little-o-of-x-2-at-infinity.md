# 

Source: https://proofwiki.org/wiki/Little-O_Estimate_for_Real_Function/Examples/x_is_Little-O_of_x%5E2_at_Infinity

Example of Little-$\oo$ Estimate for Real Function
Let $f: \R \to \R$ be the real function defined as:

$\forall x \in \R: \map f x = x$
Then:

$\map f x = \map \oo {x^2}$
as $x \to \infty$.


Proof
Let us consider the real function $g: \R \to \R$ defined as:

$\forall x \in \R: \map g x = x^2$
Then we have that:










\(\ds \forall x \in \R_{\ne 0}: \, \)



\(\ds \dfrac {\map f x} {\map g x}\)

\(=\)







\(\ds \dfrac x {x^2}\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 x\)














\(\ds \leadsto \ \ \)





\(\ds \lim_{x \mathop \to \infty} \dfrac {\map f x} {\map g x}\)

\(=\)







\(\ds \lim_{x \mathop \to \infty} \dfrac 1 x\)




















\(\ds \)

\(=\)







\(\ds 0\)









Hence the result.
$\blacksquare$


Sources
1979: G.H. Hardy and E.M. Wright: An Introduction to the Theory of Numbers (5th ed.) ... (previous) ... (next): $\text I$: The Series of Primes: $1.6$ Some notations




