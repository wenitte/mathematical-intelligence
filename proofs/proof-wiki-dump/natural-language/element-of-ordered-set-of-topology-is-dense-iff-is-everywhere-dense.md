# 

Source: https://proofwiki.org/wiki/Element_of_Ordered_Set_of_Topology_is_Dense_iff_is_Everywhere_Dense



Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $P = \struct {\tau, \preceq}$ be an ordered set
where $\mathord \preceq = \mathord \subseteq \cap \paren {\tau \times \tau}$
Let $A \in \tau$.

Then $A$ is a dense element in $P$ if and only if $A$ is everywhere dense.


Proof
Sufficient Condition
Assume that

$A$ is a dense element in $P$.
By Bottom in Ordered Set of Topology:

$\bot_P = \O$
We will prove that

for every open subset $U$ of $S$: $U \ne \O \implies U \cap A \ne \O$
Let $U$ be an open subset of $S$ such that

$U \ne \O$
By definition of open set:

$U \in \tau$
By definition of topological space:

$U \cap A \in \tau$
By Meet in Inclusion Ordered Set:

$U \wedge A = U \cap A$
Thus by definition of dense element:

$U \cap A \ne \O$
$\Box$

By Characterization of Closure by Open Sets:

$A^- = S$
where $A^-$ denotes the topological closure of $A$.
Hence $A$ is everywhere dense.
$\Box$


Necessary Condition
Assume that

$A$ is everywhere dense.
Let $B \in \tau$ such that

$B \ne \bot_P$
By definition of non-empty set:

$\exists x: x \in B$
By definition:

$B$ is an open set.
By definition of everywhere dense:

$A^- = S$
By Characterization of Closure by Open Sets:

$B \cap A \ne \O$
By definition of topological space:

$B \cap A \in \tau$
Thus by Meet in Inclusion Ordered Set:

$B \wedge A \ne \bot_P$
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL11:42




