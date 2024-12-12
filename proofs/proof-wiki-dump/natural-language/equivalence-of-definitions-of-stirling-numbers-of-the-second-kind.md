# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Stirling_Numbers_of_the_Second_Kind



Theorem
The following definitions of the concept of Stirling Numbers of the Second Kind are equivalent:

Definition 1
Stirling numbers of the second kind are defined recursively by:

$\ds {n \brace k} := \begin{cases}
\delta_{n k} & : k = 0 \text{ or } n = 0 \\
& \\
\ds {n - 1 \brace k - 1} + k {n - 1 \brace k} & : \text{otherwise} \\
\end{cases}$

Definition 2
Stirling numbers  of the second kind are defined as the coefficients $\ds {n \brace k}$ which satisfy the equation:

$\ds x^n = \sum_k {n \brace k} x^{\underline k}$
where $x^{\underline k}$ denotes the $k$th falling factorial of $x$.

in the sense that the coefficients of the falling factorial powers in the summand are uniquely defined by the given recurrence relation.


Proof
The proof proceeds by induction.
For all $n \in \N_{> 0}$, let $\map P n$ be the proposition:

the coefficients of the falling factorial powers  in the expression $\ds x^n = \sum_k {n \brace k} x^{\underline k}$ are uniquely defined by $\ds {n \brace k} =  {n - 1 \brace k - 1} + k {n - 1 \brace k}$
where $\ds {n \brace k} = \delta_{n k}$ where $k = 0$ or $n = 0$.

First the case where $n = 0$ is attended to.
We have:














\(\ds x^0\)

\(=\)







\(\ds 1\)





Definition of Integer Power














\(\ds \)

\(=\)







\(\ds x^{\underline 0}\)





Number to Power of Zero Falling is One














\(\ds \)

\(=\)







\(\ds \sum_k \delta_{0 k} x^{\underline k}\)





Definition of Kronecker Delta




Thus, in the expression:

$\ds x^0 = \sum_k {0 \brace k} x^{\underline k}$
we have:

$\ds {0 \brace 0} = 1$
and for all $k \in \Z_{>0}$:

$\ds {0 \brace k} = 0$
That is:

$\ds {0 \brace k} = \delta_{0 k}$

Hence the result holds for $n = 0$.


Basis for the Induction
$\map P 1$ is the case:
We have:














\(\ds x^1\)

\(=\)







\(\ds x\)





Definition of Integer Power














\(\ds \)

\(=\)







\(\ds x^{\underline 1}\)





Number to Power of One Falling is Itself














\(\ds \)

\(=\)







\(\ds \sum_k \delta_{1 k} x^{\underline k}\)





Definition of Kronecker Delta




Then:














\(\ds {1 \brace k}\)

\(=\)







\(\ds {0 \brace k - 1} + k {0 \brace k}\)





by hypothesis














\(\ds \)

\(=\)







\(\ds \delta_{0 \paren {k - 1} } + k \delta_{0 k}\)





by hypothesis














\(\ds \)

\(=\)







\(\ds \delta_{0 \paren {k - 1} }\)





as $k \delta_{0 k} = 0$ for all $k$














\(\ds \)

\(=\)







\(\ds \delta_{1 k}\)










Thus, in the expression:

$\ds x^1 = \sum_k {1 \brace k} x^{\underline k}$
we have:

$\ds {1 \brace 1} = 1$
and for all $k \in \Z$ where $k \ne 1$:

$\ds {1 \brace k} = 0$
That is:

$\ds {1 \brace k} = \delta_{1 k}$

Thus $\map P 1$ is seen to hold.
This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that, if $\map P r$ is true, where $r \ge 1$, then it logically follows that $\map P {r + 1}$ is true.

So this is the induction hypothesis:

The coefficients in the expression $\ds x^r = \sum_k {r \brace k} x^{\underline k}$ are uniquely defined by $\ds {r \brace k} = {r - 1 \brace k - 1} + k {r - 1 \brace k}$

from which it is to be shown that:

The coefficients in the expression $\ds x^{r + 1} = \sum_k {r + 1 \brace k} x^{\underline k}$ are uniquely defined by $\ds {r + 1 \brace k} = {r \brace k - 1} + k {r \brace k}$


Induction Step
This is the induction step:
Anticipating the expected result, we use $\ds {r + 1 \brace k}$ to denote the coefficients of the $k$th falling factorial power in the expansion of $x^{r + 1}$.

Thus:














\(\ds x^{r + 1}\)

\(=\)







\(\ds x x^r\)




















\(\ds \)

\(=\)







\(\ds x \paren {\sum_k {r \brace k} x^{\underline k} }\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \sum_k {r \brace k} x x^{\underline k}\)





$x$ is constant in this context














\(\ds \)

\(=\)







\(\ds \sum_k {r \brace k} \paren {x^{\underline {k + 1} } + k x^{\underline k} }\)





Product of Number by its Falling Factorial














\(\ds \)

\(=\)







\(\ds \sum_k {r \brace k} x^{\underline {k + 1} } + \sum_k {r \brace k} k x^{\underline k}\)





Sum of Summations equals Summation of Sum














\(\ds \)

\(=\)







\(\ds \sum_k {r \brace k - 1}  x^{\underline k} + \sum_k {r \brace k} k x^{\underline k}\)





Translation of Index Variable of Summation














\(\ds \)

\(=\)







\(\ds \sum_k \paren { {r \brace k - 1} x^{\underline k} + {r \brace k} k x^{\underline k} }\)





Sum of Summations equals Summation of Sum














\(\ds \)

\(=\)







\(\ds \sum_k \paren { {r \brace k - 1} + k {r \brace k} } x^{\underline k}\)









Thus the coefficients of the falling factorial powers are defined by the recurrence relation:

$\ds {r + 1 \brace k} = {r \brace k - 1} + k {r \brace k}$
as required.

So $\map P r \implies \map P {r + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

for all $n \in \Z_{\ge 0}$, the coefficients of the falling factorial powers  in the expression $\ds x^n = \sum_k {n \brace k} x^{\underline k}$ are uniquely defined by:
$\ds {n \brace k} =  {n - 1 \brace k - 1} + k {n - 1 \brace  k}$
where $\ds {n \brace k} = \delta_{n k}$ where $k = 0$ or $n = 0$.
$\blacksquare$


Also see
Equivalence of Definitions of Unsigned Stirling Numbers of the First Kind
Equivalence of Definitions of Signed Stirling Numbers of the First Kind


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.6$: Binomial Coefficients: Exercise $35$




