# 

Source: https://proofwiki.org/wiki/Composite_of_Continuous_Mappings_is_Continuous



Theorem
Let $T_1, T_2, T_3$ be topological spaces.
Let $f: T_1 \to T_2$ and $g: T_2 \to T_3$ be continuous mappings.

Then the composite mapping $g \circ f: T_1 \to T_3$ is continuous.


Corollary
Let $T_1, T_2, T_3$ each be one of:

metric spaces
the complex plane
the real number line

Let $f: T_1 \to T_2$ and $g: T_2 \to T_3$ be continuous mappings.

Then the composite mapping $g \circ f: T_1 \to T_3$ is continuous.


Continuity at a Point
Let $T_1, T_2, T_3$ be topological spaces.
Let the mapping $f : T_1 \to T_2$ be continuous at $x$.
Let the mapping $g : T_2 \to T_3$ be continuous at $\map f x$.
Then the composite mapping $g \circ f : T_1 \to T_3$ is continuous at $x$.


Proof
Let $U \in T_3$ be open in $T_3$.
As $g$ is continuous, $g^{-1} \sqbrk U \in T_2$ is open in $T_2$.
As $f$ is continuous, $f^{-1} \sqbrk {g^{-1} \sqbrk U} \in T_1$ is open in $T_1$.
By Preimage of Subset under Composite Mapping, $f^{-1} \sqbrk {g^{-1} \sqbrk U} = \paren {g \circ f}^{-1} \sqbrk U$.
Hence the result.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: $3.1$: Topological Spaces: Proposition $3.1.8$
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $1$: General Introduction: Functions




