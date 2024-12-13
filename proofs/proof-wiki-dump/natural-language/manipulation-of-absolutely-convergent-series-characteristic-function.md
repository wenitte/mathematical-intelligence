# 

Source: https://proofwiki.org/wiki/Manipulation_of_Absolutely_Convergent_Series/Characteristic_Function

Theorem
Let $\ds \sum_{n \mathop = 1}^\infty a_n$ be a real or complex series that is absolutely convergent.

Let $A \subseteq \N$.
Then:

$\ds \sum_{n \mathop = 1}^\infty a_n \map {\chi_A} n = \sum_{n \mathop \in A} a_n$
where $\chi_A$ is the characteristic function of $A$.


Proof
For all $N \in \N$, we have:

$\ds \sum_{n \mathop = 1}^N \size {a_n \map {\chi_A} n} \le \sum_{n \mathop = 1}^N \size {a_n} \le \sum_{n \mathop = 1}^\infty \size {a_n}$
It follows that:

$\ds \sum_{n \mathop = 1}^\infty \size {a_n \map {\chi_A} n} \le \sum_{n \mathop = 1}^\infty \size {a_n}$
Then $\ds \sum_{n \mathop = 1}^\infty a_n \map {\chi_A} n$ is absolutely convergent.
It follows from Manipulation of Absolutely Convergent Series: Permutation that the order of the terms in the series does not matter.
As $\map {\chi_A} n = 0$ for all $n \notin A$, we have:

$\ds \sum_{n \mathop = 1}^\infty a_n \map {\chi_A} n = \sum_{n \mathop \in A} a_n$
$\blacksquare$





