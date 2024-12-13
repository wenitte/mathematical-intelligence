# 

Source: https://proofwiki.org/wiki/Pointwise_Supremum_of_Measurable_Functions_is_Measurable

Theorem
Let $\struct {X, \Sigma}$ be a measurable space, and let $I$ be a countable set.
Let $\family {f_i}_{i \mathop \in I}$, $f_i: X \to \overline \R$ be an $I$-indexed collection of $\Sigma$-measurable functions.

Then the pointwise supremum $\ds \sup_{i \mathop \in I} f_i: X \to \overline \R$ is also $\Sigma$-measurable.


Proof
Let $a \in \R$; for all $i \in I$, we have by Characterization of Measurable Functions that:

$\set {f_i > a} \in \Sigma$
and as $\Sigma$ is a $\sigma$-algebra and $I$ is countable, also:

$\ds \bigcup_{i \mathop \in I} \set {f_i > a} \in \Sigma$

We will now show that:

$\ds \set {\sup_{i \mathop \in I} f_i > a} = \bigcup_{i \mathop \in I} \set {f_i > a}$

First, observe that for all $i \in I$:

$\map {f_i} x \le \ds \sup_{i \mathop \in I} \map {f_i} x$
and hence:

$\set {f_i > a} \subseteq \ds \set {\sup_{i \mathop \in I} f_i > a}$
From Union is Smallest Superset: Family of Sets:

$\ds \bigcup_{i \mathop \in I} \set {f_i > a} \subseteq \set {\sup_{i \mathop \in I} f_i > a}$

Next, suppose that:

$x \notin \ds \bigcup_{i \mathop \in I} \set {f_i > a}$
Then, by definition of union:

$\forall i \in I: \map {f_i} x \le a$
which is to say that $a$ is an upper bound for the $\map {f_i} x$.

Hence, by definition of supremum, it follows that:

$\ds \sup_{i \mathop \in I} \map {f_i} x \le a$
and therefore:

$x \notin \ds \set {\sup_{i \mathop \in I} f_i > a}$

Thus, we have shown:

$\ds \set {\sup_{i \mathop \in I} f_i > a} = \bigcup_{i \mathop \in I} \set {f_i > a} \in \Sigma$

This article, or a section of it, needs explaining.In particular: There must be a result covering this type of set equalityYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
and by Characterization of Measurable Functions, it follows that $\ds \sup_{i \mathop \in I} f_i$ is measurable.
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $8.9$




