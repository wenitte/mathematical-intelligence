# 

Source: https://proofwiki.org/wiki/Increasing_Union_of_Ideals_is_Ideal/Chain



Theorem
Let $R$ be a ring.
Let $\struct {P, \subseteq}$ be the ordered set consisting of all ideals of $R$, ordered by inclusion.
Let $\set {I_\alpha}_{\alpha \mathop \in A}$ be a non-empty chain of ideals in $P$.
Let $\ds I = \bigcup_{\alpha \mathop \in A} I_\alpha$ be their union.

Then $I$ is an ideal of $R$.


Proof
Property 1: $0 \in I$
Since $\set {I_\alpha}_{\alpha \mathop \in A}$ is non-empty chain, it must contain some ideal $I_\beta$
Since $I_\beta$ is an ideal, $0 \in I_\beta$. 
Thus $0 \in I$.


Property 2: $x \in I \implies -x \in I$
If $x \in I$, then $x \in I_\beta$ for some $\beta\in A$.
Since $I_\beta$ is an ideal, $-x \in I_\beta$. 
Thus $-x \in I$.


Property 3: $x, y \in I \implies x + y \in I$
If $x,y \in I$, then $x \in I_\beta$ for some $\beta\in A$, and $y \in I_\gamma$ for some $\gamma \in A$. 
Since $\set {I_\alpha}_{\alpha \mathop \in A}$ is totally ordered, $I_\beta \subseteq I_\gamma$ or $I_\gamma \subseteq I_\beta$.
Without loss of generality, we can assume $I_\beta \subseteq I_\gamma$, which gives us $x, y \in I_\gamma$.
Since $I_\gamma$ is an ideal, $x + y \in I_\gamma$.
Thus $x + y \in I$.


Property 4: $x \in I \land r \in R \implies r x, x r \in I$
If $x \in I$, then $x \in I_\beta$ for some $\beta\in A$. 
If $r \in R$, then since $I_\beta$ is an ideal, $r x, x r \in I_\beta$.
Thus $r x, x r \in I$.

Since $I$ satisfies these $4$ properties, it is a ideal of $R$.
$\blacksquare$


Also see
Union of Chain of Proper Ideals is Proper Ideal




