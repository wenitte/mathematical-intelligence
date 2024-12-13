# 

Source: https://proofwiki.org/wiki/Intersection_of_Auxiliary_Relations_is_Auxiliary_Relation

Theorem
Let $L = \struct {S, \vee, \preceq}$ be a bounded below join semilattice.
Let $\FF$ be a non-empty set of auxiliary relations on $S$.

Then

$\ds \bigcap \FF$ is auxiliary relation.


Proof
By definition of non-empty set:

$\exists \RR: \RR \in \FF$
We will prove that:

$\ds \forall x, y \in S: \tuple {x, y} \in \bigcap \FF \implies x \preceq y$
Let $x, y \in S$ such that:

$\ds \tuple {x, y} \in \bigcap \FF$
By definition of intersection:

$\tuple {x, y} \in \RR$
Thus by definition of auxiliary relation:

$x \preceq y$
$\Box$

We will prove that:

$\ds \forall x, y, z, u \in S: x \preceq y \land \tuple {y, z} \in \bigcap \FF \land z \preceq u \implies \tuple {x, u} \in \bigcap \FF$
Let $x, y, z, u \in S$ such that:

$\ds x \preceq y \land \tuple {y, z} \in \bigcap \FF \land z \preceq u$
By definition of intersection:

$\forall r \in \FF: \tuple {y, z} \in r$
By definition of auxiliary relation:

$\forall r \in \FF: \tuple {x, u} \in r$
Thus by definition of intersection:

$\ds \tuple {x, u} \in \bigcap \FF$
$\Box$

We will prove that:

$\ds \forall x, y, z \in S: \tuple {x, z} \in \bigcap \FF \land \tuple {y, z} \in \bigcap \FF \implies \tuple {x \vee y, z} \in \bigcap \FF$
Let $x, y, z \in S$ such that:

$\ds \tuple {x, z} \in \bigcap \FF \land \tuple {y, z} \in \bigcap \FF$
By definition of intersection:

$\forall r \in \FF: \tuple {x, z} \in r \land \tuple {y, z} \in r$
By definition of auxiliary relation:

$\forall r \in \FF: \tuple {x \vee y, z} \in r$
Thus by definition of intersection:

$\tuple {x \vee y, z} \in \bigcap \FF$
$\Box$

By definition of auxiliary relation:

$\forall x \in S: \forall r \in \FF: \tuple {\bot, x} \in r$
Thus by definition of intersection:

$\ds \forall x \in S: \tuple {\bot, x} \in \bigcap \FF$
Thus by definition:

$\ds \bigcap \FF$ is auxiliary relation.
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_4:11




