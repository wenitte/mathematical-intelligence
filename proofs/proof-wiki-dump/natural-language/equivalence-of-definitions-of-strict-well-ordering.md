# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Strict_Well-Ordering



Theorem
The following definitions of the concept of Strict Well-Ordering are equivalent:

Definition 1
Let $\struct {S, \prec}$ be a relational structure such that $\prec$ is a strict total ordering.
Then $\prec$ is a strict well-ordering on $S$ if and only if $\prec$ is a strictly well-founded relation on $S$.

Definition 2
Let $\struct {S, \prec}$ be a relational structure.
Then $\prec$ is a strict well-ordering of $S$ if and only if:

$\prec$ is a connected relation on $S$
$\prec$ is strictly well-founded on $S$.


Proof
Let $A$ be a class.
Let $B$ be a non-empty subset of $A$.

Let $\prec$ be a relation on $A$.


Definition 1 implies Definition 2
Suppose that $\prec$ is a strictly well-founded strict total ordering of $A$.
By the definition of strict total ordering, $\prec$ connects $A$.
$\Box$


Definition 2 implies Definition 1
Suppose that $\prec$ connects $A$ and that $\prec$ is a strictly well-founded relation.
That is:

for any $x, y \in A$, either $x = y$, $x \prec y$, or $y \prec x$
whenever $T$ is a non-empty subset of $A$, $T$ has a strictly minimal element under $\prec$ .
$\prec$ is transitive:
Let $x, y, z \in A$.
Let $x \prec y$ and $y \prec z$.
Since $\prec$ connects $A$, either $x \prec z$ or $z \prec x$.
By Strictly Well-Founded Relation has no Relational Loops it is not the case that $x \prec y$, $y \prec z$ and $z \prec x$.
Thus we conclude that $x \prec z$.
As this holds for all such $x, y, z$, $\prec$ is transitive.
$\prec$ is antireflexive by Strictly Well-Founded Relation is Antireflexive.
Thus $\prec$ is a strict total ordering.
$\blacksquare$





