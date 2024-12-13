# 

Source: https://proofwiki.org/wiki/Restriction_of_Injection_is_Injection

Theorem
Let $f: S \to T$ be an injection.
Let $X \subseteq S$ be a subset of $S$.
Let $f \sqbrk X$ denote the image of $X$ under $f$.
Let $Y \subseteq T$ be a subset of $T$ such that $f \sqbrk X \subseteq Y$.

The restriction $f \restriction_{X \times Y}$ of $f$ to $X \times Y$ is an injection from $X$ to $Y$.


Proof
First we show that $f \restriction_{X \times Y}$ is a mapping from $X$ to $Y$.
By Restriction of Mapping is Mapping, $f \restriction_{X \times T}$ is a mapping from $X$ to $T$.
If $x \in X$, then by the definition of image:

$\map f x \in f \sqbrk X$

This article, or a section of it, needs explaining.In particular: More explanation required.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Since $f \sqbrk X \subseteq Y$, $f \restriction_{X \times Y}$ is a mapping from $X$ to $Y$.
By definition of an injection:

$\forall s_1, s_2 \in S: \map f {s_1} = \map f {s_2} \implies s_1 = s_2$.

Aiming for a contradiction, suppose $f \restriction_{X \times Y}: X \to Y$ were not an injection.
Then:

$\exists x_1, x_2 \in X: x_1 \ne x_2, \map f {x_1} = \map f {x_2}$
But then:

$\exists x_1, x_2 \in S: x_1 \ne x_2, \map f {x_1} = \map f {x_2}$
So $f: S \to T$ would not then be an injection.

Hence the result.
$\blacksquare$





