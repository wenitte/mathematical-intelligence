# 

Source: https://proofwiki.org/wiki/Characterization_of_Prime_Ideal


It has been suggested that this page be renamed.In particular: to include the context of Order TheoryTo discuss this page in more detail, feel free to use the talk page.


Theorem
Let $L = \struct {S, \wedge, \preceq}$ be a meet semilattice.
Let $I$ be an proper ideal in $L$.

Then

$I$ is a prime ideal
if and only if:

$\forall x, y \in S: \paren {x \wedge y \in I \implies x \in I \lor y \in I}$


Proof
Sufficient Condition
Assume that

$I$ is a prime ideal.
Let $x, y \in S$ such that

$x \wedge y \in I$
By definition of relative complement:

$x \wedge y \notin \relcomp S I$
By definition of prime ideal:

$\relcomp S I$ is filter in $L$.
By Filtered in Meet Semilattice:

$x \notin \relcomp S I$ or $y \notin \relcomp S I$
Thus by definition of relative complement:

$x \in I$ or $y \in I$
$\Box$


Necessary Condition
Assume that

$\forall x, y \in S: \paren {x \wedge y \in I \implies x \in I \lor y \in I}$
Define $F := \relcomp S I$.
By definition of proper subset:

$\exists x_0 \in S: x_0 \notin I$
By definition of relative complement:

$x_0 \in F$
Thus by definition

$F$ is a non-empty set.
We will prove that

$F$ is filtered.
Let $x, y \in F$.
By definition of relative complement:

$x \notin I$ and $y \notin I$
By assumption:

$x \wedge y \notin I$
By definition of relative complement:

$x \wedge y \in F$
By Meet Precedes Operands:

$x \wedge y \preceq x$ and $x \wedge y \preceq y$
Thus

$\exists z \in F: z \preceq x \land z \preceq y$
$\Box$

We will prove that:

$F$ is an upper section.
Let $x \in F, y \in S$ such that

$x \preceq y$
By definition of lower section:

$y \in I \implies x \in I$
By definition of relative complement:

$x \notin I$
Then

$y \notin I$
Thus by definition of relative complement:

$y \in F$
$\Box$

Thus by definition:

$F$ is a filter in $L$.
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_7:18




