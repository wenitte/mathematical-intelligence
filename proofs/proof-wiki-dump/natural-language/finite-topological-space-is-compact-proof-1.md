# 

Source: https://proofwiki.org/wiki/Finite_Topological_Space_is_Compact/Proof_1


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $T = \struct {S, \tau}$ be a topological space where $S$ is a finite set.

Then $T$ is compact.


Proof
Let $\VV$ be an open cover of $T$.
For each $x \in S$, define $\VV_x$ to be $\left\{{V \in \VV : x \in V}\right\}$

Since $S$ is finite, and since by definition of a cover, each $x\in S$ is contained in at least one $V$ in $\VV$, we have that $\set {\VV_x : x \in S}$ is a finite collection of nonempty sets.
From Principle of Finite Choice, there is a choice function which selects one $V_x$ from $\VV_x$ for each $x \in S$.  By definition of $\VV_x$, such a $V_x$ contains $x$.

Since there were only finitely many $\VV_x$, this provides finitely many open sets $V_x \in \VV$ such that $\ds S \subseteq \bigcup_{x \mathop \in S} V_x$.

Thus $\set {\VV_x : x \in S}$ is a finite subcover of $\VV$.
The result follows by definition of compact.
$\blacksquare$





