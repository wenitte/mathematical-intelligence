# 

Source: https://proofwiki.org/wiki/Rank_of_Ordinal

Theorem
Let $x$ be an ordinal.
Let $\map {\operatorname {rank} } x$ denote the rank of $x$.

Then:

$\map {\operatorname {rank} } x = x$


Proof
 This page is beyond the scope of ZFC, and should not be used in anything other than the theory in which it resides.
If you see any proofs that link to this page, please insert this template at the top.
If you believe that the contents of this page can be reworked to allow ZFC, then you can discuss it at the talk page.

The proof shall proceed by Transfinite Induction (Strong Induction) on $x$.
Suppose $\forall y \in x: \map {\operatorname {rank} } y = y$.

Then:














\(\ds \map {\operatorname {rank} } x\)

\(=\)







\(\ds \bigcap \set {z \in \On: \forall y \in x: y < z}\)





Rank of Set Determined by Members














\(\ds \)

\(=\)







\(\ds \bigcap \set {z \in \On: x \subseteq z}\)





Definition of Subset














\(\ds \)

\(=\)







\(\ds x\)









$\blacksquare$


Sources
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 9.18$




