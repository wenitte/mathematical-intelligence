# 

Source: https://proofwiki.org/wiki/Image_of_Dilation_of_Set_under_Linear_Transformation_is_Dilation_of_Image

Theorem
Let $K$ be a field.
Let $X$ and $Y$ be vector spaces over $K$. 
Let $T : X \to Y$ be a linear transformation.
Let $E \subseteq X$ be a non-empty set.
Let $\lambda \in K$. 

Then: 

$\map T {\lambda E} = \lambda \map T E$
where $\lambda E$ denotes the dilation of $E$ by $\lambda$.


Proof
We have: 

$y \in \map T {\lambda E}$
if and only if:

$y = \map T {\lambda x}$ for some $x \in E$.
From the linearity of $T$, this is equivalent to:

$y = \lambda T x$
This is equivalent to:

$y \in \lambda \map T E$
So by the definition of set equality we have:

$\map T {\lambda E} = \lambda \map T E$
$\blacksquare$





