# 

Source: https://proofwiki.org/wiki/Odd_Integers_under_Multiplication_do_not_form_Group

Theorem
Let $S$ be the set of odd integers:

$S = \set {x \in \Z: \exists n \in \Z: x = 2 n + 1}$
Let $\struct {S, \times}$ denote the algebraic structure formed by $S$ under the operation of multiplication.

Then $\struct {S, \times}$ is not a group.


Proof
It is to be demonstrated that $\struct {S, \times}$ does not satisfy the group axioms.

First it is noted that Integer Multiplication is Closed.
Then from Odd Number multiplied by Odd Number is Odd, $S$ is closed under $\times$.
Thus $\struct {S, \times}$ fulfils Group Axiom $\text G 0$: Closure.

From Integer Multiplication is Associative, we have that $\times$ is associative on $S$.
Thus $\struct {S, \times}$ fulfils Group Axiom $\text G 1$: Associativity.

Then we have that:

$\forall x \in S: 1 \times x = x = x \times 1$
and as $1 \in S$ it follows that $1$ is the identity element of $\struct {S, \times}$
Thus $\struct {S, \times}$ fulfils Group Axiom $\text G 2$: Existence of Identity Element.

Now consider $3 \in S$.
There exists no $x \in S$ such that $3 \times x = 1$.
Thus $x$ has no inverse element in $S$.
Thus $\struct {S, \times}$ does not fulfil Group Axiom $\text G 3$: Existence of Inverse Element.

Thus it has been demonstrated that $\struct {S, \times}$ does not satisfy the group axioms.
Hence the result.
$\blacksquare$


Sources
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $1$: Definitions and Examples: Exercise $1 \ \text{(c)}$




