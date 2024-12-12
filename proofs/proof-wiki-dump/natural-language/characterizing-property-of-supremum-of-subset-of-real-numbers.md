# 

Source: https://proofwiki.org/wiki/Characterizing_Property_of_Supremum_of_Subset_of_Real_Numbers



Theorem
Let $S \subset \R$ be a non-empty subset of the real numbers.
Let $S$ be bounded above.
Let $\omega \in \R$.

The following statements are equivalent:

$(1): \quad \omega$ is the supremum of $S$
$(2): \quad \omega$ is an upper bound for $S$
and:
$\forall \epsilon \in \R_{> 0}$ there exists $x \in S$ with $x > \omega - \epsilon$


Proof
$(1)$ implies $(2)$
Let $\omega$ be the supremum of $S$.
Then by definition, $\omega$ is an upper bound for $S$.
Let $\epsilon > 0$.
Because $\omega - \epsilon < \omega$, it is not an upper bound for $S$.
Thus there exists $x\in S$ with $x > \omega - \epsilon$.
$\Box$


$(2)$ implies $(1)$
Let $\omega$ be an upper bound of $S$ such that $\forall \epsilon > 0$ there exists $x \in S$ with $x > \omega - \epsilon$.
Let $d \in \R$ be an upper bound of $S$.
We have to prove that $d \ge \omega$.
Aiming for a contradiction, suppose $d < \omega$.
Let $\epsilon = \omega - d > 0$.
Then there exists $x \in S$ such that $x > \omega - \left({\omega - d}\right) = d$.
But this contradicts our assumption that $d$ is an upper bound of $S$.
$\blacksquare$


Also see
Characterizing Property of Infimum of Subset of Real Numbers




