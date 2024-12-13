# 

Source: https://proofwiki.org/wiki/Logarithm_of_Convergent_Product_of_Real_Numbers



Theorem
Let $\sequence {a_n}$ be a sequence of strictly positive real numbers.

The following statements are equivalent:

$(1): \quad$ The infinite product $\ds \prod_{n \mathop = 1}^\infty a_n$ converges to $a \in \R_{\ne 0}$.
$(2): \quad$ The series $\ds \sum_{n \mathop = 1}^\infty \ln a_n$ converges to $\ln a$.


Proof
Let $p_n$ denote the $n$th partial product of $\ds \prod_{n \mathop = 1}^\infty a_n$.
Let $s_n$ denote the $n$th partial sum of $\ds \sum_{n \mathop = 1}^\infty \ln a_n$.
By Sum of Logarithms, $s_n = \map \ln {p_n}$.


1 implies 2
Let $\ds \prod_{n \mathop = 1}^\infty a_n$ converge to $a>0$.
Then $p_n \to a$.
By Real Natural Logarithm Function is Continuous:

$s_n \to \ln a$
$\Box$


2 implies 1
Let $\ds \sum_{n \mathop = 1}^\infty \ln a_n$ converge to $\ln a$.
Then $s_n \to \ln a$.
By Exponential Function is Continuous, $p_n \to a$.
Because $a \ne 0$, $\ds \prod_{n \mathop = 1}^\infty a_n$ converges to $a$.
$\blacksquare$


Also see
Logarithm of Infinite Product of Real Numbers, for similar results
Logarithm of Infinite Product of Complex Numbers




