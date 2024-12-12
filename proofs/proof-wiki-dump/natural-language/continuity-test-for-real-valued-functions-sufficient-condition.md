# 

Source: https://proofwiki.org/wiki/Continuity_Test_for_Real-Valued_Functions/Sufficient_Condition

Theorem
Let $\struct {S, \tau}$ be a topological space.
Let $f: S \to \R$ be a real-valued function.
Let $x \in S$.
Let $f$ satisfy:

$\forall \epsilon \in \R_{>0} : \exists U \in \tau : x \in U : \map {f^\to} U \subseteq \openint {\map f x - \epsilon} {\map f x + \epsilon}$

Then $f$ is continuous at $x$


Proof
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





