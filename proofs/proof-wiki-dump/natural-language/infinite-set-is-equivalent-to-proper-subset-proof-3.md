# 

Source: https://proofwiki.org/wiki/Infinite_Set_is_Equivalent_to_Proper_Subset/Proof_3

Theorem
A set is infinite if and only if it is equivalent to one of its proper subsets.


Proof
Let $X$ be a set which has a proper subset $Y$ such that:

$\card X = \card Y$
where $\card X$ denotes the cardinality of $X$.
Then:

$\exists \alpha \in \complement_X \paren Y$
and

$Y \subsetneqq Y \cup \set \alpha \subseteq X$
The inclusion mappings:

$i_Y: Y \to X: \forall y \in Y: i \paren y = y$
$i_{Y \cup \set \alpha}: Y \cup \set \alpha \to X: \forall y \in Y: i \paren y = y$
give:

$\card X = \card Y \le \card Y + \mathbf 1 \le \card X $
from which:

$\card X = \card Y + \mathbf 1 = \card X + \mathbf 1$
So by definition $X$ is infinite.
$\Box$

Now suppose $X$ is infinite.
That is:

$\card X = \card X + \mathbf 1$
Let $\alpha$ be any object such that $\alpha \notin X$.
Then there is a bijection $f: X \cup \set \alpha \to X$.
Let $f_{\restriction X}$ be the restriction of $f$ to $X$.
Then from Injection to Image is Bijection:

$\image {f_{\restriction X} } = X \setminus \set {f \paren \alpha}$
which is a proper subset of $X$ which is equivalent to $X$.
$\blacksquare$


Sources
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 8$: Theorem $8.10$




