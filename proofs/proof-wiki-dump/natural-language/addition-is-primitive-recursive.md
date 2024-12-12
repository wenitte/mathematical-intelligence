# 

Source: https://proofwiki.org/wiki/Addition_is_Primitive_Recursive

Theorem
The function $\Add: \N^2 \to \N$, defined as:

$\map \Add {n, m} = n + m$
is primitive recursive‎.


Proof
We observe that:

$\map \Add {n, 0} = n + 0 = n$
and that

$\map \Add {n, m + 1} = n + \paren {m + 1} = \paren {n + m} + 1 = \map \Succ {\map \Add {n, m} }$
where $\Succ$ is the successor function, which is a basic primitive recursive‎ function.
We are to show that $\Add$ is defined by primitive recursion.
So we need to find primitive recursive‎ functions $f: \N \to \N$ and $g: \N^3 \to \N$ such that:

$\map \Add {n, m} = \begin{cases}
\map f n & : m = 0 \\
\map g {n, m - 1, \map \Add {n, m - 1} } & : m > 0
\end{cases}$
Because $\map \Add {n, 0} = n$, we can see that:

$\map f n = n$.
That is, $f$ is the basic primitive recursive‎ function $\pr_1^1: \N \to \N$.
Because $\map \Add {n, m + 1} = \map \Succ {\map \Add {n, m} }$, we can see that $g$ needs to be a function which maps the ordered triple $\tuple {n, m, \map \Add {n, m} }$ to $\map \Succ {\map \Add {n, m} }$.
A suitable function is:

$g: \N^3 \to \N$ where $\map g {n_1, n_2, n_3} = \map \Succ {n_3}$
because then:

$\map g {n, m, \map \Add {n, m} } = \map \Succ {\map \Add {n, m} }$

It remains to be shown that $g$ is primitive recursive‎.
This is achieved by using the projection function:

$\map g {n_1, n_2, n_3} = \map \Succ {\map {\pr_3^3} {n_1, n_2, n_3} }$
Thus $g$ is obtained by substitution from the basic primitive recursive‎ functions $\Succ$ and $\pr_3^3$ and so is primitive recursive‎.

So $\Add$ is obtained by primitive recursion from the primitive recursive functions‎ $\pr_1^1$ and $g$, and so is primitive recursive‎.
$\blacksquare$





