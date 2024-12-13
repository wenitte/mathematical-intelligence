# 

Source: https://proofwiki.org/wiki/Rank_of_Set_Determined_by_Members

Theorem
Let $S$ be a set.
Let $\map {\operatorname{rank} } S$ denote the rank of $S$.

Then:

$\map {\operatorname{rank} } S = \bigcap \set {x \in \On: \forall y \in S: \map {\operatorname{rank} } y < x}$


Proof
 This page is beyond the scope of ZFC, and should not be used in anything other than the theory in which it resides.
If you see any proofs that link to this page, please insert this template at the top.
If you believe that the contents of this page can be reworked to allow ZFC, then you can discuss it at the talk page.

Let:

$T = \bigcap \set {x \in \On: \forall y \in S: \map {\operatorname{rank} } y < x}$

Let $y \in S$.
Then by Membership Rank Inequality:

$\map {\operatorname{rank} } x < \map {\operatorname{rank} } S$

This article, or a section of it, needs explaining.In particular: $x$ or $y$?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Therefore:

$T \subseteq \map {\operatorname{rank} } S$

Conversely, take any $x \in T$.
By the definition of $T$:

$\forall y \in S: \map {\operatorname{rank} } y < x$
From Ordinal is Subset of Rank of Small Class iff Not in Von Neumann Hierarchy:

$\forall y \in S: y \in \map V x$
where $\map V x$ denotes the von Neumann hierarchy.
Therefore by the definition of subset:

$S \subseteq \map V x$
By the definition of rank.

$\map {\operatorname{rank} } S \le x$

Therefore:

$\map {\operatorname{rank} } S = T$
$\blacksquare$


Sources
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 9.17$




