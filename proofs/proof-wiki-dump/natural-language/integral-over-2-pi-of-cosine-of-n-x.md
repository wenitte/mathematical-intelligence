# 

Source: https://proofwiki.org/wiki/Integral_over_2_pi_of_Cosine_of_n_x

Theorem
Let $m \in \Z$ be an integer.

Then:

$\ds \int_\alpha^{\alpha + 2 \pi} \cos m x \rd x = \begin {cases} 0 & : m \ne 0 \\ 2 \pi & : m = 0 \end {cases}$


Proof
Let $m \ne 0$.














\(\ds \int \cos m x \rd x\)

\(=\)







\(\ds \frac {\sin m x} m + C\)





Primitive of $\cos m x$








\(\ds \leadsto \ \ \)





\(\ds \int_\alpha^{\alpha + 2 \pi} \cos m x \rd x\)

\(=\)







\(\ds \intlimits {\frac {\sin m x} m} \alpha {\alpha + 2 \pi}\)




















\(\ds \)

\(=\)







\(\ds \paren {\frac {\map \sin {m \paren {\alpha + 2 \pi} } } m} - \paren {\frac {\sin m \alpha} m}\)




















\(\ds \)

\(=\)







\(\ds \paren {\frac {\sin m \alpha} m} - \paren {\frac {\sin m \alpha} m}\)





Corollary to Sine of Angle plus Full Angle














\(\ds \)

\(=\)







\(\ds 0 - 0\)




















\(\ds \)

\(=\)







\(\ds 0\)









$\Box$

Let $m = 0$.














\(\ds \int \cos 0 x \rd x\)

\(=\)







\(\ds \int 1 \rd x\)





Cosine of Zero is One














\(\ds \)

\(=\)







\(\ds x + C\)





Primitive of Constant








\(\ds \leadsto \ \ \)





\(\ds \int_\alpha^{\alpha + 2 \pi} \cos 0 x \rd x\)

\(=\)







\(\ds \bigintlimits x \alpha {\alpha + 2 \pi}\)




















\(\ds \)

\(=\)







\(\ds \alpha + 2 \pi - \alpha\)




















\(\ds \)

\(=\)







\(\ds 2 \pi\)









$\blacksquare$


Sources
1961: I.N. Sneddon: Fourier Series ... (previous) ... (next): Chapter One: $\S 2$. Fourier Series: $(4)$




