# 

Source: https://proofwiki.org/wiki/Natural_Numbers_under_Multiplication_do_not_form_Group



Theorem
The algebraic structure $\struct {\N, \times}$ consisting of the set of natural numbers $\N$ under multiplication $\times$ is not a group.


Proof 1
Aiming for a contradiction, suppose that $\struct {\N, \times}$ is a group.
By the definition of the number $0 \in \N$:

$\forall n \in \N: n \times 0 = 0 = 0 \times n$
Thus $0$ is a zero in the abstract algebraic sense.
From Group with Zero Element is Trivial, $\struct {\N, \times}$ is the trivial group.
But $\N$ contains other elements besides $0$.
From this contradiction it follows that $\struct {\N, \times}$ is not a group.
$\blacksquare$


Proof 2
Aiming for a contradiction, suppose that $\struct {\N, \times}$ is a group.
We have that $1 \times 1 = 1$ and so is idempotent.
From Identity is only Idempotent Element in Group it follows that $1$ is the identity of $\struct {\N, \times}$.
Let $x \in \N$ such that $x \ne 0$ and $x \ne 1$.
There exists no $y \in \N$ such that $x \times y = 1$
Hence $\struct {\N, \times}$ does not fulfil Group Axiom $\text G 3$: Existence of Inverse Element.
Hence by Proof by Contradiction $\struct {\N, \times}$ is not a group.


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 7$: Semigroups and Groups: Example $7.2$




