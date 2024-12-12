# 

Source: https://proofwiki.org/wiki/Binary_Sequence_Codes_are_Primitive_Recursive


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
The following function is primitive recursive:

$\map {\operatorname{bincode} } {n, i} = o_i$
where $o_i$ is the number of $1$ digits between the $i - 1$-th and $i$-th $0$ digit in the base-$2$ representation of $n$, starting from the least significant digits.
As a special case, $\map {\operatorname{bincode} } {n, 0}$ is the number of $1$ digits before the first $0$ digit.
In other words, suppose the base-$2$ representation of $n$ is:

$\sqbrk {\dots 1 1 \dots 1 1 0 1 1 \dots 1 1 0 1 1 \dots 1 1}$
Then $\map {\operatorname{bincode} } {n, i}$ is the length of the $i + 1$-th string of $1$ digits, counting from the right.


Proof
By Basis Representation is Primitive Recursive, we have that $\map {\operatorname{basis} } {b, n, i}$ is primitive recursive.
Consider the function:

$\map z {n, i} = \begin{cases}
\map {\mu j < n} {\map {\operatorname{basis} } {2, n, j} = 0} & : i = 0 \\
\map {\mu j < n} {j > \map z {n, i - 1} \land \map {\operatorname{basis} } {2, n, j} = 0} & : i > 0
\end{cases}$
It returns the position of the $i + 1$-th $0$ in the base-$2$ representation of $n$.
If the digit exists, it will always be found, as the base-$2$ representation is never longer than $n$.
If there is no such digit, then it returns a position beyond the representation.
In particular, consecutive values of $z$ that are beyond its length will always be at most $1$ apart, and increasing.
Additionally $z$, is primitive recursive, as:

Constant Function is Primitive Recursive
Equality Relation is Primitive Recursive
Ordering Relations are Primitive Recursive
Bounded Minimization is Primitive Recursive
and it is obtained by primitive recursion on them.

Then:

$\map {\operatorname{bincode} } {n, i} = \begin{cases}
\map z {n, 0} & : i = 0 \\
\map z {n, i} - \map z {n, i - 1} - 1 & : i > 0
\end{cases}$
which is primitive recursive by:

Definition by Cases is Primitive Recursive
Cut-Off Subtraction is Primitive Recursive
in addition to the above.
$\blacksquare$





