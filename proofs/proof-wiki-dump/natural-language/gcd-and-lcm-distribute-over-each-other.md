# 

Source: https://proofwiki.org/wiki/GCD_and_LCM_Distribute_Over_Each_Other



Theorem
Let $a, b, c \in \Z$.
Then:

$\lcm \set {a, \gcd \set {b, c} } = \gcd \set {\lcm \set {a, b}, \lcm \set {a, c} }$
$\gcd \set {a, \lcm \set {b, c} } = \lcm \set {\gcd \set {a, b}, \gcd \set {a, c} }$
That is, greatest common divisor and lowest common multiple are distributive over each other.


Proof
LCM Distributive over GCD
Let $p_s$ be any of the prime divisors of $a, b$ or $c$, and let $s_a, s_b$ and $s_c$ be its exponent in each of those numbers.
Let $x = \lcm \set {a, \gcd \set {b, c} }$.
Then from GCD and LCM from Prime Decomposition, the exponent of $p_s$ in $x$ is $\max \set {s_a, \min \set {s_b, s_c} }$.
From Max and Min Operations are Distributive over Each Other, $\max$ distributes over $\min$.
Therefore:

$\max \set {s_a, \min \set {s_b, s_c} } = \min \set {\max \set {s_a, s_b}, \max \set {s_a, s_c} }$
Hence it follows that LCM is distributive over GCD.
$\Box$


GCD Distributive over LCM
Let $p_s$ be any of the prime divisors of $a, b$ or $c$, and let $s_a, s_b$ and $s_c$ be its exponent in each of those numbers.
Let $x = \gcd \set {a, \lcm \set {b, c} }$.
Then from GCD and LCM from Prime Decomposition, the exponent of $p_s$ in $x$ is $\min \set {s_a, \max \set {s_b, s_c} }$.
From Max and Min Operations are Distributive over Each Other, $\min$ distributes over $\max$.
Therefore:

$\min \set {s_a, \max \set {s_b, s_c} } = \max \set {\min \set {s_a, s_b}, \min \set {s_a, s_c} }$
and the result follows.
Hence it follows that GCD is distributive over LCM.
$\blacksquare$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $1$: Properties of the Natural Numbers: $\S 23 \epsilon$




