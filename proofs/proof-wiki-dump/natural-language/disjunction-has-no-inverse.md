# 

Source: https://proofwiki.org/wiki/Disjunction_has_no_Inverse

Theorem
Let $\lor$ denote the disjunction operation of propositional logic.

Then there exists no binary logical connective $\circ$ such that:

$(1): \quad \forall p, q \in \left\{{T, F}\right\}: \left({p \lor q}\right) \circ q = p$


Proof
Let $q$ be true.
Then $p \lor q = T$, whatever truth value $p$ holds.
Either $T \circ T = T$ or $T \circ T = F$, but not both.
So if $q = T$ either:

$\left({p \land q}\right) \circ q = T$
or:

$\left({p \land q}\right) \circ q = F$
If the first, then $(1)$ does not hold when $p = F$.
If the second, then $(1)$ does not hold when $p = T$.
Hence there can be no such $\circ$.
$\blacksquare$


Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: I'm not proud of this - it needs to be couched in more rigorous language. Also possible to prove it by truth table.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.




