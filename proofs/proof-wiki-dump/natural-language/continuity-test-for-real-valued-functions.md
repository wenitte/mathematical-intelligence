# 

Source: https://proofwiki.org/wiki/Continuity_Test_for_Real-Valued_Functions



Theorem
Let $\struct{S, \tau}$ be a topological space.
Let $f: S \to \R$ be a real-valued function.
Let $x \in S$.
Then $f$ is continuous at $x$ if and only if:

$\forall \epsilon \in \R_{>0} : \exists U \in \tau : x \in U : \map {f^\to} U \subseteq \openint {\map f x - \epsilon} {\map f x + \epsilon}$


Corollary
Let $\struct{S, \tau}$ be a topological space.
Let $f: S \to \R$ be a real-valued function.
Then $f$ is everywhere continuous if and only if:

$\forall x \in S : \forall \epsilon \in \R_{>0} : \exists U \in \tau : x \in U : \map {f^\to} U \subseteq \openint {\map f x - \epsilon} {\map f x + \epsilon}$


Proof
Necessary Condition
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
$\Box$


Sufficient Condition
Let $f$ satisfy:

$\forall \epsilon \in \R_{>0} : \exists U \in \tau : x \in U : \map {f^\to} U \subseteq \openint {\map f x - \epsilon} {\map f x + \epsilon}$

Let $N$ be a neighborhood of $\map f x$.

By definition of a neighborhood of $\map f x$:

there exists $U$ such that $z \in U \subseteq N$
By definition of the topology induced by the Euclidean Metric on Real Number Line:

there exists an open $\epsilon$-ball $\map {B_\epsilon} {\map f x}$ such that $x \in \map {B_\epsilon} {\map f x} \subseteq U$
From Open Ball in Real Number Line is Open Interval:

$\map {B_\epsilon} {\map f x} = \openint {\map f x - \epsilon} {\map f x + \epsilon}$
Thus:

$\exists U \in \tau : x \in U : \map {f^\to} U \subseteq \openint {\map f x - \epsilon} {\map f x + \epsilon}$
From Set is Open iff Neighborhood of all its Points, $U$ is a neighborhood of $x$.

Since $N$ was an arbitrary neighborhood of $\map f x$ it follows that $f$ is continuous at $x$.
$\blacksquare$





