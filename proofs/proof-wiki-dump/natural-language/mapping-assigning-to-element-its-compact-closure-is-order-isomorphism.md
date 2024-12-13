# 

Source: https://proofwiki.org/wiki/Mapping_Assigning_to_Element_Its_Compact_Closure_is_Order_Isomorphism

Theorem
Let $L = \struct {S, \vee, \preceq}$ be a bounded below algebraic join semilattice.
Let $C = \struct {\map K L, \preceq'}$ be an ordered subset of $L$
where $\map K L$ denotes the compact subset of $L$.
Let $I = \struct {\map {\mathit {Ids} } C, \precsim}$ be an inclusion ordered set
where $\map {\mathit {Ids} } C$ denotes the set of all ideals in $C$.
Let $f: S \to \map {\mathit {Ids} } C$ be a mapping such that

$\forall x \in S: \map f x = x^{\mathrm {compact} }$
where $x^{\mathrm {compact} }$ denotes the compact closure of $x$.

Thus $f$ is order isomorphism between $L$ and $I$.


Proof
We will prove that

$f$ is an order embedding.
Let $x, y \in S$.

Sufficient condition
Assume that

$x \preceq y$
By Compact Closure is Increasing:

$x^{\mathrm {compact} } \subseteq y^{\mathrm {compact} }$
By definition of $f$:

$\map f x \subseteq \map f y$
Thus by definition of inclusion ordered set:

$\map f x \precsim \map f y$
$\Box$

Necessary condition
Assume that:

$\map f x \precsim \map f y$
By definition of inclusion ordered set:

$\map f x \subseteq \map f y$
By definition of $f$:

$x^{\mathrm {compact} } \subseteq y^{\mathrm{compact} }$
By Supremum of Subset:

$\map \sup {x^{\mathrm {compact} } } \preceq \map \sup {y^{\mathrm {compact} } }$
By definition of algebraic:

$L$ satisfies the axiom of $K$-approximation.
Thus by the axiom of $K$-approximation:

$x \preceq y$
$\Box$

We will prove that

$f$ is a surjection.
Let $y \in \map {\mathit {Ids} } C$
Define $x = \sup_L y$
Thus $x \in S$.
We will prove that:

$x^{\mathrm {compact} } \subseteq y$
Let $d \in x^{\mathrm {compact} }$
By definition of compact closure:

$d$ is a compact element and $d \preceq x$
By definition of compact subset:

$d \in \map K L$
By definition of compact element:

$d \ll d$
where $\ll$ denotes the way below relation.
By definition of way below relation:

$\exists z \in y: d \preceq z$
By definition of ordered subset:

$d \preceq' z$
Thus by definition of lower section:

$d \in y$
$\Box$

We will prove that

$y \subseteq x^{\mathrm {compact} }$
Let $d \in y$.
By definition of subset:

$d \in \map K L$
By definition of compact subset:

$d$ is a compact element.
By definition of supremum:

$x$ is upper bound for $y$.
By definition of upper bound:

$d \preceq x$
Thus by definition of compact closure:

$d \in x^{\mathrm {compact} }$
$\Box$

By definition of set equality:

$y = x^{\mathrm {compact} }$
Hence:

$y = \map f x$
$\Box$

Hence $f$ is order isomorphism.
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL13:16




