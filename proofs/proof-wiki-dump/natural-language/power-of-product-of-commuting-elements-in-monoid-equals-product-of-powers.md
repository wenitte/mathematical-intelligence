# 

Source: https://proofwiki.org/wiki/Power_of_Product_of_Commuting_Elements_in_Monoid_equals_Product_of_Powers

Theorem
Let $\struct {S, \circ}$ be a monoid whose identity element is $e$.
For $a \in S$, let $\circ^n a = a^n$ denote the $n$th power of $a$.
Let $a, b \in S$ such that $a$ commutes with $b$:

$a \circ b = b \circ a$

Then:

$\forall n \in \N: \circ^n \paren {a \circ b} = \paren {\circ^n a} \circ \paren {\circ^n b}$
That is:

$\forall n \in \N: \paren {a \circ b}^n = a^n \circ b^n$


Proof
Because $\struct {S, \circ}$ is a monoid, it is a fortiori also a semigroup.
From Power of Product of Commuting Elements in Semigroup equals Product of Powers:

$\forall n \in \N_{>0}: \circ^n \paren {a \circ b} = \paren {\circ^n a} \circ \paren {\circ^n b}$
That is:

$\forall n \in \N_{>0}: \paren {a \circ b}^n = a^n \circ b^n$

It remains to be shown that the result holds for the cases where $n = 0$.
Thus:














\(\ds \paren {a \circ b}^0\)

\(=\)







\(\ds \circ^0 \paren {a \circ b}\)





Definition of $\circ$














\(\ds \)

\(=\)







\(\ds e\)





Definition of $\circ^0$














\(\ds \)

\(=\)







\(\ds e \circ e\)





Definition of Identity Element














\(\ds \)

\(=\)







\(\ds \paren {\circ^0 a} \circ \paren {\circ^0 b}\)





Definition of $\circ^0$














\(\ds \)

\(=\)







\(\ds a^0 \circ b^0\)





Definition of $\circ$



Thus:

$\paren {a \circ b}^n = a^n \circ b^n$
holds for $n = 0$.
Thus:

$\forall n \in \N: \paren {a \circ b}^n = a^n \circ b^n$
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 16$: The Natural Numbers: Theorem $16.8$




