# 

Source: https://proofwiki.org/wiki/User:Keith.U/Sandbox/Proof_2

Theorem
Let $x$ be a real number.
Let $\exp$ denote the (real) exponential function.

Then:

$\forall x \in \R : \exp x > 0$


Proof
This proof assumes the limit definition of $\exp$.
That is, let:

$\ds \exp x = \lim_{n \mathop \to \infty} \map {f_n} x$
where $\map {f_n} x = \paren {1 + \dfrac x n}^n$

First, fix $x \in \R$.
Let $N = \ceiling {\size x}$, where $\ceiling {\, \cdot \,}$ denotes the ceiling function.

Then:














\(\ds \exp x\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \map {f_n} x\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \map {f_{n + N} } x\)





Tail of Convergent Sequence














\(\ds \)

\(\ge\)







\(\ds \map {f_{n + N} } x\)





Exponential Sequence is Eventually Increasing and Limit of Bounded Convergent Sequence is Bounded














\(\ds \)

\(>\)







\(\ds 0\)





Corollary to Exponential Sequence is Eventually Increasing



$\blacksquare$





