# 

Source: https://proofwiki.org/wiki/Index_Laws/Sum_of_Indices/Monoid


It has been suggested that this page or section be merged into Index Laws for Monoids/Sum of Indices.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mergeto}} from the code.


Theorem
Let $\struct {S, \circ}$ be a monoid whose identity element is $e$.
For $a \in S$, let $\circ^n a = a^n$ be defined as the $n$th power of $a$:

$a^n = \begin{cases}
e & : n = 0 \\
a^x \circ a & : n = x + 1
\end{cases}$
That is:

$a^n = \underbrace {a \circ a \circ \cdots \circ a}_{n \text{ copies of } a} = \map {\circ^n} a$
while:

$a^0 = e$

Then:

$\forall m, n \in \N: a^{n + m} = a^n \circ a^m$


Proof
Because $\struct {S, \circ}$ is a monoid, it is a fortiori also a semigroup.
From Index Laws for Semigroup: Sum of Indices:

$\forall m, n \in \N_{>0}: \circ^{n + m} a = \paren {\circ^n a} \circ \paren {\circ^m a}$
That is:

$\forall m, n \in \N_{>0}: a^{n + m} = a^n \circ a^m$

It remains to be shown that the result holds for the cases where $m = 0$ and $n = 0$.
Let $n \in \N$:














\(\ds a^{n + 0}\)

\(=\)







\(\ds a^n\)





Integer Addition Identity is Zero














\(\ds \)

\(=\)







\(\ds a^n \circ e\)





Definition of Identity Element














\(\ds \)

\(=\)







\(\ds a^n \circ a^0\)





Definition of $a^0$




Similarly, let $m \in \N$:














\(\ds a^{0 + m}\)

\(=\)







\(\ds a^m\)





Identity Element of Natural Number Addition is Zero














\(\ds \)

\(=\)







\(\ds e \circ a_m\)





Definition of Identity Element














\(\ds \)

\(=\)







\(\ds a^0 \circ a^m\)





Definition of $a^0$



and:














\(\ds a^{0 + 0}\)

\(=\)







\(\ds a^0\)





Identity Element of Natural Number Addition is Zero














\(\ds \)

\(=\)







\(\ds e\)





Definition of $a^0$














\(\ds \)

\(=\)







\(\ds e \circ e\)





Definition of Identity Element














\(\ds \)

\(=\)







\(\ds a^0 \circ a^0\)





Definition of $a^0$




Thus:

$a^{n + m} = a^n \circ a^m$
holds for $n = 0$ and $m = 0$.
Thus:

$\forall m, n \in \N: a^{n + m} = a^n \circ a^m$
$\blacksquare$


Also see
Power of Identity is Identity


Source of Name
The name index laws originates from the name index to describe the exponent $y$ in the power $x^y$.


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 16$: The Natural Numbers: Theorem $16.8$




