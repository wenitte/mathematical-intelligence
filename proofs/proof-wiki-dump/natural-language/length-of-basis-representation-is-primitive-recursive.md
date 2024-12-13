# 

Source: https://proofwiki.org/wiki/Length_of_Basis_Representation_is_Primitive_Recursive

Theorem
Define $\operatorname{basislen} : \N^2 \to \N$ as:

$\map {\operatorname{basislen}} {b, n} = \begin{cases}m + 1 & : b > 1 \land n > 0 \\n & : b = 1 \\0 & : b = 0 \lor n = 0\end{cases}$
where $\sqbrk {r_m r_{m - 1} \dotsm r_1 r_0}_b$ is the base-$b$ representation of $n$.

Then $\operatorname{basislen}$ is primitive recursive.


Proof
By:

Definition by Cases is Primitive Recursive
Ordering Relations are Primitive Recursive
Equality Relation is Primitive Recursive
Constant Function is Primitive Recursive
Set Operations on Primitive Recursive Relations
all that needs to be shown is that $m + 1$ can be computed from $n$ in the case that $b > 1$ and $n > 0$.

By the definition of base-$b$ representation:

$\ds n = \sum_{i \mathop = 0}^m r_i b^i$

Let $m' \le m$ be arbitrary.
Since $r_m > 0$, it follows that:

$b^{m'} \le r_m b^m \le n$
Therefore:

$m' \le m \implies b^{m'} \le n$

Now, let $m' > m$ be arbitrary.
Then:














\(\ds n\)

\(=\)







\(\ds \sum_{j \mathop = 0}^m r_j b^j\)




















\(\ds \)

\(\le\)







\(\ds \sum_{j \mathop = 0}^m \paren {b - 1} b^j\)





Every $r_j \le b - 1$














\(\ds \)

\(\le\)







\(\ds \sum_{j \mathop = 0}^{m'} \paren {b - 1} b^j\)





$m \le m' - 1$














\(\ds \)

\(=\)







\(\ds \frac {\paren {b - 1} \paren {b^{m'} - 1} } {b - 1}\)





Sum of Geometric Sequence: Corollary $1$














\(\ds \)

\(=\)







\(\ds b^{m'} - 1\)




















\(\ds \)

\(<\)







\(\ds b^{m'}\)









Therefore:

$m' > m \implies b^{m'} > n$

Thus, $m + 1$ is the smallest $k \in \N$ such that:

$b^k > n$
The result follows from:

Exponentiation is Primitive Recursive
Ordering Relations are Primitive Recursive
Bounded Minimization is Primitive Recursive
assuming we can find some function $\map g n$ such that:

$\map g n \ge m + 1$
for every $n$.
By Basis Representation is No Longer than Number:

$\map g n = n$
suffices.
$\blacksquare$





