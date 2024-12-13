# 

Source: https://proofwiki.org/wiki/Invertible_Element_of_Associative_Structure_is_Cancellable



Theorem
Let $\struct {S, \circ}$ be an algebraic structure where $\circ$ is associative.
Let $\struct {S, \circ}$ have an identity element $e_S$.
An element of $\struct {S, \circ}$ which is invertible is also cancellable.


Corollary
Let $\struct {S, \circ}$ be a monoid whose identity element is $e_S$.
An element of $\struct {S, \circ}$ which is invertible is also cancellable.


Proof
Let $a \in S$ be invertible.
Suppose $a \circ x = a \circ y$.

Then:














\(\ds x\)

\(=\)







\(\ds e_S \circ x\)





Definition of Identity Element














\(\ds \)

\(=\)







\(\ds \paren {a^{-1} \circ a} \circ x\)





Definition of Inverse Element














\(\ds \)

\(=\)







\(\ds a^{-1} \circ \paren {a \circ x}\)





Associativity of $\circ$














\(\ds \)

\(=\)







\(\ds a^{-1} \circ \paren {a \circ y}\)





by hypothesis














\(\ds \)

\(=\)







\(\ds \paren {a^{-1} \circ a} \circ y\)





Associativity of $\circ$














\(\ds \)

\(=\)







\(\ds e_S \circ y\)





Definition of Inverse Element














\(\ds \)

\(=\)







\(\ds y\)





Definition of Identity Element




A similar argument shows that $x \circ a = y \circ a \implies x = y$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 7$: Semigroups and Groups: Theorem $7.1$




