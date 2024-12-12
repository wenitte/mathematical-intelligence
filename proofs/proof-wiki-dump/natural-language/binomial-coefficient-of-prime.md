# 

Source: https://proofwiki.org/wiki/Binomial_Coefficient_of_Prime



Theorem
Let $p$ be a prime number.

Then:

$\forall k \in \Z: 0 < k < p: \dbinom p k \equiv 0 \pmod p$
where $\dbinom p k$ is defined as a binomial coefficient.


Proof 1
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


Proof 2
Lucas' Theorem gives:

$\dbinom n k \equiv \dbinom {\left \lfloor {n / p} \right \rfloor} {\left \lfloor {k / p} \right \rfloor} \dbinom {n \bmod p} {k \bmod p} \pmod p$
So, substituting $p$ for $n$:

$\dbinom p k \equiv \dbinom {\left \lfloor {p / p} \right \rfloor} {\left \lfloor {k / p} \right \rfloor} \dbinom {p \bmod p} {k \bmod p} \pmod p$

But $p \bmod p = 0$ by definition.
Hence, if $0 < k < p$, we have that:

$k \bmod p \ne 0$
and so:

$\dbinom {p \bmod p} {k \bmod p} = \dbinom 0 {k \bmod p} = 0$
by definition of binomial coefficients.
The result follows immediately.
$\blacksquare$


Proof 3
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


Sources
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {3-1}$ Permutations and Combinations: Exercise $9$
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): $\S 2.3$: Congruences: Exercise $8$
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $35$
1991: Ivan Niven, Herbert S. Zuckerman and Hugh L. Montgomery: An Introduction to the Theory of Numbers (5th ed.): $\S 2.1$: Exercise $45$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $35$




