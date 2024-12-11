# 

Source: https://proofwiki.org/wiki/Abel%27s_Lemma/Formulation_1/Corollary



Corollary to Abel's Lemma: Formulation 1
Let $\sequence a$ and $\sequence b$ be sequences in an arbitrary ring $R$.

Then:

$\ds \sum_{k \mathop = 1}^n a_k \paren {b_{k + 1} - b_k} = a_{n + 1} b_{n + 1} - a_1 b_1 - \sum_{k \mathop = 1}^n \paren {a_{k + 1} - a_k} b_{k + 1}$

Note that although proved for the general ring, this result is usually applied to one of the conventional number fields $\Z, \Q, \R$ and $\C$.


Proof
From Abel's Lemma: Formulation 1, we have:

$\ds \sum_{k \mathop = m}^n a_k \paren {b_{k + 1} - b_k} = a_{n + 1} b_{n + 1} - a_m b_m - \sum_{k \mathop = m}^n \paren {a_{k + 1} - a_k} b_{k + 1}$
The result follows by setting $m = 1$.
$\blacksquare$


Also reported as
Some sources give this as:

$\ds \sum_{k \mathop = 1}^n \paren {a_{k + 1} - a_k} b_k = a_{n + 1} b_{n + 1} - a_1 b_1 - \sum_{k \mathop = 1}^n a_{k + 1} \paren {b_{k + 1} - b_k}$
which is obtained from the main result by interchanging $a$ and $b$.

Others take the upper index to $n - 1$:

$\ds \sum_{k \mathop = 1}^{n - 1} \paren {a_{k + 1} - a_k} b_k = a_n b_n - a_1 b_1 - \sum_{k \mathop = 1}^{n - 1} a_{k + 1} \paren {b_{k + 1} - b_k}$


Source of Name
This entry was named for Niels Henrik Abel.


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.7$: Harmonic Numbers: Exercise $10$




