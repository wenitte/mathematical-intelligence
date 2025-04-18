# 

Source: https://proofwiki.org/wiki/Newton-Girard_Identities/Examples/Order_3

Theorem
Let $a, b \in \Z$ be integers such that $b \ge a$.
Let $U$ be a set of $n = b - a + 1$ numbers $\set {x_a, x_{a + 1}, \ldots, x_b}$.

Then:

$\ds \sum_{a \mathop \le i \mathop < j \mathop < k \mathop \le b} x_i x_j x_k = \dfrac { {S_1}^3} 6 - \dfrac {S_1 S_2} 2 + \dfrac {S_3} 3$
where:

$\ds S_r := \sum_{k \mathop = a}^b {x_k}^r$


Proof
From Newton-Girard Identities:

$\ds \sum_{a \mathop \le j_1 \mathop < \cdots \mathop < j_m \mathop \le b} x_{j_1} \cdots x_{j_m} = \sum_{\substack {k_1, k_2, \ldots, k_m \mathop \ge 0 \\ k_1 \mathop + 2 k_2 \mathop + \mathop \cdots \mathop + m k_m \mathop = m} } \dfrac { {S_1}^{k_1} } {1^{k_1} k_1 !} \dfrac {\paren {-S_2}^{k_2} } {2^{k_2} k_2 !} \dfrac { {S_3}^{k_3} } {3^{k_3} k_3 !} \cdots \dfrac {\paren {\paren {-1}^{m + 1} S_m}^{k_m} } {m^{k_m} k_m !}$
where:

$S_r = \ds \sum_{k \mathop = a}^b {x_k}^r$ for $r \in \Z_{\ge 0}$.

Setting $m = 3$, and setting $x_i := x_{j_1}, x_j := x_{j_2}, x_k := x_{j_3}$:














\(\ds \sum_{a \mathop < j_1 \mathop < j_2 \mathop < j_3 \mathop \le b} x_{j_1} x_{j_2} x_{j_3}\)

\(=\)







\(\ds \sum_{\substack {k_1, k_2, k_3 \mathop \ge 0 \\ k_1 \mathop + 2 k_2 \mathop + 3 k_3 \mathop = 3} } \dfrac { {S_1}^{k_1} } {1^{k_1} k_1 !} \dfrac {\paren {-S_2}^{k_2} } {2^{k_2} k_2 !} \dfrac { {S_3}^{k_3} } {3^{k_3} k_3 !}\)










We need to find all sets of $k_1, k_2, k_3 \in \Z_{\ge 0}$ such that:

$k_1 + 2 k_2 + 3 k_3 = 3$
Thus $\tuple {k_1, k_2, k_3}$ can be:

$\tuple {3, 0, 0}$
$\tuple {1, 1, 0}$
$\tuple {0, 0, 1}$

Hence:














\(\ds \sum_{a \mathop \le j_1 \mathop \le j_2 \mathop \le j_3 \mathop \le b} x_{j_1} x_{j_2} x_{j_3}\)

\(=\)







\(\ds \dfrac { {S_1}^3 \paren {-S_2}^0 {S_3}^0} {\paren {1^3 \times 3!} \paren {2^0 \times 0!} \paren {3^0 \times 0!} } + \dfrac { {S_1}^1 \paren {-S_2}^1 {S_3}^0} {\paren {1^1 \times 1!} \paren {2^1 \times 1!} \paren {3^0 \times 0!} } + \dfrac { {S_1}^0 \paren {-S_2}^0 {S_3}^1} {\paren {1^0 \times 0!} \paren {2^0 \times 0!} \paren {3^1 \times 1!} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac { {S_1}^3} 6 - \dfrac {S_1 S_2} 2 + \dfrac {S_3} 3\)









$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.9$: Generating Functions: Exercise $10$




