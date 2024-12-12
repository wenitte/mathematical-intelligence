# 

Source: https://proofwiki.org/wiki/Countable_Product_of_Separable_Spaces_is_Separable

Theorem
Let $I$ be an indexing set with countable cardinality.
Let $\family {\struct {S_\alpha, \tau_\alpha} }_{\alpha \mathop \in I}$ be a family of topological spaces indexed by $I$.
Let $\ds \struct {S, \tau} = \prod_{\alpha \mathop \in I} \struct {S_\alpha, \tau_\alpha}$ be the product space of $\family {\struct {S_\alpha, \tau_\alpha} }_{\alpha \mathop \in I}$.

Let each of $\struct {S_\alpha, \tau_\alpha}$ be separable.

Then $\struct {S, \tau}$ is also separable.


Proof
For each $\alpha \in I$, let $D_\alpha$ be a countable everywhere dense subset of $\struct {S_\alpha, \tau_\alpha}$.
Let $D = \ds \prod_{\alpha \mathop \in I} D_\alpha$.
From Countable Union of Countable Sets is Countable, $D$ is a countable set of $S$.

From Natural Basis of Product Topology, the set $\BB$ of cartesian products of the form $\ds \prod_{\alpha \mathop \in I} U_\alpha$ where:

for all $\alpha \in I : U_\alpha \in \tau_\alpha$
for all but finitely many indices $\alpha : U_\alpha = X_\alpha$
is a basis for $\tau$.
From Analytic Basis Characterization of Denseness, to show that $D$ is an everywhere dense subset in $\struct {S, \tau}$ it is sufficient to show that:

$\forall U \in \BB : U \cap D \ne \O$

Let $U = \ds \prod_{\alpha \mathop \in I} U_\alpha \in \BB$.
Then:

$\forall \alpha \in I : U_\alpha \cap D_\alpha \ne \O$

For all $\alpha \in I$, let $x_\alpha \in U_\alpha \cap D_\alpha$.
Then:














\(\ds \family{x_\alpha}_{\alpha \in I}\)

\(\in\)







\(\ds \prod_{\alpha \mathop \in I} \paren {U_\alpha \cap D_\alpha}\)




















\(\ds \)

\(=\)







\(\ds \paren {\prod_{\alpha \mathop \in I} U_\alpha} \bigcap \paren {\prod_{\alpha \mathop \in I}  D_\alpha}\)





General Case of Cartesian Product of Intersections














\(\ds \)

\(=\)







\(\ds U \cap D\)









Thus:

$U \cap D \ne \O$
The result follows.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $3$: Compactness: Invariance Properties




