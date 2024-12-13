# 

Source: https://proofwiki.org/wiki/Riemann_Zeta_Function_of_6/Proof_1

Theorem
The Riemann zeta function of $6$ is given by:














\(\ds \map \zeta 6\)

\(=\)







\(\ds \dfrac 1 {1^6} +  \dfrac 1 {2^6} +  \dfrac 1 {3^6} +  \dfrac 1 {4^6} + \cdots\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\pi^6} {945}\)




















\(\ds \)

\(\approx\)







\(\ds 1 \cdotp 01734 \, 3 \ldots\)











Proof
By Fourier Series: $x^6$ over $-\pi$ to $\pi$, for $x \in \closedint {-\pi} \pi$:

$\ds x^6 = \frac {\pi^6} 7 + \sum_{n \mathop = 1}^\infty \frac {12 n^4 \pi^4 - 240 n^2 \pi^2 +1440} {n^6} \, \map \cos {n \pi} \, \map \cos {n x}$
Setting $x = \pi$: 














\(\ds \pi^6\)

\(=\)







\(\ds \frac {\pi^6} 7 + \sum_{n \mathop = 1}^\infty \frac {12 n^4 \pi^4 - 240 n^2 \pi^2 +1440} {n^6} \, \map {\cos^2} {n \pi}\)














\(\ds \leadsto \ \ \)





\(\ds \frac { 6 \pi^6} 7\)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \frac {12 \pi^4} {n^2} - \sum_{n \mathop = 1}^\infty \frac {240 \pi^2} {n^4} + \sum_{n \mathop = 1}^\infty \frac {1440} {n^6}\)





Cosine of Multiple of Pi








\(\ds \leadsto \ \ \)





\(\ds \frac {\pi^6} 7\)

\(=\)







\(\ds 2 \pi^4 \sum_{n \mathop = 1}^\infty \frac 1 {n^2} - 40 \pi^2 \sum_{n \mathop = 1}^\infty \frac 1 {n^4} + 240 \sum_{n \mathop = 1}^\infty \frac 1 {n^6}\)




















\(\ds \)

\(=\)







\(\ds - \frac {\pi^6} 9 + 240 \sum_{n \mathop = 1}^\infty \frac 1 {n^6}\)





Basel Problem and Riemann Zeta Function of 4








\(\ds \leadsto \ \ \)





\(\ds 240 \sum_{n \mathop = 1}^\infty \frac 1 {n^6}\)

\(=\)







\(\ds \frac {\pi^6} 9 + \frac {\pi^6} 7\)





rearranging














\(\ds \)

\(=\)







\(\ds \frac {16 \pi^4} {63}\)














\(\ds \leadsto \ \ \)





\(\ds \sum_{n \mathop = 1}^\infty \frac 1 {n^6}\)

\(=\)







\(\ds \frac {\pi^6} {945}\)









$\blacksquare$





