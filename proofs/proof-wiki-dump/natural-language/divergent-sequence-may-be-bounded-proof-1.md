# 

Source: https://proofwiki.org/wiki/Divergent_Sequence_may_be_Bounded/Proof_1

Theorem
While every Convergent Sequence is Bounded, it does not follow that every bounded sequence is convergent.

That is, there exist bounded sequences which are divergent.


Proof
Let $\sequence {x_n}$ be the sequence in $\R$ which forms the basis of Grandi's series, defined as:

$x_n = \paren {-1}^n$
It is clear that $\sequence {x_n}$ is bounded: above by $1$ and below by $-1$.

Aiming for a contradiction, suppose $x_n \to l$ as $n \to \infty$.
Let $\epsilon > 0$.
Then $\exists N \in \R: \forall n > N: \size {\paren {-1}^n - l} < \epsilon$.
But there are values of $n > N$ for which $\paren {-1}^n = \pm 1$.
It follows that $\size {1 - l} < \epsilon$ and $\size {-1 - l} < \epsilon$.

From the Triangle Inequality for Real Numbers, we have:














\(\ds 2\)

\(=\)







\(\ds \size {1 - \paren {-1} }\)




















\(\ds \)

\(\le\)







\(\ds \size {1 - l} + \size {l - \paren {-1} }\)




















\(\ds \)

\(<\)







\(\ds 2 \epsilon\)









This is a contradiction whenever $\epsilon < 1$.
Thus $\sequence {x_n}$ has no limit and, while definitely bounded, is unmistakably divergent.
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 4$: Convergent Sequences: $\S 4.27$: Example




