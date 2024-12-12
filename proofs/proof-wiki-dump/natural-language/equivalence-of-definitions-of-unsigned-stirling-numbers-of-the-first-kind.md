# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Unsigned_Stirling_Numbers_of_the_First_Kind



Theorem
The following definitions of the concept of Unsigned Stirling Numbers of the First Kind are equivalent:

Definition 1
Unsigned Stirling numbers of the first kind are defined recursively by:

$\ds {n \brack k} := \begin{cases}
\delta_{n k} & : k = 0 \text { or } n = 0 \\
& \\
\ds {n - 1 \brack k - 1} + \paren {n - 1} {n - 1 \brack k} & : \text{otherwise} \\
\end{cases}$

Definition 2
Unsigned Stirling numbers of the first kind are defined as the polynomial coefficients $\ds {n \brack k}$ which satisfy the equation:

$\ds x^{\underline n} = \sum_k \paren {-1}^{n - k} {n \brack k} x^k$
where $x^{\underline n}$ denotes the $n$th falling factorial of $x$.

in the sense that the coefficients of the powers in the summand are uniquely defined by the given recurrence relation.


Proof
The proof proceeds by induction.
For all $n \in \N_{> 0}$, let $\map P n$ be the proposition:

the coefficients of the powers in the expression $\ds x^{\underline n} = \sum_k \paren {-1}^{n - k} {n \brack k} x^k$ are uniquely defined by $\ds {n \brack k} = {n - 1 \brack k - 1} + \paren {n - 1} {n - 1 \brack k}$
where $\ds {n \brack k} = \delta_{n k}$ where $k = 0$ or $n = 0$.

First the case where $n = 0$ is attended to.
From Unsigned Stirling Number of the First Kind of 0 we have:

$\ds {0 \brack k} = \delta_{0 k}$

Hence the result holds for $n = 0$.


Basis for the Induction
$\map P 1$ is the case:
We have:














\(\ds x^{\underline 1}\)

\(=\)







\(\ds x\)





Number to Power of One Falling is Itself














\(\ds \)

\(=\)







\(\ds x^1\)





Definition of Integer Power














\(\ds \)

\(=\)







\(\ds \sum_k \paren {-1}^{1 - k} \delta_{1 k} x^k\)





Definition of Kronecker Delta




Then:














\(\ds {1 \brack k}\)

\(=\)







\(\ds {0 \brack k - 1} + 0 {0 \brack k}\)





by hypothesis














\(\ds \)

\(=\)







\(\ds \delta_{0 \paren {k - 1} }\)




















\(\ds \)

\(=\)







\(\ds \delta_{1 k}\)










Thus, in the expression:

$\ds x^{\underline k} = \sum_k \paren {-1}^{1 - k} {1 \brack k} x^1$
we have:

$\ds \paren {-1}^{1 - k} {1 \brack k} = 1$
and for all $k \in \Z$ where $k \ne 1$:

$\ds \paren {-1}^{1 - k} {1 \brack k} = 0$
That is:

$\ds \paren {-1}^{1 - k} {1 \brack k} = \delta_{1 k}$

Thus $\map P 1$ is seen to hold.
This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that, if $\map P r$ is true, where $r \ge 1$, then it logically follows that $\map P {r + 1}$ is true.

So this is the induction hypothesis:

The coefficients in the expression $\ds x^{\underline r} = \sum_k \paren {-1}^{r - k} {r \brack k} x^k$ are uniquely defined by $\ds {r \brack k} = {r - 1 \brack k - 1} + \paren {r - 1} {r - 1 \brack k}$

from which it is to be shown that:

The coefficients in the expression $\ds x^{\underline {r + 1} } = \sum_k \paren {-1}^{r + 1 - k} {r + 1 \brack k} x^k$ are uniquely defined by $\ds {r + 1 \brack k} = {r \brack k - 1} + r {r \brack k}$


Induction Step
This is the induction step:














\(\ds x^{\underline {r + 1} }\)

\(=\)







\(\ds \paren {x - r} x^{\underline r}\)





Definition of Falling Factorial














\(\ds \)

\(=\)







\(\ds \paren {x - r} \sum_k \paren {-1}^{r - k} {r \brack k} x^k\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds x \sum_k \paren {-1}^{r - k} {r \brack k} x^k - r \sum_k \paren {-1}^{r - k} {r \brack k} x^k\)




















\(\ds \)

\(=\)







\(\ds \sum_k \paren {-1}^{r - k} {r \brack k} x x^k + \sum_k \paren {-1}^{r - k + 1} {r \brack k} r x^k\)





$x$ and $r$ are constant in this context














\(\ds \)

\(=\)







\(\ds \sum_k \paren {-1}^{r - k} {r \brack k} x^{k + 1} + \sum_k \paren {-1}^{r - k + 1} r {r \brack k} x^k\)




















\(\ds \)

\(=\)







\(\ds \sum_k \paren {-1})^{r - k + 1} {r \brack k - 1} x^k + \sum_k \paren {-1}^{r - k + 1} r {r \brack k} x^k\)





Translation of Index Variable of Summation














\(\ds \)

\(=\)







\(\ds \sum_k \paren {-1}^{r - k + 1} \paren { {r \brack k - 1} + r {r \brack k} } x^k\)





Sum of Summations equals Summation of Sum



Thus the coefficients of the falling factorial powers are defined by the recurrence relation:

$\ds {r + 1 \brack k} = {r \brack k - 1} + r {r \brack k}$
as required.

So $\map P r \implies \map P {r + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

for all $n \in \Z_{\ge 0}$, the coefficients of the powers in the expression $\ds x^{\underline n} = \sum_k \paren {-1}^{n - k} {n \brack k} x^k$ are uniquely defined by:
$\ds {n \brack k} = {n - 1 \brack k - 1} + \paren {n - 1} {n - 1 \brack k}$
where $\ds {n \brack k} = \delta_{n k}$ when $k = 0$ or $n = 0$.
$\blacksquare$


Also see
Equivalence of Definitions of Signed Stirling Numbers of the First Kind
Equivalence of Definitions of Stirling Numbers of the Second Kind


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.6$: Binomial Coefficients: Exercise $35$




