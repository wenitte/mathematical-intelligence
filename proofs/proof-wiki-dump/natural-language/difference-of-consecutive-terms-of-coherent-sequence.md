# 

Source: https://proofwiki.org/wiki/Difference_of_Consecutive_terms_of_Coherent_Sequence

Theorem
Let $p$ be a prime number.
Let $\sequence {\alpha_n}$ be a coherent sequence.

Then:

for all $n \in \N_{>0}$ there exists $c_n \in \N$ such that:
$0 \le c_n < p$
$\alpha_n - \alpha_{n - 1} = c_n p^n$


Proof
By definition of a coherent sequence:

$\forall n \in \N_{>0}: \alpha_n \equiv \alpha_{n - 1} \pmod {p^n}$
That is:

$\forall n \in \N_{>0}: \exists c_n \in \Z : \alpha_n - \alpha_{n - 1} = c_n p^n$
So it remains to show that:

$\forall n \in \N_{>0} : 0 \le c_n < p$

Aiming for a contradiction, suppose for some $N \in \N_{>0}$:

$c_N \ge p$
Then:

$c_N p^N \ge p^{N + 1}$
By definition of a coherent sequence:

$\alpha_{N - 1} \ge 0$
Then:

$\alpha_N = c_N p^N + \alpha_{N - 1} \ge p^{N + 1}$
This contradicts the coherent sequence condition:

$\alpha_N \le p^{N + 1} - 1$
So:

$\forall n \in \N_{>0} : c_n < p$

Aiming for a contradiction, suppose for some $M \in \N_{>0}$:

$c_M < 0$
Then:

$-c_M \ge 1$
Now:

$c_M p^M + \alpha_{M - 1} = \alpha_M \ge 0$
So:

$\alpha_{M - 1} \ge -c_M p^M \ge p^M$
This contradicts the coherent sequence condition:

$\alpha_{M - 1} < p^M$
So:

$\forall n \in \N_{>0} : c_n \ge 0$
$\blacksquare$





