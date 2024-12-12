# 

Source: https://proofwiki.org/wiki/Bijection/Examples/ax%2Bb_on_Real_Numbers

Example of Bijection
Let $a, b \in \R$ such that $a \ne 0$.
Let $f_{a, b}: \R \to \R$ be the mapping defined on the set of real numbers as:

$\forall x \in \R: \map f x = a x + b$
Then $f$ is a bijection.


Proof
Let $x_1$ and $x_2$ be real numbers.
Then:














\(\ds \map f {x_1}\)

\(=\)







\(\ds \map f {x_2}\)





by supposition








\(\ds \leadsto \ \ \)





\(\ds a x_1 + b\)

\(=\)







\(\ds a x_2 + b\)





Definition of $f$








\(\ds \leadsto \ \ \)





\(\ds x_1\)

\(=\)







\(\ds x_2\)









Hence by definition $f$ is an injection.
$\Box$

Let $y \in \R$.
Let $x = \dfrac {y - b} a$.
We have that:

$x \in \R$
$\map f x = y$
Hence by definition $f$ is a surjection.
$\Box$

Thus $f$ is both an injection and a surjection, and so a bijection.
$\blacksquare$





