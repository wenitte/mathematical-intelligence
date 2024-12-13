# 

Source: https://proofwiki.org/wiki/Little-O_Estimate_for_Real_Function/Examples/Sine_Function_at_Infinity

Example of Little-$\oo$ Estimate for Real Function
Let $f: \R \to \R$ be the real function defined as:

$\forall x \in \R: \map f x = \sin x$
Then:

$\map f x = \map \oo x$
as $x \to \infty$.


Proof
Let us consider the real function $g: \R \to \R$ defined as:

$\forall x \in \R: \map g x = x$
Then we have that:










\(\ds \forall x \in \R_{> 0}: \, \)



\(\ds \dfrac {\map f x} {\map g x}\)

\(=\)







\(\ds \dfrac {\sin x} x\)




















\(\ds \)

\(\le\)







\(\ds \dfrac 1 x\)














\(\ds \leadsto \ \ \)





\(\ds \lim_{x \mathop \to \infty} \dfrac {\map f x} {\map g x}\)

\(=\)







\(\ds \lim_{x \mathop \to \infty} \dfrac {\sin x} x\)




















\(\ds \)

\(\le\)







\(\ds \lim_{x \mathop \to \infty} \dfrac 1 x\)




















\(\ds \)

\(=\)







\(\ds 0\)









Hence the result.
$\blacksquare$


Sources
1979: G.H. Hardy and E.M. Wright: An Introduction to the Theory of Numbers (5th ed.) ... (previous) ... (next): $\text I$: The Series of Primes: $1.6$ Some notations




