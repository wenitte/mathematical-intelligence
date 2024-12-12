# 

Source: https://proofwiki.org/wiki/Element_is_Meet_Irreducible_iff_Complement_of_Element_is_Irreducible



Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $P = \struct {\tau, \preceq}$ be an ordered set
where $\mathord \preceq = \mathord \subseteq \cap \paren {\tau \times \tau}$
Let $A \in \tau$ such that

$A \ne \top_P$
where $\top_P$ denotes the greatest element in $P$.

Then $A$ is meet irreducible in $P$ if and only if $\relcomp S A$ is irreducible
where $\relcomp S A$ denotes the relative complement of $A$ relative to $S$.


Proof
Sufficient Condition
Let $A$ be meet irreducible in $P$.
By Top in Ordered Set of Topology:

$A \ne S$
By Relative Complement of Empty Set and Relative Complement of Relative Complement:

$\relcomp S A \ne \O$
Thus by definition:

$\relcomp S A$ is non-empty.
Thus by definition:

$\relcomp S A$ is closed.
Let $B, C$ be closed subsets of $S$ such that

$\relcomp S A = B \cup C$
By De Morgan's Laws (Set Theory)/Relative Complement/Complement of Union and Relative Complement of Relative Complement:

$A = \relcomp S B \cap \relcomp S C$
By definition of closed set:

$\relcomp S B \in \tau$ and $\relcomp S C \in \tau$
By definition of topological space:

$\relcomp S B \cap \relcomp S C \in \tau$
By Meet in Inclusion Ordered Set:

$\relcomp S B \wedge \relcomp S C = A$
By definition of meet irreducible:

$A = \relcomp S B$ or $A = \relcomp S C$
Thus by Relative Complement of Relative Complement:

$\relcomp S A = B$ or $\relcomp S A = C$
$\Box$


Necessary Condition
This follows from Complement of Element is Irreducible implies Element is Meet Irreducible.
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL11:41




