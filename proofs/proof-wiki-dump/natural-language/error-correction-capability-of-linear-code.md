# 

Source: https://proofwiki.org/wiki/Error_Correction_Capability_of_Linear_Code

Theorem
Let $C$ be a linear code.
Let $C$ have a minimum distance $d$.

Then $C$ corrects $e$ transmission errors for all $e$ such that $2 e + 1 \le d$.


Proof
Let $C$ be a linear code whose master code is $V$.
Let $c \in C$ be a transmitted codeword.
Let $v$ be the received word from $c$.
By definition, $v$ is an element of $V$.

Let $v$ have a Hamming distance $e$ from $c$, where $2 e + 1 \le d$.
Thus there have been $e$ transmission errors.

Aiming for a contradiction, suppose $c_1$ is a codeword of $C$, distinct from $c$, such that $\map d {v, c_1} \le e$.
Then:














\(\ds \map d {c, c_1}\)

\(\le\)







\(\ds \map d {c, v} + \map d {v, c_1}\)




















\(\ds \)

\(\le\)







\(\ds e + e\)




















\(\ds \)

\(<\)







\(\ds d\)










So $c_1$ has a Hamming distance from $c$ less than $d$.
But $C$ has a minimum distance $d$.
Thus $c_1$ cannot be a codeword of $C$.
From this contradiction it follows that there is no codeword of $C$ closer to $v$ than $c$.

Hence there is a unique codeword of $C$ which has the smallest Hamming distance from $v$.

Hence it can be understood that $C$ has corrected the transmission errors of $v$.
$\blacksquare$


Sources
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $6$: Error-correcting codes: Proposition $6.10$
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Hamming distance (Hamming metric)




