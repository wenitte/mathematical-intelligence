# 

Source: https://proofwiki.org/wiki/Ideal_induces_Congruence_Relation_on_Ring



Theorem
Let $\struct {R, +, \circ}$ be a ring.
Let $J$ be an ideal of $R$

Then $J$ induces a congruence relation $\EE_J$ on $R$ such that $\struct {R / J, +, \circ}$ is a quotient ring.


Proof
From Ideal is Additive Normal Subgroup, we have that $\struct {J, +}$ is a normal subgroup of $\struct {R, +}$.
Let $x \mathop {\EE_J} y$ denote that $x$ and $y$ are in the same coset, that is:

$x \mathop {\EE_J} y \iff x + N = y + N$
From Congruence Modulo Normal Subgroup is Congruence Relation, $\EE_J$ is a congruence relation for $+$.

Now let $x \mathop {\EE_J} x', y \mathop {\EE_J} y'$.
By definition of congruence modulo $J$:

$x + \paren {-x'} \in J$
$y + \paren {-y'} \in J$

Then:

$x \circ y + \paren {-x' \circ y'} = \paren {x + \paren {-x'} } \circ y + x' \circ \paren {y + \paren {-y'} } \in J$
demonstrating that $\EE_J$ is a congruence relation for $\circ$.
Hence the result by definition of quotient ring.
$\blacksquare$


Also see
Congruence Relation on Ring induces Ideal


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $22$. New Rings from Old: Theorems $22.3$




