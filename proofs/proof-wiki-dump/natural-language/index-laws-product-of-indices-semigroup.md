# 

Source: https://proofwiki.org/wiki/Index_Laws/Product_of_Indices/Semigroup



Theorem
Let $\struct {S, \circ}$ be a semigroup.
For $a \in S$, let $\circ^n a = a^n$ be the $n$th power of $a$.

Then:

$\forall m, n \in \N_{>0}: a^{n m} = \paren {a^n}^m = \paren {a^m}^n$

That is:

$\forall m, n \in \N_{>0}: \circ^{n m} a = \circ^m \paren {\circ^n a} = \circ^n \paren {\circ^m a}$


Proof
Let $b = \circ^m a$.

Let $h: \N_{>0} \to S$ be the mapping defined as:

$\forall n \in \N_{>0}: \map h n = \circ^{n m} a$

Let the mapping $f_b: \N_{>0} \to S$ be recursively defined as:

$\forall n \in \N_{>0}: \map {f_b} n = \circ^n b$

From the Principle of Recursive Definition:

$f_b$ is the unique mapping which satisfies:
$\forall n \in \N_{>0}: \map {f_b} n = \begin{cases}
b & : n = 1 \\
\map {f_b} r \circ b & : n = r \circ 1
\end{cases}$

But $\map h 1 = \circ^{1 \times m} a = \circ^m a = b$.
So:










\(\ds \forall n \in \N_{>0}: \, \)



\(\ds \map h {n + 1}\)

\(=\)







\(\ds \circ^{\paren {n + 1} m} a\)




















\(\ds \)

\(=\)







\(\ds \circ^{\paren {n m} + m} a\)





Natural Number Multiplication Distributes over Addition














\(\ds \)

\(=\)







\(\ds \paren {\circ ^{n \ast m} } \circ \paren {\circ^m a}\)





Index Laws for Semigroup: Sum of Indices














\(\ds \)

\(=\)







\(\ds \map h n \circ b\)










Thus $h = f_b$, and so:

$\forall n, m \in \N_{>0}: \circ^{n m} = \circ^n \paren {\circ^m a}$
From Natural Number Multiplication is Commutative:

$\forall n, m \in \N_{>0}: \circ^m \paren {\circ^n a} = \circ^{m n} = \circ^{n m}$
$\blacksquare$


Notation
Let $a^n$ be defined as the power of an element of a magma:

$a^n = \begin{cases}
a : & n = 1 \\
a^x \circ a : & n = x + 1
\end{cases}$
that is:

$a^n = \underbrace {a \circ a \circ \cdots \circ a}_{n \text{ instances of } a} = \circ^n \paren a$

Recall the index law for product of indices:

$\circ^{n m} a = \circ^m \paren {\circ^n a} = \circ^n \paren {\circ^m a}$

This result can be expressed:

$a^{n m} = \paren {a^n}^m = \paren {a^m}^n$

When additive notation $\struct {S, +}$ is used, the following is a common convention:

$\paren {n m} a = m \paren {n a} = n \paren {m a}$
or:

$\forall m, n \in \N_{>0}: \paren {n m} \cdot a = m \cdot \paren {n \cdot a} = n \cdot \paren {m \cdot a}$


Source of Name
The name index laws originates from the name index to describe the exponent $y$ in the power $x^y$.


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 16$: The Natural Numbers: Theorem $16.11$
1978: John S. Rose: A Course on Group Theory ... (previous) ... (next): $2$: Examples of Groups and Homomorphisms: $2.1$ Definition
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 30.1$ Powers of an element in a semigroup: $\text{(ii)}$
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $3$: Elementary consequences of the definitions: Remark




