# 

Source: https://proofwiki.org/wiki/Minimal_Element/Examples/Finite_Subsets_of_Natural_Numbers_less_Empty_Set

Examples of Minimal Elements
Let $\FF$ denote the set of finite subsets of the natural numbers $\N$.
Let $\GG$ denote the set $\FF \setminus \set \O$, that is, $\FF$ with the empty set excluded.
Consider the ordered set $\struct {\GG, \subseteq}$.

The minimal elements of $\struct {\GG, \subseteq}$ are the sets of the form $\set n$, for $n \in \N$.


Proof
Let $n \in \N$.
We have that $\set n$ is a finite subset of $\N$.
Hence $\set n \in \GG$ by definition of $\GG$.

Let $A \in \GG$ be some finite subset of $\N$ such that $A \subseteq \set n$.
Then either $A = \O$ or $A = \set n$.
Because $\O \notin \GG$ it follows that $A = \set n$
Hence $\set n$ is a minimal element of $\struct {\GG, \subseteq}$ by definition.

Now suppose $B \subseteq \N$ such that:

$\exists m, n \in B: m \ne n$
Then $B$ is a finite subset of $\N$ such that $B \ne \O$.
Hence $B \in \GG$ by definition of $\GG$.
Note that we have:

$\set n \subseteq B$
and also:

$\set m \subseteq B$
but $B \ne \set n$ and $B \ne \set m$.
Hence $B$ is not a minimal element of $\struct {\GG, \subseteq}$.
$\blacksquare$


Sources
1996: Winfried Just and Martin Weese: Discovering Modern Set Theory. I: The Basics ... (previous) ... (next): Part $1$: Not Entirely Naive Set Theory: Chapter $2$: Partial Order Relations: Exercise $6 \ \text {(a)}$




