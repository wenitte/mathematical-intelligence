# 

Source: https://proofwiki.org/wiki/Convergent_Real_Sequence/Examples/n%5E2_-_1_over_n%5E2_%2B_1

Example of Convergent Real Sequence
$\ds \lim_{n \mathop \to \infty} \paren {\dfrac {n^2 - 1} {n^2 + 1} } = 1$


Proof
Let $\epsilon \in \R_{>0}$ be given.
The requirement is to find a value of $N \in \R$ such that:

$\forall n > N: \size {\dfrac {n^2 - 1} {n^2 + 1} - 1} < \epsilon$
But we have:














\(\ds \size {\dfrac {n^2 - 1} {n^2 + 1} - 1}\)

\(=\)







\(\ds 1 - \dfrac {n^2 - 1} {n^2 + 1}\)




















\(\ds \)

\(=\)







\(\ds \dfrac 2 {n^2 + 1}\)









Hence the requirement is now to find a value of $N \in \R$ such that:

$\forall n > N: \dfrac 2 {n^2 + 1} < \epsilon$
From Reciprocal Function is Strictly Decreasing:

$\dfrac 2 {n^2 + 1} < \epsilon \implies n^2 + 1 > \dfrac 2 \epsilon$
So choosing $N = \paren {\dfrac 2 \epsilon}^{1/2}$ we have that:

$\forall n > N: n > \dfrac 1 \epsilon$









\(\ds \forall n > N: \, \)



\(\ds n^2 + 1\)

\(>\)







\(\ds n^2\)




















\(\ds \)

\(>\)







\(\ds N^2\)




















\(\ds \)

\(=\)







\(\ds \dfrac 2 \epsilon\)









We have demonstrated that for $\epsilon \in \R_{>0}$ there exists $N \in \R$, that is: $N = \paren {\dfrac 2 \epsilon}^{1/2}$, such that:

$\forall n > N: \size {\dfrac {n^2 - 1} {n^2 + 1} - 1} < \epsilon$

Hence the result:

$\ds \lim_{n \mathop \to \infty} \paren {\dfrac {n^2 - 1} {n^2 + 1} } = 1$
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 4$: Convergent Sequences: Exercise $\S 4.6 \ (1)$




