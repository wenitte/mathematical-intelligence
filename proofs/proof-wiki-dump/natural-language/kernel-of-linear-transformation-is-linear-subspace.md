# 

Source: https://proofwiki.org/wiki/Kernel_of_Linear_Transformation_is_Linear_Subspace


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $V, W$ be normed vector spaces on a field $F$.


This article, or a section of it, needs explaining.In particular: Why do they need to be normed?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Let $T: V \to W$ be a linear transformation.

Then the kernel of $T$ is a linear subspace of $V$.


This article, or a section of it, needs explaining.In particular: We need to decide whether we want to use the term "linear subspace" in the first place. The term has a number of different meanings depending on the universe of discourse.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.


Proof
By Kernel of Linear Transformation contains Zero Vector, $0_V \in \ker T$.


Closure under Addition
For $x, y \in \ker T$:

$\map T {x + y} = \map T x + \map T y = 0_W + 0_W = 0_W$
so:

$x + y \in \ker T$
so $\ker T$ is closed under addition.
$\Box$


Closure under Scalar Multiplication
For $k \in F, x \in \ker T$:

$\map T {k x} = k \map T x = k 0_W = 0_W$
so:

$k x \in \ker T$
So $\ker T$ is closed under scalar multiplication.
Hence the result by definition of linear subspace.
$\blacksquare$





