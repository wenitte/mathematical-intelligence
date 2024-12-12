# 

Source: https://proofwiki.org/wiki/Euler%27s_Number:_Limit_of_Sequence_implies_Limit_of_Series/Proof_1

Theorem
Let Euler's number $e$ be defined as:

$\ds e := \lim_{n \mathop \to \infty} \paren {1 + \frac 1 n}^n$

Then:

$\ds e = \sum_{k \mathop = 0}^\infty \frac 1 {k!}$

That is:

$e = \dfrac 1 {0!} + \dfrac 1 {1!} + \dfrac 1 {2!} + \dfrac 1 {3!} + \dfrac 1 {4!} \cdots$


Proof
We expand $\paren {1 + \dfrac 1 n}^n$ by the Binomial Theorem, using that $\dfrac {n - k} n = 1 - \dfrac k n$:














\(\ds \paren {1 + \frac 1 n}^n\)

\(=\)







\(\ds 1 + n \paren {\frac 1 n} + \frac {n \paren {n - 1} } 2 \paren {\frac 1 n}^2 + \cdots + \paren {\frac 1 n}^n\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {0!} + \frac 1 {1!} + \paren {1 - \frac 1 n} \frac 1 {2!} + \paren {1 - \frac 1 n} \paren {1 - \frac 2 n} \frac 1 {3!} + \cdots + \paren {1 - \frac 1 n} \paren {1 - \frac 2 n} \cdots \paren {1 - \frac {n - 1} n} \frac 1 {n!}\)










Take one of the terms in the above:

$x = \paren {1 - \dfrac 1 n} \paren {1 - \dfrac 2 n} \cdots \paren {1 - \dfrac {k - 1} n} \dfrac 1 {k!}$
From Sequence of Powers of Reciprocals is Null Sequence, $\dfrac 1 n \to 0$ as $n \to \infty$.
From the Combination Theorem for Sequences:

$\forall \lambda \in \R: \dfrac \lambda n \to 0$ as $n \to \infty$
$\forall \lambda \in \R: 1 - \dfrac \lambda n \to 1$ as $n \to \infty$
$x = \paren {1 - \dfrac 1 n} \paren {1 - \dfrac 2 n} \cdots \paren {1 - \dfrac {k - 1} n} \dfrac 1 {k!} \to \dfrac 1 {k!}$ as $n \to \infty$

Hence:

$\ds \lim_{n \mathop \to \infty} \paren {1 + \frac 1 n}^n = \frac 1 {0!} + \frac 1 {1!} + \frac 1 {2!} + \frac 1 {3!} + \cdots = \sum_{k \mathop = 0}^\infty \frac 1 {k!}$
$\blacksquare$



This article, or a section of it, needs explaining.In particular: Wait! That's invoking $\lim \sum = \sum \lim$ tacitly. Us sneaky bastards!You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.




