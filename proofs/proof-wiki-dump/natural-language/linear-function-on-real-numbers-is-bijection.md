# 

Source: https://proofwiki.org/wiki/Linear_Function_on_Real_Numbers_is_Bijection

Theorem
Let $a, b \in \R$ be real numbers.
Let $f: \R \to \R$ be the real function defined as:

$\forall x \in \R: \map f x = a x + b$

Then $f$ is a bijection if and only if $a \ne 0$.


Proof
Let $a \ne 0$.
Let $y = \map f x$.














\(\ds y\)

\(=\)







\(\ds \map f x\)




















\(\ds \)

\(=\)







\(\ds a x + b\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds \dfrac {y - b} a\)









and so:

$\forall y \in \R: \exists x \in \R; y = \map f x$
demonstrating that $f$ is surjective.

Then:














\(\ds \map f {x_1}\)

\(=\)







\(\ds \map f {x_2}\)














\(\ds \leadsto \ \ \)





\(\ds a x_1 + b\)

\(=\)







\(\ds a x_2 + b\)














\(\ds \leadsto \ \ \)





\(\ds a x_1\)

\(=\)







\(\ds a x_2\)














\(\ds \leadsto \ \ \)





\(\ds x_1\)

\(=\)







\(\ds x_2\)





as $a \ne 0$



demonstrating that $f$ is injective.

Thus $f$ is a bijection by definition.
$\Box$

Let $a = 0$.
Then:

$\forall x \in \R: \map f x = b$
Thus for example:

$\map f 1 = \map f 2$
and $f$ is trivially not injective.
Also:

$\forall y \in \R: y \ne b \implies \nexists x \in \R: \map f x = y$
and $f$ is equally trivially not surjective either.

Thus $f$ is not a bijection by definition.
$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): Chapter $3$. Mappings: Exercise $4$




