# 

Source: https://proofwiki.org/wiki/Probability_of_Limit_of_Sequence_of_Events/Increasing

Theorem
Let $\struct {\Omega, \Sigma, \Pr}$ be a probability space.
Let $\sequence {A_n}_{n \mathop \in \N}$ be an increasing sequence of events.
Let $\ds A = \bigcup_{i \mathop \in \N} A_i$ be the limit of $\sequence {A_n}_{n \mathop \in \N}$.

Then:

$\ds \map \Pr A = \lim_{n \mathop \to \infty} \map \Pr {A_n}$


Proof
Let $\ds B_i = A_i \setminus A_{i - 1}$ for $i \in \N: i > 0$.
Then:

$A = A_0 \cup B_1 \cup B_2 \cup \cdots$
is the union of disjoint events in $\Sigma$.
By definition of probability measure:














\(\ds \map \Pr A\)

\(=\)







\(\ds \map \Pr {A_0} + \map \Pr {B_1} + \map \Pr {B_2} + \cdots\)




















\(\ds \)

\(=\)







\(\ds \map \Pr {A_0} + \lim_{n \mathop \to \infty} \sum_{k \mathop = 1}^n \map \Pr {B_k}\)









But we have:

$\map \Pr {B_i} = \map \Pr {A_i} - \map \Pr {A_{i - 1} }$ for $i \in \N: i > 0$.
So:

$\ds \map \Pr A = \map \Pr {A_0} + \lim_{n \mathop \to \infty} \sum_{k \mathop = 1}^n \paren {\map \Pr {A_i} - \map \Pr {A_{i - 1} } }$
The last sum telescopes.
Hence the result:

$\ds \map \Pr A = \lim_{n \mathop \to \infty} \map \Pr {A_n}$
$\blacksquare$


Sources
1986: Geoffrey Grimmett and Dominic Welsh: Probability: An Introduction ... (previous) ... (next): $\S 1.9$: Probability measures are continuous: Theorem $1 \ \text{C}$




