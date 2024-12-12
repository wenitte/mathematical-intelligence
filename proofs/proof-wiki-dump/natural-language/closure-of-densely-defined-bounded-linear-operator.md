# 

Source: https://proofwiki.org/wiki/Closure_of_Densely-Defined_Bounded_Linear_Operator

Theorem
Let $\struct {\HH, \innerprod \cdot \cdot}$ be a Hilbert space over $\C$. 
Let $\tuple {\map D T, T}$ be a densely-defined linear operator that is bounded.
Let $\widetilde T : \HH \to \HH$ be the bounded linear operator extending $T$, given by Bounded Linear Transformation to Banach Space has Unique Extension to Closure of Domain.

Then $\tuple {\map D T, T}$ is closable with closure $\tuple {\HH, \widetilde T}$.


Proof
From Characterization of Closable Densely-Defined Linear Operators in terms of Closure of Graph and Closable Densely-Defined Linear Operator has Smallest Closed Extension, to show that the closure of $\tuple {\map D T, T}$ is $\tuple {\HH, \widetilde T}$, it is enough to show that:

$\map \cl {\map \GG T} = \map \GG {\widetilde T}$
where the closure is understood in the direct product norm and $\GG$ denotes the graph of a linear operator.
Let $\tuple {x, y} \in \map \cl {\map \GG T}$.
Then there exists a convergent sequence $\sequence {\tuple {x_n, T x_n} }_{y \mathop \in \N}$ valued in $\map \GG T$ such that:

$\tuple {x_n, T x_n} \to \tuple {x, y}$
From Convergence in Direct Product Norm, we have:

$x_n \to x$ as $n \to \infty$
and:

$\widetilde T x_n = T x_n \to y$ as $n \to \infty$.
We cannot conclude that $T x_n \to T x$ since we do not necessarily have $x \in \map D T$. 
However, from the boundedness and global definition of $\widetilde T$ we do obtain $\widetilde T x_n \to \widetilde T x$ as $n \to \infty$.
From Convergent Sequence in Normed Vector Space has Unique Limit, we have $\widetilde T x = y$. 
Hence we have:

$\tuple {x, y} = \tuple {x, \widetilde T x} \in \map \GG {\widetilde T}$
So:

$\map \cl {\map \GG T} \subseteq \map \GG {\widetilde T}$.
Conversely let $\tuple {x, \widetilde T x} \in \map \GG {\widetilde T}$.
Since $\map D T$ is everywhere dense in $\HH$, there exists a sequence $\sequence {x_n}_{n \mathop \in \N}$ in $\map D T$ such that $x_n \to x$.
Then we have $T x_n = \widetilde T x_n \to \widetilde T x$. 
Hence from Convergence in Direct Product Norm we have:

$\tuple {x_n, T x_n} \to \tuple {x, \widetilde T x}$
Hence $\tuple {x, \widetilde T x}$ is the limit of a sequence in $\map \GG T$.
Hence:

$\map \GG {\widetilde T} \subseteq \map \cl {\map \GG T}$
We conclude:

$\map \cl {\map \GG T} = \map \GG {\widetilde T}$
Hence by Characterization of Closable Densely-Defined Linear Operators in terms of Closure of Graph and Closable Densely-Defined Linear Operator has Smallest Closed Extension, $\tuple {\map D T, T}$ is closable with closure $\tuple {\HH, \widetilde T}$.
$\blacksquare$





