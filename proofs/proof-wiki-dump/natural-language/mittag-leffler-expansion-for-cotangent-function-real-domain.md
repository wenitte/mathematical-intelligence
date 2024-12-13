# 

Source: https://proofwiki.org/wiki/Mittag-Leffler_Expansion_for_Cotangent_Function/Real_Domain

Theorem
Let $\alpha \in \R$ be a real number which is specifically not an integer.
Then:

$\ds \dfrac 1 \alpha + \sum_{n \mathop \ge 1} \dfrac {2 \alpha} {\alpha^2 - n^2} = \pi \cot \pi \alpha$


Proof
From Half-Range Fourier Cosine Series for $\cos \alpha x$ over $\openint 0 \pi$:

$\ds \cos \alpha x \sim \frac {2 \alpha \sin \pi \alpha} \pi \paren {\frac 1 {2 \alpha^2} + \sum_{n \mathop = 1}^\infty \paren {-1}^n \frac {\cos n x} {\alpha^2 - n^2} }$

Setting $x = \pi$:














\(\ds \cos \pi \alpha\)

\(=\)







\(\ds \frac {2 \alpha \sin \pi \alpha} \pi \paren {\frac 1 {2 \alpha^2} + \sum_{n \mathop = 1}^\infty \paren {-1}^n \frac {\cos n \pi} {\alpha^2 - n^2} }\)














\(\ds \leadsto \ \ \)





\(\ds \cos \pi \alpha\)

\(=\)







\(\ds \frac {2 \alpha \sin \pi \alpha} \pi \paren {\frac 1 {2 \alpha^2} + \sum_{n \mathop = 1}^\infty \paren {-1}^n \frac {\paren {-1}^n} {\alpha^2 - n^2} }\)





Cosine of Multiple of Pi








\(\ds \leadsto \ \ \)





\(\ds \frac {\pi \cos \pi \alpha} {\sin \pi \alpha}\)

\(=\)







\(\ds \frac 1 \alpha + \sum_{n \mathop = 1}^\infty \frac {2 \alpha} {\alpha^2 - n^2}\)














\(\ds \leadsto \ \ \)





\(\ds \pi \cot \pi \alpha\)

\(=\)







\(\ds \frac 1 \alpha + \sum_{n \mathop = 1}^\infty \frac {2 \alpha} {\alpha^2 - n^2}\)





Definition of Cotangent and rearranging



$\blacksquare$


Sources
1961: I.N. Sneddon: Fourier Series ... (previous) ... (next): Exercises on Chapter $\text {II}$: $2 \ \text {(ii)}$




