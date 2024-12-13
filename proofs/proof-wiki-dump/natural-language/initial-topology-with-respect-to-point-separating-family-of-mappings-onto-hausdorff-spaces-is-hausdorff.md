# 

Source: https://proofwiki.org/wiki/Initial_Topology_with_respect_to_Point-Separating_Family_of_Mappings_onto_Hausdorff_Spaces_is_Hausdorff

Theorem
Let $X$ be a set.
Let $I$ be an indexing set.
Let $\family {\struct {Y_i, \tau_i} }_{i \mathop \in I}$ be an indexed family of Hausdorff topological spaces indexed by $I$.
Let $\family {f_i: X \to Y_i}_{i \mathop \in I}$ be an indexed family of mappings indexed by $I$ that separate the points of $X$ in the sense that: 

for each $x, y \in X$ with $x \ne y$, there exists $i \in I$ such that $\map {f_i} x \ne \map {f_i} y$.
Let $\tau$ be the initial topology on $X$ with respect to $\family {f_i}_{i \mathop \in I}$.

Then $\struct {X, \tau}$ is Hausdorff.


Proof
Let $x, y \in X$. 
Then there exists $i \in I$ such that $\map {f_i} x \ne \map {f_i} y$. 
Since $Y_i$ is Hausdorff, there exists $U, V \in \tau_i$ such that $U \cap V = \O$ and $\map {f_i} x \in U$, $\map {f_i} y \in V$. 
Then we have $x \in f_i^{-1} \sqbrk U$ and $y \in f_i^{-1} \sqbrk V$.
From the definition of the initial topology, $f_i : X \to Y_i$ is $\tuple {\tau, \tau_i}$-continuous.
So $f_i^{-1} \sqbrk U \in \tau$ and $f_i^{-1} \sqbrk V \in \tau$. 
We just need to show that $f_i^{-1} \sqbrk U \cap f_i^{-1} \sqbrk V = \O$.
This is immediate since by Preimage of Intersection under Mapping, since we have: 

$f_i^{-1} \sqbrk U \cap f_i^{-1} \sqbrk V = f_i^{-1} \sqbrk {U \cap V} = f_i^{-1} \sqbrk \O = \O$
So $f_i^{-1} \sqbrk U$ and $f_i^{-1} \sqbrk V$ are disjoint open sets containing $x$ and $y$ respectively.
So $\struct {X, \tau}$ is Hausdorff.
$\blacksquare$





