# 

Source: https://proofwiki.org/wiki/Convergent_Generalized_Sum_of_Positive_Reals_has_Countably_Many_Non-Zero_Terms


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $\family {a_i}_{i \mathop \in I}$ be an $I$-indexed family of positive real numbers.
That is, let $a_i \in \R_{\ge 0}$ for all $i \in I$.
Suppose that $\ds \sum \set {a_i: i \in I}$ converges.

Then the set $I_{>0} := \set {i \in I: a_i > 0}$ is countable.


Proof
For $\lambda \in \R$, let $I_{>\lambda} := \set {i \in I: a_i > \lambda}$.

Then as $\ds \sum \set {a_i: i \mathop \in I}$ converges, necessarily all of the sets $I_{> \frac 1 n}$ are finite.
However, we have that $\ds I_{>0} = \bigcup_{n \mathop = 1}^\infty I_{> \frac 1 n}$.
From Countable Union of Countable Sets is Countable, it follows that $I_{>0}$ is countable.
$\blacksquare$





