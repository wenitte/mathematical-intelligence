# 

Source: https://proofwiki.org/wiki/User:Dfeuer/Double_Induction_Principle



Theorem
Let $M$ be a class.
Let $\mathcal R$ be a relation.
Let $g$ be a mapping whose domain includes $M$.
Let $M$ be minimally inductive under $g$.
Suppose that for all $x$ and $y$ in $M$:

$x \mathrel{\mathcal R} 0$
$x \mathrel{\mathcal R} y \land y \mathrel{\mathcal R} x \implies x \mathrel{\mathcal R} g(y)$

Then for all $x, y \in M$, $x \mathrel{\mathcal R} y$


Proof
Lemma
Let $y \in M$.

Then:

If $x \mathrel{\mathcal R} y$ for all $x \in M$, then $y \mathrel{\mathcal R} x$ for all $x \in M$.
Proof
Suppose that $x \mathrel{\mathcal R} y$ for all $x \in M$.
Let $B$ be the class of all $z \in M$ such that $y \mathrel{\mathcal R} z$.
By the premise, $0 \in B$.
Suppose that $z \in B$.
Then $y \mathrel{\mathcal R} z$.
By assumption, $z \mathrel{\mathcal R} y$.
Thus by the premise: $y \mathrel{\mathcal R} g(z)$, so $g(z) \in B$.
Thus $B$ is inductive under $g$.
As $M$ is minimally inductive under $g$ and $B \subseteq M$, $B = M$.
$\Box$
Now let $C$ be the class of all $y \in M$ such that for all $x \in M$:

$x \mathrel{\mathcal R} y$
By the premise, $0 \in C$.
Suppose that $y \in C$.
Let $x \in M$.
Then by the lemma, $y \mathrel{\mathcal R} x$.
Thus by the premise, $x \mathrel{\mathcal R} g(y)$.
Since this holds for all $x \in M$, $g(y) \in C$.
Thus $C$ is inductive under $g$.
Since $M$ is minimally inductive under $g$, $C = M$.
$\blacksquare$





