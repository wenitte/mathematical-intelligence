# 

Source: https://proofwiki.org/wiki/Cauchy%27s_Convergence_Criterion/Complex_Numbers/Lemma_1


This page has been identified as a candidate for refactoring of medium complexity.In particular: Extract this into a second definition of Definition:Complex Cauchy Sequence.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.


Lemma for Cauchy's Convergence Criterion on Complex Numbers
Let $\sequence {z_n}$ be a complex sequence.
Let $\NN$ be the domain of $\sequence {z_n}$.
Let $x_n = \map \Re {z_n}$ for every $n \in \NN$.
Let $y_n = \map \Im {z_n}$ for every $n \in \NN$.

Then $\sequence {z_n}$ is a (complex) Cauchy sequence if and only if $\sequence {x_n}$ and $\sequence {y_n}$ are (real) Cauchy sequences.


Proof
Necessary Condition
Let $\sequence {z_n}$ be a Cauchy sequence.
This means that, for a given $\epsilon > 0$:

$\exists N: \forall m, n \in \NN: m, n \ge N: \cmod {z_n - z_m} < \epsilon$

We have, for every $m, n \ge N$:














\(\ds \cmod {x_n − x_m}\)

\(=\)







\(\ds \cmod {\map \Re {z_n − z_m} }\)




















\(\ds \)

\(\le\)







\(\ds \cmod {z_n − z_m}\)





Modulus Larger than Real Part














\(\ds \)

\(<\)







\(\ds \epsilon\)









Thus $\sequence {x_n}$ is a Cauchy sequence by definition.

A similar argument shows that $\sequence {y_n}$ is a Cauchy sequence.
$\Box$


Sufficient Condition
Let $\sequence {x_n}$ and $\sequence {y_n}$ be Cauchy sequences.
This means for $\sequence {x_n}$ that, for a given $\epsilon > 0$:

$\exists N_1: \forall m, n \in \NN: m, n \ge N_1: \cmod {x_n - x_m} < \dfrac \epsilon 2$
Also, for $\sequence {y_n}$:

$\exists N_2: \forall m, n \in \NN: m, n \ge N_2: \cmod {y_n - y_m} < \dfrac \epsilon 2$

Let $N = \max \paren {N_1, N_2}$.
Let $i = \sqrt {-1}$ denote the imaginary unit.
We have, for every $m, n \ge N$:














\(\ds \cmod {z_n − z_m}\)

\(=\)







\(\ds \cmod {x_n + i y_n − \paren {x_m + i y_m} }\)





as $z_n = \map \Re {z_n} + i \map \Im {z_n}$ and $z_m = \map \Re {z_m} + i \map \Im {z_m}$














\(\ds \)

\(=\)







\(\ds \cmod {x_n − x_m + i \paren {y_n − y_m} }\)




















\(\ds \)

\(\le\)







\(\ds \cmod {x_n − x_m} + \cmod {i\paren {y_n − y_m} }\)





Triangle Inequality for Complex Numbers














\(\ds \)

\(=\)







\(\ds \cmod {x_n − x_m} + \cmod {y_n − y_m}\)





Definition of Complex Modulus














\(\ds \)

\(<\)







\(\ds \frac \epsilon 2 + \cmod {y_n − y_m}\)





since $\cmod {x_n - x_m} < \dfrac \epsilon 2$














\(\ds \)

\(<\)







\(\ds \frac \epsilon 2 + \frac \epsilon 2\)





since $\cmod {y_n - y_m} < \dfrac \epsilon 2$














\(\ds \)

\(=\)







\(\ds \epsilon\)









Thus $\sequence {z_n}$ is a Cauchy sequence by definition.
$\blacksquare$





