# 

Source: https://proofwiki.org/wiki/GCD_of_Polynomials_does_not_depend_on_Base_Field


This article needs to be linked to other articles.In particular: Definitions of the concepts of divisibility and GCD in the context of polynomialsYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $E / F$ be a field extension.
Let $P, Q \in F \sqbrk X$ be polynomials.
Let:

$\gcd \set {P, Q} = R$ in $F \sqbrk X$
$\gcd \set {P, Q} = S$ in $E \sqbrk X$.

Then $R = S$.
In particular, $S \in F \sqbrk X$.


Proof
By definition of greatest common divisor:

$R \divides S$ in $E \sqbrk X$
By Polynomial Forms over Field is Euclidean Domain, there exist $A, B \in F \sqbrk X$ such that:

$A P + B Q = R$
Because $S \divides P, Q$:

$S \divides R$ in $E \sqbrk X$
By $R \divides S$ and $S \divides R$:

$R = S$
$\blacksquare$





