# 

Source: https://proofwiki.org/wiki/Continuous_Surjection_Induces_Continuous_Bijection_from_Quotient_Space/Corollary_1

Theorem
Let $\struct {S_1, \tau_1}$ and $\struct {S_2, \tau_2}$ be topological spaces.
Let $g: S_1 \to S_2$ be a $\tuple {\tau_1, \tau_2}$-continuous surjection.
Let $\RR_g \subseteq S_1 \times S_1$ be the equivalence on $S_1$ induced by $g$:

$\tuple {s_1, s_2} \in \RR_g \iff \map g {s_1} = \map g {s_2}$
Let $q_{\RR_g}: S_1 \to S_1 / \RR_g$ be the canonical surjection induced by the equivalence relation $\RR_g$.
Let $\tau_{\RR_g}$ be the quotient topology on the quotient space $S_1 / \RR_g$ by $q_{\RR_g}$.

Then $g$ induces a continuous bijection $f: S_1 / \RR_g \to S_2$ such that $f \circ q_{\RR_g} = g$.
The induced mapping $f$ is a homeomorphism, if and only if $g$ is a quotient mapping.


$\qquad \begin{xy} \xymatrix@L+2mu@+1em{
 S_1 \ar[r]^*{ q_{\RR_g} }
     \ar[rd]_*{g}
&
 S_1 / \RR_g \ar@{-->}[d]^*{f}
\\ &
 S_2
}\end{xy}$


Proof
Continuous Surjection Induces Continuous Bijection from Quotient Space shows that $g$ is well-defined.
Let $f$ be a homeomorphism.
Injective Quotient Mapping Equals Homeomorphism shows that $f$ is a quotient mapping.
Composite of Quotient Mappings in Topology is Quotient Mapping shows that $g = f \circ q_{\RR_g}$ is a quotient mapping.
$\Box$

Let $g$ be a quotient mapping.
Quotient Mapping and Continuous Mapping Induces Continuous Mapping/Corollary shows that $f$ is a quotient mapping.
Injective Quotient Mapping Equals Homeomorphism shows that $f$ is a homeomorphism.
$\blacksquare$


Sources
2000: James R. Munkres: Topology (2nd ed.): $2$: Topological Spaces and Continuous Functions: $\S 22$: The Quotient Topology




