# 

Source: https://proofwiki.org/wiki/Monoid/Examples/x%2By%2Bxy_on_Reals

Example of Monoid
Let $\circ: \R \times \R$ be the operation defined on the real numbers $\R$ as:

$\forall x, y \in \R: x \circ y := x + y + x y$

Then $\struct {\R, \circ}$ is a monoid whose identity is $0$.


Proof
We have that:

$\forall x, y \in \R: x \circ y \in \R$
and so $\struct {\R, \circ}$ is closed.

Now let $x, y, z \in \R$.
We have:














\(\ds x \circ \paren {y \circ z}\)

\(=\)







\(\ds x + \paren {y \circ z} + x \paren {y \circ z}\)





Definition of $\circ$














\(\ds \)

\(=\)







\(\ds x + \paren {y + z + y z} + x \paren {y + z + y z}\)





Definition of $\circ$














\(\ds \)

\(=\)







\(\ds x + \paren {y + z + y z} + \paren {x y + x z + x y z}\)





Real Multiplication Distributes over Addition














\(\ds \)

\(=\)







\(\ds x + y + z + y z + x y + x z + x y z\)





Real Addition is Associative




and:














\(\ds \paren {x \circ y} \circ z\)

\(=\)







\(\ds \paren {x \circ y} + z + \paren {x \circ y} z\)





Definition of $\circ$














\(\ds \)

\(=\)







\(\ds \paren {x + y + x y} + z + \paren {x + y + x y} z\)





Definition of $\circ$














\(\ds \)

\(=\)







\(\ds \paren {x + y + x y} + z + \paren {x z + y z + x y z}\)





Real Multiplication Distributes over Addition














\(\ds \)

\(=\)







\(\ds x + y + x y + z + x z + y z + x y z\)





Real Addition is Associative




As can be seen by inspection:

$x \circ \paren {y \circ z} = \paren {x \circ y} \circ z$
and so $\circ$ is associative.

Then we have:














\(\ds x \circ 0\)

\(=\)







\(\ds x + 0 + x \times 0\)





Definition of $\circ$














\(\ds \)

\(=\)







\(\ds x\)





Real Addition Identity is Zero, Zero Element of Multiplication on Numbers














\(\ds \)

\(=\)







\(\ds 0 + x + 0 \times x\)





Real Addition Identity is Zero, Zero Element of Multiplication on Numbers














\(\ds \)

\(=\)







\(\ds 0 \circ x\)





Definition of $\circ$




The result follows by definition of monoid.
$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): Chapter $4$. Groups: Exercise $11$




