# 

Source: https://proofwiki.org/wiki/Closure_in_Weak-*_Topology_in_terms_of_Annihilators

Theorem
Let $X$ be a Banach space. 
Let $X^\ast$ be the normed dual space of $X$. 
Let $w^\ast$ be the weak-$\ast$ topology on $X^\ast$.
Let $N$ be a linear subspace of $X^\ast$. 

Then: 

$\map {\cl_{w^\ast} } N = \paren { {}^\bot N}^\bot$
where:

$\cl_{w^\ast}$ denotes closure in the weak-$\ast$ topology
${}^\bot N$ denotes the annihilator of $N \subseteq X^\ast$
$\paren { {}^\bot N}^\bot$ denotes the annihilator of ${}^\bot N \subseteq X$.


Proof
From Linear Subspace is Subset of Double Annihilator, we have:

$N \subseteq \paren { {}^\bot N}^\bot$
So, from Set Closure Preserves Set Inclusion:

$\map {\cl_{w^\ast} } N \subseteq \map {\cl_{w^\ast} } {\paren { {}^\bot N}^\bot}$
From Annihilator of Subspace of Banach Space is Weak-* Closed and Set is Closed iff Equals Topological Closure, we have:

$\map {\cl_{w^\ast} } N \subseteq \paren { {}^\bot N}^\bot$
It remains to show:

$\paren { {}^\bot N}^\bot \subseteq \map {\cl_{w^\ast} } N$
From Set Complement inverts Subsets, we can equivalently show:

$X^\ast \setminus \map {\cl_{w^\ast} } N \subseteq X^\ast \setminus \paren { {}^\bot N}^\bot$
Let:

$f \in X^\ast \setminus \map {\cl_{w^\ast} } N$
Applying Existence of Non-Zero Continuous Linear Functional vanishing on Proper Closed Subspace of Hausdorff Locally Convex Space to the locally convex space $\struct {X^\ast, w^\ast}$, there exists $\Phi \in \struct {X^\ast, w^\ast}^\ast$ such that $\Phi \ne {\mathbf 0}_{X^\ast}$ and:

$\map \Phi g = 0$ for each $g \in \map {\cl_{w^\ast} } N$
and:

$\map \Phi f \ne 0$
From Characterization of Continuity of Linear Functional in Weak-* Topology, there exists $x \in X$ such that $\Phi = x^\wedge$. 
Then: 

$\map {x^\wedge} g = \map g x = 0$ for all $g \in N$
So $x \in {}^\bot N$.
But we also have $0 \ne \map {x^\wedge} f = \map f x$, so $f$ does not vanish at some point in ${}^\bot N$.
So $f \not \in \paren { {}^\bot N}^\bot$ by the definition of the annihilator of a subspace of $X$. 
We therefore have:

$X^\ast \setminus \map {\cl_{w^\ast} } N \subseteq X^\ast \setminus \paren { {}^\bot N}^\bot$
hence:

$\paren { {}^\bot N}^\bot \subseteq \map {\cl_{w^\ast} } N$
from Set Complement inverts Subsets.
We conclude:

$\map {\cl_{w^\ast} } N = \paren { {}^\bot N}^\bot$
$\blacksquare$





