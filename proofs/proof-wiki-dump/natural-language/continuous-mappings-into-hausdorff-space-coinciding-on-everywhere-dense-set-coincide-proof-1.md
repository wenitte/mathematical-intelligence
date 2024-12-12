# 

Source: https://proofwiki.org/wiki/Continuous_Mappings_into_Hausdorff_Space_coinciding_on_Everywhere_Dense_Set_coincide/Proof_1

Theorem
Let $\struct {X, \tau_X}$ be a topological space.
Let $\struct {Y, \tau_Y}$ be a Hausdorff space. 
Let $D$ be an everywhere dense subset of $X$. 
Let $f : X \to Y$ and $g : X \to Y$ be continuous mappings such that: 

$\map f x = \map g x$ for all $x \in D$.

Then: 

$\map f x = \map g x$ for all $x \in X$.


Proof
Aiming for a contradiction, suppose that there exists $x_0 \in X$ such that $\map f {x_0} \ne \map g {x_0}$.
Since $\struct {Y, \tau_Y}$ is Hausdorff, there exists an open neighborhood $U$ of $\map f {x_0}$ and an open neighborhood $V$ of $\map g {x_0}$ such that: 

$U \cap V = \O$
We then have: 

$x_0 \in f^{-1} \sqbrk U \cap g^{-1} \sqbrk V$
Let:

$W = f^{-1} \sqbrk U \cap g^{-1} \sqbrk V$
Since $f$ and $g$ are continuous, $W$ is the intersection of two open sets in $\struct {X, \tau_X}$. 
So $W$ is open in $\struct {X, \tau_X}$ by the definition of a topology. 
Since $D$ is an everywhere dense subset of $X$, there therefore exists $y \in D \cap W$.
Then we have $\map f y \in U$ and $\map g y \in V$.
Since $U \cap V = \O$, it follows that $\map f y \ne \map g y$. 
But we also have $y \in D$, and by hypothesis we have that $\map f x = \map g x$ for all $x \in D$.
Hence we have a contradiction.
We conclude: 

$\map f x = \map g x$ for all $x \in X$.
$\blacksquare$





