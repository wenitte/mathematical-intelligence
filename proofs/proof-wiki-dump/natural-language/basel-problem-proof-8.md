# 

Source: https://proofwiki.org/wiki/Basel_Problem/Proof_8

Theorem
$\ds \map \zeta 2 = \sum_{n \mathop = 1}^\infty {\frac 1 {n^2} } = \frac {\pi^2} 6$
where $\zeta$ denotes the Riemann zeta function.


Proof
By Fourier Series of Identity Function over $-\pi$ to $\pi$, for $x \in \openint {-\pi} \pi$:

$\ds x \sim 2 \sum_{n \mathop = 1}^\infty \frac {\paren {-1}^{n + 1} } n \map \sin {n x}$

Hence:














\(\ds \frac 1 \pi \int_{-\pi}^\pi x^2 \rd x\)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \paren {\frac{2 \paren {-1}^{n + 1} } n}^2\)





Parseval's Theorem








\(\ds \leadsto \ \ \)





\(\ds \frac 2 \pi \int_0^\pi x^2 \rd x\)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \frac 4 {n^2}\)





Definite Integral of Even Function








\(\ds \leadsto \ \ \)





\(\ds \frac {2 \pi^2} 3\)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \frac 4 {n^2}\)














\(\ds \leadsto \ \ \)





\(\ds \sum_{n \mathop = 1}^\infty \frac 1 {n^2}\)

\(=\)







\(\ds \frac {\pi^2} 6\)









$\blacksquare$





