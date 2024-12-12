# 

Source: https://proofwiki.org/wiki/Error_Detection_Capability_of_Linear_Code

Theorem
Let $C$ be a linear code.
Let $C$ have a minimum distance $d$.

Then $C$ detects $d - 1$ or fewer transmission errors.


Proof
Let $C$ be a linear code whose master code is $V$.
Let $c \in C$ be a transmitted codeword.
Let $v$ be the received word from $c$.
By definition, $v$ is an element of $V$.

Let $v$ have a Hamming distance $f$ from $c$, where $f \le d - 1$.
Thus there have been $f$ transmission errors.
As $d$ is the minimum distance it is clear that $v$ cannot be a codeword of $C$.

Hence it can be understood that $C$ has detected that $v$ has as many as $d - 1$ transmission errors.
$\blacksquare$


Sources
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $6$: Error-correcting codes: Proposition $6.10$




