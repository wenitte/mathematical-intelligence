# 

Source: https://proofwiki.org/wiki/Semigroup/Examples/x%2By%2Bxy_on_Positive_Integers

Example of Semigroup
Let $\circ: \Z_{\ge 0} \times \Z_{\ge 0}$ be the operation defined on the integers $\Z_{\ge 0}$ as:

$\forall x, y \in \Z_{\ge 0}: x \circ y := x + y + x y$
Then $\struct {\Z_{\ge 0}, \circ}$ is a semigroup.


Proof
We have that:

$\forall x, y \in \Z_{\ge 0}: x + y + x y \in \Z_{\ge 0}$
and so $\struct {\Z_{\ge 0}, \circ}$ is closed.

Now let $x, y, z \in \Z_{\ge 0}$.
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







\(\ds x + y + z + y z + x y + x z + x y z\)










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







\(\ds x + y + x y + z + x z + y z + x y z\)










As can be seen by inspection:

$x \circ \paren {y \circ z} = \paren {x \circ y} \circ z$
and so $\circ$ is associative.

The result follows by definition of semigroup.
$\blacksquare$


Sources
1951: Nathan Jacobson: Lectures in Abstract Algebra: Volume $\text { I }$: Basic Concepts ... (previous) ... (next): Chapter $\text{I}$: Semi-Groups and Groups: $1$: Definition and examples of semigroups: Example $3$




