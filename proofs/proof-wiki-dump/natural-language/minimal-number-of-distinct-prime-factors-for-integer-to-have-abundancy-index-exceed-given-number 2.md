# 

Source: https://proofwiki.org/wiki/Minimal_Number_of_Distinct_Prime_Factors_for_Integer_to_have_Abundancy_Index_Exceed_Given_Number

Theorem
Let $r \in \R$.
Let $\mathbb P^-$ be the set of prime numbers with possibly finitely many numbers removed.
Define:

$M = \min \set {m \in \N: \ds \prod_{i \mathop = 1}^m \frac {p_i} {p_i - 1} > r}$
where $p_i$ is the $i$th element of $\mathbb P^-$, ordered by size.

Then $M$ satisfies:

$(1): \quad$ Every number formed with fewer than $M$ distinct prime factors in $\mathbb P^-$ has abundancy index less than $r$
$(2): \quad$ There exists some number formed with $M$ distinct prime factors in $\mathbb P^-$ with abundancy index at least $r$
So $M$ is the minimal number of distinct prime factors in $\mathbb P^-$ a number must have for it to have abundancy index at least $r$.

For $r$ an integer greater than $1$:
If $\mathbb P^-$ is taken to be the set of all prime numbers, the values of $M$ are:

$2, 3, 4, 6, 9, 14, 22, 35, 55, 89, 142, \cdots$
This sequence is A005579 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).
This theorem shows that this sequence is a subsequence of the sequence A256969 in the OEIS, only differing by an offset.

If we require the numbers to be odd, we remove $2$ from $\mathbb P^-$.
The sequence of values of $M$ are:

$3, 8, 21, 54, 141, 372, 995, 2697, 7397, 20502, \cdots$
This sequence is A005580 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).


Proof
First we show that abundancy index is multiplicative.
Let $n \in \N$ and let $n = p_1^{a_1} p_2^{a_2} \cdots p_k^{a_k}$ be its prime factorization.
Then the abundancy index of $n$ is:














\(\ds \frac {\map {\sigma_1} n} n\)

\(=\)







\(\ds \frac {\map {\sigma_1} {p_1^{a_1} p_2^{a_2} \cdots p_k^{a_k} } } {p_1^{a_1} p_2^{a_2} \cdots p_k^{a_k} }\)




















\(\ds \)

\(=\)







\(\ds \frac {\map {\sigma_1} {p_1^{a_1} } \map {\sigma_1} {p_2^{a_2} } \cdots \map {\sigma_1} {p_k^{a_k} } } {p_1^{a_1} p_2^{a_2} \cdots p_k^{a_k} }\)





Divisor Sum Function is Multiplicative














\(\ds \)

\(=\)







\(\ds \frac {\map {\sigma_1} {p_1^{a_1} } } {p_1^{a_1} } \cdot \frac {\map {\sigma_1} {p_2^{a_2} } } {p_2^{a_2} } \cdot \cdots \cdot \frac {\map {\sigma_1} {p_k^{a_k} } } {p_k^{a_k} }\)









so abundancy index is multiplicative.
$\Box$

Next we show that $M$ exists.
Note that Sum of Reciprocals of Primes is Divergent.
By Divergent Sequence with Finite Number of Terms Deleted is Divergent:

the sum of reciprocals of all elements of $\mathbb P^-$ is also divergent.

Observe that:














\(\ds \lim_{n \mathop \to \infty} \frac {\ln \frac {p_n} {p_n - 1} } {\frac 1 {p_n - 1} }\)

\(=\)







\(\ds \lim_{\frac 1 {p_n - 1} \mathop \to 0} \frac {\map \ln {1 + \frac 1 {p_n - 1} } } {\frac 1 {p_n - 1} }\)




















\(\ds \)

\(=\)







\(\ds 1\)





Derivative of Logarithm at One



By Limit Comparison Test:

$\ds \sum_{n \mathop = 1}^\infty \ln \frac {p_n} {p_n - 1}$ is divergent as well.
By Logarithm of Divergent Product of Real Numbers:

$\ds \prod_{n \mathop = 1}^\infty \frac {p_n} {p_n - 1}$ diverges to infinity.
Hence:

