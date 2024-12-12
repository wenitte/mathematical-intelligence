# 

Source: https://proofwiki.org/wiki/Auxiliary_Approximating_Relation_has_Quasi_Interpolation_Property

Theorem
Let $L = \struct {S, \vee, \wedge, \preceq}$ be a complete lattice.
Let $x, z \in S$.
Let $\RR$ be an auxiliary approximating relation on $S$ such that

$\tuple {x, z} \in \RR \land x \ne z$

Then:

$\exists y \in S: x \preceq y \land \tuple {y, z} \in \RR \land x \ne y$


Proof
By definition of auxiliary relation:

$x \preceq z$
By definition of $\prec$:

$x \prec z$
By definition of antisymmetry:

$z \nprec x$
Then:

$z \npreceq x$
By Not Preceding implies Approximating Relation and not Preceding:

$\exists u \in S: \tuple {u, z} \land u \npreceq x$
Define $y = x \vee u$.
Thus by Join Succeeds Operands:

$x \preceq y$
Thus by definition of auxiliary relation:

$\tuple {y, z} \in \RR$
Thus by Preceding iff Join equals Larger Operand:

$x \ne y$
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_4:49




