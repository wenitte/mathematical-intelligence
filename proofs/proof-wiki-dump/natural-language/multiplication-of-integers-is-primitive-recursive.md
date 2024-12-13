# 

Source: https://proofwiki.org/wiki/Multiplication_of_Integers_is_Primitive_Recursive

Theorem
Let $t : \N^2 \to \N$ be defined as:

$\map t {m, n} = p$
where:

$m$ is the code number for the integer $k$
$n$ is the code number for the integer $\ell$
$p$ is the code number for the integer $k \times \ell$
Then $t$ is a primitive recursive function.


Proof
We have:

$\size {k \times \ell} = \size k \times \size \ell$
By:

Multiplication is Primitive Recursive
Absolute Value of Integer is Primitive Recursive
we have that:

$\map a {m, n} = \size {k \times \ell}$
is primitive recursive.

Additionally, we have that:

$k \times \ell > 0$
if and only if either:

$k > 0 \land \ell > 0$
or:

$k < 0 \land \ell < 0$
By

Set of Strictly Positive Integers is Primitive Recursive
Set of Strictly Negative Integers is Primitive Recursive
Set Operations on Primitive Recursive Relations
the above statement is a primitive recursive relation.

Let $c^+ : \N \to \N$ be defined as:

$\map {c^+} n = k_{\mathop + n}$
where $k_{\mathop + n}$ is the code number for the integer $+n : \Z$.
Let $c^- : \N \to \N$ be defined as:

$\map {c^-} n = k_{\mathop - n}$
where $k_{\mathop - n}$ is the code number for the integer $-n : \Z$.
By

Code Number for Non-Negative Integer is Primitive Recursive
Code Number for Non-Positive Integer is Primitive Recursive
both $c^+$ and $c^-$ are primitive recursive.

We now have:

$\map t {m, n} = \begin{cases}
\map {c^+} {\map a {m, n}} & : \paren {k > 0 \land \ell > 0} \lor \paren {k < 0 \land \ell < 0} \\
\map {c^-} {\map a {m, n}} & : \text{otherwise}
\end{cases}$
which is primitive recursive by:

Definition by Cases is Primitive Recursive/Corollary
$\blacksquare$





