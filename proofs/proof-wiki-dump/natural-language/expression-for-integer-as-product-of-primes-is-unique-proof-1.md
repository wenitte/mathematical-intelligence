# 

Source: https://proofwiki.org/wiki/Expression_for_Integer_as_Product_of_Primes_is_Unique/Proof_1

Theorem
Let $n$ be an integer such that $n > 1$.

Then the expression for $n$ as the product of one or more primes is unique up to the order in which they appear.


Proof
Aiming for a contradiction, suppose the supposition false.
That is, suppose there is at least one positive integer that can be expressed in more than one way as a product of primes.
Let the smallest of these be $m$.
Thus:

$m = p_1 p_2 \cdots p_r = q_1 q_2 \cdots q_s$
where all of $p_1, \ldots p_r, q_1, \ldots q_s$ are prime.
By definition, $m$ is not itself prime.
Therefore:

$r, s \ge 2$
Let us arrange that the primes which compose $m$ are in order of size:

$p_1 \le p_2 \le \dots \le p_r$
and:

$q_1 \le q_2 \le \dots \le q_s$
Let us arrange that $p_1 \le q_1$.
Suppose $p_1 = q_1$.
Then:

$\dfrac m {p_1} = p_2 p_3 \cdots p_r = q_2 q_3 \cdots q_s = \dfrac m {q_1}$
But then we have the positive integer $\dfrac m {p_1}$ being expressible in two different ways.
This contradicts the fact that $m$ is the smallest positive integer that can be so expressed.
Therefore:

$p_1 \ne q_1 \implies p_1 < q_1 \implies p_1 < q_2, q_3, \ldots, q_s$
as we arranged them in order.
From Prime not Divisor implies Coprime:

$1 < p_1 < q_j: 1 < j < s \implies p_1 \nmid q_j$
But:

$p_1 \divides m \implies p_1 \divides q_1 q_2 \ldots q_s$
where $\divides$ denotes divisibility.
Thus from Euclid's Lemma for Prime Divisors:

$\exists j: 1 \le j \le s: p_1 \divides q_j$
But $q_j$ was supposed to be a prime.
This is a contradiction.
Hence, by Proof by Contradiction, the supposition was false.
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 13.2$: The fundamental theorem of arithmetic
1979: G.H. Hardy and E.M. Wright: An Introduction to the Theory of Numbers (5th ed.) ... (previous) ... (next): $\text I$: The Series of Primes: $1.3$ Statement of the fundamental theorem of arithmetic




