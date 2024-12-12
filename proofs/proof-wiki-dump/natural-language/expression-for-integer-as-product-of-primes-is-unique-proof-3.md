# 

Source: https://proofwiki.org/wiki/Expression_for_Integer_as_Product_of_Primes_is_Unique/Proof_3



Theorem
Let $n$ be an integer such that $n > 1$.

Then the expression for $n$ as the product of one or more primes is unique up to the order in which they appear.


Proof
The proof proceeds by strong induction.
For all $n \in \Z_{\ge 2}$, let $\map P n$ be the proposition:

the prime decomposition for $n$ is unique up to order of presentation.

Note that it has been established in Integer is Expressible as Product of Primes that $n$ does in fact have at least $1$ prime decomposition.


Basis for the Induction
$\map P 2$ is the case:

$n = 2$
which is trivially unique.

Thus $\map P 2$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that, if $\map P j$ is true, for all $j$ such that $0 \le j \le k$, then it logically follows that $\map P {k + 1}$ is true.

This is the induction hypothesis:

the prime decomposition for all $j$ such that $0 \le j \le k$ is unique up to order of presentation.

from which it is to be shown that:

the prime decomposition for $k + 1$ is unique up to order of presentation.


Induction Step
Either $k + 1$ is prime or it is composite.
If $k + 1$ is prime, there is only one way to express it, that is, as the prime $k + 1$ itself.

So suppose $k + 1$ is composite.
Aiming for a contradiction, suppose $k + 1$ has the two prime decompositions:
$k + 1 = p_1 p_2 \dotsm p_r = q_1 q_2 \dotsm q_s$
where:

$p_1 \le p_2 \le \dotsb \le p_r$
and:

$q_1 \le q_2 \le \dotsb \le q_s$
Because $q_1$ is a divisor of $k + 1$:

$q_1 \divides p_1 \le p_2 \le \dotsb \le p_r$
where $\divides$ indicates divisibility.
Thus by Euclid's Lemma for Prime Divisors:

$\exists p_i \in \set {p_1, p_2, \ldots, p_r}: q_1 \divides p_i$
But as $q_1$ and $p_i$ are both primes, it follows by definition that $q_1 = p_i$.
In a similar way it can be shown that:

$\exists q_j \in \set {q_1, q_2, \ldots, q_s}: p_1 = q_j$
So we have:

$p_1 = q_j \ge q_1$
and:

$q_1 = p_i \ge p_1$
Thus:

$p_1 \ge q_1 \ge p_1$
and so:

$p_1 = q_1$
Thus $\dfrac {k + 1} {p_1}$ is an integer such that:

$\dfrac {k + 1} {p_1} \le k$
and so:

$p_2 p_3 \dotsm p_r \dfrac {k + 1} {p_1} = q_2 q_3 \dotsm q_s$
But by the induction hypothesis:

$p_2 = q_2, p_3 = q_3, \dotsc, p_r = q_s$
where furthermore $r = s$.
Therefore the prime decomposition for $k + 1$ is unique.

So $\map P k \implies \map P {k + 1}$ and the result follows by the Second Principle of Mathematical Induction:

$\forall n \in \Z_{\ge 2}$, the prime decomposition for $n$ is unique up to order of presentation.
$\blacksquare$


Sources
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {2-4}$ The Fundamental Theorem of Arithmetic: Theorem $\text {2-5}$




