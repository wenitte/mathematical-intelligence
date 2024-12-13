# 

Source: https://proofwiki.org/wiki/Integral_to_Infinity_of_Sine_p_x_Cosine_q_x_over_x



Theorem
$\ds \int_0^\infty \frac {\sin p x \cos q x} x \rd x = \begin {cases} \dfrac \pi 2 & : p > q > 0 \\
0 & : 0 < p < q \\
\dfrac \pi 4 & : p = q > 0 \end {cases}$


Proof













\(\ds \int_0^\infty \frac {\sin p x \cos q x} x \rd x\)

\(=\)







\(\ds \int_0^\infty \frac 1 2 \cdot \frac {\sin \paren {\paren {p + q} x} + \sin \paren {\paren {p - q} x} } x \rd x\)





Werner Formula for Sine by Cosine














\(\ds \)

\(=\)







\(\ds \frac 1 2 \int_0^\infty \frac {\sin \paren {\paren {p + q} x} } x \rd x + \frac 1 2 \int_0^\infty \frac {\sin \paren {\paren {p - q} x} } x \rd x\)





Linear Combination of Definite Integrals














\(\ds \)

\(=\)







\(\ds \lim_{t \mathop \to \infty} \frac 1 2 \int_0^t \frac {\sin \paren {\paren {p + q} x} } x \rd x + \lim_{t \mathop \to \infty} \frac 1 2 \int_0^t \frac {\sin \paren {\paren {p - q} x} } x \rd x\)





Definition of Improper Integral on Closed Interval Unbounded Above














\(\ds \)

\(=\)







\(\ds \lim_{t \mathop \to \infty} \frac 1 2 \int_0^{t \paren {p + q} } \frac {\sin u} u \rd u + \lim_{t \mathop \to \infty} \frac 1 2 \int_0^t \frac {\sin \paren {\paren {p - q} x} } x \rd x\)





Integration by Substitution: $u = \paren {p + q} x$














\(\ds \)

\(=\)







\(\ds \lim_{t \mathop \to \infty} \frac 1 2 \int_0^{t \paren {p + q} } \frac {\sin u} u \rd u + \lim_{t \mathop \to \infty} \frac 1 2 \int_0^{t \paren {p - q} } \frac {\sin v} v \rd v\)





Integration by Substitution: $v = \paren {p - q} x$














\(\ds \)

\(=\)







\(\ds \frac 1 2 \int_0^\infty \frac {\sin u} u \rd u + \frac 1 2 \lim_{t \mathop \to \infty} \int_0^{t \paren {p - q} } \frac {\sin v} v \rd v\)





Definition of Improper Integral on Closed Interval Unbounded Above: by hypothesis $p + q$ is (strictly) positive














\(\ds \)

\(=\)







\(\ds \frac \pi 4 + \frac 1 2 \lim_{t \mathop \to \infty} \int_0^{t \paren {p - q} } \frac {\sin v} v \rd v\)





Dirichlet Integral





Case $p > q > 0$:













\(\ds \)

\(\)







\(\ds \frac \pi 4 + \frac 1 2 \lim_{t \mathop \to \infty} \int_0^{t \paren {p - q} } \frac {\sin v} v \rd v\)




















\(\ds \)

\(=\)







\(\ds \frac \pi 4 + \frac 1 2 \int_0^\infty \frac {\sin v} v \rd v\)





Definition of Improper Integral on Closed Interval Unbounded Above: by hypothesis $p - q$ is (strictly) positive














\(\ds \)

\(=\)







\(\ds \frac \pi 4 + \frac 1 2 \cdot \frac \pi 2\)





Dirichlet Integral














\(\ds \)

\(=\)







\(\ds \frac \pi 2\)





simplifying



$\Box$


Case $0 < p < q$:













\(\ds \)

\(\)







\(\ds \frac \pi 4 + \frac 1 2 \lim_{t \mathop \to \infty} \int_0^{t \paren {p - q} } \frac {\sin v} v \rd v\)




















\(\ds \)

\(=\)







\(\ds \frac \pi 4 + \frac 1 2 \int_0^{-\infty} \frac {\sin v} v \rd v\)





Definition of Improper Integral on Closed Interval Unbounded Below: by hypothesis $p - q$ is (strictly) negative














\(\ds \)

\(=\)







\(\ds \frac \pi 4 - \frac 1 2 \int_0^\infty \frac {\sin w} w \rd w\)





Integration by Substitution: $w = -v$














\(\ds \)

\(=\)







\(\ds \frac \pi 4 - \frac 1 2 \cdot \frac \pi 2\)





Dirichlet Integral














\(\ds \)

\(=\)







\(\ds 0\)





simplifying



$\Box$


Case $p = q > 0$:













\(\ds \)

\(\)







\(\ds \frac \pi 4 + \frac 1 2 \lim_{t \mathop \to \infty} \int_0^{t \paren {p - q} } \frac {\sin v} v \rd v\)




















\(\ds \)

\(=\)







\(\ds \frac \pi 4 + \frac 1 2 \lim_{t \mathop \to \infty} \int_0^0 \frac {\sin v} v \rd v\)





$p - q = 0$ by hypothesis














\(\ds \)

\(=\)







\(\ds \frac \pi 4 + \frac 1 2 \cdot 0\)





Definite Integral on Zero Interval, independently of $t$














\(\ds \)

\(=\)







\(\ds \frac \pi 4\)





simplifying



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 15$: Definite Integrals involving Trigonometric Functions: $15.34$




