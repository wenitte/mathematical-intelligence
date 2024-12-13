# 

Source: https://proofwiki.org/wiki/Preimage_of_Dilation_of_Set_under_Linear_Transformation_is_Dilation_of_Preimage

Theorem
Let $K$ be a field.
Let $X$ and $Y$ be vector spaces over $K$. 
Let $T : X \to Y$ be a linear transformation.
Let $E \subseteq X$ be a non-empty set.
Let $\lambda \in K$. 

Then: 

$T^{-1} \sqbrk {\lambda E} = \lambda T^{-1} \sqbrk E$
where $\lambda E$ denotes the dilation of $E$ by $\lambda$.


Proof
The result is immediate when $\lambda = 0_K$, since $T^{-1} \sqbrk {\set { {\mathbf 0}_X} } = \set { {\mathbf 0}_X}$.
Now take $\lambda \ne 0_K$.
Let $x \in X$.
We have:

$x \in T^{-1} \sqbrk {\lambda E}$
if and only if:

$T x \in \lambda E$
From linearity, this is the case if and only if:

$\map T {\lambda^{-1} x} \in E$
This is equivalent to:

$\lambda^{-1} x \in T^{-1} \sqbrk E$
Which in turn is equivalent to:

$x \in \lambda T^{-1} \sqbrk E$
So we obtain:

$T^{-1} \sqbrk {\lambda E} = \lambda T^{-1} \sqbrk E$
$\blacksquare$





