# 

Source: https://proofwiki.org/wiki/Principle_of_Open_Induction_for_Real_Numbers

Theorem
Let $a < b$ be real numbers.
Let $S$ be an open set of real numbers.
Suppose that, for every $x \in \closedint a b$ such that:

$\hointr a x \subseteq S$
it also holds that:

$x \in S$

Then, $\closedint a b \subseteq S$.


Proof
Aiming for a contradiction, suppose there exists some $x \in \closedint a b$ such that:

$x \notin S$
Let:

$T := \closedint a b \setminus S$
be the set of all such $x$.
By Set Difference is Subset:

$T \subseteq \closedint a b$
so by Subset of Bounded Below Set is Bounded Below:

$T$ is bounded below.
Since $T$ is non-empty by assumption, it follows from the Greatest Lower Bound Property that:

$T$ admits an infimum.

Let $x_0 := \inf T$ be the infimum of $T$.
By definition, $x_0$ is a lower bound of $T$.
Therefore:

$\forall x \in \closedint a b: x < x_0 \implies x \in S$
or equivalently:

$\hointr a {x_0} \subseteq S$
Hence, by hypothesis:

$x_0 \in S$

By definition of open set, there exists some $\epsilon > 0$ such that:

$\openint {x_0 - \epsilon} {x_0 + \epsilon} \subseteq S$
By Union of Subsets is Subset:

$\hointr a {x_0} \cup \openint {x_0 - \epsilon} {x_0 + \epsilon} = \hointr a {x_0 + \epsilon} \subseteq S$
Thus, by Set Difference with Subset is Superset of Set Difference:

$T = \paren {\closedint a b \setminus S} \subseteq \paren {\closedint a b \setminus \hointr a {x_0 + \epsilon}} = \closedint {x_0 + \epsilon} b$
Therefore, $x_0 + \epsilon$ is a lower bound of $T$.

Hence, by definition of infimum, it must hold that:

$x_0 + \epsilon \le x_0$
But that implies that:

$\epsilon \le 0$
contradicting the definition of $\epsilon$.
We are forced to conclude that our assumption:

$\exists x \in \closedint a b \setminus S$
was incorrect.

Therefore, by Proof by Contradiction:

$\closedint a b \subseteq S$
$\blacksquare$


Sources
2017: Assia Mahboubi: An induction principle over real numbers (Arch. Math. Logic Vol. 56: pp. 43 – 49)




