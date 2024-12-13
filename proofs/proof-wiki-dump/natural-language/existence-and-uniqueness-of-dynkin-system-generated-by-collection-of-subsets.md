# 

Source: https://proofwiki.org/wiki/Existence_and_Uniqueness_of_Dynkin_System_Generated_by_Collection_of_Subsets



Theorem
Let $X$ be a set.
Let $\GG \subseteq \powerset X$ be a collection of subsets of $X$.

Then $\map \delta \GG$, the Dynkin system generated by $\GG$, exists and is unique.


Proof
Existence
By Power Set is Dynkin System, there exists at least one Dynkin system containing $\GG$.
Next, let $\Bbb D$ be the collection of Dynkin systems containing $\GG$:

$\Bbb D := \set {\DD': \GG \subseteq \DD', \text{$\DD'$ is a Dynkin system} }$
By Intersection of Dynkin Systems is Dynkin System, $\DD := \bigcap \Bbb D$ is a Dynkin system.
Also, by Set Intersection Preserves Subsets:

$\GG \subseteq \DD$

Now let $\DD'$ be a Dynkin system containing $\GG$.
By construction of $\DD$, and Intersection is Subset: General Result:

$\DD \subseteq \DD'$
$\Box$


Uniqueness
Suppose both $\DD_1$ and $\DD_2$ are Dynkin systems generated by $\GG$.
Then property $(2)$ for these Dynkin systems implies both $\DD_1 \subseteq \DD_2$ and $\DD_2 \subseteq \DD_1$.
By definition of set equality:

$\DD_1 = \DD_2$
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $5.3$



