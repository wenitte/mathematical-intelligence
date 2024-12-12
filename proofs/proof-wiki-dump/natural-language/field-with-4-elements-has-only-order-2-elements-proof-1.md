# 

Source: https://proofwiki.org/wiki/Field_with_4_Elements_has_only_Order_2_Elements/Proof_1

Theorem
Let $\struct {\GF, +, \times}$ be a field which has exactly $4$ elements.

Then:

$\forall a \in \GF: a + a = 0_\GF$
where $0_\GF$ is the zero of $\GF$.


Proof
By definition of field, both the algebraic structures $\struct {\GF, +}$ and $\struct {\GF^*, \times}$ are (abelian) groups, where $\GF^* := \GF \setminus \set 0$.
By definition:

$\struct {\GF, +}$ is of order $4$
$\struct {\GF^*, \times}$ is of order $3$.

From Classification of Groups of Order up to 15, there are only two possibilities:

$(1): \quad \struct {\GF, +} \cong \Z_4$ and $\struct {\GF^*, \times} \cong \Z_3$
$(2): \quad \struct {\GF, +} \cong \Z_2 \times \Z_2$ and $\struct {\GF^*, \times} \cong \Z_3$.

In case $(2)$:

$\forall a \in \GF: a + a = 0_\GF$
but in case $(1)$:

$\exists a, b \in \GF: a + a = b \ne 0_\GF$ where $b + b = 0_\GF$
as there exists an element of $\struct {\GF, +}$ of order $4$.

Aiming for a contradiction, suppose $(1)$ describes a field.
Then:














\(\ds \paren {b + b} \times b\)

\(=\)







\(\ds 0_\GF \times b\)





as $b + b = 0_\GF$ from above














\(\ds \)

\(=\)







\(\ds 0_\GF\)





as $0_\GF$ is the zero of $\struct {\GF, +, \times}$




But then:














\(\ds \paren {b + b} \times b\)

\(=\)







\(\ds \paren {b \times b} + \paren {b \times b}\)





as $\times$ is distributive over $+$



As $\struct {\GF, +} \cong \Z_4$, both $a + a = b$ and $\paren {-a} + \paren {-a} = b$.
The only way for $\paren {b \times b} + \paren {b \times b} = 0_\GF$ is for $b \times b = b$ or $b \times b = 0_\GF$.
The second case is eliminated as $0_\GF \notin \struct {\GF^*, \times}$.
So it must be the case that $b \times b = b$.
So as $\struct {\GF^*, \times} \cong \Z_3$ it must follow that $a \times b = a, a \times \paren {-a} = b$ and then $a \times a = -a$.

It follows that the Cayley tables of $\struct {\GF, +}$ and $\struct {\GF^*, \times}$ must therefore be as follows:

$\begin{array}{c|cccc}
+ & 0_\GF & a & b & -a \\
\hline
0_\GF & 0_\GF & a & b & -a \\
a & a & b & -a & 0_\GF \\
b & b & -a & 0_\GF & a \\
-a & -a & 0_\GF & a & b \\
\end{array}
\qquad
\begin{array}{c|cccc}
\times & 0_\GF & b & a & -a \\
\hline
0_\GF & 0_\GF & 0_\GF & 0_\GF & 0_\GF \\
b & 0_\GF & b & a & -a \\
a & 0_\GF & a & -a & b \\
-a & 0_\GF & -a & b & a \\
\end{array}$















\(\ds \paren {a + b} \times a\)

\(=\)







\(\ds \paren {-a} \times a\)





as $a + b = -a$ from above














\(\ds \)

\(=\)







\(\ds b\)





as $\paren {-a} \times a = b$ from above



But:














\(\ds \paren {a \times a} + \paren {b \times a}\)

\(=\)







\(\ds \paren {-a} + a\)





from above














\(\ds \)

\(=\)







\(\ds 0_\GF\)





from above



So:

$\paren {a + b} \times a \ne \paren {a \times a} + \paren {b \times a}$
demonstrating that $\times$ is not distributive over $+$.
Thus $\GF$ as has been defined:

$\struct {\GF, +} \cong \Z_4$ and $\struct {\GF^*, \times} \cong \Z_3$
is not a field.

It follows that our supposition that $\struct {\GF, +} \cong \Z_4$ was false.
Thus, if $\GF$ is a field, then $\struct {\GF, +} \cong \Z_2 \times \Z_2$.
That is:

$\forall a \in \GF: a + a = 0_\GF$
as needed to be proved.
$\blacksquare$





