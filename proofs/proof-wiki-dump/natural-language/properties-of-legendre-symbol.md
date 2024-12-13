# 

Source: https://proofwiki.org/wiki/Properties_of_Legendre_Symbol


This page has been identified as a candidate for refactoring of basic complexity.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.

This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $p$ be an odd prime.
Let $a \in \Z$.
Let $\paren {\dfrac a p}$ be the Legendre symbol::

$\paren {\dfrac a p} := a^{\paren {\frac {p - 1} 2} } \pmod p$


Quadratic Character
$\paren {\dfrac a p} = 0$ if and only if $a \equiv 0 \pmod p$
$\paren {\dfrac a p} = 1$ if and only if $a$ is a quadratic residue mod $p$
$\paren {\dfrac a p} = -1$ if and only if $a$ is a quadratic non-residue mod $p$.


Congruent Integers
If $a \equiv b \pmod p$, then:

$\paren {\dfrac a p} = \paren {\dfrac b p}$


Multiplicative Nature
$\paren {\dfrac {a b} p} = \paren {\dfrac a p} \paren {\dfrac b p}$


Square is Quadratic Residue
$\paren {\dfrac {a^2} p} = 1$


Proofs
Proof of Quadratic Character
$\paren {\dfrac a p} = 0$ if and only if $a \equiv 0 \pmod p$:
Follows from Euler's Criterion for Quadratic Residue.


$\paren {\dfrac a p} = 1$ if and only if $a$ is a quadratic residue mod $p$:
This follows directly from the definition of quadratic residue and Euler's Criterion for Quadratic Residue.


$\paren {\dfrac a p} = -1$ if and only if $a$ is a quadratic non-residue mod $p$:
This follows directly from the definition of quadratic non-residue and Euler's Criterion for Quadratic Residue.
$\blacksquare$


Proof of Congruent Integers
If $a \equiv b \pmod p$, then $\paren {\dfrac a p} = \paren {\dfrac b p}$:
This is just a statement of the quadratic character of congruent integers.
$\blacksquare$


Proof of Multiplicative Nature
$\paren {\dfrac {a b} p} = \paren {\dfrac a p} \paren {\dfrac b p}$:
Follows directly from the identity:

$\paren {a b}^{\paren {\frac {p - 1} 2} } = a^{\paren {\frac {p - 1} 2} } b^{\paren {\frac {p - 1} 2} }$
$\blacksquare$


Proof that Square is Quadratic Residue

This page has been identified as a candidate for refactoring of basic complexity.In particular: Two proofs, two pagesUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
$\paren {\dfrac {a^2} p} = 1$:
Follows directly from the definition.
Alternatively, it also follows from the fact that the Legendre symbol is multiplicative.
$\blacksquare$





