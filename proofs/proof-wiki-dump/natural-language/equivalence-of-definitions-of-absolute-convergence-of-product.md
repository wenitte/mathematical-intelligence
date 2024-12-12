# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Absolute_Convergence_of_Product


This article needs to be tidied.Please fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.

This page has been identified as a candidate for refactoring of basic complexity.In particular: Double proof of one implicationUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.

This article needs to be linked to other articles.In particular: bounded (care needs to be taken to pick up the precisely appropriate definitionYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $\struct {\mathbb K, \norm {\,\cdot\,} }$ be a valued field.
Let $\sequence {a_n}$ be a sequence in $\mathbb K$.

The following definitions of the concept of Absolute Convergence of Product are equivalent:

Definition 1
The infinite product $\ds \prod_{n \mathop = 1}^\infty \paren {1 + a_n}$ is absolutely convergent if and only if $\ds \prod_{n \mathop = 1}^\infty \paren {1 + \norm {a_n} }$ is convergent.

Definition 2
The infinite product $\ds \prod_{n \mathop = 1}^\infty \paren {1 + a_n}$ is absolutely convergent if and only if the series $\ds \sum_{n \mathop = 1}^\infty a_n$ is absolutely convergent.


Proof
1 implies 2
By the Monotone Convergence Theorem, it suffices to show that the partial sums of $\ds \sum_{n \mathop = 1}^\infty a_n$ are bounded.
Because $\ds \prod_{n \mathop = 1}^\infty \paren {1 + \norm {a_n} }$ converges, its partial products are bounded.
By Bounds for Finite Product of Real Numbers:

$\ds \sum_{n \mathop = 1}^N \norm {a_n} \le \prod_{n \mathop = 1}^N \paren {1 + \norm {a_n} }$
$\blacksquare$


2 implies 1
Proof 1
By the Monotone Convergence Theorem, it suffices to show that the partial products of $\ds \prod_{n \mathop = 1}^\infty \paren {1 + \norm {a_n} }$ are bounded.
By Bounds for Finite Product of Real Numbers:

$\ds \prod_{n \mathop = 1}^N \paren {1 + \norm {a_n} } \le \map \exp {\sum_{n \mathop = 1}^N \norm {a_n} }$
Because $\ds \sum_{n \mathop = 1}^\infty \norm {a_n}$ converges, its partial sums are bounded.
$\blacksquare$


Proof 2
By the Monotone Convergence Theorem, it suffices to show that the partial products of $\ds \prod_{n \mathop = 1}^\infty \paren {1 + \norm {a_n} }$ are bounded.
By the AM-GM Inequality:

$\ds \prod_{n \mathop = 1}^N \paren {1 + \norm {a_n} } \le \paren {\frac {N + \sum_{n \mathop = 1}^N \norm {a_n} } N }^N \le \paren {1 + \frac M N}^N$
where $M>0$ is such that $\ds \sum_{n \mathop = 1}^N \norm {a_n} \le M$ for all $N$.
By definition of the real exponential, $\paren {1 + \dfrac M N}^N \to \map \exp M$ as $N \to \infty$.
By Convergent Sequence in Metric Space is Bounded, $\paren {1 + \dfrac M N}^N$ is bounded.
$\blacksquare$


Also see
Equivalence of Definitions of Absolute Convergence of Product of Complex Numbers




