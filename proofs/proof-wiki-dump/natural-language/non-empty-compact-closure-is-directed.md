# 

Source: https://proofwiki.org/wiki/Non-Empty_Compact_Closure_is_Directed

Theorem
Let $L = \left({S, \vee, \preceq}\right)$ be a join semilattice.
Let $x \in S$ such that

$x^{\mathrm{compact} }$ is a non-empty set,
where $x^{\mathrm{compact} }$ denotes the compact closure of $x$.
Then :$x^{\mathrm{compact} }$ is directed.


Proof
Thus by assumption:

$x^{\mathrm{compact} }$ is a non-empty set.
Let $y, z \in x^{\mathrm{compact} }$.
By definition of compact closure:

$y \preceq x$, $z \preceq x$, and $y$ and $z$ are compact.
By definition of compact element:

$y \ll y$ and $z \ll z$
where $\ll$ denotes the way below relation.
By Way Below is Congruent for Join:

$y \vee z \ll y \vee z$
By definition:

$y \vee z$ is a compact element
By definition of supremum:

$y \vee z \preceq x$
Thus by definition of compact closure:

$y \vee z \in x^{\mathrm{compact} }$
Thus by Join Succeeds Operands:

$y \preceq y \vee z$ and $z \preceq y \vee z$
$\blacksquare$


Sources
Mizar article WAYBEL14:funcreg 1




