# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Continuous_Mapping_between_Topological_Spaces/Everywhere



Theorem
Let $T_1 = \struct {S_1, \tau_1}$ and $T_2 = \struct {S_2, \tau_2}$ be topological spaces.
Let $f: S_1 \to S_2$ be a mapping from $S_1$ to $S_2$.

The following definitions of the concept of everywhere continuous mapping between topological spaces are equivalent:

Definition by Pointwise Continuity
The mapping $f$ is continuous everywhere (or simply continuous) if and only if $f$ is continuous at every point $x \in S_1$.


Definition by Open Sets
The mapping $f$ is continuous on $S_1$ if and only if:

$U \in \tau_2 \implies f^{-1} \sqbrk U \in \tau_1$
where $f^{-1} \sqbrk U$ denotes the preimage of $U$ under $f$.


Proof
Sufficient Condition
Suppose that:

$U \in \tau_2 \implies f^{-1} \sqbrk U \in \tau_1$
Let $x \in S_1$.
Let $N \subseteq S_2$ be a neighborhood of $\map f x$.
By the definition of a neighborhood, there exists a $U \in \tau_2$ such that $U \subseteq N$.
Now, $f^{-1} \sqbrk U$ is a neighborhood of $x$.
Then:

$f \sqbrk {f^{-1} \sqbrk U} = U \subseteq N$
as desired.
$\Box$


Necessary Condition
Now, suppose that $f$ is continuous at every point in $S_1$.
We wish to show that:

$U \in \tau_2 \implies f^{-1} \sqbrk U \in \tau_1$
So, let $U \in \tau_2$.
Assume that $f^{-1} \sqbrk U$ is non-empty, otherwise $f^{-1} \sqbrk U = \O \in \tau_1$ by Empty Set is Element of Topology.
Let $x \in f^{-1} \sqbrk U$.
By the definition of continuity at a point, there exists a neighborhood $N$ of $x$ such that $f \sqbrk N \subseteq U$.
By the definition of a neighborhood, there exists a $X \in \tau_1$ such that $x \in X \subseteq N$.
By Image of Subset under Mapping is Subset of Image:

$f \sqbrk X \subseteq f \sqbrk N$
This gives:

$f \sqbrk X \subseteq f \sqbrk N \subseteq U$
Let $\CC = \set {X \in \tau_1: f \sqbrk X \subseteq U}$.
Let $\ds H = \bigcup \CC$.
From the above argument:

$f^{-1} \sqbrk U \subseteq H$
It follows directly from the definition of $H$ (and the definition of $\CC$) that:

$H \subseteq f^{-1} \sqbrk U$
Hence:

$H = f^{-1} \sqbrk U$.
By definition, $H$ is the union of open sets (of $S_1$). Hence $H$ is open by the definition of a topology.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: Exercise $3.9: 1$




