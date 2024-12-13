# 

Source: https://proofwiki.org/wiki/LCM_of_3_Integers_in_terms_of_GCDs_of_Pairs_of_those_Integers/Lemma

Theorem
Let $a, b, c \in \Z_{>0}$ be strictly positive integers.
Then:

$\gcd \set {\gcd \set {a, b}, \gcd \set {a, c} } = \gcd \set {a, b, c}$


Proof
Let $\gcd \set {a, b, c} = d_1$.
From definition:

$d_1 \divides a$, $d_1 \divides b$ and $d_1 \divides c$.
By Common Divisor Divides GCD:

$d_1 \divides \gcd \set {a, b}$ and $d_1 \divides \gcd \set {a, c}$.
By Common Divisor Divides GCD again:

$d_1 \divides \gcd \set {\gcd \set {a, b}, \gcd \set {a, c} }$.

On the other hand, let $\gcd \set {\gcd \set {a, b}, \gcd \set {a, c} } = d_2$.
From definition:

$d_2 \divides \gcd \set {a, b}$ and $d_2 \divides \gcd \set {a, c}$.
From definition again:

$d_2 \divides a$, $d_2 \divides b$ and $d_2 \divides c$.
Hence $d_2 \divides \gcd \set {a, b, c}$.

Since $\gcd \set {\gcd \set {a, b}, \gcd \set {a, c} }$ and $\gcd \set {a, b, c}$ divide each other, by Absolute Value of Integer is not less than Divisors they must be equal.
$\blacksquare$





