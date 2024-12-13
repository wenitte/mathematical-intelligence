# 

Source: https://proofwiki.org/wiki/Length_of_Concatenation

Theorem
Let $S$ and $T$ be words, and let $ST$ be their concatenation.

Then:

$\size {S T}\ = \size S + \size T$
where $\size S$ denotes the length of $S$.


Proof
Because of the unique readability of $ST$, we can determine for each symbol $s$ that is part of $S T$, whether:

$s$ is part of $S$
$s$ is part of $T$
and furthermore, precisely one of these options occurs.
There are $\size S$ symbols in $S$, and $\size T$ symbols in $T$.

In total, then, $S T$ is seen to consist of $\size S + \size T$ symbols.
$\blacksquare$





