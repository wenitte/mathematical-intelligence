# 

Source: https://proofwiki.org/wiki/Finite_Ring_with_No_Proper_Zero_Divisors_is_Field

Theorem
Let $\struct {R, +, \circ}$ be a finite non-null ring with no proper zero divisors.

Then $R$ is a field.


Proof
As $R$ is non-null, there is at least one nonzero element in $R$. 
Consider the two maps from $R$ to itself, for each nonzero $a \in R$:

$\varphi_R: x \mapsto a \circ x$
$\varphi_L: x \mapsto x \circ a$
By Ring Element is Zero Divisor iff not Cancellable, all nonzero elements in $R$ are cancellable. Thus:

$a \circ x = a \circ y \implies x=y$
$x \circ a = y \circ a \implies x=y$
Therefore, both maps are by definition injective.
By Equivalence of Mappings between Finite Sets of Same Cardinality, the maps are then also surjective.

First, we show that $R$ has a unity. 
Since $\varphi_R$ is surjective, any element $b \in R$ can be written in the form:

$b = a \circ x_b$
for some $x_b \in R$.
As $\varphi_L$ is surjective, there is some $x_L \in R$ such that:

$a = x_L \circ a$

We now have:














\(\ds b\)

\(=\)







\(\ds a \circ x_b\)




















\(\ds \)

\(=\)







\(\ds x_L \circ a \circ x_b\)





as $a = x_L \circ a$














\(\ds \)

\(=\)







\(\ds x_L \circ b\)





as $b = a \circ x_b$



Thus, $x_L$ is a multiplicative left identity. 
By similar arguments, $R$ also has a multiplicative right identity, which can be denoted $x_R$.
By Left and Right Identity are the Same, it follows that $x_L = x_R$, so they are the unity of $R$. 

Now we show that $R$ is a division ring, i.e. that each nonzero element of $R$ has an inverse.
Let $1_R$ denote the unity of $R$.
Since $\varphi_R$ is surjective, it follows that:

$a \circ y_R = 1_R$
for some $y_R \in R$. 
Since $\varphi_L$ is surjective, it follows that:

$y_L \circ a = 1_R$
for some $y_L \in R$.
Recalling that the maps were defined for each nonzero $a \in R$, this means that every nonzero element of $R$ has both a left inverse and a right inverse. 
By Left Inverse and Right Inverse is Inverse, each nonzero element of $R$ has an inverse, so $R$ is by definition a division ring. 

It now follows by Wedderburn's Theorem that $R$ is a field. 
$\blacksquare$





