# 

Source: https://proofwiki.org/wiki/Semigroup/Examples/x%2By-xy_on_Integers



Example of Semigroup
Let $\circ: \Z \times \Z$ be the operation defined on the integers $\Z$ as:

$\forall x, y \in \Z: x \circ y := x + y - x y$
Then $\struct {\Z, \circ}$ is a semigroup.


Proof
We have that:

$\forall x, y \in \Z: x \circ y \in \Z$
and so $\struct {\Z, \circ}$ is closed.
Now let $x, y, z \in \Z$.
We have:














\(\ds x \circ \paren {y \circ z}\)

\(=\)







\(\ds x + \paren {y \circ z} - x \paren {y \circ z}\)





Definition of $\circ$














\(\ds \)

\(=\)







\(\ds x + \paren {y + z - y z} - x \paren {y + z - y z}\)





Definition of $\circ$














\(\ds \)

\(=\)







\(\ds x + y + z - y z - x y - x z + x y z\)










and:














\(\ds \paren {x \circ y} \circ z\)

\(=\)







\(\ds \paren {x \circ y} + z - \paren {x \circ y} z\)





Definition of $\circ$














\(\ds \)

\(=\)







\(\ds \paren {x + y - x y} + z - \paren {x + y - x y} z\)





Definition of $\circ$














\(\ds \)

\(=\)







\(\ds x + y - x y + z - x z - y z + x y z\)










As can be seen by inspection:

$x \circ \paren {y \circ z} = \paren {x \circ y} \circ z$
and so $\circ$ is associative.

The result follows by definition of semigroup.
$\blacksquare$


Also see
Inclusion-Exclusion Principle (think about why)


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $5$: Semigroups: Exercise $1$




