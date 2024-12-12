# 

Source: https://proofwiki.org/wiki/Countable_Set_is_Null_Set_under_Lebesgue_Measure

Theorem
Let $S \subseteq \R$ be a countable set.

Then $\map \lambda S = 0$, where $\lambda$ is Lebesgue measure.
That is, $S$ is a $\lambda$-null set.


Proof
By Surjection from Natural Numbers iff Countable, there exists a surjection $f: \N \to S$.
It follows that:

$S = \ds \bigcup_{n \mathop \in \N} \set{\map f n}$

As Lebesgue Measure is Diffuse, it holds that:

$\forall n \in \N: \map \lambda {\set{\map f n}} = 0$
Thus, by Null Sets Closed under Countable Union, it follows that:

$\map \lambda S = 0$
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $\S 10$: Problem $10.4$




