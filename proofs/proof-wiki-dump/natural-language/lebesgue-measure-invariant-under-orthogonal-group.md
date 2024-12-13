# 

Source: https://proofwiki.org/wiki/Lebesgue_Measure_Invariant_under_Orthogonal_Group

Theorem
Let $M \in \map {\mathrm O} {n, \R}$ be an orthogonal matrix.
Let $\lambda^n$ be $n$-dimensional Lebesgue measure.

Then the pushforward measure $M_* \lambda^n$ equals $\lambda^n$.


Proof
By Orthogonal Group is Subgroup of General Linear Group, $M \in \GL {n, \R}$.
From Pushforward of Lebesgue Measure under General Linear Group, it follows that:

$M_* \lambda^n = \size {\det M^{-1} } \lambda^n$
Since $M^{-1} \in \map {\mathrm O} {n, \R}$ by Orthogonal Group is Group, Determinant of Orthogonal Matrix applies to yield:

$\size {\det M^{-1} } = 1$

Hence the result.
$\blacksquare$


Work In ProgressIn particular: In order to avoid circularity (through Pushforward of Lebesgue Measure under General Linear Group and Determinant as Volume of Parallelotope) the direct proof Schilling produces also needs to be coveredYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by completing it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{WIP}} from the code.
Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $7.9$




