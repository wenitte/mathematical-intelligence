# 

Source: https://proofwiki.org/wiki/Matroid_with_No_Circuits_Has_Single_Base


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $M = \struct {S, \mathscr I}$ be a matroid with no circuits.

Then:

$S$ is the only base on $M$.
Proof
From Dependent Subset Contains a Circuit:

$M$ has no dependent subsets
By definition of dependent subsets:

Every subset of $S$ is independent
In particular:

$S \in \mathscr I$
By definition of independent subsets:

$X \in \mathscr I \implies X \subseteq S$
Hence $S$ is a base on $M$ by definition.

Let $X$ be a base on $M$.
Then $X \subseteq S$.
By definition of a base on $M$:

$X$ is a maximal independent subset of $M$
As $S \in \mathscr I$, by definition of a  maximal set:

$X = S$
Hence:

$S$ is the only base on $M$.
$\blacksquare$

Sources
1976: Dominic Welsh: Matroid Theory ... (previous) ... (next) Chapter $1.$ $\S 9.$ Circuits




