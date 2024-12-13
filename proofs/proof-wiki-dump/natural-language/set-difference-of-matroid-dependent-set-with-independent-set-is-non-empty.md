# 

Source: https://proofwiki.org/wiki/Set_Difference_of_Matroid_Dependent_Set_with_Independent_Set_is_Non-empty


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $M = \struct {S, \mathscr I}$ be a matroid.
Let $I$ be an independent subset of $M$.
Let $D$ be a dependent subset of $M$.

Then:

$D \setminus I \ne \O$


Corollary 1
Let $M = \struct {S, \mathscr I}$ be a matroid.
Let $D$ be a dependent subset of $M$.
Let $B$ be a base of $M$.

Then:

$D \setminus B \ne \O$


Corollary 2
Let $M = \struct {S, \mathscr I}$ be a matroid.
Let $I$ be an independent subset of $M$.
Let $C$ be a circuit of $M$.

Then:

$C \setminus I \ne \O$


Corollary 3
Let $M = \struct {S, \mathscr I}$ be a matroid.
Let $B$ be an base of $M$.
Let $C$ be a circuit of $M$.

Then:

$C \setminus B \ne \O$


Proof
From Independent Subset Contains No Dependent Subset:

$D \nsubseteq I$
By definition of subset:

$\exists x \in D : x \notin I$
By definition of set difference:

$\exists x \in D \setminus I$
The result follows.
$\blacksquare$





