# 

Source: https://proofwiki.org/wiki/Auxiliary_Relation_is_Transitive

Theorem
Let $\struct {S, \vee, \preceq}$ be a bounded below join semilattice.
Let $\RR$ be relation on $S$ satisfying conditions $(1)$ and $(2)$ of auxiliary relation.

Then

$\RR$ is a transitive relation.


Proof
Let $x, y, z \in S$ such that

$\tuple {x, y} \in \RR \land \tuple {y, z} \in \RR$
By definition of reflexivity:

$z \preceq z$
By condition $(1)$ of auxiliary relation:

$x \preceq y$
Thus by condition $(2)$ of auxiliary relation:

$\tuple {x, z} \in \RR$
Thus by definition

$\RR$ is a transitive relation.
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_4:Lm1
Mizar article WAYBEL_4:condreg 3