$\exists N \in \N: \forall n \ge N: \ds \prod_{n \mathop = 1}^\infty \frac {p_n} {p_n - 1} > r$
Therefore $\ds \set {m \in \N: \ds \prod_{i \mathop = 1}^m \frac {p_i} {p_i - 1} > r} \ne \O$.
By the Well-Ordering Principle, $M$ exists.
$\Box$

Finally, we prove our claims $(1)$ and $(2)$.
Let $n$ be a number formed with fewer than $M$ distinct prime factors in $\mathbb P^-$.
Let $n = q_1^{a_1} q_2^{a_2} \cdots q_k^{a_k}$ be its prime factorization, where $q_i \in \mathbb P^-$ and $k < M$.
Then:














\(\ds \frac {\map {\sigma_1} n} n\)

\(=\)







\(\ds \prod_{i \mathop = 1}^k \frac {\map {\sigma_1} {q_i^{a_i} } } {q_i^{a_i} }\)




















\(\ds \)

\(=\)







\(\ds \prod_{i \mathop = 1}^k \frac {q_i^{a_i + 1} - 1} {q_i^{a_i} \paren {q_i - 1} }\)





Divisor Sum of Power of Prime














\(\ds \)

\(=\)







\(\ds \prod_{i \mathop = 1}^k \frac {q_i - q_i^{-a_i} } {q_i - 1}\)




















\(\ds \)

\(<\)







\(\ds \prod_{i \mathop = 1}^k \frac {q_i} {q_i - 1}\)





as $q_i^{-a_i} > 0$














\(\ds \)

\(\le\)







\(\ds \prod_{i \mathop = 1}^{M - 1} \frac {p_i} {p_i - 1}\)




















\(\ds \)

\(\le\)







\(\ds r\)





by minimality condition on $M$



This proves $(1)$.
$\Box$

Now define $M \bar \sharp = \ds \prod_{i \mathop = 1}^M p_i$ (an analog of the primorial for $\mathbb P^-$).
Consider the sequence of abundancy indices of $\paren {M \bar \sharp}^n$, where $n$ is a strictly positive integer.
We have:














\(\ds \frac {\map {\sigma_1} {\paren {M \bar \sharp}^n} } {\paren {M \bar \sharp}^n}\)

\(=\)







\(\ds \prod_{i \mathop = 1}^M \frac {\map {\sigma_1} {p_i^n } } {p_i^n}\)




















\(\ds \)

\(=\)







\(\ds \prod_{i \mathop = 1}^M \frac {p_i - p_i^{-n} } {p_i - 1}\)





similar to above



This product is strictly increasing and tends to $\ds \prod_{i \mathop = 1}^M \frac {p_i} {p_i - 1}$ as $n \to \infty$, which is strictly greater than $r$.
From the definition of convergence to a limit:

$\ds \exists N \in \N: \forall n \ge N: \size {\frac {\map {\sigma_1} {\paren {M \bar \sharp}^n} } {\paren {M \bar \sharp}^n} - \prod_{i \mathop = 1}^M \frac {p_i} {p_i - 1}} < \prod_{i \mathop = 1}^M \frac {p_i} {p_i - 1} - r$
Since $\ds \frac {\map {\sigma_1} {\paren {M \bar \sharp}^n} } {\paren {M \bar \sharp}^n} < \prod_{i \mathop = 1}^M \frac {p_i} {p_i - 1}$ for all $n$:

$\ds r < \prod_{i \mathop = 1}^M \frac {p_i} {p_i - 1} - \size {\frac {\map {\sigma_1} {\paren {M \bar \sharp}^N} } {\paren {M \bar \sharp}^N} - \prod_{i \mathop = 1}^M \frac {p_i} {p_i - 1}} = \frac {\map {\sigma_1} {\paren {M \bar \sharp}^N} } {\paren {M \bar \sharp}^N}$
Therefore $\paren {M \bar \sharp}^N$ is a number formed with $M$ distinct prime factors in $\mathbb P^-$ with abundancy index at least $r$.
This proves $(2)$.
$\blacksquare$


Also see
Even Integer with Abundancy Index greater than 9




