# 

Source: https://proofwiki.org/wiki/Hero%27s_Method/Lemma_2



Lemma for Hero's Method
Let $a \in \R$ be a real number such that $a > 0$.
Let $x_1 \in \R$ be a real number such that $x_1 > 0$.
Let $\sequence {x_n}$ be the sequence in $\R$ defined recursively by:

$\forall n \in \N_{>0}: x_{n + 1} = \dfrac {x_n + \dfrac a {x_n} } 2$

Then:

$\forall n \ge 2: x_n \ge \sqrt a$


Proof
Lemma 1
$\forall n \in \N_{>0}: x_n > 0$
$\Box$

We have:














\(\ds x_{n + 1}\)

\(=\)







\(\ds \frac {x_n + \dfrac a {x_n} } 2\)














\(\ds \leadstoandfrom \ \ \)





\(\ds 2 x_n x_{n + 1}\)

\(=\)







\(\ds x_n^2 + a\)














\(\ds \leadstoandfrom \ \ \)





\(\ds x_n^2 - 2 x_n x_{n + 1} + a\)

\(=\)







\(\ds 0\)









This is a quadratic equation in $x_n$.
We know that this equation must have a real solution with respect to $x_n$, because $x_n$ has been explicitly constructed by the iterative process.

Thus its discriminant is $b^2 - 4 a c \ge 0$, where:

$a = 1$
$b = -2 x_{n + 1}$
$c = a$
Thus $x_{n + 1}^2 \ge a$.

From Lemma 1:

$x_{n + 1} > 0$
It follows that:

$\forall n \ge 1: x_{n + 1} \ge \sqrt a$ for $n \ge 1$
Thus:

$\forall n \ge 2: x_n \ge \sqrt a$ for $n \ge 2$
$\blacksquare$


Sources

This page may be the result of a refactoring operation.As such, the following source works, along with any process flow, will need to be reviewed.When this has been completed, the citation of that source work (if it is appropriate that it stay on this page) is to be placed above this message, into the usual chronological ordering.If you have access to any of these works, then you are invited to review this list, and make any necessary corrections.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{SourceReview}} from the code.
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 5$: Subsequences: $\S 5.5$: Example




