# 

Source: https://proofwiki.org/wiki/Existence_of_Abscissa_of_Absolute_Convergence


This page has been identified as a candidate for refactoring of basic complexity.In particular: Extract the definition of the Abscissa of Convergence into a separate pageUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.

This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $\ds \map f s = \sum_{n \mathop = 1}^\infty a_n n^{-s}$ be a Dirichlet series.
Let the series $\ds \sum_{n \mathop = 1}^\infty \size { a_n n^{-s} }$ not converge for all $s \in \C$, or diverge for all $s \in \C$.

Then there exists a real number $\sigma_a$ such that $\map f s$ converges absolutely for all $s = \sigma + it$ with $\sigma > \sigma_a$, and does not converge absolutely for all $s$ with $\sigma < \sigma_a$.
We call $\sigma_a$ the abscissa of absolute convergence of the Dirichlet series.


Proof
Let $S$ be the set of all complex numbers $s$ such that $\map f s$ converges absolutely.
By hypothesis, there is some $s_0 = \sigma_0 + it_0 \in \C$ such that $\map f {s_0}$ converges absolutely, so $S$ is not empty.
Moreover, $S$ is bounded below, for otherwise it follows from Dirichlet Series Absolute Convergence Lemma that $\map f s$ converges absolutely for all $s \in \C$, a contradiction of our assumptions.
Therefore the infimum:

$\sigma_a = \inf \set {\sigma: s = \sigma + i t \in S} \in \R$
is well defined.

Now if $s = \sigma + it$ with $\sigma > \sigma_a$, then there is $s' = \sigma' + i t' \in S$ with $\sigma' < \sigma$, and $\map f {s'}$ is absolutely convergent.
Then it follows from Dirichlet Series Absolute Convergence Lemma that $\map f s$ is absolutely convergent.

If $s = \sigma + it$ with $\sigma < \sigma_a$, and $\map f s$ is absolutely convergent then $s$ contradicts the definition of $\sigma_a$.

Therefore, $\sigma_a$ has the claimed properties.
$\blacksquare$


Note
It is conventional to set $\sigma_a = -\infty$ if the series $\map f s$ is absolutely convergent for all $s \in \C$, and $\sigma_a = \infty$ if the series converges absolutely for no $s \in \C$.
Therefore, allowing $\sigma_a$ to be an extended real number, $\sigma_a$ is defined for all Dirichlet series.


Also see
Abscissa of Convergence
Definition:Dirichlet Series
Dirichlet Series Absolute Convergence Lemma


Sources
1976: Tom M. Apostol: Introduction to Analytic Number Theory: $\S 11.2$: Theorem $11.1$




