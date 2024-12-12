# 

Source: https://proofwiki.org/wiki/Closure_of_Linear_Subspace_of_Topological_Vector_Space_is_Linear_Subspace

Theorem
Let $K$ be a topological field.
Let $X$ be a topological vector space over $K$.
Let $Y$ be a linear subspace of $X$.

Then the closure $Y^-$ of $Y$ is a linear subspace of $X$.


Proof
Since $Y \subseteq Y^-$, we have that $Y^-$ is non-empty.
We now use the One-Step Vector Subspace Test.
We show that for each $\lambda \in K$ and $u, v \in Y^-$ we have: 

$u + \lambda v \in Y^-$
That is, we want to show that: 

$Y^- + \lambda Y^- \subseteq Y^-$
for each $\lambda \in K$. 
Let $\lambda \in K$.
Then: 














\(\ds Y^- + \lambda Y^-\)

\(=\)







\(\ds Y^- + \paren {\lambda Y}^-\)





Dilation of Closure of Set in Topological Vector Space is Closure of Dilation














\(\ds \)

\(\subseteq\)







\(\ds \paren {Y + \lambda Y}^-\)





Sum of Closures is Subset of Closure of Sum in Topological Vector Space



Since $Y$ is a linear subspace, for each $u, v \in Y$ we have: 

$u + \lambda v \in Y$
So:

$Y + \lambda Y \subseteq Y$
From Topological Closure of Subset is Subset of Topological Closure, we therefore have: 

$\paren {Y + \lambda Y}^- \subseteq Y^-$
so that: 

$Y^- + \lambda Y^- \subseteq Y^-$
for each $\lambda \in K$ as required.
$\blacksquare$


Sources
1991: Walter Rudin: Functional Analysis (2nd ed.) ... (previous) ... (next): $1.13$: Theorem




