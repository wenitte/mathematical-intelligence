# 

Source: https://proofwiki.org/wiki/Noetherian_Domain_is_Factorization_Domain

Theorem
Let $R$ be a noetherian integral domain.
Then $R$ is a factorization domain.


Proof
Let $\FF$ be the set of ideals of $R$ of the form $x R$, with $x$ not a unit and such that $x$ cannot be decomposed in the form:

$x = u p_1 \dotsm p_r$
where $u$ is a unit and $p_1, \dotsc, p_r$ irreducible.
We show by contradiction that $\FF = \O$.

Aiming for a contradiction, suppose $\FF \ne \O$.
Since $R$ is noetherian, we can choose a maximal element $a R \in \FF$.
By construction, $a$ is not irreducible, so we can write:

$a = b c$
with $b, c$ non-units and not associates.
By the definition of associates in a commutative ring this means that $b R \subsetneq a R$ and $a R \subsetneq b R$.
Since $a R$ is assumed maximal, this means that $b R$ and $c R$ do not belong to $\FF$.
Therefore there exist units $u, v$ and irreducible elements $p_1, \dotsc, p_r, q_1, \dotsc, q_s$ such that:

$b = u p_1 \dotsm p_r$
and:

$c = v q_1 \dotsm q_s$
But this implies that:

$a = b c = \paren {u v} p_1 \cdots p_r \cdot q_1 \dotsm q_s$
This is a contradiction, since by hypothesis $a$ cannot be written in this form.
$\blacksquare$





