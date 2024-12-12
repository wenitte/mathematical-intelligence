# 

Source: https://proofwiki.org/wiki/Element_equals_to_Supremum_of_Infima_of_Open_Sets_that_Element_Belongs_implies_Topological_Lattice_is_Continuous

Theorem
Let $L = \left({S, \preceq, \tau}\right)$ be a complete Scott topological lattice.
Let

$\forall x \in S: x = \sup \left\{ {\inf X: x \in X \in \sigma\left({L}\right)}\right\}$

Then $L$ is continuous.


Proof
Thus by Way Below Closure is Directed in Bounded Below Join Semilattice:

$\forall x \in S:x^\ll$ is directed.
Thus by definition pf complete lattice:

$L$ is up-complete.
Let $x \in S$.
Define $W := \left\{ {\inf X: x \in X \in \sigma\left({L}\right)}\right\}$
By definition of way below closure:

$x$ is upper bound for $x^\ll$
By definition of supremum:

$\sup \left({x^\ll}\right) \preceq x$
We will prove that

$W \subseteq x^\ll$
Let $d \in W$.
By definition of $W$:

$\exists V: d = \inf V \land x \in V \land V \in \sigma\left({L}\right)$
By Scott Topology equals to Scott Sigma:

$\tau = \sigma\left({L}\right)$
By definition:

$V$ is open.
By Infimum of Open Set is Way Below Element in Complete Scott Topological Lattice:

$d \ll x$
Thus by definition of way below closure:

$d \in x^\ll$
$\Box$
By Supremum of Subset:

$\sup W \preceq \sup\left({x^\ll}\right)$
By assumption:

$x \preceq \sup\left({x^\ll}\right)$
Hence by definition of antisymmetry:

$x = \sup \left({x^\ll}\right)$
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL14:38




