# 

Source: https://proofwiki.org/wiki/Associative_and_Anticommutative

Theorem
Let $\circ$ be a binary operation on a set $S$.
Let $\circ$ be both associative and anticommutative.

Then:

$\forall x, y, z \in S: x \circ y \circ z = x \circ z$


Proof
Let $\circ$ be both associative and anticommutative.
Then from Associative Idempotent Anticommutative:

$\forall x, z \in S: x \circ z \circ x = x$
and $\circ$ is idempotent.

Consider $x \circ y \circ z \circ x \circ z$.
We have:














\(\ds x \circ y \circ z \circ x \circ z\)

\(=\)







\(\ds x \circ \paren {y \circ z} \circ x \circ z\)




















\(\ds \)

\(=\)







\(\ds x \circ z\)










Also:














\(\ds x \circ y \circ z \circ x \circ z\)

\(=\)







\(\ds x \circ y \circ \paren {z \circ x \circ z}\)




















\(\ds \)

\(=\)







\(\ds x \circ y \circ z\)









Hence the result.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 2$: Compositions: Exercise $2.17 \ \text{(c)}$




