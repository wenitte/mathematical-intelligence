# 

Source: https://proofwiki.org/wiki/Relation_Segment_of_Auxiliary_Relation_is_Ideal



Theorem
Let $L = \struct {S, \vee, \preceq}$ be a bounded below join semilattice.
Let $R$ be auxiliary relation on $S$.
Let $x \in S$.

Then

$x^R$ is ideal in $L$
where $x^R$ denotes the $R$-segment of $x$.


Proof
Non-empty
By definition of auxiliary relation:

$\tuple {\bot, x} \in R$
where $\bot$ denotes the smallest element in $L$.
By definition of relation segment:

$\bot \in x^R$
Thus by definition:

$x^R$ is non-empty.
$\Box$


Directed
Let $y, z \in x^R$.
By definition of relation segment:

$\tuple {y, x} \in R$ and $\tuple {z, x} \in R$
By definition of auxiliary relation:

$\tuple {y \vee z, x} \in R$
By definition of relation segment:

$y \vee z \in x^R$
Thus by Join Succeeds Operands:

$y \preceq y \vee z$ and $z \preceq y \vee z$
Thus by definition:

$x^R$ is directed.
$\Box$


Lower
Let $y \in x^R, z \in S$ such that

$z \preceq y$
By definition of relation segment:

$\tuple {y, x} \in R$
By definition of reflexivity:

$x \preceq x$
By definition of auxiliary relation:

$\tuple {z, x} \in R$
Thus by definition of relation segment:

$z \in x^R$
Thus by definition:

$x^R$ is lower section.
$\Box$

Thus by definition:

$x^R$ is ideal in $L$.
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_4:funcreg 11
Mizar article WAYBEL_4:funcreg 12
Mizar article WAYBEL_4:funcreg 13




