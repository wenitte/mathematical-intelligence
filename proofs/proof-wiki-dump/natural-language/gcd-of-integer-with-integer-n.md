# 

Source: https://proofwiki.org/wiki/GCD_of_Integer_with_Integer_%2B_n

Theorem
Let $a \in \Z$ be an integer.
Let $n \in \Z_{\ge 0}$ be a positive integer.

Then:

$\gcd \set {a, a + n} \divides n$
where:

$\gcd$ denotes the greatest common divisor
$\divides$ denotes divisibility.


Proof
Let $g = \gcd \set {a, a + n}$.
By definition of $\gcd$, there exist $b, b' \in \Z$ such that:

$a = g b$
$a + n = g b'$
Therefore:














\(\ds n\)

\(=\)







\(\ds \paren{ a + n } - a\)




















\(\ds \)

\(=\)







\(\ds g b' - g b\)




















\(\ds \)

\(=\)







\(\ds g \paren{ b' - b }\)









Since $b' - b \in \Z$, it follows by definition of divisibility that:

$g \divides n$
as desired.
$\blacksquare$


Sources
1980: David M. Burton: Elementary Number Theory (revised ed.) ... (previous) ... (next): Chapter $2$: Divisibility Theory in the Integers: $2.2$ The Greatest Common Divisor: Problems $2.2$: $12$




