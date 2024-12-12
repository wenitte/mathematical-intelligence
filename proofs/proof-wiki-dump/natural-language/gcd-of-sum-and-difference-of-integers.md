# 

Source: https://proofwiki.org/wiki/GCD_of_Sum_and_Difference_of_Integers

Theorem
$\gcd \set {a + b, a - b} \ge \gcd \set {a, b}$


Proof
Let $d = \gcd \set {a, b}$.
Then by definition of greatest common divisor:

$d \divides a \land d \divides b$
From Common Divisor Divides Integer Combination:

$d \divides \paren {a + b} \land d \divides \paren {a - b}$
By definition of common divisor:

$d \divides \gcd \set {a + b, a - b}$
Hence from Absolute Value of Integer is not less than Divisors:

$d \le \gcd \set{a + b, a - b}$
$\blacksquare$


Sources
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {2-2}$ Divisibility: Exercise $8$




