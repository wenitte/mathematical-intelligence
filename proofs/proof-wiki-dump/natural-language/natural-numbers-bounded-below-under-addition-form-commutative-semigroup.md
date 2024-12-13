# 

Source: https://proofwiki.org/wiki/Natural_Numbers_Bounded_Below_under_Addition_form_Commutative_Semigroup

Theorem
Let $m \in \N$ where $\N$ is the set of natural numbers.
Let $M \subseteq \N$ be defined as:

$M := \set {x \in \N: x \ge m}$
That is, $M$ is the set of all natural numbers greater than or equal to $m$.
Then the algebraic structure $\struct {M, +}$ is a commutative semigroup.


Proof
We have that:

Natural Number Addition is Associative
Natural Number Addition is Commutative
From Restriction of Associative Operation is Associative, $+$ is associative on $\struct {M, +}$.
From Restriction of Commutative Operation is Commutative, $+$ is commutative on $\struct {M, +}$.
It remains to be shown that $+$ is closed on $\struct {M, +}$.

Let $a, b \in M$.
Then $\exists r, s \in \N: a = m + r, b = m + s$.
Thus:














\(\ds a + b\)

\(=\)







\(\ds \paren {m + r} + \paren {m + s}\)




















\(\ds \)

\(=\)







\(\ds m + \paren {m + r + s}\)




















\(\ds \)

\(\ge\)







\(\ds m\)









So $a + b \in M$ and so $+$ is closed on $\struct {M, +}$.
$\blacksquare$





