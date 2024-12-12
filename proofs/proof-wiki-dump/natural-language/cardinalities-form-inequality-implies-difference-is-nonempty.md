# 

Source: https://proofwiki.org/wiki/Cardinalities_form_Inequality_implies_Difference_is_Nonempty

Theorem
Let $X, Y$ be sets.
Let

$\card X < \card Y$
where $\card X$ denotes the cardinality of $X$.
Then:

$Y \setminus X \ne \O$


Proof
Aiming for a contradiction, suppose that:

$Y \setminus X = \O$
Then by Set Difference with Superset is Empty Set:

$Y \subseteq X$
Hence by Subset implies Cardinal Inequality:

$\card Y \le \card X$
This contradicts:

$\card X < \card Y$
Hence the result.
$\blacksquare$


Sources
Mizar article CARD_1:68




