# 

Source: https://proofwiki.org/wiki/Dirichlet_Integral/Proof_3

Theorem
$\ds \int_0^\infty \frac {\sin x} x \rd x = \frac \pi 2$


Proof
Let:

$\map f x = \begin {cases} \dfrac {e^{i x} - 1} x & x \ne 0 \\ i & x = 0 \end {cases}$
We have, by Euler's Formula, for $x \in \R$:

$\map \Im {\map f x} = \begin {cases} \dfrac {\sin x} x & x \ne 0 \\ 1 & x = 0 \end {cases}$
So: 

$\ds \map \Im {\int_0^\infty \dfrac {e^{i x} - 1} x \rd x} = \int_0^\infty \dfrac {\sin x} x \rd x$
Let $C_R$ be the arc of the circle of radius $R$ centred at the origin connecting $R$ and $-R$ anticlockwise.
Let $\Gamma_R = C_R \cup \closedint {-R} R$.
Then, by Contour Integral of Concatenation of Contours:

$\ds \oint_{\Gamma_R} \frac {e^{i x} - 1} x \rd x = \int_{C_R} \frac {e^{i x} - 1} x \rd x + \int_{-R}^R \frac {e^{i x} - 1} x \rd x$
From Linear Combination of Contour Integrals, we write: 

$\ds \oint_{\Gamma_R} \frac {e^{i x} - 1} x \rd x = \int_{C_R} \frac {e^{i x} } x \rd x - \int_{C_R} \frac {\rd x} x + \int_{-R}^R \frac {e^{i x} - 1} x \rd x$
Note that $f$ is holomorphic inside our contour. 
It then follows from the Cauchy-Goursat Theorem, that:

$\ds \oint_{\Gamma_R} \frac {e^{i x} - 1} x \rd x = 0$
We also have: 














\(\ds \size {\int_{C_R} \frac { e^{i x} } x \rd x}\)

\(\le\)







\(\ds \pi \max_{0 \mathop \le \theta \mathop \le \pi} \size {\frac 1 {R e^{i \theta} } }\)





Jordan's Lemma














\(\ds \)

\(=\)







\(\ds \frac \pi R\)




















\(\ds \)

\(\to\)







\(\ds 0\)





as $R \to \infty$



Therefore: 

$\ds \lim_{R \mathop \to \infty} \int_{C_R} \frac {\rd x} x = \lim_{R \mathop \to \infty} \int_{-R}^R \frac {e^{i x} - 1} x \rd x = \int_{-\infty}^\infty \frac {e^{i x} - 1} x \rd x$
Evaluating the integral on the left hand side: 














\(\ds \int_{C_R} \frac {\rd x} x\)

\(=\)







\(\ds \int_0^\pi \frac {i R e^{i \theta} } {R e^{i \theta} } \rd \theta\)





Definition of Complex Contour Integral














\(\ds \)

\(=\)







\(\ds i \int_0^\pi \rd \theta\)




















\(\ds \)

\(=\)







\(\ds \pi i\)









So:

$\ds \int_{-\infty}^\infty \frac {e^{i x} - 1} x \rd x = \pi i$
Taking the imaginary part:

$\ds \int_{-\infty}^\infty \frac {\sin x} x \rd x = \pi$
From Definite Integral of Even Function:

$\ds \int_{-\infty}^\infty \frac {\sin x} x \rd x = 2 \int_0^\infty \frac {\sin x} x \rd x$
Hence: 

$\ds \int_0^\infty \frac {\sin x} x \rd x = \frac \pi 2$
$\blacksquare$





