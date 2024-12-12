# 

Source: https://proofwiki.org/wiki/Factorization_of_Limit_Ordinals

Theorem
Let $x$ be a limit ordinal.

Then:

$x = \paren {\omega \times y}$ for some $y \in \On$
where $\omega$ is the minimally inductive set.


Proof
By the Division Theorem for Ordinals:

$x = \paren {\omega \times y} + z$
for some unique $y$ and $z \in \omega$.
Aiming for a contradiction, suppose $z \ne 0$.
Because $z \in \omega$, $z$ is not a limit ordinal.
Therefore, by the definition of limit ordinal:

$z = w^+$
for some $w \in \omega$.

But this means that:














\(\ds x\)

\(=\)







\(\ds \paren {\omega \times y} + w^+\)





Division Theorem for Ordinals














\(\ds \)

\(=\)







\(\ds \paren {\paren {\omega \times y} + w}^+\)





Definition of Ordinal Addition



This means that $x$ is the successor of some ordinal.
Hence $x$ cannot be a limit ordinal.

But this contradicts the assumption that $x$ is a limit ordinal.
It follows that $z = 0$.

Therefore:














\(\ds x\)

\(=\)







\(\ds \paren {\omega \times y} + z\)





Division Theorem for Ordinals














\(\ds \)

\(=\)







\(\ds \omega \times y\)





Ordinal Addition by Zero



$\blacksquare$





