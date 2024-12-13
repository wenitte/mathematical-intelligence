# 

Source: https://proofwiki.org/wiki/Ordered_Set_of_All_Mappings_is_Lattice_iff_Codomain_is_Lattice_or_Domain_is_Empty



Theorem
Let $S$ be a set.
Let $\struct {T, \preccurlyeq}$ be an ordered set.
Let $\struct {T^S, \preccurlyeq}$ denote the ordered set of all mappings from $S$ to $T$.

Then:

$\struct {T^S, \preccurlyeq}$ is a lattice
if and only if either:

$\struct {T, \preccurlyeq}$ is a lattice
or:

$S = \O$


Proof
Recall the definition of lattice:
Let $\struct {S, \preceq}$ be an ordered set.
Then $\struct {S, \preceq}$ is a lattice if and only if:

for all $x, y \in S$, the subset $\set {x, y}$ admits both a supremum and an infimum.

First a lemma to take care of the case where $S = \O$:

Lemma
Let $S = \O$.
Then $\struct {T^S, \preccurlyeq}$ is a lattice.
$\Box$


Sufficient Condition
Let $\struct {T^S, \preccurlyeq}$ be a lattice.

Let $u, v \in T$ be arbitrary.
We have that as $T^S$ is the set of all mappings from $S$ to $T$.


Domain is Non-Empty

Let $S \ne \O$.
Then there exists $x \in S$ and $f, g \in T^S$ such that:














\(\ds u\)

\(=\)







\(\ds \map f x\)




















\(\ds v\)

\(=\)







\(\ds \map g x\)










We have by hypothesis that $\struct {T^S, \preccurlyeq}$ be a lattice.
Then by definition $\set {f, g}$ admits a supremum and an infimum.

Recall that a mapping $c: S \to T$ is the supremum of $\set {f, g}$ in $T^S$ if and only if:

$(1): \quad c$ is an upper bound of $\set {f, g}$ in $T^S$
$(2): \quad c \preccurlyeq d$ for all upper bounds $d$ of $\set {f, g}$ in $T^S$.

Then:














\(\ds \map f x\)

\(\preccurlyeq\)







\(\ds \map c x\)


















\(\, \ds \land \, \)

\(\ds \map g x\)

\(\preccurlyeq\)







\(\ds \map c x\)









and for all $d \in T^S$ such that $f \preccurlyeq d$ and $g \preccurlyeq d$:














\(\ds \map c x\)

\(\preccurlyeq\)







\(\ds \map d x\)









That is:

$\map c x = \sup \set {u, v}$

Similarly, recall that a mapping $c: S \to T$ is the infimum of $\set {f, g}$ in $T^S$ if and only if:

$(1): \quad c$ is a lower bound of $\set {f, g}$ in $T^S$
$(2): \quad d \preccurlyeq c$ for all lower bounds $d$ of $\set {f, g}$ in $T^S$.

Then:














\(\ds \map c x\)

\(\preccurlyeq\)







\(\ds \map f x\)


















\(\, \ds \land \, \)

\(\ds \map c x\)

\(\preccurlyeq\)







\(\ds \map g x\)









and for all $d \in T^S$ such that $d \preccurlyeq f$ and $d \preccurlyeq g$:














\(\ds \map d x\)

\(\preccurlyeq\)







\(\ds \map c x\)









That is:

$\map c x = \inf \set {u, v}$

As $u, v \in T$ are arbitrary, it follows that $\struct {T, \preccurlyeq}$ is a lattice.


Domain is Empty

Let $S = \O$.
From the lemma:

$T^S$ is a lattice.

So, if $T^S$ is a lattice, one of the possibilities is that $S = \O$.
It follows that if $T^S$ is a lattice, then either:

$\struct {T, \preccurlyeq}$ is a lattice
or:

$S = \O$
$\Box$


Necessary Condition
Let $S = \O$.
From the lemma:

$T^S$ is a lattice.

Suppose $S \ne \O$ and $\struct {T, \preccurlyeq}$ is a lattice.
Let $f, g \in T^S$ be arbitrary mappings from $S$ to $T$.
Let $x \in S$ be arbitrary.
Then there exists $u, v \in T$ such that:














\(\ds u\)

\(=\)







\(\ds \map f x\)




















\(\ds v\)

\(=\)







\(\ds \map g x\)










We have by hypothesis that $\struct {T, \preccurlyeq}$ is a lattice.
Then by definition $\set {u, v}$ admits a supremum and an infimum.
Hence as $x$ is arbitrary:

$\forall x \in S: \set {\map f x, \map g x}$ admits both a supremum and an infimum.

Because $T^S$ is the set of all mappings from $S$ to $T$, there exists a mapping $c \in T^S$ such that:

$\forall x \in S: \map c x = \sup \set {\map f x, \map g x}$
That is:

$c = \sup \set {f, g}$

Similarly, because $T^S$ is the set of all mappings from $S$ to $T$, there exists a mapping $d \in T^S$ such that:

$\forall x \in S: \map d x = \inf \set {\map f x, \map g x}$
That is:

$d = \inf \set {f, g}$

So $\set {f, g}$ admits both a supremum and an infimum in $T^S$.
As $f$ and $g$ are arbitrary, it follows by definition that $\struct {T, \preccurlyeq}$ is a lattice.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 14$: Orderings: Exercise $14.20$




