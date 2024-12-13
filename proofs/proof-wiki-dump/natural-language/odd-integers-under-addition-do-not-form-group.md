# 

Source: https://proofwiki.org/wiki/Odd_Integers_under_Addition_do_not_form_Group

Theorem
Let $S$ be the set of odd integers:

$S = \set {x \in \Z: \exists n \in \Z: x = 2 n + 1}$
Let $\struct {S, +}$ denote the algebraic structure formed by $S$ under the operation of addition.

Then $\struct {S, +}$ is not a group.


Proof
It is to be demonstrated that $\struct {S, +}$ does not satisfy the group axioms.
Let $a$ and $b$ be odd integers.
Then  $a = 2 n + 1$ and $b = 2 m + 1$ for some $m, n \in \Z$.
Then:














\(\ds a + b\)

\(=\)







\(\ds 2 n + 1 + 2 m + 1\)




















\(\ds \)

\(=\)







\(\ds 2 \paren {n + m + 1}\)









and it is seen that $a + b$ is even.
That is:

$a + b \notin S$

Thus $\struct {S, +}$ does not fulfil Group Axiom $\text G 0$: Closure.
Hence the result.
$\blacksquare$


Sources
1968: Ian D. Macdonald: The Theory of Groups ... (previous) ... (next): $\S 1$: Some examples of groups




