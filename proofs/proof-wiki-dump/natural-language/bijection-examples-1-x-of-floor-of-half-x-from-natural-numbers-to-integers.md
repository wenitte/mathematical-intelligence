# 

Source: https://proofwiki.org/wiki/Bijection/Examples/-1%5Ex_of_Floor_of_Half_x_from_Natural_Numbers_to_Integers

Example of Bijection
Let $f: \N \to \Z$ be the mapping defined from the natural numbers to the integers as:

$\forall x \in \N: f \paren x = \paren {-1}^x \floor {\dfrac x 2}$
Then $f$ is a bijection.


Proof
Let $x_1, x_2 \in \N$.
Suppose $f \paren {x_1} = f \paren {x_2}$.
Then, for a start:

$\paren {-1}^{x_1} = \paren {-1}^{x_2}$
and so $x_1$ and $x_2$ are either both even or both odd.

Suppose $x_1$ and $x_2$ are both even.
Then:














\(\ds f \paren {x_1}\)

\(=\)







\(\ds f \paren {x_2}\)




















\(\ds f \paren {2 m}\)

\(=\)







\(\ds f \paren {2 n}\)





for some $m, n \in \N$








\(\ds \leadsto \ \ \)





\(\ds \paren {-1}^{2 m} \floor {\dfrac {2 m} 2}\)

\(=\)







\(\ds \paren {-1}^{2 n} \floor {\dfrac {2 n} 2}\)














\(\ds \leadsto \ \ \)





\(\ds \floor m\)

\(=\)







\(\ds \floor n\)














\(\ds \leadsto \ \ \)





\(\ds m\)

\(=\)







\(\ds n\)














\(\ds \leadsto \ \ \)





\(\ds 2 m\)

\(=\)







\(\ds 2 n\)














\(\ds \leadsto \ \ \)





\(\ds x_1\)

\(=\)







\(\ds x_2\)










Suppose $x_1$ and $x_2$ are both odd.
Then:














\(\ds f \paren {x_1}\)

\(=\)







\(\ds f \paren {x_2}\)




















\(\ds f \paren {2 m + 1}\)

\(=\)







\(\ds f \paren {2 n + 1}\)





for some $m, n \in \N$








\(\ds \leadsto \ \ \)





\(\ds \paren {-1}^{2 m + 1} \floor {\dfrac {2 m + 1} 2}\)

\(=\)







\(\ds \paren {-1}^{2 n + 1} \floor {\dfrac {2 n + 1} 2}\)














\(\ds \leadsto \ \ \)





\(\ds -1 \floor {m + \dfrac 1 2}\)

\(=\)







\(\ds -1 \floor {n + \dfrac 1 2}\)














\(\ds \leadsto \ \ \)





\(\ds m\)

\(=\)







\(\ds n\)














\(\ds \leadsto \ \ \)





\(\ds 2 m + 1\)

\(=\)







\(\ds 2 n + 1\)














\(\ds \leadsto \ \ \)





\(\ds x_1\)

\(=\)







\(\ds x_2\)










Thus:

$\forall x_1, x_2 \in \N: f \paren {x_1} = f \paren {x_2} \implies x_1 = x_2$
and so $f$ is an injection by definition.
$\Box$

Let $y \in \Z$ such that $y \ge 0$.
Consider the natural number $x = 2 y$.
Then:














\(\ds f \paren x\)

\(=\)







\(\ds \paren {-1}^{2 y} \floor {\dfrac {2 y} 2}\)





Definition of $f$














\(\ds \)

\(=\)







\(\ds \floor y\)




















\(\ds \)

\(=\)







\(\ds y\)









Thus:

$\forall y \in \Z_{\ge 0}: \exists x \in \N: f \paren x = y$

Let $y \in \Z$ such that $y < 0$.
Consider the natural number $x = 2 \paren {-y} + 1$.
Then:














\(\ds f \paren x\)

\(=\)







\(\ds \paren {-1}^{2 \paren {-y} + 1} \floor {\dfrac {2 \paren {-y} + 1} 2}\)





Definition of $f$














\(\ds \)

\(=\)







\(\ds -\floor {\paren {-y} + \dfrac 1 2}\)




















\(\ds \)

\(=\)







\(\ds y\)









Thus:

$\forall y \in \Z_{<0}: \exists x \in \N: f \paren x = y$

Thus by definition $f$ is a surjection by definition.
$\Box$

Thus $f$ is both an injection and a surjection, and so by definition a bijection.
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $4$: Mappings: Exercise $5 \ \text{(b)}$




