# 

Source: https://proofwiki.org/wiki/Index_Laws/Product_of_Indices/Monoid


It has been suggested that this page or section be merged into Index Laws for Monoids/Product of Indices.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mergeto}} from the code.


Theorem
Let $\struct {S, \circ}$ be a monoid whose identity element is $e$.
For $a \in S$, let $\circ^n a = a^n$ be the $n$th power of $a$.

Then:

$\forall m, n \in \N: a^{n m} = \paren {a^n}^m = \paren {a^m}^n$

That is:

$\forall m, n \in \N: \circ^{n m} a = \circ^m \paren {\circ^n a} = \circ^n \paren {\circ^m a}$


Proof
Because $\struct {S, \circ}$ is a monoid, it is a fortiori a semigroup.

Hence, from Index Laws for Semigroup: Product of Indices:

$\forall m, n \in \N_{>0}: \circ^{n m} a = \circ^m \paren {\circ^n a} = \circ^n \paren {\circ^m a}$
That is:

$\forall m, n \in \N_{>0}: a^{n m} = \paren {a^n}^m = \paren {a^m}^n$

It remains to be shown that the result holds for the cases where $m = 0$ and $n = 0$.














\(\ds n \times 0\)

\(=\)







\(\ds 0\)





Zero Element of Multiplication on Numbers














\(\ds \)

\(=\)







\(\ds 0 \times  m\)





Zero Element of Multiplication on Numbers








\(\ds \leadsto \ \ \)





\(\ds \circ^{n \times 0} a\)

\(=\)







\(\ds e\)














\(\ds \leadsto \ \ \)





\(\ds \)

\(=\)







\(\ds \circ^{0 \times m} a\)









so the condition holds for either $n = 0$ or $m = 0$.

Finally, we also have:

$\circ^n \paren {\circ^0 a} = e = \circ^0 \paren {\circ^m a}$
$\circ^0 \paren {\circ^n a} = e = \circ^m \paren {\circ^0 a}$
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




