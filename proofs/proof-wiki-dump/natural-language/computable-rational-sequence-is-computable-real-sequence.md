# 

Source: https://proofwiki.org/wiki/Computable_Rational_Sequence_is_Computable_Real_Sequence

Theorem
Let $\sequence {x_n}$ be a computable rational sequence.
Then, $\sequence {x_n}$ is a computable real sequence.


Proof
By Computable Real Sequence iff Limits of Computable Rational Sequences, it suffices to show that there exist:

A computable rational sequence $\sequence {a_k}$
Total recursive functions $\phi, \psi : \N^2 \to \N$
such that:

$\forall m, p \in \N: \forall n \ge \map \psi {m, p}: \size {a_{\map \phi {m, n}} - x_m} < \dfrac 1 {p + 1}$

We will choose:

$\forall k \in \N: a_k = x_k$
$\map \phi {m, n} = m$
$\map \psi {m, p} = 0$
$\phi$ and $\psi$ are trivially primitive recursive, and thus total recursive by Primitive Recursive Function is Total Recursive Function.
As $\sequence {a_k} = \sequence {x_k}$, it is computable by assumption.

Finally, we have that, for any $m, n, p \in \N$:














\(\ds \size {a_{\map \phi {m, n} } - x_m}\)

\(=\)







\(\ds \size {a_m - x_m}\)




















\(\ds \)

\(=\)







\(\ds 0\)




















\(\ds \)

\(<\)







\(\ds \dfrac 1 {p + 1}\)









$\blacksquare$





