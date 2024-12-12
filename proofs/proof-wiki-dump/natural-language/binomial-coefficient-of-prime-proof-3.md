# 

Source: https://proofwiki.org/wiki/Binomial_Coefficient_of_Prime/Proof_3

Theorem
Let $p$ be a prime number.

Then:

$\forall k \in \Z: 0 < k < p: \dbinom p k \equiv 0 \pmod p$
where $\dbinom p k$ is defined as a binomial coefficient.


Proof
By the definition of binomial coefficient:














\(\ds \binom p k\)

\(=\)







\(\ds \frac {p!} {k! \paren {n - k}!}\)














\(\ds \leadstoandfrom \ \ \)





\(\ds p!\)

\(=\)







\(\ds k! \paren {p - k}! \binom p k\)









Now, $p$ divides the left hand side by Divisors of Factorial.
So $p$ must also divide the right hand side.

By hypothesis $k < p$.

We have that:

$k! = k \paren {k - 1} \dotsm \paren 2 \paren 1$
We also have that $p$ is prime, and each factor is less than $p$.
Thus $p$ is not a factor of $k!$.

Similarly:

$\paren {p - k}! = \paren {p - k} \paren {p - k - 1} \dotsm \paren 2 \paren 1$
It follows, by the same reasoning as above, that $p$ is also not a factor of $\paren {p - k}!$.
The result then follows from Euclid's Lemma.
$\blacksquare$





