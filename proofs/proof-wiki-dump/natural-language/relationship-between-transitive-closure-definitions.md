# 

Source: https://proofwiki.org/wiki/Relationship_between_Transitive_Closure_Definitions


Work In ProgressIn particular: This page must be repaired now that the definitions have been fixed.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by completing it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{WIP}} from the code.

Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: Show that the existence of each implies the existence of the other.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Theorem
Let $x$ be a set.
Let $a$ be the smallest set such that $x \in a$ and $a$ is transitive.
Let $b$ be the smallest set such that $x \subseteq b$ and $b$ is transitive.

Then $a = b \cup \set x$.


Proof
We have that:

$x \in a$
and $a$ is transitive.
So:

$x \subseteq a$
Thus by the definition of $b$ and of smallest set:

$b \subseteq a$
Since we also have $x \in a$:

$b \cup \set x \subseteq a$

$x \in \set x$, so:

$x \in b \cup \set x$
$b \cup \set x$ is transitive:
If $p \in b$ then:

$p \subseteq b \subseteq b \cup \set x$.
If $p \in \set x$ then:

$p = x$
So by the definition of $b$:

$p \subseteq b \subseteq b \cup \set x$
Thus by the definition of $a$:

$a \subseteq b \cup \set x$
Thus the theorem holds by definition of set equality.
$\blacksquare$





