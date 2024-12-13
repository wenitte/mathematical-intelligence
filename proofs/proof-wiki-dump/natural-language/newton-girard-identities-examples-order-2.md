# 

Source: https://proofwiki.org/wiki/Newton-Girard_Identities/Examples/Order_2

Theorem
Let $a, b \in \Z$ be integers such that $b \ge a$.
Let $U$ be a set of $n = b - a + 1$ numbers $\set {x_a, x_{a + 1}, \ldots, x_b}$.

Then:

$\ds \sum_{a \mathop \le i \mathop < j \mathop \le b} x_i x_j = \dfrac 1 2 \paren {\paren {\sum_{i \mathop = a}^b x_i}^2 - \paren {\sum_{i \mathop = a}^b {x_i}^2} }$


Proof
From Newton-Girard Identities:

$\ds \sum_{a \mathop \le j_1 \mathop < \cdots \mathop < j_m \mathop \le b} x_{j_1} \cdots x_{j_m} = \sum_{\substack {k_1, k_2, \ldots, k_m \mathop \ge 0 \\ k_1 \mathop + 2 k_2 \mathop + \mathop \cdots \mathop + m k_m \mathop = m} } \dfrac { {S_1}^{k_1} } {1^{k_1} k_1 !} \dfrac {\paren {-S_2}^{k_2} } {2^{k_2} k_2 !} \cdots \dfrac {\paren {\paren {-1}^{m + 1} S_m}^{k_m} } {m^{k_m} k_m !}$
where:

$S_r = \ds \sum_{k \mathop = a}^b {x_k}^r$ for $r \in \Z_{\ge 0}$.

Setting $m = 2$, and setting $x_i := x_{j_1}, x_j := x_{j_2}$:














\(\ds \sum_{a \mathop \le i \mathop < j \mathop \le b} x_{j_1} x_{j_2}\)

\(=\)







\(\ds \sum_{\substack {k_1, k_2 \mathop \ge 0 \\ k_1 \mathop + 2 k_2 \mathop = 2} } \dfrac { {S_1}^{k_1} } {1^{k_1} k_1 !} \dfrac {\paren {-S_2}^{k_2} } {2^{k_2} k_2 !}\)




















\(\ds \)

\(=\)







\(\ds \dfrac { {S_1}^2 \paren {-S_2}^0} {\paren {1^2 \times 2!} \paren {2^0 \times 0!} } + \dfrac { {S_1}^0 \paren {-S_2}^1} {\paren {1^0 \times 0!} \paren {2^1 \times 1!} }\)





as $k_1 = 2, k_2 = 0$ and $k_1 = 0, k_2 = 1$ are the only $k_1$ and $k_2$ to fulfil the criteria














\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren { {S_1}^2 - S_2}\)





simplifying



$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.9$: Generating Functions: Exercise $10$




