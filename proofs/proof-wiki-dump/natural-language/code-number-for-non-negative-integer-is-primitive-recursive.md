# 

Source: https://proofwiki.org/wiki/Code_Number_for_Non-Negative_Integer_is_Primitive_Recursive

Theorem
Let $c : \N \to \N$ be defined as:

$\map c n = m$
where $m$ is the code number for the integer $n : \Z$.
Then $c$ is a primitive recursive function.


Proof
Let $c : \N \to \N$ be defined as:

$\map c n = \begin{cases}
\map {\operatorname{pred}} {n + n} & n > 0 \\
0 & n = 0
\end{cases}$
That $c$ is primitive recursive follows from:

Definition by Cases is Primitive Recursive
Predecessor Function is Primitive Recursive
Addition is Primitive Recursive
Ordering Relations are Primitive Recursive
Equality Relation is Primitive Recursive

Suppose $n = 0$.
Then:

$m = -2 n = 0$
But:

$\map c n = 0 = m$

Suppose $n > 0$.
Then:

$m = 2 n - 1$
But:

$\map c n = \map {\operatorname{pred}} {n + n} = 2 n - 1$
as $n + n \ge 1$.

Thus, in all cases:

$\map c n = m$
$\blacksquare$





