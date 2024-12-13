# 

Source: https://proofwiki.org/wiki/Intersection_of_Weak_Upper_Closures_in_Toset

Theorem
Let $\struct {S, \preccurlyeq}$ be a totally ordered set.
Let $a, b \in S$.

Then:

$a^\succcurlyeq \cap b^\succcurlyeq = \paren {\map \max {a, b} }^\succcurlyeq$
where:

$a^\succcurlyeq$ denotes weak upper closure of $a$
$\max$ denotes the max operation.


Proof
As $\struct {S, \preccurlyeq}$ is a totally ordered set, either $a \preccurlyeq b$ or $b \preccurlyeq a$.
Both sides are seen to be invariant upon interchanging $a$ and $b$.
Without loss of generality, let $a \preccurlyeq b$.
Then it follows by definition of $\max$ that:

$\map \max {a, b} = b$

Thus, from Intersection with Subset is Subset, it suffices to show that:

$b^\succcurlyeq \subseteq a^\succcurlyeq$
By definition of weak upper closure, this comes down to showing that:

$\forall c \in S: b \preccurlyeq c \implies a \preccurlyeq c$

So let $c \in S$ with $b \preccurlyeq c$.
Recall that $a \preccurlyeq b$.
Now as $\preccurlyeq$ is a total ordering, it is in particular transitive.
Hence $a \preccurlyeq c$.
$\blacksquare$


Also see
Intersection of Weak Lower Closures in Toset




