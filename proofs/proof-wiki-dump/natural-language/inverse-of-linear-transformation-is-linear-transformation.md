# 

Source: https://proofwiki.org/wiki/Inverse_of_Linear_Transformation_is_Linear_Transformation

Theorem
Let $K$ be a field. 
Let $V$ and $U$ be vector spaces over $K$.
Let $A : V \to U$ be an invertible (in the sense of a mapping) linear transformation with inverse mapping $A^{-1} : U \to V$.

Then $A^{-1}$ is a linear transformation.


Proof
We aim to show that: 

$\map {A^{-1} } {\alpha x + \beta y} = \alpha A^{-1} x + \beta A^{-1} y$
for all $x, y \in U$ and $\alpha, \beta \in K$.
Since $A$ is a linear transformation, we have: 

$\map A {\alpha u + \beta v} = \alpha A u + \beta A v$
for each $u, v \in V$. 
Note that we have $A^{-1} x \in V$ and $A^{-1} y \in V$, so that: 

$\map A {\alpha A^{-1} x + \beta A^{-1} y} = \alpha x + \beta y$
for each $x, y \in U$ and $\alpha, \beta \in K$.
Composing with $A^{-1}$, we then have: 

$\map {\paren {A^{-1} \circ A} } {\alpha A^{-1} x + \beta A^{-1} y} = \map {A^{-1} } {\alpha x + \beta y}$
From the definition of an inverse mapping, we therefore have: 

$\ds \map {A^{-1} } {\alpha x + \beta y} = \alpha A^{-1} x + \beta A^{-1} y$
for all $x, y \in U$ and $\alpha, \beta \in K$.
So:

$A^{-1}$ is a linear transformation.
$\blacksquare$





