# 

Source: https://proofwiki.org/wiki/Product_of_Semigroup_Element_with_Right_Inverse_is_Idempotent



Theorem
Let $\struct {S, \circ}$ be a semigroup with a right identity $e_R$.
Let $x \in S$ such that $\exists x_R: x \circ x_R = e_R$, that is, $x$ has a right inverse with respect to the right identity.

Then:

$\paren {x_R \circ x} \circ \paren {x_R \circ x} = x_R \circ x$
That is, $x_R \circ x$ is idempotent.


Proof













\(\ds \paren {x_R \circ x} \circ \paren {x_R \circ x}\)

\(=\)







\(\ds x_R \circ \paren {x \circ x_R} \circ x\)





Semigroup Axiom $\text S 1$: Associativity














\(\ds \)

\(=\)







\(\ds x_R \circ e_R \circ x\)





Definition of Right Inverse Element














\(\ds \)

\(=\)







\(\ds x_R \circ x\)





Definition of Right Identity



$\blacksquare$


Examples
$2 x$ and $\dfrac x 2$ Mappings on Integers
Let $\struct {\Z^\Z, \circ}$ be the semigroup defined such that:

$\Z$ is the set of all mappings on the integers.
$\circ$ denotes composition of mappings.

Let $\rho, \sigma \in \Z^\Z$ such that:

$\forall x \in \Z: \map \rho x = \begin{cases} \dfrac x 2 & : x \text { even} \\ 0 & : x \text { odd} \end{cases}$
$\forall x \in \Z: \map \sigma x = 2 x$

Then:

$\rho$ is a right inverse for $\sigma$
but:

$\rho$ is not a left inverse for $\sigma$

As a result:

$\paren {\sigma \circ \rho}^2 = \sigma \circ \rho$


Also see
Product of Semigroup Element with Left Inverse is Idempotent


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): Chapter $4$. Groups: Exercise $10$




