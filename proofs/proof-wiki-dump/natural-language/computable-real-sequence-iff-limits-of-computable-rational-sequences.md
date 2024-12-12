# 

Source: https://proofwiki.org/wiki/Computable_Real_Sequence_iff_Limits_of_Computable_Rational_Sequences



Theorem
Let $\sequence {x_m}$ be a sequence of real numbers.
Then, $\sequence {x_m}$ is computable if and only if there exist:

A computable rational sequence $\sequence {a_k}$
Total recursive functions $\phi, \psi : \N^2 \to \N$
such that:

$\forall m, p \in \N: \forall n \ge \map \psi {m, p}: \size {a_{\map \phi {m, n}} - x_m} < \dfrac 1 {p + 1}$


Corollary
Let $\sequence {x_m}$ be a real sequence.
Then:

$\sequence {x_m}$ is a computable real sequence
if and only if there exists a computable rational sequence $\sequence {a_k}$ such that, for all $m, p \in \N$:

$\size {a_{\map \pi {m, p}} - x_m} < \dfrac 1 {p + 1}$
where $\pi$ is the Cantor pairing function.


Proof
Necessary Condition
Suppose $\sequence {x_m}$ is computable.
Then, there exists a total recursive $f : \N^2 \to \N$ such that, for all $m, p \in \N$:

$\dfrac {c_{m,p} - 1} {p + 1} < x_m < \dfrac {c_{m,p} + 1} {p + 1}$
where $\map f {m, p}$ codes the integer $c_{m,p}$.

To produce the computable rational sequence, we will define:

$\map N k = \map f {\map {\pi_1} k, \map {\pi_2} k}$
$\map D k = \map {\pi_2} k$
where $\pi_1$ and $\pi_2$ are the projections of the Cantor pairing function.
Then:

$a_k = \dfrac {d_k} {\map D k + 1}$
where $\map N k$ codes the integer $d_k$.

We will define:

$\map \phi {m, n} = \map \pi {m, n}$
$\map \psi {m, p} = p$
where $\pi$ is the Cantor pairing function.

All of the above defined function are total recursive by:

Cantor Pairing Function is Primitive Recursive
Inverse of Cantor Pairing Function is Primitive Recursive
Primitive Recursive Function is Total Recursive Function

Now, let $m, p \in \N$ be arbitrary, and let $n \in \N$ satisfy:

$n \ge \map \psi {m, p} = p$
We have:














\(\ds a_{\map \phi {m, n} }\)

\(=\)







\(\ds \dfrac {d_{\map \pi {m, n} } } {\map D {\map \pi {m, n} } + 1}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {c_{\map {\pi_1} {\map \pi {m, n} }, \map {\pi_2} {\map \pi {m, n} } } } {\map {\pi_2} {\map \pi {m, n} } + 1}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {c_{m,n} } {n + 1}\)









By assumption:

$\dfrac {c_{m,n} - 1} {n + 1} < x_m < \dfrac {c_{m,n} + 1} {n + 1}$
Therefore:














\(\ds \size {a_{\map \phi {m,n} } - x_m}\)

\(=\)







\(\ds \size {\frac {c_{m,n} } {n + 1} - x_m}\)




















\(\ds \)

\(<\)







\(\ds \frac 1 {n + 1}\)





As $- \dfrac 1 {n + 1} < x_m - \dfrac {c_{m,n} } {n + 1} < \dfrac 1 {n + 1}$














\(\ds \)

\(\le\)







\(\ds \frac 1 {p + 1}\)





As $n \ge p$



$\Box$


Sufficient Condition
Suppose there exist:

A computable rational sequence $\sequence {a_k}$
Total recursive functions $\phi, \psi : \N^2 \to \N$
such that:

$\forall m, p \in \N: \forall n \ge \map \psi {m, p}: \size {a_{\map \phi {m, n}} - x_m} < \dfrac 1 {p + 1}$
By definition of computable rational sequence, there exist total recursive $N, D : \N \to \N$ such that:

$a_k = \dfrac {d_k} {\map D k}$
where $\map N k$ codes the integer $d_k$.

Define $f : \N^2 \to \N$ as:

$\map f {m, p} = \map {\operatorname{quot}_\Z} {\map N {\map \phi {m, \map \psi {m, 2 p + 1}}} \times_\Z \paren {2 p + 2}_\Z +_\Z \map D {\map \phi {m, \map \psi {m, 2 p + 1}}}_\Z, \paren {2 \map D {\map \phi {m, \map \psi {m, 2 p + 1}}}}_\Z}$
which is total recursive by:

Quotient of Integers is Primitive Recursive
Code Number for Non-Negative Integer is Primitive Recursive
Multiplication of Integers is Primitive Recursive
Addition of Integers is Primitive Recursive
Addition is Primitive Recursive
Constant Function is Primitive Recursive
Primitive Recursive Function is Total Recursive Function

Let $n_{m,q} = \map \psi {m,q}$
Then, we have:














\(\ds \map f {m, p}\)

\(=\)







\(\ds \floor {\dfrac {2 d_{\map \phi {m, n_{m, 2 p + 1} } } \paren {p + 1} + \map D {\map \phi {m, n_{m, 2 p + 1} } } } {2 \map D {\map \phi {m, n_{m, 2 p + 1} } } } }\)




















\(\ds \)

\(=\)







\(\ds \floor {\dfrac {d_{\map \phi {m, n_{m, 2 p + 1} } } \paren {p + 1} } {\map D {\map \phi {m, n_{m, 2 p + 1} } } } + \dfrac 1 2}\)




















\(\ds \)

\(=\)







\(\ds \floor {a_{\map \phi {m, n_{m, 2 p + 1} } } \paren {p + 1} + \dfrac 1 2}\)









By Floor is between Number and One Less:

$a_{\map \phi {m, n_{m, 2 p + 1}}} \paren {p + 1} - \dfrac 1 2 \le \map f {m, p} < a_{\map \phi {m, n_{m, 2 p + 1}}} \paren {p + 1} + \dfrac 1 2$
Therefore:

$\map f {m, p} - 1 < a_{\map \phi {m, n_{m, 2 p + 1}}} \paren {p + 1} - \dfrac 1 2$
$a_{\map \phi {m, n_{m, 2 p + 1}}} \paren {p + 1} + \dfrac 1 2 \le \map f {m, p} + 1$
Hence:

$\dfrac {\map f {m, p} - 1} {p + 1} < a_{\map \phi {m, n_{m, 2 p + 1}}} - \dfrac 1 {2 p + 2}$
$a_{\map \phi {m, n_{m, 2 p + 1}}} + \dfrac 1 {2 p + 2} \le \dfrac {\map f {m, p} + 1} {p + 1}$

By assumption, we have:

$\size {a_{\map \phi {m, n_{m, 2 p + 1}}} - x_m} < \dfrac 1 {2 p + 2}$
Thus:

$- \dfrac 1 {2 p + 2} < a_{\map \phi {m, n_{m, 2 p + 1}}} - x_m < \dfrac 1 {2 p + 2}$
Hence:

$a_{\map \phi {m, n_{m, 2 p + 1}}} - \dfrac 1 {2 p + 2} < x_m < a_{\map \phi {m, n_{m, 2 p + 1}}} + \dfrac 1 {2 p + 2}$
Combining that with the previous results:

$\dfrac {\map f {m, p} - 1} {p + 1} < x_m < \dfrac {\map f {m, p} + 1} {p + 1}$
which satisfies the definition of computable real sequence.
$\blacksquare$





