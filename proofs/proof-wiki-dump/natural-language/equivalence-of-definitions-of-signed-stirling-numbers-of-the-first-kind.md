# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Signed_Stirling_Numbers_of_the_First_Kind



Theorem
The following definitions of the concept of Signed Stirling Numbers of the First Kind are equivalent:

Definition 1
Signed Stirling numbers of the first kind are defined recursively by:

$\map s {n, k} := \begin{cases}
\delta_{n k} & : k = 0 \text{ or } n = 0 \\
\map s {n - 1, k - 1} - \paren {n - 1} \map s {n - 1, k} & : \text{otherwise} \\
\end{cases}$

Definition 2
Signed Stirling numbers of the first kind are defined as the polynomial coefficients $\map s {n, k}$ which satisfy the equation:

$\ds x^{\underline n} = \sum_k \map s {n, k} x^k$
where $x^{\underline n}$ denotes the $n$th falling factorial of $x$.

in the sense that the coefficients of the powers in the summand are uniquely defined by the given recurrence relation.


Proof
The proof proceeds by induction.
For all $n \in \N_{> 0}$, let $\map P n$ be the proposition:

the coefficients of the powers in the expression $\ds x^{\underline n} = \sum_k \map s {n, k} x^k$ are uniquely defined by $\map s {n, k} := \map s {n - 1, k - 1} - \paren {n - 1} \map s {n - 1, k}$
where $\map s {n, k} = \delta_{n k}$ where $k = 0$ or $n = 0$.

First the case where $n = 0$ is attended to.
From Signed Stirling Number of the First Kind of 0 we have:

$\map s {0, k} = \delta_{0 k}$

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







\(\ds \sum_k \delta_{1 k} x^k\)





Definition of Kronecker Delta




Then:














\(\ds \map s {1, k}\)

\(=\)







\(\ds \map s {0, k - 1} - 0 \times \map s {0, k}\)





by hypothesis














\(\ds \)

\(=\)







\(\ds \delta_{0 \paren {k - 1} }\)





Signed Stirling Number of the First Kind of 0














\(\ds \)

\(=\)







\(\ds \delta_{1 k}\)










Thus, in the expression:

$\ds x^{\underline k} = \sum_k \map s {1, k} x^1$
we have:

$\map s {1, k} = 1$
and for all $k \in \Z$ where $k \ne 1$:

$\map s {1, k} = 0$
That is:

$\map s {1, k} = \delta_{1 k}$

Thus $\map P 1$ is seen to hold.
This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that, if $\map P r$ is true, where $r \ge 1$, then it logically follows that $\map P {r + 1}$ is true.

So this is the induction hypothesis:

The coefficients in the expression $\ds x^{\underline r} = \sum_k \map s {r, k} x^k$ are uniquely defined by $\map s {r, k} = \map s {r - 1, k - 1} + \paren {r - 1} \map s {r - 1, k}$

from which it is to be shown that:

The coefficients in the expression $\ds x^{\underline {r + 1} } = \sum_k \map s {r + 1, k} x^k$ are uniquely defined by $\map s {r + 1, k} = \map s {r, k - 1} + r \map s {r, k}$


Induction Step
This is the induction step:














\(\ds x^{\underline {r + 1} }\)

\(=\)







\(\ds \paren {x - r} x^{\underline r}\)





Definition of Falling Factorial














\(\ds \)

\(=\)







\(\ds \paren {x - r} \sum_k \map s {r, k} x^k\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds x \sum_k \map s {r, k} x^k - r \sum_k \map s {r, k} x^k\)




















\(\ds \)

\(=\)







\(\ds \sum_k \map s {r, k} x x^k + \sum_k \map s {r, k} r x^k\)





$x$ and $r$ are constant in this context














\(\ds \)

\(=\)







\(\ds \sum_k \map s {r, k} x^{k + 1} + \sum_k  r \map s {r, k} x^k\)




















\(\ds \)

\(=\)







\(\ds \sum_k \map s {r, k - 1} x^k + \sum_k r \map s {r, k} x^k\)





Translation of Index Variable of Summation














\(\ds \)

\(=\)







\(\ds \sum_k \paren {\map s {r, k - 1} + r \map s {r, k} } x^k\)





Sum of Summations equals Summation of Sum



Thus the coefficients of the falling factorial powers are defined by the recurrence relation:

$\map s {r + 1, k} = \map s {r, k - 1} + r \map s {r,k}$
as required.

So $\map P r \implies \map P {r + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

for all $n \in \Z_{\ge 0}$, the coefficients of the powers in the expression $\ds x^{\underline n} = \sum_k \map s {n, k} x^k$ are uniquely defined by:
$\map s {n, k} = \map s {n - 1, k - 1} + \paren {n - 1} \map s {n - 1, k}$
where $\map s {n, k} = \delta_{n k}$ when $k = 0$ or $n = 0$.
$\blacksquare$


Also see
Equivalence of Definitions of Unsigned Stirling Numbers of the First Kind
Equivalence of Definitions of Stirling Numbers of the Second Kind




