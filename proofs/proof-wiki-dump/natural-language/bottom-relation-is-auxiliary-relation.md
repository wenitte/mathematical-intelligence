# 

Source: https://proofwiki.org/wiki/Bottom_Relation_is_Auxiliary_Relation

Theorem
Let $L = \left({S, \vee, \preceq}\right)$ be a bounded below join semilattice.
Let $B = \left\{ {\left({\bot, x}\right): x \in S}\right\}$
where $\bot$ denotes the smallest element in $L$.

Then

$B$ is auxiliary relation.


Proof
By definition of smallest element:

$\forall x \in S: \bot \preceq x$
Thus by definition of $B$:

$\forall x, y \in S: \left({x, y}\right) \in B \implies x \preceq y$
We will prove that

$\forall x, y, z, u \in S: x \preceq y \land \left({y, z}\right) \in B \land z \preceq u \implies \left({x, u}\right) \in B$
Let $x, y, z, u \in S$ such that

$x \preceq y \land \left({y, z}\right) \in B \land z \preceq u$
By definition of $B$:

$y = \bot$
By definition of smallest element:

$\bot \preceq x$
By definition of antisymmetry:

$x = \bot$
Thus by definition of $B$:

$\left({x, u}\right) \in B$
$\Box$
We will prove that

$\forall x, y, z \in S: \left({x, z}\right) \in B \land \left({y, z}\right) \in B \implies \left({x \vee y, z}\right) \in B$
Let $x, y, z \in S$ such that

$\left({x, z}\right) \in B \land \left({y, z}\right) \in B$
By definition of $B$:

$x = y = \bot$
By Join is Idempotent:

$x \vee y = \bot$
Thus by definition of $B$:

$\left({x \vee y, z}\right) \in B$
$\Box$
Thus by definition of $B$:

$\forall x \in S: \left({\bot, x}\right) \in B$
Thus by definition:

$B$ is auxiliary relation.
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_4:funcreg 7




