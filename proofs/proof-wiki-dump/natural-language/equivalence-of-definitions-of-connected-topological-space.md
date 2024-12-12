# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Connected_Topological_Space



Theorem
The following definitions of the concept of Connected Topological Space are equivalent:
Let $T = \struct {S, \tau}$ be a topological space.

Definition 1
$T$ is connected if and only if it admits no separation.

Definition 2
$T$ is connected if and only if it has no two disjoint nonempty closed sets whose union is $S$.

Definition 3
$T$ is connected if and only if its only subsets whose boundary is empty are $S$ and $\O$.

Definition 4
$T$ is connected if and only if its only clopen sets are $S$ and $\O$.

Definition 5
$T$ is connected if and only if there are no two non-empty separated sets whose union is $S$.

Definition 6
$T$ is connected if and only if there exists no continuous surjection from $T$ onto a discrete two-point space.

Definition 7
$T$ is connected if and only if:

there do not exist disjoint, non-empty open sets $X$ and $Y$ of $T$ such that $X \cup Y = S$.


Proof
$(1) \iff (2)$: No Separation iff No Union of Closed Sets
From Biconditional Equivalent to Biconditional of Negations it follows that the statement can be expressed as:

$T$ admits a separation
if and only if:

there exist two closed sets of $T$ which form a (set) partition of $S$.

By definition, a separation of $T$ is a (set) partition of $S$ by $A, B$ which are open in $T$.

From Complements of Components of Two-Component Partition form Partition:

$A \mid B$ is a (set) partition of $S$ if and only if $\relcomp S A \mid \relcomp S B$ is a (set) partition of $S$.
Hence the result by definition of closed set.
$\Box$


$(1) \iff (4)$: No Separation iff No Clopen Sets
Definition by No Clopen Sets implies Definition by Separation
Let $T$ be connected by having no clopen sets.
Aiming for a contradiction, suppose $T$ admits a separation, $A \mid B$ say.
Then both $A$ and $B$ are clopen sets of $T$, neither of which is either $S$ or $\O$.
From this contradiction it follows that $T$ can admit no separation
$\Box$


Definition by Separation implies Definition by No Clopen Sets
Let $T$ be connected by admitting no separation.
Suppose $\exists H \subseteq S$ which is clopen.
Then $\relcomp S H$ is also clopen.
Hence $H \mid \relcomp S H$ is a separation of $T$.
From this contradiction it follows that $T$ can have no non-empty proper subsets which are clopen.
$\Box$


$(2) \implies (3)$: No Union of Closed Sets implies No Subsets with Empty Boundary
Let $H \subseteq S$ be a non-empty subset whose boundary $\partial H$ is empty.
Thus:














\(\ds \partial H\)

\(=\)







\(\ds \O\)





by hypothesis








\(\ds \leadsto \ \ \)





\(\ds H^- \cap \paren {S \setminus H}^-\)

\(=\)







\(\ds \O\)





Boundary is Intersection of Closure with Closure of Complement




From Topological Closure is Closed, both $H^-$ and $\paren {S \setminus H}^-$ are closed sets of $T$.
From Union of Closure with Closure of Complement is Whole Space:

$H^- \cup \paren {S \setminus H}^- = S$
Thus $H^-$ and $\paren {S \setminus H}^-$ are two disjoint closed sets of $T$ whose union is $S$.

Hence, by hypothesis, one of them must be empty.
Suppose $H$ is not empty.
It must therefore follow that:

$S \setminus H = \O$
Therefore $H = S$.
Thus the only subsets of $S$ whose boundary is empty are $S$ and $\O$.
$\Box$


$(3) \implies (4)$: No Subsets with Empty Boundary implies No Clopen Sets
Let $H \subseteq S$ be a clopen set of $T$.
From Set is Clopen iff Boundary is Empty, $H$ has an empty boundary.
We have by hypothesis that $H = S$ or $H = \O$.
That is, the only clopen sets of $T$ are $S$ and $\O$.
$\Box$


$(4) \implies (5)$: No Clopen Sets implies No Union of Separated Sets
Suppose $A$ and $B$ are separated subsets of $T$ such that $A \cup B = S$.
By definition of separated sets:

