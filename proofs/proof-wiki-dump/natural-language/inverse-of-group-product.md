# 

Source: https://proofwiki.org/wiki/Inverse_of_Group_Product



Theorem
Let $\struct {G, \circ}$ be a group whose identity is $e$.
Let $a, b \in G$, with inverses $a^{-1}, b^{-1}$.

Then:

$\paren {a \circ b}^{-1} = b^{-1} \circ a^{-1}$


General Result
Let $\struct {G, \circ}$ be a group whose identity is $e$.
Let $a_1, a_2, \ldots, a_n \in G$, with inverses $a_1^{-1}, a_2^{-1}, \ldots, a_n^{-1}$.

Then:

$\paren {a_1 \circ a_2 \circ \cdots \circ a_n}^{-1} = a_n^{-1} \circ \cdots \circ a_2^{-1} \circ a_1^{-1}$


Proof 1













\(\ds \paren {a \circ b} \circ \paren {b^{-1} \circ a^{-1} }\)

\(=\)







\(\ds \paren {\paren {a \circ b} \circ b^{-1} } \circ a^{-1}\)





Group Axiom $\text G 1$: Associativity














\(\ds \)

\(=\)







\(\ds \paren {a \circ \paren {b \circ b^{-1} } } \circ a^{-1}\)





Group Axiom $\text G 1$: Associativity














\(\ds \)

\(=\)







\(\ds \paren {a \circ e} \circ a^{-1}\)





Group Axiom $\text G 3$: Existence of Inverse Element














\(\ds \)

\(=\)







\(\ds a \circ a^{-1}\)





Group Axiom $\text G 2$: Existence of Identity Element














\(\ds \)

\(=\)







\(\ds e\)





Group Axiom $\text G 3$: Existence of Inverse Element



The result follows from Group Product Identity therefore Inverses:

$\paren {a \circ b} \circ \paren {b^{-1} \circ a^{-1} } = e \implies \paren {a \circ b}^{-1} = b^{-1} \circ a^{-1}$
$\blacksquare$


Proof 2
We have that a group is a monoid, all of whose elements are invertible.
The result follows from Inverse of Product in Monoid.
$\blacksquare$


Proof 3













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


Sources

This page may be the result of a refactoring operation.As such, the following source works, along with any process flow, will need to be reviewed.When this has been completed, the citation of that source work (if it is appropriate that it stay on this page) is to be placed above this message, into the usual chronological ordering.In particular: Determine which (if any) of the above proofs is documented hereIf you have access to any of these works, then you are invited to review this list, and make any necessary corrections.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{SourceReview}} from the code.
1974: Thomas W. Hungerford: Algebra ... (previous) ... (next): $\text{I}$: Groups: $\S 1$ Semigroups, Monoids and Groups: Theorem $1.2 \ \text{(v)}$




