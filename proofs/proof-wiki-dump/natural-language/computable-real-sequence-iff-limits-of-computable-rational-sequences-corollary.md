# 

Source: https://proofwiki.org/wiki/Computable_Real_Sequence_iff_Limits_of_Computable_Rational_Sequences/Corollary



Corollary to Computable Real Sequence iff Limits of Computable Rational Sequences
Let $\sequence {x_m}$ be a real sequence.
Then:

$\sequence {x_m}$ is a computable real sequence
if and only if there exists a computable rational sequence $\sequence {a_k}$ such that, for all $m, p \in \N$:

$\size {a_{\map \pi {m, p}} - x_m} < \dfrac 1 {p + 1}$
where $\pi$ is the Cantor pairing function.


Proof
By Computable Real Sequence iff Limits of Computable Rational Sequences, it suffices to show that there exist:

A computable rational sequence $\sequence {b_k}$
Total recursive functions $\phi, \psi : \N^2 \to \N$
such that:

$\forall m, p \in \N: \forall n \ge \map \psi {m, p}: \size {b_{\map \phi {m, n}} - x_m} < \dfrac 1 {p + 1}$
if and only if there exists a computable rational sequence $\sequence {a_k}$ such that, for all $m, p \in \N$:

$\size {a_{\map \pi {m, p}} - x_m} < \dfrac 1 {p + 1}$
where $\pi$ is the Cantor pairing function.


Necessary Condition
Let:

$\sequence {b_k}$ be a computable rational sequence
$\phi, \psi : \N^2 \to \N$ be total recursive functions
satisfying:

$\forall m, p \in \N: \forall n \ge \map \psi {m, p}: \size {b_{\map \phi {m, n}} - x_m} < \dfrac 1 {p + 1}$

Define $\chi : \N \to \N$ as:

$\map \chi k = \map \phi {\map {\pi_1} k, \map \psi {\map {\pi_1} k, \map {\pi_2} k} }$
where $\pi_1, \pi_2 : \N \to \N$ are the projections on the Cantor pairing function.
We have that $\chi$ is total recursive by:

Inverse of Cantor Pairing Function is Primitive Recursive
Primitive Recursive Function is Total Recursive Function

Let $\sequence {a_k}$ be defined as:

$a_k = b_{\map \chi k}$
By Computable Subsequence of Computable Rational Sequence is Computable:

$\sequence {a_k}$ is a computable rational sequence.

Let $m, p \in \N$ be arbitrary.
We have:














\(\ds a_{\map \pi {m, p} }\)

\(=\)







\(\ds b_{\map \chi {\map \pi {m, p} } }\)





Definition of $a_k$














\(\ds \)

\(=\)







\(\ds b_{\map \phi {\map {\pi_1} {\map \pi {m, p} }, \map \psi {\map {\pi_1} {\map \pi {m, p} }, \map {\pi_2} {\map \pi {m, p} } } } }\)





Definition of $\chi$














\(\ds \)

\(=\)







\(\ds b_{\map \phi {m, \map \psi {m, p} } }\)





Inverse of Cantor Pairing Function








\(\ds \leadsto \ \ \)





\(\ds \size {a_{\map \pi {m, p} } - x_m}\)

\(=\)







\(\ds \size {b_{\map \phi {m, \map \psi {m, p} } } - x_m}\)




















\(\ds \)

\(<\)







\(\ds \frac 1 {p + 1}\)





Premise



$\Box$


Sufficient Condition
Let $\sequence {a_k}$ be a computable rational sequence such that, for all $m, p \in \N$:

$\size {a_{\map \pi {m, p}} - x_m} < \dfrac 1 {p + 1}$
where $\pi$ is the Cantor pairing function.

Let $\sequence {b_k}$ be defined as:

$b_k = a_k$
Let $\phi, \psi : \N \to \N$ be defined as:

$\map \phi {m, n} = \map \pi {m, n}$
$\map \psi {m, p} = p$
Both $\phi$ and $\psi$ are total recursive by:

Cantor Pairing Function is Primitive Recursive
Primitive Recursive Function is Total Recursive Function

Let $m, n, p \in \N$ satisfy:

$n \ge \map \psi {m, p}$
We have:














\(\ds \size {b_{\map \phi {m, n} } - x_m}\)

\(=\)







\(\ds \size {a_{\map \pi {m, n} } - x_m}\)





Definitions of $a_k$ and $\phi$














\(\ds \)

\(<\)







\(\ds \dfrac 1 {n + 1}\)





Premise














\(\ds \)

\(\le\)







\(\ds \dfrac 1 {p + 1}\)





$n \ge \map \psi {m, p} = p$



$\blacksquare$