$A \cap B^- = \O$

Then:














\(\ds S\)

\(=\)







\(\ds A \cup B\)




















\(\ds \)

\(\subseteq\)







\(\ds A \cup B^-\)





Set is Subset of its Topological Closure














\(\ds \)

\(\subseteq\)







\(\ds S\)





by definition of $S$



Hence $A = S \setminus B^-$.

From Topological Closure is Closed, $B^-$ is closed in $T$.
Thus $A$ is open in $T$.

Also by definition of separated sets:

$A^- \cap B = \O$
Hence, by the same reasoning, $B$ must also be open.

But:

$A \cap B \subseteq A \cap B^- = \O$
and $A \cup B = S$, by assumption.
So:

$A = S \setminus B$ and $B = S \setminus A$
and we conclude that both $A$ and $B$ are clopen.
Therefore, by hypothesis, one of them must be $S$ and the other must be $\O$.
That is, there are no two non-empty separated sets of $T$ whose union is $S$.
$\Box$


$(5) \implies (6)$: No Union of Separated Sets implies No Continuous Surjection to Discrete Two-Point Space
Let $T = \struct {S, \tau}$ be a topological space such that there are no two non-empty separated sets whose union is $S$.
Let $D = \struct {\set {0, 1}, \tau}$ be the discrete two-point space on $\set {0, 1}$.
Aiming for a contradiction, suppose $f: T \to \set {0, 1}$ is a continuous surjection.
By definition of continuous mapping:

$\map {f^{-1} } 0$ and $\map {f^{-1} } 1$ are open sets of $T$.

From the definition of a mapping:

$\map {f^{-1} } 0 \cup \map {f^{-1} } 1 = S$
and

$\map {f^{-1} } 0 \cap \map {f^{-1} } 1 = \O$

Then:

$\map {f^{-1} } 0 = S \setminus \map {f^{-1} } 1$
and:

$\map {f^{-1} } 1 = T \setminus \map {f^{-1} } 0$
are clopen.
From Closed Set equals its Closure they are their respective closures.

It follows from the definition that $\map {f^{-1} } 0$ and $\map {f^{-1} } 1$ are separated subsets of $T$ whose union is $S$.
Hence, by hypothesis, one of them must be empty, and the other one must be $S$.
Therefore $f$ is constant, and so is not a surjection.
This contradicts the original hypothesis.

That is, there exists no continuous surjection from $T$ onto a discrete two-point space.
$\Box$


$(6) \implies (1)$: No Continuous Surjection to Discrete Two-Point Space implies No Separation
Let $T = \struct {S, \tau}$ be a topological space such that there exists no continuous surjection from $T$ onto a discrete two-point space.

Let $D = \struct {\set {0, 1}, \tau}$ be the discrete two-point space on $\left\{{0, 1}\right\}$.
Let $A$ and $B$ be disjoint open sets of $T$ such that $A \cup B = S$.
The aim is to show that one of them is empty.

Let us define the mapping $f: S \to \set {0, 1}$ by:

$\map f x = \begin{cases}
0 & : x \in A \\
1 & : x \in B
\end{cases}$
There are only four open sets in $\set {0, 1}$, namely:

$\O$
$\set 0$
$\set 1$
$\set {0, 1}$

We have that:

$f^{-1} \sqbrk \O = \O$
$f^{-1} \sqbrk {\set 0} = A$
$f^{-1} \sqbrk {\set 1} = B$
$f^{-1} \sqbrk {\set {0, 1} } = S$
where $f^{-1} \sqbrk X$ denotes the preimage of the set $X$.

But by hypothesis all of $\O, A, B, S$ are open sets of $T$.
So by definition $f$ is continuous.
Also by hypothesis, $f$ cannot be surjective.
It follows that $f$ must be constant.
So either $A$ or $B$ must be empty, and the other one must be $S$.
Hence the result.
$\blacksquare$


This article is complete as far as it goes, but it could do with expansion.In particular: Add definition $7$You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding this information.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Expand}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $4$: Connectedness




