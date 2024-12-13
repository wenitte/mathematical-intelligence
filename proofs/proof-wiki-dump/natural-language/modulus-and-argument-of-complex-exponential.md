# 

Source: https://proofwiki.org/wiki/Modulus_and_Argument_of_Complex_Exponential



Theorem
Let $z \in \C$ be a complex number.
Let $\hointr a {a + 2 \pi}$ be a half open interval of length $2 \pi$.
Let $r \in \hointr 0 {+\infty}$ and $\theta \in \hointr a {a + 2 \pi}$.

Then:

$r = \cmod z$ and $\theta = \map \arg z$
if and only if:

$z = r e^{i \theta}$
where:

$\cmod z$ denotes the modulus of $z$
$\map \arg z$ denotes the argument of $z$
$x \mapsto e^x$ is the complex exponential function.

If $z = 0$ or $r = 0$, then $\theta$ may be any number in $\hointr a {a + 2 \pi}$.


Proof
Necessary condition
Let $r = \cmod z$.
If $z = 0$, we have:

$z = 0e^{i \theta} = re^{i \theta}$
Suppose $z \ne 0$ and $\theta = \map \arg z$.
By definition of argument, the following two equations hold:

$(1): \quad \dfrac {\map \Re z} r = \cos \theta$
$(2): \quad \dfrac {\map \Im z} r = \sin \theta$
where:

$\map \Re z$ denotes the real part of $z$
$\map \Im z$ denotes the imaginary part of $z$.
Then:














\(\ds z\)

\(=\)







\(\ds \map \Re z + i \map \Im z\)





Definition of Complex Number














\(\ds \)

\(=\)







\(\ds r \cos \theta + i r \sin \theta\)





from $(1)$ and $(2)$














\(\ds \)

\(=\)







\(\ds r \paren {\cos \theta + i \sin \theta}\)




















\(\ds \)

\(=\)







\(\ds re^{i \theta}\)





Euler's Formula



$\Box$


Sufficient condition
Let $z = re^{i \theta}$.
From the equations above, we find:

$\map \Re {re^{i \theta} } = r \cos \theta$
$\map \Im {re^{i \theta} } = r \sin \theta$
Then:














\(\ds \cmod {r e^{i \theta} }\)

\(=\)







\(\ds \sqrt {\paren {r \cos \theta}^2 + \paren {r \sin \theta}^2}\)





Definition of Modulus of Complex Number














\(\ds \)

\(=\)







\(\ds r \sqrt {\cos^2 \theta + \sin^2 \theta}\)





as $r \ge 0$














\(\ds \)

\(=\)







\(\ds r\)





Sum of Squares of Sine and Cosine



If $r \ne 0$, we find $\map \arg {r e^{i \theta} }$ by solving the two equations by definition of argument:

$(1): \quad \dfrac {r \cos \theta} r = \map \cos {\map \arg {r e^{i \theta} } }$
$(2): \quad \dfrac {r \sin \theta} r = \map \sin {\map \arg {r e^{i \theta} } }$
We find:

$\map \arg {r e^{i \theta} } = \theta$
$\blacksquare$


Sources
2001: Christian Berg: Kompleks funktionsteori $\S 1.5$




