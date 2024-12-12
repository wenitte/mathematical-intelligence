# 

Source: https://proofwiki.org/wiki/Continuous_Mappings_into_Hausdorff_Space_coinciding_on_Everywhere_Dense_Set_coincide/Proof_2

Theorem
Let $\struct {X, \tau_X}$ be a topological space.
Let $\struct {Y, \tau_Y}$ be a Hausdorff space. 
Let $D$ be an everywhere dense subset of $X$. 
Let $f : X \to Y$ and $g : X \to Y$ be continuous mappings such that: 

$\map f x = \map g x$ for all $x \in D$.

Then: 

$\map f x = \map g x$ for all $x \in X$.


Proof
Let $x \in X$.
Since $D$ is everywhere dense, we have that $x \in \map \cl D$, where $\map \cl D$ is the topological closure of $D$. 
By Point in Set Closure iff Limit of Net, there exists a directed set $\struct {\Lambda, \preceq}$ and a net $\family {x_\lambda}_{\lambda \in \Lambda}$ in $D$ converging to $x$.
From Characterization of Continuity in terms of Nets, we have that the nets $\family {\map f {x_\lambda} }_{\lambda \in \Lambda}$ and $\family {\map g {x_\lambda} }_{\lambda \in \Lambda}$ converge to $\map f x$ and $\map g x$ in $\struct {Y, \tau_Y}$ respectively.
By hypothesis, we have: 

$\map f {x_\lambda} = \map g {x_\lambda}$ for each $\lambda \in \Lambda$.
So we have that $\family {\map f {x_\lambda} }_{\lambda \in \Lambda}$ converges to both $\map f x$ and $\map g x$.
Since $\struct {Y, \tau_Y}$ is Hausdorff, from Characterization of Hausdorff Property in terms of Nets we obtain that $\map f x = \map g x$, hence the demand.
$\blacksquare$





