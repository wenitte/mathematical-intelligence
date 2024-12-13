# 

Source: https://proofwiki.org/wiki/Quotient_Mapping_Induces_Homeomorphism_between_Quotient_Space_and_Image

Theorem
Let $\struct {S_1, \tau_1}$ and $\struct {S_2, \tau_2}$ be topological spaces.
Let $f: S_1 \to S_2$ be a quotient mapping.
Let $\RR_f \subseteq S_1 \times S_1$ be the equivalence on $S_1$ induced by $f$:

$\tuple {s_1, s_2} \in \RR_f \iff \map f {s_1} = \map f {s_2}$
Let $q_{\RR_f}: S_1 \to S_1 / \RR_f$ be the quotient mapping induced by $\RR_f$.
Let $\tau_{\RR_f}$ be the quotient topology on $S_1 / \RR_f$ by $q_{\RR_f}$.

Then there exists a uniquely defined homeomorphism $\tilde f: S_1 / \RR_f \to S_2$ such that $f = \tilde f \circ q_{\RR_f}$.
The homeomorphism between the quotient space $\struct {S_1 / \RR_f, \tau_{\RR_f} }$ and $\struct {S_2, \tau_2}$ is defined by:

$\map {\tilde f}{\eqclass s { \RR_f} } = \map f s$


Proof
Quotient Mapping equals Surjective Identification Mapping shows that $\tau_2$ is the identification topology on $S_2$ with respect to $f$ and $\struct { S_1, \tau_1}$.
Identification Topology equals Quotient Topology on Induced Equivalence shows that $\struct {S_1 / \RR_f, \tau_{\RR_f} }$ and $\struct {S_2, \tau_2}$ are homeomorphic.
The proof of Identification Topology equals Quotient Topology on Induced Equivalence shows that a homeomorphism $\tilde f: S_1 / \RR_f \to S_2$ is defined by:

$\map {\tilde f}{\eqclass s { \RR_f} } = \map f s$

As we have $\map { q_{\RR_f} } s = \eqclass s { \RR_f}$, it follows that $\tilde f \circ q_{\RR_f} = f$.
To show uniqueness, let $g: S_1 / \RR_f \to S_2$ be a mapping such that $g \circ q_{\RR_f} = f$.
For all $t \in S_2$, we can find $s \in S_1$ such that $\map f s = t$, as $f$ is surjective by definition of quotient mapping.
Then:

$\map { g \circ q_{\RR_f} } s = \map f s = \map { \tilde f \circ q_{\RR_f} } s$
and as $\map {q_{\RR_f} } s$ is uniquely defined, we must have $\map g {\eqclass s { \RR_f} } = \map {\tilde f}{\eqclass s { \RR_f} }$.
As this is true for all $\map g {\eqclass s { \RR_f} } \in S_2$, it follows that $g = \tilde f$.
$\blacksquare$





