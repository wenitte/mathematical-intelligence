# 

Source: https://proofwiki.org/wiki/Right_Self-Distributive_Operation_with_Left_Identity_is_Idempotent

Theorem
Let $\struct {S, \circ}$ be an algebraic structure.
Let $\circ$ be right self-distributive.
Let $\struct {S, \circ}$ have a left identity.

Then $\circ$ is an idempotent operation.


Proof
Let the left identity of $\struct {S, \circ}$ be $e_L$.

We have:










\(\ds \forall a, b, c \in S: \, \)



\(\ds \paren {a \circ b} \circ c\)

\(=\)







\(\ds \paren {a \circ c} \circ \paren {b \circ c}\)





Definition of Right Self-Distributive Operation








\(\ds \leadsto \ \ \)

\(\ds \forall c \in S: \, \)



\(\ds \paren {e_L \circ e_L} \circ c\)

\(=\)







\(\ds \paren {e_L \circ c} \circ \paren {e_L \circ c}\)





In particular, it holds for $e_L$








\(\ds \leadsto \ \ \)

\(\ds \forall c \in S: \, \)



\(\ds c\)

\(=\)







\(\ds c \circ c\)





Definition of Left Identity



The result follows by definition of idempotent operation.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 16$: The Natural Numbers: Exercise $16.23 \ \text{(c)}$




