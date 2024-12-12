# 

Source: https://proofwiki.org/wiki/Eigenvectors_Corresponding_to_Distinct_Eigenvalues_of_Linear_Operator_are_Linearly_Independent



Theorem
Let $K$ be a field. 
Let $X$ be a vector space over $K$. 
Let $T : X \to X$ be a linear operator.
Let $\lambda_1, \lambda_2, \ldots, \lambda_n \in K$ be distinct eigenvalues of $T$.
Let $x_1, x_2, \ldots, x_n$ be eigenvectors corresponding to $\lambda_1, \lambda_2, \ldots, \lambda_n$. 

Then $\set {x_1, \ldots, x_n}$ is a linearly independent set.


Proof
Proof by induction:
Let $\map P n$ be the proposition:

for any $n$ eigenvalues $\lambda_1, \lambda_2, \ldots, \lambda_n \in K$ and eigenvectors $x_1, x_2, \ldots, x_n$ corresponding to $\lambda_1, \lambda_2, \ldots, \lambda_n$, we have that:
$\set {x_1, \ldots, x_n}$ is a linearly independent set.


Basis for the Induction
Take $n = 1$.
From Singleton is Linearly Independent, $\set {x_1}$ is linearly independent set.
$\Box$

Induction Hypothesis
This is our induction hypothesis:

for any $n$ eigenvalues $\lambda_1, \lambda_2, \ldots, \lambda_n \in K$ and eigenvectors $x_1, x_2, \ldots, x_n$ corresponding to $\lambda_1, \lambda_2, \ldots, \lambda_n$, we have that:
$\set {x_1, \ldots, x_n}$ is a linearly independent set.
We need to show: 

for any $n + 1$ eigenvalues $\lambda_1, \lambda_2, \ldots, \lambda_{n + 1} \in K$ and eigenvectors $x_1, x_2, \ldots, x_{n + 1}$ corresponding to $\lambda_1, \lambda_2, \ldots, \lambda_{n + 1}$, we have that:
$\set {x_1, \ldots, x_{n + 1} }$ is a linearly independent set.
$\Box$

Induction Step
Suppose that $\lambda_{n + 1}$ is an eigenvalue distinct from $\lambda_1, \lambda_2, \ldots, \lambda$ and an eigenvector $x_{n + 1}$ corresponding to $\lambda_{n + 1}$.
Suppose that: 

$\ds \sum_{k \mathop = 1}^{n + 1} \alpha_k x_k = \mathbf 0_X$
for $\alpha_1, \ldots, \alpha_{n + 1}$.
Applying $T$ to the above equation we have: 

$\ds \sum_{k \mathop = 1}^{n + 1} \lambda_k \alpha_k x_k = \mathbf 0_X$
from the linearity of $T$. 
Instead multiplying the previous equation by $\lambda_{n + 1}$, we have: 

$\ds \sum_{k \mathop = 1}^{n + 1} \lambda_{n + 1} \alpha_k x_k = \mathbf 0_X$
So, we have:

$\ds \sum_{k \mathop = 1}^{n + 1} \lambda_{n + 1} \alpha_k x_k = \sum_{k \mathop = 1}^{n + 1} \lambda_k \alpha_k x_k$
so that:

$\ds \lambda_{n + 1} \alpha_{n + 1} x_{n + 1} + \lambda_{n + 1} \sum_{k \mathop = 1}^n \alpha_k x_k = \lambda_{n + 1} \alpha_{n + 1} x_{n + 1} + \sum_{k \mathop = 1}^n \lambda_k \alpha_k x_k$
So, we have: 

$\ds \sum_{k \mathop = 1}^n \alpha_k \paren {\lambda_{n + 1} - \lambda_k} x_k = \mathbf 0_X$
From the induction hypothesis, we have that $x_1, \ldots, x_n$ are linearly independent, so we have: 

$\alpha_k \paren {\lambda_{n + 1} - \lambda_k} = 0$
for each $1 \le k \le n$. 
Since $\lambda_{n + 1} - \lambda_k \ne 0$, we must have $\alpha_k = 0$ for each $1 \le k \le n$. 
So we have: 

$\alpha_{n + 1} x_{n + 1} = \mathbf 0_X$
Since $x_{n + 1} \ne 0$ by definition, we have $\alpha_{n + 1} = 0$.
So if: 

$\ds \sum_{k \mathop = 1}^{n + 1} \alpha_k x_k = \mathbf 0_X$
then $\alpha_1 = \alpha_2 = \cdots = \alpha_{n + 1} = 0$.
So $x_1, \ldots, x_{n + 1}$ are linearly independent.
$\blacksquare$


Sources
2020: James C. Robinson: Introduction to Functional Analysis ... (previous) ... (next) $14.1$: The Resolvent and Spectrum




