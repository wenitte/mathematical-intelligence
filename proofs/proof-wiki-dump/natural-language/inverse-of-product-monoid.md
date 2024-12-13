# 

Source: https://proofwiki.org/wiki/Inverse_of_Product/Monoid



Theorem
Let $\struct {S, \circ}$ be a monoid whose identity is $e$.
Let $a, b \in S$ be invertible for $\circ$, with inverses $a^{-1}, b^{-1}$.

Then $a \circ b$ is invertible for $\circ$, and:

$\paren {a \circ b}^{-1} = b^{-1} \circ a^{-1}$


General Result
Let $\struct {S, \circ}$ be a monoid whose identity is $e$.
Let $a_1, a_2, \ldots, a_n \in S$ be invertible for $\circ$, with inverses ${a_1}^{-1}, {a_2}^{-1}, \ldots, {a_n}^{-1}$.

Then $a_1 \circ a_2 \circ \cdots \circ a_n$ is invertible for $\circ$, and:

$\forall n \in \N_{> 0}: \paren {a_1 \circ a_2 \circ \cdots \circ a_n}^{-1} = {a_n}^{-1} \circ \cdots \circ {a_2}^{-1} \circ {a_1}^{-1}$


Proof













\(\ds \paren {a \circ b} \circ \paren {b^{-1} \circ a^{-1} }\)

\(=\)







\(\ds \paren {\paren {a \circ b} \circ b^{-1} } \circ a^{-1}\)





Monoid Axiom $\text S 1$: Associativity














\(\ds \)

\(=\)







\(\ds \paren {a \circ \paren {b \circ b^{-1} } } \circ a^{-1}\)





Monoid Axiom $\text S 1$: Associativity














\(\ds \)

\(=\)







\(\ds \paren {a \circ e} \circ a^{-1}\)





Definition of Inverse Element














\(\ds \)

\(=\)







\(\ds a \circ a^{-1}\)





Definition of Identity Element














\(\ds \)

\(=\)







\(\ds e\)





Definition of Inverse Element




Similarly for $\paren {b^{-1} \circ a^{-1} } \circ \paren {a \circ b}$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 4$: Neutral Elements and Inverses: Theorem $4.4$
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): $\S 3.1$: Monoids




