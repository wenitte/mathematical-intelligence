# 

Source: https://proofwiki.org/wiki/Computable_Subsequence_of_Computable_Rational_Sequence_is_Computable/Corollary

Theorem
Let $\sequence {x_k}$ be a computable rational sequence.
Let $\phi : \N^2 \to \N$ be a total recursive function.

Then, there exists a computable rational sequence $\sequence {y_k}$ such that, for all $n, m \in \N$:

$y_{\map \pi {n, m}} = x_{\map \phi {n, m}}$
where $\pi : \N^2 \to \N$ is the Cantor pairing function.


Proof
Let $\psi : \N^2 \to \N$ be defined as:

$\map \psi k = \map \phi {\map {\pi_1} k, \map {\pi_2} k}$
where $\pi_1, \pi_2 : \N \to \N$ are the projections on the Cantor pairing function.
By Inverse of Cantor Pairing Function is Primitive Recursive, we have that $\psi$ is total recursive.
Therefore, by Computable Subsequence of Computable Rational Sequence is Computable:

$\sequence {x_{\map \psi k}}$
is a computable rational sequence.

It remains to be shown that:

$y_k = x_{\map \psi k}$
for all $k \in \N$.
We have:














\(\ds y_k\)

\(=\)







\(\ds y_{\map \pi {\map {\pi_1} k, \map {\pi_2} k} }\)





Inverse of Cantor Pairing Function














\(\ds \)

\(=\)







\(\ds x_{\map \phi {\map {\pi_1} k, \map {\pi_2} k} }\)





Premise














\(\ds \)

\(=\)







\(\ds x_{\map \psi k}\)





Definition of $\psi$


$\blacksquare$








