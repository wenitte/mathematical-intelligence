# 

Source: https://proofwiki.org/wiki/Prime_Enumeration_Function_is_Primitive_Recursive

Theorem
Let the function $p: \N \to \N$ be the prime enumeration function, defined as:

$\map p n = \begin{cases}
1 & : n = 0 \\
\mbox{the } n \mbox{th prime number} & : n > 0
\end{cases}$

Then $p$ is primitive recursive.


Proof
We can define $p$ recursively by:

$\map p {n + 1} = \text{the smallest } y \in \N \text { such that } y \text { is prime and } \map p n < y$
Hence we can express it as:

$\map p {n + 1} = \map {\mu y} {\map {\chi_\Bbb P} y = 1 \land \map p n < y}$
where:

$\map {\chi_\Bbb P} y$ is the characteristic function of the set of prime numbers $\Bbb P$
$\map {\mu y} \RR$ means the smallest $y \in \N$ such that the relation $\RR$ holds.

Now consider the relation $\SS$ given by:

$\map \SS {m, y} \iff \map {\chi_\Bbb P} y = 1$.
We have a reason for making $\SS$ a binary relation, even though $m$ is not actually invoked in its definition.
Then we have:

$\map {\chi_\SS} {m, y} = \map {\chi_{\operatorname{eq} } } {\map {\chi_\Bbb P} y, 1}$.
So $\chi_\SS$ is primitive recursive as it is obtained by substitution from:

the primitive recursive function $\chi_{\operatorname{eq} }$
the primitive recursive function $\chi_\Bbb P$.

Then we have that $<$ is primitive recursive.
So we define the relation $\RR$ by:

$\map \RR {m, y} \iff \map \SS {m, y} \land m < y \iff \map {\chi_\Bbb P} y = 1 \land m < y$.
This is primitive recursive from the above and Set Operations on Primitive Recursive Relations.

Now let us define the function $g: \N^2 \to \N$ as:

$\map g {m, z} = \mu y \le \map z {\map {\chi_\Bbb P} y = 1 \land m < y}$
which is primitive recursive by Bounded Minimization is Primitive Recursive.

We note that $\map g {\map p n, z} = \map p {n + 1}$ as long as $\map p {n + 1} \le z$.
Next, let $h: \N \to \N$ be defined as $\map h n = \map \exp {2, \map \exp {2, n} }$.
Then $h$ is primitive recursive since it is obtained by substitution from:

the primitive recursive function $\exp$;
the constant $2$.
From Upper Bounds for Prime Numbers, we have $\map p {n + 1} \le 2^{2^n} = \map h n$.
It follows that:

$\map p {n + 1} = \map g {\map p n, \map h n}$
where $g$ and $h$ are both primitive recursive.
So using the definition of $p$ as given above, we have:

$\map p 0 = 1$
$\map p {n + 1} = \map g {\map p n, \map h n}$.
So $p$ is defined by primitive recursion from the constant $1$ and the primitive recursive functions $g$ and $h$.
$\blacksquare$


Note
Note that we use the extravagantly large upper bound $2^{2^n}$ for the prime number $\map p {n + 1}$ because it is convenient in this context. Smaller ones would of course do the same job.





