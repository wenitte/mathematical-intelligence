# 

Source: https://proofwiki.org/wiki/Set_has_Rank

Theorem
Let $S$ be a set.

Then $S$ has a rank.


Proof 1
The proof shall proceed by Epsilon Induction on $S$.

Suppose that all the elements $a \in S$ have a rank.
That is, $a \in \map V x$ for some $x$.
Let:

$\ds \map F a = \inf \set {x \in \On : a \in \map V x}$
be the rank of $a$.
Let:

$\ds y = \sup \set {\map F a : a \in S}$
be the least level of the Von Neumann Hierarchy containing all elements of $S$.

Then, for any $a \in S$:














\(\ds a\)

\(\in\)







\(\ds \map V {\map F a}\)





Definition of $F$








\(\ds \leadsto \ \ \)





\(\ds a\)

\(\in\)







\(\ds \map V y\)





Definition of $y$








\(\ds \leadsto \ \ \)





\(\ds S\)

\(\subseteq\)







\(\ds \map V y\)





Definition of Subset








\(\ds \leadsto \ \ \)





\(\ds S\)

\(\in\)







\(\ds \powerset {\map V y}\)





Definition of Power Set








\(\ds \leadsto \ \ \)





\(\ds S\)

\(\in\)







\(\ds \map V {y + 1}\)





Definition of Von Neumann Hierarchy



Therefore $S \in \map V z$ for some ordinal $z = y + 1$.
Thus by Epsilon Induction every set has a rank.
$\blacksquare$


Proof 2
 This page is beyond the scope of ZFC, and should not be used in anything other than the theory in which it resides.
If you see any proofs that link to this page, please insert this template at the top.
If you believe that the contents of this page can be reworked to allow ZFC, then you can discuss it at the talk page.

Let $G$ be the smallest transitive set containing $S$ as a subset.
By Set Contained in Smallest Transitive Set, $G$ must exist.
By Transitive Set Contained in Von Neumann Hierarchy Level, $G \subseteq V_i$ for some ordinal $i$.
Therefore:

$G \in V_{i + 1}$

This article, or a section of it, needs explaining.In particular: Proper Well-Ordering determines Smallest Elements only applies once it's been shown that initial segments are setsYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
We have that Ordinals are Well-Ordered
From Proper Well-Ordering determines Smallest Elements, there exists a smallest ordinal $k$ such that $G \in V_{k + 1}$.
Hence, by definition, $G$ has rank $k$.
$\blacksquare$





