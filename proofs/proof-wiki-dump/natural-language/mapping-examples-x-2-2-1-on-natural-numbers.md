# 

Source: https://proofwiki.org/wiki/Mapping/Examples/(x-2)%5E2%2B1_on_Natural_Numbers

Example of Mapping which is neither Injective nor Surjective
Let $f: \N \to \N$ be the mapping defined on the set of natural numbers as:

$\forall x \in \N: \map f x = \paren {x - 2}^2 + 1$
Then $f$ has an infinite image set, but is neither a surjection nor an injection.


Proof
We have that:

$17 = \paren {6 - 2}^2 + 1$
and so $17 = \map f 6$.
That is:

$17 \in \Img f$

Let $y \in \Img f$ such that $y \ge 17$.
Then:

$\exists x \in \N: y = \map f x = \paren {x - 2}^2 + 1$
such that $x > 6$.

Now consider:














\(\ds \map f {x + 1}\)

\(=\)







\(\ds \paren {\paren {x + 1} - 2}^2 + 1\)




















\(\ds \map f {x + 1}\)

\(=\)







\(\ds \paren {\paren {x - 2} + 1}^2 + 1\)




















\(\ds \)

\(=\)







\(\ds \paren {\paren {x - 2}^2 + 2 \paren {x - 2} + 1}\)




















\(\ds \)

\(=\)







\(\ds \paren {\paren {x - 2}^2 + 1} + 2 \paren {x - 2} + 1\)




















\(\ds \)

\(=\)







\(\ds y + 2 \paren {x - 2} + 1\)




















\(\ds \)

\(>\)







\(\ds y\)









That is for every $y \in \Img f$ such that $y \ge 17$, there exists $y' \in \Img f$ such that $y' > 5$.
Thus $f$ is unbounded above.
It follows that $\Img f$ is an infinite set.
$\Box$

For all $x \in \N$ we have that $\paren {x - 2}^2 \ge 0$.
Thus:

$\paren {x - 2}^2 + 1 \ge 1$
Consider the natural number $y = 0$.
Then there exists no $x \in \N$ such that $\map f x = y$.
Thus, by definition, $f$ is not a surjection.
$\Box$

Let $x_1 = -2, x_2 = 6$.
Then:














\(\ds \map f {x_1}\)

\(=\)







\(\ds \paren {-2 - 2}^2 + 1\)





Definition of $f$














\(\ds \)

\(=\)







\(\ds \paren {-4}^2 + 1\)




















\(\ds \)

\(=\)







\(\ds 17\)










while:














\(\ds \map f {x_2}\)

\(=\)







\(\ds \paren {6 - 2}^2 + 1\)





Definition of $f$














\(\ds \)

\(=\)







\(\ds 4^2 + 1\)




















\(\ds \)

\(=\)







\(\ds 17\)










Thus we have found $x_1, x_2 \in \Dom f$ such that $x_1 \ne x_2$ but that $\map f {x_1} = \map f {x_2}$.
Thus:
Thus by definition $f$ is not an injection.
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $4$: Mappings: Exercise $5 \ \text{(a)}$




