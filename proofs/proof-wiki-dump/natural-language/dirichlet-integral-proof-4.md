# 

Source: https://proofwiki.org/wiki/Dirichlet_Integral/Proof_4

Theorem
$\ds \int_0^\infty \frac {\sin x} x \rd x = \frac \pi 2$


Proof
From Integral to Infinity of Function over Argument:

$\ds \int_0^\infty {\dfrac {\map f x} x} = \int_0^{\to \infty} \map F u \rd u$
for a real function $f$ and its Laplace transform $\laptrans f = F$, provided they exist.
Let $\map f x := \sin x$.
Then from Laplace Transform of Sine:

$\laptrans {\map f x} = \dfrac 1 {s^2 + 1}$

Hence:














\(\ds \int_0^\infty \frac {\sin x} x \rd x\)

\(=\)







\(\ds \int_0^{\to \infty} \dfrac {\d u} {u^2 + 1}\)




















\(\ds \)

\(=\)







\(\ds \bigintlimits {\arctan u} 0 \infty\)





Primitive of $\dfrac 1 {x^2 + a^2}$














\(\ds \)

\(=\)







\(\ds \dfrac \pi 2\)









$\blacksquare$


Sources
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Solved Problems: Division by $t$: $22 \ \text{(b)}$




