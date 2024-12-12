# 

Source: https://proofwiki.org/wiki/Annihilator_of_Subspace_of_Banach_Space_is_Weak-*_Closed

Theorem
Let $X$ be a Banach space.
Let $M$ be a vector subspace of $X$. 
Let $X^\ast$ be the normed dual space of $X$. 
Let $w^\ast$ be the weak-$\ast$ topology on $X^\ast$.
Let $M^\bot$ be the annihilator of $M$. 

Then $M^\bot$ is closed in $\struct {X^\ast, w^\ast}$. 


Proof 1
From Set is Closed iff Equals Topological Closure, we aim to show:

$M^\bot = \map {\cl_{w^\ast} } {M^\bot}$
From Set is Subset of its Topological Closure, we have: 

$M^\bot \subseteq \map {\cl_{w^\ast} } {M^\bot}$
Now let: 

$f \in \map {\cl_{w^\ast} } {M^\bot}$
From Point in Set Closure iff Limit of Net, there exists a directed set $\struct {\Lambda, \preceq}$ and a net $\family {f_\lambda}_{\lambda \in \Lambda}$ in $M^\bot$ converging to $f$ in $\struct {X^\ast, w^\ast}$.
That is, from Characterization of Convergent Net in Weak-* Topology: 

for each $x \in X$ the net $\family {\map {f_\lambda} x}_{\lambda \in \Lambda}$ converges to $\map f x$ in $\GF$.
Since $f_\lambda \in M^\bot$ for each $\lambda \in \Lambda$, we have: 

$\map {f_\lambda} x = 0$ for each $x \in M$ and $\lambda \in \Lambda$.
From Constant Net is Convergent, we obtain:

the net $\family {\map {f_\lambda} x}_{\lambda \in \Lambda}$ converges to $\map f x$ and $0$ in $\GF$.
From Metric Space is Hausdorff, $\GF$ is Hausdorff. 
Hence from Characterization of Hausdorff Property in terms of Nets, we obtain $\map f x = 0$ for each $x \in M$.
So:

$f \in M^\bot$
So we obtain: 

$\map {\cl_{w^\ast} } {M^\bot} \subseteq M^\bot$
and hence:

$M^\bot = \map {\cl_{w^\ast} } {M^\bot}$
From Set is Closed iff Equals Topological Closure, we have that $M^\bot$ is closed in $\struct {X^\ast, w^\ast}$.
$\blacksquare$


Proof 2
From Annihilator of Subspace of Banach Space as Intersection of Kernels, we have:

$\ds M^\bot = \bigcap_{x \in M} \map \ker {x^\wedge}$
From Characterization of Continuity of Linear Functional in Weak-* Topology:

the linear functional $x^\wedge : \struct {X^\ast, w^\ast} \to \GF$ is continuous.
From Characterization of Continuous Linear Functionals on Topological Vector Space, $\map \ker {x^\wedge}$ is closed in $\struct {X^\ast, w^\ast}$.
So $M^\bot$ is the intersection of closed sets in $\struct {X^\ast, w^\ast}$, and hence is closed itself.
$\blacksquare$





