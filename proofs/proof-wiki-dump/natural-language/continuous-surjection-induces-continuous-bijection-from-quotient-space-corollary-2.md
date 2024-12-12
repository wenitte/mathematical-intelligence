# 

Source: https://proofwiki.org/wiki/Continuous_Surjection_Induces_Continuous_Bijection_from_Quotient_Space/Corollary_2

Theorem
Let $\struct {S_1, \tau_1}$ and $\struct {S_2, \tau_2}$ be topological spaces.
Let $g: S_1 \to S_2$ be a continuous surjection.
Let $\RR_g \subseteq S_1 \times S_1$ be the equivalence on $S_1$ induced by $g$:

$\tuple {s_1, s_2} \in \RR_g \iff \map g {s_1} = \map g {s_2}$
Let $q_{\RR_g}: S_1 \to S_1 / \RR_g$ be the canonical surjection induced by the equivalence relation $\RR_g$.
Let $\tau_{\RR_g}$ be the quotient topology on the quotient space $S_1 / \RR_g$ by $q_{\RR_g}$.

If $S_2$ is a Hausdorff space, then $S_1 / \RR_g$ is a Hausdorff space.


Proof
Continuous Surjection Induces Continuous Bijection from Quotient Space shows there exists a continuous bijection $f: S_1 / \RR_g \to S_2$.
Let $\eqclass {s_1}{\RR_g}, \eqclass {s_2}{\RR_g} \in S_1 / \RR_g$ such that $\eqclass {s_1}{\RR_g} \ne \eqclass {s_2}{\RR_g}$.
As $f$ is injective, $\map f { \eqclass {s_1}{\RR_g} } \ne \map f { \eqclass {s_2}{\RR_g} }$.
As $S_2$ is a Hausdorff space, there exists disjoint open sets $U_1, U_2 \in \tau_2$ such that $\map f { \eqclass {s_1}{\RR_g} } \in U_1$ and $\map f { \eqclass {s_2}{\RR_g} } \in U_2$.
It follows that $f^{-1} \sqbrk {U_1}$ and $f^{-1} \sqbrk {U_2}$ are disjoint.
As $f$ is continuous, we have $f^{-1} \sqbrk {U_1}, f^{-1} \sqbrk {U_2} \in \tau_{\RR_g}$.
By definition of Hausdorff space, $S_1 / \RR_g$ is a Hausdorff space.
$\blacksquare$


Sources
2000: James R. Munkres: Topology (2nd ed.): $2$: Topological Spaces and Continuous Functions: $\S 22$: The Quotient Topology




