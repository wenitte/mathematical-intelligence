# 

Source: https://proofwiki.org/wiki/Basel_Problem/Proof_7

Theorem
$\ds \map \zeta 2 = \sum_{n \mathop = 1}^\infty {\frac 1 {n^2} } = \frac {\pi^2} 6$
where $\zeta$ denotes the Riemann zeta function.


Proof
By Fourier Series of $x^2$, for $x \in \openint {-\pi} \pi$:

$\ds x^2 = \frac {\pi^2} 3 + \sum_{n \mathop = 1}^\infty \paren {\paren {-1}^n \frac 4 {n^2} \cos n x}$
Letting $x \to \pi$ from the left:














\(\ds \pi^2\)

\(=\)







\(\ds \frac {\pi^2} 3 + \sum_{n \mathop = 1}^\infty \paren {\paren {-1}^n \frac 4 {n^2} \cos \pi x}\)




















\(\ds \pi^2\)

\(=\)







\(\ds \frac {\pi^2} 3 + \sum_{n \mathop = 1}^\infty \paren {\paren {-1}^n \paren {-1}^n \frac 4 {n^2} }\)





Cosine of Multiple of $\pi$














\(\ds \pi^2\)

\(=\)







\(\ds \frac {\pi^2} 3 + 4 \sum_{n \mathop = 1}^\infty \frac 1 {n^2}\)














\(\ds \leadsto \ \ \)





\(\ds \frac {2 \pi^2} 3\)

\(=\)







\(\ds 4 \sum_{n \mathop = 1}^\infty \frac 1 {n^2}\)














\(\ds \leadsto \ \ \)





\(\ds \sum_{n \mathop = 1}^\infty \frac 1 {n^2}\)

\(=\)







\(\ds \frac {\pi^2} 6\)









$\blacksquare$





