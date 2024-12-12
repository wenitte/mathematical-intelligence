# 

Source: https://proofwiki.org/wiki/Addition_of_Division_Products

Theorem
Let $\struct {R, +, \circ}$ be a commutative ring with unity.
Let $\struct {U_R, \circ}$ be the group of units of $\struct {R, +, \circ}$.

Let $a, c \in R, b, d \in U_R$.
Then:

$\dfrac a b + \dfrac c d = \dfrac {a \circ d + b \circ c} {b \circ d}$
where $\dfrac x z$ is defined as $x \circ \paren {z^{-1} }$, that is, $x$ divided by $z$.


Proof
First we demonstrate the operation has the specified property:














\(\ds \frac a b + \frac c d\)

\(=\)







\(\ds a \circ b^{-1} + c \circ d^{-1}\)





Definition of Division Product














\(\ds \)

\(=\)







\(\ds a \circ b^{-1} \circ d \circ d^{-1} + c \circ d^{-1} \circ b \circ b^{-1}\)





Definition of Inverse Element and Definition of Identity Element under $\circ$














\(\ds \)

\(=\)







\(\ds \paren {a \circ d} \circ \paren {d^{-1} \circ b^{-1} } + \paren {b \circ c} \circ \paren {d^{-1} \circ b^{-1} }\)





Definition of Commutative Operation














\(\ds \)

\(=\)







\(\ds \paren {a \circ d + b \circ c} \circ \paren {b \circ d}^{-1}\)





Definition of Distributive Operation $\circ$ over $+$














\(\ds \)

\(=\)







\(\ds \frac {a \circ d + b \circ c} {b \circ d}\)





Definition of Division Product




Notice that this works only if $\struct {R, +, \circ}$ is commutative.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $23$. The Field of Rational Numbers: Theorem $23.7 \ (2)$




