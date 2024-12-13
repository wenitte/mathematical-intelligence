# 

Source: https://proofwiki.org/wiki/Outer_Jordan_Content_Never_Smaller_than_Inner_Jordan_Content

Theorem

Work In ProgressIn particular: I don't know what I was thinking when I wrote this a year ago, but it's deeply flawed.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by completing it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{WIP}} from the code.
Let $M$ be a bounded subspace of Euclidean space.
Let $S$ be an orthotope enclosing $M$.
Let $\map {m^*} A$ denote the outer Jordan content of $A$.
Let $\map V A$ denote the content of $A$.
Then:

$\map {m^*} M \ge \map V S - \map {m^*} {S \setminus M}$


Proof
Let $P$ be a finite covering of $M$, and $Q$ a finite covering of $S \setminus M$.
If $Q \supsetneq S$, we can find another finite covering $Q' = \set {Q_i \cap S : Q_i \in Q} \subseteq S$, where $\map V {Q'} \le \map V Q$.
Without loss of generality, assume that $Q \subseteq S$.
Then:

$S \setminus Q \subseteq M \subseteq P$
It follows that:

$\map V {S \setminus Q} \le \map V P$.
But because $Q \subseteq S$:

$\map V {S \setminus Q} = \map V S - \map V Q$
Therefore:

$\map V S - \map V Q \le \map V P$

Thus, by the definition of Outer Jordan Content:

$\map V S - \map {m^*} {S \setminus M} \le \map {m^*} M$
$\blacksquare$





