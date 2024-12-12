# 

Source: https://proofwiki.org/wiki/Convergence_of_Sequence_in_Discrete_Space/Corollary

Corollary to Convergence of Sequence in Discrete Space
Let $T = \struct {S, \tau}$ be a discrete topological space.
Let $\sequence {x_n}_{n \mathop \in \N}$ be a sequence in $S$.
Let $\sequence {x'_n}_{n \mathop \in \N}$ be a sequence of distinct terms in $S$.

Then $\sequence {x'_n}_{n \mathop \in \N}$ is not convergent in $T$.


Proof
By the definition of a sequence of distinct terms:

$\forall x \in \sequence {x'_n}_{n \mathop \in \N}: r \ne s \implies x_r \ne x_s$
Hence trivially:

$\neg \exists k \in \N: \forall m \in \N: m > k: x'_m = x'_k$
The result follows from Convergence of Sequence in Discrete Space.
$\blacksquare$





