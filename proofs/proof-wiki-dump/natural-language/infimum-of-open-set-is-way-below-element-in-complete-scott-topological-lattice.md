# 

Source: https://proofwiki.org/wiki/Infimum_of_Open_Set_is_Way_Below_Element_in_Complete_Scott_Topological_Lattice

Theorem
Let $T = \struct {S, \preceq, \tau}$ be a complete topological lattice with Scott topology.
Let $X$ be an open subset of $S$,
Let $x \in X$.

Then $\inf X \ll x$
where $\ll$ denotes the way below relation.


Proof
By Open iff Upper and with Property (S) in Scott Topological Lattice:

$X$ is upper and has property (S).
Let $D$ be a directed subset of $S$ such that

$x \preceq \sup D$
By definition of upper section:

$\sup D \in X$
By definition of property (S):

$\exists y \in D: \forall d \in D: y \preceq d \implies d \in X$
By definitions of infimum and complete lattice:

$\inf X$ is a lower bound for $X$.
By definition pf reflexivity:

$y \in X$
Thus by definition of lower bound:

$\exists d \in D: \inf X \preceq d$
Thus by definition pf way below relation:

$\inf X \ll x$
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL14:26




