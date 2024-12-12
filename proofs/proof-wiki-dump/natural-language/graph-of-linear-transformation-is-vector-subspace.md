# 

Source: https://proofwiki.org/wiki/Graph_of_Linear_Transformation_is_Vector_Subspace

Theorem
Let $K$ be a field.
Let $X$ and $Y$ be vector spaces over $K$.
Let $X \times Y$ be the direct product of $X$ and $Y$.
Let $T : X \to Y$ be a linear transformation.
Define:

$\map \GG T = \set {\tuple {x, T x} : x \in X} \subseteq X \times Y$

Then $\map \GG T$ is a vector subspace of $X \times Y$. 


Proof
Since $\map T { {\mathbf 0}_X} = {\mathbf 0}_Y$, we have:

$\tuple { {\mathbf 0}_X, {\mathbf 0}_Y} \in \map \GG T$
So $\map \GG T \ne \O$.
Hence from One-Step Vector Subspace Test, it is enough to show that $u + \lambda v \in \map \GG T$ for $u, v \in \map \GG T$ and $\lambda \in K$. 
Let $\alpha \in K$ and $\tuple {x, T x}, \tuple {y, T x} \in \map \GG T$.
Then we have:

$\tuple {x, T x} + \alpha \tuple {y, T y} = \tuple {x + \alpha y, T x + \alpha T y}$
Since $T$ is linear, we have that $T x + \alpha T y = \map T {x + \alpha y}$. 
Hence:

$\tuple {x, T x} + \alpha \tuple {y, T y} = \tuple {x + \alpha y, \map T {x + \alpha y} } \in \map \GG T$
Hence from One-Step Vector Subspace Test, $\map \GG T$ is a vector subspace of $X \times Y$.
$\blacksquare$





