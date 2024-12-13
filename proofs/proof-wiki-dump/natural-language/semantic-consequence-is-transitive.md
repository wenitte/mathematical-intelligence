# 

Source: https://proofwiki.org/wiki/Semantic_Consequence_is_Transitive

Theorem
Let $\LL$ be a logical language.
Let $\mathscr M$ be a formal semantics for $\LL$.
Let $\FF, \GG$ and $\HH$ be sets of $\LL$-formulas.
Suppose that:














\(\ds \FF\)

\(\models_{\mathscr M}\)







\(\ds \GG\)




















\(\ds \GG\)

\(\models_{\mathscr M}\)







\(\ds \HH\)









Then $\FF \models_{\mathscr M} \HH$.


Proof
Let $\MM$ be an $\mathscr M$-structure.
By assumption, if $\MM$ is a model of $\FF$, it is one of $\GG$ as well.
But any model of $\GG$ is also a model of $\HH$.

In conclusion, any model of $\FF$ is also a model of $\HH$.
Hence the result, by definition of semantic consequence.
$\blacksquare$





