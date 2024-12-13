# 

Source: https://proofwiki.org/wiki/Inverse_of_Group_Product/Proof_3

Theorem
Let $\struct {G, \circ}$ be a group whose identity is $e$.
Let $a, b \in G$, with inverses $a^{-1}, b^{-1}$.

Then:

$\paren {a \circ b}^{-1} = b^{-1} \circ a^{-1}$


Proof













\(\ds \paren {a \circ b} \circ \paren {a \circ b}^{-1}\)

\(=\)







\(\ds e\)





Definition of Inverse Element








\(\ds \leadsto \ \ \)





\(\ds a \circ \paren {b \circ \paren {a \circ b}^{-1} }\)

\(=\)







\(\ds e\)





Group Axiom $\text G 1$: Associativity








\(\ds \leadsto \ \ \)





\(\ds b \circ \paren {a \circ b}^{-1}\)

\(=\)







\(\ds a^{-1}\)





Group Product Identity therefore Inverses








\(\ds \leadsto \ \ \)





\(\ds b^{-1} \circ \paren {b \circ \paren {a \circ b}^{-1} }\)

\(=\)







\(\ds b^{-1} \circ a^{-1}\)





Group Axiom $\text G 3$: Existence of Inverse Element








\(\ds \leadsto \ \ \)





\(\ds \paren{b^{-1} \circ b} \circ \paren {a \circ b}^{-1}\)

\(=\)







\(\ds b^{-1} \circ a^{-1}\)





Group Axiom $\text G 1$: Associativity








\(\ds \leadsto \ \ \)





\(\ds e \circ \paren {a \circ b}^{-1}\)

\(=\)







\(\ds b^{-1} \circ a^{-1}\)





Definition of Inverse Element








\(\ds \leadsto \ \ \)





\(\ds \paren {a \circ b}^{-1}\)

\(=\)







\(\ds b^{-1} \circ a^{-1}\)





Definition of Identity Element



$\blacksquare$





