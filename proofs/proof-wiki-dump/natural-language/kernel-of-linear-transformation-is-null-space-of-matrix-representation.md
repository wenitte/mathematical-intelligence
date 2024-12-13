# 

Source: https://proofwiki.org/wiki/Kernel_of_Linear_Transformation_is_Null_Space_of_Matrix_Representation

Theorem
Let $V$ and $W$ be finite dimensional vector spaces.
Let $\phi: V \to W$ be a linear transformation from $V$ to $W$.
Let $\tuple {e_1, \ldots, e_n}$ and $\tuple {f_1, \ldots, f_m}$ be ordered bases of $V$ and $W$ respectively.
Let $A$ be the matrix of $\phi$ in these bases.

Define $f: V \to \R^n$ by:

$\ds \sum_{i \mathop = 1}^n a_i e_i \mapsto \tuple {a_1, \ldots, a_n}$
and $g : W \to \R^m$ by:

$\ds \sum_{i \mathop = 1}^m b_i f_i \mapsto \tuple {b_1, \ldots, b_m}$
Let $\map N A = \set {x \in \R^n: A x = 0}$ be the null space of $A$.
Let $\map \ker \phi = \set {x \in V: \phi x = 0}$ be the kernel of $\phi$.

Then:

$f \sqbrk {\map \ker \phi} = \map N A$
and

$f^{-1} \sqbrk {\map N A} = \map \ker \phi$
where $f \sqbrk X$ denotes the image set of a subset $X$ of the domain of $f$.


Proof

This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.

This article needs proofreading.In particular: Use of injectivity of $g$ here is implicit; but I think it's still rigorous without details: second opinion welcomeIf you believe all issues are dealt with, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
By the definition of the matrix $A$:

$A \circ f = g \circ \phi$
Therefore if $x \in \map \ker \phi$ we have:

$A \map f x = \map g {\map \phi x} = \map g 0 = 0$
This shows that:

$f \sqbrk {\map \ker \phi} \subseteq \map N A$

Now let $x = \tuple {x_1, \ldots, x_n} \in \map N A$.
Let $y = x_1 e_1 + \cdots + x_n e_n \in V$.
We have:

$\map {g \circ \phi} y = \map {A \circ f} y = \map A {x_1, \ldots, x_n}^T = 0$
so:

$\map \phi y = 0 f_1 + \cdots + 0 f_m = 0$
This shows that $y \in \map \ker \phi$.
Since $x = \map f y$, we have shown that:

$\map N A \subseteq \map f {\map \ker \phi}$
Therefore:

$\map f {\map \ker \phi} = \map N A$

We deduce immediately from the definitions that:

$\map \ker \phi \subseteq f^{-1} \sqbrk {\map N A}$
Now suppose that $x \in f^{-1} \sqbrk {\map N A}$.
Then:

$\map f x \in \map N A$
Therefore:

$\map {g \circ \phi} x = \map {A \circ f} x = 0$
so:

$\map \phi x = 0 f_1 + \cdots + 0 f_m = 0$
This shows that:

$f^{-1} \sqbrk {\map N A} \subseteq \map \ker \phi$
as required.
$\blacksquare$





