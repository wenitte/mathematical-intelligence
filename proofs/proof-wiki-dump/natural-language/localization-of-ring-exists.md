# 

Source: https://proofwiki.org/wiki/Localization_of_Ring_Exists



Theorem
Let $A$ be a commutative ring with unity.
Let $S \subseteq A$ be a multiplicatively closed subset with $0 \notin S$.

Then there exists a localization $\struct {A_S, \iota}$ of $A$ at $S$.


Proof
Define a relation $\sim$ on the Cartesian product $A \times S$ by:

$\tuple {a, s} \sim \tuple {b, t} \iff \exists u \in S: a t u = b s u$


Lemma 1
The relation $\sim$ is an equivalence relation.
$\Box$

Let $A_S$ denote the quotient set $\paren {A \times S} / \sim$.
Let $\dfrac a s$ denote the equivalence class of $\tuple {a, s}$ in $\paren {A \times S} / \sim$.

For $\dfrac a s, \dfrac b t \in A_S$, let the following operations be defined:

$\dfrac a s + \dfrac b t = \dfrac {a t + b s} {s t}$
$\dfrac a s \cdot \dfrac b t = \dfrac {a b} {s t}$


Lemma 2
The operations $+$ and $\cdot$ are well defined on $A_S$.
$\Box$

Now define $\iota: A \to A_S$ by:

$\map \iota a := \dfrac a 1$
It is to be shown that $\struct {A_S, \iota}$ satisfy the universal property for localization.
That is, to be shown is the $(2)$ of Definition of Localization of Ring.

Let $B$ be a ring.
Let $g: A \to B$ be a mapping such that:

$g \sqbrk S \subseteq B^\times$
where $B^\times$ denotes the set of units of $B$.
Suppose that $h: A_S \to B$ is a ring homomorphism with $h \circ \iota = g$.
Then we must have:

$\map h {\dfrac a 1} = \map g a$
and:

$\map h {\dfrac 1 s} \cdot \map h {\dfrac s 1} = 1$
Therefore:

$\map h {\dfrac 1 s} \map g s = 1$
so:

$\map h {\dfrac 1 s} = \map g s^{-1}$
Therefore:

$\map h {\dfrac a s} = \map h {\dfrac a 1} \cdot \map h {\dfrac 1 s} = \map g a \map g s^{-1}$.
So if such $h$ exists it must equal $\map g a \map g s^{-1}$, so is unique.


This article needs to be linked to other articles.In particular: Links to results demonstrating the validity of the steps in the above.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Therefore, to conclude the proof we pull out:

Lemma 3
The map $\map h {\dfrac a s} = \map g a \map g s^{-1}$ is a well defined ring homomorphism $A_S \to B$.
$\Box$

Hence the result.
$\blacksquare$


Notes

This page or section has statements made on it that ought to be extracted and proved in a Theorem page.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by creating any appropriate Theorem pages that may be needed.To discuss this page in more detail, feel free to use the talk page.
The proof shows additionally that:

$\forall x \in A_S: \exists s \in S: s x \in \iota \sqbrk A$
$\map \ker \iota = \set {a \in A: \exists s \in S: a s = 0}$


Also see
If $A$ is an integral domain and $S = A \setminus \set 0$ then the localization of $A$ at $S$ is precisely the field of quotients of $A$.




