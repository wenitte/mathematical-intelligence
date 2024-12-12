# 

Source: https://proofwiki.org/wiki/Definite_Integral_of_Step_Function

Theorem
Let $\alpha, \beta \in \R$ be a real numbers such that $\alpha < \beta$.
Let $\map f x$ be a step function defined on the interval $\closedint \alpha \beta$:

$\map f x = \lambda_1 \chi_{\mathbb I_1} + \lambda_2 \chi_{\mathbb I_2} + \cdots + \lambda_n \chi_{\mathbb I_n}$
where:

$\lambda_1, \lambda_2, \ldots, \lambda_n$ are real constants
$\mathbb I_1, \mathbb I_2, \ldots, \mathbb I_n$ are intervals, where these intervals partition $\closedint \alpha \beta$
$\chi_{\mathbb I_1}, \chi_{\mathbb I_2}, \ldots, \chi_{\mathbb I_n}$ are characteristic functions of $\mathbb I_1, \mathbb I_2, \ldots, \mathbb I_n$.

Then the definite integral of $f$ {with respect to $x$ over $\closedint \alpha \beta$ is given by:

$\ds \int_\alpha^\beta \map f x \rd x = \sum_{k \mathop = 1}^n \lambda_k \paren {\beta_k - \alpha_k}$
where $\alpha_k, \beta_k$ are the endpoints of $\mathbb I_k$ for $1 \le k \le n$.


Proof
Each of the intervals $\mathbb I_k$ is such that $f \sqbrk {\mathbb I_k}$ is a constant function:

$\forall x \in \mathbb I_k: \map f x = \lambda_k$
Thus:














\(\ds \int_{\mathbb I_k} \map f x \rd x\)

\(=\)







\(\ds \int_{\alpha_k}^{\beta_k} \lambda_k \rd x\)




















\(\ds \)

\(=\)







\(\ds \lambda_k \paren {\beta_k - \alpha_k}\)





Definite Integral of Constant




From the corollary to Sum of Integrals on Adjacent Intervals for Integrable Functions:














\(\ds \int_\alpha^\beta \map f x \rd x\)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \int_{\mathbb I_k} \map f x \rd x\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \lambda_k \paren {\beta_k - \alpha_k}\)









$\blacksquare$





