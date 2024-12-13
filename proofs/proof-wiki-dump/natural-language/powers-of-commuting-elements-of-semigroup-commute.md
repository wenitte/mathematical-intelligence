# 

Source: https://proofwiki.org/wiki/Powers_of_Commuting_Elements_of_Semigroup_Commute



Theorem
Let $\struct {S, \circ}$ be a semigroup.
For $a \in S$, let $\circ^n a = a^n$ denote the $n$th power of $a$.
Let $a, b \in S$ such that $a$ commutes with $b$:

$a \circ b = b \circ a$

Then:

$\forall m, n \in \N_{>0}: \paren {\circ^m a} \circ \paren {\circ^n b} = \paren {\circ^n b} \circ \paren {\circ^m a}$
That is:

$\forall m, n \in \N_{>0}: a^m \circ b^n = b^n \circ a^m$


Proof
The proof proceeds by the Principle of Mathematical Induction:

Let $\map P n$ be the proposition:

$\paren {\circ^n a} \circ b = b \circ \paren {\circ^n a}$


Basis of the Induction













\(\ds a \circ b\)

\(=\)







\(\ds b \circ a\)














\(\ds \leadsto \ \ \)





\(\ds \paren {\circ^1 a} \circ b\)

\(=\)







\(\ds b \circ \paren {\circ^1 a}\)





Definition of $\circ^1$



demonstrating that $\map P 1$ holds.

This is the basis for the induction.


Induction Hypothesis
Suppose that $\map P k$ holds:

$\paren {\circ^k a} \circ b = b \circ \paren {\circ^k a}$
This is the induction hypothesis.
It remains to be shown that:

$\map P k \implies \map P {k + 1}$
That is, that:

$\paren {\circ^{k + 1} a} \circ b = b \circ \paren {\circ^{k + 1} a}$


Induction Step
This is the induction step:
Thus:














\(\ds \paren {\circ^{k + 1} a} \circ b\)

\(=\)







\(\ds \paren {\paren {\circ^k a} \circ a} \circ b\)





Definition of $\circ^n a$














\(\ds \)

\(=\)







\(\ds \paren {\circ^k a} \circ \paren {a \circ b}\)





Semigroup Axiom $\text S 1$: Associativity














\(\ds \)

\(=\)







\(\ds \paren {\circ^k a} \circ \paren {b \circ a}\)





$b$ commutes with $a$ under $\circ$














\(\ds \)

\(=\)







\(\ds \paren {\paren {\circ^k a} \circ b} \circ a\)





Semigroup Axiom $\text S 1$: Associativity














\(\ds \)

\(=\)







\(\ds \paren {b \circ \paren {\circ^k a} } \circ a\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds b \circ \paren {\paren {\circ^k a} \circ a}\)





Semigroup Axiom $\text S 1$: Associativity














\(\ds \)

\(=\)







\(\ds b \circ \paren {\circ^{k + 1} a}\)





Definition of $\circ^n a$



So $\map P {k + 1}$ is true.
Thus:

$\forall m \in \N_{>0}: \paren {\circ^m a} \circ b = b \circ \paren {\circ^m a}$
$\Box$

By repeating the argument above, replacing $a$ with $b$ and $b$ with $\circ^m a$, we have:














\(\ds b \circ \paren {\circ^m a}\)

\(=\)







\(\ds \paren {\circ^m a} \circ b\)














\(\ds \leadsto \ \ \)





\(\ds \paren {\circ^n b} \circ \paren {\circ^m a}\)

\(=\)







\(\ds \paren {\circ^m a} \circ \paren {\circ^n b}\)









Hence the result:

$\forall m, n \in \N_{>0}: \paren {\circ^m a} \circ \paren {\circ^n b} = \paren {\circ^n b} \circ \paren {\circ^m a}$
That is:

$\forall m, n \in \N_{>0}: a^m \circ b^n = b^n \circ a^m$
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 16$: The Natural Numbers: Theorem $16.8 \ (2)$




