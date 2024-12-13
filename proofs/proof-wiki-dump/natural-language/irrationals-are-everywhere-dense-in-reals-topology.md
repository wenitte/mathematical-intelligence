# 

Source: https://proofwiki.org/wiki/Irrationals_are_Everywhere_Dense_in_Reals/Topology

Theorem
Let $T = \struct {\R, \tau}$ denote the real number line with the usual (Euclidean) topology.
Let $\R \setminus \Q$ be the set of irrational numbers.

Then $\R \setminus \Q$ is everywhere dense in $T$.


Proof
Let $x \in \R$.
Let $U \subseteq \R$ be an open set of $T$ such that $x \in U$.
From Basis for Euclidean Topology on Real Number Line, there exists an open interval $V_0 = \openint {x - \epsilon} {x + \epsilon} \subseteq U$ for some $\epsilon > 0$ such that $x \in V_0$.

From Between two Real Numbers exists Rational Number:

$\exists p \in \Q: p \in \openint {x - \epsilon} {x + \epsilon}$
Thus, we can define the open interval $V_1 = \openint x p \subseteq V_0$.
Similarly:

$\exists q \in \Q: q \in \openint x p$
We can then define an open interval $V_2 = \openint q p \subseteq V_1$.

We have $V_2 \subseteq V_1$, $V_1 \subseteq V_0$ and $V_0 \subseteq U$.
By successively applying Subset Relation is Transitive, it follows that $V_2 \subseteq U$.

Note that $x \notin V_2$, since $x < q < p < x + \epsilon$.
From Between two Rational Numbers exists Irrational Number, there exists $y \in \R \setminus \Q: y \in \openint q p = V_2$.
As $x \notin V_2$, it must be the case that $x \ne y$.

Since $V_2 \subseteq U$, $U$ is an open set of $T$ containing $x$ which also contains an element of $\R \setminus \Q$ other than $x$.
As $U$ is arbitrary, it follows that every open set of $T$ containing $x$ also contains an element of $\R \setminus \Q$ other than $x$.
That is, $x$ is by definition a limit point of $\R \setminus \Q$.
As $x$ is arbitrary, it follows that all elements of $\R$ are limit points of $\R \setminus \Q$.
The result follows from the definition of everywhere dense.
$\blacksquare$





