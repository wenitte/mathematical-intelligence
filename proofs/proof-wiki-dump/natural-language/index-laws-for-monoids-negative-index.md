# 

Source: https://proofwiki.org/wiki/Index_Laws_for_Monoids/Negative_Index



Theorem
Let $\struct {S, \circ}$ be a monoid whose identity is $e_S$.
Let $a \in S$ be invertible for $\circ$.
Let $n \in \N$.
Let $a^n = \map {\circ^n} a$ be defined as the power of an element of a monoid:

$a^n = \begin{cases}
e_S : & n = 0 \\
a^x \circ a : & n = x + 1
\end{cases}$
that is:

$a^n = \underbrace {a \circ a \circ \cdots \circ a}_{n \text { instances} } = \map {\circ^n} a$

For each $n \in \N$ we define:

$a^{-n} = \paren {a^{-1} }^n$
Then:

$\forall n \in \Z: \paren {a^n}^{-1} = a^{-n} = \paren {a^{-1} }^n$


Proof
We have $a^0 = e$ so it follows trivially that $a^{-0} = \paren {a^{-1} }^0$.
From the general inverse of product, we have:

$\paren {a_1 \circ a_2 \circ \cdots \circ a_n}^{-1} = a_n^{-1} \circ \cdots \circ a_2^{-1} \circ a_1^{-1}$
where $a_1, a_2, \ldots, a_n \in S$ are all invertible for $\circ$.

Hence we have:

$a_1, a_2, \ldots, a_n = a$
and we have that:

$a^n$ is invertible for all $n \in \N$
$\forall n \in \N: \paren {a^n}^{-1} = \paren {a^{-1} }^n$

From the above:

$a^{-n} = \paren {a^{-1} }^n$
Thus:














\(\ds \paren {a^{-n} }^{-1}\)

\(=\)







\(\ds \paren {\paren {a^{-1} }^n}^{-1}\)




















\(\ds \)

\(=\)







\(\ds \paren {\paren {a^{-1} }^{-1} }^n\)




















\(\ds \)

\(=\)







\(\ds a^{-\paren {-n} }\)










Similarly, if $a$ is invertible then $a^{-1}$ is also invertible.
So we also have:

$\circ^{-n} \paren {a^{-1} } = \circ^n \paren {\paren {a^{-1} }^{-1} }$

Thus:














\(\ds a^{-\paren {-n} }\)

\(=\)







\(\ds \paren {\paren {a^{-1} }^{-1} }^n\)




















\(\ds \)

\(=\)







\(\ds \paren {a^{-1} }^{-n}\)










Thus the result holds for all $n \in \Z$.
$\blacksquare$


Source of Name
The name index laws originates from the name index to describe the exponent $y$ in the power $x^y$.


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $20$. The Integers: Theorem $20.11 \ (1)$
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): $\S 3.1$: Monoids: Exercise $(8)$




