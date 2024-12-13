# 

Source: https://proofwiki.org/wiki/Group_has_Latin_Square_Property/Proof_3

Theorem
Let $\struct {G, \circ}$ be a group.
Then $G$ satisfies the Latin square property.
That is, for all $a, b \in G$, there exists a unique $g \in G$ such that $a \circ g = b$.
Similarly, there exists a unique $h \in G$ such that $h \circ a = b$.


Proof
Suppose that $\exists x, y \in G: a \circ x = b = a \circ y$.














\(\ds a \circ x\)

\(=\)







\(\ds a \circ y\)














\(\ds \leadsto \ \ \)





\(\ds a^{-1} \circ \paren {a \circ x}\)

\(=\)







\(\ds a^{-1} \circ \paren {a \circ y}\)





Group Axiom $\text G 3$: Existence of Inverse Element








\(\ds \leadsto \ \ \)





\(\ds \paren {a^{-1} \circ a} \circ x\)

\(=\)







\(\ds \paren {a^{-1} \circ a} \circ y\)





Group Axiom $\text G 1$: Associativity








\(\ds \leadsto \ \ \)





\(\ds e \circ x\)

\(=\)







\(\ds e \circ y\)





Group Axiom $\text G 3$: Existence of Inverse Element








\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds y\)





Group Axiom $\text G 2$: Existence of Identity Element



So such an element, if it exists, is unique.

Now it is demonstrated that $g = a^{-1} b$ satisfies the requirement for $a \circ g = b$
Since $a \in G$, it follows by group axiom $G3$: existence of inverses that $a^{-1} \in G$.














\(\ds a\)

\(\in\)







\(\ds G\)














\(\ds \leadsto \ \ \)





\(\ds a^{-1}\)

\(\in\)







\(\ds G\)





Group Axiom $\text G 3$: Existence of Inverse Element








\(\ds \leadsto \ \ \)





\(\ds a^{-1} \circ b\)

\(\in\)







\(\ds G\)





Group Axiom $\text G 0$: Closure




Then:














\(\ds a \circ g\)

\(=\)







\(\ds a \circ \paren {a^{-1} \circ b}\)




















\(\ds \)

\(=\)







\(\ds \paren {a \circ a^{-1} } \circ b\)





Group Axiom $\text G 1$: Associativity














\(\ds \)

\(=\)







\(\ds e \circ b\)





Group Axiom $\text G 3$: Existence of Inverse Element














\(\ds \)

\(=\)







\(\ds b\)





Group Axiom $\text G 2$: Existence of Identity Element



Thus, such a $g$ exists.

The properties of $h$ are proved similarly.
$\blacksquare$


Sources
1964: Walter Ledermann: Introduction to the Theory of Finite Groups (5th ed.) ... (previous) ... (next): Chapter $\text {I}$: The Group Concept: $\S 2$: The Axioms of Group Theory: $(1.9)$
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $3$: Elementary consequences of the definitions: Proposition $3.3$




