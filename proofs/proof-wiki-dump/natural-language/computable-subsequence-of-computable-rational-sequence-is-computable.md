# 

Source: https://proofwiki.org/wiki/Computable_Subsequence_of_Computable_Rational_Sequence_is_Computable

Theorem
Let $\sequence {x_n}_{n \in \N}$ be a computable rational sequence.
Let $\phi : \N \to \N$ be a total recursive function.
Then:

$\sequence {x_{\map \phi n}}_{n \in \N}$
is a computable rational sequence.


Corollary
Let $\sequence {x_k}$ be a computable rational sequence.
Let $\phi : \N^2 \to \N$ be a total recursive function.

Then, there exists a computable rational sequence $\sequence {y_k}$ such that, for all $n, m \in \N$:

$y_{\map \pi {n, m}} = x_{\map \phi {n, m}}$
where $\pi : \N^2 \to \N$ is the Cantor pairing function.


Proof
By definition of computable rational sequence, there exist total recursive $N, D : \N \to \N$ such that, for every $n \in \N$:

$x_n = \dfrac {k_n} {\map D n + 1}$
where $\map N n$ codes the integer $k_n$.

We define total recursive $N', D' : \N \to \N$ as:

$\map {N'} n = \map N {\map \phi n}$
$\map {D'} n = \map N {\map \phi n}$
Now, we just need to show that, for every $n \in \N$:

$x_{\map \phi n} = \dfrac {k'_n} {\map {D'} n + 1}
where $\map {N'} n$ codes the integer $k'_n$.

We have:














\(\ds \dfrac {k'_n} {\map {D'} n + 1}\)

\(=\)







\(\ds \dfrac {k_{\map \phi n} } {\map D {\map \phi n} + 1}\)





Definitions of $N'$ and $D'$














\(\ds \)

\(=\)







\(\ds x_{\map \phi n}\)





Assumption on $N$ and $D$



$\blacksquare$





