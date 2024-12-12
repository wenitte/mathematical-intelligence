# 

Source: https://proofwiki.org/wiki/Cauchy-Bunyakovsky-Schwarz_Inequality/Inner_Product_Spaces/Proof_1

Theorem
Let $\mathbb K$ be a subfield of $\C$.
Let $V$ be a semi-inner product space over $\mathbb K$.
Let $x, y$ be vectors in $V$.

Then:

$\size {\innerprod x y}^2 \le \innerprod x x \innerprod y y$


Proof
Let $x, y \in V$.
Let $\lambda \in \mathbb K$.
Then:














\(\ds 0\)

\(\le\)







\(\ds \innerprod {x - \lambda y} {x - \lambda y}\)





Semi-inner product axioms $\paren {3}$: Non-Negative Definiteness














\(\ds \)

\(=\)







\(\ds \innerprod x x + \innerprod x {-\lambda y} + \innerprod {-\lambda y} x + \innerprod {-\lambda y} {-\lambda y}\)





Semi-inner product axioms $\paren {2}$:  	Sesquilinearity














\(\ds \)

\(=\)







\(\ds \innerprod x x - \lambda^* \innerprod x y - \lambda \innerprod x y^* + \lambda \lambda^* \innerprod y y\)





Semi-inner product axioms $\paren {2}$ and $\paren {1}$



where $\lambda^*$ denotes the complex conjugate of $\lambda$.
(If $\mathbb K$ is a subfield of $\R$ , then $\lambda^* = \lambda$.)

First, suppose $\innerprod y y \ne 0$.
Insert $\lambda = \innerprod x y \innerprod y y^{-1}$ in the inequality:














\(\ds 0\)

\(\le\)







\(\ds \innerprod x x - \innerprod x y^* \paren {\innerprod y y^{-1} }^* \innerprod x y - \innerprod x y \innerprod y y^{-1} \innerprod x y^* + \innerprod x y \innerprod y y^{-1} \innerprod x y^* \paren {\innerprod y y^{-1} }^* \innerprod y y\)





Product of Complex Conjugates














\(\ds \)

\(=\)







\(\ds \innerprod x x - \size {\innerprod x y}^2 \paren {\innerprod y y^{-1} }^* - \size {\innerprod x y}^2 \innerprod y y^{-1} + \size {\innerprod x y}^2 \paren {\innerprod y y^{-1} }^*\)





Modulus in Terms of Conjugate














\(\ds \)

\(=\)







\(\ds \innerprod x x - \size {\innerprod x y}^2 \innerprod y y^{-1}\)










Reorder the inequality to get:

$\size {\innerprod x y}^2 \le \innerprod x x \innerprod y y$
$\Box$

Next, suppose $\innerprod y y = 0$.
By Number Field has Rational Numbers as Subfield, $\Q \subset \mathbb K$.
Let $n \in \N \subset \Q \subset \mathbb K$ be a natural number.
Insert $\lambda = n \innerprod x y$ in the inequality:














\(\ds 0\)

\(\le\)







\(\ds \innerprod x x - n^* \innerprod x y^* \innerprod x y - n \innerprod x y \innerprod x y^* + 0\)





Product of Complex Conjugates














\(\ds \)

\(=\)







\(\ds \innerprod x x - n \innerprod x y^* \innerprod x y - n \innerprod x y \innerprod x y^*\)





Complex Number equals Conjugate iff Wholly Real














\(\ds \)

\(=\)







\(\ds \innerprod x x - 2 n \size {\innerprod x y}^2\)





Modulus in Terms of Conjugate




Rearrange the inequality to get:

$\innerprod x x \ge 2 n \size {\innerprod x y}^2$
If $\size {\innerprod x y}^2 \ne 0$, then:

$\dfrac {\innerprod x x} {2 \size {\innerprod x y}^2} \ge n$
for every $n \in \N$, contradicting the Axiom of Archimedes.
Therefore, by Proof by Contradiction:

$\size {\innerprod x y}^2 = 0$.
Then:

$\size {\innerprod x y}^2 \le 0 = \innerprod x x \innerprod y y$
$\blacksquare$





