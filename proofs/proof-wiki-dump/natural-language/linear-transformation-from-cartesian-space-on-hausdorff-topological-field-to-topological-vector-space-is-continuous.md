# 

Source: https://proofwiki.org/wiki/Linear_Transformation_from_Cartesian_Space_on_Hausdorff_Topological_Field_to_Topological_Vector_Space_is_Continuous

Theorem
Let $K$ be a topological field.
Let $K^n$ be the $n$-Cartesian space as a topological vector space with its product topology.
Let $X$ be a topological vector space over $K$.
Let $f : K^n \to X$ be a linear transformation.

Then $f$ is continuous.


Proof
Let $\set {e_1, \ldots, e_n}$ be the standard basis for $K^n$.
For each $\alpha_1, \alpha_2, \ldots, \alpha_n$ we have: 

$\ds \map f {\sum_{i \mathop = 1}^n \alpha_i e_i} = \sum_{i \mathop = 1}^n \alpha_i \map f {e_i}$
Let $\pr_i : K^n \to K$ be the projection of $K^n$ onto its $i$th factor, so that: 

$\ds \map {\pr_i} {\sum_{i \mathop = 1}^n \alpha_i e_i} = \alpha_i$
Then we have: 

$\ds \map f x = \sum_{i \mathop = 1}^n \map {\pr_i} x \map f {e_i}$
for each $x \in K^n$.
From Projection from Product Topology is Continuous:

$\pr_i$ is continuous for each $1 \le i \le n$.
From Linear Combination of Continuous Functions valued in Topological Vector Space is Continuous:

$f$ is continuous.
$\blacksquare$

Sources
1991: Walter Rudin: Functional Analysis (2nd ed.) ... (previous) ... (next): $1.20$: Lemma




