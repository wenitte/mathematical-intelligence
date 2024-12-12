# 

Source: https://proofwiki.org/wiki/Binomial_Theorem/Ring_Theory



Theorem
Let $\struct {R, +, \odot}$ be a ringoid such that $\struct {R, \odot}$ is a commutative semigroup.

Let $n \in \Z: n \ge 2$.
Then:

$\ds \forall x, y \in R: \odot^n \paren {x + y} = \odot^n x + \sum_{k \mathop = 1}^{n - 1} \binom n k \paren {\odot^{n - k} x} \odot \paren {\odot^k y} + \odot^n y$
where $\dbinom n k = \dfrac {n!} {k! \ \paren {n - k}!}$ (see Binomial Coefficient).

If $\struct {R, \odot}$ has an identity element $e$, then:

$\ds \forall x, y \in R: \odot^n \paren {x + y} = \sum_{k \mathop = 0}^n \binom n k \paren {\odot^{n - k} x} \odot \paren {\odot^k y}$


Proof
First we establish the result for when $\struct {R, \odot}$ has an identity element $e$.
For $n = 0$ we have:

$\ds \odot^0 \paren {x + y} = e = {0 \choose 0} \paren {\odot^{0 - 0} x} \odot \paren {\odot^0 y} = \sum_{k \mathop = 0}^0 {0 \choose k} x^{0 - k} \odot y^k$

For $n = 1$ we have:

$\ds \odot^1 \paren {x + y} = \paren {x + y} = {0 \choose 1} \paren {\odot^{1 - 0} x} \odot \paren {\odot^0 y} + {1 \choose 1} \paren {\odot^{1 - 1} x} \odot \paren {\odot^1 y} = \sum_{k \mathop = 0}^1 {1 \choose k} x^{1 - k} \odot y^k$


Basis for the Induction
For $n = 2$ we have:














\(\ds \odot^2 \paren {x + y}\)

\(=\)







\(\ds \paren {x + y} \odot \paren {x + y}\)




















\(\ds \)

\(=\)







\(\ds \paren {x \odot x} + \paren {x \odot y}+ \paren {y \odot x} + \paren {y \odot y}\)




















\(\ds \)

\(=\)







\(\ds \paren {x \odot x} + 2 \paren {x \odot y} + \paren {y \odot y}\)





$+$ is commutative in $R$














\(\ds \)

\(=\)







\(\ds \odot^2 x + 2 \paren {\odot^1 x} \odot \paren {\odot^1 y} + \odot^2 y\)




















\(\ds \)

\(=\)







\(\ds \odot^2 x + \dbinom 2 1 \paren {\odot^{2 - 1} x} \odot \paren {\odot^1 y} + \odot^2 y\)









This is the basis for the induction.


Induction Hypothesis
This is our inductive hypothesis:

$\ds \forall n \ge 2: \odot^n \paren {x + y} = \odot^n x + \sum_{k \mathop = 1}^{n - 1} \dbinom n k \paren {\odot^{n - k} x} \odot \paren {\odot^k y} + \odot^n y$


Induction Step
This is the induction step:














\(\ds \odot^{n + 1} \paren {x + y}\)

\(=\)







\(\ds \paren {x + y} \odot \paren {\odot^n \paren {x + y} }\)




















\(\ds \)

\(=\)







\(\ds x \odot \paren {\odot^n x + \sum_{k \mathop = 1}^{n - 1} \binom n k \paren {\odot^{n - k} x} \odot \paren {\odot^k y} + \odot^n y}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds ~ y \odot \paren {\odot^n x + \sum_{k \mathop = 1}^{n - 1} \binom n k \paren {\odot^{n - k} x} \odot \paren {\odot^k y} + \odot^n y}\)





Inductive Hypothesis














\(\ds \)

\(=\)







\(\ds \odot^{n + 1} x + \sum_{k \mathop = 1}^{n - 1} \binom n k \paren {\odot^{n + 1 - k} x} \odot \paren {\odot^k y} + x \odot \paren {\odot^n y}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds ~ y \odot \paren {\odot^n x} + \sum_{k \mathop = 1}^{n - 1} \binom n k \paren {\odot^{n - k} x} \odot \paren {\odot^{k + 1} y} + \odot^{n + 1} y\)




















\(\ds \)

\(=\)







\(\ds \odot^{n + 1} x + \sum_{k \mathop = 1}^n \binom n k \paren {\odot^{n + 1 - k} x} \odot \paren {\odot^k y} + \sum_{k \mathop = 0}^{n - 1} \binom n k \paren {\odot^{n - k} x} \odot \paren {\odot^{k + 1} y} + \odot^{n + 1} y\)




















\(\ds \)

\(=\)







\(\ds \odot^{n + 1} x + \sum_{k \mathop = 1}^n \binom n k \paren {\odot^{n + 1 - k} x} \odot \paren {\odot^k y} + \sum_{k \mathop = 1}^n \binom n {k - 1} \paren {\odot^{n - k} x} \odot \paren {\odot^{k + 1} y} + \odot^{n + 1} y\)




















\(\ds \)

\(=\)







\(\ds \odot^{n + 1} x + \sum_{k \mathop = 1}^n \binom {n + 1} k \paren {\odot^{n + 1 - k} x} \odot \paren {\odot^k y} + \odot^{n + 1} y\)





Pascal's Rule



The result follows by the Principle of Mathematical Induction.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $21$. Rings and Integral Domains: Theorem $21.1$




