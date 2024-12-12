# 

Source: https://proofwiki.org/wiki/Convergent_Real_Sequence/Examples/1_plus_Reciprocal_of_n

Example of Convergent Real Sequence
The sequence $\sequence {a_n}_{n \mathop \ge 1}$ defined as:

$a_n := 1 + \dfrac 1 n$
is convergent to the limit $1$ as $n \to \infty$.


Proof
Let $\epsilon \in \R_{>0}$ be given.
The requirement is to find a value of $N \in \R$ such that:

$\forall n > N: \size {\paren {1 + \dfrac 1 n} - 1} < \epsilon$
But we have:














\(\ds \size {\paren {1 + \dfrac 1 n} - 1}\)

\(=\)







\(\ds \size {\dfrac 1 n}\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 n\)





as $n > 0$



Hence the requirement is now to find a value of $N \in \R$ such that:

$\forall n > N: \dfrac 1 n < \epsilon$
From Reciprocal Function is Strictly Decreasing:

$\dfrac 1 n < \epsilon \implies n > \dfrac 1 \epsilon$
So choosing $N = \dfrac 1 \epsilon$ we have that:

$\forall n > N: n > \dfrac 1 \epsilon$
and so:

$\forall n > \dfrac 1 \epsilon: \size {\paren {1 + \dfrac 1 n} - 1} < \epsilon$
Hence the result.
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 4$: Convergent Sequences: $\S 4.5$: Example




