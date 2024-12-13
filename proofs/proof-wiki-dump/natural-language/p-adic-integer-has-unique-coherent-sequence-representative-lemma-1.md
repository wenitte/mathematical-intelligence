# 

Source: https://proofwiki.org/wiki/P-adic_Integer_has_Unique_Coherent_Sequence_Representative/Lemma_1

Theorem
Let $p$ be a prime number.
Let $\norm {\,\cdot\,}_p$ be the $p$-adic norm on the rational numbers $\Q$.
Let $\sequence {\beta_n}$ be a Cauchy sequence in $\struct {\Q, \norm {\,\cdot\,}_p}$ such that:

$\forall j \in \N : \exists \mathop {\map N j} \ge j : \forall m, n \in \N: m, n \ge \map N j: \norm {\beta_n - \beta_m} \le p^{-\paren {j + 1} }$

Then:

$\forall j \in \N: \norm {\beta_{\map N {j + 1} } - \beta_{\map N j} }_p \le p^{-\paren {j + 1} }$


Proof
Let $j \in N$
Suppose $\map N {j + 1} \ge \map N j$
By definition:

$\norm{\beta_{\map N {j + 1} } - \beta_{\map N j} }_p \le p^{-\paren {j + 1} }$
Now suppose $\map N j \ge \map N {j + 1}$
Then:














\(\ds \norm {\beta_{\map N {j + 1} } - \beta_{\map N j} }_p\)

\(\le\)







\(\ds p^{-\paren {j + 2} }\)




















\(\ds \)

\(<\)







\(\ds p^{-\paren {j + 1} }\)





Power Function on Integer between Zero and One is Strictly Decreasing



In either case:

$\norm {\beta_{\map N {j + 1} } - \beta_{\map N j} }_p \le p^{-\paren{j + 1} }$
Since $j$ was arbitrary, then:

$\forall j \in \N: \norm {\beta_{\map N {j + 1} } - \beta_{\map N j} }_p \le p^{-\paren {j + 1} }$
$\blacksquare$





