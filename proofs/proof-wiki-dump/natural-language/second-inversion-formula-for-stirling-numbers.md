# 

Source: https://proofwiki.org/wiki/Second_Inversion_Formula_for_Stirling_Numbers



Theorem
For all $m, n \in \Z_{\ge 0}$:

$\ds \sum_k {n \brace k} {k \brack m} \paren {-1}^{n - k} = \delta_{m n}$
where:

$\ds {n \brace k}$ denotes a Stirling number of the second kind
$\ds {k \brack m}$ denotes an unsigned Stirling number of the first kind
$\delta_{m n}$ denotes the Kronecker delta.


Proof
The proof proceeds by induction.
For all $n \in \Z_{\ge 0}$, let $\map P n$ be the proposition:

$\ds \forall m \in \Z_{\ge 0}: \sum_k {n \brace k} {k \brack m} \paren {-1}^{n - k} = \delta_{m n}$


Basis for the Induction
$\map P 0$ is the case:














\(\ds \sum_k {0 \brace k} {k \brack m} \paren {-1}^{0 - k}\)

\(=\)







\(\ds \sum_k \delta_{k 0} {k \brack m} \paren {-1}^{-k}\)





Definition of Stirling Numbers of the Second Kind














\(\ds \)

\(=\)







\(\ds {0 \brack m}\)





as all other terms vanish by $\delta_{k 0}$














\(\ds \)

\(=\)







\(\ds \delta_{m 0}\)





Definition of Unsigned Stirling Numbers of the First Kind



Thus $\map P 0$ has been shown to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that, if $\map P r$ is true for all $r \ge 0$, then it logically follows that $\map P {r + 1}$ is true.

So this is the induction hypothesis:

$\ds \forall m \in \Z_{\ge 0}: \sum_k {r \brace k} {k \brack m} \paren {-1}^{r - k} = \delta_{m r}$

from which it is to be shown that:

$\ds \forall m \in \Z_{\ge 0}: \sum_k {r + 1 \brace k} {k \brack m} \paren {-1}^{r + 1 - k} = \delta_{m \paren {r + 1} }$


Induction Step
This is the induction step:















\(\ds \)

\(\)







\(\ds \sum_k {r + 1 \brace k} {k \brack m} \paren {-1}^{r + 1 - k}\)




















\(\ds \)

\(=\)







\(\ds \sum_k \paren {k {r \brace k} + {r \brace k - 1} } {k \brack m} \paren {-1}^{r + 1 - k}\)





Definition of Stirling Numbers of the Second Kind














\(\ds \)

\(=\)







\(\ds \sum_k k {r \brace k} {k \brack m} \paren {-1}^{r + 1 - k} + \sum_k {r \brace k - 1} {k \brack m} \paren {-1}^{r + 1 - k}\)




















\(\ds \)

\(=\)







\(\ds \sum_k k {r \brace k} \frac 1 k \paren { {k + 1 \brack m} - {k \brack m - 1} } \paren {-1}^{r + 1 - k}\)





Definition of Unsigned Stirling Numbers of the First Kind














\(\ds \)

\(\)







\(\ds + \sum_k {r \brace k - 1} {k \brack m} \paren {-1}^{r + 1 - k}\)




















\(\ds \)

\(=\)







\(\ds \sum_k {r \brace k} {k + 1 \brack m} \paren {-1}^{r + 1 - k} - \sum_k {r \brace k} {k \brack m - 1} \paren {-1}^{r + 1 - k}\)




















\(\ds \)

\(\)







\(\ds + \sum_k {r \brace k - 1} {k \brack m} \paren {-1}^{r + 1 - k}\)




















\(\ds \)

\(=\)







\(\ds \sum_k {r \brace k} {k + 1 \brack m} \paren {-1}^{r + 1 - k} - \sum_k {r \brace k} {k \brack m - 1} \paren {-1}^{r + 1 - k}\)




















\(\ds \)

\(\)







\(\ds + \sum_k {r \brace k} {k + 1 \brack m} \paren {-1}^{r + 1 - k + 1}\)





Translation of Index Variable of Summation














\(\ds \)

\(=\)







\(\ds \sum_k {r \brace k} {k + 1 \brack m} \paren {-1}^{r + 1 - k} - \sum_k {r \brace k} {k \brack m - 1} \paren {-1}^{r + 1 - k}\)




















\(\ds \)

\(\)







\(\ds -\sum_k {r \brace k} {k + 1 \brack m} \paren {-1}^{r + 1 - k}\)




















\(\ds \)

\(=\)







\(\ds \sum_k {r \brace k} {k \brack m - 1} \paren {-1}^{r - k}\)





simplifying














\(\ds \)

\(=\)







\(\ds \delta_{\paren {m - 1} r}\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \delta_{m \paren {r + 1} }\)





Definition of Kronecker Delta




So $\map P r \implies \map P {r + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\ds \forall m, n \in \Z_{\ge 0}: \sum_k {n \brace k} {k \brack m} \paren {-1}^{n - k} = \delta_{m n}$
$\blacksquare$


Also see
First Inversion Formula for Stirling Numbers


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.6$: Binomial Coefficients: $(47)$




