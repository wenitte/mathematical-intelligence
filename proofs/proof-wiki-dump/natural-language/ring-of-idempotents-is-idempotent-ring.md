# 

Source: https://proofwiki.org/wiki/Ring_of_Idempotents_is_Idempotent_Ring



Theorem
Let $\struct {R, +, \circ}$ be a commutative ring.
Let $\struct {A, \oplus, \circ}$ be its ring of idempotents.

Then $\struct {A, \oplus, \circ}$ is an idempotent ring.


Proof
First, it is to be established that $\struct {A, \oplus, \circ}$ is a ring in the first place.
This we do by verifying the ring axioms.


Ring Axiom $\text A0$: Closure under Addition
Let $x, y \in A$.
It is to be shown that $x \oplus y \in A$, i.e. that $x \oplus y$ is an idempotent element of $R$.
Compute as follows:














\(\ds \paren {x \oplus y} \circ \paren {x \oplus y}\)

\(=\)







\(\ds \paren {x + y - 2 x \circ y} \circ \paren {x + y - 2 x \circ y}\)





Definition of $\oplus$














\(\ds \)

\(=\)







\(\ds \paren {x + y - 2 x \circ y} \circ x + \paren {x + y - 2 x \circ y} \circ y - \paren {x + y - 2 x \circ y} \circ \paren {2 x \circ y}\)





Ring Axiom $\text D$: Distributivity of Product over Addition














\(\ds \)

\(=\)







\(\ds x \circ x + y \circ x - \paren {2 x \circ y} \circ x + x \circ y + y \circ y - \paren {2 x \circ y} \circ y\)




















\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds x \circ \paren {2 x \circ y} - y \circ \paren {2 x \circ y} + \paren {2 x \circ y} \circ \paren {2 x \circ y}\)





Ring Axiom $\text D$: Distributivity of Product over Addition














\(\ds \)

\(=\)







\(\ds x \circ x + y \circ x - 2 x \circ y \circ x + x \circ y + y \circ y - 2 x \circ y \circ y\)




















\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds 2 x \circ x \circ y - 2 y \circ x \circ y + 4 x \circ y \circ x \circ y\)





Product of Integral Multiples














\(\ds \)

\(=\)







\(\ds x + x \circ y - 2 x \circ y + x \circ y + y - 2 x \circ y - 2 x \circ y - 2 x \circ y + 4 x \circ y\)





$\circ$ is commutative, $x, y$ are idempotent














\(\ds \)

\(=\)







\(\ds x + y - 2 x \circ y\)





Integral Multiple Distributes over Ring Addition














\(\ds \)

\(=\)







\(\ds x \oplus y\)





Definition of $\oplus$



Hence $x \oplus y \in A$, as desired.
$\Box$


Ring Axiom $\text A1$: Associativity of Addition
Let $x, y, z \in A$.
It is to be shown that $\oplus$ is associative, that is:

$\paren {x \oplus y} \oplus z = x \oplus \paren {y \oplus z}$
This is shown by the following computation:














\(\ds \paren {x \oplus y} \oplus z\)

\(=\)







\(\ds \paren {x \oplus y} + z - 2 \paren {x \oplus y} \circ z\)





Definition of $\oplus$














\(\ds \)

\(=\)







\(\ds x + y - 2 x \circ y + z - 2 \paren {x + y - 2 x \circ y} \circ z\)





Definition of $\oplus$














\(\ds \)

\(=\)







\(\ds x + y - 2 x \circ y + z - 2 x \circ z - 2 y \circ z + 4 x \circ y \circ z\)





Ring Axiom $\text D$: Distributivity of Product over Addition














\(\ds \)

\(=\)







\(\ds x + y + z - 2 y \circ z - 2 x \circ y - 2 x \circ z + 4 x \circ y \circ z\)





Ring Axiom $\text A2$: Commutativity of Addition














\(\ds \)

\(=\)







\(\ds x + \paren { y + z - 2 y \circ z} - 2 x \circ y - 2 x \circ z + 4 x \circ y \circ z\)





Ring Axiom $\text A1$: Associativity of Addition














\(\ds \)

\(=\)







\(\ds x + \paren {y + z - 2 y \circ z} - 2 x \circ \paren {y + z - 2 y \circ z}\)





Ring Axiom $\text D$: Distributivity of Product over Addition














\(\ds \)

\(=\)







\(\ds x + \paren {y \oplus z} - 2 x \circ \paren {y \oplus z}\)





Definition of $\oplus$














\(\ds \)

\(=\)







\(\ds x \oplus \paren {y \oplus z}\)





Definition of $\oplus$



$\Box$


