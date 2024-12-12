# 

Source: https://proofwiki.org/wiki/Defining_Sequence_of_Natural_Logarithm_is_Convergent

Theorem
Let $x \in \R$ be a real number such that $x > 0$.
Let $\left\langle{ f_n }\right\rangle$ be the sequence of mappings $f_n : \R_{>0} \to \R$ defined as:

$f_n \left({ x }\right) = n \left({ \sqrt[n]{ x } - 1 }\right)$

Then $\left\langle{ f_n }\right\rangle$ is pointwise convergent.


Proof
Fix $x \in \R_{>0}$.
From Defining Sequence of Natural Logarithm is Strictly Decreasing, $\left\langle{ f_n \left({ x }\right) }\right\rangle$ is  strictly decreasing.
From Lower Bound of Natural Logarithm/Proof 3, $\left\langle{ f_n \left({ x }\right) }\right\rangle$ is bounded below.
From Monotone Convergence Theorem, $\left\langle{ f_n \left({ x }\right) }\right\rangle$ is convergent
Hence the result, by definition of pointwise convergence.
$\blacksquare$





