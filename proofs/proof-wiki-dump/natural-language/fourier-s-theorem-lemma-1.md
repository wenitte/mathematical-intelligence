# 

Source: https://proofwiki.org/wiki/Fourier%27s_Theorem/Lemma_1

Lemma for Fourier's Theorem
Let $\psi$ be a real function defined on a closed interval $\closedint a b$.
Let $\psi$ be piecewise continuous with one-sided limits on $\closedint a b$.
Then:

$\ds \lim_{N \mathop \to \infty} \int_a^b \map \psi u \sin N u \rd u = 0$


Proof
We are given that $\psi$ is piecewise continuous with one-sided limits on $\closedint a b$.
Therefore, there exists a finite subdivision $\set {x_0, x_1, \ldots, x_m}$ of $\closedint a b$, where $x_0 = a$ and $x_m = b$, such that for all $i \in \set {1, 2, \ldots, m}$:

$\psi$ is continuous on $\openint {x_{i - 1} } {x_i}$
$\ds \lim_{x \mathop \to {x_{i - 1} }^+} \map \psi x$ and $\ds \lim_{x \mathop \to {x_i}^-} \map \psi x$ exist.

From the corollary to Sum of Integrals on Adjacent Intervals for Integrable Functions:

$\ds \int_a^b \map \psi u \sin N u \rd u = \sum_{r \mathop = 0}^{m - 1} \int_{x_r}^{x_{r + 1} } \map \psi u \sin N u \rd u$
Then:




\(\text {(1)}: \quad\)









\(\ds \int_{x_r}^{x_{r + 1} } \map \psi u \sin N u \rd u\)

\(=\)







\(\ds \intlimits {-\map \psi u \frac {\cos N u} N} {x_r} {x_{r + 1} }\)





Integration by Parts














\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \frac 1 N \int_{x_r}^{x_{r + 1} } \map {\psi'} u \cos N u \rd u\)









The last integral is bounded.
Thus $(1)$ is less than $\dfrac {M_r} N$ for $M_r \in \R$.
Let $M = \max \set {\size {M_0}, \size {M_1}, \dotsc, \size {M_{m - 1} } }$.
Then:

$\ds \size {\int_a^b \map \psi u \sin N u \rd u} < \dfrac {M m} N$
As $M$ and $m$ are finite:

$\ds \lim_{N \mathop \to \infty} \dfrac {M m} N = 0$
Hence the result.
$\blacksquare$


Sources
1961: I.N. Sneddon: Fourier Series ... (previous) ... (next): Chapter Two: $\S 2$. Some Important Limits: Lemma $(1)$




