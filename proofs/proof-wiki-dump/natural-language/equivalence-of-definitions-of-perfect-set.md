# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Perfect_Set



Theorem
The following definitions of the concept of Perfect Set are equivalent:

Let $T = \struct {S, \tau}$ be a topological space.
Let $H \subseteq S$ be a subset of $S$.

Definition 1
A perfect set of a topological space $T = \left({S, \tau}\right)$ is a subset $H \subseteq S$ such that:

$H = H'$
where $H'$ is the derived set of $H$.
That is, where:

every point of $H$ is a limit point of $H$
and

every limit point of $H$ is a point of $H$.
Definition 2
A perfect set of a topological space $T = \left({S, \tau}\right)$ is a subset $H \subseteq S$ such that:

$H$ is a closed set of $T$
$H$ has no isolated points.
Definition 3
A perfect set of a topological space $T = \struct {S, \tau}$ is a subset $H \subseteq S$ such that:

$H$ is dense-in-itself.
$H$ contains all its limit points.


Proof
Let $T = \struct {S, \tau}$ be a topological space and let $H \subseteq S$.


Definition 1 implies Definition 2
Suppose that $H = H'$ where $H'$ is the derived set of $H$.
By definition of derived set, $H'$ is the set of all limit points of $H$.
So $H$ contains all its limit points and so by definition is closed.
Now we also have that any point not in $H'$ is an isolated point.
But there are no points in $H$ which are not in $H'$, so $H$ has no isolated points.
Therefore $H = H'$ implies that $H$ is closed and has no isolated points.
$\Box$


Definition 2 implies Definition 1
Suppose $H$ is closed and has no isolated points.
By Closed Set iff Contains all its Limit Points we have that $H' \subseteq H$ where $H'$ is the derived set of $H$.
As $S$ has no isolated points, all its elements are elements of its derived set.
Therefore $H \subseteq H'$.
So by definition of set equality it follows that $H = H'$.
$\Box$


Definition 2 iff Definition 3
Let $H$ be closed with no isolated points.
By definition, $H$ is closed if and only if it contains all its limit points.
Also by definition, $H$ is dense-in-itself if and only if it has no isolated points.
$\Box$

Hence the result.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $1$: General Introduction: Limit Points




