# 

Source: https://proofwiki.org/wiki/Binomial_Coefficient_involving_Power_of_Prime/Proof_1

Theorem
$\dbinom {p^n k} {p^n} \equiv k \pmod p$
where $\dbinom {p^n k} {p^n}$ is a binomial coefficient.


Proof
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


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 2.6$. Algebra of congruences: Example $42 \ (5)$
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $11$: The Sylow Theorems: Lemma $11.2$




