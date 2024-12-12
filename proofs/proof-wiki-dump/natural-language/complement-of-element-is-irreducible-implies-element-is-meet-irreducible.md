# 

Source: https://proofwiki.org/wiki/Complement_of_Element_is_Irreducible_implies_Element_is_Meet_Irreducible

Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $P = \struct {\tau, \preceq}$ be an ordered set
where $\mathord \preceq = \mathord \subseteq \cap \paren {\tau \times \tau}$
Let $A \in \tau$.

Then $\relcomp S A$ is irreducible implies
$A$ is meet irreducible in $P$
where $\relcomp S A$ denotes the relative complement of $A$ relative to $S$.


Proof
Assume that

$\relcomp S A$ is irreducible.
Let $x, y \in \tau$ such that

$A = x \wedge y$
By definition of topological space:

$x \cap y \in \tau$
By Meet in Inclusion Ordered Set:

$x \wedge y = x \cap y$
By De Morgan's Laws: Complement of Intersection:

$\relcomp S A = \relcomp S x \cup \relcomp S y$
By definition:

$\relcomp S x$ and $\relcomp S y$ are closed.
By definition of irreducible:

$\relcomp S A = \relcomp S x$ or $\relcomp S A = \relcomp S y$
Thus by Relative Complement of Relative Complement:

$A = x$ or $A = y$
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL11:40




