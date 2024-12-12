# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Totally_Pathwise_Disconnected_Space



Theorem
The following definitions of the concept of Totally Pathwise Disconnected Space are equivalent:

Definition 1
A topological space $T = \struct {S, \tau}$ is totally pathwise disconnected if and only if all path components of $T$ are singletons.

Definition 2
A topological space $T = \struct {S, \tau}$ is totally pathwise disconnected if and only if the only continuous mappings from the closed unit interval $\closedint 0 1$ to $T$ are constant mappings.


Proof
Let $T = \struct {S, \tau}$ be a totally pathwise disconnected space by definition 1.
That is:

all path components of $T$ are singletons.
By definition of path component, this means there are no two points $x, y \in S$ such that there exists a path between $x$ and $y$.
By definition of path, this means the only paths in $T$ are from a single point to that single point.
That is, that the paths in $T$ are constant mappings.
By definition of path:

the only continuous mappings from the closed unit interval $\closedint 0 1$ to $T$ are constant mappings.

That is the definition of a totally pathwise disconnected space by definition 2.
$\Box$

Let $T = \struct {S, \tau}$ be a totally pathwise disconnected space by definition 2.
That is:

the only continuous mappings from the closed unit interval $\closedint 0 1$ to $T$ are constant mappings.
That is, that the paths in $T$ are constant mappings.
That is, the path components are singletons.
That is the definition of a totally pathwise disconnected space by definition 1.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $4$: Connectedness: Disconnectedness




