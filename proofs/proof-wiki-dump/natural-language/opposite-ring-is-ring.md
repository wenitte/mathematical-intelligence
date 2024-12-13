# 

Source: https://proofwiki.org/wiki/Opposite_Ring_is_Ring

Theorem
Let $\struct {R, +, \times}$ be a ring.
Let $\struct {R, +, *}$ be the opposite ring of $\struct {R, +, \times}$.

Then $\struct {R, +, *}$ is a ring.


Proof
By definition of the opposite ring:

$\forall x, y \in R: x * y = y \times x$.

By definition of the ring $R$, $\struct {R, +}$ is an abelian group.
To complete the proof, it remains to be shown that $\struct {R, *}$ is a semigroup.
That is, it remains to show that $\struct{R, *}$ is associative.

Let $a, b, c \in R$.














\(\ds a * \paren {b * c}\)

\(=\)







\(\ds \paren{b * c} \times a\)





Definition of $*$














\(\ds \)

\(=\)







\(\ds \paren {c \times b} \times a\)





Definition of $*$














\(\ds \)

\(=\)







\(\ds c \times \paren {b \times a}\)





Ring Axiom $\text M1$: Associativity of Product














\(\ds \)

\(=\)







\(\ds c \times \paren {a * b}\)





Definition of $*$














\(\ds \)

\(=\)







\(\ds \paren {a * b} * c\)





Definition of $*$



The result follows.
$\blacksquare$


Sources
2003: P.M. Cohn: Basic Algebra: Groups, Rings and Fields ... (previous) ... (next): Chapter $4$: Rings and Modules: $\S 4.1$: The Definitions Recalled