Ring Axiom $\text A2$: Commutativity of Addition
Let $x, y \in A$.
It is to be shown that $\oplus$ is commutative, that is:

$x \oplus y = y \oplus x$
This is shown by the following computation:














\(\ds x \oplus y\)

\(=\)







\(\ds x + y - 2 x \circ y\)





Definition of $\oplus$














\(\ds \)

\(=\)







\(\ds y + x - 2 y \circ x\)





Ring Axiom $\text A2$: Commutativity of Addition and \circ is commutative














\(\ds \)

\(=\)







\(\ds y \oplus x\)





Definition of $\oplus$



$\Box$


Ring Axiom $\text A3$: Identity for Addition
Let $x \in A$, and let $0_R$ be the zero of $R$.
By Ring Zero is Idempotent, $0_R \in A$.
It suffices to show that:

$x \oplus 0_R = x$
since Ring Axiom $\text A2$: Commutativity of Addition was already verified above.

Now:














\(\ds x \oplus 0_R\)

\(=\)







\(\ds x + 0_R - 2 x \circ 0_R\)





Definition of $\oplus$














\(\ds \)

\(=\)







\(\ds x\)





Ring Product with Zero



as desired.
$\Box$


Ring Axiom $\text A4$: Inverses for Addition
Let $x \in A$.
It is to be shown that there exists $y \in A$ such that:

$x \oplus y = y \oplus x = 0_R$
by $(A3)$ above.
In fact, one has:














\(\ds x \oplus x\)

\(=\)







\(\ds x + x - 2 x \circ x\)





Definition of $\oplus$














\(\ds \)

\(=\)







\(\ds 2 x - 2 x\)





$x$ is an idempotent element














\(\ds \)

\(=\)







\(\ds 0_R\)





Ring Subtraction equals Zero iff Elements are Equal



so that each $x \in A$ is its own inverse for $\oplus$.
$\Box$


Ring Axiom $\text M0$: Closure under Product
Let $x, y \in A$.
It is to be shown that:

$x \circ y \in A$
that is, that $x \circ y$ is idempotent.
We have the following computation:














\(\ds \paren {x \circ y} \circ \paren {x \circ y}\)

\(=\)







\(\ds x \circ \paren {y \circ x} \circ y\)





Ring Axiom $\text M1$: Associativity of Product














\(\ds \)

\(=\)







\(\ds x \circ \paren {x \circ y} \circ y\)





$\circ$ is commutative














\(\ds \)

\(=\)







\(\ds \paren {x \circ x} \circ \paren {y \circ y}\)





Ring Axiom $\text M1$: Associativity of Product














\(\ds \)

\(=\)







\(\ds x \circ y\)





$x, y$ are idempotent elements



$\Box$


Ring Axiom $\text M1$: Associativity of Product
Immediate from Restriction of Associative Operation is Associative.
$\Box$


Ring Axiom $\text D$: Distributivity of Product over Addition
By Restriction of Commutative Operation is Commutative, $\circ$ is commutative on $A$.
Thus to establish distributivity, it suffices to verify, for $x, y, z \in A$:

$x \circ \paren {y \oplus z} = \paren {x \circ y} \oplus \paren {x \circ z}$
To this end, we compute as follows:














\(\ds x \circ \paren {y \oplus z}\)

\(=\)







\(\ds x \circ \paren {y + z - 2 y \circ z}\)





Definition of $\oplus$














\(\ds \)

\(=\)







\(\ds x \circ y + x \circ z - 2 x \circ y \circ z\)





Ring Axiom $\text D$: Distributivity of Product over Addition














\(\ds \)

\(=\)







\(\ds x \circ y + x \circ z - 2 x \circ x \circ y \circ z\)





$x$ is an idempotent element














\(\ds \)

\(=\)







\(\ds x \circ y + x \circ z - 2 x \circ y \circ x \circ z\)





$\circ$ is commutative














\(\ds \)

\(=\)







\(\ds \paren {x \circ y} \oplus \paren {x \circ z}\)





Definition of $\oplus$



$\Box$

Therefore, having verified all ring axioms, we conclude $\struct {A, \oplus, \circ}$ is a ring.

By assumption all $x \in A$ are idempotent elements for $\circ$.
Thus $\circ$ is an idempotent operation on $A$.

Consequently, $\struct {A, \oplus, \circ}$ is an idempotent ring.
$\blacksquare$


Also see
Ring of Idempotents of Commutative and Unitary Ring is Boolean Ring


Sources
2008: Paul Halmos and Steven Givant: Introduction to Boolean Algebras ... (previous) ... (next): $\S 1$: Exercise $7$




