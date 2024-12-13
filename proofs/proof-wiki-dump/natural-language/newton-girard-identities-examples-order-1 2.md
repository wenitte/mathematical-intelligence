# 

Source: https://proofwiki.org/wiki/Newton-Girard_Identities/Examples/Order_1

Theorem
Let $a, b \in \Z$ be integers such that $b \ge a$.
Let $U$ be a set of $n = b - a + 1$ numbers $\set {x_a, x_{a + 1}, \ldots, x_b}$.

Then:

$\ds \sum_{a \mathop \le i \mathop \le b} x_i = S_1$
where:

$\ds S_r := \sum_{k \mathop = a}^b {x_k}^r$


Proof
From Newton-Girard Identities:

$\ds \sum_{a \mathop \le j_1 \mathop < \cdots \mathop < j_m \mathop \le b} x_{j_1} \cdots x_{j_m} = \sum_{\substack {k_1, k_2, \ldots, k_m \mathop \ge 0 \\ k_1 \mathop + 2 k_2 \mathop + \mathop \cdots \mathop + m k_m \mathop = m} } \dfrac { {S_1}^{k_1} } {1^{k_1} k_1 !} \dfrac {\paren {-S_2}^{k_2} } {2^{k_2} k_2 !} \cdots \dfrac {\paren {\paren {-1}^{m + 1} S_m}^{k_m} } {m^{k_m} k_m !}$
where:

$S_r = \ds \sum_{k \mathop = a}^b {x_k}^r$ for $r \in \Z_{\ge 0}$.

Setting $m = 1$, and setting $x_i := x_{j_1}$:














\(\ds \sum_{a \mathop \le i \mathop \le b} x_{j_1}\)

\(=\)







\(\ds \sum_{\substack {k_1, k_2 \mathop \ge 0 \\ k_1 \mathop + 2 k_2 \mathop = 2} } \dfrac { {S_1}^{k_1} } {1^{k_1} k_1 !}\)




















\(\ds \)

\(=\)







\(\ds \dfrac { {S_1}^1} {1^1 \times 1!}\)





as $k_1 = 1$ is the only $k_1$ to fulfil the criteria














\(\ds \)

\(=\)







\(\ds S_1\)





simplifying



$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.9$: Generating Functions: Exercise $10$




