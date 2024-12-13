# 

Source: https://proofwiki.org/wiki/Open_implies_There_Exists_Way_Below_Element


It has been suggested that this page be renamed.In particular: some indication that this is for the Scott topologyTo discuss this page in more detail, feel free to use the talk page.
Theorem
Let $L = \struct {S, \preceq, \tau}$ be a continuous topological lattice with Scott topology.
Let $p \in S, A \subseteq S$ such that:

$A$ is open and $p \in A$.

Then:

$\exists q \in A: q \ll p$
where $q \ll p$ denotes $q$ is way below $p$.


Proof
By definition of continuous ordered set:

$p^\ll$ is directed
and

$L$ satisfies the axiom of approximation.
By the axiom of approximation:

$p = \map \sup {p^\ll}$
By definition of Scott topology:

$A$ is inaccessible by directed suprema.
By definition of inaccessible by directed suprema:

$A \cap p^\ll \ne \O$
By definition of non-empty set:

$\exists q: q \in A \cap p^\ll$
Thus by definition of intersection:

$q \in A$
By definition of intersection:

$q \in p^\ll$
By definition of way below closure:

$q \ll p$
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL11:43




