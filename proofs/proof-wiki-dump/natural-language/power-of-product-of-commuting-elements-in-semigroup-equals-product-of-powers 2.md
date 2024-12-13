# 

Source: https://proofwiki.org/wiki/Power_of_Product_of_Commuting_Elements_in_Semigroup_equals_Product_of_Powers



Theorem
Let $\struct {S, \circ}$ be a semigroup.
For $a \in S$, let $\circ^n a = a^n$ denote the $n$th power of $a$.
Let $a, b \in S$ such that $a$ commutes with $b$:

$a \circ b = b \circ a$

Then:

$\forall n \in \N_{>0}: \map {\circ^n} {a \circ b} = \paren {\circ^n a} \circ \paren {\circ^n b}$
That is:

$\forall n \in \N_{>0}: \paren {a \circ b}^n = a^n \circ b^n$


Proof
The proof proceeds by the Principle of Mathematical Induction:

Let $\map P n$ be the proposition:

$\map {\circ^n} {a \circ b} = \paren {\circ^n a} \circ \paren {\circ^n b}$


Basis of the Induction













\(\ds \circ^1 \paren {a \circ b}\)

\(=\)







\(\ds a \circ b\)





Definition of $\circ^1$














\(\ds \)

\(=\)







\(\ds \paren {\circ^1 a} \circ \paren {\circ^1 b}\)





Definition of $\circ^1$



So $\map P 1$ holds.

This is the basis for the induction.


Induction Hypothesis
Suppose that $\map P k$ holds:

$\map {\circ^k} {a \circ b} = \paren {\circ^k a} \circ \paren {\circ^k b}$
This is the induction hypothesis.
It remains to be shown that:

$\map P k \implies \map P {k + 1}$
That is, that:

$\map {\circ^{k + 1} } {a \circ b} = \paren {\circ^{k + 1} a} \circ \paren {\circ^{k + 1} b}$


Induction Step
This is the induction step:














\(\ds \map {\circ^{k + 1} } {a \circ b}\)

\(=\)







\(\ds \paren {\map {\circ^k} {a \circ b} } \circ \paren {a \circ b}\)





Definition of $\circ^{k + 1}$














\(\ds \)

\(=\)







\(\ds \paren {\paren {\circ^k a} \circ \paren {\circ^k b} } \circ \paren {a \circ b}\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \paren {\circ^k a} \circ \paren {\paren {\paren {\circ^k b} \circ a} \circ b}\)





Semigroup Axiom $\text S 1$: Associativity














\(\ds \)

\(=\)







\(\ds \paren {\circ^k a} \circ \paren {\paren {a \circ \paren {\circ^k b} } \circ b}\)





Powers of Commuting Elements of Semigroup Commute














\(\ds \)

\(=\)







\(\ds \paren {\paren {\circ^k a} \circ a} \circ \paren {\paren {\circ^k b} \circ b}\)





Semigroup Axiom $\text S 1$: Associativity














\(\ds \)

\(=\)







\(\ds \paren {\circ^{k + 1} a} \circ \paren {\circ^{k + 1} b}\)





Definition of $\circ^{k + 1}$



So $\map P {k + 1}$ holds.

Thus by the Principle of Mathematical Induction, the result holds for all $n \in \N_{>0}$:

$\forall n \in \N_{>0}: \map {\circ^n} {a \circ b} = \paren {\circ^n a} \circ \paren {\circ^n b}$
$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 4.2$. Commutative and associative operations: Example $70$
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 16$: The Natural Numbers: Theorem $16.8 \ (3)$




