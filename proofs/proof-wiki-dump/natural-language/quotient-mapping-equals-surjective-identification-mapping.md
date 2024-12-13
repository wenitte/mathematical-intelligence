# 

Source: https://proofwiki.org/wiki/Quotient_Mapping_equals_Surjective_Identification_Mapping



Theorem
Let $T_1 = \struct {S_1, \tau_1}$ and $T_2 = \struct {S_2, \tau_2}$ be topological spaces.
Let $f: S_1 \to S_2$ be a mapping.

Then $f$ is a quotient mapping, if and only if:

$f$ is surjective, and $\tau_2$ is the identification topology on $S_2$ with respect to $f$ and $T_1$.


Proof
Sufficient condition
Let $f$ be surjective, and $\tau_2$ be the identification topology on $S_2$ with respect to $f$ and $T_1$.
Identification Mapping is Continuous shows that $f$ is continuous.
Let $U \subseteq S_2$ such that $f^{-1} \sqbrk U$ is open in $T_1$.
By definition of identification topology, it follows that $U$ is open in $T_2$.
Hence $f$ fulfills all the requirements to be a quotient mapping.
$\Box$

Necessary condition
Suppose $f$ is not surjective, or $\tau_2$ is not the identification topology on $S_2$ with respect to $f$ and $T_1$.
If $f$ is not surjective, then $f$ is by definition not a quotient mapping.
Existence and Uniqueness of Identification Topology shows that the identification topology is uniquely defined.
So if $\tau_2$ is not the identification topology, there exists a subset $U \subseteq S_2$ not open in $T_2$ such that $f^{-1} \sqbrk U$ is open in $T_1$.
Then $f$ does not fulfill the condition to be a quotient mapping.
$\blacksquare$


Sources
2000: James R. Munkres: Topology (2nd ed.): $2$: Topological Spaces and Continuous Functions: $\S 22$: The Quotient Topology




