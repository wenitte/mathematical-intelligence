# 

Source: https://proofwiki.org/wiki/Extend_Theory_to_Satisfy_Witness_Property/Lemma

Lemma
Let $\LL$ be a language of predicate logic.
Let $\FF$ be a set of $\LL$-sentences.
Suppose that, for every $\LL$-WFF $\phi$ of $1$ free variable $x$:

There exists some term $t_\phi$ containing no variables such that:
$\paren {\exists x : \map \phi x} \implies \map \phi {x := t_\phi}$
is an element of $\FF$.

Then $\FF$ satisfies the witness property.


Proof
Let $\phi \in \FF$ be an arbitrary $\LL$-WFF of $1$ free variable $x$.
Suppose that $\FF \models_{\mathrm{PL}} \exists x : \map \phi x$.
Then, every $\LL$-structure $\MM$ satisfies:

$\map {\operatorname{val}_\MM} {\exists x : \map \phi x} = \top$
Additionally, by the assumption on $\FF$:

$\map {\operatorname{val}_\MM} {\paren {\exists x : \map \phi x} \implies \map \phi {x := t_\phi}} = \top$
By examining the truth function of conditional, we can conclude that:

$\map {\operatorname{val}_\MM} {\map \phi {x := t_\phi}} = \top$
As this holds for every $\MM$, we conclude that:

$\FF \models_{\mathrm{PL}} \map \phi {x := t_\phi}$
As $\phi$ was arbitrary, the witness property holds.
$\blacksquare$





