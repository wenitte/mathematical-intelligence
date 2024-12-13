# 

Source: https://proofwiki.org/wiki/Product_of_Computable_Rational_Sequences_is_Computable

Theorem
Let $\sequence {x_n}$ and $\sequence {y_n}$ be computable rational sequences.
Then, $\sequence {x_n y_n}$ is a computable rational sequence.


Proof
By definition of computable rational sequence, there exist total recursive $f_x, g_x, f_y, g_y : \N \to \N$ such that:

$x_n = \dfrac {k_n} {\map {g_x} n + 1}$
$y_n = \dfrac {\ell_n} {\map {g_y} n + 1}$
where:

$\map {f_x} n$ codes the integer $k_n$
$\map {f_y} n$ codes the integer $\ell_n$

We define:

$\map f n = \map {f_x} n \times_Z \map {f_y} n$
$\map g n = \map {g_x} n \times \map {g_y} n + \map {g_x} n + \map {g_y} n$
which are total recursive by:

Multiplication of Integers is Primitive Recursive
Addition is Primitive Recursive
Multiplication is Primitive Recursive

Thus, we have:














\(\ds \frac {p_n} {\map g n + 1}\)

\(=\)







\(\ds \frac {k_n \ell_n} {\map {g_x} n \map {g_y} n + \map {g_x} n + \map {g_y} n + 1}\)





$\map f n$ codes the integer $p_n$














\(\ds \)

\(=\)







\(\ds \frac {k_n \ell_n} {\paren {\map {g_x} n + 1} \paren {\map {g_y} n + 1} }\)




















\(\ds \)

\(=\)







\(\ds \frac {k_n} {\map {g_x} n + 1} \frac {\ell_n} {\map {g_y} n + 1}\)




















\(\ds \)

\(=\)







\(\ds x_n y_n\)









$\blacksquare$





