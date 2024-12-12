# 

Source: https://proofwiki.org/wiki/First_Inversion_Formula_for_Stirling_Numbers



Theorem
For all $m, n \in \Z_{\ge 0}$:

$\ds \sum_k {n \brack k} {k \brace m} \paren {-1}^{n - k} = \delta_{m n}$
where:

$\ds {n \brack k}$ denotes an unsigned Stirling number of the first kind
$\ds {k \brace m}$ denotes a Stirling number of the second kind
$\delta_{m n}$ denotes the Kronecker delta.


Proof
The proof proceeds by strong induction.
For all $n \in \Z_{\ge 0}$, let $\map P n$ be the proposition:

$\ds \forall m \in \Z_{\ge 0}: \sum_k {n \brack k} {k \brace m} \paren {-1}^{n - k} = \delta_{m n}$


Basis for the Induction
$\map P 0$ is the case:














\(\ds \sum_k {0 \brack k} {k \brace m} \paren {-1}^{0 - k}\)

\(=\)







\(\ds \sum_k \delta_{k 0} {k \brace m} \paren {-1}^{-k}\)





Definition of Unsigned Stirling Numbers of the First Kind














\(\ds \)

\(=\)







\(\ds {0 \brace m}\)





as all other terms vanish by $\delta_{k 0}$














\(\ds \)

\(=\)







\(\ds \delta_{m 0}\)





Definition of Stirling Numbers of the Second Kind



Thus $\map P 0$ has been shown to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that, if $\map P j$ is true for all $j$ such $0 \le j \le r$, then it logically follows that $\map P {r + 1}$ is true.

So this is the induction hypothesis:

$\ds \forall j: 0 \le j \le r: \forall m \in \Z_{\ge 0}: \sum_k {j \brack k} {k \brace m} \paren {-1}^{j - k} = \delta_{m j}$

from which it is to be shown that:

$\ds \forall m \in \Z_{\ge 0}: \sum_k {r + 1 \brack k} {k \brace m} \paren {-1}^{r + 1 - k} = \delta_{m \paren {r + 1} }$


Induction Step
This is the induction step:















\(\ds \)

\(\)







\(\ds \sum_k {r + 1 \brack k} {k \brace m} \paren {-1}^{r + 1 - k}\)




















\(\ds \)

\(=\)







\(\ds \sum_k \paren { {r \brack k - 1} + r {r \brack k} } {k \brace m} \paren {-1}^{r + 1 - k}\)





Definition of Unsigned Stirling Numbers of the First Kind














\(\ds \)

\(=\)







\(\ds \sum_k {r \brack k - 1} {k \brace m} \paren {-1}^{r + 1 - k} - r \sum_k {r \brack k} {k \brace m} \paren {-1}^{r - k}\)




















\(\ds \)

\(=\)







\(\ds \sum_k {r \brack k - 1} {k \brace m} \paren {-1}^{r + 1 - k} - r \delta_{m r}\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \sum_k {r \brack k - 1} \paren { {k - 1 \brace m - 1} + m {k - 1 \brace m} } \paren {-1}^{r + 1 - k} - r \delta_{r m}\)





Definition of Stirling Numbers of the Second Kind














\(\ds \)

\(=\)







\(\ds \sum_k {r \brack k - 1} {k - 1 \brace m - 1} \paren {-1}^{r - \paren {k - 1} } + m \sum_k {r \brack k - 1} {k - 1 \brace m} \paren {-1}^{r - \paren {k - 1} } - r \delta_{r m}\)




















\(\ds \)

\(=\)







\(\ds \delta_{r \paren {m - 1} } + m \delta_{r m} - r \delta_{r m}\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \delta_{m \paren {r + 1} } + \paren {m - r} \delta_{r m}\)




















\(\ds \)

\(=\)







\(\ds \delta_{m \paren {r + 1} }\)





as $\paren {m - r} \delta_{r m}$ vanishes for all $r$ and $m$



So $\map P r \implies \map P {r + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\ds \forall m, n \in \Z_{\ge 0}: \sum_k {n \brack k} {k \brace m} \paren {-1}^{n - k} = \delta_{m n}$
$\blacksquare$


Also see
Second Inversion Formula for Stirling Numbers


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.6$: Binomial Coefficients: $(47)$




