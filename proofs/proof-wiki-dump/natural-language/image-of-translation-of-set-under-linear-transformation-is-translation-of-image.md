# 

Source: https://proofwiki.org/wiki/Image_of_Translation_of_Set_under_Linear_Transformation_is_Translation_of_Image

Theorem
Let $K$ be a field.
Let $X$ and $Y$ be vector spaces over $K$. 
Let $T : X \to Y$ be a linear transformation.
Let $E \subseteq X$ be a non-empty set.
Let $x \in X$.

Then: 

$\map T {E + x} = \map T E + T x$
where $E + x$ denotes the translation of $E$ by $x$.


Proof
We have: 

$y \in \map T {E + x}$
if and only if:

$y = \map T {u + x}$ for some $u \in E$.
From the linearity of $T$, this is equivalent to: 

$y = T u + T x$ for some $u \in E$.
This is equivalent to:

$y \in \map T E + T x$
So by the definition of set equality we have:

$\map T {E + x} = \map T E + T x$
$\blacksquare$





