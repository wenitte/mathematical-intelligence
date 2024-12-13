# 

Source: https://proofwiki.org/wiki/Prime_Exponent_Function_is_Primitive_Recursive

Theorem
Let $n \in \N$ be a natural number.
Let $\tuple {n, j}: \N^2 \to \N$ be defined as:

$\tuple {n, j} = \paren n_j$
where $\paren n_j$ is the prime exponent function.
Then $\tuple {n, j}$ is primitive recursive.


Proof
Let $\map p j$ be the prime enumeration function.
For $n \ne 0$ and $j \ne 0$, we see that $\paren n_j$ is the largest value of $k$ for which $\map p j^k$ is a divisor of $n$.
Thus $\paren n_j$ is the smallest value of $k$ for which $\map p j^{k + 1}$ is not a divisor of $n$.
We note that if $r \ge n$ and $j \ne 0$, we have $\map p j^r \ge 2^r \ge 2^n > n$.
Thus $n$ is a (generous) upper bound of $\paren n_j$.

The condition that $\map p j^{k + 1}$ is not a divisor of $n$ can be expressed as:

$\map {\operatorname{div} } {n, \map p j^{k + 1} } = 0$
where:

$\operatorname{div}$ is primitive recursive
The Equality Relation is Primitive Recursive
$\map p j$ is primitive recursive
Exponentiation is Primitive Recursive
Addition is Primitive Recursive.
So we see that the relation:

$\map \RR {n, j, k} \iff \map {\operatorname{div} } {n, \map p j^{k + 1} } = 0$
is primitive recursive.
From Bounded Minimization is Primitive Recursive, we also see that:

$\paren n_j = \begin{cases}
\mu k \le n \map \RR {n, j, k} & : n \ne 0 \land j \ne 0 \\
0 & : \text{otherwise}
\end{cases}$
is primitive recursive.
The result follows.
$\blacksquare$





