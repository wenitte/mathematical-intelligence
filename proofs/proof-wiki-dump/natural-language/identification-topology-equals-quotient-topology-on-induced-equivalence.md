# 

Source: https://proofwiki.org/wiki/Identification_Topology_equals_Quotient_Topology_on_Induced_Equivalence

Theorem
Let $\struct {S_1, \tau_1}$ be a topological space.
Let $S_2$ be a set.
Let $f: S_1 \to S_2$ be a surjective mapping.
Let $\tau_2$ be the identification topology on $S_2$ with respect to $f$ and $\struct {S_1, \tau_1}$:

$\tau_2 = \set {V \subseteq S_2 : f^{-1} \sqbrk V \in \tau_1}$
Let $\RR_f \subseteq S_1 \times S_1$ be the equivalence on $S_1$ induced by $f$:

$\tuple {s_1, s_2} \in \RR_f \iff \map f {s_1} = \map f {s_2}$
Let $q_{\RR_f}$ be the quotient mapping induced by $\RR_f$.
Let $\tau_{\RR_f}$ be the quotient topology on $S_1 / \RR_f$ by $q_{\RR_f}$:

$\tau_{\RR_f} := \set {U \subseteq S_1 / \RR_f: q_{\RR_f}^{-1} \sqbrk U \in \tau_1}$

Then:

$\struct{ S_2, \tau_2 }$ is homeomorphic to the quotient space $\struct{ S_1 / \RR_f, \tau_{\RR_f} }$.


Proof
Define a mapping $\tilde f: S_1 / \RR_f \to S_2$ by:

$\map {\tilde f}{\eqclass s { \RR_f} } = \map f s$
$\begin{xy} \xymatrix@L+2mu@+1em{
S_1 \ar[r]^*{f}
    \ar[rd]_*{ q_{\RR_f} }

&

S_2 

\\ &

S_1 / \RR_f \ar@{-->}[u]^*{\tilde f}

}\end{xy}$
Then $\tilde f$ is well-defined, as for all $s' \in \eqclass s { \RR_f}$, we have $\map f {s'} = \map f s$.
For any $s_1 , s_2 \in S_1$ with $\eqclass {s_1}{\RR_f} \ne \eqclass {s_2}{\RR_f}$, we have $\map f {s_1} \ne \map f {s_2}$, so $\map {\tilde f}{\eqclass {s_1}{ \RR_f} } \ne \map {\tilde f}{\eqclass {s_2}{ \RR_f} }$.
It follows that $\tilde f$ is injective.
For all $t \in S_2$, we can find $s \in S_1$ such that $\map f s = t$, as $f$ is surjective.
Then $\map {\tilde f}{\eqclass s { \RR_f} } = t$, so $\tilde f$ is surjective.
Let $V \in \tau_2$.
As Identification Mapping is Continuous, it follows that $ f^{-1} \sqbrk V \in \tau_1$.
Then:














\(\ds f^{-1} \sqbrk V\)

\(=\)







\(\ds \set { s \in S_1 : \map f s \in V }\)




















\(\ds \)

\(=\)







\(\ds q_{\RR_f}^{-1} \sqbrk { \set{ \eqclass s { \RR_f} \in S_1 / \RR_f : \map f s \in V } }\)










By definition of quotient topology, we have $\set{ \eqclass s { \RR_f} \in S_1 / \RR_f : \map f s \in V } \in \tau_{\RR_f}$.
By definition of continuity, $\tilde f$ is continuous.
Let $U \in \tau_{\RR_f}$.
By definition of quotient topology, we have $q_{\RR_f}^{-1} \sqbrk U \in \tau_1$.
By definition of identification topology, we have $f \sqbrk { q_{\RR_f}^{-1} \sqbrk U } \in \tau_2$.
Then:














\(\ds f \sqbrk { q_{\RR_f}^{-1} \sqbrk U }\)

\(=\)







\(\ds f \sqbrk { \set { s \in S_1 : \map { q_{\RR_f} } s  \in U } }\)




















\(\ds \)

\(=\)







\(\ds \set { t \in S_2 : \map f s = t, \eqclass s { \RR_f} \in U }\)




















\(\ds \)

\(=\)







\(\ds \tilde f \sqbrk U\)




















\(\ds \)

\(=\)







\(\ds \paren{ \tilde f^{-1} }^{-1} \sqbrk U\)










By definition of continuity, $\tilde f^{-1}$ is continuous.
By definition of homeomorphism, $\tilde f$ is a homeomorphism between $\struct{ S_1 / \RR_f, \tau_{\RR_f} }$ and $\struct {S_2, \tau_2}$.
$\blacksquare$


Sources
2000: James R. Munkres: Topology (2nd ed.): $2$: Topological Spaces and Continuous Functions: $\S 22$: The Quotient Topology




