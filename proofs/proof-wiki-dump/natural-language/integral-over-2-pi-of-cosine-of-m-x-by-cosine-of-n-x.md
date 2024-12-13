# 

Source: https://proofwiki.org/wiki/Integral_over_2_pi_of_Cosine_of_m_x_by_Cosine_of_n_x

Theorem
Let $m, n \in \Z$ be integers.
Let $\alpha \in \R$ be a real number.

Then:

$\ds \int_\alpha^{\alpha + 2 \pi} \cos m x \cos n x \rd x = \begin {cases} 0 & : m \ne n \\ \pi & : m = n \end {cases}$

That is:

$\ds \int_\alpha^{\alpha + 2 \pi} \cos m x \cos n x \rd x = \pi \delta_{m n}$
where $\delta_{m n}$ is the Kronecker delta.


Proof
Let $m \ne n$.














\(\ds \int \cos m x \cos n x \rd x\)

\(=\)







\(\ds \frac {\sin \paren {m - n} x} {2 \paren {m - n} } + \frac {\sin \paren {m + n} x} {2 \paren {m + n} } + C\)





Primitive of $\cos m x \cos n x$








\(\ds \leadsto \ \ \)





\(\ds \int_\alpha^{\alpha + 2 \pi} \cos m x \cos n x \rd x\)

\(=\)







\(\ds \intlimits {\frac {\sin \paren {m - n} x} {2 \paren {m - n} } + \frac {\sin \paren {m + n} x} {2 \paren {m + n} } } \alpha {\alpha + 2 \pi}\)




















\(\ds \)

\(=\)







\(\ds \paren {\frac {\sin \paren {\paren {m - n} \paren {\alpha + 2 \pi} } } {2 \paren {m - n} } + \frac {\sin \paren {\paren {m + n} \paren {\alpha + 2 \pi} } } {2 \paren {m + n} } }\)




















\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \paren {\frac {\sin \paren {m - n} \alpha} {2 \paren {m - n} } + \frac {\sin \paren {m + n} \alpha} {2 \paren {m + n} } }\)




















\(\ds \)

\(=\)







\(\ds \paren {\frac {\sin \paren {m - n} \alpha} {2 \paren {m - n} } + \frac {\sin \paren {m + n} \alpha} {2 \paren {m + n} } }\)





Sine of Angle plus Full Angle: Corollary














\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \paren {\frac {\sin \paren {m - n} \alpha} {2 \paren {m - n} } + \frac {\sin \paren {m + n} \alpha} {2 \paren {m + n} } }\)




















\(\ds \)

\(=\)







\(\ds 0\)









$\Box$

When $m = n$ we have:














\(\ds \int \cos m x \cos m x \rd x\)

\(=\)







\(\ds \int \cos^2 m x \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac x 2 + \frac {\sin 2 m x} {4 m} + C\)





Primitive of $\cos^2 m x$








\(\ds \leadsto \ \ \)





\(\ds \int_\alpha^{\alpha + 2 \pi} \cos m x \cos m x \rd x\)

\(=\)







\(\ds \intlimits {\frac x 2 + \frac {\sin 2 m x} {4 m} } \alpha {\alpha + 2 \pi}\)




















\(\ds \)

\(=\)







\(\ds \paren {\frac {\alpha + 2 \pi} 2 + \frac {\map \sin {2 m \paren {\alpha + 2 \pi} } } {4 m} } - \paren {\frac \alpha 2 + \frac {\sin 2 m \alpha} {4 m} }\)




















\(\ds \)

\(=\)







\(\ds \paren {\frac {\alpha + 2 \pi} 2 + \frac {\sin 2 m \alpha} {4 m} } - \paren {\frac \alpha 2 + \frac {\sin 2 m \alpha} {4 m} }\)





Sine of Angle plus Full Angle: Corollary














\(\ds \)

\(=\)







\(\ds \frac {\alpha + 2 \pi - \alpha} 2\)




















\(\ds \)

\(=\)







\(\ds \pi\)









$\blacksquare$


Sources
1961: I.N. Sneddon: Fourier Series ... (previous) ... (next): Chapter One: $\S 2$. Fourier Series: $(3)$




