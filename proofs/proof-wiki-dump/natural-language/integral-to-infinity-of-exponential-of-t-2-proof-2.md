# 

Source: https://proofwiki.org/wiki/Integral_to_Infinity_of_Exponential_of_-t%5E2/Proof_2

Theorem
$\ds \int_0^\infty \map \exp {-t^2} \rd t = \dfrac {\sqrt \pi} 2$


Proof
Let $\lambda$ be a non-negative real number. 
Then, we have: 

$\ds \size {\frac {e^{-\lambda^2 \paren {1 + x^2} } } {1 + x^2} } \le \frac 1 {1 + x^2}$
for each $x \in \R$.
Note that from Definite Integral to Infinity of $\dfrac 1 {x^2 + a^2}$:

$\ds \int_0^\infty \frac 1 {x^2 + 1} \rd x = \frac \pi 2$
So by the Comparison Test for Improper Integral:

$\ds \int_0^\infty \frac {e^{-\lambda^2 \paren {1 + x^2} } } {1 + x^2} \rd x$ converges.
We can therefore define a real function $I : \hointr 0 \infty \to \R$ by: 

$\ds \map I \lambda = \int_0^\infty \frac {e^{-\lambda^2 \paren {1 + x^2} } } {1 + x^2} \rd x$
for each $\lambda \in \hointr 0 \infty$.

We then have from Definite Integral of Partial Derivative, for $\lambda > 0$:














\(\ds \map {I'} \lambda\)

\(=\)







\(\ds \frac \d {\d \lambda} \paren {\int_0^\infty \frac {e^{-\lambda^2 \paren {1 + x^2} } } {1 + x^2} \rd x}\)




















\(\ds \)

\(=\)







\(\ds \int_0^\infty \frac \partial {\partial \lambda} \frac {e^{-\lambda^2 \paren {1 + x^2} } } {1 + x^2} \rd x\)




















\(\ds \)

\(=\)







\(\ds -2 \lambda \int_0^\infty e^{-\lambda^2 \paren {1 + x^2 } } \rd x\)





Derivative of Exponential Function














\(\ds \)

\(=\)







\(\ds -2 \lambda e^{-\lambda^2} \int_0^\infty e^{-\paren {\lambda x}^2} \rd x\)




















\(\ds \)

\(=\)







\(\ds -2 e^{-\lambda^2} \int_0^\infty e^{-t^2} \rd t\)





substituting $t \mapsto \lambda x$



We have, using Definite Integral to Infinity of $\dfrac 1 {x^2 + a^2}$ again: 

$\ds \map I 0 = \int_0^\infty \frac 1 {1 + x^2} \rd x = \frac \pi 2$
We also have, for $\lambda > 0$:














\(\ds 0\)

\(\le\)







\(\ds \int_0^\infty \frac {e^{-\lambda^2 \paren {1 + x^2} } } {1 + x^2} \rd x\)




















\(\ds \)

\(\le\)







\(\ds \int_0^\infty e^{-\lambda^2 \paren {1 + x^2} } \rd x\)




















\(\ds \)

\(\le\)







\(\ds \int_0^\infty e^{-\lambda x} \rd x\)





since $x \le 1 + x^2$














\(\ds \)

\(=\)







\(\ds \frac 1 \lambda\)





Laplace Transform of Real Power



so:

$\ds \lim_{\lambda \to \infty} \int_0^\infty \frac {e^{-\lambda^2 \paren {1 + x^2} } } {1 + x^2} \rd x = 0$

Now we have: 














\(\ds \int_0^\infty \map {I'} \lambda \rd \lambda\)

\(=\)







\(\ds \lim_{R \to \infty} \int_0^R \map {I'} \lambda \rd \lambda\)




















\(\ds \)

\(=\)







\(\ds \lim_{R \to \infty} \paren {\map I R - \map I 0}\)




















\(\ds \)

\(=\)







\(\ds -\frac \pi 2\)









On the other hand: 














\(\ds \int_0^\infty \map {I'} \lambda \rd \lambda\)

\(=\)







\(\ds -2 \lim_{R \to \infty} \int_0^R \map {I'} \lambda \rd \lambda\)




















\(\ds \)

\(=\)







\(\ds -2 \int_0^\infty e^{-t^2} \rd t \lim_{R \to \infty} \int_0^R e^{-\lambda^2} \rd \lambda\)




















\(\ds \)

\(=\)







\(\ds -2 \paren {\int_0^\infty e^{-t^2} \rd t}^2\)





Definition of Improper Integral on Closed Interval Unbounded Above



So:

$\ds \paren {\int_0^\infty e^{-t^2} \rd t}^2 = \frac \pi 4$
Since:

$\ds \int_0^\infty e^{-t^2} \rd t \ge 0$
we have: 

$\ds \int_0^\infty e^{-t^2} \rd t = \frac {\sqrt \pi} 2$
$\blacksquare$





