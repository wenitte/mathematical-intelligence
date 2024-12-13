# 

Source: https://proofwiki.org/wiki/LCM_of_3_Integers_in_terms_of_GCDs_of_Pairs_of_those_Integers



Theorem
Let $a, b, c \in \Z_{>0}$ be strictly positive integers.
Then:

$\lcm \set {a, b, c} = \dfrac {a b c \gcd \set {a, b, c} } {d_1 d_2 d_3}$
where:

$\gcd$ denotes greatest common divisor
$\lcm$ denotes lowest common multiple
$d_1 = \gcd \set {a, b}$
$d_2 = \gcd \set {b, c}$
$d_3 = \gcd \set {a, c}$


Lemma
Let $a, b, c \in \Z_{>0}$ be strictly positive integers.
Then:

$\gcd \set {\gcd \set {a, b}, \gcd \set {a, c} } = \gcd \set {a, b, c}$


Proof













\(\ds \lcm \set {a, b, c}\)

\(=\)







\(\ds \lcm \set {a, \lcm \set {b, c} }\)




















\(\ds \)

\(=\)







\(\ds \frac {a \lcm \set {b, c} } {\gcd \set {a, \lcm \set {b, c} } }\)





Product of GCD and LCM














\(\ds \)

\(=\)







\(\ds \frac {a b c} {\gcd \set {b, c} } \paren {\frac 1 {\gcd \set {a, \lcm \set {b, c} } } }\)





Product of GCD and LCM














\(\ds \)

\(=\)







\(\ds \frac {a b c} {\gcd \set {b, c} } \paren {\frac 1 {\lcm \set {\gcd \set {a, b}, \gcd \set {a, c} } } }\)





GCD and LCM Distribute Over Each Other














\(\ds \)

\(=\)







\(\ds \frac {a b c} {\gcd \set {b, c} } \paren {\frac {\gcd \set {\gcd \set {a, b}, \gcd \set {a, c} } } {\gcd \set {a, b} \gcd \set {a, c} } }\)





Product of GCD and LCM














\(\ds \)

\(=\)







\(\ds \frac {a b c \gcd \set {a, b, c} } {d_1 d_2 d_3}\)





by Lemma



$\blacksquare$


Sources
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {2-4}$ The Fundamental Theorem of Arithmetic: Exercise $12$




