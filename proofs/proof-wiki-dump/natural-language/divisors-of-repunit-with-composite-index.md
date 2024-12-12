# 

Source: https://proofwiki.org/wiki/Divisors_of_Repunit_with_Composite_Index


This page has been identified as a candidate for refactoring of basic complexity.In particular: Separate the example into its own page as per standard styleUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
Theorem
Let $R_n$ be a repunit number with $n$ digits.
Let $n$ be composite such that $n = r s$ where $1 < r < n$ and $1 < s < n$.

Then $R_r$ and $R_s$ are both divisors of $R_n$.


Proof
Let $n = r s$.
Then:














\(\ds R_n\)

\(=\)







\(\ds \sum_{k \mathop = 0}^{n - 1} 10^k\)





Basis Representation Theorem














\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 0}^{s - 1} \paren {\sum_{k \mathop = 0}^{r - 1} 10^k} 10^{r j}\)




















\(\ds \)

\(=\)







\(\ds \paren {\sum_{k \mathop = 0}^{r - 1} 10^k} \paren {\sum_{j \mathop = 0}^{s - 1}  10^{r j} }\)




















\(\ds \)

\(=\)







\(\ds R_r \paren {\sum_{j \mathop = 0}^{s - 1}  10^{r j} }\)









Similarly:

$R_n = R_s \paren {\ds \sum_{j \mathop = 0}^{r - 1}  10^{s j} }$
$\blacksquare$

Thus, for example:














\(\ds R_6 = 111 \, 111\)

\(=\)







\(\ds 11 \times 10 \, 101\)




















\(\ds \)

\(=\)







\(\ds 111 \times 1001\)




















\(\ds R_{10} = 1 \, 111 \, 111 \, 111\)

\(=\)







\(\ds 11 \times 101 \, 010 \, 101\)




















\(\ds \)

\(=\)







\(\ds 11111 \times 100 \, 001\)









The pattern is clear.





