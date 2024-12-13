# 

Source: https://proofwiki.org/wiki/Reciprocal_of_Computable_Rational_Sequence_is_Computable

Theorem
Let $\sequence {x_n}$ be a computable rational sequence.
Suppose that, for all $n \in \N$:

$x_n \ne 0$
Then:

$\sequence {\dfrac 1 {x_n}}$ is a computable rational sequence.


Proof
By definition of computable rational sequence, there exist total recursive $f, g : \N \to \N$ such that:

$x_n = \dfrac {k_n} {\map g n + 1}$
where $\map f n$ codes the integer $k_n$.

We will define $f', g' : \N \to \N$ as:

$\map {f'} n = \map {\sgn_\Z} {k_n} \times_\Z \paren {\map g n + 1}_\Z$
$\map {g'} n = \map {\operatorname{pred}} {\size {k_n}}$
We have that both $f'$ and $g'$ are total recursive by:

Signum Function on Integers is Primitive Recursive
Multiplication of Integers is Primitive Recursive
Code Number for Non-Negative Integer is Primitive Recursive
Absolute Value of Integer is Primitive Recursive
Predecessor Function is Primitive Recursive
We now need to show that, for all $n \in \N$:

$\dfrac 1 {x_n} = \dfrac {k'_n} {\map {g'} n + 1}$
where $\map {f'} n$ codes the integer $k'_n$.

Since $x_n \ne 0$ by assumption, we have:

$k_n \ne 0$
for all $n \in \N$.
We will now examine the cases of:

$k_n > 0$
$k_n < 0$

Suppose $k_n > 0$.
Then:














\(\ds \dfrac 1 {x_n}\)

\(=\)







\(\ds \dfrac {\map g n + 1} {k_n}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\map \sgn {k_n} \paren {\map g n + 1} } {\size {k_n} }\)





$\map \sgn {k_n} = 1$ and $k_n = \size {k_n}$














\(\ds \)

\(=\)







\(\ds \dfrac {\map \sgn {k_n} \paren {\map g n + 1} } {\map {\operatorname{pred} } {\size {k_n} } + 1}\)





$\size {k_n} \ge 1$














\(\ds \)

\(=\)







\(\ds \dfrac {k'_n} {\map {g'} n + 1}\)










Suppose $k_n < 0$.
Then:














\(\ds \dfrac 1 {x_n}\)

\(=\)







\(\ds \dfrac {\map g n + 1} {k_n}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {- \map \sgn {k_n} \paren {\map g n + 1} } {- \size {k_n} }\)





$\map \sgn {k_n} = -1$ and $k_n = - \size {k_n}$














\(\ds \)

\(=\)







\(\ds \dfrac {\map \sgn {k_n} \paren {\map g n + 1} } {\size {k_n} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\map \sgn {k_n} \paren {\map g n + 1} } {\map {\operatorname{pred} } {\size {k_n} } + 1}\)





$\size {k_n} \ge 1$














\(\ds \)

\(=\)







\(\ds \dfrac {k'_n} {\map {g'} n + 1}\)










Thus, by Proof by Cases, the result holds.
$\blacksquare$





