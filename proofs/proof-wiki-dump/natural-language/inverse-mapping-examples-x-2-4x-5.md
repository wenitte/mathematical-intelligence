# 

Source: https://proofwiki.org/wiki/Inverse_Mapping/Examples/x%5E2-4x%2B5

Examples of Inverse Mappings
Let $f: \R \to \R$ be the real function defined as:

$\forall x \in \R: f \paren x = x^2 - 4 x + 5$

Consider the following bijective restrictions of $f$:














\(\ds f_1: \hointl \gets 2\)

\(\to\)







\(\ds \hointr 1 \to\)




















\(\ds f_2: \hointr 2 \to\)

\(\to\)







\(\ds \hointr 1 \to\)










The inverse of $f_1$ is:

$\forall y \in \hointr 1 \to: \inv {f_1} y = 2 - \sqrt {y - 1}$

The inverse of $f_2$ is:

$\forall y \in \hointr 1 \to: \inv {f_2} y = 2 + \sqrt {y - 1}$


Proof
Let $y = \map f x$.
Then:














\(\ds y\)

\(=\)







\(\ds x^2 - 4 x + 5\)














\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds \paren {\paren {x - 2}^2 - 4} + 5\)




















\(\ds \)

\(=\)







\(\ds \paren {x - 2}^2 + 1\)














\(\ds \leadsto \ \ \)





\(\ds y - 1\)

\(=\)







\(\ds \paren {x - 2}^2\)














\(\ds \leadsto \ \ \)





\(\ds x - 2\)

\(=\)







\(\ds \pm \sqrt {y - 1}\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds 2 \pm \sqrt {y - 1}\)










$f_1$ is the bijective restriction of $f$ where $x \le 2$.
Hence the negative square root is taken of $\sqrt {y - 1}$, and so:

$\inv {f_1} y = 2 - \sqrt {y - 1}$

$f_2$ is the bijective restriction of $f$ where $x \le 2$.
Hence the positive square root is taken of $\sqrt {y - 1}$, and so:

$\inv {f_2} y = 2 + \sqrt {y - 1}$
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $4$: Mappings: Exercise $12 \ \text{(iv)}$




