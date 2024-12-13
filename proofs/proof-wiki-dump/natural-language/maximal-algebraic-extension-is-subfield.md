# 

Source: https://proofwiki.org/wiki/Maximal_Algebraic_Extension_is_Subfield

Theorem
Let $L / K$ be a field extension.
Let $K^a$ be the maximal algebraic extension of $K$ contained in $L$.

Then $K^a$ is a subfield of $L$.


Proof
Let $\alpha, \beta \in K^a$.
By Field Adjoined Algebraic Elements is Algebraic, $\map K {\alpha, \beta} / K$ is algebraic.
By definition, $\map K {\alpha, \beta}$ is a field.
Therefore $\alpha \beta$, $\alpha^{-1}$ and $\alpha - \beta$ all lie in $\map K {\alpha, \beta}$.
Hence all are algebraic over $K$.

Also:
$K \subseteq K^a$
so:

$K^a \ne \O$
By the Subfield Test:

$K^a \le L$ is a subfield of $L$.
$\blacksquare$





