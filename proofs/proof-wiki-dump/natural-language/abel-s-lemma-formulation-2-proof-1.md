# 

Source: https://proofwiki.org/wiki/Abel%27s_Lemma/Formulation_2/Proof_1



Lemma
Let $\ds A_n = \sum_{i \mathop = m}^n {a_i}$ be the partial sum of $\sequence a$ from $m$ to $n$.

Then:

$\ds \sum_{k \mathop = m}^n a_k b_k = \sum_{k \mathop = m}^{n - 1} A_k \paren {b_k - b_{k + 1} } + A_n b_n$


Proof
Proof by induction:
For all $n \in \N$ where $n \ge m$, let $\map P n$ be the proposition:

$\ds \sum_{k \mathop = m}^n a_k b_k = \sum_{k \mathop = m}^{n - 1} A_k \paren {b_k - b_{k + 1} } + A_n b_n$


Basis for the Induction
First consider $\map P m$.
When $n = m$, we have that:

$\ds \sum_{k \mathop = m}^{n - 1} A_k \paren {b_k - b_{k + 1} } = 0$
is a vacuous summation, as the upper index is smaller than the lower index.
We also have that:

$\ds A_m = \sum_{i \mathop = m}^m {a_i} = a_m$
Thus we see that $\map P m$ is true, as this just says:

$a_m b_m = 0 + A_m b_m = a_m b_m$
which is clearly true.

This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P r$ is true, where $r \ge m$, then it logically follows that $\map P {r + 1}$ is true.

So this is our induction hypothesis:

$\ds \sum_{i \mathop = m}^r a_k b_k = \sum_{k \mathop = m}^{r - 1} A_k \paren {b_k - b_{k + 1} } + A_r b_r$

Then we need to show:

$\ds \sum_{k \mathop = m}^{r + 1} a_k b_k = \sum_{k \mathop = m}^r A_k \paren {b_k - b_{k + 1} } + A_{r + 1} b_{r + 1}$
where:

$\ds A_{r + 1} = \sum_{i \mathop = m}^{r + 1} {a_i}$


Induction Step
This is our induction step:














\(\ds \sum_{k \mathop = m}^{r + 1} a_k b_k\)

\(=\)







\(\ds \sum_{k \mathop = m}^r a_k b_k + a_{r + 1} b_{r + 1}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = m}^{r - 1} A_k \paren {b_k - b_{k + 1} } + A_r b_r + a_{r + 1} b_{r + 1}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = m}^{r - 1} A_k b_k - \sum_{k \mathop = m}^{r - 1} A_k b_{k + 1} + A_r b_r + a_{r + 1} b_{r + 1}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = m}^r A_k b_k - \paren {\sum_{k \mathop = m}^r A_k b_{k + 1} - A_r b_{r + 1} } + a_{r + 1} b_{r + 1}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = m}^r A_k \paren {b_k - b_{k + 1} } + \paren {A_r + a_{r + 1} } b_{r + 1}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = m}^r A_k \paren {b_k - b_{k + 1} } + A_{r + 1} b_{r + 1}\)









So $\map P n \implies \map P {r + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\ds \forall n \ge m: \sum_{k \mathop = m}^n a_k b_k = \sum_{k \mathop = m}^{n - 1} A_k \paren {b_k - b_{k + 1} } + A_n b_n$
$\blacksquare$


Source of Name
This entry was named for Niels Henrik Abel.





