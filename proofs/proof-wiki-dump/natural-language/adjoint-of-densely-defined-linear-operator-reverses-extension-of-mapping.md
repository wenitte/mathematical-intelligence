# 

Source: https://proofwiki.org/wiki/Adjoint_of_Densely-Defined_Linear_Operator_reverses_Extension_of_Mapping

Theorem
Let $\struct {\HH, \innerprod \cdot \cdot}$ be a Hilbert space over $\C$.
Let $\tuple {\map D T, T}$ and $\tuple {\map D S, S}$ be densely-defined linear operators such that:

$\tuple {\map D S, S}$ extends $\tuple {\map D T, T}$.
Let $\tuple {\map D {T^\ast}, T^\ast}$ and $\tuple {\map D {S^\ast}, S^\ast}$ be the adjoints of $\tuple {\map D T, T}$ and $\tuple {\map D S, S}$ respectively. 

Then $\tuple {\map D {T^\ast}, T^\ast}$ extends $\tuple {\map D {S^\ast}, S^\ast}$. 


Proof
We first show that $\map D {S^\ast} \subseteq \map D {T^\ast}$.
For each $y \in \HH$, define $f_{y, T} : \map D T \to \C$ by:

$\map {f_{y, T} } x = \innerprod {T x} y$ for each $x \in \map D T$.
Define $f_{y, S} : \map D S \to \C$ by:

$\map {f_{y, S} } x = \innerprod {S x} y$ for each $x \in \map D S$.
Let $y \in \map D {S^\ast}$.
Then $f_{y, S}$ is a bounded linear functional.
Since $\tuple {\map D S, S}$ extends $\tuple {\map D T, T}$, we have $S x = T x$ for each $x \in \map D T$. 
Hence we have:

$\map {f_{y, S} } x = \map {f_{y, T} } x$ for each $x \in \map D T$.
Hence $f_{y, T}$ is a bounded linear functional.
Hence $y \in \map D {T^\ast}$.
We have, by the construction of the adjoints, that $S^\ast y$ is the element of $\HH$ such that:

$\innerprod {S x} y = \innerprod x {S^\ast y}$ for each $x \in \map D S$.
In particular for $x \in \map D T$ we have:

$\innerprod {T x} y = \innerprod {S x} y = \innerprod x {S^\ast y}$
while we also have:

$\innerprod {T x} y = \innerprod x {T^\ast y}$
Since $S^\ast y$ is unique, we have $S^\ast y = T^\ast y$.
Hence $\tuple {\map D {T^\ast}, T^\ast}$ extends $\tuple {\map D {S^\ast}, S^\ast}$.
$\blacksquare$





