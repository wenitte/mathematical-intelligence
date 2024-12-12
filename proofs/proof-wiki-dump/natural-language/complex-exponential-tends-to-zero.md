# 

Source: https://proofwiki.org/wiki/Complex_Exponential_Tends_to_Zero

Theorem
Let $\exp z$ be the complex exponential function.
Then:

$\ds \lim_{\map \Re z \mathop \to +\infty} e^{-z} = 0$
where $\map \Re z$ denotes the real part of $z$.


Proof
Let $z = x + iy$.
Let $\epsilon > 0$.
By the definition of limits at infinity, we need to show that there is some $M > 0$ such that:

$x > M \implies \size {e^{-z} - 0} < \epsilon$
But:














\(\ds \size {e^{-z} - 0}\)

\(=\)







\(\ds \size {e^{-z} }\)




















\(\ds \)

\(=\)







\(\ds \size {e^{-x} }\)





Modulus of Exponential is Modulus of Real Part














\(\ds \)

\(=\)







\(\ds \size {e^{-x} - 0}\)









so we need an $M$ such that:

$x > M \implies \size {e^{-x} - 0} < \epsilon$
This is the definition of the limits at infinity of the real exponential.
The result follows from Exponential Tends to Zero and Infinity.
$\blacksquare$





