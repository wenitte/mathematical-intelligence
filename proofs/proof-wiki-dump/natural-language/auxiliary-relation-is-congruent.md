# 

Source: https://proofwiki.org/wiki/Auxiliary_Relation_is_Congruent

Theorem
Let $\struct {S, \vee, \preceq}$ be a bounded below join semilattice.
Let $\RR$ be relation on $S$ satisfying conditions $(2)$ and $(3)$ of auxiliary relation.

Then:

$\forall x, y, z, u \in S: \tuple {x, z} \in \RR \land \tuple {y, u} \in \RR \implies \tuple {x \vee y, z \vee u} \in \RR$


Proof
Let $x, y, z, u \in S$ such that:

$\tuple {x, z} \in \RR \land \tuple {y, u} \in \RR$
By definition of reflexivity:

$x \preceq x$ and $y \preceq y$
By Join Succeeds Operands:

$z \preceq z \vee u$ and $u \preceq z \vee u$
By condition $(2)$ of auxiliary relation:

$\tuple {x, z \vee u} \in \RR$ and $\tuple {y, z \vee u} \in \RR$
Thus by condition $(3)$ of auxiliary relation:

$\tuple {x \vee y, z \vee u} \in \RR$
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_4:1




