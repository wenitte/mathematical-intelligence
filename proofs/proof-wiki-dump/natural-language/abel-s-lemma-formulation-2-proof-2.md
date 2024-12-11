# 

Source: https://proofwiki.org/wiki/Abel%27s_Lemma/Formulation_2/Proof_2

Lemma
Let $\ds A_n = \sum_{i \mathop = m}^n {a_i}$ be the partial sum of $\sequence a$ from $m$ to $n$.

Then:

$\ds \sum_{k \mathop = m}^n a_k b_k = \sum_{k \mathop = m}^{n - 1} A_k \paren {b_k - b_{k + 1} } + A_n b_n$


Proof
First note that:

$\ds A_{m - 1} = \sum_{i \mathop = m}^{m - 1} a_i = 0$
is a vacuous summation, as the upper index is smaller than the lower index.
Then we have:














\(\ds \sum_{k \mathop = m}^n a_k b_k\)

\(=\)







\(\ds \sum_{k \mathop = m}^n \paren {A_k - A_{k - 1} } b_k\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = m}^n A_k b_k - \sum_{k \mathop = m}^n A_{k - 1} b_k\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = m}^n A_k b_k - \sum_{k \mathop = m-1}^{n - 1} A_k b_{k + 1}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = m}^{n - 1} A_k \paren {b_k - b_{k + 1} } + A_n b_n - A_{m - 1} b_m\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = m}^{n - 1} A_k \paren {b_k - b_{k + 1} } + A_n b_n - 0\)









Therefore:

$\ds \forall n \ge m: \sum_{k \mathop = m}^n a_k b_k = \sum_{k \mathop = m}^{n - 1} A_k \paren {b_k - b_{k + 1} } + A_n b_n$
$\blacksquare$


Source of Name
This entry was named for Niels Henrik Abel.





