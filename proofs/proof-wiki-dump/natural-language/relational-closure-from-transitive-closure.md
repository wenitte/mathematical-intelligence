# 

Source: https://proofwiki.org/wiki/Relational_Closure_from_Transitive_Closure



Theorem
Let $A$ be a set or class.
Let $\RR$ be a relation on $A$.
Let $\RR^+$ be the transitive closure of $\RR$.
Let $B \subseteq A$.
Let $B' = B \cup \inv {\paren {\RR^+} } B$.
Let $C$ be an $\RR$-transitive subset or subclass of $A$ such that $B \subseteq C$.

Then:

$B'$ is $\RR$-transitive
$B' \subseteq C$
If $B$ is a set and $\RR$ is set-like then $B'$ is a set.
That is, $B'$ is the relational closure of $B$ under $\RR$.


Proof
$B'$ is $\RR$-transitive
Let $x \in B'$ and $y \in A$, and let $y \mathrel \RR x$.
If $x \in B$, then by the definition of transitive closure:

$y \mathrel {\RR^+} x$
so:

$y \in B'$
Let $x \in \inv {\paren {\RR^+} } B$.
Then:

$x \mathrel {\RR^+} b$
for some $b \in B$.
Since $\RR \subseteq \RR^+$, it follows that:

$y \mathrel {\RR^+} x$
Since $\RR^+$ is transitive:

$y \mathrel {\RR^+} b$
That is:

$y \in \inv {\paren {\RR^+} } B$
so $y \in B'$.
As this holds for all such $x$ and $y$, $B'$ is $\RR$-transitive.
$\Box$


$B' \subseteq C$
Let $x \in B'$.
Then $x \in B$ or $x \in \inv {\paren {\RR^+} } B$.
Let $x \in B$.
Then because $B \subseteq C$:

$x \in C$
Suppose that $x \in \inv {\paren {\RR^+} } B$.
Then for some $b \in B$:

$x \mathrel \RR b$
By the definition of transitive closure:

for some $n \in \N_{>0}$ there exist $a_0, a_1, \dots, a_n$ such that:
$x = a_0 \mathrel \RR a_1 \mathrel \RR \cdots \mathrel \RR a_n = b$

This article, or a section of it, needs explaining.In particular: Expand to full argument.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Thus by the Principle of Mathematical Induction:

$x \in C$
$\Box$


Set-like implies set
Let $B$ be a set.
Let $\RR$ be set-like.
Then by Inverse Image of Set under Set-Like Relation is Set:

$\paren {\RR^+}^{-1}$ is a set.
Thus $B'$ is a set by the Axiom of Unions.
$\blacksquare$





