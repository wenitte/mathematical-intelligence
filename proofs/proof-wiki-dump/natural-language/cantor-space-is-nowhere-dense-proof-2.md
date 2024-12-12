# 

Source: https://proofwiki.org/wiki/Cantor_Space_is_Nowhere_Dense/Proof_2

Theorem
Let $T = \struct {\CC, \tau_d}$ be the Cantor space.

Then $T$ is nowhere dense in $\closedint 0 1$.


Proof
Let $S_n$ and $C_n$ be as in the definition of the Cantor set as a limit of a decreasing sequence.
Then the length of every interval in $S_n$ is seen to be $\dfrac 1 {3^n} = 3^{-n}$.

Let $0 \le a < b \le 1$.
Then $\openint a b \subseteq \closedint 0 1$ is an open interval.
Let $n \in \N$ such that $3^{-n} < b - a$, so that the length of every interval in $S_n$ is $3^{-n} < b - a$.

Therefore, as the intervals in $S_n$ do not overlap, no interval of length $b - a$ is contained in $C_n = \ds \bigcup S_n$. 
Consequently, as $\CC \subseteq C_n$, no interval of length $b - a$ is contained in $\CC$.
Since the interval $\openint a b$ was of arbitrary length, there do not exist any open intervals in $\CC$.
Hence the result, by definition of nowhere dense.
$\blacksquare$





