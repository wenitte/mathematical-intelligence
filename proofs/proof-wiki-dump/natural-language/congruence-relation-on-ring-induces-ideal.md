# 

Source: https://proofwiki.org/wiki/Congruence_Relation_on_Ring_induces_Ideal



Theorem
Let $\struct {R, +, \circ}$ be a ring.
Let $\EE$ be a congruence relation on $R$.

Let $J = \eqclass {0_R} \EE$ be the equivalence class of $0_R$ under $\EE$.

Then $J$ is an ideal of $R$.


Proof
Let $J = \eqclass {0_R} \EE$.
By Congruence Relation induces Normal Subgroup, $\struct {J, +}$ is a normal subgroup of $\struct {R, +}$.
Thus the elements of $\struct {R, +} / \struct {J, +}$ are the cosets of $\eqclass {0_R} \EE$ by $+$.

We have that $\EE$ is also compatible with $\circ$.
Thus from Quotient Structure is Well-Defined, and so:

$\eqclass {x_1} \EE = \eqclass {x_2} \EE \land \eqclass {y_1} \EE = \eqclass {y_2} \EE \implies \eqclass {x_1 \circ y_1} \EE = \eqclass {x_2 \circ y_2} \EE$
Putting $x_1 = 0_R, x_2 = x, y_1 = y_2 = y$, so that $\eqclass {y_1} \EE = \eqclass {y_2} \EE$ by definition:

$\eqclass 0 \EE = \eqclass x \EE  \implies \eqclass {0 \circ y} \EE = \eqclass {x \circ y} \EE$
Hence:

$\forall y \in R: \eqclass y \EE \circ \eqclass {0_R} \EE = \eqclass {0_R} \EE = \eqclass {0_R} \EE \circ \eqclass y \EE$

That is:

$\forall x \in J, y \in R: y \circ x \in J, x \circ y \in J$
demonstrating that $J$ is an ideal of $R$.
$\blacksquare$


Also see
Ideal induced by Congruence Relation defines that Congruence
Quotient Ring is Ring


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $22$. New Rings from Old: Theorems $22.2$




