# 

Source: https://proofwiki.org/wiki/Multiplication_is_Primitive_Recursive

Theorem
The function $\operatorname{mult}: \N^2 \to \N$, defined as:

$\map \Mult {n, m} = n \times m$
is primitive recursive‎.


Proof
We observe that:

$\map \Mult {n, 0} = n \times 0 = 0$
and that

$\map \Mult {n, m + 1} = n \times \paren {m + 1} = \paren {n \times m} + n = \map \Add {\map \Mult {n, m}, n}$.

We are to show that $\Mult$ is obtained by primitive recursion from known primitive recursive‎ functions.
First we note that:

$\map \Mult {n, 0} = 0 = \map \Zero n$
where $\map \Zero n$ is the  zero function, which is basic primitive recursive‎.
Next we need to find a primitive recursive‎ function $g: \N^3 \to \N$ such that:

$\map \Mult {n, m + 1} = \map g {n, m, \map \Mult {n, m} }$
Because $\map \Mult {n, m + 1} = \map \Add {\map \Mult {n, m}, n}$, we see that a suitable function for $g$ is:

$\map g {n_1, n_2, n_3} = \map \Add {n_3, n_1}$
Using projection functions, we can write this as:

$\map g {n_1, n_2, n_3} = \map \Add {\map {\pr_3^3} {n_1, n_2, n_3}, \map {\pr_1^3} {n_1, n_2, n_3} }$.
This shows that $g$ is obtained by substitution from $\Add$, which is primitive recursive, and the basic primitive recursive‎ functions $\pr_3^3$ and $\pr_1^3$.
So $g$ is primitive recursive‎.
So $\Mult$ is obtained by primitive recursion from the primitive recursive functions‎ $g$ and $\Zero$, and so is primitive recursive‎.
$\blacksquare$





