# 

Source: https://proofwiki.org/wiki/Commutation_with_Inverse_in_Monoid



Theorem
Let $\struct {S, \circ}$ be a monoid.
Let $x, y \in S$ such that $y$ is invertible.

Then $x$ commutes with $y$ if and only if $x$ commutes with $y^{-1}$.


Proof
Necessary Condition
Let $x$ commute with $y$.
Then:














\(\ds y^{-1} \circ x\)

\(=\)







\(\ds \paren {y^{-1} \circ x} \circ e\)





Monoid Axiom $\text S 2$: Identity














\(\ds \)

\(=\)







\(\ds y^{-1} \circ \paren {x \circ e}\)





Monoid Axiom $\text S 1$: Associativity














\(\ds \)

\(=\)







\(\ds y^{-1} \circ \paren {x \circ \paren {y \circ y^{-1} } }\)





Invertibility of $y$














\(\ds \)

\(=\)







\(\ds y^{-1} \circ \paren {\paren {x \circ y} \circ y^{-1} }\)





Monoid Axiom $\text S 1$: Associativity














\(\ds \)

\(=\)







\(\ds y^{-1} \circ \paren {\paren {y \circ x} \circ y^{-1} }\)





$x$ commutes with $y$














\(\ds \)

\(=\)







\(\ds \paren {y^{-1} \circ \paren {y \circ x} } \circ y^{-1}\)





Monoid Axiom $\text S 1$: Associativity














\(\ds \)

\(=\)







\(\ds \paren {\paren {y^{-1} \circ y} \circ x} \circ y^{-1}\)





Monoid Axiom $\text S 1$: Associativity














\(\ds \)

\(=\)







\(\ds \paren {e \circ x} \circ y^{-1}\)





Invertibility of $y$














\(\ds \)

\(=\)







\(\ds x \circ y^{-1}\)





Monoid Axiom $\text S 2$: Identity




So $x$ commutes with $y^{-1}$.
$\Box$


Sufficient Condition
Now let $x$ commute with $y^{-1}$.
From the above, it follows that $x$ commutes with $\paren {y^{-1} }^{-1}$.
From Inverse of Inverse in Monoid:

$\paren {y^{-1} }^{-1} = y$
Thus $x$ commutes with $y$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 4$: Neutral Elements and Inverses: Theorem $4.5: \ 2^\circ$




