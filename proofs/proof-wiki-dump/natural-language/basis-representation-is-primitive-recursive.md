# 

Source: https://proofwiki.org/wiki/Basis_Representation_is_Primitive_Recursive

Theorem
Let $\operatorname{basis} : \N^3 \to \N$ be defined as follows:

$\map {\operatorname{basis} } {b, n, i} = \begin{cases}
1 & : b = 1 \land i < n \\
r_i & : b > 1 \land i \le m \\
0 & : \text {otherwise}
\end{cases}$
where $\sqbrk {r_m r_{m - 1} \dots r_1 r_0}_b$ is the base-$b$ representation of $n$.

Proof
Consider the following function:

$\map f {b, n, i} = \begin{cases}
n & : i = 0 \\
\map {\operatorname{quot} } {\map f {b, n, i - 1}, b} & : i > 0
\end{cases}$
As $f$ is obtained by Primitive Recursion and:

Constant Function is Primitive Recursive
Quotient is Primitive Recursive
Thus, $f$ is primitive recursive.

Observe that $\map f {b, n, 0} = n$ which is the number represented by $\sqbrk {r_m r_{m - 1} \dots r_1 r_0}_b$.
Now, suppose that $\map f {b, n, i}$ is the number represented by $\sqbrk {r_m r_{m - 1} \dots r_{i + 1} r_i}_b$.
Then:














\(\ds \map f {b, n, i + 1}\)

\(=\)







\(\ds \map {\operatorname{quot} } {\sqbrk {r_m r_{m - 1} \dots r_{i + 1}, r_i}_b, b}\)





Definition of $f$














\(\ds \)

\(=\)







\(\ds \map {\operatorname{quot} } {\sum_{j = 0}^{m - i} r_{j + i} b^j, b}\)





Basis Representation Theorem














\(\ds \)

\(=\)







\(\ds \map {\operatorname{quot} } {r_i + \sum_{j = 0}^{m - i - 1} r_{j + i + 1} b^{j + 1}, b}\)




















\(\ds \)

\(=\)







\(\ds \map {\operatorname{quot} } {r_i + b \sum_{j = 0}^{m - i - 1} r_{j + i + 1} b^j, b}\)




















\(\ds \)

\(=\)







\(\ds \sum_{j = 0}^{m - i - 1} r_{j + i + 1} b^j\)





Division Theorem














\(\ds \)

\(=\)







\(\ds \sqbrk {r_m r_{m - 1} \dots r_{i + 2} r_{i + 1} }_b\)





Basis Representation Theorem



Thus, by Principle of Mathematical Induction:

$\map f {b, n, i} = \sqbrk {r_m r_{m - 1} \dots r_{i + 1} r_i}$

Define $\map g {b, n, i} = \map {\operatorname{rem} } {\map f {b, n, i}, b}$.
Then $g$ is primitive recursive, since Remainder is Primitive Recursive.
For each $i$:














\(\ds \map g {b, n, i}\)

\(=\)







\(\ds \map {\operatorname{rem} } {\map f {b, n, i}, b}\)




















\(\ds \)

\(=\)







\(\ds \map {\operatorname{rem} } {\sqbrk {r_m r_{m - 1} \dots r_{i + 1} r_i}, b}\)




















\(\ds \)

\(=\)







\(\ds \map {\operatorname{rem} } {\sum_{j = 0}^{m - i} r_{j + i} b^j, b}\)





Division Theorem














\(\ds \)

\(=\)







\(\ds \map {\operatorname{rem} } {r_i + b \sum_{j = 0}^{m - i - 1} r_{j + i + 1} b^j, b}\)




















\(\ds \)

\(=\)







\(\ds r_i\)





Division Theorem




The result follows from:

Definition by Cases is Primitive Recursive
Ordering Relations are Primitive Recursive
Set Operations on Primitive Recursive Relations
Constant Function is Primitive Recursive
$\blacksquare$





