# 

Source: https://proofwiki.org/wiki/Partial_Difference_of_Integer_Combinations_is_Integer_Combination

Lemma
Let $a, b \in \Z$ be integers.
Let $S = \set {a x + b y: x, y \in \Z}$ be the set of integer combinations of $a$ and $b$.
Let $u \in S$ and $v \in S$.

Then:

$u \mathop {\dot -} v \in S$
where $\dot -$ denotes the extension of the partial subtraction operator to the integers.


Proof
As both $u, v \in S$, $u$ and $v$ can be expressed as:














\(\ds u\)

\(=\)







\(\ds a x_1 + b y_1\)




















\(\ds v\)

\(=\)







\(\ds a x_2 + b y_2\)









where $x_1, x_2, y_1, y_2$ are integers.

Let $u \ge v$.
Then:














\(\ds u \mathop {\dot -} v\)

\(=\)







\(\ds u - v\)




















\(\ds \)

\(=\)







\(\ds \paren {a x_1 + b y_1} - \paren {a x_2 + b y_2}\)




















\(\ds \)

\(=\)







\(\ds a \paren {x_1 - x_2} + b \paren {y_1 - y_2}\)









As Integer Subtraction is Closed, both $x_1 - x_2$ and $y_1 - y_2$ are integers.
Thus $u \mathop {\dot -} v \in S$.

Let $u < v$.
Then by definition of the partial subtraction operator:

$u \mathop {\dot -} v = 0$
From Set of Integer Combinations includes Zero, $0 \in S$.
Hence the result.
$\blacksquare$


Sources
1982: Martin Davis: Computability and Unsolvability (2nd ed.) ... (previous) ... (next): Appendix $1$: Some Results from the Elementary Theory of Numbers: Lemma $1$




