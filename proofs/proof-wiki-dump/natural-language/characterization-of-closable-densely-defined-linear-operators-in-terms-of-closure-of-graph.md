# 

Source: https://proofwiki.org/wiki/Characterization_of_Closable_Densely-Defined_Linear_Operators_in_terms_of_Closure_of_Graph



Theorem
Let $\struct {\HH, \innerprod \cdot \cdot}$ be a Hilbert space over $\C$.
Consider $\HH \times \HH$ with the direct product norm $\norm {\, \cdot \,}_{\HH \times \HH}$.
Let $\tuple {\map D T, T}$ be a densely-defined linear operator.
Let $\map \GG T$ be the graph of $T$.

Then $T$ is closable if and only if:

whenever $\tuple { {\mathbf 0}_X, y} \in \map \cl {\map \GG T}$, we have $y = {\mathbf 0}_Y$
where $\map \cl {\map \GG T}$ is the closure of $\map \GG T$ taken in $\struct {\HH \times \HH, \norm {\, \cdot \,}_{\HH \times \HH} }$.


Proof
Necessary Condition
Suppose that $T$ is closed.
Then $\map \cl {\map \GG T} = \map \GG T$ from Set is Closed iff Equals Topological Closure.
Then if $\tuple { {\mathbf 0}_X, y} \in \map \GG T$, we have $y = \map T { {\mathbf 0}_X}$ from the definition of the graph. 
So $y = {\mathbf 0}_Y$ since $T$ is linear.
$\Box$

Sufficient Condition
Suppose that:

whenever $\tuple { {\mathbf 0}_X, y} \in \map \cl {\map \GG T}$, we have $y = {\mathbf 0}_Y$.
Define:

$\map D S = \set {x \in \HH : \tuple {x, y} \in \map \cl {\map \GG T} \text { for some } y \in \HH}$
From Graph of Linear Transformation is Vector Subspace, $\map \GG T$ is a vector subspace of $\HH \times \HH$. 
From Closure of Subspace of Normed Vector Space is Subspace, $\map \cl {\map \GG T}$ is a vector subspace of $\HH \times \HH$.
From Linear Transformation defined from Graph, we can define $S : \map D S \to Y$ by:

$S x$ is the unique $y \in \HH$ such that $\tuple {x, y} \in \map \cl {\map \GG T}$
with $\map \GG S = \map \cl {\map \GG T}$.
Hence $\map \GG S$ is closed, so $S$ is a closed densely-defined operator.
For $x \in \map D T$, we have $\tuple {x, T x}, \tuple {x, S x} \in \map \cl {\map \GG T}$, hence we have $T x = S x$ by uniqueness.
So $S$ extends $T$ and is our desired map.
$\blacksquare$





