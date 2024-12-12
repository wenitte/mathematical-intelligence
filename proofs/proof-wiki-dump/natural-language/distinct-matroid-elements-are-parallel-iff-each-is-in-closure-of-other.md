# 

Source: https://proofwiki.org/wiki/Distinct_Matroid_Elements_are_Parallel_iff_Each_is_in_Closure_of_Other



Theorem
Let $M = \struct {S, \mathscr I}$ be a matroid.
Let $\sigma: \powerset S \to \powerset S$ denote the closure operator of $M$.
Let $x, y \in S : x \ne y$.

Then $x$ is parallel to $y$ if and only if:

$(1)\quad x$ and $y$ are not loops
$(2)\quad x \in \map \sigma {\set y}$
$(3)\quad y \in \map \sigma {\set x}$


Proof
Lemma
Let $a, b \in S$.
Let $\set a$ and $\set b$ be independent.

Then $\set {a, b}$ is dependent if and only if:

$a \in \map \sigma {\set b}$
and

$b \in \map \sigma {\set a}$
$\Box$


Necessary Condition
Let $x$ and $y$ be parallel.
By definition of parallel:

$\set x$ and $\set y$ are independent
$\set {x, y}$ is dependent
By definition of a loop:

$x$ and $y$ are not loops
From Lemma:

$x \in \map \sigma {\set y}$
$y \in \map \sigma {\set x}$
It has been shown that conditions $(1), (2)$ and $(3)$ above hold.
$\Box$


Sufficient Condition
Let conditions $(1), (2)$ and $(3)$ above hold.
By definition of a loop:

$\set x$ and $\set y$ are independent
From Lemma:

$\set {y, x} \notin \mathscr I$
It follows that $x$ is parallel to $y$ by definition. 
$\blacksquare$


Sources
1976: Dominic Welsh: Matroid Theory ... (previous) ... (next) Chapter $1.$ $\S 4.$ Loops and parallel elements




