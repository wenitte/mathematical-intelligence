# 

Source: https://proofwiki.org/wiki/Group_has_Latin_Square_Property



Theorem
Let $\struct {G, \circ}$ be a group.
Then $G$ satisfies the Latin square property.
That is, for all $a, b \in G$, there exists a unique $g \in G$ such that $a \circ g = b$.
Similarly, there exists a unique $h \in G$ such that $h \circ a = b$.


Additive Notation
This result can also be written in additive notation as follows:

Let $\struct {G, +}$ be a group.
Then $G$ satisfies the Latin square property.
That is, for all $a, b \in G$, there exists a unique $g \in G$ such that $a + g = b$.
Similarly, there exists a unique $h \in G$ such that $h + a = b$.


Corollary
The Cayley table for any finite group is a Latin square.


Proof 1













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


Proof 2
We shall prove that this is true for the first equation:















\(\ds a \circ g\)

\(=\)







\(\ds b\)














\(\ds \leadstoandfrom \ \ \)





\(\ds a^{-1} \circ \paren {a \circ g}\)

\(=\)







\(\ds a^{-1} \circ b\)





$\circ$ is a Cancellable Binary Operation








\(\ds \leadstoandfrom \ \ \)





\(\ds \paren {a^{-1} \circ a} \circ g\)

\(=\)







\(\ds a^{-1} \circ b\)





Group Axiom $\text G 1$: Associativity








\(\ds \leadstoandfrom \ \ \)





\(\ds e \circ g\)

\(=\)







\(\ds a^{-1} \circ b\)





Group Axiom $\text G 3$: Existence of Inverse Element








\(\ds \leadstoandfrom \ \ \)





\(\ds g\)

\(=\)







\(\ds a^{-1} \circ b\)





Group Axiom $\text G 2$: Existence of Identity Element




Because the statements:

$a \circ g = b$
and

$g = a^{-1} \circ b$
are equivalent, we may conclude that $g$ is indeed the only solution of the equation.

The proof that the unique solution of $h$ is $b \circ a^{-1}$ in the second equation follows similarly.
$\blacksquare$


Proof 3
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


Proof 4
We shall prove that this is true for the first equation:















\(\ds b\)

\(=\)







\(\ds a \circ g\)














\(\ds \leadsto \ \ \)





\(\ds a^{-1} \circ b\)

\(=\)







\(\ds a^{-1} \circ \paren {a \circ g}\)





Group Axiom $\text G 3$: Existence of Inverse Element














\(\ds \)

\(=\)







\(\ds \paren {a^{-1} \circ a} \circ g\)





Group Axiom $\text G 1$: Associativity














\(\ds \)

\(=\)







\(\ds e \circ g\)





Group Axiom $\text G 3$: Existence of Inverse Element














\(\ds \)

\(=\)







\(\ds g\)





Group Axiom $\text G 2$: Existence of Identity Element




Conversely:














\(\ds g\)

\(=\)







\(\ds a^{-1} \circ b\)














\(\ds \leadsto \ \ \)





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




The proof that the unique solution of $h$ is $b \circ a^{-1}$ in the second equation follows similarly.
$\blacksquare$





