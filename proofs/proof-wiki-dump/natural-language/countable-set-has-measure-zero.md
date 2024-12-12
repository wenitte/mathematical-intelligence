# 

Source: https://proofwiki.org/wiki/Countable_Set_has_Measure_Zero

Theorem
Let $S$ be a countable set.


This article, or a section of it, needs explaining.In particular: Is it assumed that $S \subseteq \R$?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Then the measure of $S$ is $\map m S = 0$.


Proof
Let $\ds \set {x_i}_{i \mathop = 1}^\infty$ be an enumeration of the elements of $S$.
For any (strictly) positive real number $\epsilon$, define $A_i$ as an open cover for $S$:

$A_i = \paren {x_i - 2^{-i} \epsilon, x_i + 2^{-i} \epsilon}$

This article, or a section of it, needs explaining.In particular: What is the meaning of the above? Is it an open interval? If so, use the appropriate notation, then prove that the union of the open intervals is indeed a cover for $S$You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Then:

$\ds S \subseteq \bigcup_{i \mathop = 1}^\infty A_i$
and:

$\ds \map m {\bigcup A_i} \le \sum_{i \mathop = 1}^\infty 2^{1 - i} \epsilon = 2 \epsilon$ From the infinite geometric series
Since our choice of $\epsilon$ was arbitrary, for any positive real $z$ we can construct a set $T$ such that $S \subseteq T$ and $\map m T \le z$.
Hence $X$ has zero measure.
$\blacksquare$





