# 

Source: https://proofwiki.org/wiki/Preceding_is_Auxiliary_Relation

Theorem
Let $\left({S, \vee, \preceq}\right)$ be a bounded below join semilattice.

Then

$\preceq$ is an auxiliary relation.


Proof
$\forall x, y \in S: x \preceq y \implies x \preceq y$
Then condition $(1)$ of auxiliary relation is satisfied.
By definition of transitivity:

$\forall x, y, z, u \in S: x \preceq y \preceq z \preceq u \implies x \preceq u$
Then the condition $(2)$ of auxiliary relation is satisfied.
By  definition of supremum:

$\forall x, y, z \in S: x \preceq z \land y \preceq z \implies x \vee y \preceq z$
Then the condition $(3)$ of auxiliary relation is satisfied.
By definition of smallest element:

$\forall x \in S: \bot \preceq x$
Then the condition $(4)$ of auxiliary relation is satisfied.
Thus the result by definition auxiliary relation.
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_4:funcreg 4




