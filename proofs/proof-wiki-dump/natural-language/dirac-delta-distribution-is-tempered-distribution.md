# 

Source: https://proofwiki.org/wiki/Dirac_Delta_Distribution_is_Tempered_Distribution

Theorem
Let $\delta$ be the Dirac delta distribution.
Let $\map {\SS'} \R$ be the tempered distribution space.

Then:

$\delta \in \map {\SS'} \R$


Proof
Let $\phi \in \map \SS \R$ be a Schwartz test function.
Consider the mapping $\phi \stackrel \delta \longrightarrow \map \phi 0 : \map \SS \R \to \C$.
We have that the Schwartz space is a vector space.
Let $\phi$ be a linear superposition of Schwartz test functions.
Then $\map \phi 0$ is also a linear supperposition evaluated at $x = 0$.
Hence, the mapping $\phi \stackrel \delta \longrightarrow \map \phi 0 : \map \SS \R \to \C$ is linear.

Suppose, $\sequence {\phi_n}_{n \mathop \in \N}$ converges in $\map \SS \R$:

$\phi_n \stackrel \SS \longrightarrow \mathbf 0$
We have that:

$\ds \forall x \in \R : \forall l, m \in \N : 0 \le \size {x^l \map {\phi_n^{\paren m} } x} \le \sup_{x \mathop \in \R} \size {x^l \map {\phi_n^{\paren m} } x}$
Specifically, for $x = 0$, $l = 0$, and $m = 0$ it holds that:

$\ds 0 \le \size {\map {\phi_n} 0} \le \sup_{x \mathop \in \R} \size {\map {\phi_n} x}$
Taking the limit $n \to \infty$ and applying the squeeze theorem yields:

$\ds \lim_{n \mathop \to \infty} \map {\phi_n} 0 = 0$.
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 6.5$: A glimpse of distribution theory. Fourier transform of (tempered) distributions




