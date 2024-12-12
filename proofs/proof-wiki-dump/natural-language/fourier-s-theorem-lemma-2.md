# 

Source: https://proofwiki.org/wiki/Fourier%27s_Theorem/Lemma_2

Lemma for Fourier's Theorem
Let $\psi$ be a real function defined on a half-open interval $\hointl 0 a$.
Let $\psi$ and its derivative $\psi'$ be piecewise continuous with one-sided limits on $\hointl 0 a$.
Let $\map \psi u$ have a right-hand derivative at $u = 0$.

Then:

$\ds \lim_{N \mathop \to \infty} \int_0^a \map \psi u \frac {\sin N u} u \rd u = \frac \pi 2 \map \psi {0^+}$
where $\map \psi {0^+}$ denotes the limit of $\psi$ at $0$ from the right.


Proof
We have:

$\map \psi u = \map \psi {0^+} + \paren {\map \psi u - \map \psi {0^+} }$
from which:

$(1): \quad \ds \int_0^a \map \psi u \frac {\sin N u} u \rd u = \map \psi {0^+} \int_0^a \frac {\sin N u} u \rd u + \int_0^a \map \phi u \sin N u \rd u$
where:

$\map \phi u = \dfrac {\map \psi u - \map \psi {0^+} } u$

Let $\xi = N u$.
Then:














\(\ds \int_0^a \frac {\sin N u} u \rd u\)

\(=\)







\(\ds \int_0^{N a} \frac {\sin \xi} \xi \rd \xi\)




















\(\ds \)

\(\to\)







\(\ds \int_0^\infty \frac {\sin \xi} \xi \rd \xi\)




















\(\ds \)

\(=\)







\(\ds \frac \pi 2\)





Integral to Infinity of $\dfrac {\sin \xi} \xi$




We have that $\map \psi u$ is piecewise continuous with one-sided limits on $\hointl 0 a$.
Hence it follows that $\map \phi u = \dfrac {\map \psi u - \map \psi {0^+} } u$ is also piecewise continuous with one-sided limits on $\hointl 0 a$.
We also have that $\map \psi u$ has a right-hand derivative at $u = 0$.
It follows that $\map \phi u$ is piecewise continuous with one-sided limits on $\hointl 0 a$.

Thus from Lemma 1 for Fourier's Theorem:

$\ds \lim_{N \mathop \to \infty} \int_0^a \map \phi u \sin N u \rd u = 0$
and letting $N \to \infty$ in $(1)$ above:

$\ds \lim_{N \mathop \to \infty} \int_0^a \map \psi u \frac {\sin N u} u \rd u = \frac \pi 2 \map \psi {0^+}$
$\blacksquare$


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Sources
1961: I.N. Sneddon: Fourier Series ... (previous) ... (next): Chapter Two: $\S 2$. Some Important Limits: Lemma $(2)$




