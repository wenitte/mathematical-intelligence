# 

Source: https://proofwiki.org/wiki/Convergent_Sequence_with_Finite_Elements_Prepended_is_Convergent_Sequence

Theorem
Let $\struct {R, \norm { \, \cdot \, } }$ be a normed division ring.
Let $\sequence {x_n}$ be a sequence in $R$.
Let $N \in \N$.
Let $\sequence {y_n}$ be the sequence defined by:

$\forall n \in \N: y_n = x_{N + n}$
Let $\sequence {y_n}$ be a convergent sequence in $R$ with limit $l$.
Then:

$\sequence {x_n}$ is a convergent sequence in $R$ with limit $l$.


Proof
Let $\epsilon \in \R_{>0}$ be given.
By the definition of a convergent sequence in $R$ with limit $l$:

$\exists N' \in \R_{>0}: \forall n \in \N: n > N' \implies \norm {y_n - l} < \epsilon$
Hence:










\(\ds \forall n > \paren {N' + N}: \, \)



\(\ds \norm {x_n - l}\)

\(=\)







\(\ds \norm {y_{n - N} - l}\)





$n > N$














\(\ds \)

\(<\)







\(\ds \epsilon\)





$n - N > N'$



The result follows.
$\blacksquare$


Sources




