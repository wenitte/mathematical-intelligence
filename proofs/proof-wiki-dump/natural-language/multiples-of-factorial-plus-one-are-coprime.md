# 

Source: https://proofwiki.org/wiki/Multiples_of_Factorial_Plus_One_are_Coprime

Theorem
Let $a \in \N$ be a natural number.
Let $\sequence {x_1, x_2, \dotsc, x_n}$ be a sequence of natural numbers such that:

$\forall i: 1 \le i \le n: x_i = 1 + i \times a!$
where $a!$ denotes the factorial of $a$.
Let $a \ge n - 1$.
Then $\set {x_i}$ are pairwise coprime.


Proof
Let $p$ be a prime number.
Suppose that $p \divides x_i$.
Then, by definition of $x_i$:

$p \divides 1 + i \times a!$
Thus, by Consecutive Integers are Coprime:

$p \nmid i \times a!$
Therefore:

$p \nmid a!$

Aiming for a contradiction, suppose $p \divides x_j$, where $j \ne i$.
Then $p \divides 1 + j \times a!$.
By Common Divisor Divides Difference:

$p \divides \paren {i - j} \times a!$
By Euclid's Lemma, along with $p \nmid a!$ above:

$p \divides i - j$
But as $0 < \size {i - j} < n$:

$p \divides \paren {n - 1}!$
Additionally, since $a \ge n - 1$:

$\paren {n - 1}! \divides a!$
By Divisor Relation is Transitive:

$p \divides a!$
However, $p \nmid a!$ from above, a contradiction.
Thus, by Proof by Contradiction, there is no such $x_j$.
Hence the result.
$\blacksquare$





