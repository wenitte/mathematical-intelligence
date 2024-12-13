# 

Source: https://proofwiki.org/wiki/Inverse_for_Rational_Multiplication

Theorem
Each element $x$ of the set of non-zero rational numbers $\Q_{\ne 0}$ has an inverse element $\dfrac 1 x$ under the operation of rational number multiplication:

$\forall x \in \Q_{\ne 0}: \exists \dfrac 1 x \in \Q_{\ne 0}: x \times \dfrac 1 x = 1 = \dfrac 1 x \times x$


Proof
From the definition, the field $\struct {\Q, +, \times}$ of rational numbers is the field of quotients of the integral domain $\struct {\Z, +, \times}$ of integers.
From Rational Multiplication Identity is One, the identity for $\struct {\Q, \times}$ is $1 = \dfrac 1 1 = \dfrac p p$ where $p \in \Z$ and $p \ne 0$.

From the definition of product inverses in field of quotients, we have that:

$\paren {\dfrac p q}^{-1} = \dfrac q p$
which can be demonstrated directly:














\(\ds \frac p q \times \frac q p\)

\(=\)







\(\ds \frac {p \times q} {q \times p}\)




















\(\ds \)

\(=\)







\(\ds \frac {p \times q} {p \times q}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 1\)





Equal Elements of Field of Quotients



Note that this is defined only when $p \ne 0$ and $q \ne 0$.

Now let $x = \dfrac p q \in \Q$.
We define $\dfrac 1 x$ as $1 \times \paren {\dfrac p q}^{-1}$.
Hence:














\(\ds \frac 1 x\)

\(=\)







\(\ds \frac 1 1 \times \paren {\frac p q}^{-1}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 1 \times \frac q p\)




















\(\ds \)

\(=\)







\(\ds \frac {1 \times q} {1 \times p}\)




















\(\ds \)

\(=\)







\(\ds \frac q p\)









$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 4$: Neutral Elements and Inverses




