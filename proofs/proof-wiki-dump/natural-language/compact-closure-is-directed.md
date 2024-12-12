# 

Source: https://proofwiki.org/wiki/Compact_Closure_is_Directed

Theorem
Let $L = \left({S, \vee, \preceq}\right)$ be a bounded below join semilattice.
Let $x \in S$.

Then $x^{\mathrm{compact} }$ is directed
where $x^{\mathrm{compact} }$ denotes the compact closure of $x$.


Proof
By Bottom in Compact Closure:

$\bot \in x^{\mathrm{compact} }$
where $\bot$ denotes the smallest element in $L$.
Thus by definition:

$x^{\mathrm{compact} }$ is non-empty.
Let $y, z \in x^{\mathrm{compact} }$
By definition of compact closure:

$y$ and $z$ are compact elements and $y \preceq x$ and $z \preceq x$
By definitions of supremum and upper bound:

$y \vee z \preceq x$
By definition of compact element:

$y \ll y$ and $z \ll z$
where $\ll$ denotes the way below relation.
By Join Succeeds Operands:

$y \preceq y \vee z$ and $z \preceq y \vee z$
By Preceding and Way Below implies Way Below and definition of reflexivity:

$y \ll y \vee z$ and $z \ll y \vee z$
By Join is Way Below if Operands are Way Below:

$y \vee z \ll y \vee z$
By definition:

$y \vee z$ is compact element.
By definition of compact closure:

$y \vee z \in x^{\mathrm{compact} }$
Thus

$\exists v \in x^{\mathrm{compact} }: y \preceq v \land z \preceq v$
$\blacksquare$


Sources
Mizar article WAYBEL14:funcreg 1




