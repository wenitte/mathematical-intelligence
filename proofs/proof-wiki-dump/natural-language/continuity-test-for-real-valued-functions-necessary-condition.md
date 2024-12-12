# 

Source: https://proofwiki.org/wiki/Continuity_Test_for_Real-Valued_Functions/Necessary_Condition

Theorem
Let $\struct {S, \tau}$ be a topological space.
Let $f: S \to \R$ be a real-valued function.
Let $x \in S$.
Let $f$ be continuous at $x$

Then:

$\forall \epsilon \in \R_{>0} : \exists U \in \tau : x \in U : \map {f^\to} U \subseteq \openint {\map f x - \epsilon} {\map f x + \epsilon}$


Proof
Let $f$ be continuous at $x$.
Then by definition:

For every neighborhood $N$ of $\map f x$ in $\R$, there exists a neighborhood $M$ of $x$ in $S$ such that $\map {f^\to} M \subseteq N$.
From:

Open Ball in Real Number Line is Open Interval
Open Ball of Metric Space is Open Set
Set is Open iff Neighborhood of all its Points
it follows that:

For every $\epsilon \in \R_{>0}$, there exists a neighborhood $M$ of $x$ in $S$ such that $\map {f^\to} M \subseteq \openint {\map f x - \epsilon} {\map f x + \epsilon}$

By definition of a neighborhood in $\struct {S, \tau}$:

for all neighborhoods $M$ there exists $U \in \tau$ such that $z \in U \subseteq M$
Thus:

For every $\epsilon \in \R_{>0}$, there exists $U \in \tau$ with $x \in U$ such that $\map {f^\to} U \subseteq \openint {\map f x - \epsilon} {\map f x + \epsilon}$
$\blacksquare$





