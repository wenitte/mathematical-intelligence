# 

Source: https://proofwiki.org/wiki/Quotient_Mapping_and_Continuous_Mapping_Induces_Continuous_Mapping/Corollary

Theorem
Let $T_1 = \struct {S_1, \tau_1}$, $T_2 = \struct {S_2, \tau_2}$, $T_3 = \struct {S_3, \tau_3}$ be topological spaces.
Let $p: S_1 \to S_2$ be a quotient mapping.
Let $g: S_2 \to S_3$ be a mapping such that for all $s_1 , s_2 \in S_1$ with $\map p {s_1} = \map p {s_2}$, we have $\map g {s_1} = \map g {s_2}$.

Then $g$ induces a mapping $f: S_2 \to S_3$ such that $f \circ p = g$.
The induced mapping $f$ is a quotient mapping, if and only if $g$ is a quotient mapping.


$\begin{xy} \xymatrix@L+2mu@+1em{
 S_1 \ar[r]^*{p}
     \ar[rd]_*{g}
&
 S_2 \ar@{-->}[d]^*{f}
\\ &
 S_3
}\end{xy}$


Proof
Quotient Mapping and Continuous Mapping Induces Continuous Mapping shows that $f$ is well-defined.
Suppose $f$ is a quotient mapping.
Composite of Quotient Mappings in Topology is Quotient Mapping shows that $g = f \circ p$ is a quotient mapping.
Suppose $g$ is a quotient mapping.
It follows that $g$ is surjective.
That is, for all $t \in S_3$ there exists $s \in S_1$ such that $\map g s = t$.
As $t = \map g s = \map { f \circ p } s$, it follows that $f$ is surjective.
By definition of quotient mapping, $g$ is continuous.
Quotient Mapping and Continuous Mapping Induces Continuous Mapping shows that $f$ is continuous.
Let $U \subseteq S_3$ such that $f^{-1} \sqbrk U$ is open in $T_2$.
By definition of quotient mapping, $p$ is continuous.
By definition of continuity, it follows that $p^{-1} \sqbrk {f^{-1} \sqbrk U}$ is open in $T_1$.
As $f \circ p = g$, it follows that $p^{-1} \sqbrk {f^{-1} \sqbrk U} = g^{-1} \sqbrk U$.
By definition of quotient mapping, $U$ is open in $T_3$.
By definition of quotient mapping, $f$ is a quotient mapping.
$\blacksquare$


Sources
2000: James R. Munkres: Topology (2nd ed.): $2$: Topological Spaces and Continuous Functions: $\S 22$: The Quotient Topology




