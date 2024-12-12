# 

Source: https://proofwiki.org/wiki/Continuous_Image_of_Compact_Space_is_Compact



Theorem
Let $T_1$ and $T_2$ be topological spaces.
Let $f: T_1 \to T_2$ be a continuous mapping.

If $T_1$ is compact then so is its image $f \sqbrk {T_1}$ under $f$.

That is, compactness is a continuous invariant.


Corollary 1
Compactness is a topological property.


Corollary 2
A continuous mapping from a compact topological space to a metric space is bounded.


Corollary 3
Let $S$ be a compact topological space.
Let $f: S \to \R$ be a continuous real-valued function.

Then $f$ attains its bounds on $S$.


Proof 1
From Restriction of Mapping to Image is Surjection, the restriction of $f$ to $\Img f$ is a surjection.
The result follows from Compactness is Preserved under Continuous Surjection.
$\blacksquare$


Proof 2
Suppose $\UU$ is an open cover of $f \sqbrk {T_1}$ by sets open in $T_2$.
Because $f$ is continuous, it follows that $f^{-1} \sqbrk U$ is open in $T_1$ for all $U \in \UU$.
The set $\set {f^{-1} \sqbrk U: U \in \UU}$ is an open cover of $T_1$, because for any $x \in T_1$, it follows that $\map f x$ must be in some $U \in \UU$.
Because $T_1$ is compact, it has a finite subcover $\set {f^{-1} \sqbrk {U_1}, f^{-1} \sqbrk {U_2}, \ldots, f^{-1} \sqbrk {U_r} }$.
It follows that $\set {U_1, U_2, \ldots, U_r}$ is a finite subcover of $f \sqbrk {T_1}$.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $1$: General Introduction: Functions
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): compact




