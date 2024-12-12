# 

Source: https://proofwiki.org/wiki/Closed_Balls_Centered_on_P-adic_Number_is_Countable/Lemma

Theorem
Let $p$ be a prime number.
Let $\epsilon \in \R_{\gt 0}$.

Then:

$\exists n \in \Z : p^{-n} \le \epsilon < p^{-\paren {n - 1} }$


Proof
From Sequence of Powers of Reciprocals is Null Sequence:

$\exists n_1 \in \N: \forall k \ge n_1 : p^{-k} < \epsilon$
Similarly:

$\exists n_2 \in \N: \forall k \ge n_2 : p^{-k} < \dfrac 1 \epsilon$
Hence: 

$p^{-n_1} < \epsilon$ and $ p^{-n_2} < \dfrac 1 \epsilon$
That is:

$p^{-n_1} < \epsilon < p^{n_2}$
From Power Function on Integer between Zero and One is Strictly Decreasing:

$-n_2 < n_1$.

Let:

$n = \min \set {k : -n_2 \mathop \le k \mathop \le n_1 \text{ and } p^{-k} \le \epsilon}$
By choice of $n$:

$p^{-n} \le \epsilon < p^{n_2}$
From Power Function on Integer between Zero and One is Strictly Decreasing:

$n > -n_2$
Also by the choice of $n$:

$n \le n_1$
So:

$n_1 > n - 1 \ge -n_2$

Aiming for a contradiction, suppose:

$p^{-\paren {n - 1} } \le \epsilon$
Then:

$n - 1 \in \set {k: -n_2 \le k \le n_1 \text{ and } p^{-k} \le \epsilon}$
So:

$n = \min \set {k: -n_2 \le k \le n_1 \text { and } p^{-k} \le \epsilon} \le n - 1$
which is a contradiction.
Hence:

$\epsilon < p^{-\paren {n - 1} }$
The result follows.
$\blacksquare$





