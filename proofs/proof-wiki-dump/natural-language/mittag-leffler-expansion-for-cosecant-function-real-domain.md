# 

Source: https://proofwiki.org/wiki/Mittag-Leffler_Expansion_for_Cosecant_Function/Real_Domain

Theorem
Let $\alpha \in \R$ be a real number which is specifically not an integer.
Then:

$\pi \cosec \pi \alpha = \dfrac 1 \alpha + \ds 2 \sum_{n \mathop \ge 1} \paren {-1}^n \dfrac {\alpha} {\alpha^2 - n^2}$


Proof
From Half-Range Fourier Cosine Series for $\cos \alpha x$ over $\openint 0 \pi$:

$\ds \cos \alpha x \sim \frac {2 \alpha \sin \alpha \pi} \pi \paren {\frac 1 {2 \alpha^2} + \sum_{n \mathop = 1}^\infty \paren {-1}^n \frac {\cos n x} {\alpha^2 - n^2} }$

Setting $x = 0$:














\(\ds \cos 0\)

\(=\)







\(\ds \frac {2 \alpha \sin \alpha \pi} \pi \paren {\frac 1 {2 \alpha^2} + \sum_{n \mathop = 1}^\infty \paren {-1}^n \frac {\cos 0} {\alpha^2 - n^2} }\)














\(\ds \leadsto \ \ \)





\(\ds 1\)

\(=\)







\(\ds \frac {2 \alpha \sin \alpha \pi} \pi \paren {\frac 1 {2 \alpha^2} + \sum_{n \mathop = 1}^\infty \frac {\paren {-1}^n} {\alpha^2 - n^2} }\)





Cosine of Zero is One








\(\ds \leadsto \ \ \)





\(\ds \frac \pi {2 \alpha \sin \alpha \pi}\)

\(=\)







\(\ds \frac 1 {2 \alpha^2} + \sum_{n \mathop = 1}^\infty \frac {\paren {-1}^n} {\alpha^2 - n^2}\)














\(\ds \leadsto \ \ \)





\(\ds \pi \cosec \pi \alpha\)

\(=\)







\(\ds \dfrac 1 \alpha + 2 \sum_{n \mathop \ge 1} \paren {-1}^n \dfrac {\alpha} {\alpha^2 - n^2}\)





Definition of Cosecant and rearranging



$\blacksquare$


Sources
1961: I.N. Sneddon: Fourier Series ... (previous) ... (next): Exercises on Chapter $\text {II}$: $1$.




