# 

Source: https://proofwiki.org/wiki/Left_and_Right_Identity_are_the_Same

Theorem
Let $\struct {S, \circ}$ be an algebraic structure.
Let $e_L \in S$ be a left identity, and $e_R \in S$ be a right identity.

Then:

$e_L = e_R$
that is, both the left identity and right identity are the same, and are therefore an identity $e$.
Furthermore, $e$ is the only left identity and right identity for $\circ$.


Proof
Let $\struct {S, \circ}$ be an algebraic structure such that:

$\exists e_L \in S: \forall x \in S: e_L \circ x = x$
$\exists e_R \in S: \forall x \in S: x \circ e_R = x$

Then $e_L = e_L \circ e_R = e_R$ by both the above, hence the result.
The uniqueness of the left and right identity is a direct result of Identity is Unique.
$\blacksquare$


Sources
1964: W.E. Deskins: Abstract Algebra ... (previous) ... (next): Exercise $1.4: \ 13$
1965: J.A. Green: Sets and Groups ... (previous) ... (next): Chapter $4$. Groups: Exercise $5$
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 4$: Neutral Elements and Inverses: Exercise $4.3 \ \text{(a)}$




