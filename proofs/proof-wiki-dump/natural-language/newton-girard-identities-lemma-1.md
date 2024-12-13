# 

Source: https://proofwiki.org/wiki/Newton-Girard_Identities/Lemma_1

Theorem
Let $a, b \in \Z$ be integers such that $b \ge a$.
Let $U$ be a set of $n = b - a + 1$ numbers $\set {x_a, x_{a + 1}, \ldots, x_b}$.
Let $m \in \Z_{>0}$ be a (strictly) positive integer.

Let:














\(\ds h_m\)

\(=\)







\(\ds \sum_{a \mathop \le j_1 \mathop < \cdots \mathop < j_m \mathop \le b} \left({\prod_{k \mathop = 1}^m x_{j_k} }\right)\)




















\(\ds \)

\(=\)







\(\ds \sum_{a \mathop \le j_1 \mathop < \cdots \mathop < j_m \mathop \le b} x_{j_1} \cdots x_{j_m}\)









That is, $h_m$ is the product of all $m$-tuples of elements of $U$ taken $m$ at a time, excluding repetitions.

Let $\map G z$ be the generating function for the sequence $\sequence {h_m}$.
Then:














\(\ds \map G z\)

\(=\)







\(\ds \prod_{k \mathop = a}^b \paren {1 + x_k z}\)




















\(\ds \)

\(=\)







\(\ds \paren {1 + x_a z} \paren {1 + x_{a + 1} z} \cdots \paren {1 + x_b z}\)











Proof
This is an instance of Generating Function for Elementary Symmetric Function.
$\blacksquare$





