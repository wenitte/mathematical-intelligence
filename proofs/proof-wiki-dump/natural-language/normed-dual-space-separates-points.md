# 

Source: https://proofwiki.org/wiki/Normed_Dual_Space_Separates_Points

Theorem
Let $\struct {X, \norm \cdot_X}$ be a normed vector space. 
Let $\struct {X^\ast, \norm \cdot_{X^\ast} }$ be the normed dual space of $X$. 


This article, or a section of it, needs explaining.In particular: Do you really need the norm $\norm \cdot_{X^\ast}$?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.

Then $X^\ast$ separates points.
That is, suppose that $x, y \in X$ are such that:

$\map f x = \map f y$ for each $f \in X^\ast$.
Then $x = y$. 


Proof

Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: All $\norm \cdot$ below should be $\norm \cdot_X$You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
From Existence of Support Functional, there exists a $\phi \in X^\ast$ such that: 

$\map \phi {x - y} = \norm {x - y}$
Since $\phi$ is linear, we then have: 

$\map \phi x - \map \phi y = \norm {x - y}$
By hypothesis, we have: 

$\map \phi x = \map \phi y$
so:

$\norm {x - y} = 0$
Since a norm is positive definite, we then have: 

$x - y = 0$
so that: 

$x = y$
$\blacksquare$


Sources
2020: James C. Robinson: Introduction to Functional Analysis ... (previous) ... (next) $20.1$: Existence of a Support Functional




