# 

Source: https://proofwiki.org/wiki/Cartesian_Space_of_Topological_Field_is_Topological_Vector_Space



Theorem
Let $K$ be a topological field.
Let $K^n$ be the cartesian $n$-th power of $K$, defining scalar multiplication and vector addition component-wise.
Equip $K^n$ with the product topology given by $K$.

Then $K^n$ is a topological vector space. 
Further, if $K$ is a Hausdorff topological field, then $K^n$ is a Hausdorff topological vector space.


Proof
If $K$ is Hausdorff, then from Product of Hausdorff Factor Spaces is Hausdorff the topology on $K^n$ is Hausdorff.
We therefore just need to show that scalar multiplication and vector addition are continuous. 

Vector Addition is Continuous
Let $\pr_i^A : K^n \to K$ be the projection of $K^n$ onto its $i$th factor.
Likewise let $\pr_i^B : K^n \times K^n \to K^n$ be the projection of $K^n \times K^n$ onto its $i$th factor.
Define $f : K^n \times K^n \to K$ by: 

$\map f {\tuple {x_1, x_2, \ldots, x_n}, \tuple {y_1, y_2, \ldots, y_n} } = \tuple {x_1 + y_1, x_2 + y_2, \ldots, x_n + y_n}$
for each $\tuple {x_1, x_2, \ldots, x_n}, \tuple {y_1, y_2, \ldots, y_n} \in K^n$.
From Continuous Mapping to Product Space, it suffices to show that $\pr_i \circ f$ with: 

$\map {\paren {\pr_i^A \circ f} } {\tuple {x_1, x_2, \ldots, x_n}, \tuple {y_1, y_2, \ldots, y_n} } = x_i + y_i$
for each $\tuple {x_1, x_2, \ldots, x_n}, \tuple {y_1, y_2, \ldots, y_n} \in K^n$, is a continuous map.
We can write: 














\(\ds \map {\paren {\pr_i^A \circ f} } {\tuple {x_1, x_2, \ldots, x_n}, \tuple {y_1, y_2, \ldots, y_n} }\)

\(=\)







\(\ds x_i + y_i\)




















\(\ds \)

\(=\)







\(\ds \map {\pr_i^A} {\tuple {x_1, x_2, \ldots, x_n} } + \map {\pr_i^A} {\tuple {y_1, y_2, \ldots, y_n} }\)




















\(\ds \)

\(=\)







\(\ds \map {\paren {\pr_i^A \circ \pr_1^B} } {\tuple {x_1, \ldots, x_n}, \tuple {y_1, \ldots, y_n} } +  \map {\paren {\pr_i^A \circ \pr_2^B} } {\tuple {x_1, \ldots, x_n}, \tuple {y_1, \ldots, y_n} }\)









so that: 

$\pr_i^A \circ f = \pr_i^A \circ \pr_1^B + \pr_i^A \circ \pr_2^B$
From Projection from Product Topology is Continuous, $\pr_1^B, \pr_2^B$ are continuous and: 

$\pr_i^A$ is continuous for each $1 \le i \le n$.
So from Composite of Continuous Mappings is Continuous, we have: 

$\pr_i^A \circ \pr_1^B$ is continuous for each $1 \le i \le n$
and:

$\pr_i^A \circ \pr_2^B$ is continuous for each $1 \le i \le n$.
So applying Sum of Continuous Functions on Topological Ring is Continuous, $\pr_i^A \circ f$ is continuous for each $1 \le i \le n$.
So from Continuous Mapping to Product Space, $f$ is continuous.
$\Box$

Scalar Multiplication of Continuous
Again let $\pr_i^A : K^n \to K$ be the projection of $K^n$ onto its $i$th factor.
Likewise let $\pr_i^B : K \times K^n \to K^n$ be the projection of $K^n \times K^n$ onto its $i$th factor.
Define $f : K \times K^n \to K$ by: 

$\map g {\lambda, \tuple {x_1, x_2, \ldots, x_n} } = \tuple {\lambda x_1, \lambda x_2, \ldots, \lambda x_n}$
for each $\lambda \in K, \, \tuple {x_1, x_2, \ldots, x_n} \in K^n$.
From Continuous Mapping to Product Space, it suffices to show that $\pr_i^A \circ f$ with: 

$\map {\paren {\pr_i^A \circ g} } {\lambda, \tuple {x_1, x_2, \ldots, x_n} } = \lambda x_i$
for each $\tuple {x_1, x_2, \ldots, x_n}, \tuple {y_1, y_2, \ldots, y_n} \in K^n$, is a continuous map.
We can write:














\(\ds \map {\paren {\pr_i^A \circ g} } {\lambda, \tuple {x_1, x_2, \ldots, x_n} }\)

\(=\)







\(\ds \lambda x_i\)




















\(\ds \)

\(=\)







\(\ds \lambda \map { {\pr_i}^A} {\tuple {x_1, x_2, \ldots, x_n} }\)




















\(\ds \)

\(=\)







\(\ds \map {\pr_1^B} {\lambda, \tuple {x_1, x_2, \ldots, x_n} } \map {\paren {\pr_i^A \circ \pr_2^B} } {\tuple {\lambda, \tuple {x_1, x_2, \ldots, x_n} } }\)









so that: 

$\pr_i^A \circ g = \pr_1^B \cdot \paren {\pr_i^A \circ \pr_2^B}$
From Projection from Product Topology is Continuous, $\pr_1^B, \pr_2^B$ are continuous and: 

$\pr_i^A$ is continuous for each $1 \le i \le n$.
So from Composite of Continuous Mappings is Continuous, we have: 

$\pr_i^A \circ \pr_2^B$ is continuous for each $1 \le i \le n$.
Then applying Product of Continuous Functions on Topological Ring is Continuous, $\pr_i^A \circ g$ is continuous for each $1 \le i \le n$.
So from Continuous Mapping to Product Space, $g$ is continuous.
$\blacksquare$





