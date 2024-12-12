# 

Source: https://proofwiki.org/wiki/Convergent_Series_of_Natural_Numbers


This article needs to be linked to other articles.In particular: and review the existing onesYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $\sequence {a_n}_{n \mathop \in \N}$ be a sequence of natural numbers.

Then the following are equivalent:
$(1): \quad \ds \sum_{n \mathop = 1}^\infty a_n$ converges
$(2): \quad \exists N \in \N: \forall n \ge N: a_n = 0$
That is, $\ds \sum_{n \mathop = 1}^\infty a_n$ converges if and only if only finitely many of the $a_n$ are non-zero.


Proof
$(1) \implies (2)$:
Suppose that there is an infinite subsequence $\sequence {a_{n_k} }_{k \mathop \in \N}$ such that for each $k$, $a_{n_k} \ne 0$.
For $N \in \N$ let 

$\ds s_N = \sum_{n \mathop = 1}^N a_n$

To show that $s_N$ diverges it suffices to show that:

$\forall M > 0: \exists N \in \N : \forall n > N : \size {s_n} > M$
Since for each $n$, $a_n \ge 0$, $s_N$ is a positive increasing sequence in $N$.
Therefore it suffices to show that:

$\forall M > 0: \exists N \in \N: s_N > M$

Fix $M > 0$.
Let $k$ be any positive integer such that $n_k > M$.
Then we have:














\(\ds s_{n_k}\)

\(=\)







\(\ds \sum_{n \mathop = 1}^{n_k} a_n\)




















\(\ds \)

\(\ge\)







\(\ds \sum_{n \mathop = 1}^{n_k} 1\)





as the $a_n$ are positive and non-zero














\(\ds \)

\(=\)







\(\ds n_k\)




















\(\ds \)

\(=\)







\(\ds M\)





By the choice of $n_k$



Therefore the sequence $s_N$ diverges.

$(2) \implies (1)$:
Suppose there exists $N > 0$ such that $a_n = 0$ for all $n > N$.
Then we have, for all $L > N$:

$\ds s_L = \sum_{n \mathop = 1}^L a_n = \sum_{n \mathop = 1}^N a_n = s_N$
In particular, for any $\epsilon > 0$ and all $L > N$:

$\size {s_L - s_N} = 0 < \epsilon$
Therefore the sequence converges to $s_N$.
$\blacksquare$





