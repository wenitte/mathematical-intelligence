# 

Source: https://proofwiki.org/wiki/Intersection_of_Upper_Closures_is_Upper_Closure_of_Join_Operands

Theorem
Let $L = \struct {S, \vee, \preceq}$ be a join semilattice.
Let $x, y \in S$.

Then $\paren {x \vee y}^\succeq = x^\succeq \cap y^\succeq$


Proof
We will prove that:

$\paren {x \vee y}^\succeq \subseteq x^\succeq \cap y^\succeq$
Let $a \in \paren {x \vee y}^\succeq$
By definition of upper closure of element:

$x \vee y \preceq a$
By Join Succeeds Operands:

$x \preceq x \vee y$ and $y \preceq x \vee y$
By definition of transitivity:

$x \preceq a$ and $y \preceq a$
By definition of upper closure of element:

$a \in x^\succeq$ and $a \in y^\succeq$
Thus by definition of intersection:

$a \in x^\succeq \cap y^\succeq$
$\Box$

We will prove that:

$x^\succeq \cap y^\succeq \subseteq \paren {x \vee y}^\succeq$
Let $a \in x^\succeq \cap y^\succeq$
Thus bt definition of intersection:

$a \in x^\succeq$ and $a \in y^\succeq$
By definition of upper closure of element:

$x \preceq a$ and $y \preceq a$
By definitions of supremum and Upper bound:

$x \vee y \preceq a$
Thus by definition of upper closure of element:

$a \in \paren {x \vee y}^\succeq$
$\Box$

Hence by definition of set equality:

$\paren {x \vee y}^\succeq = x^\succeq \cap y^\succeq$
$\blacksquare$


Sources
Mizar article WAYBEL14:4




