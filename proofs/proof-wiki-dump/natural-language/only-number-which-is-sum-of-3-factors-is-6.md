# 

Source: https://proofwiki.org/wiki/Only_Number_which_is_Sum_of_3_Factors_is_6



Theorem
The only positive integer which is the sum of exactly $3$ of its distinct coprime divisors is $6$.


Corollary
$1$ can be expressed uniquely as the sum of $3$ distinct unit fractions:

$1 = \dfrac 1 2 + \dfrac 1 3 + \dfrac 1 6$


Proof
Let $n$ be such a positive integer with corresponding divisors $a, b, c$ such that:

$a + b + c = n$
We note that the set $\set {k a, k b, k c}$ satisfy the same properties trivially as divisors of $k n$.
Hence the specification that $\set {a, b, c}$ is a coprime set.

Without loss of generality, suppose $a < b < c$.
Since $a, b, c$ are strictly positive, $n \ne c$.
Suppose $\dfrac n c \ge 3$.
Then:














\(\ds n\)

\(=\)







\(\ds a + b + c\)




















\(\ds \)

\(<\)







\(\ds c + c + c\)




















\(\ds \)

\(=\)







\(\ds n\)









which is a contradiction.
Hence:














\(\ds \frac n c\)

\(=\)







\(\ds 2\)














\(\ds \leadsto \ \ \)





\(\ds a + b + c\)

\(=\)







\(\ds 2 c\)














\(\ds \leadsto \ \ \)





\(\ds a + b\)

\(=\)







\(\ds c\)














\(\ds \leadsto \ \ \)





\(\ds n\)

\(=\)







\(\ds 2 a + 2 b\)









Since $a, b$ are divisors of $n$:

$a \divides \paren {2 a + 2 b}$
$b \divides \paren {2 a + 2 b}$
which reduces to:

$a \divides 2 b$
$b \divides 2 a$

Suppose $b$ is odd.
Then by Euclid's Lemma, we would have $b \divides a$.
By Absolute Value of Integer is not less than Divisors, this gives $b \le a$, which is a contradiction.
Thus $b$ is even.

Suppose $a$ is even.
Then $a, b, c$ are all even.
So $\gcd \set {a, b, c} \ne 1$, which is a contradiction.

Therefore it must be the case that $a$ is odd.
Then by Euclid's Lemma, we have:

$a \divides \dfrac b 2$
and:

$\dfrac b 2 \divides a$
By Absolute Value of Integer is not less than Divisors, this gives:

$\dfrac b 2 = a$
Because $\gcd \set {a, b, c} = 1$, we must have $a = 1$.
Hence the set $\set {1, 2, 3}$ is obtained.
$\blacksquare$


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $6$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $6$




