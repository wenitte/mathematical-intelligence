# 

Source: https://proofwiki.org/wiki/Power_Sets_of_Equinumerous_Sets_are_Equinumerous


This page has been identified as a candidate for refactoring of basic complexity.In particular: Multiple pagesUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.


Theorem
Let $x$ and $y$ be sets such that $x \sim y$.

Then:

$\powerset x \sim \powerset y$


Proof 1
Let $f: x \to y$ be a bijection.

Let $F$ send each $z \in \powerset x \mapsto \Img z$ where $\Img z$ denotes the image of the subset $z$ under $f$.

It follows that $F$ is a mapping whose domain is $\powerset x$.
Moreover, the image of $F$ is the collection of all images of $z$.
Each image is a subset of $y$ and thus:

$F: \powerset x \to \powerset y$

Suppose that $\map F a = \map F b$.
Then if $z \in a$ then $\map f z \in \map F a$.
But then, $\map f z = \map f w$ for some $w \in y$.
Thus, $z = w$ and $w \in y$.
Therefore, $z = y$ and $F$ is injective.

Suppose that $a \in \powerset y$.
Let $b$ be the preimage of $a$ with respect to the $f$ mapping.
It follows that $b$ is a subset of $x$.
We have:

$\map F b = a$
and so $a$ is in the image of $F$.

Generalizing for all $a \in \powerset y$, it follows that:

$F: \powerset x \to \powerset y$ is a bijection.
$\blacksquare$


Proof using covariant power set functor
Let $\PP$ denote the covariant power set functor.
Let $f: x \to y$ be a bijection.
By Covariant Functors Preserve Isomorphisms, $\map \PP f: \powerset x \to \powerset y$ is a bijection.
$\blacksquare$


Proof using contravariant power set functor
Let $\overline \PP$ denote the contravariant power set functor.
Let $f: x \to y$ be a bijection.
By Contravariant Functors Preserve Isomorphisms, $\map {\overline \PP} f : \powerset y \to \powerset x$ is a bijection.
$\blacksquare$


Sources
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 10.6$




