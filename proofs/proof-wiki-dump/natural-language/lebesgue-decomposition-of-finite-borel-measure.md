# 

Source: https://proofwiki.org/wiki/Lebesgue_Decomposition_of_Finite_Borel_Measure

Theorem
Let $\map \BB \R$ be the Borel $\sigma$-algebra of the real number line $\R$.
Let $\lambda$ be the Lebesgue measure on $\struct {\R, \map \BB \R}$. 
Let $\mu$ be a finite Borel measure on $\struct {\R, \map \BB \R}$.

Then there exists:

a discrete measure $\mu_{pp}$
a measure $\mu_{sc}$ that is continuous and mutually singular with respect to $\lambda$
a measure $\mu_{ac}$ that is absolutely continuous with respect to $\lambda$
such that $\mu = \mu_{pp} + \mu_{sc} + \mu_{ac}$. 


Proof
Let:

$C = \set {x \in \R : \map \mu {\set x} > 0}$
We argue that $C$ is countable.
Note that:

$\ds C = \bigcup_{n \mathop = 1}^\infty \set {x \in \R : \map \mu {\set x} > \frac 1 n}$
We show that each set:

$\ds C_n = \set {x \in \R : \map \mu {\set x} > \frac 1 n}$
is finite.
Aiming for a contradiction, suppose that $C_n$ is infinite for some $n$.
Let $D_n = \sequence {x_j}_{j \mathop \in \N}$ be a countably infinite subset of $C_n$.
Then we have:

$\ds \map \mu {D_n} = \sum_{j \mathop = 1}^\infty \map \mu {\set {x_j} } \ge \sum_{j \mathop = 1}^\infty \frac 1 n = \infty$
This contradicts that $\mu$ is finite.
Hence $C_n$ is finite for each $n \in \N$. 
Hence from Countable Union of Finite Sets is Countable, $C$ is countable.

Define:

$\map {\mu_{pp} } A = \map \mu {A \cap C}$
for each $A \in \Sigma$.
We have that:

$\map {\mu_{pp} } {C^c} = \map \mu \O = 0$
By Measure is Discrete iff Concentrated on Countable Set, it follows that $\mu_{pp}$ is discrete. 
Now consider the intersection measure $\mu_{C^c}$.
From Lebesgue Decomposition Theorem, there exists finite measures $\mu_{ac}$ and $\mu_{sc}$ such that:

$(1) \quad$ $\mu_{ac}$ is absolutely continuous with respect to $\lambda$
$(2) \quad$ $\mu_{sc}$ and $\lambda$ are mutually singular
$(3) \quad$ $\mu_{C^c} = \mu_{sc} + \mu_{ac}$.
We show that $\mu_{sc}$ is continuous.
Let $x \in \R$.
If $x \in C$ then we have $\set x \cap C^c = \O$ and $\map {\mu_{ac} } {\set x} = 0$ and hence $\map {\mu_{sc} } {\set x} = \map \mu \O = 0$. 
If $x \not \in C$, then we have that $\set x \cap C^c = \set x$ and $\map \mu {\set x} = \map {\mu_{ac} } {\set x} = 0$. 
Hence $\map {\mu_{sc} } {\set x} = \map \mu \O = 0$. 
Hence $\map {\mu_{sc} } {\set x} = 0$ for each $x \in \R$. 
So $\mu_{sc}$ is continuous.
We have therefore obtained the desired decomposition.
$\blacksquare$


Sources
2013: Donald L. Cohn: Measure Theory (2nd ed.) ... (previous) ... (next): $4.3$: Singularity




