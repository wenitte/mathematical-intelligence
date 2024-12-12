# 

Source: https://proofwiki.org/wiki/Cowen%27s_Theorem/Also_presented_as



Cowen's Theorem: Also presented as
Let $g$ be a progressing mapping.
There exists a class $M$ whose elements are exactly those $x$ which are elements of all classes that are superinductive under $g$.
Also:

$x \in M$ if and only if $x$ is an element of every subset of $\powerset x$ that:
contains $\O$
is closed under $g$ relative to $x$
is closed under chain unions.


Proof
Lemma $1$
$\powerset x$ is $x$-special with respect to $g$.
$\Box$


Lemma $2$
$\O \in M$
$\Box$


Lemma $3$
$x \subseteq y \implies M_x \subseteq M_y$
$\Box$


Lemma $4$
$M$ is closed under chain unions.
$\Box$


Lemma $5$
$x \subseteq y \implies M_y \subseteq M_x \cup \paren {\powerset y \setminus \powerset x}$
$\Box$


Lemma $6$
$\forall z: M_z \subseteq M$
$\Box$


Lemma $7$
$M$ is closed under $g$ relative to $x$.
$\Box$

Recall:

From Lemma $2$:
$\O \in M$
From Lemma $7$:
$M$ is closed under $g$ relative to $x$
From Lemma $4$:
$M$ is closed under chain unions.
Hence by definition:

$M$ is superinductive under $g$.


Lemma $8$
Let $A$ be a class which is superinductive under $g$.
Then:

$M_x \subseteq A$
$\Box$

We have a priori that $M$ is superinductive under $g$.
Let $A$ be superinductive under $g$.
Let $x \in M$.
Then:

$x \in M_x$
and from Lemma $8$:

$M_x \subseteq A$
Hence:

$x \in A$
As $x$ is arbitrary, it follows by definition of subclass that:

$M \subseteq A$.
Hence by definition $M$ is minimally superinductive under $g$.
$\blacksquare$


Source of Name
This entry was named for Robert H. Cowen.


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $4$: Superinduction, Well Ordering and Choice: Part $\text {III}$ -- The existence of minimally superinductive classes: $\S 7$ Cowen's theorem: Theorem $7.13$




