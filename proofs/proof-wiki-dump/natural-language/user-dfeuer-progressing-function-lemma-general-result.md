# 

Source: https://proofwiki.org/wiki/User:Dfeuer/Progressing_Function_Lemma/General_Result

Theorem
Let $A$ be a class.
Let $\preceq$ be an ordering on $A$.
Let $\bot$ be the $\preceq$-smallest element of $A$.
Let $g$ be a $\preceq$-inflationary mapping whose domain and image lie within $A$:
Define a relation $R$ on $\operatorname{dom} g \times A$ by letting $xRy \iff (g(x) \preceq y) \lor (y \preceq x)$.

Then for all $x$ and $y$ in $\operatorname{dom}g$:

$(1)\quad x R \bot$
$(2)\quad x R y \land y R x \implies x R g(y)$


Proof
$(1)$ follows trivially from the choice of $\bot$ and the definition of $R$.
Suppose that $xRy$ and $yRx$.
Then $((g(x) \preceq y) \lor (y \preceq x)) \land ((g(y) \preceq x) \lor (x \preceq y))$.
By Conjunction of Disjunctions Consequence:

$(g(y) \preceq x) \lor (g(x) \preceq y) \lor ((x \preceq y) \land (y \preceq x))$
If $g(y) \preceq x$ then $x R g(y)$.
If $g(x) \preceq y$ then since $g$ is inflationary $y \preceq g(y)$.
Since $\preceq$ is transitive, $g(x) \preceq g(y)$, so $x R g(y)$.
If $(x \preceq y) \land (y \preceq x)$ then since $\preceq$ is antisymmetric, $x = y$.
Thus $g(x) =g(y)$.
Since $\preceq$ is reflexive, $g(x) \preceq g(y)$, so $x R g(y)$.
$\blacksquare$





