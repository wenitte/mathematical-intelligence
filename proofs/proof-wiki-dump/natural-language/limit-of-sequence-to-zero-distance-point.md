# 

Source: https://proofwiki.org/wiki/Limit_of_Sequence_to_Zero_Distance_Point



Theorem
Let $S$ be a non-empty subset of $\R$.
Let the distance $\map d {\xi, S} = 0$ for some $\xi \in \R$.

Then there exists a sequence $\sequence {x_n}$ in $S$ such that $\ds \lim_{n \mathop \to \infty} x_n = \xi$.


Corollary 1
If $S$ is bounded above, then there exists a sequence $\sequence {x_n}$ in $S$ such that:

$\ds \lim_{n \mathop \to \infty} x_n = \sup S$


Corollary 2
If $S$ is unbounded above, then there exists a sequence $\sequence {x_n}$ in $S$ such that $x_n \to +\infty$ as $n \to \infty$.


Proof
First it is shown that:

$\forall n \in \N_{>0}: \exists x_n \in S: \size {\xi - x_n} < \dfrac 1 n$
Aiming for a contradiction, suppose that:

$\exists n \in \N_{>0}: \not \exists x \in S: \size {\xi - x} < \dfrac 1 n$
Then $\dfrac 1 n$ is a lower bound of the set $T = \set {\size {\xi - x}: x \in S}$.
This contradicts the assertion that $\map d {\xi, S} = 0$.

We have from Sequence of Powers of Reciprocals is Null Sequence that:

$\ds \lim_{n \mathop \to \infty} \dfrac 1 n = 0$
So as $\size {\xi - x_n} < \dfrac 1 n$ it follows from the Squeeze Theorem for Real Sequences that:

$\ds \lim_{n \mathop \to \infty} x_n = \xi$
Hence the result.
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 4$: Convergent Sequences: Exercise $\S 4.29 \ (6)$




