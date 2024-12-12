# 

Source: https://proofwiki.org/wiki/Dipper_Semigroup_is_Commutative_Semigroup



Theorem
The dipper semigroup is a commutative semigroup.


Proof
Recall the definition of the dipper semigroup:
Let $m, n \in \Z$ be integers such that $m \ge 0, n > 0$.
Let $\N_{< \paren {m \mathop + n} }$ denote the initial segment of the natural numbers:

$\N_{< \paren {m \mathop + n} } := \set {0, 1, \ldots, m + n - 1}$
Let $+_{m, n}$ be the dipper operation on $\N_{< \paren {m \mathop + n} }$:

$\forall a, b \in \N_{< \paren {m \mathop + n} }: a +_{m, n} b = \begin{cases} a + b & : a + b < m \\ a + b - k n & : a + b \ge m \end{cases}$
where $k$ is the largest integer satisfying:

$m + k n \le a + b$

Taking the semigroup axioms in turn:


Semigroup Axiom $\text S 0$: Closure
Let $a, b \in \N_{< \paren {m \mathop + n} }$ be arbitrary.
From Dipper Operation is Closed on Initial Segment:

$a +_{m, n} b \in \N_{< \paren {m \mathop + n} }$
Thus $\struct {N_{< \paren {m \mathop + n} }, +_{m, n} }$ is closed.
$\Box$


Semigroup Axiom $\text S 1$: Associativity
We have from Dipper Operation is Associative that $+_{m, n}$ is associative.
$\Box$

The semigroup axioms are thus seen to be fulfilled, and so $\struct {N_{< \paren {m \mathop + n} }, +_{m, n} }$ is a semigroup.

Then we note that Integer Addition is Commutative:

$a + b = b + a$
and so it follows directly that $a +_{m, n} b = b +_{m, n} a$.
Hence $\struct {N_{< \paren {m \mathop + n} }, +_{m, n} }$ is a commutative semigroup.
$\blacksquare$





