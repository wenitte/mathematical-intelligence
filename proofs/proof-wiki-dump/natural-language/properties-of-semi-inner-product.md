# 

Source: https://proofwiki.org/wiki/Properties_of_Semi-Inner_Product


This page has been identified as a candidate for refactoring of basic complexity.In particular: 2 resultsUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.


Theorem
Let $V$ be a vector space over $\Bbb F \in \set {\R, \C}$.
Let $\innerprod \cdot \cdot$ be a semi-inner product on $V$.
Denote, for $x \in V$, $\norm x := \innerprod x x^{1 / 2}$.

Then, $\forall x, y \in V, a \in \Bbb F$:

$(1): \quad \norm {x + y} \le \norm x + \norm y$
$(2): \quad \norm {a x} = \size a \norm x$


Proof
Proof of $(1)$
For $x, y \in V$, compute:














\(\ds \norm {x + y}^2\)

\(=\)







\(\ds \innerprod {x + y} {x + y}\)





Definition of $\norm \cdot$














\(\ds \)

\(=\)







\(\ds \innerprod x x + \innerprod x y + \innerprod y x + \innerprod y y\)





Linearity of $\innerprod \cdot \cdot$














\(\ds \)

\(\le\)







\(\ds \innerprod x x + \sqrt {\innerprod x x \innerprod y y} + \sqrt {\innerprod y y \innerprod x x} + \innerprod y y\)





Cauchy-Bunyakovsky-Schwarz Inequality for Inner Product Spaces














\(\ds \)

\(=\)







\(\ds \norm x^2 + 2 \norm x \norm y + \norm y^2\)





Definition of $\norm \cdot$














\(\ds \)

\(=\)







\(\ds \paren {\norm x + \norm y}^2\)









Taking square roots on either side gives the result.
$\Box$


Proof of $(2)$
For $x \in V$, $a \in \Bbb F$, compute:














\(\ds \norm {a x}^2\)

\(=\)







\(\ds \innerprod {a x} {a x}\)





Definition of $\norm \cdot$














\(\ds \)

\(=\)







\(\ds a \innerprod x {a x}\)





Linearity of $\innerprod \cdot \cdot$














\(\ds \)

\(=\)







\(\ds a \overline {\innerprod {a x} x}\)





Conjugate symmetry of $\innerprod \cdot \cdot$














\(\ds \)

\(=\)







\(\ds a \overline a \overline {\innerprod x x}\)





Linearity of $\innerprod \cdot \cdot$














\(\ds \)

\(=\)







\(\ds \size a^2 \norm x^2\)





Modulus in Terms of Conjugate



Taking square roots on either side gives the result.
$\blacksquare$


Sources
1990: John B. Conway: A Course in Functional Analysis (2nd ed.) ... (previous) ... (next): $\text{I}$ Hilbert Spaces: $\S 1.$ Elementary Properties and Examples: Corollary $1.5$




