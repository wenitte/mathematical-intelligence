# 

Source: https://proofwiki.org/wiki/Linear_Transformation_defined_from_Graph

Theorem
Let $K$ be a field.
Let $X$ and $Y$ be vector spaces over $K$. 
Let $X \times Y$ be the direct product of $X$ and $Y$.
Let $U$ be a vector subspace of $X \times Y$ such that:

whenever $\tuple { {\mathbf 0}_X, y} \in U$, we have $y = {\mathbf 0}_Y$
Define:

$\map D T = \set {x \in X : \tuple {x, y} \in U \text { for some } y \in Y}$

Then there exists a linear transformation $T : \map D T \to Y$ with graph $\map \GG T = U$. 


Proof
We first show that $\map D T$ is a vector subspace of $X$.
We have $\tuple { {\mathbf 0}_X, {\mathbf 0}_Y} \in U$, so ${\mathbf 0}_X \in \map D T$. 
Hence $\map D T \ne \O$. 
Let $x, y \in \map D T$ and $\alpha \in \C$.
Then there exists $u, v \in Y$ such that $\tuple {x, u} \in U$ and $\tuple {y, v} \in U$. 
Since $U$ is a vector subspace we have:

$\tuple {x, u} + \alpha \tuple {y, v} = \tuple {x + \alpha y, u + \alpha v} \in U$
So $x + \alpha y \in \map D T$.
Hence from the One-Step Vector Subspace Test, we have that $\map D T$ is a vector subspace of $X$.
Suppose that $\tuple {x, y_1}, \tuple {x, y_2} \in U$.
Then $\tuple { {\mathbf 0}_X, y_1 - y_2} = \tuple {x, y_1} - \tuple {x, y_2} \in U$ since $U$ is a vector subspace of $X \times Y$. 
So $y_1 - y_2 = {\mathbf 0}_Y$ and hence $y_1 = y_2$. 
Hence we can define $T x$ as the unique $y$ such that $\tuple {x, y} \in U$ for $x \in \map D T$.
Clearly we will have $\map G T = U$. 
We just need to show that $T$ is linear.
Let $x, y \in \map D T$ and $\alpha \in \C$.
Then we have $\tuple {x, T x} + \alpha \tuple {y, T y} = \tuple {x + \alpha y, T x + \alpha T y} \in U$.
Since $\map T {x + \alpha y}$ is unique with $\tuple {x + \alpha y, \map T {x + \alpha y} } \in U$, we have:

$\map T {x + \alpha y} = T x + \alpha T y$
Hence $T$ is linear.
$\blacksquare$





