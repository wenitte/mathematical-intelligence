# 

Source: https://proofwiki.org/wiki/Intersection_is_Decreasing


It has been suggested that this page or section be merged into Intersection of Family is Subset of Intersection of Subset of Family.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mergeto}} from the code.
Theorem
Let $U$ be a set.
Let $\FF$ and $\GG$ be sets of subsets of $U$.

Then $\FF \subseteq \GG \implies \bigcap \GG \subseteq \bigcap \FF$, where by convention $\bigcap \O = U$.
That is, $\bigcap$ is a decreasing mapping from $\struct {\powerset {\powerset U}, \subseteq}$ to $\struct {\powerset U, \subseteq}$, where $\powerset U$ is the power set of $U$.


Proof
Let $\FF \subseteq \GG$.
Let $x \in \bigcap \GG$.
Then for each $S \in \FF$, $S \in \GG$.
By the definition of intersection, $x \in S$.
Since this holds for all $S \in \FF$, $x \in \bigcap \FF$.
Since this holds for all $ x \in \bigcap \GG$:

$\bigcap \GG \subseteq \bigcap \FF$
$\blacksquare$





