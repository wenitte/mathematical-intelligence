# 

Source: https://proofwiki.org/wiki/Existence_of_Abscissa_of_Convergence


This page has been identified as a candidate for refactoring of basic complexity.In particular: Extract the definition of the Abscissa of Convergence into a separate pageUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.

This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $\ds \map f s = \sum_{n \mathop = 1}^\infty a_n n^{-s}$ be a Dirichlet series.
Let the series $\ds \sum_{n \mathop = 1}^\infty \size {a_n n^{-s} }$ not converge for all $s \in \C$, or diverge for all $s \in \C$.

Then there exists a real number $\sigma_c$ such that $\map f s$ converges for all $s = \sigma + i t$ with $\sigma > \sigma_c$, and does not converge for all $s$ with $\sigma < \sigma_c$.
We call $\sigma_c$ the abscissa of convergence of the Dirichlet series.


General
Let $s = \sigma + i t$
Let $\ds \map f s = \sum_{n \mathop = 1}^\infty a_n e^{-\lambda_n s}$ be a general Dirichlet series.
Then there exists a extended real number, $\sigma_0$, such that

$(1): \quad$ For $\sigma < \sigma_0$, $\map f s$ diverges
$(2): \quad$ For $\sigma > \sigma_0$, $\map f s$ converges.


Proof
Let $S$ be the set of all complex numbers $s$ such that $\map f s$ converges.
By hypothesis, there is some $s_0 = \sigma_0 + i t_0 \in \C$ such that $\map f {s_0}$ converges, so $S$ is not empty.


The validity of the material on this page is questionable.In particular: Which hypothesis?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by resolving the issues.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Questionable}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Moreover, $S$ is bounded below, for otherwise it follows from Dirichlet Series Convergence Lemma that $\map f s$ converges for all $s \in \C$, a contradiction of our assumptions.
Therefore the infimum:

$\sigma_c = \inf \set {\sigma: s = \sigma + i t \in S} \in \R$
is well defined.

Now if $s = \sigma + it$ with $\sigma > \sigma_c$, then there is $s' = \sigma' + i t' \in S$ with $\sigma' < \sigma$, and $\map f {s'}$ is convergent.
Then it follows from Dirichlet Series Convergence Lemma that $\map f s$ is convergent.

If $s = \sigma + it$ with $\sigma < \sigma_c$, and $\map f s$ is convergent then $s$ contradicts the definition of $\sigma_c$.

Therefore, $\sigma_c$ has the claimed properties.
$\blacksquare$


Note
It is conventional to set $\sigma_c = -\infty$ if the series $\map f s$ is convergent for all $s \in \C$, and $\sigma_c = \infty$ if the series converges for no $s \in \C$.
Therefore, allowing $\sigma_c$ to be an extended real number, $\sigma_c$ is defined for all Dirichlet series.


Also see
Definition:Dirichlet Series
Dirichlet Series Convergence Lemma


Sources
1976: Tom M. Apostol: Introduction to Analytic Number Theory: $\S 11.6$: Theorem $11.9$




