# 

Source: https://proofwiki.org/wiki/Arithmetic_iff_Compact_Subset_form_Lattice_in_Algebraic_Lattice



Theorem
Let $L = \struct {S, \vee, \wedge, \preceq}$ be a bounded below algebraic lattice.

Then:

$L$ is arithmetic
if and only if:

$\struct {\map K L, \precsim}$ is a lattice
where $\map K L$ denotes the compact subset of $L$:

$\mathord \precsim = \mathord \preceq \cap \paren {\map K L \times \map K L}$


Proof
Sufficient Condition
Define $K = \struct {\map K L, \precsim}$.
Let $x, y \in \map K L$.
By Compact Subset is Join Subsemilattice:

$x \vee_L y \in \map K L$
We will prove that

$x \vee_L y$ is upper bound for $\set {x, y}$ in $K$
Let $z \in \set {x, y}$.
By Join Succeeds Operands:

$z \preceq x \vee_L y$
By definition of $\precsim$:

$z \precsim v \vee_L y$
$\Box$

We will prove that

$\forall z \in \map K L: z$ is upper bound for $\set {x, y}$ in $K \implies x \vee_L y \precsim z$
Let $z \in \map K L$ such that

$z$ is upper bound for $\set {x, y}$ in $K$.
Then by definition of $\precsim$:

$z$ is upper bound for $\set {x, y}$ in $L$.
By definition of supremum:

$x \vee_L y \preceq z$
By definition of $\precsim$:

$x \vee_L y \precsim z$
$\Box$

Thus by definition of supremum:

$\set {x, y}$ admits a supremum in $K$.
Thus analogically:

$\set {x, y}$ admits an infimum in $K$.
Hence $K$ is lattice.
$\Box$


Necessary Condition
Let $K$ be a lattice.
Thus $L$ is algebraic.
It remains to prove that

$\map K L$ is meet closed.
Let $x, y \in \map K L$.
Define $X := {\inf_L \set {x, y} }^{\mathrm{compact} }$
By definition of algebraic:

$L$ satisfies the axiom of $K$-approximation.
By the axiom of $K$-approximation:

$\inf_L \set {x, y} = \sup_L X$
By definition of algebraic:

$X$ is directed and $L$ is up-complete.
By definition of up-complete:

$X$ admits a supremum in $L$.
By definition of lattice:

$\set {x, y}$ admits an infimum in $K$.
By definition of infimum:

$\inf_K \set {x, y}$ is lower bound for $\set {x, y}$ in $K$.
We will prove that

$X \subseteq x^{\mathrm{compact} } \cap y^{\mathrm{compact} }$
Let $z \in X$.
By definition of compact closure:

$z \preceq \inf_L \set {x, y}$ and $z$ is compact.
By definition of infimum:

$\inf_L \set {x, y}$ is lower bound for $\set {x, y}$
By definition of lower bound:

$\inf_L \set {x, y} \preceq x$ and $\inf_L \set {x, y} \preceq y$
By definition of transitivity:

$z \preceq x$ and $z \preceq y$
By definition of compact closure:

$z \in x^{\mathrm{compact} }$ and $z \in y^{\mathrm{compact} }$
Thus by definition of intersection:

$z \in x^{\mathrm{compact} } \cap y^{\mathrm{compact} }$
$\Box$

By Compact Closure is Intersection of Lower Closure and Compact Subset:

$X = \paren {\inf_L \set {x, y} }^\preceq \cap \map K L$
By Intersection is Subset:

$X \subseteq \map K L$
We will prove that:

$\inf_K \set {x, y}$ is upper bound for $X$ in $K$.
Let $z \in X$.
By definition of intersection:

$z \in x^{\mathrm{compact} }$ and $z \in y^{\mathrm{compact} }$
By definition of compact closure:

$z \preceq x$ and $z \preceq y$
By definition of $\precsim$:

$z \precsim x$ and $z \precsim y$
Thus by definition of infimum:

$z \precsim \inf_K \set {x, y}$
$\Box$

By definition of $\precsim$:

$\inf_K \set {x, y}$ is upper bound for $X$ in $L$.
By definition of supremum:

$\sup_L \set {x, y} \preceq \inf_K \set {x, y}$
By definition of supremum:

$\sup_K \set {x, y}$ is upper bound for $\set {x, y}$ in $K$.
By definition of upper bound:

$x \precsim \sup_K \set {x, y}$ and $y \precsim \sup_K \set {x, y}$
By definition of $\precsim$:

$x \preceq \sup_K \set {x, y}$ and $y \preceq \sup_K \set {x, y}$
By definition of infimum:

$\sup_K \set {x, y} \preceq \sup_L \set {x, y}$
By definition of antisymmetry:

$\sup_K \set {x, y} = \sup_L \set {x, y}$
Thus by definition of meet:

$x \wedge_L y \in \map K L$
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_8:19




