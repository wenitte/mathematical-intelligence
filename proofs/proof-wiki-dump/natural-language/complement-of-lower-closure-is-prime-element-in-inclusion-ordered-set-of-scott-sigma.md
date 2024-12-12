# 

Source: https://proofwiki.org/wiki/Complement_of_Lower_Closure_is_Prime_Element_in_Inclusion_Ordered_Set_of_Scott_Sigma

Theorem
Let $L = \struct {S, \preceq, \tau}$ be a complete Scott topological lattice.
Let $D = \struct {\map \sigma L, \precsim}$ be an inclusion ordered set of the Scott sigma of $L$.
Let $x \in S$.

Then:

$\relcomp S {x^\preceq}$ is a prime element in $D$
and:

$\relcomp S {x^\preceq} \ne S$


Proof
By Scott Topology equals to Scott Sigma:

$\tau = \map \sigma L$
By Closure of Singleton is Lower Closure of Element in Scott Topological Lattice:

$x^\preceq = \set x^-$
where $\set x^-$ denotes the topological closure of $\set x$.
By Topological Closure of Singleton is Irreducible:

$x^\preceq$ is topologically irreducible
Thus by Complement of Irreducible Topological Subset is Prime Element:

$\relcomp S {x^\preceq}$ is a prime element in $D$.
By definitions of reflexivity and lower closure of element:

$x \in x^\preceq$
By definitions of relative complement and difference:

$x \notin \relcomp S {x^\preceq}$
Hence by definition set equality:

$\relcomp S {x^\preceq} \ne S$
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL14:28




