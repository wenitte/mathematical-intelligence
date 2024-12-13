# 

Source: https://proofwiki.org/wiki/Jensen%27s_Inequality_(Real_Analysis)/Corollary

Corollary to Jensen's Inequality: Real Analysis
Let $I$ be a real interval.
Let $\phi: I \to \R$ be a concave function.
Let $x_1, x_2, \ldots, x_n \in I$.
Let $\lambda_1, \lambda_2, \ldots, \lambda_n \ge 0$ be real numbers, at least one of which is non-zero.

Then:

$\ds \map \phi {\frac {\sum_{k \mathop = 1}^n \lambda_k x_k} {\sum_{k \mathop = 1}^n \lambda_k} } \ge \frac {\sum_{k \mathop = 1}^n \lambda_k \map \phi {x_k} } {\sum_{k \mathop = 1}^n \lambda_k}$

For $\phi$ strictly concave, equality holds if and only if $x_1 = x_2 = \cdots = x_n$.


Proof
By Real Function is Concave iff its Negative is Convex, $-\phi: I \to \R$ is a convex function.
Therefore, we can apply Jensen's Inequality: Real Analysis with $-\phi$ to obtain:

$\ds -\map \phi {\frac {\sum_{k \mathop = 1}^n \lambda_k x_k} {\sum_{k \mathop = 1}^n \lambda_k} } \le -\frac {\sum_{k \mathop = 1}^n \lambda_k \map \phi {x_k} } {\sum_{k \mathop = 1}^n \lambda_k}$
with equality for $-\phi$ strictly convex if and only if $x_1 = x_2 = \cdots = x_n$.
That is, for $\phi$ strictly concave, equality holds if and only if $x_1 = x_2 = \cdots = x_n$.
With that, we have established the equality case.
Multiplying through $-1$ in our inequality gives: 

$\ds \map \phi {\frac {\sum_{k \mathop = 1}^n \lambda_k x_k} {\sum_{k \mathop = 1}^n \lambda_k} } \ge \frac {\sum_{k \mathop = 1}^n \lambda_k \map \phi {x_k} } {\sum_{k \mathop = 1}^n \lambda_k}$
as required.
$\blacksquare$





