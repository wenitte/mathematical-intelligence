# 

Source: https://proofwiki.org/wiki/Existence_and_Uniqueness_of_Sigma-Algebra_Generated_by_Collection_of_Mappings

Theorem
Let $I$ be an indexing set.
Let $\family {\struct {X_i, \Sigma_i} }_{i \mathop \in I}$ be a family of measurable spaces.
Let $X$ be a set.
Let $\family {f_i: X \to X_i}_{i \mathop \in I}$ be a family of mappings.

Then $\map \sigma {f_i: i \in I}$, the $\sigma$-algebra generated by $\family {f_i}_{i \mathop \in I}$, exists and is unique.


Proof
By Characterization of Sigma-Algebra Generated by Collection of Mappings:

$\ds \map \sigma {f_i: i \in I} = \map \sigma {\bigcup_{i \mathop \in I} \map {f_i^{-1} } {\Sigma_i} }$
where the second is a $\sigma$-algebra generated by a collection of subsets.

The result follows from applying Existence and Uniqueness of Sigma-Algebra Generated by Collection of Subsets.
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $7.5$




