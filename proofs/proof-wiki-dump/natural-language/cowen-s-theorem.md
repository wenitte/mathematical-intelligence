# 

Source: https://proofwiki.org/wiki/Cowen%27s_Theorem


This article has been identified as a candidate for Featured Proof status.If you do not believe that this proof is worthy of being a Featured Proof, please state your reasons on the talk page.To discuss this page in more detail, feel free to use the talk page.


Theorem
Let $g$ be a progressing mapping.
Let $x$ be a set.
Let $\powerset x$ denote the power set of $x$.
Let $M_x$ denote the intersection of the $x$-special subsets of $\powerset x$ with respect to $g$.

Let $M$ be the class of all $x$ such that $x \in M_x$.
Then $M$ is minimally superinductive under $g$.


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


Also presented as
Let $g$ be a progressing mapping.
There exists a class $M$ whose elements are exactly those $x$ which are elements of all classes that are superinductive under $g$.
Also:

$x \in M$ if and only if $x$ is an element of every subset of $\powerset x$ that:
contains $\O$
is closed under $g$ relative to $x$
is closed under chain unions.


Source of Name
This entry was named for Robert H. Cowen.


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $4$: Superinduction, Well Ordering and Choice: Part $\text {III}$ -- The existence of minimally superinductive classes: $\S 7$ Cowen's theorem




