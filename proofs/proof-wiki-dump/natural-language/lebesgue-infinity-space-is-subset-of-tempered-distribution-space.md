# 

Source: https://proofwiki.org/wiki/Lebesgue_Infinity-Space_is_Subset_of_Tempered_Distribution_Space

Theorem
Let $\map {L^\infty} \R$ be the Lebesgue infinity-space.
Let $\map {\SS'} \R$ be the tempered distribution space.

Then in the distributional sense it holds that:

$\map {L^\infty} \R \subseteq \map {\SS'} \R$
That is, every distribution defined by an element of $\map {L^\infty} \R$ is a tempered distribution.


Proof
Let $f \in \map {L^\infty} \R$.
Let $\phi \in \map \SS \R$ be a Schwartz test function.
Let $T_f : \map \SS \R \to \R$ be a mapping such that:

$\ds \map {T_f} \phi = \int_\R \map f x \map \phi x \rd x$
Then:














\(\ds \size {\map {T_f} \phi}\)

\(=\)







\(\ds \size {\int_\R \map f x \map \phi x \rd x}\)




















\(\ds \)

\(\le\)







\(\ds \norm f_\infty \int_{-\infty}^\infty \size {\map \phi x} \rd x\)





Definition of Supremum Norm














\(\ds \)

\(=\)







\(\ds \norm f_\infty \int_{-\infty}^\infty \frac 1 {1 + x^2} \paren {\size {\map \phi x} + x^2 \size {\map \phi x} } \rd x\)




















\(\ds \)

\(\le\)







\(\ds \norm f_\infty \paren {\int_{-\infty}^\infty \frac 1 {1 + x^2} \rd x} \paren {\norm \phi_\infty + \norm {x^2 \phi}_\infty}\)









Let $\sequence {\phi_n}_{n \mathop \in \N}$ be a sequence in $\map \SS \R$.
Suppose, $\sequence {\phi_n}_{n \mathop \in \N}$ converges in $\map \SS \R$ to $\mathbf 0$:

$\phi_n \stackrel \SS \longrightarrow \mathbf 0$
That is:

$\ds \forall l, m \in \N : \lim_{n \mathop \to \infty} \sup_{x \mathop \in \R} \size {x^l \map {\phi_n^{\paren m} } x} = 0$
Specifically:

$\ds \lim_{n \mathop \to \infty} \sup_{x \mathop \in \R} \size {\map {\phi_n} x} = 0$
$\ds \lim_{n \mathop \to \infty} \sup_{x \mathop \in \R} \size {x^2 \map {\phi_n} x} = 0$

Then:














\(\ds \lim_{n \mathop \to \infty} \map {T_f} {\phi_n}\)

\(\le\)







\(\ds \norm f_\infty \paren {\int_{-\infty}^\infty \frac 1 {1 + x^2} \rd x} \lim_{n \mathop \to \infty} \paren {\norm {\phi_n}_\infty + \norm {x^2 \phi_n}_\infty}\)




















\(\ds \)

\(=\)







\(\ds 0\)









On the other hand:

$\map {T_f} {\mathbf 0} = 0$
where $\mathbf 0$ denotes the zero Schwartz test function.
Hence:

$T_f \in \map {\SS'} \R$
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 6.5$: A glimpse of distribution theory. Fourier transform of (tempered) distributions




