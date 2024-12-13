# 

Source: https://proofwiki.org/wiki/Newton-Girard_Identities/Lemma_2

Theorem
Let $a, b \in \Z$ be integers such that $b \ge a$.
Let $U$ be a set of $n = b - a + 1$ numbers $\set {x_a, x_{a + 1}, \ldots, x_b}$.
Let $m \in \Z_{>0}$ be a (strictly) positive integer.

Let:














\(\ds h_m\)

\(=\)







\(\ds \sum_{a \mathop \le j_1 \mathop < \cdots \mathop < j_m \mathop \le b} \paren {\prod_{k \mathop = 1}^m x_{j_k} }\)




















\(\ds \)

\(=\)







\(\ds \sum_{a \mathop \le j_1 \mathop < \cdots \mathop < j_m \mathop \le b} x_{j_1} \cdots x_{j_m}\)









That is, $h_m$ is the product of all $m$-tuples of elements of $U$ taken $m$ at a time, excluding repetitions.

For $r \in \Z_{> 0}$, let:

$S_r = \ds \sum_{j \mathop = a}^b {x_j}^r$

Let $\map G z$ be the generating function for the sequence $\sequence {h_m}$.
Then:














\(\ds \map \ln {\map G z}\)

\(=\)







\(\ds \sum_{k \mathop \ge 1} \paren {-1}^{k + 1} \dfrac {S_k z^k} k\)











Proof













\(\ds \map G z\)

\(=\)







\(\ds \paren {1 + x_a z} \paren {1 + x_{a + 1} z} \cdots \paren {1 + x_b z}\)





Lemma 1








\(\ds \leadsto \ \ \)





\(\ds \map \ln {\map G z}\)

\(=\)







\(\ds \map \ln {1 + x_a z} + \map \ln {1 + x_{a + 1} z} + \cdots + \map \ln {1 + x_b z}\)





Sum of Logarithms














\(\ds \)

\(=\)







\(\ds \paren {\sum_{k \mathop \ge 1} \dfrac {\paren {-1}^{k + 1} {x_a}^k z^k} k} + \paren {\sum_{k \mathop \ge 1} \dfrac {\paren {-1}^{k + 1} {x_{a + 1} }^k z^k} k} + \cdots + \paren {\sum_{k \mathop \ge 1} \dfrac {\paren {-1}^{k + 1} {x_b}^k z^k} k}\)





Power Series Expansion for Logarithm of 1 + x














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop \ge 1} \dfrac {\paren {-1}^{k + 1} z^k} k \paren { {x_a}^k + {x_{a + 1} }^k + \cdots + {x_b}^k}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop \ge 1} \dfrac {\paren {-1}^{k + 1} z^k} k \sum_{j \mathop = a}^b {x_j}^k\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop \ge 1} \dfrac {\paren {-1}^{k + 1} S_k z^k} k\)





Definition of $S_k$



$\blacksquare$





