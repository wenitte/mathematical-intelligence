# 

Source: https://proofwiki.org/wiki/Limit_Point_iff_Superfilter_Converges

Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $\FF$ be a filter on $S$.
Let $x \in S$.

Then $x$ is a limit point of $\FF$ if and only if there exists a superfilter $\FF'$ of $\FF$ on $S$ which converges to $x$.


Proof
Let $x$ be a limit point of $\FF$.
Define:

$\BB := \set {F \cap U : F \in \FF \text{ and } U \text{ is a neighborhood of } x}$
Then $\BB$ is filter basis by definition.
Let $\FF'$ be the corresponding generated filter.
By construction we have $\FF \subseteq \FF'$ and $U \in \FF'$ for every neighborhood $U$ of $x$.
Thus $\FF'$ converges to $x$.
$\Box$

Let there be a filter $\FF'$ on $X$ satisfying $\FF \subseteq \FF'$ which converges to $x$.
Let $U \subseteq X$ be a neighborhood of $x$.
Let $F \in \FF$.
Then:

$U, F \in \FF'$
and therefore:

$U \cap F \in \FF'$
Because $\O \notin \FF'$ it follows that:

$U \cap F \ne \O$
This holds for any neighborhood $U$ of $x$.
Hence $x$ is a limit point of $F$.
Therefore:

$x \in \overline F$
Because this holds for all $F \in \FF$:

$\ds x \in \bigcap_{F \mathop \in \FF} \overline F$
and so $x$ is a limit point of $\FF$.
$\blacksquare$





