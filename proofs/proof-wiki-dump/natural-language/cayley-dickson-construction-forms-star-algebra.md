# 

Source: https://proofwiki.org/wiki/Cayley-Dickson_Construction_forms_Star-Algebra



Theorem
Let $A = \struct {A_F, \oplus}$ be a $*$-algebra.
Let $A' = \struct {A'_F, \oplus'} = \struct {A, \oplus}^2$ be the algebra formed from $A$ by the Cayley-Dickson construction.

Then $A'$ is also a $*$-algebra.


Proof
Bilinearity of $\oplus'$
First we need to show that $\oplus'$ is bilinear.

$(1): \quad$ Let $\tuple {a_1, b_1}, \tuple {a_2, b_2}, \tuple {c, d} \in A'$.
Then:














\(\ds \)

\(\)







\(\ds \paren {\tuple {a_1, b_1} + \tuple {a_2, b_2} } \oplus' \tuple {c, d}\)




















\(\ds \)

\(=\)







\(\ds \tuple {a_1 + a_2, b_1 + b_2} \oplus' \tuple {c, d}\)




















\(\ds \)

\(=\)







\(\ds \tuple {\paren {a_1 + a_2} \oplus c - d \oplus \paren {b_1 + b_2}^*, \paren {a_1 + a_2}^* \oplus d + c \oplus \paren {b_1 + b_2} }\)




















\(\ds \)

\(=\)







\(\ds \tuple {a_1 \oplus c + a_2 \oplus c - d \oplus b_1^* - d \oplus b_2^*, a_1^* \oplus d + a_2^* \oplus d + c \oplus b_1 + c \oplus b_2}\)





as $\oplus$ is bilinear














\(\ds \)

\(=\)







\(\ds \tuple {a_1 \oplus c - d \oplus b_1^*, a_1^* \oplus d + c \oplus b_1} + \tuple {a_2 \oplus c - d \oplus b_2^*, a_2^* \oplus d + c \oplus b_2}\)




















\(\ds \)

\(=\)







\(\ds \paren {\tuple {a_1, b_1} \oplus' \tuple {c, d} } + \paren {\tuple {a_2, b_2} \oplus' \tuple {c, d} }\)










Similarly (and equally tediously) we can show that:

$\tuple {c, d} \oplus' \paren {\tuple {a_1, b_1} + \tuple {a_2, b_2}} = \paren {\tuple {c, d} \oplus' \tuple {a_1, b_1}} + \paren {\tuple {c, d} \oplus' \tuple {a_2, b_2}}$

$(2): \quad$ Let $\tuple {a, b}, \tuple {c, d} \in A'$ and $\alpha, \beta \in \R$.
Then:














\(\ds \)

\(\)







\(\ds \paren {\alpha \tuple {a, b} } \oplus' \tuple {c, d}\)




















\(\ds \)

\(=\)







\(\ds \tuple {\alpha a, \alpha b} \oplus' \tuple {c, d}\)





as $\oplus$ is bilinear














\(\ds \)

\(=\)







\(\ds \tuple {\alpha a \oplus c - d \oplus \alpha b^*, \alpha a^* \oplus d + c \oplus \alpha b}\)




















\(\ds \)

\(=\)







\(\ds \alpha \tuple {a \oplus c - d \oplus b^*, a^* \oplus d + c \oplus b}\)





as $\oplus$ is bilinear














\(\ds \)

\(=\)







\(\ds \alpha \tuple {a, b} \oplus' \tuple {c, d}\)









Similarly:

$\tuple {a, b} \oplus' \paren {\tuple {c, d} \beta} = \tuple {a, b} \oplus' \tuple {c, d} \beta$
So $\oplus'$ has been shown to be a bilinear mapping.


Conjugate Nature of $*'$
We have that:

$\forall \tuple {a, b} \in A': {\tuple {a, b}^*}' = \tuple {a^*, -b}$
So:














\(\ds \)

\(\)







\(\ds {\paren { {\tuple {a, b}^*}'}^*}'\)




















\(\ds \)

\(=\)







\(\ds {\tuple {a^*, -b}^*}'\)




















\(\ds \)

\(=\)







\(\ds \tuple {\paren {a^*}^*, -\paren {-b} }\)




















\(\ds \)

\(=\)







\(\ds \tuple {a, b}\)





as $*$ is a conjugation on $A$




Finally:














\(\ds \)

\(\)







\(\ds {\paren {\tuple {a, b} \oplus' \tuple {c, d} }^*}'\)




















\(\ds \)

\(=\)







\(\ds {\tuple {a \oplus c - d \oplus b^*, a^* \oplus d + c \oplus b}^*}'\)




















\(\ds \)

\(=\)







\(\ds \tuple {\paren {a \oplus c - d \oplus b^*}^*, -\paren {a^* \oplus d + c \oplus b} }\)




















\(\ds \)

\(=\)







\(\ds \tuple {c^* \oplus a^* - b \oplus d^*, -\paren {c \oplus b + a^* \oplus d} }\)




















\(\ds \)

\(=\)







\(\ds \tuple {c^*, -d} \oplus' \tuple {a^*, -b}\)




















\(\ds \)

\(=\)







\(\ds {\tuple {c, d}^*}' \oplus' {\tuple {a, b}^*}'\)









thus proving that $*'$ is a conjugation on $A'$.

Hence the result.
$\blacksquare$


Sources
John C. Baez: The Octonions (2002): 2.2 The Cayley-Dickson Construction




