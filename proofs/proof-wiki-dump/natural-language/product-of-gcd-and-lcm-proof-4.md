# 

Source: https://proofwiki.org/wiki/Product_of_GCD_and_LCM/Proof_4

Theorem
$\lcm \set {a, b} \times \gcd \set {a, b} = \size {a b}$
where:

$\lcm \set {a, b}$ denotes the lowest common multiple of $a$ and $b$
$\gcd \set {a, b}$ denotes the greatest common divisor of $a$ and $b$.


Proof
From Fundamental Theorem of Arithmetic, let:














\(\ds m\)

\(=\)







\(\ds {p_1}^{k_1} {p_2}^{k_2} \dotsm {p_r}^{k_r}\)




















\(\ds n\)

\(=\)







\(\ds {p_1}^{l_1} {p_2}^{l_2} \dotsm {p_r}r^{l_r}\)










From LCM from Prime Decomposition:

$\lcm \set {m, n} = p_1^{\max \set {k_1, l_1} } p_2^{\max \set {k_2, l_2} } \dotsm p_r^{\max \set {k_r, l_r} }$

From GCD from Prime Decomposition:

$\gcd \set {m, n} = p_1^{\min \set {k_1, l_1} } p_2^{\min \set {k_2, l_2} } \dotsm p_r^{\min \set {k_r, l_r} }$

From Sum of Maximum and Minimum, for all $i \in \set {1, 2, \ldots, r}$:

$\min \set {k_i, l_i} + \max \set {k_i, l_i} = k_i + l_i$

Hence:














\(\ds \gcd \set {m, n} \times \lcm \set {m, n}\)

\(=\)







\(\ds p_1^{k_1 + l_1} p_2^{k_2 + l_2} \dotsm p_r^{k_r + l_r}\)




















\(\ds \)

\(=\)







\(\ds p_1^{k_1} p_1^{l_1} p_2^{k_2} p_2^{l_2} \dotsm p_r^{k_r} p_r^{l_r}\)




















\(\ds \)

\(=\)







\(\ds p_1^{k_1} p_2^{k_2} \dotsm p_r^{k_r} \times p_1^{l_1} p_2^{l_2} \dotsm p_r^{l_r}\)




















\(\ds \)

\(=\)







\(\ds m n\)









$\blacksquare$


Sources
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {2-4}$ The Fundamental Theorem of Arithmetic: Exercise $8$




