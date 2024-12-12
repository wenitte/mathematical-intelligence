# 

Source: https://proofwiki.org/wiki/Element_of_Matroid_Base_and_Circuit_has_Substitute



Theorem
Let $M = \struct {S, \mathscr I}$ be a matroid.
Let $B \subseteq S$ be a base of $M$.
Let $C \subseteq S$ be a circuit of $M$.
Let $x \in B \cap C$.

Then:

$\exists y \in C \setminus B : \paren{B \setminus \set x} \cup \set y$ is a base of $M$

That is, there exists $y \in C \setminus B$ such that substituting $y$ for $x$ in $B$ is another base.


Proof
By definition of a circuit we have:

Lemma 1
$C \setminus \set x$ is an independent proper subset of $C$
$\Box$

From Independent Subset of Matroid is Augmented by Base:

$\exists X \subseteq B \setminus \paren{C \setminus \set x} : \paren{C \setminus \set x} \cup X$ is a base of $M$

By definition of independent and dependent subsets we have:

Lemma 2
$x \notin \paren {C \setminus \set x} \cup X$
$\Box$
 
From matroid axiom $(\text I 4)$ we have:

Lemma 3
$\exists y \in \paren {\paren {C \setminus \set x} \cup X} \setminus \paren {B \setminus \set x} : \paren {B \setminus \set x} \cup \set y \in \mathscr I : \card {\paren {B \setminus \set x} \cup \set y} = \card {\paren {C \setminus \set x} \cup X}$
$\Box$

From Independent Subset is Base if Cardinality Equals Cardinality of Base:

$\paren {B \setminus \set x} \cup \set y$ is a base of $M$

Because $x \notin \paren {C \setminus \set x} \cup X$:

$y \ne x$
By definition of set difference:

$y \notin B \setminus \set x$:
By definition of set union:

$y \notin \paren {B \setminus \set x} \cup \set x = B$
By the definition of a subset:

$y \notin X$
By definition of set union:

$y \in C \setminus \set x \subseteq C$
By definition of set difference:

$y \in C \setminus B$
$\blacksquare$





