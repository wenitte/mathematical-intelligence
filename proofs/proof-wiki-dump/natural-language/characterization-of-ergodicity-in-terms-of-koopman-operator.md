# 

Source: https://proofwiki.org/wiki/Characterization_of_Ergodicity_in_terms_of_Koopman_Operator



Theorem
Let $\struct {X, \BB, \mu}$ be a probability space.
Let $T: X \to X$ be a measure-preserving transformation.
Let $\map \MM {X, \R}$ be the set of $\BB$-measurable functions.
Let $\map {\LL^2} \mu$ denote the Lebesgue $2$-space.
Let $U_T : \map \MM {X, \R} \to \map \MM {X, \R}$ be the Koopman operator:

$U_T : f \mapsto f \circ T$

This page has been identified as a candidate for refactoring of medium complexity.In particular: several statements rolled into one which should be separated out into their own pagesUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.

This article needs to be tidied.In particular: I'll get round to it in due coursePlease fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.
Then the following are equivalent:

$(1):$ $T$ is ergodic
$(2):$ For all $f \in \map \MM {X, \R}$:
if $\map {U_T} f = f$, then $f$ is constant $\mu$-a.e.
$(3):$ For all $f \in \map \MM {X, \R}$:
if $\map {U_T} f = f$ for $\mu$-a.e., then $f$ is constant $\mu$-a.e.
$(4):$ For all $f \in \map {\LL ^2} \mu$:
if $\map {U_T} f = f$, then $f$ is constant $\mu$-a.e.
$(5):$ For all $f \in \map {\LL ^2} \mu$:
if $\map {U_T} f = f$ for $\mu$-a.e., then $f$ is constant $\mu$-a.e.


Proof
$(1) \implies (3)$
This is clear, since $(3)$ is exactly the definition of ergodicity.
$\Box$


$(3) \implies (2)$ and $(5) \implies (4)$
These are a direct consequence of Definition of Almost Everywhere.
If $\map {U_T} f = f$, the same holds especially $\mu$-almost everywhere, since:














\(\ds \map \mu {\set { x \in X : \map {\map {U_T} f} x \ne \map f x} }\)

\(=\)







\(\ds \map \mu \empty\)




















\(\ds \)

\(=\)







\(\ds 0\)





Measure of Empty Set is Zero



$\Box$


$(2) \implies (4)$ and $(3) \implies (5)$
In view of Definition of $\map {\LL ^2} \mu$:

$\map {\LL ^2} \mu \subseteq \map \MM {X, \R}$
The claims follow from this.
$\Box$


$(4) \implies (1)$
Let $A \in \BB$ be such that $T^{-1} \sqbrk A = A$.
Let $\chi_A : X \to \set {0, 1}$ be the characteristic function of $A$.
Note that $\chi_A^2 = \chi_A$, as $0^2=0$ and $1^2=1$.
In particular, $\chi_A \in \map {\LL^2} \mu$, since:

$\ds \int \chi_A^2 \rd \mu = \map \mu A < + \infty$

Moreover:

$\chi_A \circ T = \chi_A$
since for all $x \in X$:














\(\ds \map {\chi_A \circ T} x\)

\(=\)







\(\ds 1\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \map T x\)

\(\in\)







\(\ds A\)





Definition of $\chi_A$








\(\ds \leadstoandfrom \ \ \)





\(\ds x\)

\(\in\)







\(\ds T^{-1} \sqbrk A\)





Definition of Preimage of Mapping








\(\ds \leadstoandfrom \ \ \)





\(\ds x\)

\(\in\)







\(\ds A\)





as $T^{-1} \sqbrk A = A$








\(\ds \leadstoandfrom \ \ \)





\(\ds \map {\chi_A} x\)

\(=\)







\(\ds 1\)





Definition of $\chi_A$



That is, $\map {U_T} f = f$ by Definition of Koopman Operator.
Therefore by hypothesis, $\chi_A$ is constant $\mu$-almost everywhere.
The claim follows from this, since by Definition of $\chi_A$:

$A = \set {x \in X : \map {\chi_A} x = 1}$
and:

$X \setminus A = \set {x \in X : \map {\chi_A} x = 0}$
$\blacksquare$


Sources
1982: Peter Walters: An Introduction to Ergodic Theory $1.5$: Ergodicity




