# 

Source: https://proofwiki.org/wiki/Product_of_Computable_Real_Sequences_is_Computable

Theorem
Let $\sequence {x_m}$ and $\sequence {y_m}$ be computable real sequences.
Then $\sequence {x_m y_m}$ is a computable real sequence.


Proof
By definition of computable real sequence, there exist total recursive $f, g : \N^2 \to \N$ such that, for all $m, n \in \N$:

$\dfrac {k_{m,n} - 1} {n + 1} < x_m < \dfrac {k_{m,n} + 1} {n + 1}$
$\dfrac {\ell_{m,n} - 1} {n + 1} < y_m < \dfrac {\ell_{m,n} + 1} {n + 1}$

By Computable Real Sequence iff Limits of Computable Rational Sequences, there exist:

Computable rational sequences $\sequence {a_k}, \sequence {b_k}$
Total recursive functions $\phi_x, \psi_x, \phi_y, \psi_y : \N^2 \to \N$
such that:

$\forall m, p \in \N: \forall n \ge \map {\psi_x} {m, p}: \size {a_{\map {\phi_x} {m, n}} - x_m} < \dfrac 1 {p + 1}$
$\forall m, p \in \N: \forall n \ge \map {\psi_y} {m, p}: \size {a_{\map {\phi_y} {m, n}} - y_m} < \dfrac 1 {p + 1}$

By Computable Subsequence of Computable Rational Sequence is Computable/Corollary, there exist:

Computable rational sequences $\sequence {a'_k}, \sequence {b'_k}$
such that, for all $m, n \in \N$:

$a_{\map {\phi_x} {m, n}} = a'_{\map \pi {m, n}}$
$b_{\map {\phi_y} {m, n}} = b'_{\map \pi {m, n}}$
By Product of Computable Rational Sequences is Computable:

$\sequence {a'_k b'_k}$
is a computable rational sequence.

Define $\psi : \N^2 \to \N$ as:

$\map \psi {m, p} = \map \max {\map {\psi_x} {\paren {2 p + 2} \size {\ell_{m,0}} + 2 p + 1}, \map {\psi_y} {\paren {2 p + 2} \size {k_{m,0}} + 4 p + 3}}$
which is total recursive by:

Maximum Function is Primitive Recursive
Absolute Value of Integer is Primitive Recursive
Addition is Primitive Recursive
Multiplication is Primitive Recursive
Constant Function is Primitive Recursive
Primitive Recursive Function is Total Recursive Function

Let $m, n, p \in \N$ be arbitrary, and suppose $n \ge \map \psi {m, p}$.
The following inequalities hold:

$n \ge \map {\psi_x} {\paren {2 p + 2} \size {\ell_{m,0}} + 2 p + 1}$
$n \ge \map {\psi_y} {\paren {2 p + 2} \size {k_{m,0}} + 4 p + 3}$
And thus:

$\size {a_{\map {\psi_x} {m, n}} - x_m} < \dfrac 1 {\paren {2 p + 2} \size {\ell_{m,0}} + 2 p + 2} = \dfrac 1 {\paren {2 p + 2} \paren {\size {\ell_{m,0}} + 1}}$
$\size {b_{\map {\psi_y} {m, n}} - y_m} < \dfrac 1 {\paren {2 p + 2} \size {k_{m,0}} + 4 p + 4} = \dfrac 1 {\paren {2 p + 2} \paren {\size {k_{m,0}} + 2}}$
We also have:

$\size {x_m - k_{m,0}} < 1$
$\size {y_m - \ell_{m,0}} < 1$
so it follows that:

$\size {x_m} < \size {k_{m,0}} + 1$
$\size {y_m} < \size {\ell_{m,0}} + 1$
Finally, we also have:

$\size {a_{\map {\phi_x} {m, n}} - x_m} < \dfrac 1 {q + 1} \le 1$
for some $q \in \N$, so:

$\size {a_{\map {\phi_x} {m, n}}} < \size {x_m} + 1 < \size {k_{m,0}} + 2$

Then:














\(\ds \size {a'_{\map \pi {m, n} } b'_{\map \pi {m, n} } - x_m y_m}\)

\(=\)







\(\ds \size {a_{\map {\phi_x} {m, n} } b_{\map {\phi_y} {m, n} } - x_m y_m}\)





Definition of $\sequence {a'_k}$ and $\sequence {b'_k}$














\(\ds \)

\(=\)







\(\ds \size {a_{\map {\phi_x} {m, n} } b_{\map {\phi_y} {m, n} } - a_{\map {\phi_x} {m, n} } y_m + a_{\map {\phi_x} {m, n} } y_m - x_m y_m}\)




















\(\ds \)

\(\le\)







\(\ds \size {a_{\map {\phi_x} {m, n} } b_{\map {\phi_y} {m, n} } - a_{\map {\phi_x} {m, n} } y_m} + \size {a_{\map {\phi_x} {m, n} } y_m - x_m y_m}\)





Triangle Inequality for Real Numbers














\(\ds \)

\(=\)







\(\ds \size {a_{\map {\phi_x} {m, n} } } \size {b_{\map {\phi_y} {m, n} } - y_m} + \size {y_m} \size {a_{\map {\phi_x} {m, n} } - x_m}\)





Absolute Value Function is Completely Multiplicative














\(\ds \)

\(<\)







\(\ds \paren {\size {k_{m,0} } + 2} \dfrac 1 {\paren {2 p + 2} \paren {\size {k_{m,0} } + 2} } + \paren {\size {\ell_{m,0} } + 1} \dfrac 1 {\paren {2 p + 2} \paren {\size {\ell_{m,0} } + 1} }\)





Inequalities above














\(\ds \)

\(=\)







\(\ds \dfrac 1 {2 p + 2} + \dfrac 1 {2 p + 2}\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {p + 1}\)










Thus, the conditions are satisfied to apply Computable Real Sequence iff Limits of Computable Rational Sequences.
$\blacksquare$





