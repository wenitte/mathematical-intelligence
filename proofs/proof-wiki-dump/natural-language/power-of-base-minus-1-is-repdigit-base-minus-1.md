# 

Source: https://proofwiki.org/wiki/Power_of_Base_minus_1_is_Repdigit_Base_minus_1

Theorem
Let $b \in \Z_{>1}$ be an integer greater than $1$.
Let $n = b^k - 1$ for some integer $k$ such that $k \ge 1$.
Let $n$ be expressed in base $b$ representation.

Then $n$ is a repdigit number consisting of $k$ instances of digit $b - 1$.


Proof













\(\ds \dfrac {b^k - 1} {b - 1}\)

\(=\)







\(\ds \sum_{j \mathop = 0}^{k - 1} b^j\)





Sum of Geometric Sequence








\(\ds \leadsto \ \ \)





\(\ds n = b^k - 1\)

\(=\)







\(\ds \paren {b - 1} \sum_{j \mathop = 0}^{k - 1} b^j\)




















\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 0}^{k - 1} \paren {b - 1} b^j\)









Thus, by the definition of base $b$ representation, $n$ consists of $k$ occurrences of the digit $b - 1$.
$\blacksquare$





