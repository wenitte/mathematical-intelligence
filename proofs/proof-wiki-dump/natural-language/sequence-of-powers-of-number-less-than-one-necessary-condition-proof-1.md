# 

Source: https://proofwiki.org/wiki/Sequence_of_Powers_of_Number_less_than_One/Necessary_Condition/Proof_1

Theorem
Let $x \in \R$ be such that $\size{x} < 1$.
Let $\sequence {x_n}$ be the sequence in $\R$ defined as $x_n = x^n$.

Then $\sequence {x_n}$ is a null sequence.


Proof
Without loss of generality, assume that $x \ne 0$.
Observe that by hypothesis:

$0 < \size x < 1$
Thus by Ordering of Reciprocals:

$\size x^{-1} > 1$
Define:

$h = \size x^{-1} - 1 > 0$
Then:

$x = \dfrac 1 {1 + h}$
By the binomial theorem, we have that:

$\paren {1 + h}^n = 1 + n h + \cdots + h^n > n h$
because $h > 0$.

By Absolute Value Function is Completely Multiplicative, it follows that:

$0 \le \size {x^n} = \size x^n = \dfrac 1 {\paren {1 + h}^n} < \dfrac 1 {n h}$
From Sequence of Reciprocals is Null Sequence:

$\dfrac 1 n \to 0$ as $n \to \infty$
By the Multiple Rule for Real Sequences:

$\dfrac 1 {n h} \to 0$ as $n \to \infty$
By the Squeeze Theorem for Real Sequences: Corollary:

$\size {x^n} \to 0$
as $n \to \infty$.

Hence the result, by the definition of a limit.

$\blacksquare$

Sources
1953: Walter Rudin: Principles of Mathematical Analysis: $3.20 e$
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 4$: Convergent Sequences: $\S 4.12$: Example




