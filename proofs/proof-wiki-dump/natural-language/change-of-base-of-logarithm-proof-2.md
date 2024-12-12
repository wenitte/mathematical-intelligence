# 

Source: https://proofwiki.org/wiki/Change_of_Base_of_Logarithm/Proof_2

Theorem
$\log_b x = \dfrac {\log_a x} {\log_a b}$


Proof

This article needs to be tidied.In particular: for a start, define each definition with rigour and precisionPlease fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.
We begin with an equation that relates two exponentials with two different bases, $a$ and $b$, both positive and neither equal to one:

$b^y = a^z$
Without loss of generality, select and solve for $b$:

$b = a^{z/y}$
Take logarithm's base $a$ of both sides:














\(\ds \log_a b\)

\(=\)







\(\ds \map {\log_a} {a^{z/y} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac z y \, \log_a a\)





Logarithm of Power














\(\ds \log_a b\)

\(=\)







\(\ds \dfrac z y\)





using $\log_a a = 1$



Now define $x = b^y = a^z$, and note that:














\(\ds \quad b^y = x\)

\(\implies\)







\(\ds y = \log_b x\)





Definition of General Logarithm














\(\ds \quad a^z = x\)

\(\implies\)







\(\ds z = \log_a x\)





Definition of General Logarithm



Substituting these values of $y$ and $z$ into our expression, $\log_a b = z / y$, yields the desired version of the change-of-base formula:

$\log_a b = \dfrac {\log_a x} {\log_b x} \implies \log_b x = \dfrac {\log_a x} {\log_a b}$
$\blacksquare$


Other choices involving $a$ and $b$

This page or section has statements made on it that ought to be extracted and proved in a Theorem page.In particular: Decide what to keep out of the belowYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by creating any appropriate Theorem pages that may be needed.To discuss this page in more detail, feel free to use the talk page.
This proof achieved the desired result only because two consecutive decisions were made regarding the selection of $a$ or $b$. Fortunately, there is little reason to remember these choices, provided the goal is to derive a useful formula. Suppose, for example, that we chose to solve for $b=a^{z/y}$, but instead take the logarithm of both sides at base $b$ instead of $a$. A slightly different change-of-base formula would be obtained: 

$\log_b b=1=\log_b\left(a^{z/y}\right)= \dfrac{\log_a x}{\log_b x}\log_b a \implies \log_b x = (\log_b a)\cdot(\log_a x)$
Both formulas are useful, since:

$\left(\log_a b\right)\cdot\left(\log_b a\right)=1$
To understand why this identity is important, imagine that you are converting between base-2 and base-10, and have a numerical value for $\log_{10}2$, while your change-of-base formula involves $\log_2 10.$





