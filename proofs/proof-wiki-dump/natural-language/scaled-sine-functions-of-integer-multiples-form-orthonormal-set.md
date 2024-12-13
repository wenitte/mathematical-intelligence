# 

Source: https://proofwiki.org/wiki/Scaled_Sine_Functions_of_Integer_Multiples_form_Orthonormal_Set

Theorem
For all $n \in \Z_{>0}$, let $\map {\phi_n} x$ be the real function defined on the interval $\openint 0 \lambda$ as:

$\map {\phi_n} x = \sqrt {\dfrac 2 \lambda} \sin \dfrac {n \pi x} \lambda$
Let $S$ be the set:

$S = \set {\phi_n: n \in \Z_{>0} }$
Then $S$ is an orthonormal set.


Proof
Consider the definite integral:

$I_{m n} = \ds \int_0^\lambda \map {\phi_m} x \map {\phi_n} x \rd x$

From Sine Function is Odd, each of $\map {\phi_n} x$ is an odd function.
From Odd Function Times Odd Function is Even, $\map {\phi_m} x \map {\phi_n} x$ is even.
That is:

$\paren {\sqrt {\dfrac 2 \lambda} \sin \dfrac {m \pi x} \lambda} \paren {\sqrt {\dfrac 2 \lambda} \sin \dfrac {n \pi x} \lambda}$
is an even function.

Let $u = \dfrac {\pi x} \lambda$.

We have:














\(\ds \dfrac {\d u} {\d x}\)

\(=\)







\(\ds \dfrac \pi \lambda\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac {\d x} {\d u}\)

\(=\)







\(\ds \dfrac \lambda \pi\)
























\(\ds x\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds u\)

\(=\)







\(\ds \dfrac {\pi \times 0} \lambda\)




















\(\ds \)

\(=\)







\(\ds 0\)
























\(\ds x\)

\(=\)







\(\ds \lambda\)














\(\ds \leadsto \ \ \)





\(\ds u\)

\(=\)







\(\ds \dfrac {\pi \times \lambda} \lambda\)




















\(\ds \)

\(=\)







\(\ds \pi\)









So:














\(\ds I_{m n}\)

\(=\)







\(\ds \int_0^\lambda \map {\phi_m} x \map {\phi_n} x \rd x\)




















\(\ds \)

\(=\)







\(\ds \int_0^\lambda \paren {\sqrt {\dfrac 2 \lambda} \sin \frac {m \pi x} \lambda} \paren {\sqrt {\dfrac 2 \lambda} \sin \frac {n \pi x} \lambda} \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 2 \lambda \int_0^\lambda \sin \frac {m \pi x} \lambda \sin \frac {n \pi x} \lambda \rd x\)





Linear Combination of Definite Integrals














\(\ds \)

\(=\)







\(\ds \frac 2 \lambda \int_0^\pi \frac \lambda \pi \sin m u \sin n u \rd u\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \frac 2 \lambda \frac \lambda \pi \int_0^\pi \sin m u \sin n u \rd u\)





Linear Combination of Definite Integrals














\(\ds \)

\(=\)







\(\ds \frac 2 \pi \int_0^\pi \sin m u \sin n u \rd u\)




















\(\ds \)

\(=\)







\(\ds \frac 1 \pi \int_{-\pi}^\pi \sin m u \sin n u \rd u\)





Definite Integral of Even Function














\(\ds \)

\(=\)







\(\ds \frac 1 \pi \pi \delta_{m n}\)





Integral over $2 \pi$ of $\sin m u \sin n u$














\(\ds \)

\(=\)







\(\ds \delta_{m n}\)









Hence the result by definition of orthonormal set.
$\blacksquare$


Sources
1961: I.N. Sneddon: Fourier Series ... (previous) ... (next): Chapter One: $\S 8$. Orthonormal Sets of Functions




