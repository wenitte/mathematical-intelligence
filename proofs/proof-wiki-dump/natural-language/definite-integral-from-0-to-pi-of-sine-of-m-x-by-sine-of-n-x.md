# 

Source: https://proofwiki.org/wiki/Definite_Integral_from_0_to_Pi_of_Sine_of_m_x_by_Sine_of_n_x

Theorem
Let $m, n \in \Z$ be integers.

Then:

$\ds \int_0^\pi \sin m x \sin n x \rd x = \begin{cases} 0 & : m \ne n \\ \dfrac \pi 2 & : m = n \end{cases}$

That is:

$\ds \int_0^\pi \sin m x \sin n x \rd x = \dfrac \pi 2 \delta_{m n}$
where $\delta_{m n}$ is the Kronecker delta.


Proof
Let $m \ne n$.














\(\ds \int \sin m x \sin n x \rd x\)

\(=\)







\(\ds \frac {\sin \paren {m - n} x} {2 \paren {m - n} } - \frac {\sin \paren {m + n} x} {2 \paren {m + n} } + C\)





Primitive of $\sin m x \sin n x$








\(\ds \leadsto \ \ \)





\(\ds \int_0^\pi \sin m x \sin n x \rd x\)

\(=\)







\(\ds \intlimits {\frac {\sin \paren {m - n} x} {2 \paren {m - n} } - \frac {\sin \paren {m + n} x} {2 \paren {m + n} } } 0 \pi\)




















\(\ds \)

\(=\)







\(\ds \paren {\frac {\sin \paren {m - n} \pi} {2 \paren {m - n} } - \frac {\sin \paren {m + n} \pi} {2 \paren {m + n} } }\)




















\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \paren {\frac {\sin 0} {2 \paren {m - n} } - \frac {\sin 0} {2 \paren {m + n} } }\)




















\(\ds \)

\(=\)







\(\ds \frac {\sin \paren {m - n} \pi} {2 \paren {m - n} } - \frac {\sin \paren {m + n} \pi} {2 \paren {m + n} }\)





Sine of Zero is Zero














\(\ds \)

\(=\)







\(\ds 0\)





Sine of Multiple of Pi



$\Box$

When $m = n$ we have:














\(\ds \int \sin m x \sin m x \rd x\)

\(=\)







\(\ds \int \sin^2 m x \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac x 2 - \frac {\sin 2 m x} {4 m} + C\)





Primitive of $\sin^2 m x$








\(\ds \leadsto \ \ \)





\(\ds \int_0^\pi \sin m x \sin m x \rd x\)

\(=\)







\(\ds \intlimits {\frac x 2 - \frac {\sin 2 m x} {4 m} } 0 \pi\)




















\(\ds \)

\(=\)







\(\ds \paren {\frac \pi 2 - \frac {\sin \paren {2 m \pi} } {4 m} } - \paren {\frac 0 2 - \frac {\sin 0} {4 m} }\)




















\(\ds \)

\(=\)







\(\ds \frac \pi 2 - \frac {\sin \paren {2 m \pi} } {4 m}\)





Sine of Zero is Zero














\(\ds \)

\(=\)







\(\ds \frac \pi 2\)





Sine of Multiple of Pi



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 15$: Definite Integrals involving Trigonometric Functions: $15.26$




