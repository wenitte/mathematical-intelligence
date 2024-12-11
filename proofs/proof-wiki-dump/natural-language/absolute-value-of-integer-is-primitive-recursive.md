# 

Source: https://proofwiki.org/wiki/Absolute_Value_of_Integer_is_Primitive_Recursive

Theorem
For every $n \in \N$, let $n$ code the integer $k_n$.
Let $a : \N \to \N$ be defined as:

$\map a n = \size {k_n}$
Then, $a$ is primitive recursive.


Proof
Let $a : \N \to \N$ be defined as:

$\map a n = \map {\operatorname{quot}} {n + 1, 2}$
By:

Constant Function is Primitive Recursive
Quotient is Primitive Recursive
Successor Function is Primitive Recursive
it follows that $a$ is primitive recursive.

By definition of code number for integer, either:

$n = 2 k_n - 1$, with $k_n > 0$
or:

$n = - 2 k_n$, with $k_n \le 0$
In the first case, with $k_n > 0$, we have:

$k_n = \size {k_n}$
Then:














\(\ds \map a n\)

\(=\)







\(\ds \map a {2 k_n - 1}\)




















\(\ds \)

\(=\)







\(\ds \map {\operatorname{quot} } {\paren {2 \size {k_n} - 1} + 1, 2}\)




















\(\ds \)

\(=\)







\(\ds \map {\operatorname{quot} } {2 \size {k_n}, 2}\)




















\(\ds \)

\(=\)







\(\ds \size {k_n}\)





Definition of Quotient




In the second case, with $k_n \le 0$, we have:

$k_n = - \size {k_n}$
Then:














\(\ds \map a n\)

\(=\)







\(\ds \map a {- 2 k_n}\)




















\(\ds \)

\(=\)







\(\ds \map {\operatorname{quot} } {\paren {- 2 \paren {- \size {k_n} } } + 1, 2}\)




















\(\ds \)

\(=\)







\(\ds \map {\operatorname{quot} } {2 \size {k_n} + 1, 2}\)




















\(\ds \)

\(=\)







\(\ds \size {k_n}\)





Definition of Quotient



$\blacksquare$





