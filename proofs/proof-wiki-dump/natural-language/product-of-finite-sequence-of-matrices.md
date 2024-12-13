# 

Source: https://proofwiki.org/wiki/Product_of_Finite_Sequence_of_Matrices



Theorem
Let $\mathbf A_1, \mathbf A_2, \ldots, \mathbf A_n$ be matrices.
Let the order of $\mathbf A_j$ be $d_j \times d_{j + 1}$.
Let $\ds \mathbf C := \prod_{j \mathop = 1}^n \mathbf A_j = \mathbf A_1 \mathbf A_2 \cdots \mathbf A_n$ be the (conventional) matrix product of $\mathbf A_1, \mathbf A_2, \ldots, \mathbf A_n$.

Then:

$(1): \quad \ds \map c {i_1, i_{n + 1} } = \sum_{i_n \mathop = 1}^{d_n} \dotsm \sum_{i_3 \mathop = 1}^{d_3} \sum_{i_2 \mathop = 1}^{d_2} \map {a_1} {i_1, i_2} \map {a_2} {i_2, i_3} \dotsm \map {a_{n - 1} } {i_{n - 1}, i_n} \map {a_n} {i_n, i_{n + 1} }$
where:

$\map {a_1} {i_1, i_2}$ (for example) denotes the element of $\mathbf A_1$ whose indices are $i_1$ and $i_2$
the order of $\mathbf C$ is $d_1 \times d_{n+1}$.


Proof
Proof by induction:
For all $n \in \N_{> 0}$, let $\map P n$ be the proposition:

$\ds \map c {i_1, i_{n + 1} } = \sum_{i_n \mathop = 1}^{d_n} \dotsm \sum_{i_3 \mathop = 1}^{d_3} \sum_{i_2 \mathop = 1}^{d_2} \map {a_1} {i_1, i_2} \map {a_2} {i_2, i_3} \dotsm \map {a_{n - 1} } {i_{n - 1}, i_n} \map {a_n} {i_n, i_{n + 1} }$
$\map P 1$ is trivially true, as this just says:

$\map c {i_1, i_2} = \map {a_1} {i_1, i_2}$


Basis for the Induction
$\map P 2$ is the case:

$\ds \map c {i_1, i_3} = \sum_{i_2 \mathop = 1}^{d_2} \map {a_1} {i_1, i_2} \map {a_2} {i_2, i_3}$
which is the definition of (conventional) matrix product.
The order of $\mathbf C$ is $d_1 \times d_3$, while the orders of $\mathbf A_1$ and $\mathbf A_2$ are $d_1 \times d_2$ and $d_2 \times d_3$ respectively.

This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 2$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$\ds \map c {i_1, i_{k + 1} } = \sum_{i_k \mathop = 1}^{d_k} \dotsm \sum_{i_3 \mathop = 1}^{d_3} \sum_{i_2 \mathop = 1}^{d_2} \map {a_1} {i_1, i_2} \map {a_2} {i_2, i_3} \dotsm \map {a_k} {i_k, i_{k + 1} }$

Then we need to show:

$\ds \map c {i_1, i_{k + 2} } = \sum_{i_{k + 1} \mathop = 1}^{d_{k + 1} } \sum_{i_k \mathop = 1}^{d_k} \dotsm \sum_{i_3 \mathop = 1}^{d_3} \sum_{i_2 \mathop = 1}^{d_2} \map {a_1} {i_1, i_2} \map {a_2} {i_2, i_3} \dotsm \map {a_k} {i_k, i_{k + 1} } \, \map {a_{k + 1} } {i_{k + 1}, i_{k + 2} }$


Induction Step
This is our induction step:

Let $\ds \mathbf C_1 := \prod_{j \mathop = 1}^k \mathbf A_j$.
Let $\ds \mathbf C := \prod_{j \mathop = 1}^{k + 1} \mathbf A_j = \mathbf C_1 \mathbf A_{k + 1}$.















\(\ds \map c {i_1, i_{k + 2} }\)

\(=\)







\(\ds \sum_{i_{k + 1} \mathop = 1}^{d_{k + 1} } \map {c_1} {i_1, i_{k + 1} } \map {a_{k + 1} } {i_{k + 1}, i_{k + 2} }\)





Definition of Matrix Product














\(\ds \)

\(=\)







\(\ds \sum_{i_{k + 1} \mathop = 1}^{d_{k + 1} } \paren {\sum_{i_k \mathop = 1}^{d_k} \dotsm \sum_{i_3 \mathop = 1}^{d_3} \sum_{i_2 \mathop = 1}^{d_2} \map {a_1} {i_1, i_2} \map {a_2} {i_2, i_3} \dotsm \map {a_k} {i_k, i_{k + 1} } } \map {a_{k + 1} } {i_{k + 1}, i_{k + 2} }\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \sum_{i_{k + 1} \mathop = 1}^{d_{k + 1} } \sum_{i_k \mathop = 1}^{d_k} \dotsm \sum_{i_3 \mathop = 1}^{d_3} \sum_{i_2 \mathop = 1}^{d_2} \map {a_1} {i_1, i_2} \map {a_2} {i_2, i_3} \dotsm \map {a_k} {i_k, i_{k + 1} } \map {a_{k + 1} } {i_{k + 1}, i_{k + 2} }\)





Associative Law of Addition



So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore for all $n \in \N_{>0}$:

$\ds \map c {i_1, i_{n + 1} } = \sum_{i_n \mathop = 1}^{d_n} \dotsm \sum_{i_3 \mathop = 1}^{d_3} \sum_{i_2 \mathop = 1}^{d_2} \map {a_1} {i_1, i_2} \map {a_2} {i_2, i_3} \dotsm \map {a_{n - 1} } {i_{n - 1}, i_n} \map {a_n} {i_n, i_{n + 1} }$
$\blacksquare$





