# 

Source: https://proofwiki.org/wiki/Restricted_Tukey%27s_Theorem/Strong_Form


This article needs proofreading.In particular: Adapted from a very short outline.If you believe all issues are dealt with, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.

This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $X$ be a set.
Let $\AA$ be a non-empty set of subsets of $X$.
Let $'$ be a unary operation on $X$.

Let $\AA$ have finite character.
For all $A \in \AA$ and all $x \in X$, let either:

$A \cup \set x \in \AA$
or:

$A \cup \set {x'} \in \AA$

Then for each $A \in \AA$ there exists a $C \in \AA$ such that:

$A \subseteq C$
and:

for all $x \in X$, either $x \in C$ or $x' \in C$.


Proof
Let $A \in \AA$.
Let:

$\BB = \set {B: B \subseteq X \text{ and } A \cup B \in \AA}$

It is to be shown that $\BB$ has finite character:
First suppose that $B \in \BB$ and $F$ is a Definition:Finite Subset subset of $B$.
Then since $B \in \BB$, $B \subseteq X$ and $A \cup B \in \AA$.
We wish to show that $F \in \BB$.
Since $F \subseteq B \subseteq X$:

$F \subseteq X$
It remains to be shown that:

$A \cup F \in \AA$.
$A \cup F \subseteq A \cup B$.
Let $G$ be a finite subset of $A \cup F$.
Then $G$ is a finite subset of $A \cup B$.
Since $A \cup B \in \AA$ and $\AA$ has finite character, $G \in \AA$.
Thus every finite subset of $A \cup F$ is in $\AA$.
Since $\AA$ has finite character, $A \cup F \in \AA$.
Thus $F \in \BB$.

Suppose instead that $B \subseteq X$ and every finite subset of $B$ is an element of $\BB$.
We wish to show that $B \in \BB$.
In order to do this, we must show that $A \cup B \in \AA$.
Let $F$ be a finite subset of $A \cup B$.
$\AA$ has finite character, $F \cap A \in \AA$.

Since $F \cap B$ is a finite subset of $B$, $F \cap B \in \BB$ by assumption.
Then by the definition of $\BB$:

$\paren {F \cap B} \cup A \in \AA$
But $F$ is a finite subset of $\paren {F \cap B} \cup A \in \AA$.
Since $\AA$ has finite character, $F \in \AA$.
As this holds for all finite subsets of $A \cup B$ and $\AA$ has finite character:

$A \cup B \in \AA$
$\Box$

Let $B \in \BB$ and $x \in X$.
Then:

$B \cup A \in \AA$
so either $B \cup A \cup \set x$ or $B \cup A \cup \set {x'}$ is in $\AA$.
But then $B \cup \set x$ or $B \cup \set {x'}$ is in $\BB$ by the definition of $\BB$.
Thus $\BB$ satisfies the premises of the weak form of the Restricted Tukey's Theorem.
Thus there is a $B \in \BB$ such that for all $x \in X$, either $x \in B$ or $x' \in B$.
Let $C = A \cup B$.
Then since $B \subseteq C$, if $x \in X$ then either $x \in C$ or $x' \in C$.
But since $B \in \BB$:

$C = A \cup B \in \AA$
$\blacksquare$


Source of Name
This entry was named for John Wilder Tukey.


Sources
2005: R.E. Hodel: Restricted versions of the Tukey-Teichmuller Theorem that are equivalent to the Boolean prime ideal theorem (Arch. Math. Logic Vol. 44: pp. 459 – 472)




