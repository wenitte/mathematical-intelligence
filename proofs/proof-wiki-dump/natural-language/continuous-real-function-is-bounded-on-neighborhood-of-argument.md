# 

Source: https://proofwiki.org/wiki/Continuous_Real_Function_is_Bounded_on_Neighborhood_of_Argument

Theorem
Let $A \subseteq \R$ be a subset of the real number line $\R$.
Let $f: A \to \R$ be a continuous real function on $A$.
Let $a \in A$.

Then there exists a bound:

$K_a = 1 + \size {\map f a}$ for $\size {\map f x}$
for all $x$ in some neighborhood:

$\openint {a - \map \delta a} {a + \map \delta a}$ of $a$
where $\map \delta a$ is a positive real constant which depends on $a$.


Proof
Let $a \in A$.
By definition of continuous real function, there exists $\delta \in \R_{>0}$ such that:

$\forall x \in A: 0 < \size {x - a} < \delta \implies \size {\map f x - \map f a} < \epsilon$
for all $\epsilon \in \R_{>0}$.
Putting $\epsilon = 1$, say, gives us:

$\forall x \in A: 0 < \size {x - a} < \delta \implies \size {\map f x - \map f a} < 1$
Hence:

$\size {\map f x} < 1 + \size {\map f a}$
for all $x \in \openint {a - \delta} {a + \delta}$
Here it is important to note that $\delta$ is dependent upon both $a$ and $f$, as well as $\epsilon$ (chosen here to be $1$).
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $5$: Compact spaces: $5.1$: Motivation: Step $3$




