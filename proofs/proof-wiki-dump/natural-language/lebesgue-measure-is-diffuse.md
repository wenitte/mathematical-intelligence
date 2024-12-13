# 

Source: https://proofwiki.org/wiki/Lebesgue_Measure_is_Diffuse

Theorem
Let $\lambda^n$ be Lebesgue measure on $\R^n$.

Then $\lambda^n$ is a diffuse measure.


Proof
A singleton $\set {\mathbf x} \subseteq \R^n$ is seen to be closed by combining:

Euclidean Space is Complete Metric Space
Metric Space is Hausdorff
Corollary to Compact Subspace of Hausdorff Space is Closed

Hence by Closed Set Measurable in Borel Sigma-Algebra:

$\set {\mathbf x} \in \map \BB {\R^n}$
where $\map \BB {\R^n}$ is the Borel $\sigma$-algebra on $\R^n$.

Write $\mathbf x + \epsilon = \tuple {x_1 + \epsilon, \ldots, x_n + \epsilon}$ for $\epsilon > 0$.
Then:

$\ds \set {\mathbf x} = \bigcap_{m \mathop \in \N} \horectr {\mathbf x} {\mathbf x + \frac 1 m}$
where $\\horectr {\mathbf x} {\mathbf x + \dfrac 1 m}$ is a half-open $n$-rectangle.


This article contains statements that are justified by handwavery.In particular: justify equalityYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding precise reasons why such statements hold.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Handwaving}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
By definition of Lebesgue measure, we have (for all $m \in \N$):

$\ds \map {\lambda^n} {\horectr {\mathbf x} {\mathbf x + \frac 1 m} } = \prod_{i \mathop = 1}^n \frac 1 m = m^{-n}$
From Characterization of Measures, it follows that:

$\ds \map {\lambda^n} {\set {\mathbf x} } = \lim_{m \mathop \to \infty} m^{-n}$
which equals $0$ from Sequence of Powers of Reciprocals is Null Sequence.

Therefore, for each $\mathbf x \in \R^n$:

$\map {\lambda^n} {\set {\mathbf x} } = 0$
that is, $\lambda^n$ is a diffuse measure.
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $\S 4$: Problem $11 \ \text{(i)}$
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $\S 6$: Problem $5 \ \text{(i)}$




