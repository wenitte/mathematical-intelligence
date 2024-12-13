# 

Source: https://proofwiki.org/wiki/Left_Self-Distributive_Operation_with_Right_Identity_is_Idempotent

Theorem
Let $\struct {S, \circ}$ be an algebraic structure.
Let $\circ$ be left self-distributive.
Let $\struct {S, \circ}$ have a right identity.

Then $\circ$ is an idempotent operation.


Proof
Let the right identity of $\struct {S, \circ}$ be $e_R$.

We have:










\(\ds \forall a, b, c \in S: \, \)



\(\ds a \circ \paren {b \circ c}\)

\(=\)







\(\ds \paren {a \circ b} \circ \paren {a \circ c}\)





Definition of Left Self-Distributive Operation








\(\ds \leadsto \ \ \)

\(\ds \forall a \in S: \, \)



\(\ds a \circ \paren {e_R \circ e_R}\)

\(=\)







\(\ds \paren {a \circ e_R} \circ \paren {a \circ e_R}\)





In particular, it holds for $e_R$








\(\ds \leadsto \ \ \)

\(\ds \forall a \in S: \, \)



\(\ds a\)

\(=\)







\(\ds a \circ a\)





Definition of Right Identity



The result follows by definition of idempotent operation.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 16$: The Natural Numbers: Exercise $16.23 \ \text{(c)}$




