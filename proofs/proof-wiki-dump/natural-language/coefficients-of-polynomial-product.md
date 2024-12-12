# 

Source: https://proofwiki.org/wiki/Coefficients_of_Polynomial_Product



Theorem
Let $J$ be a set.
Let $p_1, \ldots p_n$ be polynomial forms in the indeterminates $\set {X_j : j \in J}$ over a commutative ring $R$.
Suppose that for each $i$ with $1 \le i \le n$, we have, for appropriate $a_{i, k} \in R$:

$p_i = \ds \sum_{k \mathop \in Z} a_{i, k} X^k$
where $Z$ comprises the multiindices of natural numbers over $J$.

Then:

$\ds \prod_{i \mathop = 1}^n p_i = \sum_{k \mathop \in Z} b_k X^k$
where:

$\ds b_k := \sum_{k_1 + \cdots + k_n \mathop = k} \paren {\prod_{i \mathop = 1}^n a_{i, k_i} }$


Proof
We proceed by induction over $n \ge 1$.


Basis for the Induction
If $n = 1$ the result is trivially true.
This establishes the basis for the induction.


Induction Hypothesis
This is our induction hypothesis:

$\ds \prod_{i \mathop = 1}^{n - 1} p_i = \sum_{k \mathop \in Z} c_d X^k$
where:

$\ds c_d := \sum_{k_1 + \cdots + k_{n - 1} = d} \paren {\prod_{i \mathop = 1}^{n - 1} a_{i, k_i} }$
Now we need to show that the result is true for the product $\ds \prod_{i \mathop = 1}^n p_i$.


Induction Step
This is our induction step:
Let $b_k$ be the coefficient of $X^k$ in $\ds \prod_{i \mathop = 1}^n p_i$.
Then:














\(\ds b_k\)

\(=\)







\(\ds \sum_{d + k_n \mathop = k} c_d a_{n, k_n}\)





Definition of Multiplication of Polynomial Forms














\(\ds \)

\(=\)







\(\ds \sum_{d + k_n \mathop = k} \ \sum_{k_1 + \cdots + k_{n - 1} \mathop = d} \paren {\prod_{i \mathop = 1}^{n - 1} a_{i, k_i} } a_{n, k_n}\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \sum_{d + k_n \mathop = k} \ \sum_{k_1 + \cdots + k_{n - 1} \mathop = d} \paren {\prod_{i \mathop = 1}^n a_{i, k_i} }\)




















\(\ds \)

\(=\)







\(\ds \sum_{\substack {k_1 + \dotsb + k_{n - 1} \mathop = d \\ d + k_n \mathop = k} } \paren {\prod_{i \mathop = 1}^n a_{i, k_i} }\)




















\(\ds \)

\(=\)







\(\ds \sum_{k_1 + \cdots + k_n = k} \paren {\prod_{i \mathop = 1}^n a_{i, k_i} }\)









The result follows by induction.
$\blacksquare$





