# 

Source: https://proofwiki.org/wiki/Cauchy-Bunyakovsky-Schwarz_Inequality/Inner_Product_Spaces



Theorem
Let $\mathbb K$ be a subfield of $\C$.
Let $V$ be a semi-inner product space over $\mathbb K$.
Let $x, y$ be vectors in $V$.

Then:

$\size {\innerprod x y}^2 \le \innerprod x x \innerprod y y$


Proof 1
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


Proof 2
This proof assumes that $V$ is a semi-inner product space over $\R$.
Then for all $x, y \in V$, we have $\innerprod x y = \innerprod y x$ by property $(1')$ of semi-inner products.
Define $f_{x, y}: \R \to \R_{\ge 0}$ by:

$\map {f_{x, y} } \lambda = \innerprod {x - \lambda y} {x - \lambda y}$
Then by property $(4)$ of semi-inner product:

$\forall \lambda \in \R: \map {f_{x, y} } \lambda \ge 0$
For all $\lambda \in \R$, it follows that:














\(\ds \map {f_{x, y} } \lambda\)

\(=\)







\(\ds \innerprod {x - \lambda y} {x - \lambda y}\)




















\(\ds \)

\(=\)







\(\ds \innerprod x x + \innerprod x {-\lambda y} + \innerprod {-\lambda y} x + \innerprod {-\lambda y} {-\lambda y}\)





Property $(3)$ of Semi-Inner Product














\(\ds \)

\(=\)







\(\ds \innerprod x x - 2 \lambda \innerprod x y + \lambda^2 \innerprod y y\)





Properties $(1')$ and $(2)$ of Semi-Inner Product














\(\ds \)

\(=\)







\(\ds a \lambda^2 + b \lambda + c\)









where we have put $a = \innerprod y y$, $b = -2 \innerprod x y$, and $c = \innerprod x x$.
Then $f_{x, y}$ is a quadratic polynomial which satisfies $\map {f_{x, y} } \lambda \ge 0$.
Hence $f_{x, y}$ has at most one distinct real root.
From Solution to Quadratic Equation, it follows that the discriminant $\Delta$ satisfies:

$\Delta = b^2 - 4 a c \le 0$
Therefore:

$4 \innerprod x y^2 - 4 \innerprod x x \innerprod y y \le 0$
which we rearrange as:

$\size {\innerprod x y}^2 = \innerprod x y^2 \le \innerprod x x \innerprod y y$
$\blacksquare$


Also known as
The Cauchy-Bunyakovsky-Schwarz Inequality in its various form is also known as:

the Cauchy-Schwarz-Bunyakovsky Inequality
the Cauchy-Schwarz Inequality
Schwarz's Inequality or the Schwarz Inequality
Bunyakovsky's Inequality or Buniakovski's Inequality.
For brevity, it is sometimes referred to by the abbreviations CS inequality or CBS inequality.


Source of Name
This entry was named for Augustin Louis Cauchy, Karl Hermann Amandus Schwarz and Viktor Yakovlevich Bunyakovsky.


Sources
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): Cauchy-Schwarz inequality or Buniakovski's inequality
1990: John B. Conway: A Course in Functional Analysis (2nd ed.) ... (previous) ... (next): $\text{I}$ Hilbert Spaces: $\S 1.$ Elementary Properties and Examples: $1.4$ The Cauchy-Bunyakovsky-Schwarz Inequality
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): Cauchy-Schwarz inequality




