# 

Source: https://proofwiki.org/wiki/Index_Laws/Sum_of_Indices/Semigroup



Theorem
Let $\struct {S, \circ}$ be a semigroup.
For $a \in S$, let $\circ^n a = a^n$ be defined as the $n$th power of $a$:

$a^n = \begin{cases}
a & : n = 1 \\
a^x \circ a & : n = x + 1
\end{cases}$
That is:

$a^n = \underbrace {a \circ a \circ \cdots \circ a}_{n \text{ copies of } a} = \circ^n \paren a$
Then:

$\forall m, n \in \N_{>0}: a^{n + m} = a^n \circ a^m$


Proof
Let $a \in S$.
Because $\struct {S, \circ}$ is a semigroup, $\circ$ is associative on $S$.

The proof proceeds by the Principle of Mathematical Induction.
Let $\map P m$ be the proposition:

$\forall n \in \N_{>0}: a^{n + m} = a^n \circ a^m$
that is:

$\forall n \in \N_{>0}: \circ^{n + m} a = \paren {\circ^n a} \circ \paren {\circ^m a}$


Basis for the Induction









\(\ds \forall n \in \N_{>0}: \, \)



\(\ds \circ^{n + 1} a\)

\(=\)







\(\ds \paren {\circ^n a} \circ a\)





Definition of $\circ^n a: \N_{>0} \to S$














\(\ds \)

\(=\)







\(\ds \paren {\circ^n a} \circ \paren {\circ^1 a}\)





Definition of $\circ^n a$ for $n = 1$



So $\map P 1$ holds.
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$\circ^{n + k} a = \paren {\circ^n a} \circ \paren {\circ^k a}$

It is then to be shown that:

$\circ^{n + \paren {k + 1} } a = \paren {\circ^n a} \circ \paren {\circ^{k + 1} a}$


Induction Step
This is our induction step:














\(\ds \circ^{n + \paren {k + 1} } a\)

\(=\)







\(\ds \circ^{\paren {n + k} + 1} a\)





Natural Number Addition is Associative














\(\ds \)

\(=\)







\(\ds \paren {\circ^{n + k} a} \circ \paren {\circ^1 a}\)





Basis for the Induction














\(\ds \)

\(=\)







\(\ds \paren {\paren {\circ^n a} \circ \paren {\circ^k a} } \circ \paren {\circ^1 a}\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \paren {\circ^n a} \circ \paren {\paren {\circ^k a} \circ \paren {\circ^1 a} }\)





Semigroup Axiom $\text S 1$: Associativity














\(\ds \)

\(=\)







\(\ds \paren {\circ^n a} \circ \paren {\circ^{k + 1} a}\)





Basis for the Induction



So $\map P {k + 1}$ is true.
So by the Principle of Mathematical Induction, this result is true for all $m, n \in \N_{>0}$:

$\forall m, n \in \N_{>0}: \circ^{n + m} a = \paren {\circ^n a} \circ \paren {\circ^m a}$
or:

$\forall m, n \in \N_{>0}: a^{n + m} = a^n \circ a^m$
$\blacksquare$


Notation
Let $a^n$ be defined as the power of an element of a magma:

$a^n = \begin{cases}
a : & n = 1 \\
a^x \circ a : & n = x + 1
\end{cases}$
that is:

$a^n = \underbrace {a \circ a \circ \cdots \circ a}_{n \text{ copies of } a} = \map {\circ^n} a$

Recall the index law for sum of indices:

$\circ^{n + m} a = \paren {\circ^n a} \circ \paren {\circ^m a}$

This result can be expressed:

$a^{n + m} = a^n \circ a^m$

When additive notation $\struct {S, +}$ is used, the following is a common convention:

$\left({n + m}\right) a = n a + m a$
or:

$\forall m, n \in \N_{>0}: \paren {n + m} \cdot a = n \cdot a + m \cdot a$


Source of Name
The name index laws originates from the name index to describe the exponent $y$ in the power $x^y$.


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 4.2$. Commutative and associative operations
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 16$: The Natural Numbers: Theorem $16.8 \ (1)$
1978: John S. Rose: A Course on Group Theory ... (previous) ... (next): $2$: Examples of Groups and Homomorphisms: $2.1$ Definition
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 30.1$ Powers of an element in a semigroup: $\text{(i)}$
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $3$: Elementary consequences of the definitions: Remark




