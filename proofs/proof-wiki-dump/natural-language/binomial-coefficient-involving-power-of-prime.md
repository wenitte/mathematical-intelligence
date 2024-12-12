# 

Source: https://proofwiki.org/wiki/Binomial_Coefficient_involving_Power_of_Prime

Theorem
Let $p$ be a prime number.
Let $k \in \Z$.
Let $n \in \Z_{>0}$.
Then:

$\dbinom {p^n k} {p^n} \equiv k \pmod p$
where $\dbinom {p^n k} {p^n}$ is a binomial coefficient.


Proof 1
From  Prime Power of Sum Modulo Prime we have:

$(1): \quad \paren {a + b}^{p^n} \equiv \paren {a^{p^n} + b^{p^n} } \pmod p$

We can write this:

$\paren {a + b}^{p^n k} = \paren {\paren {a + b}^{p^n} }^k$

By $(1)$ and Congruence of Powers, we therefore have:

$\paren {a + b}^{p^n k} \equiv \paren {a^{p^n} + b^{p^n} }^k \pmod p$

The coefficient $\dbinom {p^n k} {p^n}$ is the binomial coefficient of $b^{p^n}$ in $\paren {a + b}^{p^n k} = \paren {\paren {a + b}^{p^n} }^k$.
Expanding $\paren {a^{p^n} + b^{p^n} }^k$ using the Binomial Theorem, we find that the coefficient of $b^{p^n}$, the second term, is $\dbinom k 1 = k$.
So:

$\dbinom {p^n k} {p^n} \equiv k \pmod p$
$\blacksquare$


Proof 2
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





