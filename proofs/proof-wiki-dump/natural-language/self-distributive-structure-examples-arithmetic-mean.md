# 

Source: https://proofwiki.org/wiki/Self-Distributive_Structure/Examples/Arithmetic_Mean

Example of Self-Distributive Structure
Let $\Q$ denote the set of rational numbers.
Let $\circ$ be the operation defined on $\Q$ as:

$\forall x, y \in \Q: x \circ y := \dfrac {x + y} 2$
That is, $x \circ y$ is the arithmetic mean of $x$ and $y$ in $\Q$.
Then the algebraic structure $\struct {\Q, \circ}$ so formed is a self-distributive quasigroup.


Proof









\(\ds \forall a, b, c \in \Q: \, \)



\(\ds a \circ \paren {b \circ c}\)

\(=\)







\(\ds \dfrac {a + \frac {b + c} 2} 2\)





Definition of $\circ$














\(\ds \)

\(=\)







\(\ds \dfrac a 2 + \dfrac b 4 + \dfrac c 4\)





simplification














\(\ds \)

\(=\)







\(\ds \paren {\dfrac a 4 + \dfrac b 4} + \paren {\dfrac a 4 + \dfrac c 4}\)





rearrangement














\(\ds \)

\(=\)







\(\ds \dfrac {\paren {a \circ b} + \paren {a \circ c} } 2\)





Definition of $\circ$














\(\ds \)

\(=\)







\(\ds \paren {a \circ b} \circ \paren {a \circ c}\)





Definition of $\circ$




As Rational Addition is Commutative, it follows immediately from Left Distributive and Commutative implies Distributive that:

$\forall a, b, c \in \Q: \paren {a \circ b} \circ c = \paren {a \circ c} \circ \paren {b \circ c}$

To demonstrate that $\struct {\Q, \circ}$ is a quasigroup, it remains to be shown that:

$\forall a, b \in \Q: \exists ! x \in \Q: x \circ a = b$
$\forall a, b \in \Q: \exists ! y \in \Q: a \circ y = b$

We have:














\(\ds x \circ a\)

\(=\)







\(\ds b\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \dfrac {x + a} 2\)

\(=\)







\(\ds b\)














\(\ds \leadstoandfrom \ \ \)





\(\ds x\)

\(=\)







\(\ds 2 b - a\)









and similarly:














\(\ds a \circ y\)

\(=\)







\(\ds b\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \dfrac {a + y} 2\)

\(=\)







\(\ds b\)














\(\ds \leadstoandfrom \ \ \)





\(\ds y\)

\(=\)







\(\ds 2 b - a\)









Hence both $x$ and $y$ are determined uniquely by $a$ and $b$.
Hence by definition $\struct {\Q, \circ}$ is a quasigroup.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 16$: The Natural Numbers: Exercise $16.21 \ \text{(a)}$




