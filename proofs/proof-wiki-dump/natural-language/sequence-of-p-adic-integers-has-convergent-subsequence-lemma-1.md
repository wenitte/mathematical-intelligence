# 

Source: https://proofwiki.org/wiki/Sequence_of_P-adic_Integers_has_Convergent_Subsequence/Lemma_1


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $\struct {\Q_p, \norm {\,\cdot\,}_p}$ be the $p$-adic numbers for some prime $p$.
Let $\sequence{x_n}$ be a sequence of $p$-adic integers.

Then there exists a $p$-adic digit $b_0$ such that:

there exists infinitely many $n \in \N$ such that the canonical expansion of $x_n$ begins with the $p$-adic digit $b_0$


Proof
Case 1
Let there exist $b \in \set{0, 1, \ldots , p - 2}$:

there exists infinitely many $n \in \N$ such that the canonical expansion of $y_n$ begins with the $p$-adic digits $b$
Let $b_0 = b$ and  the result holds.
$\Box$

Case 2
For all $b \in \set{0, 1, \ldots , p - 2}$:

there exists only a finite number of $n \in \N$ such that the canonical expansion of $x_n$ begins with the $p$-adic digit $b$
So:

$\set{n \in \N : \mathop \exists b \in \set{0, 1, \ldots , p - 2} : \text{ the canonical expansion  of } x_n \text{ begins with the } p \text{-adic digit } b}$ is a finite set.

Let:

$N = \max \set{n \in \N : \mathop \exists b \in \set{0, 1, \ldots , p - 2} : \text{ the canonical expansion  of } x_n \text{ begins with the } p \text{-adic digits } b}$
Hence for all $n > N$ and $b \in \set{0, 1, \ldots , p - 2}$:

$x_n$ does not begin with the $p$-adic digits $b$.
So for all $n > N$:

the canonical expansion of $y_n$ begins with the $p$-adic digit $p-1$

Let $b_0 = p - 1$ and the result follows.
$\blacksquare$





