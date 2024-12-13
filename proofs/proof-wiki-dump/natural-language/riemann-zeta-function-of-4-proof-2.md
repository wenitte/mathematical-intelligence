# 

Source: https://proofwiki.org/wiki/Riemann_Zeta_Function_of_4/Proof_2

Theorem
The Riemann zeta function of $4$ is given by:














\(\ds \map \zeta 4\)

\(=\)







\(\ds \dfrac 1 {1^4} +  \dfrac 1 {2^4} +  \dfrac 1 {3^4} +  \dfrac 1 {4^4} + \cdots\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\pi^4} {90}\)




















\(\ds \)

\(\approx\)







\(\ds 1 \cdotp 08232 \, 3 \ldots\)











Proof
By Fourier Series of x squared, for $x \in \closedint {-\pi} \pi$:

$\ds x^2 = \frac {\pi^2} 3 + \sum_{n \mathop = 1}^\infty \paren {\paren {-1}^n \frac 4 {n^2} \cos n x}$

Hence:














\(\ds \frac 1 \pi \int_{-\pi}^\pi x^4 \rd x\)

\(=\)







\(\ds \frac 1 2 \paren {\frac {2 \pi^2} 3}^2 + \sum_{n \mathop = 1}^\infty \paren {\frac {4 \paren {-1}^n} {n^2} }^2\)





Parseval's Theorem








\(\ds \leadsto \ \ \)





\(\ds \frac 2 \pi \int_0^\pi x^4 \rd x\)

\(=\)







\(\ds \frac {2 \pi^4} 9 + \sum_{n \mathop = 1}^\infty \frac {16} {n^4}\)





Definite Integral of Even Function








\(\ds \leadsto \ \ \)





\(\ds \frac {2 \pi^4} 5\)

\(=\)







\(\ds \frac {2 \pi^4} 9 + \sum_{n \mathop = 1}^\infty \frac {16} {n^4}\)














\(\ds \leadsto \ \ \)





\(\ds \frac {8 \pi^4} {45}\)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \frac {16} {n^4}\)














\(\ds \leadsto \ \ \)





\(\ds \sum_{n \mathop = 1}^\infty \frac 1 {n^4}\)

\(=\)







\(\ds \frac {\pi^4} {90}\)









$\blacksquare$





