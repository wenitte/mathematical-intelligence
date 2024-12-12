# 

Source: https://proofwiki.org/wiki/Class_such_that_Every_Transitive_Subset_is_Element_of_it_Contains_All_Ordinals

Theorem
Let $K$ be a class.
Let $K$ be such that every transitive subset of $K$ is an element of $K$.

Then every ordinal is an element of $K$.


Proof
Let us assume the hypothesis.
Let $\On$ denote the class of all ordinals.
From Well-Ordering of Class of All Ordinals under Subset Relation, $\On$ is well-ordered under $\subseteq$.
Hence we can use the First Principle of Transfinite Induction.
Let $\alpha$ be an ordinal such that every ordinal less than $\alpha$ is an element of $K$.
Thus $\alpha \subseteq K$.
As Ordinal is Transitive, it follows by hypothesis that:

$\alpha \in K$
So if all ordinals less than $\alpha$ are elements of $K$, then so is $\alpha$.
Hence by the First Principle of Transfinite Induction, all ordinals are in $K$.
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $5$: Ordinal Numbers: $\S 2$ Ordinals and transitivity: Theorem $2.4$




