# 

Source: https://proofwiki.org/wiki/Riemann_Zeta_Function_of_4/Proof_1

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
By Fourier Series of Fourth Power of x, for $x \in \closedint {-\pi} \pi$:

$\ds x^4 = \frac {\pi^4} 5 + \sum_{n \mathop = 1}^\infty \frac {8 n^2 \pi^2 - 48} {n^4} \map \cos {n \pi} \map \cos {n x}$
Setting $x = \pi$: 














\(\ds \pi^4\)

\(=\)







\(\ds \frac {\pi^4} 5 + \sum_{n \mathop = 1}^\infty \frac {8 n^2 \pi^2 - 48} {n^4} \map {\cos^2} {n \pi}\)














\(\ds \leadsto \ \ \)





\(\ds \frac {4 \pi^4} 5\)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \frac {8 n^2 \pi^2} {n^4} - \sum_{n \mathop = 1}^\infty \frac {48} {n^4}\)





Cosine of Multiple of Pi








\(\ds \leadsto \ \ \)





\(\ds \frac {\pi^4} 5\)

\(=\)







\(\ds 2 \pi^2 \sum_{n \mathop = 1}^\infty \frac 1 {n^2} - 12 \sum_{n \mathop = 1}^\infty \frac 1 {n^4}\)




















\(\ds \)

\(=\)







\(\ds \frac {\pi^4} 3 - 12 \sum_{n \mathop = 1}^\infty \frac 1 {n^4}\)





Basel Problem








\(\ds \leadsto \ \ \)





\(\ds 12 \sum_{n \mathop = 1}^\infty \frac 1 {n^4}\)

\(=\)







\(\ds \frac {\pi^4} 3 - \frac {\pi^4} 5\)





rearranging














\(\ds \)

\(=\)







\(\ds \frac {2 \pi^4} {15}\)














\(\ds \leadsto \ \ \)





\(\ds \sum_{n \mathop = 1}^\infty \frac 1 {n^4}\)

\(=\)







\(\ds \frac {\pi^4} {90}\)









$\blacksquare$





