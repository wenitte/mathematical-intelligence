# 

Source: https://proofwiki.org/wiki/Group_has_Latin_Square_Property/Proof_1

Theorem
Let $\struct {G, \circ}$ be a group.
Then $G$ satisfies the Latin square property.
That is, for all $a, b \in G$, there exists a unique $g \in G$ such that $a \circ g = b$.
Similarly, there exists a unique $h \in G$ such that $h \circ a = b$.


Proof













\(\ds g\)

\(=\)







\(\ds a^{-1} \circ b\)














\(\ds \leadsto \ \ \)





\(\ds a \circ g\)

\(=\)







\(\ds a \circ \paren {a^{-1} \circ b}\)














\(\ds \leadsto \ \ \)





\(\ds a \circ g\)

\(=\)







\(\ds \paren {a \circ a^{-1} } \circ b\)





Group Axiom $\text G 1$: Associativity








\(\ds \leadsto \ \ \)





\(\ds a \circ g\)

\(=\)







\(\ds e \circ b\)





Group Axiom $\text G 3$: Existence of Inverse Element








\(\ds \leadsto \ \ \)





\(\ds a \circ g\)

\(=\)







\(\ds b\)





Group Axiom $\text G 2$: Existence of Identity Element



Thus, such a $g$ exists.

Suppose $g, g' \in G$ where $a \circ g = b = a \circ g'$.
Then:














\(\ds g\)

\(=\)







\(\ds e \circ g\)





Group Axiom $\text G 2$: Existence of Identity Element














\(\ds \)

\(=\)







\(\ds \paren {a^{-1} \circ a} \circ g\)





Group Axiom $\text G 3$: Existence of Inverse Element














\(\ds \)

\(=\)







\(\ds a^{-1} \circ \paren {a \circ g}\)





Group Axiom $\text G 1$: Associativity














\(\ds \)

\(=\)







\(\ds a^{-1} \circ b\)





Substitution for $a \circ g$














\(\ds \)

\(=\)







\(\ds a^{-1} \circ \paren {a \circ g'}\)





Substitution for $a \circ g'$














\(\ds \)

\(=\)







\(\ds \paren {a^{-1} \circ a} \circ g'\)





Group Axiom $\text G 1$: Associativity














\(\ds \)

\(=\)







\(\ds e \circ g'\)





Group Axiom $\text G 3$: Existence of Inverse Element














\(\ds \)

\(=\)







\(\ds g'\)





Group Axiom $\text G 2$: Existence of Identity Element



Thus uniqueness holds.

To prove the second part of the theorem, let $h = b \circ a^{-1}$.
The remainder of the proof follows a similar procedure to the above.
$\blacksquare$


Sources
1966: Richard A. Dean: Elements of Abstract Algebra ... (previous) ... (next): $\S 1.4$: Theorem $1$




