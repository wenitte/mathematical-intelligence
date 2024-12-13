# 

Source: https://proofwiki.org/wiki/Lebesgue_1-Space_is_Subset_of_Tempered_Distribution_Space

Theorem
Let $\map {L^1} \R$ be the Lebesgue $1$-space.
Let $\map {\SS'} \R$ be the tempered distribution space.

Then in the distributional sense:

$\map {L^1} \R \subseteq \map {\SS'} \R$
That is:

$T_f \subseteq \map {\SS'} \R$
where $f \in \map {L^1} \R$.


Proof
Let $f \in \map {L^1} \R$.
By definition of the Lebesgue space:

$\ds \norm f_1 = \int_\R \size {\map f x} \rd x < \infty$
where $\norm {\, \cdot \,}_1$ denotes the 1-seminorm.
Let $\phi \in \map \SS \R$ be a Schwartz test function.
Let $T_f : \map \SS \R \to \R$ be a functional such that:

$\ds \map {T_f} \phi = \int_\R \map f x \map \phi x \rd x$
By Integral Operator is Linear, $\map {T_f} \phi$ is linear with respect to both $f$ and $\phi$.
Furthermore:














\(\ds \size {\map {T_f} \phi}\)

\(=\)







\(\ds \size {\int_\R \map f x \map \phi x \rd x}\)




















\(\ds \)

\(\le\)







\(\ds \int_\R \size {\map f x} \size {\map \phi x} \rd x\)




















\(\ds \)

\(\le\)







\(\ds \sup_{x \mathop \in \R} \size {\map \phi x} \int_\R \size {\map f x} \rd x\)





Definition of Supremum of Real-Valued Function














\(\ds \)

\(=\)







\(\ds \norm f_1 \norm \phi_\infty\)





Definition of Supremum Norm on Space of Continuous on Closed Interval Real-Valued Functions 



Let $\sequence {\phi_n}_{n \mathop \in \N}$ be a sequence in the Schwartz space.
Suppose $\sequence {\phi_n}_{n \mathop \in \N}$ converges in $\map \SS \R$:

$\phi_n \stackrel \SS {\longrightarrow} \mathbf 0$
where $\mathbf 0$ denotes the zero Schwartz test function.
That is:

$\ds \forall l, m \in \N : \lim_{n \mathop \to \infty} \sup_{x \mathop \in \R} \size {x^l \map {\phi_n^{\paren m} } x} = 0$
Set $m = 0$ and $l = 0$.
Then:














\(\ds \lim_{n \mathop \to \infty} \norm {\phi_n}_\infty\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \sup_{x \mathop \in \R} \size {\map {\phi_n} x}\)




















\(\ds \)

\(=\)







\(\ds 0\)









Therefore:














\(\ds \lim_{n \mathop \to \infty} \size {\map {T_f} {\phi_n} }\)

\(\le\)







\(\ds \lim_{n \mathop \to \infty} \norm f_1 \norm {\phi_n}_\infty\)




















\(\ds \)

\(=\)







\(\ds 0\)









Thus:

$\ds \lim_{n \mathop \to \infty} \map {T_f} {\phi_n} = 0$
On the other hand:

$\map {T_f} {\mathbf 0} = 0$
Hence, from the definition of the tempered distribution it follows that:

$T_f \in \map {\SS'} \R$
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 6.5$: A glimpse of distribution theory. Fourier transform of (tempered) distributions




