# 

Source: https://proofwiki.org/wiki/Intersection_of_Weak_Lower_Closures_in_Toset

Theorem
Let $\struct {S, \preccurlyeq}$ be a totally ordered set.
Let $a, b \in S$.

Then:

$a^\preccurlyeq \cap b^\preccurlyeq = \paren {\min \set {a, b} }^\preccurlyeq$
where:

$a^\preccurlyeq$ denotes the weak lower closure of $a$
$\min$ denotes the min operation.


Proof
As $\struct {S, \preccurlyeq}$ is a totally ordered set, either $a \preccurlyeq b$ or $b \preccurlyeq a$.
Both sides are seen to be invariant upon interchanging $a$ and $b$.
Without loss of generality, let $b \preccurlyeq a$.
Then it follows by definition of $\min$ that $\min \set {a, b} = b$.

Thus, from Intersection with Subset is Subset, it suffices to show that:

$b^\preccurlyeq \subseteq a^\preccurlyeq$
By definition of weak lower closure, this comes down to showing that:

$\forall c \in S: c \preccurlyeq b \implies c \preccurlyeq a$

So let $c \in S$ with $c \preccurlyeq b$.
Recall that $b \preccurlyeq a$.
Now as $\preccurlyeq$ is a total ordering, it is in particular transitive.
Hence $c \preccurlyeq a$.
$\blacksquare$


Also see
Intersection of Weak Upper Closures in Toset




