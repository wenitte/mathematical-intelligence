# 

Source: https://proofwiki.org/wiki/Associative_Algebra_has_Multiplicative_Inverses_iff_Unitary_Division_Algebra

Theorem
Let $\struct {A_R, \oplus}$ be an associative algebra over the ring $A_R$.

Then:

$\struct {A_R, \oplus}$ has a unique multiplicative inverse for every non-zero $a \in A_R$
if and only if:

$\struct {A_R, \oplus}$ is a unitary division algebra.


Proof
Let $A = \struct {A_R, \oplus}$ be a unitary division algebra whose zero is $\mathbf 0_A$.
From the unitary nature of $A$ we have that $\oplus$ has a unit $1$ such that:

$\forall a \in A_R, a \ne \mathbf 0_A: a \oplus 1 = a = 1 \oplus a$

From the division algebra nature of $A$ we have that $R$ is a field and that:

$\forall a, b \in A_R, b \ne \mathbf 0_A: \exists_1 x \in A_R, y \in A_R: b \oplus x = a = y \oplus b$
As $1 \in A_R$ it follows that the above holds if $1$ is substituted for $a$:

$\exists_1 x \in A_R, y \in A_R: b \oplus x = 1 = y \oplus b$
Hence:














\(\ds 1\)

\(=\)







\(\ds b \oplus x\)





for some $x \in A_R$








\(\ds \leadsto \ \ \)





\(\ds y \oplus 1\)

\(=\)







\(\ds y \oplus \paren {b \oplus x}\)














\(\ds \leadsto \ \ \)





\(\ds y \oplus 1\)

\(=\)







\(\ds \paren {y \oplus b} \oplus x\)





Associativity of $\oplus$








\(\ds \leadsto \ \ \)





\(\ds y \oplus 1\)

\(=\)







\(\ds 1 \oplus x\)





as $1 = y \oplus b$








\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds x\)





Definition of $1$



So if we let $b^{-1} := x = y$ in the above, we have:

$\exists_1 b^{-1} \in A_R: 1 = b \oplus b^{-1} = 1 = b^{-1} \oplus b$
That is, $b^{-1}$ is a unique multiplicative inverse of $b$.
So every non-zero element of $A_R$ has a unique multiplicative inverse in $A_R$.
$\Box$

Now suppose that $A_R$ has a unique multiplicative inverse in $A_R$.
It follows directly that, by definition, $\struct {A_R, \oplus}$ has to be a unitary algebra or there is no $1$ for $a \oplus a^{-1}$ to equal.

First we prove existence, i.e we show that:

$\forall a, b \in A_R, b \ne \mathbf 0_A: \exists x \in A_R, y \in A_R: b \oplus x = a = y \oplus b$
Take $a \oplus b^{-1}$ where $b^{-1}$ is the unique multiplicative inverse of $b$.
Then:














\(\ds a \oplus b^{-1}\)

\(=\)







\(\ds x\)














\(\ds \leadsto \ \ \)





\(\ds \paren {a \oplus b^{-1} } \oplus b\)

\(=\)







\(\ds x \circ b\)














\(\ds \leadsto \ \ \)





\(\ds a \oplus \paren {b^{-1} \oplus b}\)

\(=\)







\(\ds x \oplus b\)





Associativity of $\oplus$








\(\ds \leadsto \ \ \)





\(\ds a \oplus 1\)

\(=\)







\(\ds x \oplus b\)





as $b^{-1} \oplus b = 1$














\(\ds a\)

\(=\)







\(\ds x \oplus b\)









Similarly, we show that $\exists y \in A_R: a = y \oplus b$.

Now we prove uniqueness.
Now suppose $\exists x_1, x_2 \in A_R: a = x_1 \oplus b, a = x_2 \oplus b$.
Then:














\(\ds a\)

\(=\)







\(\ds x_1 \oplus b\)














\(\ds \leadsto \ \ \)





\(\ds a \oplus b^{-1}\)

\(=\)







\(\ds \paren {x_1 \oplus b} \oplus b^{-1}\)





$b^{-1}$ being the unique multiplicative inverse of $b$








\(\ds \leadsto \ \ \)





\(\ds a \oplus b^{-1}\)

\(=\)







\(\ds x_1 \oplus \paren {b \oplus b^{-1} }\)





Associativity of $\oplus$








\(\ds \leadsto \ \ \)





\(\ds a \oplus b^{-1}\)

\(=\)







\(\ds x_1 \circ 1\)





as $b \oplus b^{-1} = 1$








\(\ds \leadsto \ \ \)





\(\ds a \oplus b^{-1}\)

\(=\)







\(\ds x_1\)









In exactly the same way, $a = x_2 \oplus b \implies a \oplus b^{-1} = x_2$.
And so $x_1 = x_2$ thus proving uniqueness.

In a similar way we prove that 

$\forall a, b \in A_R, b \ne \mathbf 0_A: \exists_1 y \in A_R: a = y \oplus b$
$\blacksquare$


Sources
2002: John C. Baez: The Octonions: 1.1 Preliminaries




