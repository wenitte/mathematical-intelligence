# 

Source: https://proofwiki.org/wiki/Composite_of_Isomorphisms_is_Isomorphism/R-Algebraic_Structure

Theorem
Let:

$\struct {S_1, \ast_1}_R$
$\struct {S_2, \ast_2}_R$
$\struct {S_3, \ast_3}_R$
be $R$-algebraic structures with the same number of operations.
Let:

$\phi: \struct {S_1, \ast_1}_R \to \struct {S_2, \ast_2}_R$
$\psi: \struct {S_2, \ast_2}_R \to \struct {S_3, \ast_3}_R$
be isomorphisms.

Then the composite of $\phi$ and $\psi$ is also an isomorphism.


Proof
If $\phi$ and $\psi$ are both isomorphisms, then they are by definition:

homomorphisms
bijections.
So:

From Composite of Homomorphisms for R-Algebraic Structures is Homomorphism we have that $\phi \circ \psi$ and $\psi \circ \phi$ are both homomorphisms
From Composite of Bijections is Bijection we have that $\phi \circ \psi$ and $\psi \circ \phi$ are both bijections;
and hence by definition also isomorphisms.
$\blacksquare$





