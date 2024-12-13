# 

Source: https://proofwiki.org/wiki/Linearly_Dependent_Sequence_of_Vector_Space



Theorem
Let $\struct {G, +}$ be a group whose identity is $\mathbf 0$.
Let $\struct {G, +, \circ}_K$ be a $K$-vector space.
Let $\sequence {a_k}_{1 \mathop \le k \mathop \le n}$ be a sequence of distinct non-zero vectors of $G$.

Then $\sequence {a_k}_{1 \mathop \le k \mathop \le n}$ is linearly dependent if and only if:

$\exists p \in \closedint 2 n: a_p$ is a linear combination of $\sequence {a_k}_{1 \mathop \le k \mathop \le p - 1}$


Proof
Necessary Condition
Suppose $\sequence {a_k}_{1 \mathop \le k \mathop \le n}$ is linearly dependent.
We have by hypothesis that the set of all integers $r \in \closedint 1 n$ such that $\sequence {a_k}_{1 \mathop \le k \mathop \le r}$ is linearly dependent is not empty.
Let $p$ be its smallest element.
Then from Singleton is Linearly Independent‎, $p \ge 2$, as $a_1 \ne \mathbf 0$ and hence $\set {a_1}$ is linearly independent.
Also, there exist scalars $\lambda_1, \ldots, \lambda_p$, not all of which are zero, such that $\ds \sum_{k \mathop = 1}^p \lambda_k \circ a_k = \mathbf 0$.

Aiming for a contradiction, suppose $\lambda_p = 0$.
Then not all of $\lambda_1, \ldots, \lambda_{p-1}$ can be zero.
Then $\sequence {a_k}_{1 \mathop \le k \mathop \le p-1}$ is linearly dependent.
That contradicts the definition of $p$, so $\lambda_p \ne 0$.
So, because:

$\ds \lambda_p \circ a_p = - \sum_{k \mathop = 1}^{p - 1} \lambda_k \circ a_k$
we must have:

$\ds a_p = \sum_{k \mathop = 1}^{p - 1} \paren {-{\lambda_p}^{-1} \lambda_k} \circ a_k$
and thus $a_p$ is a linear combination of $\sequence {a_k}_{1 \mathop \le k \mathop \le p - 1}$.
$\Box$


Sufficient Condition
Now suppose that $a_p$ is a linear combination of $\sequence {a_k}_{1 \mathop \le k \mathop \le p - 1}$.
Then:

$\ds a_p = \sum_{k \mathop = 1}^{p - 1} \mu_k \circ a_k$
So we can assign values to $\lambda_k$ as follows:

$\forall k \in \closedint 1 n: \lambda_k = \begin{cases}
\mu_k & : k < p \\
-1 & : k = p \\
0 & : k > p \\
\end{cases}$
Then:

$\ds \sum_{k \mathop = 1}^n \lambda_k \circ a_k = \mathbf 0$
Hence the result.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {V}$: Vector Spaces: $\S 27$. Subspaces and Bases: Theorem $27.6$
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $7$: Vector Spaces: $\S 33$. Definition of a Basis
For a video presentation of the contents of this page, visit the Khan Academy.




