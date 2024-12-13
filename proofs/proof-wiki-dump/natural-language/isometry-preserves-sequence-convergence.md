# 

Source: https://proofwiki.org/wiki/Isometry_Preserves_Sequence_Convergence


This page has been identified as a candidate for refactoring of medium complexity.In particular: It's probably worth establishing the result for pseudometric spaces into a separate areaUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
Theorem
Let $M_1 = \struct {S_1, d_1}$ and $M_2 = \struct {S_2, d_2}$ both be metric spaces or pseudometric spaces.
Let $\phi: S_1 \to S_2$ be an isometry.
Let $\sequence {x_n}$ be an infinite sequence in $S_1$.
Suppose that $\sequence {x_n}$ converges to a point $p \in S_1$.

Then $\sequence {\map \phi {x_n}}$ converges to $\map \phi p$.


Proof 1













\(\ds \)

\(\)







\(\ds \lim_{n \mathop \to \infty} \map {d_2} {\map \phi {x_n}, \map \phi p}\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \map {d_1} {x_n, p}\)





Definition 1 of Isometry (Metric Spaces)














\(\ds \)

\(=\)







\(\ds 0\)





Definition 3 of Convergent Sequence



Hence, by definition, $\sequence {\map \phi {x_n}}$ converges to $\map \phi p$.
$\blacksquare$


Proof 2

This theorem requires a proof.In particular: proof from the fact that an isometry is a homeomorphismYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by crafting such a proof.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{ProofWanted}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.




