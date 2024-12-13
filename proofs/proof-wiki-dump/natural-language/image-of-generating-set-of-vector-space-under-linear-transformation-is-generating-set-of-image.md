# 

Source: https://proofwiki.org/wiki/Image_of_Generating_Set_of_Vector_Space_under_Linear_Transformation_is_Generating_Set_of_Image

Theorem
Let $K$ be a field.
Let $X$ be a vector space over $K$. 
Let $T : X \to Y$ be a linear transformation.
Let $G$ be a generating set for $X$. 

Then $T \sqbrk G$ be a generating set for $T \sqbrk X$. 


Proof
Let $y \in T \sqbrk X$.
Then there exists $x \in X$ such that $y = T x$.
Since $G$ generates $X$, there exists $n \in \N$, $x_1, \ldots, x_n \in G$ and $\alpha_1, \ldots, \alpha_n \in K$ such that: 

$\ds x = \sum_{i \mathop = 1}^n \alpha_i x_i$
Then from the linearity of $T$ we have: 

$\ds y = T x = \sum_{i \mathop = 1}^n \alpha_i T x_i$
with $T x_i \in T \sqbrk G$ for each $1 \le i \le n$. 
So:

$T \sqbrk X \subseteq \map \span {T \sqbrk G}$
and so:

$T \sqbrk X = \map \span {T \sqbrk G}$
So $T \sqbrk G$ is a generating set for $T \sqbrk X$. 
$\blacksquare$





