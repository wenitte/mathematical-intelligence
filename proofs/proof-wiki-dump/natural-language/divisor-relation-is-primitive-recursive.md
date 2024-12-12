# 

Source: https://proofwiki.org/wiki/Divisor_Relation_is_Primitive_Recursive

Theorem
The divisor relation $m \divides n$ in $\N^2$ is primitive recursive.


Proof
We note that $m \divides n \iff n = q m$ where $q \in \Z$.
So we see that $m \divides n \iff \map \rem {n, m} = 0$ (see Remainder is Primitive Recursive).
Thus we define the function $\operatorname{div}: \N^2 \to \N$ as:

$\map {\operatorname {div} } {n, m} = \map {\chi_{\operatorname {eq} } } {\map \rem {n, m}, 0}$
where $\map {\chi_{\operatorname {eq} } } {n, m}$ denotes the characteristic function of the equality relation.

So we have:

$\map {\operatorname {div} } {n, y} = \begin{cases}
1 & : y \divides n \\
0 & : y \nmid n
\end{cases}$
So $\map {\operatorname {div} } {n, m}$ is defined by substitution from:

the primitive recursive function $\rem$
the primitive recursive relation $\operatorname {eq}$
the constants $1$ and $0$.

Thus $\operatorname {div}$ is primitive recursive.
Hence the result.
$\blacksquare$





