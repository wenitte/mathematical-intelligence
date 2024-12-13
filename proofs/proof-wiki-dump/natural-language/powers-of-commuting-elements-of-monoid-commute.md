# 

Source: https://proofwiki.org/wiki/Powers_of_Commuting_Elements_of_Monoid_Commute

Theorem
Let $\struct {S, \circ}$ be a monoid whose identity element is $e$.
For $a \in S$, let $\circ^n a = a^n$ denote the $n$th power of $a$.
Let $a, b \in S$ such that $a$ commutes with $b$:

$a \circ b = b \circ a$

Then:

$\forall m, n \in \N: \paren {\circ^m a} \circ \paren {\circ^n b} = \paren {\circ^n b} \circ \paren {\circ^m a}$
That is:

$\forall m, n \in \N: a^m \circ b^n = b^n \circ a^m$


Proof
Because $\struct {S, \circ}$ is a monoid, it is a fortiori also a semigroup.
From Powers of Commuting Elements of Semigroup Commute:

$\forall m, n \in \N_{>0}: \paren {\circ^m a} \circ \paren {\circ^n b} = \paren {\circ^n b} \circ \paren {\circ^m a}$
That is:

$\forall m, n \in \N_{>0}: a^m \circ b^n = b^n \circ a^m$

It remains to be shown that the result holds for the cases where $m = 0$ and $n = 0$.
Let $n \in \N$:














\(\ds a^m \circ b^0\)

\(=\)







\(\ds a^m \circ e\)





Definition of $b^0$














\(\ds \)

\(=\)







\(\ds a^m\)





Definition of Identity Element














\(\ds \)

\(=\)







\(\ds e \circ a^m\)





Definition of Identity Element














\(\ds \)

\(=\)







\(\ds b^0 \circ a^m\)





Definition of $b^0$




Similarly, let $m \in \N$:














\(\ds a^0 \circ b^n\)

\(=\)







\(\ds e \circ b^n\)





Definition of $a^0$














\(\ds \)

\(=\)







\(\ds b^n\)





Definition of Identity Element














\(\ds \)

\(=\)







\(\ds b^n \circ e\)





Definition of Identity Element














\(\ds \)

\(=\)







\(\ds b^n \circ a^0\)





Definition of $a^0$



and:














\(\ds a^0 \circ b^0\)

\(=\)







\(\ds e \circ e\)





Definition of $a^0$ and $b^0$














\(\ds \)

\(=\)







\(\ds b^0 \circ a^0\)





Definition of $a^0$ and $b^0$




Thus:

$a^m \circ b^n = b^n \circ a^m$
holds for $n = 0$ and $m = 0$.
Thus:

$\forall m, n \in \N: a^m \circ b^n = b^n \circ a^m$
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 16$: The Natural Numbers: Theorem $16.8$




