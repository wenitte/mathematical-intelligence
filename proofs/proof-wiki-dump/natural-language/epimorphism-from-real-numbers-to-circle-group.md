# 

Source: https://proofwiki.org/wiki/Epimorphism_from_Real_Numbers_to_Circle_Group


This page has been identified as a candidate for refactoring of basic complexity.In particular: Invoke link from Homomorphism from Reals to Circle Group and restructure this proof accordinglyUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
Theorem
Let $\struct {K, \times}$ be the circle group, that is:

$K = \set {z \in \C: \cmod z = 1}$
under complex multiplication.
Let $f: \R \to K$ be the mapping from the real numbers to $K$ defined as:

$\forall x \in \R: \map f x = \cos x + i \sin x$

Then $f: \struct {\R, +} \to \struct {K, \times}$ is a group epimorphism.

Its kernel is:

$\map \ker f = \set {2 \pi n: n \in \Z}$


Proof
$f$ is a surjection from ...


A specific link is needed here.In particular: Needs a link to a result specifying that $f$ is surjective (may already exist).You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by searching for it, and adding it here.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{LinkWanted}} from the code.
$\Box$

Then:














\(\ds \map f x \times \map f y\)

\(=\)







\(\ds \paren {\cos x + i \sin x} \paren {\cos y + i \sin y}\)




















\(\ds \)

\(=\)







\(\ds \cos x \cos y + i \sin x \cos y + \cos x i \sin y + i \sin x i \sin y\)




















\(\ds \)

\(=\)







\(\ds \paren {\cos x \cos y - \sin x \sin y} + i \paren {\sin x \cos y + \cos x \sin y}\)





as $i^2 = -1$














\(\ds \)

\(=\)







\(\ds \map \cos {x + y} + i \map \sin {x + y}\)





Cosine of Sum and Sine of Sum














\(\ds \)

\(=\)







\(\ds \map f {x + y}\)









So $f$ is a (group) homomorphism.
$\Box$

Thus $f$ is seen to be a surjective homomorphism.
Hence, by definition, it is a (group) epimorphism.
$\Box$

From Cosine of Multiple of Pi:

$\forall n \in \Z: \cos n \pi = \paren {-1}^n$
and from Sine of Multiple of Pi:

$\forall n \in \Z: \sin n \pi = 0$
From Sine and Cosine are Periodic on Reals, it follows that these are the only values of $\Z$ for which this holds.
For $\cos x + i \sin x = 1 + 0 i$ it is necessary that:

$\cos x = 1$
$\sin x = 0$
and it can be seen that the only values of $x$ for this to happen is:

$x \in \set {2 \pi n: n \in \Z}$
Hence, by definition of kernel:

$\map \ker f = \set {2 \pi n: n \in \Z}$
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 12$: Homomorphisms: Example $12.1$




