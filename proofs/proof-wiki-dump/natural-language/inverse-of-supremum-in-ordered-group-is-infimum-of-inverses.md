# 

Source: https://proofwiki.org/wiki/Inverse_of_Supremum_in_Ordered_Group_is_Infimum_of_Inverses

Theorem
Let $\struct {G, \circ, \preccurlyeq}$ be an ordered group.
Let $x, y \in G$.

Then:

$\set {x, y}$ admits a supremum in $G$
if and only if:

$\set {x^{-1}, y^{-1} }$ admits an infimum in $G$
in which case:

$\paren {\sup \set {x, y} }^{-1} = \inf \set {x^{-1}, y^{-1} }$


Proof
Let:














\(\ds a\)

\(=\)







\(\ds x^{-1}\)




















\(\ds b\)

\(=\)







\(\ds y^{-1}\)










Recall from Inverse of Group Inverse:














\(\ds a^{-1}\)

\(=\)







\(\ds x\)




















\(\ds b^{-1}\)

\(=\)







\(\ds y\)










From Inverse of Infimum in Ordered Group is Supremum of Inverses:
Then:

$\set {a, b}$ admits an infimum in $G$
if and only if:

$\set {a^{-1}, b^{-1} }$ admits a supremum in $G$
in which case:

$\paren {\inf \set {a, b} }^{-1} = \sup \set {a^{-1}, b^{-1} }$

Substituting back for $a$ and $b$:

$\set {x^{-1}, y^{-1} }$ admits an infimum in $G$
if and only if:

$\set {x, y}$ admits a supremum in $G$
in which case:

$\paren {\inf \set {x^{-1}, x^{-1} } }^{-1} = \sup \set {x, y}$

Hence from Group Axiom $\text G 3$: Existence of Inverse Element: 

$\inf \set {x^{-1}, x^{-1} } = \paren {\sup \set {x, y} }^{-1}$
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 15$: Ordered Semigroups: Exercise $15.10 \ \text {(d)}$




