# 

Source: https://proofwiki.org/wiki/Characterizing_Property_of_Infimum_of_Subset_of_Real_Numbers



Theorem
Let $S \subset \R$ be a non-empty subset of the real numbers.
Let $S$ be bounded below.
Let $\alpha \in \R$.

The following statements are equivalent:

$(1): \quad \alpha$ is the infimum of $S$
$(2): \quad \alpha$ is a lower bound for $S$
and:
$\forall \epsilon \in \R_{> 0}$ there exists $x \in S$ with $x < \alpha + \epsilon$


Proof
$(1)$ implies $(2)$
Let $\alpha$ be the infimum of $S$.
Then by definition, $\alpha$ is a lower bound for $S$.
Let $\epsilon>0$.
Because $\alpha+\epsilon>\alpha$, it is not a lower bound for $S$.
Thus there exists $x\in S$ with $x < \alpha + \epsilon$.
$\Box$


$(2)$ implies $(1)$
Let $\alpha$ be a lower bound of $S$ such that $\forall \epsilon > 0$ there exists $x \in S$ with $x < \alpha + \epsilon$.
Let $d \in \R$ be a lower bound of $S$.
We have to prove that $d \le \alpha$.
Aiming for a contradiction, suppose $d > \alpha$.
Let $\epsilon = d - \alpha > 0$.
Then there exists $x \in S$ such that $x < \alpha + \left({d - \alpha}\right) = d$.
But this contradicts our assumption that $d$ is a lower bound of $S$.
$\blacksquare$


Also see
Characterizing Property of Supremum of Subset of Real Numbers




