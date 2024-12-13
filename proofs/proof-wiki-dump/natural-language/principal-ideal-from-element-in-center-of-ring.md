# 

Source: https://proofwiki.org/wiki/Principal_Ideal_from_Element_in_Center_of_Ring

Theorem
Let $\struct {R, +, \circ}$ be a ring with unity whose zero is $0_R$ and whose unity is $1_R$.
Let $b \in R$ be in the center of $R$.

Then:

$\ideal b = R \circ b = \set {x \circ b: x \in R}$
where $\ideal b$ is the principal ideal generated by $b$.


Proof
Let $J = R \circ b$
The center of $R$ is defined as:

$\map Z R = \set {x \in R: \forall s \in R: s \circ x = x \circ s}$
Therefore:

$R \circ b = b \circ R = \set {x \circ b: x \in R} = \set {b \circ x: x \in R}$
and so:

$x \in J \implies x \circ b \in J \land b \circ x \in J$

Thus $J$ is an ideal of $R$ and so $J = \ideal b$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $22$. New Rings from Old: Theorem $22.5$



