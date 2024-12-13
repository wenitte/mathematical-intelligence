# 

Source: https://proofwiki.org/wiki/Negative_of_Element_in_Field_is_Unique

Theorem
Let $\struct {F, +, \times}$ be a field.
Let $a \in F$.

Then the negative $-a$ of $a$ is unique.


Proof 1
By definition, a field is a ring whose ring product less zero is an abelian group.
The result follows from Ring Negative is Unique.
$\blacksquare$


Proof 2
Let $b, c \in F$ such that both $a + b = 0$ and $a + c = 0$.
Thus:














\(\ds b + \paren {a + c}\)

\(=\)







\(\ds b + 0\)





as $c$ is a negative of $a$














\(\ds \)

\(=\)







\(\ds b\)





Definition of Field Zero



But also:














\(\ds \paren {b + a} + c\)

\(=\)







\(\ds \paren {a + b} + c\)





Field Axiom $\text A1$: Associativity of Addition














\(\ds \)

\(=\)







\(\ds 0 + c\)





as $b$ is a negative of $a$














\(\ds \)

\(=\)







\(\ds c\)





Definition of Field Zero



So $b = c$ and the result follows.
$\blacksquare$





