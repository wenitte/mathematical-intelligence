# 

Source: https://proofwiki.org/wiki/Bounds_for_Rank_of_Subset

Theorem
Let $M = \struct {S, \mathscr I}$ be a matroid.
Let $\rho: \powerset S \to \Z$ be the rank function of $M$.
Let $A \subseteq S$ be subset of $S$.

Then:

$0 \le \map \rho A \le \size A$


Proof
By definition of the rank function:














\(\ds \map \rho A\)

\(=\)







\(\ds \max \set {\size X : X \subseteq A \land X \in \mathscr I}\)










From Cardinality of Subset of Finite Set:

$\forall X \subseteq A : \size X \le \size A$
In particular:

$\forall X \subseteq A : X \in \mathscr I$ then $\size X \le \size A$
From Max Operation Yields Supremum of Operands:

$\max \set {\size X : X \subseteq A \land X \in \mathscr I} \le \size A$

From Empty Set is Subset of All Sets:

$\O \subseteq A$
From Cardinality of Empty Set:

$\size \O = 0$
By matroid axiom $(\text I 1)$:

$\O \in \mathscr I$
From Max Operation Yields Supremum of Operands:

$0 \le \max \set {\size X : X \subseteq A \land X \in \mathscr I}$

It follows that:

$0 \le \map \rho A \le \size A$
$\blacksquare$


Sources
1976: Dominic Welsh: Matroid Theory ... (previous) ... (next) Chapter $1.$ $\S 6.$ Properties of the rank function




