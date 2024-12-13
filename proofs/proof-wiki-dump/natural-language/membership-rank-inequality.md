# 

Source: https://proofwiki.org/wiki/Membership_Rank_Inequality

Theorem
Let $S$ and $T$ be sets.
Let $\map {\operatorname{rank} } S$ denote the rank of $S$.

Then:

$S \in T \implies \map {\operatorname{rank} } S < \map {\operatorname{rank} } T$


Proof
 This page is beyond the scope of ZFC, and should not be used in anything other than the theory in which it resides.
If you see any proofs that link to this page, please insert this template at the top.
If you believe that the contents of this page can be reworked to allow ZFC, then you can discuss it at the talk page.

By Ordinal Equal to Rank:

$T \in \map V {\map {\operatorname{rank} } T + 1}$
By the definition of rank:

$T \subseteq \map V {\map {\operatorname{rank} } T}$

Since $S \in T$:

$S \in \map V {\map {\operatorname{rank} } T}$
By Ordinal is Subset of Rank of Small Class iff Not in Von Neumann Hierarchy:

$\map {\operatorname{rank} } T \nsubseteq \map {\operatorname{rank} } S$
Therefore by Ordinal Membership is Trichotomy and Transitive Set is Proper Subset of Ordinal iff Element of Ordinal:

$\map {\operatorname{rank} } S < \map {\operatorname{rank} } T$
$\blacksquare$


Sources
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 9.16$




