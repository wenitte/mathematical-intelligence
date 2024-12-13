# 

Source: https://proofwiki.org/wiki/Product_of_Positive_Strictly_Increasing_Mappings_is_Strictly_Increasing


This article needs to be linked to other articles.In particular: throughout, including categoryYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $A$ be an ordered set.
Let $B$ be an ordered field.
Let $f, g: A \to B$ be strictly increasing mappings with positive values.
Let $h: A \to B$ be defined by $\map h x = \map f x \map g x$.

Then $h$ is strictly increasing.


Proof
Let $x, y \in A$ such that $x < y$.
If $\map h x = 0$.
By the definition of strictly increasing:

$\map f y > \map f x \ge 0$
and:

$\map g y > \map g x \ge 0$
So:

$\map h y > 0 = \map h x$

If $\map h x \ne 0$, then $\map h x > 0$
so:

$\map f x > 0$
and:

$\map g x > 0$
Also:

$\map f x < \map f y$
and:

$\map g x < \map g y$
by the definition of strictly increasing.
Because $\map g x > 0$:

$\map f x \map g x < \map f y \map g x$
Because $\map f y > 0$:

$\map f y \map g x < \map f y \map g y$
By transitivity:

$\map h x = \map f x \map g x < \map f y \map g y = \map h y$
$\blacksquare$


This article is complete as far as it goes, but it could do with expansion.In particular: $B$ ordered ring?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding this information.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Expand}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.

This article is complete as far as it goes, but it could do with expansion.In particular: Generalize by induction to finite productsYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding this information.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Expand}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.




