# 

Source: https://proofwiki.org/wiki/GCD_of_Sum_and_Difference_of_Coprime_Integers

Theorem
Let $a, b \in \Z$ be coprime integers.
Then:

$\gcd \set {a + b, a - b} = 1 \text { or } 2$
where:

$\gcd$ denotes greatest common divisor.


Proof
Let:

$d = \gcd \set {a + b, a - b}$
We have:














\(\ds \gcd \set {a + b, a - b}\)

\(=\)







\(\ds \gcd \set {a + b, a + b - 2 b}\)




















\(\ds \)

\(\divides\)







\(\ds 2 b\)





GCD of Integer with Integer + n














\(\ds \gcd \set {a + b, a - b}\)

\(=\)







\(\ds \gcd \set {-\paren {a + b}, a - b}\)





GCD for Negative Integers














\(\ds \)

\(=\)







\(\ds \gcd \set {-a - b, a - b}\)




















\(\ds \)

\(=\)







\(\ds \gcd \set {-a - b, a - b - 2 a}\)




















\(\ds \)

\(\divides\)







\(\ds 2 a\)





GCD of Integer with Integer + n








\(\ds \leadsto \ \ \)





\(\ds d\)

\(=\)







\(\ds \gcd \set {2 a, 2 b}\)














\(\ds \leadsto \ \ \)





\(\ds d\)

\(\le\)







\(\ds \gcd \set {2 a, 2 b}\)




















\(\ds \)

\(=\)







\(\ds 2 \gcd \set {a, b}\)





GCD of Integers with Common Divisor



Hence:

$1 \le d \le 2$
and the result follows.
$\blacksquare$


Sources
1980: David M. Burton: Elementary Number Theory (revised ed.) ... (previous) ... (next): Chapter $2$: Divisibility Theory in the Integers: $2.3$ The Euclidean Algorithm: Problems $2.3$: $4 \ \text {(a)}$




