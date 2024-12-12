# 

Source: https://proofwiki.org/wiki/Continuous_Surjection_Induces_Continuous_Bijection_from_Quotient_Space



Theorem
Let $\struct {S_1, \tau_1}$ and $\struct {S_2, \tau_2}$ be topological spaces.
Let $g: S_1 \to S_2$ be a $\tuple {\tau_1, \tau_2}$-continuous surjection.
Let $\RR_g \subseteq S_1 \times S_1$ be the equivalence on $S_1$ induced by $g$:

$\tuple {s_1, s_2} \in \RR_g \iff \map g {s_1} = \map g {s_2}$
Let $q_{\RR_g}: S_1 \to S_1 / \RR_g$ be the canonical surjection induced by the equivalence relation $\RR_g$.
Let $\tau_{\RR_g}$ be the quotient topology on the quotient space $S_1 / \RR_g$ by $q_{\RR_g}$.

Then $g$ induces a $\tuple {\tau_{\RR_g}, \tau_2}$-continuous bijection $f: S_1 / \RR_g \to S_2$ such that $f \circ q_{\RR_g} = g$.

$\qquad \begin{xy} \xymatrix@L+2mu@+1em{
 S_1 \ar[r]^*{ q_{\RR_g} }
     \ar[rd]_*{g}
&
 S_1 / \RR_g \ar@{-->}[d]^*{f}
\\ &
 S_2
}\end{xy}$


Corollary 1
The induced mapping $f$ is a homeomorphism, if and only if $g$ is a quotient mapping.


Corollary 2
If $S_2$ is a Hausdorff space, then $S_1 / \RR_g$ is a Hausdorff space.


Proof
By definition of quotient topology, $q_{\RR_g}$ is a surjective identification mapping.
Quotient Mapping equals Surjective Identification Mapping shows that $q_{\RR_g}$ is a quotient mapping.
Quotient Mapping and Continuous Mapping Induces Continuous Mapping shows that $g$ induces a continuous mapping $f: S_1 / \RR_g \to S_2$ such that $f \circ q_{\RR_g} = g$.
As $g$ is surjective, it follows that $f$ is surjective.
Let $\eqclass {s_1} {\RR_g}, \eqclass {s_2} {\RR_g} \in S_1 / \RR_g$ such that $\map f {\eqclass {s_1} {\RR_g} } = \map f {\eqclass {s_2}{ \RR_g} }$.
As $f \circ q_{\RR_g} = g$, it follows that $\map g {s_1} = \map g {s_2}$.
By definition of equivalence relation induced by $g$, it follows that $\eqclass {s_1} {\RR_g} = \eqclass {s_2} {\RR_g}$.
By definition of injection, it follows that $f$ is injective.
As $f$ is injective and surjective, it follows that $f$ is bijective.
$\blacksquare$


Sources
2000: James R. Munkres: Topology (2nd ed.): $2$: Topological Spaces and Continuous Functions: $\S 22$: The Quotient Topology




