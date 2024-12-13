# 

Source: https://proofwiki.org/wiki/Semantic_Consequence_of_Superset

Theorem
Let $\LL$ be a logical language.
Let $\mathscr M$ be a formal semantics for $\LL$.
Let $\FF$ be a set of logical formulas from $\LL$.
Let $\phi$ be an $\mathscr M$-semantic consequence of $\FF$.
Let $\FF'$ be another set of logical formulas.

Then:

$\FF \cup \FF' \models_{\mathscr M} \phi$
that is, $\phi$ is also a semantic consequence of $\FF \cup \FF'$.


Proof
Any model of $\FF \cup \FF'$ is a fortiori also a model of $\FF$.
By definition of semantic consequence all models of $\FF$ are models of $\phi$.

Therefore all models of $\FF \cup \FF'$ are also models of $\phi$.
Hence:

$\FF \cup \FF' \models_{\mathscr M} \phi$
as desired.
$\blacksquare$





