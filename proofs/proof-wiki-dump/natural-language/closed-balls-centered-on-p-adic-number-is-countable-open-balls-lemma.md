# 

Source: https://proofwiki.org/wiki/Closed_Balls_Centered_on_P-adic_Number_is_Countable/Open_Balls/Lemma

Theorem
Let $p$ be a prime number.
Let $\epsilon \in \R_{> 0}$.

Then:

$\exists n \in \Z : p^{-\paren {n + 1} } < \epsilon \le p^{-n}$


Proof
From Lemma for Closed Balls:

$\exists m \in \Z : p^{-m} \le \epsilon < p^{-\paren {m - 1} }$

Suppose $\epsilon \ne p^{-m}$.
Then:

$p^{-m} < \epsilon < p^{-\paren {m - 1} }$
and the theorem is proved with $n = m - 1$.

Now suppose $\epsilon = p^{-m}$.
From Power Function on Integer between Zero and One is Strictly Decreasing:

$p^{-\paren{m + 1}} < p^{-m}$
So:

$p^{-\paren{m + 1}} < \epsilon \le p^{-m}$
and the theorem is proved with $n = m$.
$\blacksquare$





