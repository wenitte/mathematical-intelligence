# 

Source: https://proofwiki.org/wiki/Integer_Multiples_Greater_than_Positive_Integer_Closed_under_Addition

Theorem
Let $n \Z$ be the set of integer multiples of $n$.
Let $p \in \Z: p \ge 0$ be a positive integer.
Let $S \subseteq n \Z$  be defined as:

$S := \set {x \in n \Z: x > p}$
that is, the set of integer multiples of $n$ greater than $p$.

Then the algebraic structure $\struct {S, +}$ is closed under addition.


Proof
Let $x, y \in S$.
From Integer Multiples Closed under Addition, $x + y \in n \Z$.
As $x, y > p$ we have that:

$\exists r \in \Z_{>0}: x = p + r$
$\exists s \in \Z_{>0}: y = p + s$
Thus it follows that:














\(\ds x + y\)

\(=\)







\(\ds \paren {p + r} + \paren {p + s}\)




















\(\ds \)

\(=\)







\(\ds 2 p + r + s\)




















\(\ds \)

\(>\)







\(\ds p\)





as $r, s > 0$



So $x + y > p$ and $x + y \in n \Z$.
Hence by definition $x + y \in S$, and so $S$ is closed under addition.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 8$: Compositions Induced on Subsets: Example $8.1$




