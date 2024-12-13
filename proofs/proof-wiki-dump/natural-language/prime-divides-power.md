# 

Source: https://proofwiki.org/wiki/Prime_Divides_Power



Theorem
Let $p$ be a prime number.
Let $a, n \in \Z$ be integers.
Then $p$ divides $a^n$ if and only if $p^n$ divides $a^n$.


Proof
Sufficient Condition
Let $p^n \divides a^n$.
We have $p \divides p^n$ as $p^n = p \paren {p^{n - 1} }$.
From the fact that Divisor Relation is Transitive, we have that $p \divides a^n$.
$\Box$


Necessary Condition
Let $p \divides a^n$.
Using Euclid's Lemma for Prime Divisors with $a_1 = a_2 = \cdots = a_n = a$ we have that:

$p \divides a^n \implies p \divides a$
Hence $a = p r$ for some $r \in \Z$.
Raising both sides of this equation to the power $n$ we get that:

$a^n = p^n r^n$
So:

$p^n \divides a^n$
$\blacksquare$





