# 

Source: https://proofwiki.org/wiki/Continuous_Closed_Surjective_Mapping_is_Quotient_Mapping

Theorem
Let $T_1 = \struct {S_1, \tau_1}$ and $T_2 = \struct {S_2, \tau_2}$ be topological spaces.
Let $f: S_1 \to S_2$ be a continuous closed surjective mapping.

Then $f$ is a quotient mapping.


Proof
Let $U \subseteq S_2$ such that $f^{-1} \sqbrk U$ is open in $T_1$.
For $X \subseteq S$, let $\relcomp S X$ denote the relative complement of $X$ is $S$.
By definition of closed set, $\relcomp {S_1} {f^{-1} \sqbrk U}$ is closed in $T_1$.
By definition of closed mapping, $f \sqbrk {\relcomp {S_1} {f^{-1} \sqbrk U} }$ is closed in $T_2$.
By definition of closed set, $\relcomp {S_2} {f \sqbrk {\relcomp {S_1} {f^{-1} \sqbrk U} } }$ is open in $T_2$.
Then:














\(\ds \relcomp {S_2} {f \sqbrk {\relcomp {S_1} {f^{-1} \sqbrk U} } }\)

\(=\)







\(\ds \relcomp {S_2} {f \sqbrk {f^{-1} \sqbrk {\relcomp {S_2} U} } }\)





Complement of Preimage equals Preimage of Complement














\(\ds \)

\(=\)







\(\ds \relcomp {S_2} {\relcomp {S_2} U}\)





Image of Preimage under Mapping: Corollary














\(\ds \)

\(=\)







\(\ds U\)





Relative Complement of Relative Complement




By definition of quotient mapping, it follows that $f$ is a quotient mapping.
$\blacksquare$


Sources
2000: James R. Munkres: Topology (2nd ed.): $2$: Topological Spaces and Continuous Functions: $\S 22$: The Quotient Topology




