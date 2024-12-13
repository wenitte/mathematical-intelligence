# 

Source: https://proofwiki.org/wiki/Projection_is_Surjection



Theorem
Let $S$ and $T$ be non-empty sets.
Let $S \times T$ be the Cartesian product of $S$ and $T$.
Let $\pr_1: S \times T \to S$ and $\pr_2: S \times T \to T$ be the first projection and second projection respectively on $S \times T$.

Then $\pr_1$ and $\pr_2$ are both surjections.


General Version
For all non-empty sets $S_1, S_2, \ldots, S_j, \ldots, S_n$, the $j$th projection $\pr_j$ on $\ds \prod_{i \mathop = 1}^n S_i$ is a surjection.


Family of Sets
Let $\family {S_\alpha}_{\alpha \mathop \in I}$ be a family of sets.
Let $\ds \prod_{\alpha \mathop \in I} S_\alpha$ be the Cartesian product of $\family {S_\alpha}_{\alpha \mathop \in I}$.
Let each of $S_\alpha$ be non-empty.
For each $\beta \in I$, let $\ds \pr_\beta: \prod_{\alpha \mathop \in I} S_\alpha \to S_\beta$ be the $\beta$th projection on $\ds S = \prod_{\alpha \mathop \in I} S_\alpha$.

Then $\pr_\beta$ is a surjection.


Proof
Let $S$ and $T$ be sets such that neither is empty.

Let $\pr_1: S \times T \to S$ be the first projection on $S \times T$.
Then by definition of first projection:

$\forall x \in S: \exists \tuple {x, t} \in S \times T: \map {\pr_1} {x, t} = x$

Similarly, let $\pr_2: S \times T \to T$ be the second projection on $S \times T$.
Then by definition of second projection:

$\forall x \in T: \exists \tuple {s, x} \in S \times T: \map {\pr_2} {s, x} = x$

Hence the result.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 13$: Compositions Induced on Cartesian Products and Function Spaces
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{I}$: Sets and Functions: Exercise $\text{R}$
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 5$. Induced mappings; composition; injections; surjections; bijections: Example $5.5$
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $1$: Theory of Sets: $\S 6$: Functions: Exercise $5$




