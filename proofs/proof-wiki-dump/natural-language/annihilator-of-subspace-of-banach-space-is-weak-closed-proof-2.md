# 

Source: https://proofwiki.org/wiki/Annihilator_of_Subspace_of_Banach_Space_is_Weak-*_Closed/Proof_2

Theorem
Let $X$ be a Banach space.
Let $M$ be a vector subspace of $X$. 
Let $X^\ast$ be the normed dual space of $X$. 
Let $w^\ast$ be the weak-$\ast$ topology on $X^\ast$.
Let $M^\bot$ be the annihilator of $M$. 

Then $M^\bot$ is closed in $\struct {X^\ast, w^\ast}$. 


Proof
From Annihilator of Subspace of Banach Space as Intersection of Kernels, we have:

$\ds M^\bot = \bigcap_{x \in M} \map \ker {x^\wedge}$
From Characterization of Continuity of Linear Functional in Weak-* Topology:

the linear functional $x^\wedge : \struct {X^\ast, w^\ast} \to \GF$ is continuous.
From Characterization of Continuous Linear Functionals on Topological Vector Space, $\map \ker {x^\wedge}$ is closed in $\struct {X^\ast, w^\ast}$.
So $M^\bot$ is the intersection of closed sets in $\struct {X^\ast, w^\ast}$, and hence is closed itself.
$\blacksquare$





