# 

Source: https://proofwiki.org/wiki/Modulo_Multiplication_is_Associative/Proof_2

Theorem
Multiplication modulo $m$ is associative:

$\forall \eqclass x m, \eqclass y m, \eqclass z m \in \Z_m: \paren {\eqclass x m \times_m \eqclass y m} \times_m \eqclass z m = \eqclass x m \times_m \paren {\eqclass y m \times_m \eqclass z m}$

That is:

$\forall x, y, z \in \Z_m: \paren {x \cdot_m y} \cdot_m z = x \cdot_m \paren {y \cdot_m z}$


Proof
Let $j$ be the largest integer such that:

$j m \le x y$
Let $p$ be the largest integer such that:

$p m \le y z$
By definition of multiplication modulo $m$:

$x \cdot_m y = x y - j m$
$y \cdot_m z = y z - p m$

Let $k$ be the largest integer such that:

$k m \le \paren {x y - j m} z$
Let $q$ be the largest integer such that:

$q m \le x \paren {y z - p m}$
Then:

$\paren {j z + k} m \le \paren {x y} z$
$\paren {q + x p} m \le x \paren {y z}$
Thus:














\(\ds \paren {x \cdot_m y} \cdot_m z\)

\(=\)







\(\ds \paren {x y - j m} z - k m\)





Definition of Modulo Multiplication














\(\ds x \cdot_m \paren {y \cdot_m z}\)

\(=\)







\(\ds x \left({y z - p m}\right) - q m\)





Definition of Modulo Multiplication




But suppose that there exists an integer $s$ such that:

$s m \le \paren {x y} z$
and:

$j z + k < s$
Then:

$\paren {j z + k + 1} m \le \paren {x y} z$
from which:

$\paren {k + 1} m \le \paren {x y - j m} z$
But this contradicts the definition of $k$.
Thus $j z + k$ is the largest of those integers $i$ such that $i m \le \paren {x y} z$.

Similarly, $q + x p$ is the largest of those integers $i$ such that $i m \le x \paren {y z}$.
From Integer Multiplication is Associative:

$\paren {x y} z = x \paren {y z}$
Thus $j z + k = q + x p$ and so:














\(\ds \paren {x \cdot_m y} \cdot_m z\)

\(=\)







\(\ds \paren {x y - j m} z - k m\)





Definition of Modulo Multiplication














\(\ds \)

\(=\)







\(\ds x y z - \paren {j z + k} m\)




















\(\ds \)

\(=\)







\(\ds x y z - \paren {q + x p} m\)




















\(\ds \)

\(=\)







\(\ds x \paren {y z - p m} - q m\)




















\(\ds \)

\(=\)







\(\ds x \cdot_m \paren {y \cdot_m z}\)





Definition of Modulo Multiplication



$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 2$: Compositions: Example $2.3$



