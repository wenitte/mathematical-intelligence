# 

Source: https://proofwiki.org/wiki/Filter_Containing_Complements_is_Not_Proper

Theorem
Let $L = \struct {S, \lor, \land, \preceq}$ be a bounded lattice.
Let $F \subseteq S$ be a filter on $L$.
Suppose there exist $a, b \in F$ such that:

$b$ is a complement of $a$.

Then:

$F = S$


Proof
By filter axiom $\paren 2$:

$\exists c \in F: c \preceq a \land c \preceq b$
By definition of complement:

$b \land a = \bot$
Thus, by definition of meet:

$c \preceq \bot$
Therefore:










\(\ds \forall x \in S: \, \)



\(\ds x\)

\(\succeq\)







\(\ds \bot\)





Definition of Bottom of Lattice














\(\ds \)

\(\succeq\)







\(\ds c\)














\(\ds \leadsto \ \ \)

\(\ds \forall x \in S: \, \)



\(\ds x\)

\(\in\)







\(\ds F\)





Filter Axiom $\paren 3$








\(\ds \leadsto \ \ \)





\(\ds S\)

\(\subseteq\)







\(\ds F\)









Hence, by definition of set equality:

$F = S$
$\blacksquare$





