# 

Source: https://proofwiki.org/wiki/Cauchy%27s_Integral_Formula/General_Result/Corollary

Theorem
Let $\map G z$ be the generating function for the sequence $\sequence {a_n}$.
Let the coefficient of $z^n$ extracted from $\map G z$ be denoted:

$\sqbrk {z^n} \map G z := a_n$
Let $\map G z$ be convergent for $z = z_0$ and $0 < r < \cmod {z_0}$.

Then:

$\sqbrk {z^n} \map G z = \ds \frac 1 {2 \pi i} \oint_{\cmod z \mathop = r} \dfrac {\map G z \d z} {z^{n + 1} }$


Proof













\(\ds \sqbrk {z^n} \map G z\)

\(=\)







\(\ds \dfrac 1 {n!} \map {G^{\paren n} } 0\)





Derivative of Generating Function: Corollary














\(\ds \)

\(=\)







\(\ds \dfrac 1 {n!} \paren {\dfrac {n!} {2 \pi i} \int_{\partial D} \frac {\map G z} {z^{n + 1} } \rd z}\)





Cauchy's Integral Formula for Derivatives














\(\ds \)

\(=\)







\(\ds \frac 1 {2 \pi i} \oint_{\cmod z \mathop = r} \dfrac {\map G z \d z} {z^{n + 1} }\)









$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.9$: Generating Functions: $(32)$




