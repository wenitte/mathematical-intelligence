# 

Source: https://proofwiki.org/wiki/Densely_Ordered/Examples/Arbitrary_Densely_Ordered

Example of Densely Ordered Set
Let $S$ be the subset of the rational numbers $\Q$ defined as:

$S = \Q \cap \paren {\openint 0 1 \cup \hointr 2 3}$
Then $\struct {S, \le}$ is a densely ordered set.

Hence $\struct {S, \le}$ is isomorphic to $\struct {\Q, \le}$.


Proof
Let $a, b \in S$ such that $0 < a < b < 1$.
Then from Rational Numbers are Densely Ordered:

$\exists c \in \Q: a < c < b$
and as $0 < c < 1$ it follows that $c \in S$.
Let $a, b \in S$ such that $2 \le a < b < 3$.
Then from Rational Numbers are Densely Ordered:

$\exists c \in \Q: a < c < b$
and as $2 < c < 3$ it follows that $c \in S$.
Now let $a, b \in S$ such that $0 < a < 1$ and $2 \le b < 3$.
Then from Rational Numbers are Densely Ordered:

$\exists c \in \Q: a < c < 1$
and as $0 < c < 1$ it follows that $c \in S$.
So it follows that $\struct {S, \le}$ is a densely ordered set.

Next consider the mapping $\phi: \Q \to S$ defined as:

$\forall x \in \Q: \map \phi x = \begin {cases} \dfrac {-1} {x - 1} : x < 0 \\ \dfrac {3 x + 2} {x + 1} : x \ge 0 \end {cases}$
It can be seen that:

$\Img \phi = \Q \cap \paren {\openint 0 1 \cup \hointr 2 3}$
and:

$\forall x, y \in \Q: x \le y \iff \map \phi x \le \map \phi y$
Hence the result.
$\blacksquare$


Sources
1996: Winfried Just and Martin Weese: Discovering Modern Set Theory. I: The Basics ... (previous) ... (next): Part $1$: Not Entirely Naive Set Theory: Chapter $2$: Partial Order Relations: Exercise $23$




