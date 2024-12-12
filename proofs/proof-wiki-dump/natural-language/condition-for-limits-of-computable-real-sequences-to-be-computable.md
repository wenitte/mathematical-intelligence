# 

Source: https://proofwiki.org/wiki/Condition_for_Limits_of_Computable_Real_Sequences_to_be_Computable

Theorem
Let $\sequence {x_k}_{k \in \N}$ be a computable real sequence.
Let $\sequence {y_n}_{n \in \N}$ be a real sequence.
If there exists total recursive function $\phi : \N^2 \to \N$ such that:

$\forall n, p \in \N: \size {x_{\map \phi {n, p}} - y_n} < \dfrac 1 {p + 1}$
then:

$\sequence {y_n}_{n \in \N}$
is a computable real sequence.


Proof
By Corollary to Computable Real Sequence iff Limits of Computable Rational Sequences, there exists a computable rational sequence $\sequence {a_N}$ such that, for all $k, p \in \N$:

$\size {a_{\map \pi {k, p} } - x_k} < \dfrac 1 {p + 1}$
where $\pi$ is the Cantor pairing function.

Let $\psi : \N^2 \to \N$ be defined as:

$\map \psi {n, p} = \map \pi {\map \phi {n, 2 p + 1}, 2 p + 1}$
which is total recursive by:

Cantor Pairing Function is Primitive Recursive
Primitive Recursive Function is Total Recursive Function
By Corollary to Computable Subsequence of Computable Rational Sequence is Computable, there exists a computable rational sequence $\sequence {b_N}$ such that, for all $n, p \in \N$:

$b_{\map \pi {n, p}} = a_{\map \psi {n, p}}$

We have, for all $n, p \in \N$:














\(\ds \size {b_{\map \pi {n, p} } - y_n}\)

\(=\)







\(\ds \size {a_{\map \psi {n, p} } - y_n}\)





Definition of $\sequence {b_N}$














\(\ds \)

\(=\)







\(\ds \size {a_{\map \pi {\map \phi {n, 2 p + 1}, 2 p + 1} } - y_n}\)





Definition of $\psi$














\(\ds \)

\(\le\)







\(\ds \size {a_{\map \pi {\map \phi {n, 2 p + 1}, 2 p + 1} } - x_{\map \phi {n, 2 p + 1} } } + \size {x_{\map \phi {n, 2 p + 1} } - y_n}\)





Triangle Inequality for Real Numbers














\(\ds \)

\(<\)







\(\ds \dfrac 1 {2 p + 2} + \dfrac 1 {2 p + 2}\)





Premise














\(\ds \)

\(=\)







\(\ds \dfrac 1 {p + 1}\)









The result then follows from Corollary to Computable Real Sequence iff Limits of Computable Rational Sequences.
$\blacksquare$





