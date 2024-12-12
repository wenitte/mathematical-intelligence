# 

Source: https://proofwiki.org/wiki/Continuous_Open_Surjective_Mapping_is_Quotient_Mapping

Theorem
Let $T_1 = \struct {S_1, \tau_1}$ and $T_2 = \struct {S_2, \tau_2}$ be topological spaces.
Let $f: S_1 \to S_2$ be a continuous open surjective mapping.

Then $f$ is a quotient mapping.


Proof
Let $U \subseteq S_2$ such that $f^{-1} \sqbrk U$ is open in $T_1$.
By definition of open mapping:

$f \sqbrk {f^{-1} \sqbrk U}$ is open in $T_2$
From Image of Preimage under Mapping: Corollary:

$f \sqbrk {f^{-1} \sqbrk U} = U$
It follows that $U$ is open in $T_2$.
By definition of quotient mapping, it follows that $f$ is a quotient mapping.
$\blacksquare$


Sources
2000: James R. Munkres: Topology (2nd ed.): $2$: Topological Spaces and Continuous Functions: $\S 22$: The Quotient Topology




