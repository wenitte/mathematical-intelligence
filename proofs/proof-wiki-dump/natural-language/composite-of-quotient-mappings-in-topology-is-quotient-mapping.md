# 

Source: https://proofwiki.org/wiki/Composite_of_Quotient_Mappings_in_Topology_is_Quotient_Mapping

Theorem
Let $T_1 = \struct {S_1, \tau_1}$, $T_2 = \struct {S_2, \tau_2}$, $T_3 = \struct {S_3, \tau_3}$ be topological spaces.
Let $f: S_1 \to S_2$ and $g: S_2 \to S_3$ be quotient mappings.

Then $g \circ f : S_1 \to S_3$ is a quotient mapping.


Proof
Composite of Surjections is Surjection shows that $g \circ f$ is surjective.
Composite of Continuous Mappings is Continuous shows that $g \circ f$ is continuous.
Let $U \subseteq S_3$ such that $\paren {g \circ f}^{-1} \sqbrk U$ is open in $T_1$.
By definition of quotient mapping:

$f \sqbrk {\paren {g \circ f}^{-1} \sqbrk U}$ is open in $T_2$.
By definition of quotient mapping:

$g \circ f \sqbrk {\paren {g \circ f}^{-1} \sqbrk U}$ is open in $T_3$.
From Image of Preimage under Mapping: Corollary:

$g \circ f \sqbrk {\paren {g \circ f}^{-1} \sqbrk U} = U$
It follows that $U$ is open in $T_3$.
By definition of quotient mapping, it follows that $g \circ f$ is a quotient mapping.
$\blacksquare$


Sources
2000: James R. Munkres: Topology (2nd ed.): $2$: Topological Spaces and Continuous Functions: $\S 22$: The Quotient Topology




