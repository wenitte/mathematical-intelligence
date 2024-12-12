# 

Source: https://proofwiki.org/wiki/Compact_Closure_of_Element_is_Principal_Ideal_on_Compact_Subset_iff_Element_is_Compact



Theorem
Let $L = \struct {S, \vee, \preceq}$ be a bounded below algebraic join semilattice.
Let $P = \struct {\map K L, \precsim}$ be an ordered subset of $L$
where $\map K L$ denotes the compact subset of $L$.
Let $x \in S$.

Then $x^{\mathrm{compact} }$ is principal ideal in $P$ if and only if $x$ is a compact element.


Proof
Sufficient Condition
Assume that

$x^{\mathrm{compact} }$ is principal ideal in $P$.
By definitions of compact subset and compact closure:

$x^{\mathrm{compact} } \subseteq \map K L$
By definition of principal ideal:

$\exists y \in x^{\mathrm{compact} }: y$ is upper bound for $x^{\mathrm{compact} }$ in $P$.
By definition of ordered subset:

$y$ is upper bound for $x^{\mathrm{compact} }$ in $L$.
By definition of supremum:

$\map {\sup_L} {x^{\mathrm{compact} } } \preceq y$
By definition of algebraic:

$L$ satisfies the axiom of $K$-approximation.
By the axiom of $K$-approximation:

$x \preceq y$
By definition of compact closure:

$y \preceq x$ and $y$ is a compact element.
Thus by definition of antisymmetry:

$x$ is a compact element.
$\Box$


Necessary Condition
Let $x$ be a compact element.
By definition of compact subset:

$x \in \map K L$
We will prove that

$x^{\mathrm{compact} } = x^\precsim$
Let $y \in \map K L$.

$y \in x^{\mathrm{compact} }$
if and only if

$y \preceq x$ by definitions of compact closure and compact subset
if and only if

$y \precsim x$ by definition of ordered subset
if and only if

$y \in x^\precsim$
$\Box$

Hence $x^{\mathrm{compact} }$ is a principal ideal in $P$.
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL13:17




