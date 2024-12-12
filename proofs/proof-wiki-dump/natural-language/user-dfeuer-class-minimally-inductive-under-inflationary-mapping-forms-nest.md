# 

Source: https://proofwiki.org/wiki/User:Dfeuer/Class_Minimally_Inductive_under_Inflationary_Mapping_forms_Nest

Theorem
Let $g$ be a $\subseteq$-inflationary mapping:
Let $M$ be a class which is minimally inductive under $g$.

Then for all $x, y \in M$, either $g(x) \subseteq y$ or $y \subseteq x$.

Since $g$ is inflationary, this implies that $x \subseteq y$ or $y \subseteq x$, so $M$ is a nest.


Proof
Let $\mathcal R$ be the relation on $M$ defined by letting $x R y \iff g(x) \subseteq y \lor y \subseteq x$.

By the User:Dfeuer/Progressing Function Lemma, for all $x$ and $y$ in the domain of $g$:

$y R 0$.
$x R y \land y R x \implies x R g(y)$
Thus by the User:Dfeuer/Double Induction Principle, $x R y$ for all $x, y \in M$.
Thus by the definition of $\mathcal R$, the theorem holds.
$\blacksquare$





