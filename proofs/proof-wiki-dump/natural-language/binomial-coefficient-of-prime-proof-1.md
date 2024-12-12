# 

Source: https://proofwiki.org/wiki/Binomial_Coefficient_of_Prime/Proof_1

Theorem
Let $p$ be a prime number.

Then:

$\forall k \in \Z: 0 < k < p: \dbinom p k \equiv 0 \pmod p$
where $\dbinom p k$ is defined as a binomial coefficient.


Proof
Because:

$\dbinom p k = \dfrac {p \paren {p - 1} \paren {p - 2} \cdots \paren {p - k + 1} } {k!}$
is an integer, we have that:

$k! \divides p \paren {p - 1} \paren {p - 2} \cdots \paren {p - k + 1}$

But because $k < p$ it follows that:

$k! \mathrel \perp p$
that is, that:

$\gcd \set {k!, p} = 1$

So by Euclid's Lemma:

$k! \divides \paren {p - 1} \paren {p - 2} \cdots \paren {p - k + 1}$
Hence:

$\dbinom p k = p \dfrac {\paren {p - 1} \paren {p - 2} \cdots \paren {p - k + 1} } {k!}$
Hence the result.
$\blacksquare$





