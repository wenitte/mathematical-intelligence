# 

Source: https://proofwiki.org/wiki/Integral_over_2_pi_of_Sine_of_m_x_by_Cosine_of_n_x

Theorem
Let $m, n \in \Z$ be integers.
Let $\alpha \in \R$ be a real number.

Then:

$\ds \int_\alpha^{\alpha + 2 \pi} \sin m x \cos n x \rd x = 0$


Proof
Let $m \ne n$.














\(\ds \int \sin m x \cos n x \rd x\)

\(=\)







\(\ds \frac {-\map \cos {m - n} x} {2 \paren {m - n} } - \frac {\map \cos {m + n} x} {2 \paren {m + n} } + C\)





Primitive of $\sin m x \cos n x$








\(\ds \leadsto \ \ \)





\(\ds \int_\alpha^{\alpha + 2 \pi} \sin m x \cos n x \rd x\)

\(=\)







\(\ds \intlimits {\frac {-\map \cos {m - n} x} {2 \paren {m - n} } - \frac {\map \cos {m + n} x} {2 \paren {m + n} } } \alpha {\alpha + 2 \pi}\)




















\(\ds \)

\(=\)







\(\ds \paren {\frac {-\map \cos {\paren {m - n} \paren {\alpha + 2 \pi} } } {2 \paren {m - n} } - \frac {\map \cos {\paren {m + n} \paren {\alpha + 2 \pi} } } {2 \paren {m + n} } }\)




















\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \paren {\frac {-\map \cos {m - n} \alpha} {2 \paren {m - n} } - \frac {\map \cos {m + n} \alpha} {2 \paren {m + n} } }\)




















\(\ds \)

\(=\)







\(\ds \paren {\frac {-\map \cos {m - n} \alpha} {2 \paren {m - n} } - \frac {\map \cos {m + n} \alpha} {2 \paren {m + n} } }\)





Cosine of Angle plus Full Angle: Corollary














\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \paren {\frac {-\map \cos {m - n} \alpha} {2 \paren {m - n} } - \frac {\map \cos {m + n} \alpha} {2 \paren {m + n} } }\)




















\(\ds \)

\(=\)







\(\ds 0\)





after simplification




When $m = n$ we have:














\(\ds \int \sin m x \cos m x \rd x\)

\(=\)







\(\ds \frac {\sin^2 m x} {2 m} + C\)





Primitive of $\sin m x \cos m x$








\(\ds \leadsto \ \ \)





\(\ds \int_\alpha^{\alpha + 2 \pi} \sin m x \cos m x \rd x\)

\(=\)







\(\ds \intlimits {\frac {\sin^2 m x} {2 m} } \alpha {\alpha + 2 \pi}\)




















\(\ds \)

\(=\)







\(\ds \frac {\map {\sin^2} {m \paren {\alpha + 2 \pi} } } {2 m} - \frac {\sin^2 m \alpha} {2 m}\)




















\(\ds \)

\(=\)







\(\ds \frac {\sin^2 m \alpha} {2 m} - \frac {\sin^2 m \alpha} {2 m}\)





Cosine of Angle plus Full Angle: Corollary














\(\ds \)

\(=\)







\(\ds 0\)









$\blacksquare$


Sources
1961: I.N. Sneddon: Fourier Series ... (previous) ... (next): Chapter One: $\S 2$. Fourier Series: $(3)$




