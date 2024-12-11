# 

Source: https://proofwiki.org/wiki/Absolute_Value_is_Many-to-One

Theorem
Let $f: \R \to \R$ be the absolute value function:

$\forall x \in \R:  \map f x = \begin{cases}
x & : x \ge 0 \\
-x & : x < 0
\end{cases}$
Then $f$ is a many-to-one relation.


Proof
Aiming for a contradiction, suppose $f$ is not a many-to-one relation.
Then there exists $y_1 \in \R$ and $y_2 \in \R$ where $y_1 \ne y_2$ such that:

$\exists x \in \R: \map f x = y_1, \map f x = y_2$
There are two possibilities:




\(\text {(1)}: \quad\)









\(\ds x\)

\(\ge\)







\(\ds 0\)










\(\text {(2)}: \quad\)









\(\ds x\)

\(<\)







\(\ds 0\)










Suppose $x \ge 0$.
Then:














\(\ds y_1 = \map f x\)

\(=\)







\(\ds x\)




















\(\ds y_2 = \map f x\)

\(=\)







\(\ds x\)









That is:

$y_2 = y_1 = x$

Suppose $x < 0$.
Then:














\(\ds y_1 = \map f {x_1}\)

\(=\)







\(\ds -x\)




















\(\ds y_2 = \map f {x_2}\)

\(=\)







\(\ds -x\)









That is:

$y_2 = y_1 = -x$
So by Proof by Cases we have that $y_1 = y_2$ whatever $x$ may be.

This contradicts our assertion that $y_1 \ne y_2$.
Hence it follows by Proof by Contradiction that $f$ is many-to-one.
$\blacksquare$


Sources
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 4$. Relations; functional relations; mappings: Exercise $1$




