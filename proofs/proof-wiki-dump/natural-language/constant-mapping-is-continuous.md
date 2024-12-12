# 

Source: https://proofwiki.org/wiki/Constant_Mapping_is_Continuous

Theorem
Let $T_A = \struct {A, \tau_A}$ and $T_B = \struct {B, \tau_B}$ be topological spaces.
Let $b \in B$ be any point in $B$.
Let $f_b: A \to B$ be the constant mapping defined by:

$\forall x \in A: \map {f_b} x = b$

Then $f_b$ is continuous.


Proof
We have by definition that:

$\forall x \in A: \map {f_b} x = b$
So:
$\map {f^{-1} } b = A$
For $c \in B: c \ne B$ we have that:
$\map {f^{-1} } c = \O$

Let $U \in \tau_B$ such that $b \in U$.
Then $f^{-1} \sqbrk U = A$

Let $V \in \tau_B$ such that $b \notin V$.
Then $f^{-1} \sqbrk V = \O$

From the definition of topology, $A$ is open in $T$.
From Empty Set is Element of Topology, $\O$ is also open in $T$.

So $f_b$ fulfils the conditions for it to be continuous.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: $3.1$: Topological Spaces: Proposition $3.1.10 \ \text{(b)}$
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: Exercise $3.9: 5$




