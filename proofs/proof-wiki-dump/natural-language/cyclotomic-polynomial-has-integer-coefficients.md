# 

Source: https://proofwiki.org/wiki/Cyclotomic_Polynomial_has_Integer_Coefficients



Theorem
Let $n \in \Z_{>0}$ be a positive integer.
Then the $n$th cyclotomic polynomial $\map {\Phi_n} x$ has integer coefficients.


Proof
The proof proceeds by strong induction on $n$.
For all $n \in \Z_{>0}$, let $\map P n$ be the proposition:

$\map {\Phi_n} x$ has integer coefficients


Basis for the Induction
By First Cyclotomic Polynomial:

$\map {\Phi_1} x = x - 1$
Thus $\map P 1$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that if $\map P j$ is true, for all $j$ such that $0 \le j \le k$, then it logically follows that $\map P {k + 1}$ is true.

This is the induction hypothesis:

For all $j$ such that $0 \le j \le k$, $\map {\Phi_j} x$ has integer coefficients

from which it is to be shown that:

$\map {\Phi_{k + 1} } x$ has integer coefficients


Induction Step
This is the induction step:
Suppose $\map P j$ holds for all $j \le k$.
From Product of Cyclotomic Polynomials:

$\ds \prod_{d \mathop \divides {k + 1} } \map {\Phi_d} x = x^{k + 1} - 1$
That is:

$\ds \map {\Phi_{k + 1} } x \times \prod_{\substack {d \mathop \divides {k + 1} \\ d \mathop \ne {k + 1} } } \map {\Phi_d} x = x^{k + 1} - 1$
By the induction hypothesis:

$\ds \prod_{\substack {d \mathop \divides {k + 1} \\ d \mathop \ne {k + 1} } } \map {\Phi_d} x$
is a monic polynomial with integer coefficients, and thus primitive.

From Content of Polynomial is Multiplicative it follows that $\map {\Phi_{k + 1} } x$ has integer coefficients.


This article, or a section of it, needs explaining.In particular: Determine the exact nature of what the content of the polynomial is in this contextYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
$\blacksquare$





