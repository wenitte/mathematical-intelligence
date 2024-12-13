# 

Source: https://proofwiki.org/wiki/Quotient_Mapping_and_Continuous_Mapping_Induces_Continuous_Mapping



Theorem
Let $T_1 = \struct {S_1, \tau_1}$, $T_2 = \struct {S_2, \tau_2}$, $T_3 = \struct {S_3, \tau_3}$ be topological spaces.
Let $p: S_1 \to S_2$ be a quotient mapping.
Let $g: S_2 \to S_3$ be a mapping such that for all $s_1, s_2 \in S_1$ with $\map p {s_1} = \map p {s_2}$, we have $\map g {s_1} = \map g {s_2}$.

Then $g$ induces a mapping $f: S_2 \to S_3$ such that $f \circ p = g$.
The induced mapping $f$ is a continuous mapping if and only if $g$ is a continuous mapping.


Corollary
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
For all $t \in S_2$ we can find $s \in S_1$ with $\map p s = t$, as $p$ is surjective.
Define $\map f t := \map g s$.
For all $s' \in S_1$ with $\map p {s'} = t$, we have $\map g s = \map g {s'}$ by hypothesis.
Hence $f$ is well-defined.
It follows that $\map g s = \map {f \circ p} s$.

Suppose $f$ is continuous.
As $p$ is continuous by definition of quotient mapping, Composite of Continuous Mappings is Continuous shows that $g = f \circ p$ is continuous.

Suppose $g$ is continuous.
Let $V \subseteq S_3$ be open in $T_3$.
As $g$ is continuous:

$g^{-1} \sqbrk V$ is open in $T_1$.
As $g = f \circ p$:

$g^{-1} \sqbrk V = p^{-1} \sqbrk {f^{-1} \sqbrk V}$
Hence $p^{-1} \sqbrk {f^{-1} \sqbrk V}$ is open in $T_1$. 
As $p$ is a quotient mapping:

$f^{-1} \sqbrk V$ is open in $T_2$.
As $f^{-1} \sqbrk V$ is open in $T_2$:

$f$ is continuous.
$\blacksquare$


Sources
2000: James R. Munkres: Topology (2nd ed.): $2$: Topological Spaces and Continuous Functions: $\S 22$: The Quotient Topology




