# 

Source: https://proofwiki.org/wiki/Product_of_GCD_and_LCM/Proof_5

Theorem
$\lcm \set {a, b} \times \gcd \set {a, b} = \size {a b}$
where:

$\lcm \set {a, b}$ denotes the lowest common multiple of $a$ and $b$
$\gcd \set {a, b}$ denotes the greatest common divisor of $a$ and $b$.


Proof
Let $d := \gcd \set {a, b}$. 
Then by definition of the GCD, there exist $r, s\in \Z$ such that $a = d r$ and $b = d s$.
Let $m = \dfrac {a b} d$.
Then:

$m = a s = r b$
which makes $m$ a common multiple of $a$ and $b$.

Let $c \in \Z_{>0}$ be a common multiple of $a$ and $b$.
Let us say that:

$c = a u = b v$
From Bézout's Identity:

$\exists x, y \in \Z: d = a x + b y$
Then:














\(\ds \dfrac c m\)

\(=\)







\(\ds \dfrac {c d} {a b}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {c \paren {a x + b y} } {a b}\)




















\(\ds \)

\(=\)







\(\ds \dfrac c b x + \dfrac c a y\)




















\(\ds \)

\(=\)







\(\ds v x + n y\)









That is:

$m \divides c$
where $\divides$ denotes divisibility.
So by Absolute Value of Integer is not less than Divisors:

$m \le c$
Hence by definition of the LCM:

$\lcm \set {a, b} = m$
In conclusion:

$\lcm \set {a, b} = \dfrac {a b} d = \dfrac {a b} {\gcd \set {a, b} }$
and the result follows.
$\blacksquare$


Sources
1980: David M. Burton: Elementary Number Theory (revised ed.) ... (previous) ... (next): Chapter $2$: Divisibility Theory in the Integers: $2.3$ The Euclidean Algorithm




