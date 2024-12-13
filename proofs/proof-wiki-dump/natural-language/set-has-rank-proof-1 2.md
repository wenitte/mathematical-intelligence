# 

Source: https://proofwiki.org/wiki/Set_has_Rank/Proof_1

Theorem
Let $S$ be a set.

Then $S$ has a rank.


Proof
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


Sources
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 9.13$




