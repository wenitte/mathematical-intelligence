# 

Source: https://proofwiki.org/wiki/Common_Divisor_Divides_GCD

Theorem
Let $a, b \in \Z$ such that not both of $a$ and $b$ are zero.
Let $c$ be any common divisor of $a$ and $b$.
That is, let $c \in \Z: c \divides a, c \divides b$.

Then:

$c \divides \gcd \set {a, b}$
where $\gcd \set {a, b}$ is the greatest common divisor of $a$ and $b$.


Proof
Let $d = \gcd \set {a, b}$.
Then $d \divides a$ and $d \divides b$ by definition.
Then from Bézout's Identity, $\exists u, v \in \Z: d = u a + v b$.
From Common Divisor Divides Integer Combination, $c \divides a \land c \divides b \implies c \divides u a + v b$ for all $u, v \in \Z$.
Thus $c \divides d$.
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 12.4$: Highest common factors and Euclid's algorithm




