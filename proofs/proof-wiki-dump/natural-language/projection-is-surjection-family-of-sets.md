# 

Source: https://proofwiki.org/wiki/Projection_is_Surjection/Family_of_Sets

Theorem
Let $\family {S_\alpha}_{\alpha \mathop \in I}$ be a family of sets.
Let $\ds \prod_{\alpha \mathop \in I} S_\alpha$ be the Cartesian product of $\family {S_\alpha}_{\alpha \mathop \in I}$.
Let each of $S_\alpha$ be non-empty.
For each $\beta \in I$, let $\ds \pr_\beta: \prod_{\alpha \mathop \in I} S_\alpha \to S_\beta$ be the $\beta$th projection on $\ds S = \prod_{\alpha \mathop \in I} S_\alpha$.

Then $\pr_\beta$ is a surjection.


Proof
Consider the $\beta$th projection.
Let $x_\beta \in S_\beta$.
Let $\map x \beta = x_\beta$
Suppose $\gamma \in I: \gamma \ne \beta$.
As $S_\gamma \ne \O$ it is possible to use the axiom of choice to choose $\map x \gamma \in S_\gamma$.
Then:

$\ds x \in \prod_{\alpha \mathop \in I} S_\alpha$
and:

$\map {\pr_\beta} x = \map x \beta$
Hence the result.
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $1$: Theory of Sets: $\S 10$: Arbitrary Products




