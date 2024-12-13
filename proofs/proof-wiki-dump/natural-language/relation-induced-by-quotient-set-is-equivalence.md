# 

Source: https://proofwiki.org/wiki/Relation_Induced_by_Quotient_Set_is_Equivalence

Theorem
Let $S$ be a set.
Let $\RR$ be an equivalence relation on $S$.
Let $S / \RR$ be the quotient set of $S$ determined by $\RR$.
Let $\RR'$ be the equivalence relation induced by $S / \RR$ on $S$.

Then $\RR' = \RR$.


Proof
Let $\RR$ be an equivalence relation on $S$.
Let $\tuple {x, y} \in \RR$.
By definition of equivalence class, $y \in \eqclass x \RR$ and $x \in \eqclass x \RR$.
By definition of quotient set, $x$ and $y$ both belong to the same element of $S / \RR$.
So, by definition of $\RR'$, it follows that $\tuple {x, y} \in \RR'$.
That is:

$\tuple {x, y} \in \RR \implies \tuple {x, y} \in \RR'$
and so by definition of subset:

$\RR \subseteq \RR'$

Now let $\tuple {x, y} \in \RR'$.
Then $y$ belongs to the same element of $S / \RR$ that $x$ does.
That is:

$y \in \eqclass x \RR$
and so $\tuple {x, y} \in \RR$.
That is:

$\tuple {x, y} \in \RR' \implies \tuple {x, y} \in \RR$
and so by definition of subset:

$\RR' \subseteq \RR$

The result follows by definition of set equality.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 10$: Equivalence Relations: Theorem $10.3$




