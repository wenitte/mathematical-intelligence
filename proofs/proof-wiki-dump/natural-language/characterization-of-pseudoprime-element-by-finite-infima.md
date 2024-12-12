# 

Source: https://proofwiki.org/wiki/Characterization_of_Pseudoprime_Element_by_Finite_Infima

Theorem
Let $L = \struct {S, \vee, \wedge, \preceq}$ be a continuous lattice.
Let $p \in S$ be a pseudoprime element.
Let $A$ be a non-empty finite subset of $S$ such that

$\inf A \ll p$
where $\ll$ denotes the way below relation.

Then $\exists a \in A: a \preceq p$


Proof
By definition of pseudoprime element:

there exists a prime ideal $P$ in $L$: $p = \sup P$
By definition of way below closure:

$\inf A \in p^\ll$
By definition of reflexivity:

$p \preceq \sup P$
By Continuous iff Way Below Closure is Ideal and Element Precedes Supremum:

$p^\ll \subseteq P$
By definition of subset:

$\inf A \in P$
Thus by Characterization of Prime Ideal by Finite Infima

$\exists a \in A: a \in P$
By definition of up-complete:

$P$ admits a supremum.
By definition of supremum:

$p$ is upper bound for $P$.
Thus by definition of upper bound:

$a \preceq p$
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_7:35




