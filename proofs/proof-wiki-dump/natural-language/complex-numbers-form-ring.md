# 

Source: https://proofwiki.org/wiki/Complex_Numbers_form_Ring

Theorem
The set of complex numbers $\C$ forms a ring under addition and multiplication: $\struct {\C, +, \times}$.


Proof
From Complex Numbers under Addition form Infinite Abelian Group, $\struct {\C, +}$ is an abelian group.

We also have that:

Complex Multiplication is Closed:
$\forall x, y \in \C: x \times y \in \C$
Complex Multiplication is Associative:
$\forall x, y, z \in \C: x \times \paren {y \times z} = \paren {x \times y} \times z$
Thus $\struct{\C, +}$ is a semigroup.

Finally we have that Complex Multiplication Distributes over Addition:










\(\ds \forall x, y, z \in \C: \, \)



\(\ds x \times \paren {y + z}\)

\(=\)







\(\ds x \times y + x \times z\)




















\(\ds \paren {y + z} \times x\)

\(=\)







\(\ds y \times x + z \times x\)










Hence the result, by definition of ring.
$\blacksquare$


Sources
1970: B. Hartley and T.O. Hawkes: Rings, Modules and Linear Algebra ... (previous) ... (next): Chapter $1$: Rings - Definitions and Examples: $2$: Some examples of rings: Ring Example $4$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 54$. The definition of a ring and its elementary consequences




