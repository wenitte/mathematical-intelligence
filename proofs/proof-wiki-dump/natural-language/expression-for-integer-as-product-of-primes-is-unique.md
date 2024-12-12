# 

Source: https://proofwiki.org/wiki/Expression_for_Integer_as_Product_of_Primes_is_Unique



Theorem
Let $n$ be an integer such that $n > 1$.

Then the expression for $n$ as the product of one or more primes is unique up to the order in which they appear.

In the words of Euclid:

If a number be the least that is measured by prime numbers, it will not be measured by any other prime number except those originally measuring it.
(The Elements: Book $\text{IX}$: Proposition $14$)


Proof 1
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


Proof 2
Aiming for a contradiction, suppose $n$ has two prime factorizations:

$n = p_1 p_2 \dots p_r = q_1 q_2 \dots q_s$
where $r \le s$ and each $p_i$ and $q_j$ is prime with $p_1 \le p_2 \le \dots \le p_r$ and $q_1 \le q_2 \le \dots \le q_s$. 
Since $p_1 \divides q_1 q_2 \dots q_s$, it follows from Euclid's Lemma for Prime Divisors that $p_1 = q_j$ for some $1 \le j \le s$.
Thus:

$p_1 \ge q_1$
Similarly, since $q_1 \divides p_1 p_2 \dots p_r$, from Euclid's Lemma for Prime Divisors:

$q_1 \ge p_1$
Thus, $p_1 = q_1$, so we may cancel these common factors, which gives:

$p_2 p_3 \cdots p_r = q_2 q_3 \dots q_s$

This process is repeated to show that:

$p_2 = q_2, p_3 = q_3, \ldots, p_r = q_r$
If $r < s$, we arrive at $1 = q_{r + 1} q_{r + 2} \cdots q_s$ after canceling all common factors.
But by Divisors of One, the only divisors $1$ are $1$ and $-1$.
Hence $q_{r + 1}, q_{r + 2}, \ldots, q_s$ cannot be prime numbers
From that contradiction it follows that $r = s$.
Thus:

$p_1 = q_1, p_2 = q_2, \ldots, p_r = q_s$
which means the two factorizations are identical.
Therefore, the prime factorizations of $n$ is unique.
$\blacksquare$


Proof 3
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


Also see
Integer is Expressible as Product of Primes


Historical Note
This proof is Proposition $14$ of Book $\text{IX}$ of Euclid's The Elements.


Sources
1926: Sir Thomas L. Heath: Euclid: The Thirteen Books of The Elements: Volume 2 (2nd ed.) ... (previous) ... (next): Book $\text{IX}$. Propositions
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {B}.16$: The Sequence of Primes: Problem $1 \ \text{(b)}$
2008: Ian Stewart: Taming the Infinite ... (previous) ... (next): Chapter $7$: Patterns in Numbers: Euclid




