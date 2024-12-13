# 

Source: https://proofwiki.org/wiki/Identity_Morphism_is_Unique

Theorem
Let $\mathbf C$ be a category.
Let $X$ be an object of $\mathbf C$.
Then the identity morphism $\operatorname{id}_X : X \to X$ is unique.


Proof
Let $\operatorname{id}_X^1$, $\operatorname{id}_X^2$ be two identity morphisms for $X$.
By definition, for any morphism $f : Y \to X$, we have:

$\operatorname{id}_X^1 \circ f = f$
In particular, taking $Y = X$ and $f = \operatorname{id}_X^2$, we have:

$\operatorname{id}_X^1 \circ \operatorname{id}_X^2 = \operatorname{id}_X^2$

Similarly, for any morphism $g : X \to Y$, we have:

$g \circ \operatorname{id}_X^2 = g$
So taking $Y = X$ and $g = \operatorname{id}_X^1$ we have:

$\operatorname{id}_X^1 \circ \operatorname{id}_X^2 = \operatorname{id}_X^1$

Putting this together we have:

$\operatorname{id}_X^2 = \operatorname{id}_X^1 \circ \operatorname{id}_X^2 = \operatorname{id}_X^1$
as required.
$\blacksquare$





