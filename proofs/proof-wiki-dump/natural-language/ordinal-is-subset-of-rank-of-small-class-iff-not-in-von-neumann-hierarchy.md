# 

Source: https://proofwiki.org/wiki/Ordinal_is_Subset_of_Rank_of_Small_Class_iff_Not_in_Von_Neumann_Hierarchy



Theorem
Let $x$ be an ordinal.
Let $S$ be a small class.
Let $\map V x$ denote the von Neumann hierarchy on the ordinal $x$.

Then $x$ is a subset of the rank of $S$ if and only if $S \notin \map V x$.


Proof
 This page is beyond the scope of ZFC, and should not be used in anything other than the theory in which it resides.
If you see any proofs that link to this page, please insert this template at the top.
If you believe that the contents of this page can be reworked to allow ZFC, then you can discuss it at the talk page.


Necessary Condition
Let $x \subseteq \map {\operatorname{rank} } S$.
Then by Von Neumann Hierarchy Comparison:

$S \in \map V x \implies S \in \map V {\map {\operatorname{rank} } S}$
But by Ordinal Equal to Rank:

$S \notin \map V {\map {\operatorname{rank} } S}$
By contraposition:

$S \notin \map V x$
$\Box$


Sufficient Condition
Let $S \notin \map V x$.
Then:














\(\ds S\)

\(\in\)







\(\ds \map V {\map {\operatorname{rank} } S + 1}\)





Ordinal Equal to Rank








\(\ds \leadsto \ \ \)





\(\ds \map V {\map {\operatorname{rank} } S + 1}\)

\(\nsubseteq\)







\(\ds \map V x\)





Rule of Transposition








\(\ds \leadsto \ \ \)





\(\ds \map {\operatorname{rank} } S + 1\)

\(\nsubseteq\)







\(\ds x\)





Von Neumann Hierarchy Comparison








\(\ds \leadsto \ \ \)





\(\ds x\)

\(\in\)







\(\ds \map {\operatorname{rank} } S + 1\)





Transitive Set is Proper Subset of Ordinal iff Element of Ordinal and Ordinal Membership is Trichotomy








\(\ds \leadsto \ \ \)





\(\ds x\)

\(\subseteq\)







\(\ds \map {\operatorname{rank} } S\)





Definition of Successor Set



$\blacksquare$


Sources
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 9.15 \ (3)$




