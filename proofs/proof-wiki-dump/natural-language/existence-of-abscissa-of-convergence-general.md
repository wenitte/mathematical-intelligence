# 

Source: https://proofwiki.org/wiki/Existence_of_Abscissa_of_Convergence/General


This article needs to be tidied.Please fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.

This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $s = \sigma + i t$
Let $\ds \map f s = \sum_{n \mathop = 1}^\infty a_n e^{-\lambda_n s}$ be a general Dirichlet series.
Then there exists a extended real number, $\sigma_0$, such that

$(1): \quad$ For $\sigma < \sigma_0$, $\map f s$ diverges
$(2): \quad$ For $\sigma > \sigma_0$, $\map f s$ converges.


Proof
If there does not exist an $s_0$ such that $\map f {s_0}$ converges, then $\sigma_0 = \infty$ and the theorem is vacuously true
If there does exist such an $s_0$, let $\sigma_0$ be the infimum of the real part of all such $s_0$, where $\sigma_0= -\infty$ if the set is not bounded from below.

It is clear that $\map f s$ diverges if $\sigma < \sigma_0$ by construction of $\sigma_0$ as the infimum of all convergent $s$
As $\sigma_0$ is the infimum of the the real part of the set all s such that $\map f s$ converges, for any $\epsilon > 0$, there exists an $s$ such that $\map f s$ converges and $\sigma_0 \le \sigma < \sigma_0+ \epsilon$ as otherwise $\sigma_0 + \epsilon$ would be the infimum of the set.
Therefore, for any $s$ such that $\sigma > \sigma_0$, we can pick $\epsilon = \sigma - \sigma_0$ and find a $q$ such that $\map f q$ converges and $\map \Re q < \sigma$.
By Dirichlet Series Convergence Lemma, We therefore have that $\map f s$ converges.
$\blacksquare$





