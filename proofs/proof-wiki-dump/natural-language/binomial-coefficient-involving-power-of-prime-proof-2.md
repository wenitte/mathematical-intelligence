# 

Source: https://proofwiki.org/wiki/Binomial_Coefficient_involving_Power_of_Prime/Proof_2

Theorem
$\dbinom {p^n k} {p^n} \equiv k \pmod p$
where $\dbinom {p^n k} {p^n}$ is a binomial coefficient.


Proof
Lucas' Theorem states that for $n, k, p \in \Z$ and $p$ be a prime number, such that:

$n = a_r p^r + \cdots + a_1 p + a_0$
$k = b_r p^r + \cdots + b_1 p + b_0$
then:

$\ds \binom n k \equiv \prod_{j \mathop = 0}^r \binom {a_j}{b_j} \pmod p$
Therefore:














\(\ds \binom {p^n k} {p^n}\)

\(\equiv\)







\(\ds \binom k 1 \prod_{j \mathop = 0}^{n - 1} \binom 0 0 \pmod p\)





Lucas' Theorem














\(\ds \)

\(\equiv\)







\(\ds k \prod_{j \mathop = 0}^{n - 1} 1 \pmod p\)





Binomial Coefficient with One, Binomial Coefficient with Zero














\(\ds \)

\(\equiv\)







\(\ds k \pmod p\)









$\blacksquare$





