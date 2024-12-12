# 

Source: https://proofwiki.org/wiki/Compact_Linear_Transformation_is_Bounded

Theorem
Let $\struct {\HH, \innerprod \cdot \cdot_\HH}$ and $\struct {\KK, \innerprod \cdot \cdot_\KK}$ be Hilbert spaces.
Let $\map {B_0} {\HH, \KK}$ be the space of compact linear transformations $\HH \to \KK$. 
Let $\map B {\HH, \KK}$ be the space of bounded linear transformations $\HH \to \KK$. 
Let $T \in \map {B_0} {\HH, \KK}$.

Then $T \in \map B {\HH, \KK}$.
That is:

$\map {B_0} {\HH, \KK} \subseteq \map B {\HH, \KK}$


Proof
Let $T : \HH \to \KK$ be a linear transformation.
Let $\norm \cdot_\HH$ be the inner product norm on $\HH$. 
Let $\norm \cdot_\KK$ be the inner product norm on $\KK$.
We show that:

if $T$ is not bounded, then it is not compact.
That is: 

if $T \not \in \map B {\HH, \KK}$, then $T \not \in \map {B_0} {\HH, \KK}$.
Then, we will obtain:

$\map {B_0} {\HH, \KK} \subseteq \map B {\HH, \KK}$

Suppose that $T$ is not bounded.
That is: 

there does not exist a real number $c > 0$ such that $\norm {T h}_\KK \le c \norm h_\HH$ for all $h \in \HH$.
Then:

for each $n \in \N$, there exists some $x_n \in \HH$ such that $\norm {T x_n}_\KK > n \norm {x_n}_\HH$.
Now define sequence $\sequence {h_n}$ by: 

$\ds h_n = \frac {x_n} {\norm {x_n} }$
for each $n \in \N$. 
We have: 

$\norm {h_n} = 1$
for each $n \in \N$, so $\sequence {h_n}$ is bounded. 
We also have: 

$\norm {T h_n} > n$
for each $n \in \N$. 
So, for any increasing sequence of positive integers $\sequence {n_j}$ we have:

$\norm {T h_{n_j} } > n_j$
Note that $n_j \to \infty$.  
So, for every subsequence $\sequence {h_{n_j} }$ of $\sequence {h_n}$ we have that: 

$\sequence {T h_{n_j} }$ is unbounded.
So from Convergent Sequence in Normed Vector Space is Bounded, we have that: 

$\sequence {T h_{n_j} }$ does not converge.
So:

the bounded sequence $\sequence {h_n}$ does not have a subsequence $\sequence {h_{n_j} }$ such that $\sequence {T h_{n_j} }$ converges.
So:

$T$ is not compact.
Hence the demand.
$\blacksquare$


Sources
1990: John B. Conway: A Course in Functional Analysis (2nd ed.) ... (previous) ... (next) $\text {II}.4.2 \ \text {(a)}$




